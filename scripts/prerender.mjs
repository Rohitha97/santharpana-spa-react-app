/**
 * Turns the built SPA into one real HTML file per route.
 *
 * Before this existed, every URL served the same 4 KB shell: the same <title>,
 * the same description, and a canonical pointing at the homepage — which is an
 * instruction to Google to drop the page and index "/" instead. So /services,
 * /about and /contact were all excluded from search by the site itself, and the
 * body was an empty <div id="root"> that only a JavaScript-executing crawler
 * could read at all.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle):
 *
 *   dist/index.html                      <- the template, with hashed asset URLs
 *   dist-ssr/entry-server.js             <- render(url) => finished HTML string
 *
 * and writes dist/<route>/index.html for every entry in src/config/seo.ts, plus
 * dist/404.html, dist/robots.txt and dist/sitemap.xml.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
// pathToFileURL matters on Windows: import() rejects a bare "D:\..." path.
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(root, "dist");

const { render, prerenderPages, pages, schemaFor, site } = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);

const template = await readFile(path.join(DIST, "index.html"), "utf8");

const SEO_START = "<!--seo:start-->";
const SEO_END = "<!--seo:end-->";
const APP_MARKER = "<!--app-html-->";

if (!template.includes(SEO_START) || !template.includes(APP_MARKER)) {
  throw new Error(
    "dist/index.html is missing the prerender markers. Did index.html get edited?"
  );
}

/** Escapes a string for use inside a double-quoted HTML attribute. */
const attr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Escapes </script> so a description containing markup cannot break out. */
const jsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

function headFor(meta) {
  const canonical = `${site.url}${meta.path === "/" ? "/" : meta.path}`;
  const lines = [
    `<title>${attr(meta.title)}</title>`,
    `<meta name="description" content="${attr(meta.description)}" />`,
    `<link rel="canonical" href="${attr(canonical)}" />`,
    meta.noindex ? `<meta name="robots" content="noindex, follow" />` : null,
    ``,
    `<meta property="og:type" content="${meta.path === "/" ? "website" : "article"}" />`,
    `<meta property="og:site_name" content="${attr(site.name)}" />`,
    `<meta property="og:title" content="${attr(meta.title)}" />`,
    `<meta property="og:description" content="${attr(meta.description)}" />`,
    `<meta property="og:url" content="${attr(canonical)}" />`,
    `<meta property="og:image" content="${attr(meta.image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="en_US" />`,
    ``,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(meta.title)}" />`,
    `<meta name="twitter:description" content="${attr(meta.description)}" />`,
    `<meta name="twitter:image" content="${attr(meta.image)}" />`,
    ``,
    // Only .banner (the homepage hero) uses this image. Preloading it on inner
    // pages downloads 51 KB that nothing ever renders.
    meta.path === "/"
      ? `<link rel="preload" as="image" href="/images/optimized/bg/slider-bg-1-jpg.webp" fetchpriority="high" />`
      : null,
    ``,
    `<script type="application/ld+json" data-seo="page">${jsonLd(schemaFor(meta.path))}</script>`,
  ];
  return lines.filter((line) => line !== null).join("\n  ");
}

/** dist/index.html for "/", dist/services/index.html for "/services", etc. */
function outputPath(routePath) {
  if (routePath === "/") return path.join(DIST, "index.html");
  if (routePath === "/404") return path.join(DIST, "404.html");
  return path.join(DIST, routePath.slice(1), "index.html");
}

const seoBlockPattern = new RegExp(
  `${SEO_START}[\\s\\S]*?${SEO_END}`,
  ""
);

let count = 0;
for (const meta of prerenderPages) {
  const appHtml = await render(meta.path);

  // Replacements are passed as functions, not strings. A string replacement
  // interprets $$, $&, $` and $' as substitution patterns, which silently
  // rewrote priceRange "$$" to "$" in the JSON-LD and would mangle any page
  // copy containing those sequences.
  const html = template
    .replace(seoBlockPattern, () => `${SEO_START}\n  ${headFor(meta)}\n  ${SEO_END}`)
    .replace(APP_MARKER, () => appHtml);

  const file = outputPath(meta.path);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");

  count += 1;
  console.log(`  ${meta.path.padEnd(52)} -> ${path.relative(root, file)}`);
}

// ── sitemap.xml ────────────────────────────────────────────────────────────
// Both of these used to return the React app with a 200, so crawlers asking for
// directives got HTML instead and neither file did anything.
const today = new Date().toISOString().slice(0, 10);
const sitemap = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...pages
    .filter((page) => !page.noindex)
    .map((page) =>
      [
        `  <url>`,
        `    <loc>${site.url}${page.path === "/" ? "/" : page.path}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        page.changefreq ? `    <changefreq>${page.changefreq}</changefreq>` : null,
        page.priority ? `    <priority>${page.priority.toFixed(1)}</priority>` : null,
        `  </url>`,
      ]
        .filter(Boolean)
        .join("\n")
    ),
  `</urlset>`,
  ``,
].join("\n");

await writeFile(path.join(DIST, "sitemap.xml"), sitemap, "utf8");

// ── robots.txt ─────────────────────────────────────────────────────────────
const robots = [
  `User-agent: *`,
  `Allow: /`,
  ``,
  `Sitemap: ${site.url}/sitemap.xml`,
  ``,
].join("\n");

await writeFile(path.join(DIST, "robots.txt"), robots, "utf8");

const indexable = pages.filter((page) => !page.noindex).length;
console.log(
  `\n${count} pages prerendered. sitemap.xml lists ${indexable} URLs; robots.txt written.`
);

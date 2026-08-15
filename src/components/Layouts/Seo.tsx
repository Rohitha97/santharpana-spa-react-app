import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resolveMeta, schemaFor } from "../../config/seo";
import { site } from "../../config/site";

/**
 * Keeps the document head correct during client-side navigation.
 *
 * The static HTML written by scripts/prerender.mjs is what crawlers read — this
 * component exists for the visitor who lands on the homepage and clicks through
 * to a treatment, where no new document is ever loaded. Without it the browser
 * tab, the canonical and the share preview would all still describe the page
 * they arrived on.
 *
 * Everything runs in an effect, so it is a no-op during server rendering.
 */

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = resolveMeta(pathname);
    const canonical = `${site.url}${meta.path === "/" ? "/" : meta.path}`;

    document.title = meta.title;

    setMeta('meta[name="description"]', "name", "description", meta.description);
    setMeta('meta[property="og:title"]', "property", "og:title", meta.title);
    setMeta('meta[property="og:description"]', "property", "og:description", meta.description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:image"]', "property", "og:image", meta.image);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", meta.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", meta.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", meta.image);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    // Unknown URLs render the 404 page client-side. Tell crawlers not to keep it.
    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (meta.noindex) {
      setMeta('meta[name="robots"]', "name", "robots", "noindex, follow");
    } else if (robots) {
      robots.remove();
    }

    // Swap the page-level structured data to match the route. Tagged with a
    // data attribute so we only ever replace the block we wrote.
    document.head.querySelectorAll('script[data-seo="page"]').forEach((node) => node.remove());
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seo = "page";
    script.textContent = JSON.stringify(schemaFor(meta.path));
    document.head.appendChild(script);
  }, [pathname]);

  return null;
}

export default Seo;

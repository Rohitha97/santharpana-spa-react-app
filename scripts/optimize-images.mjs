/**
 * Generates web-sized WebP versions of everything in public/images.
 *
 * Originals are left untouched — output lands in public/images/optimized/,
 * mirroring the source folder structure. Re-running is cheap: a file is skipped
 * when its .webp is newer than the source.
 *
 *   npm run optimize:images
 */
import { readdir, stat, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "public", "images");
const OUT = path.join(SRC, "optimized");

/** Longest-edge cap per folder — nothing is displayed larger than these. */
const MAX_EDGE = {
  bg: 1920, // full-bleed hero backgrounds
  gallery: 800, // 4-up grid thumbnails
  service: 800, // service cards
  about: 900, // about collage
  default: 1200,
};

/** Per-file caps for images whose display size is far smaller than their folder default. */
const FILE_MAX_EDGE = {
  "logo.png": 256, // never rendered above ~90px, but 2x for retina
};

const QUALITY = 72;
const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (full === OUT) continue; // never recurse into our own output
      yield* walk(full);
    } else if (EXTS.has(path.extname(entry.name).toLowerCase())) {
      yield full;
    }
  }
}

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

/**
 * "about/img-3.jpg" -> "about/img-3-jpg.webp"
 *
 * The extension is folded into the name rather than replaced, because
 * about/img-3.jpg and about/img-3.webp are two different photos that would
 * otherwise both write to about/img-3.webp and clobber each other.
 * Must stay in sync with img() in src/utils/image.ts.
 */
function outputName(rel) {
  const ext = path.extname(rel).slice(1).toLowerCase();
  return `${rel.slice(0, -(ext.length + 1))}-${ext}.webp`;
}

let totalBefore = 0;
let totalAfter = 0;
let converted = 0;
let skipped = 0;

/** Guards against two sources ever writing to the same optimized file. */
const claimed = new Map();

for await (const src of walk(SRC)) {
  const rel = path.relative(SRC, src);
  const dest = path.join(OUT, outputName(rel));

  const previous = claimed.get(dest);
  if (previous) {
    throw new Error(`${rel} and ${previous} both map to ${path.relative(OUT, dest)}`);
  }
  claimed.set(dest, rel);

  await mkdir(path.dirname(dest), { recursive: true });

  const srcStat = await stat(src);

  if (existsSync(dest) && (await stat(dest)).mtimeMs > srcStat.mtimeMs) {
    skipped += 1;
    continue;
  }

  const bucket = rel.split(path.sep)[0];
  const maxEdge = FILE_MAX_EDGE[rel] ?? MAX_EDGE[bucket] ?? MAX_EDGE.default;

  const info = await sharp(src)
    .rotate() // honour EXIF orientation before resizing
    .resize({ width: maxEdge, height: maxEdge, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(dest);

  totalBefore += srcStat.size;
  totalAfter += info.size;
  converted += 1;

  const saved = ((1 - info.size / srcStat.size) * 100).toFixed(0);
  console.log(
    `${rel.padEnd(34)} ${kb(srcStat.size).padStart(9)} -> ${kb(info.size).padStart(8)}  (-${saved}%)`
  );
}

console.log(
  `\n${converted} converted, ${skipped} already current.` +
    (converted
      ? `  ${kb(totalBefore)} -> ${kb(totalAfter)} ` +
        `(-${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`
      : "")
);
console.log(`Output: ${path.relative(root, OUT)}`);

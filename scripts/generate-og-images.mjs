/**
 * Builds the 1200x630 social preview images used by og:image / twitter:image.
 *
 * The originals in public/images are far too large to serve as share previews —
 * the hero alone is 3 MB, and WhatsApp (which is how most Santharpana links get
 * shared) silently drops previews for images that take too long to fetch. These
 * are cropped to the 1.91:1 ratio every platform expects so nothing important
 * gets cut off by the platform's own crop.
 *
 *   npm run generate:og
 *
 * Output lands in public/og/ and is committed, so a deploy never depends on
 * this script having been run on the build machine.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "public", "images");
const OUT = path.join(root, "public", "og");

const WIDTH = 1200;
const HEIGHT = 630;
const QUALITY = 80;

/**
 * source path (relative to public/images) -> output name (without extension).
 * Service entries must stay in sync with the slugs in src/DataModel/ServicesModel.ts.
 */
const IMAGES = {
  "bg/slider-bg-1.jpg": "default",
  "service/service-1.jpg": "ayurvedic-full-body-massage",
  "service/service-6.jpg": "full-body-massage-with-shirodhara",
  "service/service-4.jpg": "full-body-massage-with-steam-bath",
  "service/service-7.jpg": "full-body-massage-with-pinda-sweda",
  "service/facial.jpg": "full-body-massage-with-facial",
  "service/service-2.jpg": "full-body-massage-with-shirodhara-and-pinda-sweda",
  "service/all.webp": "complete-ayurvedic-treatment-package",
};

await mkdir(OUT, { recursive: true });

let written = 0;
for (const [source, name] of Object.entries(IMAGES)) {
  const from = path.join(SRC, source);
  const to = path.join(OUT, `${name}.jpg`);

  await sharp(from)
    // `cover` + centre keeps the subject rather than letterboxing it, which is
    // what platforms do anyway if the aspect ratio does not match.
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(to);

  written += 1;
  console.log(`  ${source} -> og/${name}.jpg`);
}

console.log(`\n${written} social preview images written to public/og/`);

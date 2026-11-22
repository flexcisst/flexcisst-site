// Converts the Figma exports in raw/images into optimised AVIF, WebP and JPG
// at two widths. Run with `npm run images` after replacing anything in raw/.
import sharp from "sharp";
import { readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { join, parse } from "node:path";

const SRC = "raw/images";
const OUT = "public/images";
mkdirSync(OUT, { recursive: true });

const manifest = {};
for (const file of readdirSync(SRC)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;
  const { name } = parse(file);
  const img = sharp(join(SRC, file));
  const { width, height } = await img.metadata();
  const widths = [...new Set([Math.min(width, 480), width])];
  for (const w of widths) {
    const r = sharp(join(SRC, file)).resize({ width: w });
    await r.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(join(OUT, `${name}-${w}.jpg`));
    await r.clone().webp({ quality: 78 }).toFile(join(OUT, `${name}-${w}.webp`));
    await r.clone().avif({ quality: 55 }).toFile(join(OUT, `${name}-${w}.avif`));
  }
  manifest[`/images/${name}.jpg`] = { name, width, height, widths };
  console.log(`${name}: ${width}×${height} → ${widths.join(", ")}`);
}
writeFileSync("src/lib/images.json", JSON.stringify(manifest, null, 2) + "\n");

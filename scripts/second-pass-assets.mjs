import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
const additions = [
  [
    'kohe-class-750',
    'https://kohekgoc.com/uploads/product_Images/73f068b0-c597-47d8-aeff-c79f27457d18_Cola%20750%20ML%203.png.png',
    'Kohe',
    'Kohe K-Class Pro 750 vacuum steel flask',
  ],
  [
    'ocean-identity',
    'https://www.ocean-glassware.com/wp-content/themes/ocean/assets/images/OceanLogo.png',
    'Ocean',
    'Ocean',
  ],
  [
    'kolorr-identity',
    'https://kolorr.com/cdn/shop/files/Kolorr_Logo_TM_e534fa98-9165-4ba8-8eb2-a3dcee1d99a6.png?v=1732692175&width=544',
    'Kolorr',
    'Kolorr',
  ],
  ['kohe-identity', 'https://kohekgoc.com/images/vector_smart_object_8.png', 'Kohe', 'Kohe'],
];
const manifest = JSON.parse(await readFile('src/data/assets.json', 'utf8'));
for (const [id, sourceUrl, owner, alt] of additions) {
  const response = await fetch(sourceUrl, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`${id}: ${response.status}`);
  await sharp(Buffer.from(await response.arrayBuffer()))
    .resize({ width: 550, withoutEnlargement: true })
    .webp({ quality: 95 })
    .toFile(`public/brands/${id}.webp`);
  const asset = {
    id,
    src: `/brands/${id}.webp`,
    alt,
    sourceUrl,
    owner,
    permission: 'owner-confirmed',
    permissionDate: '2026-10-03',
  };
  const index = manifest.findIndex((a) => a.id === id);
  if (index >= 0) manifest[index] = asset;
  else manifest.push(asset);
  console.log(id);
}
await writeFile('src/data/assets.json', JSON.stringify(manifest, null, 2) + '\n');
const response = await fetch(
  'https://kohekgoc.com/vacuum-steel-flask/k-class-pro-750-k-class-pro-750',
  { signal: AbortSignal.timeout(30000) },
);
if (response.ok) {
  const html = await response.text();
  await writeFile('docs/research/raw/kohe-750.html', html);
  const clean = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
  const start = clean.indexOf('SKU:');
  console.log(clean.slice(start, start + 1200));
  console.log(html.match(/<img[^>]+id="mainProductImage"[^>]+>/)?.[0]);
}

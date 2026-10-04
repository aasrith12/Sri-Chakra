import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
const ocean = 'https://www.ocean-glassware.com/';
const entries = [
  [
    'ocean-home',
    `${ocean}wp-content/uploads/2019/01/HomeUse-edit.jpg`,
    'Ocean',
    'Ocean glassware arranged for dining at home',
  ],
  [
    'ocean-hospitality',
    `${ocean}wp-content/uploads/2018/12/Banner-for-Horeca-mobile-page.jpg`,
    'Ocean',
    'Ocean glassware in a hospitality setting',
  ],
  [
    'ocean-connexion',
    `${ocean}wp-content/uploads/2020/02/banner-connexion-2020.jpg`,
    'Ocean',
    'Ocean Connexion glassware collection',
  ],
  [
    'ocean-special',
    `${ocean}wp-content/uploads/2018/12/special-1.jpg`,
    'Ocean',
    'A selection of Ocean glassware',
  ],
  [
    'ocean-cocktail',
    `${ocean}wp-content/uploads/2018/11/1527C07-CONNEXION-COCKTAIL-1.jpg`,
    'Ocean',
    'Ocean Connexion Cocktail glass',
  ],
  [
    'ocean-gin',
    `${ocean}wp-content/uploads/2020/02/Connexion-Gin-Cocktail.jpg`,
    'Ocean',
    'Ocean Connexion Gin Cocktail glass',
  ],
  [
    'ocean-hiball',
    `${ocean}wp-content/uploads/2018/10/1S14410-SUPER-STRONG-PREMIER-Hi-Ball.jpg`,
    'Ocean',
    'Ocean Super Strong Premier Hi Ball glass',
  ],
  [
    'ocean-logo',
    `${ocean}wp-content/themes/ocean/assets/images/OceanLogo-2025.png`,
    'Ocean',
    'Ocean',
  ],
  [
    'kohe-class',
    'https://kohekgoc.com/uploads/product_Images/15e2ef85-4a36-4a47-99a3-b94254c927a0_Cola%201000%20ML.1.png.png',
    'Kohe',
    'Kohe K-Class Pro 1000 flask; colour shown for reference',
  ],
  [
    'kolorr-claro',
    'https://kolorr.com/cdn/shop/files/file_-_2024-10-28T230341.731_f997f295-8622-4efd-b2d8-c3a4075dbd34.jpg?v=1731925900&width=1300',
    'Kolorr',
    'Transparent Kolorr Claro storage basket with lid',
  ],
  [
    'kolorr-lifestyle',
    'https://kolorr.com/cdn/shop/files/PET_Baskets_with_lid_11L_Pack_of_6_-_Trasparent-02_723c6ceb-97c3-4f16-87fa-6b1ed8799ab1.jpg?v=1731925900&width=1300',
    'Kolorr',
    'Kolorr Claro baskets used for household storage',
  ],
];
await mkdir('public/brands', { recursive: true });
const manifest = [];
for (const [id, sourceUrl, owner, alt] of entries) {
  const response = await fetch(sourceUrl, { signal: AbortSignal.timeout(45000) });
  if (!response.ok) throw new Error(`${id}: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  const output = await sharp(buffer)
    .resize({ width: id.includes('logo') ? 400 : 1600, withoutEnlargement: true })
    .webp({ quality: 86 })
    .toBuffer();
  await writeFile(`public/brands/${id}.webp`, output);
  manifest.push({
    id,
    src: `/brands/${id}.webp`,
    alt,
    sourceUrl,
    owner,
    permission: 'owner-confirmed',
    permissionDate: '2026-10-03',
  });
  console.log(id, Math.round(output.length / 1024), 'KB');
}
await writeFile('src/data/assets.json', JSON.stringify(manifest, null, 2) + '\n');

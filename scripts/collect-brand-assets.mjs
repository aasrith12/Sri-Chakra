import { mkdir, writeFile } from 'node:fs/promises';
const pages = {
  ocean: 'https://www.ocean-glassware.com/',
  oceanProducts: 'https://www.ocean-glassware.com/category/all-products/',
  oceanCocktail: 'https://www.ocean-glassware.com/products/connexion-cocktail-all/',
  kohe: 'https://kohekgoc.com/vacuum-steel-flask/k-class-pro-1000-k-class-pro-1000',
  kolorr: 'https://kolorr.com/products/transparent-storage-basket-1',
};
await mkdir('docs/research/raw', { recursive: true });
for (const [name, url] of Object.entries(pages)) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(45000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    await writeFile(`docs/research/raw/${name}.html`, html);
    const images = [...html.matchAll(/<img\b[^>]*>/gi)]
      .map((m) => m[0])
      .filter((x) => !/(facebook|pixel|tracking)/i.test(x));
    await writeFile(`docs/research/raw/${name}-images.json`, JSON.stringify(images, null, 2));
    console.log(name, images.length, 'images');
  } catch (error) {
    console.log(name, error.message);
  }
}

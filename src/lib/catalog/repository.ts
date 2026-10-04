import {
  brands,
  categories,
  collections,
  evidence,
  offers,
  products,
  variants,
} from '@/data/catalog';
export { brands, categories, collections, evidence, offers, products, variants };
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getBrand = (id: string) => brands.find((b) => b.id === id)!;
export const getVariants = (productId: string) => variants.filter((v) => v.productId === productId);
export const getCollection = (id: string) => collections.find((c) => c.id === id)!;
const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
export function listProducts({
  q = '',
  brand = '',
  category = '',
}: { q?: string; brand?: string; category?: string } = {}) {
  const terms = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return products.filter((p) => {
    if (brand && p.brandId !== brand) return false;
    if (category && !p.categoryIds.includes(category)) return false;
    const fields = [
      p.name,
      getBrand(p.brandId).name,
      getCollection(p.collectionId).name,
      ...p.aliases,
      ...getVariants(p.id).flatMap((v) => [v.manufacturerSku ?? '', ...Object.values(v.options)]),
    ];
    return terms.every((term) =>
      fields.some((field) => normalize(field).includes(normalize(term))),
    );
  });
}

import { enquiryLineSchema, type EnquiryLine } from '@/lib/catalog/schema';
import { products, variants, getBrand } from '@/lib/catalog/repository';
export const QUOTE_STORAGE_KEY = 'sri-chakra-quote-v1';
export function buildWhatsAppUrl(phone: string, text: string): string | null {
  if (!/^\d{10,15}$/.test(phone) || !text.trim() || text.length > 3500) return null;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
export function restoreLines(input: unknown): EnquiryLine[] {
  if (!Array.isArray(input)) return [];
  const safe = new Map<string, EnquiryLine>();
  for (const item of input.slice(0, 100)) {
    const parsed = enquiryLineSchema.safeParse(item);
    if (parsed.success && variants.some((v) => v.id === parsed.data.variantId))
      safe.set(parsed.data.variantId, parsed.data);
  }
  return [...safe.values()];
}
export function formatRequirement(lines: EnquiryLine[], notes = '') {
  const details = lines.map((line, index) => {
    const variant = variants.find((v) => v.id === line.variantId)!;
    const product = products.find((p) => p.id === variant.productId)!;
    return `${index + 1}. ${getBrand(product.brandId).name} ${product.name}\n   ${Object.values(variant.options).join(' · ')}${variant.manufacturerSku ? ` | SKU: ${variant.manufacturerSku}` : ''}\n   Requested: ${line.quantity} ${line.quantity === 1 ? 'piece' : 'pieces'} (supply pack to be confirmed)`;
  });
  return [
    'Hello Sri Chakra Agencies,',
    '',
    'Please share pricing and availability for my requirement:',
    '',
    ...details,
    ...(notes.trim() ? ['', `Additional requirement: ${notes.trim()}`] : []),
    '',
    'Please confirm available colours, supply packs, minimum order quantities and lead times.',
  ].join('\n');
}

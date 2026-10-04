import { z } from 'zod';

export const evidenceSchema = z.object({
  id: z.string(),
  sourceUrl: z.url().nullable(),
  sourceKind: z.enum(['manufacturer', 'owner']),
  reviewedAt: z.iso.date(),
  facts: z.array(z.string()),
  status: z.enum(['source-reviewed', 'owner-supplied', 'pending-document']),
});
export const assetSchema = z.object({
  id: z.string(),
  src: z.string(),
  alt: z.string(),
  sourceUrl: z.url(),
  owner: z.string(),
  permission: z.literal('owner-confirmed'),
  permissionDate: z.iso.date(),
});
export const brandSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  officialUrl: z.url(),
  displayGroup: z.enum(['hospitality', 'institutional']),
});
export const categorySchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string(),
});
export const collectionSchema = z.object({ id: z.string(), brandId: z.string(), name: z.string() });
export const specificationSchema = z.object({
  key: z.string(),
  label: z.string(),
  value: z.union([z.string(), z.number(), z.boolean()]),
  unit: z.string().nullable(),
  evidenceId: z.string(),
});
export const variantSchema = z.object({
  id: z.string(),
  assetId: z.string().optional(),
  evidenceId: z.string().optional(),
  productId: z.string(),
  manufacturerSku: z.string().nullable(),
  options: z.record(z.string(), z.string()),
  specifications: z.array(specificationSchema),
});
export const offerSchema = z.object({
  id: z.string(),
  variantId: z.string(),
  enquiryEnabled: z.boolean(),
  saleUnit: z.enum(['piece', 'pack', 'case']).nullable(),
  unitsPerPack: z.number().int().positive().nullable(),
  minimumQuantity: z.number().int().positive().nullable(),
  increment: z.number().int().positive().nullable(),
  availability: z.enum(['on-request', 'available', 'unavailable']),
  priceMode: z.literal('on-request'),
});
export const productSchema = z.object({
  id: z.string(),
  slug: z.string(),
  brandId: z.string(),
  categoryIds: z.array(z.string()),
  collectionId: z.string(),
  name: z.string(),
  description: z.string(),
  aliases: z.array(z.string()),
  suitableFor: z.array(z.string()),
  assetId: z.string().nullable(),
  evidenceId: z.string(),
  featured: z.boolean(),
  publicationState: z.literal('review-sample'),
});
export const enquiryLineSchema = z.object({
  variantId: z.string(),
  quantity: z.number().int().min(1).max(10000),
  requestedUnit: z.literal('piece'),
});
export type Product = z.infer<typeof productSchema>;
export type Variant = z.infer<typeof variantSchema>;
export type EnquiryLine = z.infer<typeof enquiryLineSchema>;

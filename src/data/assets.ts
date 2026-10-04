import { assetSchema } from '@/lib/catalog/schema';
import { z } from 'zod';
// Every asset is permissioned by the owner in this conversation on 3 October 2026.
// Exact source URLs are populated by scripts/download-assets.mjs in assets.json.
import manifest from './assets.json';
export const assets = z.array(assetSchema).parse(manifest);
export const getAsset = (id: string | null) => assets.find((asset) => asset.id === id);

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  listProducts,
  products,
  variants,
  brands,
  categories,
  collections,
  evidence,
  offers,
} from '../src/lib/catalog/repository';
import { restoreLines, formatRequirement, buildWhatsAppUrl } from '../src/lib/enquiry';
import { assets } from '../src/data/assets';
import { existsSync } from 'node:fs';

test('professional buyers can find punctuation-insensitive SKUs, collections and aliases', () => {
  assert.equal(listProducts({ q: '3527c0702g00012' })[0]?.id, 'ocean-cocktail');
  assert.equal(listProducts({ q: '1527D21' })[0]?.id, 'ocean-gin');
  assert.equal(listProducts({ q: 'ocean connexion' }).length, 2);
  assert.equal(listProducts({ q: 'organizer' })[0]?.id, 'kolorr-claro');
  assert.equal(listProducts({ q: '1 litre', brand: 'kohe' })[0]?.id, 'kohe-class');
  assert.equal(listProducts({ q: '1527D21', brand: 'kolorr' }).length, 0);
});
test('catalogue relationships, evidence and approved asset files resolve', () => {
  for (const p of products) {
    assert.ok(brands.some((b) => b.id === p.brandId));
    assert.ok(collections.some((c) => c.id === p.collectionId && c.brandId === p.brandId));
    assert.ok(p.categoryIds.every((id) => categories.some((c) => c.id === id)));
    assert.ok(evidence.some((e) => e.id === p.evidenceId));
    const asset = assets.find((a) => a.id === p.assetId);
    assert.ok(asset);
    assert.ok(existsSync(`public${asset.src}`));
    assert.ok(variants.some((v) => v.productId === p.id));
  }
  for (const v of variants) {
    if (v.assetId)
      assert.ok(assets.some((a) => a.id === v.assetId && existsSync(`public${a.src}`)));
    if (v.evidenceId) assert.ok(evidence.some((e) => e.id === v.evidenceId));
    assert.ok(offers.some((o) => o.variantId === v.id));
    assert.ok(v.specifications.every((s) => evidence.some((e) => e.id === s.evidenceId)));
  }
});

test('WhatsApp handoff preserves the selected SKU, quantity and encoded notes', () => {
  const message = formatRequirement(
    [{ variantId: 'kohe-class-750', quantity: 12, requestedUnit: 'piece' }],
    'Office & pantry / preferred colour?',
  );
  const url = buildWhatsAppUrl('919876543210', message);
  assert.ok(url);
  assert.equal(new URL(url).searchParams.get('text'), message);
  assert.match(message, /K-Class Pro 750/);
  assert.match(message, /12 pieces/);
  assert.equal(buildWhatsAppUrl('', message), null);
  assert.equal(buildWhatsAppUrl('not-a-phone', message), null);
  assert.equal(buildWhatsAppUrl('919876543210', 'x'.repeat(3501)), null);
});
test('quote restoration rejects corrupted or stale data and unsafe quantities', () => {
  assert.deepEqual(restoreLines('invalid'), []);
  const valid = { variantId: 'ocean-gin-600', quantity: 12, requestedUnit: 'piece' };
  assert.deepEqual(
    restoreLines([
      valid,
      { ...valid, quantity: -1 },
      { ...valid, quantity: 1.5 },
      { ...valid, quantity: 10001 },
      { ...valid, variantId: 'gone' },
    ]),
    [valid],
  );
  assert.equal(restoreLines([valid, valid]).length, 1);
});
test('quote export preserves manufacturer SKU and piece request without inventing pack sizes', () => {
  const message = formatRequirement(
    [{ variantId: 'ocean-cocktail-215', quantity: 24, requestedUnit: 'piece' }],
    'Restaurant opening',
  );
  assert.match(message, /3527C0702G0001-2/);
  assert.match(message, /Requested: 24 pieces \(supply pack to be confirmed\)/);
  assert.match(message, /Restaurant opening/);
  assert.doesNotMatch(message, /₹|Rs\.|in stock/i);
});

'use client';
import { useState } from 'react';
import { ArrowUpRight, Check, Plus } from 'lucide-react';
import { BrandImage } from '@/components/ui/brand-image';
import { Eyebrow, LinkButton } from '@/components/ui/link-button';
import { useQuote } from '@/components/enquiry/quote-provider';
import type { Product, Variant } from '@/lib/catalog/schema';
export function ProductSelection({
  product,
  variants,
  brand,
  collection,
  sources,
}: {
  product: Product;
  variants: Variant[];
  brand: string;
  collection: string;
  sources: Record<string, string>;
}) {
  const [selected, setSelected] = useState(variants[0].id);
  const [quantity, setQuantity] = useState('1');
  const [added, setAdded] = useState(false);
  const variant = variants.find((v) => v.id === selected)!;
  const { add, ready } = useQuote();
  const source = sources[variant.evidenceId ?? product.evidenceId];
  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <BrandImage
          id={variant.assetId ?? product.assetId ?? ''}
          className="contain"
          priority
          sizes="(max-width:800px) 90vw, 50vw"
        />
      </div>
      <div className="product-detail-copy">
        <Eyebrow>
          {brand} / {collection}
        </Eyebrow>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const count = Number(quantity);
            if (ready && Number.isInteger(count) && count >= 1 && count <= 10000) {
              add(variant.id, count);
              setAdded(true);
            }
          }}
        >
          <div className="variant-controls">
            <div>
              <label htmlFor="product-variant">Capacity / option</label>
              <select
                id="product-variant"
                value={selected}
                onChange={(event) => {
                  setSelected(event.target.value);
                  setAdded(false);
                }}
              >
                {variants.map((v) => (
                  <option value={v.id} key={v.id}>
                    {Object.values(v.options).join(' / ')}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="product-quantity">Requested pieces</label>
              <input
                id="product-quantity"
                type="number"
                min="1"
                max="10000"
                step="1"
                required
                value={quantity}
                onChange={(event) => {
                  setQuantity(event.target.value);
                  setAdded(false);
                }}
              />
            </div>
          </div>
          <div aria-live="polite" aria-atomic="true">
            {variant.manufacturerSku && (
              <p className="product-sku">Manufacturer SKU: {variant.manufacturerSku}</p>
            )}
            <table className="product-specs">
              <caption className="sr-only">Selected option specifications</caption>
              <tbody>
                {variant.specifications.map((spec) => (
                  <tr key={spec.key}>
                    <th scope="row">{spec.label}</th>
                    <td>
                      {String(spec.value)}
                      {spec.unit ? ' ' + spec.unit : ''}
                    </td>
                  </tr>
                ))}
                {variant.options.colour && (
                  <tr>
                    <th scope="row">Colour</th>
                    <td>{variant.options.colour}</td>
                  </tr>
                )}
                <tr>
                  <th scope="row">Pricing &amp; availability</th>
                  <td>On request</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="product-note">
            Tell us the number of pieces you need. Available supply packs, minimum quantities and
            lead times will be confirmed with your quote.
          </p>
          {product.brandId === 'kohe' && (
            <p className="small">
              Colour shown for reference. Please confirm your preferred colour when requesting
              pricing.
            </p>
          )}
          {product.brandId === 'kolorr' && (
            <p className="small">
              Manufacturer image shows multiple baskets. Capacity and dimensions refer to one
              basket; supply packs are confirmed separately.
            </p>
          )}
          <div className="button-row">
            <button
              type="submit"
              className="button button-primary add-quote"
              disabled={!ready}
              aria-label={`Add ${product.name} to Quote List`}
            >
              {added ? <Check size={16} /> : <Plus size={16} />}
              <span>{added ? 'Added to Quote' : 'Add to Quote'}</span>
            </button>
            <LinkButton href="/quote" variant="outline">
              Review Requirement
            </LinkButton>
          </div>
        </form>
        {source && (
          <a className="source-link" href={source} target="_blank" rel="noreferrer">
            Manufacturer information <ArrowUpRight size={13} />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </div>
  );
}

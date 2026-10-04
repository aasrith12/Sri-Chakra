import Link from 'next/link';
import type { Product } from '@/lib/catalog/schema';
import { getBrand, getVariants } from '@/lib/catalog/repository';
import { BrandImage } from '@/components/ui/brand-image';
import { AddToQuote } from './add-to-quote';
export function ProductCard({ product }: { product: Product }) {
  const choices = getVariants(product.id);
  const variant = choices[0];
  return (
    <article className="product-card">
      <Link
        className="product-card-image"
        href={`/products/${product.slug}`}
        aria-label={`View ${product.name}`}
      >
        <span className="product-brand">{getBrand(product.brandId).name}</span>
        <BrandImage
          id={variant.assetId ?? product.assetId ?? ''}
          className="contain"
          sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 25vw"
        />
      </Link>
      <div className="product-card-info">
        <p className="product-capacity">
          {choices.map((v) => Object.values(v.options).join(' / ')).join(' · ')}
        </p>
        <h3>
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="product-sku">
          {variant.manufacturerSku
            ? `SKU ${variant.manufacturerSku}`
            : 'Pricing & supply packs on request'}
        </p>
        <div className="product-card-bottom">
          <Link href={`/products/${product.slug}`}>View details</Link>
          {choices.length > 1 ? (
            <Link href={`/products/${product.slug}`}>Choose options +</Link>
          ) : (
            <AddToQuote variantId={variant.id} productName={product.name} />
          )}
        </div>
      </div>
    </article>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  evidence,
  getBrand,
  getCollection,
  getProduct,
  getVariants,
  products,
} from '@/lib/catalog/repository';
import { ProductSelection } from '@/components/products/product-selection';
import { ProductCard } from '@/components/products/product-card';
import { LinkButton } from '@/components/ui/link-button';
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return {
    title: product ? `${product.name} — ${getBrand(product.brandId).name}` : 'Product not found',
    description: product?.description,
  };
}
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const related = products
    .filter((p) => p.brandId === product.brandId && p.id !== product.id)
    .slice(0, 3);
  const sources = Object.fromEntries(
    evidence.filter((e) => e.sourceUrl).map((e) => [e.id, e.sourceUrl!]),
  );
  return (
    <div className="container">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/products">Products</Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>
      <ProductSelection
        product={product}
        variants={getVariants(product.id)}
        brand={getBrand(product.brandId).name}
        collection={getCollection(product.collectionId).name}
        sources={sources}
      />
      {related.length > 0 && (
        <section className="catalogue-products">
          <div className="section-heading">
            <h2>
              Good things <em>together.</em>
            </h2>
            <LinkButton href={`/brands/${product.brandId}`} variant="text">
              Explore {getBrand(product.brandId).name}
            </LinkButton>
          </div>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

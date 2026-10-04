import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { brands, listProducts } from '@/lib/catalog/repository';
import { ProductCard } from '@/components/products/product-card';
import { Eyebrow, LinkButton } from '@/components/ui/link-button';
export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  return { title: brand?.name ?? 'Brand not found', description: brand?.description };
}
export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) notFound();
  const products = listProducts({ brand: brand.id });
  return (
    <div className="container">
      <div className="page-intro">
        <Eyebrow>
          {brand.displayGroup === 'institutional'
            ? 'Office & Institutional Supplies'
            : 'The Sri Chakra portfolio'}
        </Eyebrow>
        <h1>
          {brand.name}
          <em> / </em>
          {brand.id === 'ocean'
            ? 'A clear choice.'
            : brand.id === 'kolorr'
              ? 'Everyday, organised.'
              : brand.id === 'kohe'
                ? 'Made for the everyday.'
                : 'Ready for work.'}
        </h1>
        <p>{brand.description}</p>
        {brand.id === 'ocean' && (
          <p>The Only Authorized Ocean Glass Distributor in Hyderabad & Telangana.</p>
        )}
        <div className="brand-intro-actions">
          <LinkButton href={`/products?brand=${brand.id}`}>Browse Products</LinkButton>
          <LinkButton href={`/catalogues#${brand.id}`} variant="text">
            View Catalogue
          </LinkButton>
          <LinkButton href={`/quote?for=${brand.name}`} variant="text">
            Request Pricing
          </LinkButton>
        </div>
      </div>
      <section className="catalogue-products" aria-label={`${brand.name} products`}>
        {products.length ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>For your next requirement.</h2>
            <p>
              Tell us the Kangaro product name, model or SKU and the number of pieces you need. We
              will discuss the range and supply options with you.
            </p>
            <LinkButton href="/quote?for=Kangaro">Request Kangaro pricing</LinkButton>
          </div>
        )}
      </section>
    </div>
  );
}

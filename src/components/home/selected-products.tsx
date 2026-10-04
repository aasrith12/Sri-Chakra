import { products } from '@/data/catalog';
import { ProductCard } from '@/components/products/product-card';
import { Eyebrow, LinkButton } from '@/components/ui/link-button';
export function SelectedProducts() {
  return (
    <section className="container section selected-section" aria-labelledby="selected-heading">
      <div className="section-heading">
        <div>
          <Eyebrow number="06">A closer look</Eyebrow>
          <h2 id="selected-heading">
            Small details.
            <br />
            <em>Everyday difference.</em>
          </h2>
        </div>
        <LinkButton href="/products" variant="text">
          Browse the collection
        </LinkButton>
      </div>
      <div className="product-grid">
        {products
          .filter((p) => p.featured)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}

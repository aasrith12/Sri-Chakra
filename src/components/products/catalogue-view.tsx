import Link from 'next/link';
import { Search, ArrowUpRight } from 'lucide-react';
import { brands, categories, listProducts } from '@/lib/catalog/repository';
import { ProductCard } from '@/components/products/product-card';
import { Eyebrow, LinkButton } from '@/components/ui/link-button';
import { sitePath } from '@/lib/site-path';
export function CatalogueView({
  params,
}: {
  params: Record<string, string | string[] | undefined>;
}) {
  const q = typeof params.q === 'string' ? params.q.slice(0, 120) : '';
  const brand =
    typeof params.brand === 'string' && brands.some((b) => b.id === params.brand)
      ? params.brand
      : '';
  const category =
    typeof params.category === 'string' && categories.some((c) => c.id === params.category)
      ? params.category
      : '';
  const results = listProducts({ q, brand, category });
  return (
    <div className="container">
      <div className="page-intro">
        <Eyebrow>The product collection</Eyebrow>
        <h1>
          Find your <em>everyday essentials.</em>
        </h1>
        <p>
          A first selection from our portfolio. Explore products, note your quantities and bring
          your requirement together.
        </p>
      </div>
      <form action={sitePath('/products/')} method="get">
        <div className="search-form catalogue-search">
          <label htmlFor="catalogue-search">Quick Product / SKU Search</label>
          <div className="search-input-wrap">
            <Search size={19} />
            <input
              id="catalogue-search"
              name="q"
              defaultValue={q}
              type="search"
              placeholder="Product name, manufacturer SKU, brand or collection"
              maxLength={120}
            />
            <button type="submit" className="button button-primary">
              Search <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
        <div className="catalogue-toolbar">
          <div className="filter-fields">
            <label htmlFor="brand-filter">
              Brand
              <select name="brand" id="brand-filter" defaultValue={brand}>
                <option value="">All brands</option>
                {brands.map((b) => (
                  <option value={b.id} key={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="category-filter">
              Category
              <select name="category" id="category-filter" defaultValue={category}>
                <option value="">All categories</option>
                {categories.map((c) => (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
            <button className="button button-outline" type="submit">
              Apply filters
            </button>
            {(q || brand || category) && (
              <Link className="button button-text" href="/products">
                Clear all
              </Link>
            )}
          </div>
          <p className="results-count" role="status">
            {results.length} {results.length === 1 ? 'product' : 'products'}
            {q && <> for “{q}”</>}
          </p>
        </div>
      </form>
      <div className="catalogue-products">
        {results.length ? (
          <div className="product-grid">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>Let’s find what you need.</h2>
            <p>
              {brand === 'kangaro' || category === 'office'
                ? 'Our Kangaro selection is available on enquiry. Add the product name or SKU to your requirement.'
                : 'No products match this selection. Try a different name or SKU, clear your filters, or tell us what you are looking for.'}
            </p>
            <div className="button-row justify-center">
              <LinkButton href="/products" variant="outline">
                View all products
              </LinkButton>
              <LinkButton href="/quote">Request a product</LinkButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

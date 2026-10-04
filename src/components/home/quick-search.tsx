import { Search, ArrowUpRight } from 'lucide-react';
import { sitePath } from '@/lib/site-path';
export function QuickSearch() {
  return (
    <section className="quick-search-section container" aria-labelledby="quick-search-heading">
      <div>
        <p className="eyebrow">Straight to your requirement</p>
        <h2 id="quick-search-heading">Know what you’re looking for?</h2>
      </div>
      <form action={sitePath('/products/')} method="get">
        <label className="sr-only" htmlFor="home-product-search">
          Search by product, SKU, brand or collection
        </label>
        <div className="search-input-wrap">
          <Search size={21} />
          <input
            id="home-product-search"
            name="q"
            type="search"
            maxLength={120}
            placeholder="Product name, SKU, brand or collection"
          />
          <button className="button button-primary" type="submit" aria-label="Find products">
            Find <ArrowUpRight size={17} />
          </button>
        </div>
        <p>Try “1527D21”, “Connexion” or “Kolorr”.</p>
      </form>
    </section>
  );
}

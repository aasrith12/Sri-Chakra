import type { Metadata } from 'next';
import { brands } from '@/data/catalog';
import { Eyebrow, LinkButton } from '@/components/ui/link-button';
export const metadata: Metadata = { title: 'Our Brands' };
export default function BrandsPage() {
  return (
    <div className="container">
      <div className="page-intro">
        <Eyebrow>Our growing portfolio</Eyebrow>
        <h1>
          Distinct brands.
          <br />
          <em>A shared standard.</em>
        </h1>
        <p>
          Discover glassware, kitchen and household essentials, alongside a dedicated range for
          office and institutional requirements.
        </p>
      </div>
      <div className="brand-page-grid">
        {brands.map((b) => (
          <article className="brand-page-card" key={b.id}>
            <p className="eyebrow mb-5">
              {b.id === 'ocean'
                ? 'Flagship distribution relationship'
                : b.displayGroup === 'institutional'
                  ? 'Office & Institutional Supplies'
                  : 'Kitchen & everyday living'}
            </p>
            <h2>{b.name}</h2>
            <p>{b.description}</p>
            <LinkButton href={`/brands/${b.slug}`} variant="text">
              Explore {b.name}
            </LinkButton>
          </article>
        ))}
      </div>
    </div>
  );
}

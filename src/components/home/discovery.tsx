import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BrandImage } from '@/components/ui/brand-image';
import { Eyebrow, LinkButton } from '@/components/ui/link-button';
const edits = [
  {
    category: 'glassware',
    title: 'Glassware & Drinkware',
    copy: 'Set the tone. Serve the occasion.',
    image: 'ocean-hospitality',
    className: 'category-photo',
  },
  {
    category: 'storage',
    title: 'Storage & Organisation',
    copy: 'Make room for a considered everyday.',
    image: 'kolorr-lifestyle',
    className: 'category-storage',
  },
  {
    category: 'kitchen',
    title: 'Kitchen & Everyday',
    copy: 'Well-chosen essentials, put to work.',
    image: 'kohe-class',
    className: 'category-cutout',
  },
];
export function Discovery() {
  return (
    <section
      className="container showroom-discovery"
      id="discover"
      aria-labelledby="discovery-heading"
    >
      <div className="section-heading">
        <div>
          <Eyebrow number="01">Explore the product world</Eyebrow>
          <h2 id="discovery-heading">
            Good products.
            <br />A world of possibilities.
          </h2>
        </div>
        <LinkButton href="/products" variant="text">
          Explore all products
        </LinkButton>
      </div>
      <div className="category-showcase" role="region" aria-label="Product categories" tabIndex={0}>
        {edits.map((edit, i) => (
          <Link
            href={'/products?category=' + edit.category}
            key={edit.category}
            className={'category-showcase-card ' + edit.className}
          >
            <div className="category-showcase-image">
              <BrandImage
                id={edit.image}
                className={i === 2 ? 'contain' : ''}
                sizes="(max-width:800px) 80vw, 33vw"
              />
              <span className="category-showcase-number">0{i + 1}</span>
            </div>
            <div className="category-showcase-copy">
              <h3>{edit.title}</h3>
              <p>{edit.copy}</p>
              <ArrowUpRight aria-hidden="true" />
            </div>
          </Link>
        ))}
      </div>
      <Link className="institutional-link" href="/brands/kangaro">
        <span>Beyond the kitchen and table.</span>
        <strong>
          Office & Institutional Supplies <ArrowUpRight size={17} />
        </strong>
      </Link>
    </section>
  );
}

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '@/components/ui/link-button';
import { BrandImage } from '@/components/ui/brand-image';
const showcase = [
  {
    id: 'ocean',
    image: 'ocean-home',
    title: 'For the moments around a table.',
    label: 'Our flagship distribution relationship',
  },
  {
    id: 'kolorr',
    image: 'kolorr-lifestyle',
    title: 'A little more order. Every day.',
    label: 'Storage & household essentials',
  },
  {
    id: 'kohe',
    image: 'kohe-class',
    title: 'Good tools. Everyday purpose.',
    label: 'Kitchen & everyday essentials',
  },
];
export function BrandsSection() {
  return (
    <section className="portfolio-section" id="brands" aria-labelledby="brands-heading">
      <div className="container">
        <div className="section-heading">
          <div>
            <Eyebrow number="03">The company we keep</Eyebrow>
            <h2 id="brands-heading">
              Individual strengths.
              <br />
              One considered portfolio.
            </h2>
          </div>
          <p>
            From glassware to household essentials, each brand brings something distinct to your
            requirement.
          </p>
        </div>
        <div className="portfolio-grid">
          {showcase.map((brand) => (
            <Link
              className={'portfolio-card portfolio-' + brand.id}
              href={'/brands/' + brand.id}
              key={brand.id}
            >
              <div className="portfolio-image">
                <BrandImage
                  id={brand.image}
                  className={brand.id === 'kohe' ? 'contain' : ''}
                  sizes="(max-width:800px) 85vw, 33vw"
                />
                <div className="portfolio-logo official-logo">
                  <BrandImage id={brand.id + '-identity'} className="contain" sizes="150px" />
                </div>
              </div>
              <div className="portfolio-copy">
                <p>{brand.label}</p>
                <h3>{brand.title}</h3>
                <span>
                  Explore {brand.id === 'kohe' ? 'Kohe' : brand.id === 'ocean' ? 'Ocean' : 'Kolorr'}{' '}
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/brands/kangaro" className="institutional-portfolio">
          <span className="institutional-name">Kangaro</span>
          <span>
            Office & Institutional Supplies
            <br />
            <small>A dedicated range for the way you work.</small>
          </span>
          <ArrowUpRight />
        </Link>
      </div>
    </section>
  );
}

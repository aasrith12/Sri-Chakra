import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BrandImage } from '@/components/ui/brand-image';
import { Eyebrow, LinkButton } from '@/components/ui/link-button';
export function Hero() {
  return (
    <section className="showroom-hero" aria-labelledby="hero-heading">
      <div className="container showroom-grid">
        <div className="showroom-copy">
          <Eyebrow>Sri Chakra Agencies · Hyderabad</Eyebrow>
          <h1 id="hero-heading">
            Built on experience.
            <br />
            Selected with purpose.
            <br />
            <em>Supplied with trust.</em>
          </h1>
          <p>
            Kitchen, dining, hospitality and everyday essentials from trusted brands — backed by 25+
            years of founder industry experience.
          </p>
          <div className="button-row">
            <LinkButton href="/products">Explore Products</LinkButton>
            <LinkButton href="/quote" variant="outline">
              Request a Quote
            </LinkButton>
          </div>
          <div className="showroom-proof">
            <div>
              <strong>
                25<span>+</span>
              </strong>
              <span>
                Years of founder
                <br />
                industry experience
              </span>
            </div>
            <Link href="#ocean">
              <strong>
                Only Authorized
                <br />
                Ocean Glass Distributor
              </strong>
              <span>
                Hyderabad & Telangana <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </div>
        <div
          className="showroom-composition"
          aria-label="A selection of Ocean, Kolorr and Kohe products"
        >
          <div className="showroom-main-photo">
            <BrandImage id="ocean-home" priority sizes="(max-width:800px) 100vw, 42vw" />
          </div>
          <Link className="showroom-glass" href="/brands/ocean">
            <BrandImage
              id="ocean-gin"
              className="contain"
              priority
              sizes="(max-width:800px) 40vw, 22vw"
            />
            <span>
              Ocean <ArrowUpRight size={14} />
            </span>
          </Link>
          <Link className="showroom-storage" href="/brands/kolorr">
            <BrandImage
              id="kolorr-claro"
              className="contain"
              sizes="(max-width:800px) 35vw, 18vw"
            />
            <span>
              Kolorr <ArrowUpRight size={14} />
            </span>
          </Link>
          <Link className="showroom-flask" href="/brands/kohe">
            <BrandImage id="kohe-class" className="contain" sizes="(max-width:800px) 25vw, 14vw" />
            <span>
              Kohe <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>
      </div>
      <div className="container showroom-baseline">
        <span>For hospitality.</span>
        <span>For business.</span>
        <span>For home.</span>
        <Link href="/about">
          A family business with a shared standard <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

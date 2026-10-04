import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Eyebrow, LinkButton } from '@/components/ui/link-button';
import { ChakraMark } from '@/components/ui/identity';
export function Business() {
  return (
    <section className="business-section" id="business" aria-labelledby="business-heading">
      <div className="container business-grid">
        <div>
          <Eyebrow number="05">For the business of hospitality</Eyebrow>
          <h2 id="business-heading">
            Behind every
            <br />
            well-served table,
            <br />
            <em>a trusted partner.</em>
          </h2>
          <p>
            A new opening. A busy season. An everyday replenishment. Bring us your requirement — and
            the experience you want to create.
          </p>
          <LinkButton href="/quote" variant="light">
            Discuss your requirement
          </LinkButton>
        </div>
        <div className="business-right">
          <ChakraMark className="business-mark" />
          <div className="business-types">
            {[
              'Hotels & resorts',
              'Restaurants & cafés',
              'Caterers & banquets',
              'Institutions & corporate kitchens',
            ].map((type, i) => (
              <Link key={type} href={`/quote?for=${encodeURIComponent(type)}`}>
                <span className="business-type-number">0{i + 1}</span>
                {type}
                <ArrowUpRight size={20} />
              </Link>
            ))}
          </div>
          <Link href="/quote?for=Retailers%20%26%20dealers" className="business-retail">
            A retailer or dealer? Let’s talk supply.
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

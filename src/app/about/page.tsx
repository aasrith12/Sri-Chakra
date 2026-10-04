import type { Metadata } from 'next';
import { BrandImage } from '@/components/ui/brand-image';
import { LinkButton } from '@/components/ui/link-button';
import { ChakraMark } from '@/components/ui/identity';
export const metadata: Metadata = {
  title: 'Our story',
  description:
    'The experience and family behind Sri Chakra Agencies. Meet MVN Malleshwar Rao and Neelima Matta.',
};
export default function AboutPage() {
  return (
    <>
      <section className="story-opening container">
        <p className="eyebrow">The people behind Sri Chakra</p>
        <h1>
          A lifetime of learning.
          <br />
          <em>
            A business <span className="story-keep">of our own.</span>
          </em>
        </h1>
        <div className="story-opening-bottom">
          <p>
            Before there was Sri Chakra Agencies, there were years spent understanding this industry
            from the inside.
          </p>
          <a href="#before">
            Our story, in five chapters <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section className="story-before" id="before">
        <div className="container story-chapter">
          <div className="chapter-index">
            <span>01</span>
            <p>Before Sri Chakra</p>
          </div>
          <div>
            <h2>Experience came first.</h2>
            <p className="story-lead">
              For more than 25 years, MVN Malleshwar Rao worked within the HORECA, kitchenware and
              tableware industry.
            </p>
            <p>
              It was an education in the everyday needs behind every product: what a hospitality
              team asks of its glassware, what makes a dependable supply relationship, and why the
              details matter long after an order is placed.
            </p>
          </div>
        </div>
        <div className="container story-experience-band">
          <strong>25+</strong>
          <span>
            years of industry experience
            <br />
            MVN Malleshwar Rao · Founder
          </span>
          <div className="story-image">
            <BrandImage id="ocean-home" sizes="(max-width: 800px) 90vw, 45vw" />
          </div>
        </div>
      </section>
      <section className="container story-chapter story-learning">
        <div className="chapter-index">
          <span>02</span>
          <p>Experience that shaped the idea</p>
        </div>
        <div>
          <h2>
            Products were only
            <br />
            <em>part of the story.</em>
          </h2>
          <p>
            His experience across Servewell, Corelle, Srithai Superware and Milton brought him close
            to customers, hospitality requirements and the realities of distribution.
          </p>
          <div className="career-names" aria-label="Brands across his industry experience">
            <span>Servewell</span>
            <span>Corelle</span>
            <span>Srithai Superware</span>
            <span>Milton</span>
          </div>
          <p>
            Across that experience, one belief took shape: reliability is built through knowing the
            category, understanding the customer and caring for the relationship over time.
          </p>
        </div>
      </section>
      <section className="story-family">
        <div className="container">
          <div className="story-chapter">
            <div className="chapter-index">
              <span>03</span>
              <p>Building something of our own</p>
            </div>
            <div>
              <h2>
                Shared purpose.
                <br />
                <em>A family business.</em>
              </h2>
              <p className="story-lead">
                That knowledge became the foundation for something personal.
              </p>
              <p>
                Together, MVN Malleshwar Rao and Neelima Matta founded Sri Chakra Agencies — a
                family business shaped by a passion for the category, dependable service and
                relationships built to last.
              </p>
            </div>
          </div>
          <div className="story-founders">
            <article>
              <span className="founder-monogram" aria-hidden="true">
                MR
              </span>
              <div>
                <p className="eyebrow">Founder</p>
                <h3>MVN Malleshwar Rao</h3>
                <p>
                  More than two decades of industry knowledge, brought to a business shaped by his
                  experience and the family’s shared commitment.
                </p>
              </div>
            </article>
            <article>
              <span className="founder-monogram" aria-hidden="true">
                NM
              </span>
              <div>
                <p className="eyebrow">Co-founder</p>
                <h3>Neelima Matta</h3>
                <p>
                  A partner in building Sri Chakra Agencies and in the shared purpose at its heart:
                  caring for the business, its customers and its long-term relationships.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="container story-chapter story-today">
        <div className="chapter-index">
          <span>04</span>
          <p>Sri Chakra Agencies today</p>
        </div>
        <div>
          <h2>
            Good brands.
            <br />
            <em>A dependable connection.</em>
          </h2>
          <p>
            Today, Sri Chakra Agencies brings that experience to a growing portfolio that includes
            Ocean Glassware, Kolorr, Kohe and Kangaro, spanning hospitality, home and institutional
            requirements.
          </p>
          <div className="story-ocean">
            <div className="brand-logo-plaque">
              <BrandImage id="ocean-identity" sizes="160px" />
            </div>
            <p>The Only Authorized Ocean Glass Distributor in Hyderabad &amp; Telangana.</p>
          </div>
          <p>
            We are especially proud of this position — and of the opportunity to connect people with
            products through a business grounded in knowledge and trust.
          </p>
          <LinkButton href="/brands" variant="text">
            Meet our brands
          </LinkButton>
        </div>
      </section>
      <section className="story-future">
        <div className="container">
          <ChakraMark className="story-future-mark" />
          <p className="eyebrow">05 / Looking ahead</p>
          <h2>
            The next chapter
            <br />
            <em>starts with a conversation.</em>
          </h2>
          <p>
            From years within the industry to a business of our own, Sri Chakra Agencies continues a
            journey more than two decades in the making. We look ahead with the same purpose: to
            know our products, serve dependably and build relationships that endure.
          </p>
          <LinkButton href="/quote" variant="light">
            Tell us what you need
          </LinkButton>
        </div>
      </section>
    </>
  );
}

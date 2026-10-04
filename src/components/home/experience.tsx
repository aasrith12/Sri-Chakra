import { Eyebrow, LinkButton } from '@/components/ui/link-button';
export function Experience() {
  return (
    <section
      className="family-section container"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="family-introduction">
        <Eyebrow number="02">The people at our centre</Eyebrow>
        <h2 id="experience-heading">
          Before a business,
          <br />
          there was <em>experience.</em>
        </h2>
        <p>
          Long before Sri Chakra Agencies, MVN Malleshwar Rao was learning what makes a product
          right for a customer — and what makes a business relationship last.
        </p>
        <p>
          With Neelima Matta, that understanding became the foundation of a family business of their
          own.
        </p>
        <LinkButton href="/about" variant="text">
          Discover our story
        </LinkButton>
      </div>
      <div className="family-founders">
        <article className="founder-primary">
          <span className="founder-role">FOUNDER</span>
          <h3>MVN Malleshwar Rao</h3>
          <div className="founder-proof">
            <strong>25+</strong>
            <span>
              Years of
              <br />
              industry experience
            </span>
          </div>
          <p>
            Across HORECA, kitchenware, tableware and distribution. Experience built around
            products, people and dependable relationships.
          </p>
          <div className="founder-career">
            <span>Experience across respected names in the industry</span>
            <p>
              Servewell · Corelle
              <br />
              Srithai Superware · Milton
            </p>
          </div>
        </article>
        <article className="cofounder-home">
          <span className="founder-role">CO-FOUNDER</span>
          <h3>Neelima Matta</h3>
          <p>
            Part of the foundation and the journey. Building Sri Chakra Agencies together, with the
            care and commitment of a family business.
          </p>
        </article>
      </div>
    </section>
  );
}

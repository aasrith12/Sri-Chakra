import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '@/components/ui/link-button';
export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-inner">
        <div>
          <Eyebrow>Your next good thing starts here</Eyebrow>
          <h2 id="contact-heading">
            Let’s bring your
            <br />
            <em>requirement together.</em>
          </h2>
        </div>
        <div>
          <p>
            One product or an entire project.
            <br />
            Start with what you need.
          </p>
          <Link href="/quote" className="contact-link">
            Request a Quote{' '}
            <span>
              <ArrowUpRight size={30} />
            </span>
          </Link>
          <p className="contact-location">HYDERABAD · TELANGANA</p>
        </div>
      </div>
    </section>
  );
}

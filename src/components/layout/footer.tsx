import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Identity, ChakraMark } from '@/components/ui/identity';
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" aria-label="Sri Chakra Agencies home">
              <Identity />
            </Link>
            <p className="footer-description">
              Many brands. One trusted centre.
              <br />
              Kitchen, hospitality and everyday essentials.
            </p>
            <p className="small">Hyderabad, Telangana, India</p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <Link href="/products">Our products</Link>
            <Link href="/brands">Our brands</Link>
            <Link href="/catalogues">Digital catalogues</Link>
            <Link href="/brands/kangaro">Office & institutional supplies</Link>
          </div>
          <div>
            <p className="eyebrow">Connect</p>
            <Link href="/about">Our story</Link>
            <Link href="/#business">For your business</Link>
            <Link href="/#ocean">Ocean distribution</Link>
            <Link href="/quote">
              Request a quote <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="footer-mark">
            <ChakraMark />
            <span>
              LINES FINDING
              <br />
              THEIR CENTRE
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getUTCFullYear()} Sri Chakra Agencies</span>
          <span>Only Authorized Ocean Glass Distributor · Hyderabad & Telangana</span>
          <a href="#main-content">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

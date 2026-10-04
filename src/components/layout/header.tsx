'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ListPlus, Menu, Search, X } from 'lucide-react';
import { Identity } from '@/components/ui/identity';
import { useQuote } from '@/components/enquiry/quote-provider';
import { sitePath } from '@/lib/site-path';
const navigation = [
  { label: 'Products', href: '/products' },
  { label: 'Brands', href: '/brands' },
  { label: 'HORECA', href: '/#business' },
  { label: 'About', href: '/about' },
];
export function Header() {
  const { lines } = useQuote();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const searchButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (searchOpen) dialog.current?.showModal();
    else if (dialog.current?.open) dialog.current.close();
  }, [searchOpen]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [menuOpen]);
  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Rooted in Hyderabad. Connected by trust.</span>
          <Link href="/catalogues">
            Digital catalogues <ArrowUpRight size={12} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" aria-label="Sri Chakra Agencies home">
            <Identity />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#ocean">Distribution</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <div className="header-actions">
            <button
              className="icon-button"
              ref={searchButton}
              onClick={() => setSearchOpen(true)}
              aria-label="Search products or SKU"
            >
              <Search size={19} />
            </button>
            <Link
              href="/quote"
              className="quote-link"
              aria-label={`Quote List, ${lines.length} products`}
            >
              <ListPlus size={19} />
              <span className="quote-label">Quote List</span>
              <span className="quote-count">{lines.length.toString().padStart(2, '0')}</span>
            </Link>
            <button
              className="icon-button menu-toggle"
              ref={menuButton}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav container"
            aria-label="Mobile navigation"
          >
            {[
              ...navigation,
              { label: 'Distribution', href: '/#ocean' },
              { label: 'Contact', href: '/#contact' },
              { label: 'Digital catalogues', href: '/catalogues' },
              { label: 'Request a Quote', href: '/quote' },
            ].map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </nav>
        )}
      </header>
      <dialog
        ref={dialog}
        className="search-dialog"
        onCancel={() => setSearchOpen(false)}
        onClose={() => {
          setSearchOpen(false);
          searchButton.current?.focus();
        }}
      >
        <div className="dialog-heading">
          <p className="eyebrow">Find exactly what you need</p>
          <button
            className="icon-button"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
          >
            <X />
          </button>
        </div>
        <h2>Good things, easily found.</h2>
        <form action={sitePath('/products/')} method="get" className="search-form">
          <label htmlFor="quick-search">Quick product / SKU search</label>
          <div className="search-input-wrap">
            <Search size={20} />
            <input
              id="quick-search"
              name="q"
              type="search"
              placeholder="Try ‘Connexion’ or ‘1527D21’"
              maxLength={120}
              autoFocus
            />
            <button className="button button-primary" type="submit">
              Search <ArrowUpRight size={16} />
            </button>
          </div>
        </form>
        <p className="muted small">Search by product, manufacturer SKU, brand or collection.</p>
        <div className="search-suggestions">
          {['Ocean', 'Kolorr', 'Kohe'].map((name) => (
            <Link key={name} href={`/products?q=${name}`} onClick={() => setSearchOpen(false)}>
              {name}
              <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>
      </dialog>
    </>
  );
}

import type { Metadata } from 'next';
import '@fontsource/instrument-serif/latin-400.css';
import '@fontsource/instrument-serif/latin-400-italic.css';
import '@fontsource-variable/manrope';
import './globals.css';
import './second-pass.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { QuoteProvider } from '@/components/enquiry/quote-provider';
export const metadata: Metadata = {
  title: {
    default: 'Sri Chakra Agencies — Built on experience. Supplied with trust.',
    template: '%s | Sri Chakra Agencies',
  },
  description:
    'Kitchen, dining, hospitality and everyday essentials from trusted brands. Sri Chakra Agencies, Hyderabad, Telangana.',
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <QuoteProvider>
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow, LinkButton } from '@/components/ui/link-button';
export const metadata: Metadata = { title: 'Digital Catalogues' };
const catalogues = [
  {
    brand: 'Ocean',
    id: 'ocean',
    title: 'Ocean Collections 2026–2027',
    description:
      'Explore the manufacturer’s collection. Confirm the locally supplied assortment, packaging and availability with Sri Chakra Agencies.',
    url: 'https://www.ocean-glassware.com/wp-content/uploads/2026/01/OCEAN-COLLECTION-2026-2027-1.pdf',
    label: 'View official catalogue',
  },
  {
    brand: 'Kolorr',
    id: 'kolorr',
    title: 'Kolorr online collection',
    description:
      'Browse the official online range of storage, organisation and household essentials.',
    url: 'https://kolorr.com/collections/kitchen-essentials',
    label: 'View official range',
  },
  {
    brand: 'Kohe',
    id: 'kohe',
    title: 'Kohe product brochure',
    description:
      'A manufacturer resource for kitchen preparation tools. For vacuum flasks, use the current online range or request product details.',
    url: 'https://kohekgoc.com/Kohe_Catalogue.pdf',
    label: 'View official brochure',
  },
  {
    brand: 'Kangaro',
    id: 'kangaro',
    title: 'Kangaro domestic catalogue',
    description:
      'Office and institutional products. Include a manufacturer SKU when requesting pricing.',
    url: 'https://www.kangarokgoc.com/Assets/pdf/KANGARO%20DOMESTIC.pdf',
    label: 'View official catalogue',
  },
];
export default function CataloguesPage() {
  return (
    <div className="container">
      <div className="page-intro">
        <Eyebrow>A resource for better decisions</Eyebrow>
        <h1>
          The collection.
          <br />
          <em>At your fingertips.</em>
        </h1>
        <p>
          Official brand resources to help plan your requirement. These links open on the
          manufacturer’s website; local supply is confirmed separately.
        </p>
      </div>
      <div className="catalogue-products">
        {catalogues.map((c) => (
          <article className="catalogue-resource" id={c.id} key={c.id}>
            <div>
              <p className="eyebrow mb-3">{c.brand}</p>
              <h2>{c.title}</h2>
              <p>{c.description}</p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <a href={c.url} target="_blank" rel="noreferrer" className="button button-outline">
                {c.label}
                <ArrowUpRight size={16} />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <LinkButton href={`/quote?for=${c.brand}`} variant="text">
                Request Pricing
              </LinkButton>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

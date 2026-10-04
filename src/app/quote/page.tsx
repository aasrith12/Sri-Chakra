import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PreviewQuote } from '@/components/enquiry/preview-quote';
import { Eyebrow } from '@/components/ui/link-button';
import { QuoteReview } from '@/components/enquiry/quote-review';
export const metadata: Metadata = { title: 'Your Quote List' };
export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const preview = process.env.GITHUB_PAGES === 'true';
  const params = preview ? {} : await searchParams;
  const context = typeof params.for === 'string' ? params.for.slice(0, 120) : '';
  return (
    <div className="container">
      <div className="page-intro">
        <Eyebrow>Your Quote List</Eyebrow>
        <h1>
          Let’s bring it <em>together.</em>
        </h1>
        <p>
          Review your selection and the quantities you need. Pricing, supply packs and availability
          are confirmed individually.
        </p>
      </div>
      {preview ? (
        <Suspense fallback={<QuoteReview />}>
          <PreviewQuote />
        </Suspense>
      ) : (
        <QuoteReview context={context} />
      )}
    </div>
  );
}

'use client';
import { useSearchParams } from 'next/navigation';
import { QuoteReview } from './quote-review';
export function PreviewQuote() {
  const params = useSearchParams();
  const context = (params.get('for') ?? '').slice(0, 120);
  return <QuoteReview key={context} context={context} />;
}

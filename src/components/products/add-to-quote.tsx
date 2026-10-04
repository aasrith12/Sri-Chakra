'use client';
import { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { useQuote } from '@/components/enquiry/quote-provider';
export function AddToQuote({
  variantId,
  productName,
  prominent = false,
}: {
  variantId: string;
  productName: string;
  prominent?: boolean;
}) {
  const { add, ready } = useQuote();
  const [added, setAdded] = useState(false);
  return (
    <button
      className={prominent ? 'button button-primary add-quote' : 'add-quote'}
      disabled={!ready}
      onClick={() => {
        add(variantId);
        setAdded(true);
      }}
      aria-label={`Add ${productName} to Quote List`}
    >
      {added ? <Check size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
      {added ? 'Added to Quote' : 'Add to Quote'}
    </button>
  );
}

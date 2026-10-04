'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { QUOTE_STORAGE_KEY, restoreLines } from '@/lib/enquiry';
import type { EnquiryLine } from '@/lib/catalog/schema';
type QuoteContextValue = {
  lines: EnquiryLine[];
  ready: boolean;
  add: (variantId: string, quantity?: number) => void;
  update: (variantId: string, quantity: number) => void;
  remove: (variantId: string) => void;
  storageError: boolean;
};
const QuoteContext = createContext<QuoteContextValue | null>(null);
export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<EnquiryLine[]>([]);
  const [ready, setReady] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  useEffect(() => {
    try {
      setLines(restoreLines(JSON.parse(localStorage.getItem(QUOTE_STORAGE_KEY) ?? '[]')));
    } catch {
      setStorageError(true);
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) {
      try {
        localStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(lines));
      } catch {
        setStorageError(true);
      }
    }
  }, [lines, ready]);
  const add = (variantId: string, quantity = 1) => {
    if (!ready) return;
    setLines((current) =>
      restoreLines(
        current.some((l) => l.variantId === variantId)
          ? current.map((l) =>
              l.variantId === variantId
                ? { ...l, quantity: Math.min(10000, l.quantity + quantity) }
                : l,
            )
          : [...current, { variantId, quantity, requestedUnit: 'piece' }],
      ),
    );
    setAnnouncement('Product added to your Quote List.');
  };
  const update = (variantId: string, quantity: number) =>
    setLines((current) =>
      restoreLines(current.map((l) => (l.variantId === variantId ? { ...l, quantity } : l))),
    );
  const remove = (variantId: string) =>
    setLines((current) => current.filter((l) => l.variantId !== variantId));
  return (
    <QuoteContext.Provider value={{ lines, ready, add, update, remove, storageError }}>
      {children}
      <span className="sr-only" role="status" aria-live="polite">
        {announcement}
      </span>
    </QuoteContext.Provider>
  );
}
export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) throw new Error('QuoteProvider is missing');
  return context;
}

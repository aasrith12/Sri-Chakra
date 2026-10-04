'use client';
import { useSearchParams } from 'next/navigation';
import { CatalogueView } from './catalogue-view';
export function PreviewCatalogue() {
  const params = useSearchParams();
  return <CatalogueView key={params.toString()} params={Object.fromEntries(params.entries())} />;
}

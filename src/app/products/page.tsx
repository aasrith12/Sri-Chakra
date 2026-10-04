import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CatalogueView } from '@/components/products/catalogue-view';
import { PreviewCatalogue } from '@/components/products/preview-catalogue';
export const metadata: Metadata = { title: 'Products & Quick SKU Search' };
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  if (process.env.GITHUB_PAGES === 'true')
    return (
      <Suspense fallback={<CatalogueView params={{}} />}>
        <PreviewCatalogue />
      </Suspense>
    );
  return <CatalogueView params={await searchParams} />;
}

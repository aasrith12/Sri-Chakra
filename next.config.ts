import type { NextConfig } from 'next';
const pagesPreview = process.env.GITHUB_PAGES === 'true';
const basePath = pagesPreview ? '/Sri-Chakra' : '';
const config: NextConfig = {
  ...(pagesPreview
    ? {
        output: 'export',
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  poweredByHeader: false,
  devIndicators: false,
  turbopack: { root: process.cwd() },
};
export default config;

# Sri Chakra Agencies

Local homepage review built with Next.js App Router, React, TypeScript, Tailwind CSS and Motion. Node.js 22+ is recommended. Dependencies and self-hosted fonts are pinned in `package-lock.json`.

**Run locally.** From this folder:

```powershell
npm ci
npm run dev
```

Open http://localhost:3000. The app needs no external service or account to review the homepage, catalogue, search, product pages, and Quote List. No runtime requests are made to brand websites for images or fonts.

**Verify.**

```powershell
npm run typecheck
npm test
npm run build
```

For browser checks, keep the development server running in one terminal and run `npm run test:browser` in a second. The configuration uses locally installed Google Chrome via Playwright's `chrome` channel. It produces review captures in `docs/screenshots/`. Use `npm start` after a successful production build to inspect production output instead.

**Main files.**

- `src/app/page.tsx` composes the homepage from `src/components/home/`.
- `src/app/globals.css` contains shared tokens and base styles; `src/app/second-pass.css` defines the revised compositions, About story and responsive rules.
- `src/app/about/page.tsx` tells the five-chapter family/business story.
- `src/components/motion/centre-transition.tsx` owns the decorative SVG assembly, with reduced-motion and static fallbacks.
- `src/data/catalog.ts` and `src/lib/catalog/schema.ts` hold verified sample data and the expandable domain model.
- `src/lib/catalog/repository.ts` provides catalogue queries and SKU/name/alias search.
- `src/data/assets.json` is the asset/source/permission register. `scripts/collect-brand-assets.mjs` and `scripts/download-assets.mjs` document retrieval; running them requires network access and is not needed to run the app.
- `src/components/enquiry/` and `src/lib/enquiry.ts` implement Quote List persistence, validation and export. Internal naming remains Enquiry.
- `docs/second-pass-review.md` records the current visual pass, screenshots and required server-side submission architecture. `docs/homepage-review.md` is the historical V1 review.
- `docs/initial-proposal.md` preserves the original research and architecture proposal.

**Current boundaries.** There are five sample product families and six variants. Product details support variant and requested-piece quantity selection. Other ranges have not been imported. About is a dedicated five-chapter story page; Distribution, HORECA and Contact link to homepage sections. Brand/resource pages remain supporting review destinations.

**Server runtime required.** This is not a static-only export. Use a Next.js-capable deployment. The eventual quote/contact form must use a real server endpoint, transactional durable storage and retryable notifications, as specified in `docs/second-pass-review.md`. These integrations require confirmed hosting, provider and business contact configuration before launch.

**GitHub Pages preview.** `.github/workflows/pages.yml` publishes an interactive review copy on pushes to `main`. `npm run build:pages` explicitly enables a static export for Pages at `/Sri-Chakra`; the normal `npm run build` retains server rendering. The preview uses browser-side query handling for catalogue filters/search and quote context, preserving variants, quantities, Quote List, configured WhatsApp handoff and motion. Pages cannot host the eventual submission endpoint, database or notification worker. No-JavaScript search/filter requests require the normal server deployment; the preview still serves readable page content without JavaScript. This preview is public and remains noindex.

To verify the Pages copy locally, run `npm run build:pages`, then `npm run preview:pages`. Visit `http://127.0.0.1:3100/Sri-Chakra/`; run `npm run test:pages` in another terminal. `PAGES_PREVIEW_URL` can point the same smoke tests at the published URL. Source, assets, documentation and review captures are tracked; credentials, dependencies, local helpers and build outputs are ignored.

Quotes are prepared locally and can be downloaded or copied. They are not submitted to a backend. Business phone/email/address and a submission provider have not been supplied. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_BUSINESS_WHATSAPP` to the confirmed digits-only international business number to enable user-initiated WhatsApp handoff; restart the development server after changing it. No customer details are persisted by the site.

Official product photography is used with the owner's confirmation, recorded per asset. Brand PDFs are linked at their official source and are not hosted here. No AI product imagery is used. Ocean's exclusivity claim is owner-supplied with supporting documentation pending. Founder chronology and portraits are not assumed.

The preview is intentionally `noindex`. Production submission, privacy content, full local-business/commerce SEO, remaining pages, hosting and deployment are deferred until homepage approval and confirmed business configuration.

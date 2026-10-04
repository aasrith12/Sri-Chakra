# Second visual pass — 3 October 2026

This milestone preserves the approved V1 architecture and redesigns the homepage presentation. It adds the full About story and an original staged Sri Chakra-inspired composition. Work stops for visual review; this is not a deployment or launch sign-off.

## What changed

- A larger company identity, the approved three-line headline, a collage of official Ocean, Kolorr and Kohe imagery, clear product/quote actions, and founder/distribution proof in the hero.
- A prominent espresso Ocean section with the approved official logo and the owner-supplied exclusivity statement. No new distribution claims have been inferred.
- An early product/SKU/brand/collection search; larger category images; photographic brand showcases with official logos; Kangaro in a separate institutional category.
- Ivory, sand, espresso and olive sections, larger product photography, and horizontal category/product browsing on narrow screens.
- A five-chapter About page, with both MVN Malleshwar Rao and Neelima Matta. It follows experience → understanding customers and distribution → a family business → today's portfolio → the next chapter. No founding date, employment sequence, invented achievements, customer counts or founder portraits.
- A working capacity selector and requested-piece quantity field on product details. The verified Kohe K-Class Pro 750 and 1000 variants retain separate SKUs, images, specifications and quote lines. Existing product URLs remain valid.

## Signature sequence

The original artwork uses nine interlocking triangular forms, concentric rings, sixteen surrounding arcs and a central bindu. It is a new geometric drawing, not a trace of the supplied sacred reference.

Desktop uses a 240vh section with a sticky stage. Four independently drawn boundary lines resolve first. Scattered triangular forms translate and rotate into place, inner forms join, rings appear, then the bindu. The completed geometry settles before “Many parts. One trusted centre.” resolves. The four conceptual labels are Experience, Products, Relationships and Purpose. “Continue to our story” offers a direct way onward.

Mobile runs a 3.8-second assembly when the section comes into view, without pinning. Reduced-motion preference—including changes during a visit—shows the finished composition immediately. Server-rendered/no-JavaScript output also contains the completed artwork and message. Decorative animation never gates catalogue or story content. The semantic heading and explanation remain available to assistive technology throughout.

## Runtime architecture

This is a Next.js App Router application, not a static-only export. There is no `output: 'export'` setting. Homepage/About and product records are server-rendered/prerendered where appropriate. The catalogue reads request search parameters on the server. React client components retain search-dialog controls, Quote List persistence, variant/quantity selection, WhatsApp message preparation and motion.

Search/filter forms work through real GET navigation, including without JavaScript. Quote selections are stored locally; notes and personal contact details are not persisted. Copy/download remains available. A configured WhatsApp number enables an encoded, user-initiated handoff; opening WhatsApp is not treated as a submitted enquiry.

### Required submission implementation when configuration is supplied

The eventual Request a Quote / Contact form must submit to a real server-side route, planned as `POST /api/enquiries`. A static host without a server runtime is not an acceptable deployment target. The integration must:

1. Validate and bound contact fields, notes, variant IDs and requested quantities on the server; obtain products/specifications from trusted catalogue records.
2. Write an enquiry, item snapshot and notification outbox record in a transaction to a durable database. Use a unique idempotency key so retries do not create duplicate enquiries.
3. Return a success/reference only after durable persistence succeeds. Return a recoverable error if storage fails; retain the buyer's form locally in the current session for retry.
4. Deliver business notifications through the configured provider using the persisted outbox, with retries and visible delivery status. A temporary notification outage must not lose an accepted enquiry.
5. Apply request-size limits, rate limiting, same-origin checks and appropriate retention/access controls. Keep credentials server-only.
6. Verify persisted records across application restarts, duplicate submission handling, storage failures and notification retries before enabling the form.

The database/hosting platform, business destination, notification provider, verified contacts and privacy/retention details have not been supplied. This pass does not add a fake endpoint, in-memory “storage,” unconfigured submit button or success claim. Those integrations remain required launch work.

## Evidence and assets

Permission to use Ocean, Kolorr and Kohe photos/logos was confirmed by the owner. Official logo files and the Kohe 750 image are now in `src/data/assets.json`, with source, owner, permission and local file. `scripts/second-pass-assets.mjs` records retrieval.

Kohe 750 capacity, manufacturer SKU and packaging were checked against its [official product page](https://kohekgoc.com/vacuum-steel-flask/k-class-pro-750-k-class-pro-750). That evidence is recorded independently of the 1000 variant. Product information describes manufacturer products, not local stock, confirmed colours, prices or supply packs.

Ocean's exclusivity remains an owner-supplied statement, with supporting documentation pending in the internal evidence register. The 25+ years figure belongs to the founder, not the age of Sri Chakra Agencies. Career brand references do not claim current distributorships. All catalogue PDFs remain linked at their official source.

## Review captures

Full-page captures use the completed reduced-motion state so the entire composition can be reviewed without a tall sticky-scroll spacer. Normal-motion viewport captures separately document assembly and completion. The viewport dimensions are 1440 × 1000 and 390 × 844.

| Page     | Desktop full page                          | Desktop viewport                                   | Mobile full page                          | Mobile viewport                                   |
| -------- | ------------------------------------------ | -------------------------------------------------- | ----------------------------------------- | ------------------------------------------------- |
| Homepage | [Full](screenshots/v2-home-1440-full.png)  | [Viewport](screenshots/v2-home-1440-viewport.png)  | [Full](screenshots/v2-home-390-full.png)  | [Viewport](screenshots/v2-home-390-viewport.png)  |
| About    | [Full](screenshots/v2-about-1440-full.png) | [Viewport](screenshots/v2-about-1440-viewport.png) | [Full](screenshots/v2-about-390-full.png) | [Viewport](screenshots/v2-about-390-viewport.png) |

Signature sequence: [triangles assembling](screenshots/v2-signature-desktop-assembly.png), [rings resolving](screenshots/v2-signature-desktop-rings.png), [desktop complete](screenshots/v2-signature-desktop-complete.png), [mobile complete](screenshots/v2-signature-mobile-complete.png).

## Scope remaining after visual approval

Full catalogue import, deeper brand/resource pages, business/contact information, real submission infrastructure, launch privacy content, production SEO/domain and deployment. Preview remains noindex. The catalogue has five sample product families and six variants; it is not a claim of the complete available range. Original manufacturer image resolution limits some editorial photography. No founder photography was invented.

## Verification recorded

Production build and TypeScript checks passed. Five catalogue/enquiry unit tests passed. All nine Chromium browser tests passed against the production server, including 360/390/768/1024/1440/1920 px layouts, loaded imagery, SKU search, filtering, option/image/specification changes, two-variant quote persistence, export/removal, keyboard menus/dialogs, no-JavaScript discovery, intermediate animation stages, mobile completion and live reduced-motion preference changes. Automated axe scans reported no violations on tested desktop/mobile Home and About pages and representative product/quote pages. This is not a complete manual accessibility audit or cross-browser certification.

Review captures were taken from the production build with explicit image decoding before capture, avoiding omitted off-screen images in Chrome full-page screenshots. No site was published.

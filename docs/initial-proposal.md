# Sri Chakra Agencies — initial website proposal

Prepared 3 October 2026. Historical planning document: the owner has since approved the technical and architectural foundation, with creative revisions recorded in `docs/homepage-review.md`. The original proposal below is preserved for context; the homepage review document describes the implemented scope and current status.

**The recommended direction is a warm editorial identity with a precise, useful enquiry catalogue.** Ocean establishes the flagship distribution relationship; the founders establish the human credibility; product discovery makes both actionable. The website should feel considered and established, while making a commercial buyer's next step obvious.

**Workspace findings.** The workspace at `C:\Users\aasri\Desktop\Sri Chakra` was empty when inspected, including hidden entries. There was no application, package manifest, Git metadata, README, or workspace AGENTS.md to preserve. This is a new project. The supplied brief and Sri Yantra image are the current business and visual inputs.

**Research findings and their implications.** Official brand sources were reviewed for product organisation and representative product facts. This is an initial research pass, not a complete SKU import or an audit of Sri Chakra's stocked assortment.

| Brand | Findings from official sources | Proposed treatment |
| --- | --- | --- |
| Ocean Glassware | Product navigation separates shapes/types, collections, and home/food-service uses. It includes stemware, tumblers, beer glasses, coffee and tea, dining, pitchers, carafes, and containers. | Flagship brand landing page; browse by product type or collection; curated hospitality journeys using the same product records. |
| Kolorr | Main navigation uses Organiser, Kitchen Essentials, and Bathroom Essentials. Sample products distinguish colour, capacity, and set quantity. | Storage and household discovery, with explicit pack selection and per-item capacity. |
| Kohe | Range spans knives, peelers, choppers, cutting tools, boards, bakery tools, and vacuum steel flasks. Products have identifiers, size/capacity, and packaging information. | Kitchen preparation and drinkware categories; category-specific filters and specifications. |
| Kangaro | Official product navigation and catalogue describe stationery, including staplers, punches, staples, and removers. | Separate Office & Institutional Supplies category, as confirmed by the owner during this planning stage. |

Sources: [Ocean product directory](https://www.ocean-glassware.com/category/all-products/), [Kolorr](https://kolorr.com/), [Kohe](https://kohekgoc.com/), [Kangaro collections](https://www.kangarokgoc.com/Home/Collection), and [Kangaro domestic catalogue](https://www.kangarokgoc.com/Assets/pdf/KANGARO%20DOMESTIC.pdf).

Ocean's homepage initially timed out; the product directory was subsequently accessible. Its [2026–27 catalogue](https://www.ocean-glassware.com/wp-content/uploads/2026/01/OCEAN-COLLECTION-2026-2027-1.pdf) was located in indexed official results, but the full PDF exceeded the browser tool's size limit. Kohe's [brochure](https://kohekgoc.com/Kohe_Catalogue.pdf) was found, but its text was unavailable and the screenshot request failed. Some Kangaro pages expose unresolved dynamic templates, so their blank specification labels are not usable product facts. Initial recommendations therefore rely on readable official pages and clearly identified catalogue material; full catalogue validation belongs to product onboarding.

**Representative records demonstrate the model.** These examples are research records, not claims of Sri Chakra stock, prices, or orderable pack sizes.

| Product | Verified source facts | Still unknown for Sri Chakra |
| --- | --- | --- |
| Ocean Connexion Cocktail | Identifier `3527C0702G0001-2`; 215 ml. [Official directory](https://www.ocean-glassware.com/category/all-products/) | Local availability, sale unit, wholesale packing, minimum quantity, lead time, price. Never infer packaging from the identifier suffix. |
| Kolorr Claro PET storage basket | 11,000 ml; transparent PET; 35 × 26 × 15 cm; manufacturer storefront lists sets of 2, 3, 4, and 6. [Official product](https://kolorr.com/products/transparent-storage-basket-1) | Which sets Sri Chakra offers, local SKU, stock, commercial terms. Capacity describes one basket. |
| Kohe K Class Pro 1000 | Manufacturer SKU `K Class Pro 1000`; 1,000 ml; individual box packaging. [Official product](https://kohekgoc.com/vacuum-steel-flask/k-class-pro-1000-k-class-pro-1000) | Offered colours, local stock and case packs; retail packaging does not establish wholesale order units. |

Kangaro's individual SKU specifications should be transcribed from a readable approved catalogue before publication. Empty dynamic fields will stay unknown. Similarly, an ambiguous knife measurement will remain a manufacturer-labelled size rather than being relabelled as blade length.

**Business statements need their own source of truth.** The brief supplies the founders' names, career history, experience, brand relationships, and Ocean exclusivity claim. The official pages reviewed did not independently establish Sri Chakra's territorial exclusivity. The proposed copy retains the owner's requested statement, “The Only Authorized Ocean Glass Distributor in Hyderabad & Telangana.” Record its supporting distributor document and current territorial scope in the content register before launch. This does not block design approval.

Use “25+ years of industry experience” for MVN Malleshwar Rao, not “25+ years of Sri Chakra Agencies.” Servewell, Corelle, Srithai Superware, and Milton belong in his career narrative, not the current distributed-brands display. Neelima Matta receives a proper co-founder introduction. Do not invent founding dates, customer counts, testimonials, delivery promises, or current authorisation for other brands.

**Information architecture.** Primary desktop navigation: Products, Brands, HORECA, About, Distribution, Contact. The identity links to Home. Utility actions are Search, Enquiry List with count, and Request a Quote. Catalogues are accessible through Products and the footer. Mobile keeps the identity, menu, and enquiry count visible; the menu exposes all primary links and the quote action.

| Route | Purpose |
| --- | --- |
| `/` | Brand story, Ocean relationship, category discovery, founder credibility, conversion. |
| `/products` | Full catalogue with search, shareable filters, sorting, and pagination. |
| `/products/[slug]` | Product gallery, variants, specifications, pack information, enquiry actions. |
| `/categories` and `/categories/[slug]` | Clear category index and editorial category landing pages. |
| `/brands` and `/brands/[slug]` | Growing brand directory and reusable brand pages; Ocean gets additional flagship content. |
| `/collections/[slug]` | Named collections with stable links and related products. |
| `/horeca` | Hotels, restaurants, cafés, caterers, banquets, and institutional buying journeys. |
| `/about` | Founder and co-founder story, experience, beliefs, current portfolio. |
| `/distribution` | Ocean authorisation, territory, and confirmed supply process. |
| `/catalogues` | Brand-specific documents with edition, language, file size, and source. |
| `/enquiry` | Review selected products, variants, quantities, and sale units. |
| `/request-quote` | Submit a product list or describe a general requirement. |
| `/contact` | Confirmed phone, WhatsApp, email, address, hours, and directions. |
| `/privacy` | Explain how enquiry information is used and handled. |

Launch category proposal:

- Glassware & Drinkware: stemware, tumblers, beer/cocktail glasses, coffee and tea, flasks.
- Dining & Serveware: verified dining pieces, pitchers, carafes, and dessert service.
- Kitchen Tools & Preparation: knives, peelers, choppers, boards, graters, and kitchen scissors.
- Storage & Organisation: jars, containers, baskets, and organisers.
- Household & Bathroom: confirmed Kolorr household and bathroom assortment.
- Office & Institutional Supplies: confirmed Kangaro assortment.

These are proposed customer-facing groupings informed by research. Populate only categories with confirmed Sri Chakra products. Preserve manufacturer categories separately for traceability. HORECA and household use are cross-category suitability tags, not duplicate product inventories. Steel is a material filter, not an empty catch-all category. Retailers and dealers have a business-enquiry path without being described as HORECA venues.

**Visual direction: “The considered table.”** Warm surfaces, clear glass, restrained colour, deliberate typography, and geometric order. A large, quiet photographic composition should establish what the business supplies. Geometric detail provides identity and rhythm. Native brand logos retain approved proportions and colours; any monochrome version must be an approved asset.

| Token | Value | Role |
| --- | --- | --- |
| `surface.page` | `#F6F2EA` | Warm ivory main background. |
| `surface.alternate` | `#E9E1D4` | Sand sections and product-image grounds. |
| `text.primary` | `#29231F` | Espresso headlines and body. |
| `text.secondary` | `#6B6259` | Secondary copy and metadata. |
| `action.primary` | `#914E38` | Clay primary buttons and selected states. |
| `accent.olive` | `#4F5B46` | Hospitality sections and secondary emphasis. |
| `accent.brass` | `#9A8252` | Decorative geometry and rules. |

Calculated contrast against the ivory background: espresso 13.89:1, secondary text 5.35:1, clay 5.61:1, olive 6.45:1, brass 3.31:1. Use ivory labels on clay buttons. Brass is decorative, not a normal-size text colour. Define separate focus, hover, active, disabled, error, and success tokens; verify their actual combinations during implementation. Status messages combine text and an icon rather than colour alone.

Typography proposal: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) for editorial headlines and [Manrope](https://fonts.google.com/specimen/Manrope) for body text, navigation, filters, and specifications. Large serif words provide character; product names and technical information stay in the sans serif. Limit italic to occasional editorial emphasis. Self-host the chosen font files and retain their licences.

- Hero type: fluid 44–88 px, about 1.04 line height; revise line breaks by viewport.
- Section titles: fluid 32–52 px. Body: 16–18 px, about 1.6 line height.
- Metadata: 14 px; restrained uppercase eyebrows: 12–13 px. Avoid long uppercase text.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px.
- Content width: up to 1,360 px, with larger margins at 1,920 px. Reading width about 65 characters.
- Grid: 12 columns on desktop, 8 on tablet, 4 on mobile. Gutters: 20 px mobile, 32 px tablet, 48–64 px desktop.
- Section spacing: roughly 96–128 px desktop and 56–72 px mobile, adjusted to content.
- Surfaces: fine rules, 4–8 px corner radii, very limited shadows. Reserve stronger elevation for menus and dialogs.
- Controls: generally at least 44 × 44 px touch areas, visible labels, and clear keyboard focus.

Product imagery uses approved exact-SKU assets on consistent neutral surfaces, retaining complete silhouettes and true colours. Editorial photography may crop for composition. The preferred hero is an approved Ocean hospitality image or an original shoot with actual stocked glassware, warm daylight, and linen or stone. Generated product images must not stand in for real catalogue products. Asset records make replacements possible without changing page components.

**Homepage concept.** Opening headline:

> Good products.
> Trusted relationships.
> Beautifully served.

Supporting copy:

> Kitchenware, glassware and everyday essentials for hospitality, businesses and homes. Based in Hyderabad, built on our founder's 25+ years of industry experience.

Actions: **Explore Products** and **Request a Quote**. A small but clearly legible Ocean relationship statement appears in the opening viewport. Use the full supplied exclusivity sentence in the dedicated Ocean section.

Desktop composition: approximately five columns of left-aligned editorial copy, one column of breathing room, and six columns of glassware imagery. A fine brass geometric motif occupies the image margin rather than sitting behind body text. The identity and navigation have a quiet ivory surface and a fine bottom rule. A slim trust line sits below the hero, leading naturally into Ocean.

Mobile composition: navigation, headline, concise description, actions, Ocean relationship line, then imagery. The page remains useful before animation loads. At small widths the headline becomes three deliberate lines rather than squeezing desktop typography. No full-screen introduction or forced wait.

Proposed page sequence:

| Section | Experience and content | Next step |
| --- | --- | --- |
| 1. Opening | Editorial hero, actual glassware, visible actions, founder-experience context, first geometric fragments. | Explore products or request a quote. |
| 2. Ocean relationship | Warm sand ground, prominent Ocean identity, exact distributor statement, concise sourcing/support explanation. Stock and lead times remain subject to enquiry. | Explore Ocean; read distribution details. |
| 3. The product universe | Asymmetric category index with one large image and smaller image/text entries. Show the six researched groupings only where populated. | Enter a category. |
| 4. Our brands | Ocean first, followed by Kolorr, Kohe, and Kangaro in well-spaced editorial rows with distinct product-context images. | Visit a brand page. |
| 5. Experience before enterprise | Real founder portrait; 25+ years across products, customers, and distribution. Name and acknowledge Neelima Matta as co-founder. | Read the family business story. |
| 6. For the way your business works | Olive-toned HORECA section. Hotels, restaurants, cafés, caterers, and institutions; separate retailer/dealer link. Three steps: share requirement, discuss selection, receive a quote. | Discuss bulk requirements. |
| 7. A considered selection | Four to six approved products across relevant brands with specification-led cards and enquiry actions. Avoid unsupported bestseller labels. | See details or add to enquiry. |
| 8. Let's plan your requirement | Direct invitation to share a venue, product list, or replenishment need. WhatsApp, phone, and quote form use verified contact details. | Start an enquiry. |
| Footer | Identity, navigation, catalogues, contact details, locality, and restrained distributor statement. | Find practical information. |

Credibility appears where it has evidence: the distributor section, founder story, and business buying process. This gives each section a distinct job and avoids repeating a separate generic trust grid and second company story.

**Signature interaction: lines finding their centre.** Draw a new SVG composition inspired by the reference's intersecting triangular lines, concentric organisation, and central point. Do not trace the artwork, replicate its texture, or describe a simplified decorative mark as an exact sacred diagram.

1. At rest: hero copy and photograph are fully visible. Fine separated strokes appear at the right edge of the composition.
2. Early scroll: a small number of triangle outlines move a short distance and rotate slowly toward a shared centre.
3. Mid-scroll: opposing triangular forms intersect; an outer circle resolves around them. Keep a fixed, carefully composed final shape.
4. Completion: the formation settles into a quiet emblem near the transition to the Ocean section. A matching small motif can recur in the footer without replaying the sequence.

Use a single SVG and a small client component, with Motion scroll progress driving transform and opacity. The artwork can remain sticky briefly inside its own visual column; the document scroll itself remains native. Bound the desktop movement to approximately 500–700 px of natural travel and test that duration visually. Motion is decorative and `aria-hidden`. No content is gated by scroll position.

On mobile, simplify to a brief in-view assembly without pinning. With reduced motion, show the final geometry immediately. Without JavaScript, render the same static composition. Avoid perpetual rotation, a full-page preloader, WebGL, smooth-scroll interception, and animated blur. [Motion scroll documentation](https://motion.dev/docs/react-scroll-animations) supports this proposed approach.

**Product data model.** Keep stable internal IDs separate from URLs, manufacturer codes, and future commerce-system IDs. Brands and categories are data, not hard-coded enum values. Products may belong to several categories and use cases; collections belong to a brand and group related products.

| Entity | Fields and relationships |
| --- | --- |
| Brand | ID, slug, display name, official URL, approved logo asset, original introduction, catalogue references, display priority, relationship claim reference. |
| Category | ID, parent ID, slug, title, original introduction, approved image, facet definitions, publication state. |
| Collection | ID, brand ID, slug, name, introduction, image, source references. |
| Product | ID, brand ID, category IDs, collection IDs, name, slug, original short/long descriptions, manufacturer model code, suitability tags, common specifications, image IDs, catalogue references, source facts, publication state. |
| Variant | ID, product ID, optional manufacturer SKU, selected options such as capacity/colour/finish, variant-specific measurements and materials, image overrides, evidence references. Even a single-option product has a variant. |
| Offer | ID, variant ID, optional local SKU, enquiry enabled, sale unit, units per pack/case when confirmed, minimum quantity and increment when confirmed, availability state, lead time if known, price mode. Future prices use currency and integer minor units. |
| Specification definition | Key, label, value type, permitted unit, applicable categories, filter behaviour. Values store numbers with units, booleans, or text rather than mixed free-form strings. |
| Asset | ID, local/storage path, source URL, owner, usage approval, image dimensions, alt text, focal point, linked product/variant, approval state. |
| Catalogue | ID, brand ID, title, edition, market, language, source URL, approved hosted file if permitted, file size, review date, product page references. |
| Evidence / claim | ID, source kind, URL/document reference, source date, review date, field-level facts, owner approval or verification status. Private supporting documents stay server-side. |
| Enquiry | ID, line items, contact method, contact details, optional company/buyer type, locality, requirement notes, consent record, status, submission timestamp. |
| Enquiry line | Product ID, variant ID, offer ID where available, quantity, requested unit, and an immutable name/SKU/options snapshot captured on submission. |

Unknown facts are nullable, never zero or invented. Unknown availability means “Enquire for availability”; the manufacturer's stock indicator is never Sri Chakra's inventory. Material, dishwasher safety, food-contact claims, and dimensions need product-specific evidence. Manufacturer storefront prices and shipping rules do not become Sri Chakra terms.

Keep packaging concepts separate. A manufacturer's protective box is not automatically an order pack. A confirmed pack of six and a single piece are distinct order choices. For example, if an offer is verified as a pack of six, quantity two means two packs and the interface also shows twelve pieces. This is a model example, not a claim about any researched product.

**Catalogue and enquiry behaviour.** Search matches product names, manufacturer SKUs, brands, collections, and useful aliases. Filters are shareable URL parameters with stable sorting and pagination. Available facets depend on category: capacity for glassware, colour for storage, or documented technical attributes for stationery. Do not show irrelevant filters or “sort by price” when no prices are published.

Cards show image, brand, product name, one or two meaningful specifications, and View Details / Add to Enquiry. If a product has several orderable options, the add action first asks for a selection. The product page puts the gallery beside the title, variant selection, quantity and unit, and enquiry action; specifications and related products follow. Unknown fields are omitted or explicitly marked as requiring confirmation where the buyer needs them.

The enquiry list is usable without an account. Persist only product selections in browser storage. Keep customer contact information out of persistent browser storage. Validate IDs, choices, quantity limits, and units on the server before accepting a request.

Recommended launch flow: choose products → review variants and quantities → enter contact details → submit → receive an enquiry reference. Persist accepted enquiries durably and route a notification to the business through the selected provider after configuration. Show success only after the request is accepted; notification failure must not lose the enquiry. Provide clear retry states and duplicate-submission protection.

WhatsApp is a user-triggered alternative. Build an encoded message with product, SKU where known, variant, quantity, unit, and product link. Opening WhatsApp does not mean a message was sent. For large lists, use the quote form and a short reference instead of an oversized message URL. Copyable enquiry text provides a fallback. A restrained WhatsApp control must not obscure mobile product or form actions.

**Engineering architecture.** Use standard Next.js App Router, React, TypeScript, Tailwind CSS theme variables, and Motion for React. Start with stable compatible releases and commit the lockfile when implementation is approved. Server-render brand content, category listings, and product pages; client components handle only interactive controls, the enquiry list, and decorative motion. The proposal uses the requested Next.js stack; hosting must support its chosen runtime.

References: [Next.js App Router](https://nextjs.org/docs/app), [Tailwind theme variables](https://tailwindcss.com/docs/theme), and [Motion](https://motion.dev/docs/react-scroll-animations).

Proposed source organisation:

```text
src/
  app/                 routes, layouts, metadata, form/endpoint boundaries
  components/
    ui/                buttons, inputs, dialogs, typography, layout primitives
    layout/            header, navigation, footer, breadcrumbs
    home/              hero, Ocean feature, categories, founder, business CTA
    brands/            brand identity, collection index, catalogue links
    products/          cards, galleries, facets, specifications, variant selector
    enquiry/           list, quantities, contact form, confirmation
    motion/            Sri Chakra-inspired assembly and reduced-motion wrapper
  data/                initial validated brands, categories, products, content
  lib/
    catalog/           schemas, source adapters, queries, search, validation
    enquiry/           server validation, persistence, notification interface
    assets/            image manifests and approved-asset lookup
    seo/               metadata and structured-data helpers
    whatsapp/          message formatting and safe URL construction
public/
  brands/
  products/
  editorial/
  patterns/
docs/
  initial-proposal.md
```

Initial catalogue content can live in schema-validated structured files, loaded through a repository interface. The site reads `listProducts`, `getProduct`, and related queries rather than importing ad hoc arrays in page components. A documented spreadsheet/CSV import path provides practical maintenance. If the family needs routine self-service editing, connect a CMS behind the same interface. Enquiries require durable server storage independently of the catalogue source; a relational database is the proposed default. Provider selection is deferred until hosting is chosen.

Future commerce adds inventory, price lists, taxes, shipping, payments, orders, and accounts around stable product/variant/offer IDs. It does not require replacing brand pages or catalogue layouts. “Commerce-ready” means this clean boundary, not a completed checkout hidden behind a flag.

**SEO, accessibility, and performance are part of the acceptance criteria.** Assign a distinct search purpose to each page: Distribution explains the Ocean relationship and territory; Ocean's brand page supports catalogue discovery; HORECA explains business requirements. Write original metadata, use canonical URLs, create a sitemap, and prevent arbitrary filter combinations from producing duplicate indexable pages.

Use truthful Organisation/LocalBusiness, BreadcrumbList, and Product structured data where applicable. Do not invent offers, prices, reviews, or rich-result eligibility. Confirm the actual address and contact information before adding local details. Serve meaningful product text in HTML and create real OpenGraph images. No fabricated service-area pages or keyword-stuffed headings.

Target WCAG 2.2 AA: semantic landmarks, skip link, labelled fields, useful errors, keyboard-operable menus and dialogs, focus restoration, useful image alternatives, zoom/reflow, and reduced motion. Decorative geometry has no screen-reader announcement. See the [W3C reference](https://www.w3.org/WAI/WCAG22/quickref/).

Performance targets follow Core Web Vitals: LCP at most 2.5 s, INP at most 200 ms, and CLS at most 0.1 at the 75th percentile when field data is available. Prelaunch lab checks guide performance but do not establish real-user results. Use responsive optimised images, explicit image dimensions, appropriately prioritised hero media, self-hosted fonts, and small client boundaries. See [Web Vitals](https://web.dev/articles/vitals).

Planned checks include production build and type validation; catalogue schema/link validation; meaningful tests for quantities, variant selection, and enquiry submission; keyboard/reduced-motion checks; and browser checks at 360, 390, 768, 1024, 1440, and 1920 px. Verify Chromium, Safari/WebKit, and Firefox where available. Test empty results, missing assets, unknown products, invalid forms, notification failure, and repeated submissions. Preview pages stay unindexed. These checks are planned, not already performed.

**Implementation sequence after approval.**

1. Establish tokens, typography, layout primitives, source schemas, asset manifests, and shared navigation.
2. Build the homepage composition using approved imagery and implement the geometry with static and reduced-motion fallbacks.
3. Complete brand/category/product templates and a small verified catalogue slice that exercises the real variant and packaging cases.
4. Implement the end-to-end enquiry list, durable submission, WhatsApp messages, and contact configuration.
5. Build About, HORECA, Distribution, Catalogues, and Contact from confirmed business information.
6. Import the agreed launch assortment, complete accessibility/performance/browser checks, and prepare the launch configuration for the chosen host.

**Inputs needed as production content is prepared.** Confirm the launch assortment and offered pack sizes; business phone, WhatsApp, email, address, and hours; approved logos/product imagery; founder/co-founder portraits if available; founding year if it is to be published; Ocean authorisation evidence; catalogue editions valid for the supplied market; and who will maintain products and receive enquiries. These details can be collected during implementation and must not be replaced with fabricated public content.

**Approval boundary.** The requested decision is whether to proceed with this visual direction, homepage story and motion concept, expandable catalogue model, and enquiry-first launch. Kangaro's separate Office & Institutional Supplies category is already confirmed. This proposal does not approve itself: implementation remains paused until the owner approves.

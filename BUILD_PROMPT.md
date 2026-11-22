# Build prompt for Claude Code: Flexcisst website

Paste this file into Claude Code at the root of the repo, together with this whole folder.

---

You are building the new website for **Flexcisst Technology UK Ltd** (heat exchanger tubes and custom fittings for boiler and hot water cylinder manufacturers). The design is finished. Build it exactly, as a fast static site, and deploy it from this GitHub repo.

## Sources of truth (in priority order)
1. **Figma file:** https://www.figma.com/design/pWxCbYpeI2I9Uv4pRsAEhN/flexcisst
   If the Figma MCP is connected, use `get_design_context` / `get_screenshot` on each page frame:
   - Desktop (page "04 Desktop 1440"): Home / Desktop 1440, Products / Desktop 1440, Advantages / Desktop 1440, Downloads / Desktop 1440, Contact / Desktop 1440, Contact / Success state
   - Mobile (page "05 Mobile 390"): Home / Mobile 390, Products / Mobile 390, Advantages / Mobile 390, Downloads / Mobile 390, Contact / Mobile 390, Contact success / Mobile 390
   - Components (page "02 Components"): Button, ButtonInverse, SectionCode, SectionHead, SpecTag, Stat, StepItem, TrustBar, CertBadge, Header, PageHeader, ApplicationTile, ProductCard, SpecRow, DownloadRow, CTABand, Footer, Input, Select, Textarea, FileUpload
2. **Reference images:** `reference/` (exported from Figma; desktop and mobile for every page). Match them.
3. **Content:** `content/site.json`. Use this copy verbatim. Do not invent or embellish text.
4. **Tokens:** `design/tokens.css` and `design/tailwind.config.ts`. Use these names and values only.
5. **Images:** `public/images/` and `public/brand/` (exported from Figma).

## Stack
- Vite + React + TypeScript + React Router, Tailwind CSS (use `design/tailwind.config.ts`).
- Content imported from `content/site.json`; no hard-coded copy in components.
- Fonts: self-host **Barlow** (400, 500) and **Barlow Semi Condensed** (600) with `font-display: swap`. One family only. No serif, no monospace.
- Icons: `lucide-react` for the arrow and the external-link icon. For LinkedIn, use the **official LinkedIn icon** from LinkedIn's brand resources (or lucide `Linkedin`), linked to `meta.linkedin`, `target="_blank" rel="noopener"`.
- Static build, deploy via **GitHub Pages** (GitHub Actions workflow) or Netlify/Vercel. Include the deploy workflow and the 404 page.

## Routes (keep the old URLs so Google rankings survive)
`/` · `/product` · `/advantages` · `/downloads` · `/contact` · `/imprint` · `/data-protection` · `404`

## Design rules (must hold)
- Formal, industrial, precise. Engineering-drawing feel: thin 1px rules (#D4D7D9), section codes like "03 / Products" on a keyline, figure captions "Fig. 1: … · REF 00.1".
- Corners 0–2px. **No shadows, no gradients, no pill buttons, no glassmorphism.**
- Colours: off-white `paper` #F5F5F2 and white backgrounds, graphite `ink` #1C1F22 text, `steel` #5E666D secondary, deep steel `ink-2` #23292E for dark bands.
- **Orange #FF7F00 is used sparingly**: arrows, callout dots, thin rules, hover and focus states. Small orange text on light backgrounds uses `accent-text` #A85300 (AA). Text on orange is `ink`.
- Buttons: primary = graphite fill, white label, orange arrow; hover = orange fill, ink label. Secondary = underlined ink text link with arrow. Ghost = ink link with orange arrow. On dark bands: off-white fill, ink label, orange arrow. Focus ring: 2px orange.
- Spec tables: aligned columns, units in the header, `font-variant-numeric: tabular-nums`. On mobile, the products spec table stacks per row: "DN 12" + "12 × 16 mm" + "0.0614 m²/m · wall 0.15–0.30 mm" (see Products / Mobile 390).
- Product images are already composed (part cut out, rotated −30°, on a paper drawing grid). Use them as-is in a 4:3 box, `object-fit: cover`.
- Hero (desktop): split 50/50. Left: section code, display headline, intro, buttons, 4-cell key-spec strip. Right: `hero-section.jpg` with 3 HTML callout tags (label + value, white box, 1px ink border) on thin leader lines ending in orange dots, plus caption bar. Mobile: copy first, image below, then caption; callouts hidden on mobile.
- Footer: technical-drawing title block, ruled cells: Company · UK headquarters · Enquiries (Contact page, Request a quote, LinkedIn) · Production · Pages; legal row below.
- **Phone and email appear only on the Contact page and the form success state.** Not in the header, CTA band or footer.

## Responsive
- Desktop frame 1440, container 1280, margins 80. Mobile frame 390, margins 16.
- Breakpoints: mobile < 768, tablet 768–1199 (interpolate: 2-column grids), desktop ≥ 1200.
- Mobile header: logo, "Quote" button, "Menu" (opens full-screen nav with the five links and LinkedIn). Desktop has a utility bar above the main header (tagline left, LinkedIn right).
- No horizontal overflow at 360px.

## Contact form
- Fields per `contact.form.fields`. Honeypot field. File upload (PDF/DWG/STEP, max 10 MB).
- Submit to Netlify Forms or Formspree (`[[FORM_ENDPOINT]]`); show the success state from `contact.form.success`.

## Quality bars
- Lighthouse 90+ on mobile (all four). WCAG 2.2 AA: visible focus, skip link, landmarks, labelled fields, alt text on every image (alt text must not claim photos show the UK office; the factory photo is the Ningbo production site).
- Images: generate AVIF/WebP + JPG with `srcset`; lazy-load below the fold; explicit width/height.
- Motion: fade-up 12px, 500ms ease-out, once; respect `prefers-reduced-motion`. No parallax, no carousels.
- SEO: unique title and description per page, Open Graph, canonical, sitemap.xml, robots.txt, JSON-LD `Organization` (address above, `sameAs` LinkedIn) and `Product` on /product.

## Truth rules
Only use facts in `content/site.json` / `docs/facts.json` (sourced from flexcisst.co.uk). Keep every `[[CLIENT TO CONFIRM]]` placeholder visible and list them in the README. Do not add stats, customers, testimonials, response-time promises or certifications.

## Assets to fetch
Download the catalogue PDF from the current site into `public/downloads/flexcisst-catalog.pdf`:
https://www.flexcisst.co.uk/fileadmin/content/pdf/flexcisst-catalog.pdf

## Work order
1. Scaffold + tokens + fonts. 2. UI components (match Figma components). 3. Home (desktop + mobile), compare with `reference/`. 4. Products, Advantages, Downloads, Contact (+ success), Imprint, Data protection, 404. 5. Form, SEO, deploy workflow. 6. Lighthouse + AA pass; report results and the open `[[CLIENT TO CONFIRM]]` list.

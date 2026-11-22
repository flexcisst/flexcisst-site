# flexcisst.co.uk

The redesigned Flexcisst website, built from the Figma file
[flexcisst](https://www.figma.com/design/pWxCbYpeI2I9Uv4pRsAEhN/flexcisst).

## Stack
- **Next.js 15** (App Router, React, TypeScript), exported as a static site to `out/`
- **Tailwind CSS 3** using the Figma tokens (`design/tokens.css`, `tailwind.config.ts`)
- **Barlow / Barlow Semi Condensed**, self-hosted via Fontsource
- **Hosting:** Vercel (`vercel.json` holds redirects and cache headers). Any static host also works.

All copy lives in `content/site.json`. Components contain no hard-coded copy, so the
content can later move into Payload CMS without changing the pages.

## Commands
```bash
npm install
npm run dev       # local dev server on http://localhost:3000
npm run build     # static export to out/
npm run images    # regenerate AVIF/WebP/JPG sizes from raw/images/
```

## Images
Source images are in `raw/images/` (exported from the Figma page **07 Export**).
`npm run images` writes the responsive sizes to `public/images/` and the size
manifest to `src/lib/images.json`. To replace an image, drop a new file with the
same name into `raw/images/`, run `npm run images`, and commit.

The current exports are 1× renders. For sharper images on Retina screens, export at
2× from Figma (File › Export) into `raw/images/` and rerun `npm run images`.

## Quote form
Set `NEXT_PUBLIC_FORM_ENDPOINT` in Vercel (Project › Settings › Environment Variables),
for example a Formspree form URL. Until it is set, the form shows a message asking
people to use the email address instead. The form can later post to HubSpot.

## Deploy on Vercel
1. Vercel › Add New › Project › import `flexcisst/flexcisst-site`.
2. Framework preset: Next.js. No other settings needed (the build outputs `out/`).
3. Add the `NEXT_PUBLIC_FORM_ENDPOINT` variable, then deploy.
4. When ready, add the domain `www.flexcisst.co.uk` and update DNS.

## Still to do
- **Catalogue PDF:** add `public/downloads/flexcisst-catalog.pdf` (from
  https://www.flexcisst.co.uk/fileadmin/content/pdf/flexcisst-catalog.pdf).
  The old URL already redirects to the new path in `vercel.json`.
- **Imprint and data protection text:** pages exist with a placeholder.

## [[CLIENT TO CONFIRM]] (visible on the site until resolved)
- Company number and VAT number (footer)
- Temperature range for the spec table (Products)
- ISO certificate PDFs (Downloads C-01 to C-03)
- Imprint and data-protection text
- Primary phone: +44 7777 137231 used; old header showed +44 0795 4794 561
- Turnover (USD 35m vs 30m on the old site; left off)
- Warehouse location in England
- Clean product photos without the "X" watermark
- Languages (old site mixes German UI labels)
- Form endpoint (`NEXT_PUBLIC_FORM_ENDPOINT`)

Design package docs (audit, facts, asset inventory, redirects) are in `docs/`.

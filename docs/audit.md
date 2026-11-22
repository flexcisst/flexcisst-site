# Flexcisst, Site Audit (22 Nov 2026)

Source: https://www.flexcisst.co.uk/ (crawled all 7 pages). Facts with sources: `facts.json`. Assets: `assets.json`.

## 1. Page inventory
| URL | Title | H1 | Purpose |
|---|---|---|---|
| / | Flexcisst.co.uk - your specialist for heat exchanger tubes! | Your specialist for heat exchanger tubes! | Intro, stats, fittings, UK HQ, ISO logos |
| /product | Flexcisst - Heat exchanger based on corrugated tubes | Heat exchanger based on corrugated tubes | Spec table, coils, machinery, helium testing, fittings |
| /advantages | Flexcisst? And why? - Your advantages | Flexcisst? And why? | Six advantages |
| /downloads | HEAT EXCHANGER on corrugated tube basis | Downloads | Catalogue PDF (4.3 MB) |
| /contact | Flexcisst - Contact | Contact | London HQ, sales director, Ningbo production site |
| /imprint | Imprint Flexcisst | Imprint | Legal |
| /data-protection |, |, | Privacy |

## 2. Problems found
- Logo alt text reads "Frano Steindesign" (wrong); several images have empty alt.
- German UI strings on an English site ("Hauptinhalt", "Anrufen").
- Turnover conflict: USD 35m (body) vs USD 30m (meta description).
- Two phone numbers: header +44 0795 4794 561, contact page +44 7777 137231.
- Typos: "Headquater" (alt), "longon.jpg"; "Headquarter" → "Headquarters".
- Product images carry a large grey "X" watermark baked into the background.
- `headquarter_overview.jpeg` shows the Ningbo production building, but the filename says HQ, label it as the production site only.
- London street photo is generic and low-res (800×450); it isn't their office.
- No company number or VAT number anywhere (B2B trust gap).
- Spec table has no temperature range.

## 3. [[CLIENT TO CONFIRM]]
1. Turnover figure (35m or 30m USD), or leave it off.
2. Primary phone number.
3. Company number and VAT number.
4. Warehouse location in England.
5. Temperature range for the tubes.
6. Any named customers, testimonials or case studies (none on the site).
7. Is "Flexcisst Technology UK Ltd" connected to Ningbo HongWu? Agree on the wording for the production site.
8. Is English-only the target, or EN plus DE?
9. Clean product photos without the X watermark (or OK to cut them out).
10. Year founded, if they want "since YYYY" (the site says only "over 20 years").

## 4. Accessibility note
Brand accent #FF7F00 is under 3:1 on white, so it can't be used for text on light backgrounds. Plan: keep `accent` #FF7F00 for fills, rules and CTAs (with ink text), and add `accent-text` (a darker orange that passes AA) for small orange text on light.

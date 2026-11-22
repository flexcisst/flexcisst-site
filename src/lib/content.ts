import site from "@content/site.json";

export const content = site;
export const meta = site.meta;

/** Prefix for static files when the site is served from a subfolder (GitHub Pages). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${BASE_PATH}${p}`;

/** Public URL of the site (set by the deploy workflow). Falls back to the production domain. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.flexcisst.co.uk").replace(/\/$/, "");

/** Splits "[[CLIENT TO CONFIRM]]" markers so they can be highlighted. */
export const PLACEHOLDER = /(\[\[CLIENT TO CONFIRM[^\]]*\]\])/;

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

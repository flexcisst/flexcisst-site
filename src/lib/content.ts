import site from "@content/site.json";

export const content = site;
export const meta = site.meta;

export const SITE_URL = "https://www.flexcisst.co.uk";

/** Splits "[[CLIENT TO CONFIRM]]" markers so they can be highlighted. */
export const PLACEHOLDER = /(\[\[CLIENT TO CONFIRM[^\]]*\]\])/;

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

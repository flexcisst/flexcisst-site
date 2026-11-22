import type { Metadata } from "next";
import { SITE_URL, meta } from "./content";

export function pageMeta(path: string, title: string, description: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Flexcisst",
      type: "website",
      locale: "en_GB",
      images: [{ url: "/images/hero-section-719.jpg", width: 719, height: 594, alt: "Corrugated tube heat exchanger" }],
    },
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: meta.company,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-on-light.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "54 Welbeck Street",
    addressLocality: "London",
    postalCode: "W1G 9XS",
    addressCountry: "GB",
  },
  sameAs: [meta.linkedin],
};

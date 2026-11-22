import type { Metadata } from "next";
import { SITE_URL, meta } from "./content";

export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Flexcisst: corrugated tube heat exchangers for boilers and cylinders",
};

export function pageMeta(path: string, title: string, description: string): Metadata {
  const url = `${SITE_URL}${path}`;
  const shareTitle = `${title} | Flexcisst`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: shareTitle,
      description,
      url,
      siteName: "Flexcisst",
      type: "website",
      locale: "en_GB",
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: shareTitle, description, images: [OG_IMAGE.url] },
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: meta.company,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-on-light.png`,
  image: `${SITE_URL}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "54 Welbeck Street",
    addressLocality: "London",
    postalCode: "W1G 9XS",
    addressCountry: "GB",
  },
  sameAs: [meta.linkedin],
};

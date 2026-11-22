import { content, SITE_URL } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { Button, Caption, Pic, SectionCode, SectionHead, SpecTag, Txt } from "@/components/ui";
import { SpecTable } from "@/components/SpecTable";
import { CTABand, PageHeader } from "@/components/Layout";

export const metadata = pageMeta(
  "/product",
  "Heat exchangers based on corrugated tubes",
  "Corrugated tube heat exchangers DN 12–100 in 304, 304L, 316L and 321 stainless steel. Full specification table, coils for heat pumps and solar, and custom fittings made to drawing.",
);

const p = content.products;

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Corrugated tube heat exchanger",
  description: p.tubes.text,
  brand: { "@type": "Brand", name: "Flexcisst" },
  image: `${SITE_URL}/images/product-heat-exchanger-600.jpg`,
  material: "Stainless steel 304, 304L, 316L, 321",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Nominal size", value: "DN 12–100" },
    { "@type": "PropertyValue", name: "Wall thickness", value: "0.15–0.50 mm" },
    { "@type": "PropertyValue", name: "Working pressure", value: "≤ 21 bar" },
  ],
};

type Feature = {
  id: string;
  code: string;
  label: string;
  title: string;
  text: string | string[];
  image: string;
  caption: string;
  tags: string[][];
};

function FeatureRow({ f, alt, tint = false }: { f: Feature; alt: string; tint?: boolean }) {
  const paras = Array.isArray(f.text) ? f.text : [f.text];
  return (
    <section id={f.id} className={`scroll-mt-24 ${tint ? "bg-paper" : ""}`}>
      <div className="container-x section-y grid gap-10 md:grid-cols-2 xl:gap-16">
        <figure className="reveal">
          <div className="aspect-[4/3] overflow-hidden border border-line">
            <Pic src={f.image} alt={alt} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
          </div>
          <Caption>{f.caption}</Caption>
        </figure>
        <div className="reveal">
          <SectionCode code={f.code} label={f.label} />
          <h2 className="mt-5 text-h2-r">{f.title}</h2>
          {paras.map((t) => (
            <p key={t} className="mt-5 text-body-lg text-steel">{t}</p>
          ))}
          <div className="mt-6 flex flex-wrap gap-2">
            {f.tags.map(([l, v]) => (
              <SpecTag key={l} label={l} value={v} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const s = p.specifications;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <PageHeader {...p.pageHeader} />

      <FeatureRow f={p.tubes} alt="Corrugated stainless steel tube heat exchanger" />

      <section id={s.id} className="scroll-mt-24 border-t border-line">
        <div className="container-x section-y">
          <SectionHead code={s.code} label={s.label} title={s.title} intro={s.intro} />
          <div className="reveal mt-8">
            <SpecTable />
          </div>
          <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-small text-steel"><Txt>{s.note}</Txt></p>
            <Button href={s.download.href} label={s.download.label} variant="ghost" />
          </div>
        </div>
      </section>

      <FeatureRow f={p.coils} alt="Corrugated stainless steel tube coil" tint />

      <section className="border-t border-line">
        <div className="container-x section-y">
          <SectionHead code={p.manufacturing.code} label={p.manufacturing.label} title={p.manufacturing.title} intro={p.manufacturing.intro} />
          <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
            {p.manufacturing.items.map((m) => (
              <li key={m.title} className="reveal">
                <Pic src={m.image} alt={m.title} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/3] w-full object-cover" />
                <h3 className="mt-4 text-h3-r">{m.title}</h3>
                <p className="mt-2 text-steel">{m.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FeatureRow f={p.fittings} alt="Threaded stainless steel connecting parts" tint />

      <CTABand />
    </>
  );
}

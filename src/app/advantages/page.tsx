import { content } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { Pic, SectionCode } from "@/components/ui";
import { CTABand, PageHeader } from "@/components/Layout";

export const metadata = pageMeta(
  "/advantages",
  "Flexcisst? And why? Your advantages",
  "Technical expertise, technology openness, customer focus, one product focus, high quality and customised logistics for boiler manufacturers.",
);

const a = content.advantages;

export default function AdvantagesPage() {
  return (
    <>
      <PageHeader {...a.pageHeader} />

      <section>
        <div className="container-x section-y">
          <ul className="grid border-t border-line md:grid-cols-2 md:gap-x-16">
            {a.items.map((it) => (
              <li key={it.code} className="reveal grid grid-cols-[64px_1fr] gap-6 border-b border-line py-8 md:gap-8">
                <span className="tnum pt-1 font-medium text-accent-text">{it.code}</span>
                <div>
                  <h2 className="text-h3-r">{it.title}</h2>
                  <p className="mt-2.5 text-body-lg text-steel">{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x section-y grid items-center gap-10 md:grid-cols-2 xl:gap-16">
          <Pic src={a.logistics.image} alt="Packed corrugated tube coils on pallets, ready for delivery" sizes="(min-width: 768px) 50vw, 100vw" className="reveal aspect-[3/2] w-full object-cover" />
          <div className="reveal">
            <SectionCode code={a.logistics.code} label={a.logistics.label} />
            <h2 className="mt-5 text-h2-r">{a.logistics.title}</h2>
            <p className="mt-5 text-body-lg text-steel">{a.logistics.text}</p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

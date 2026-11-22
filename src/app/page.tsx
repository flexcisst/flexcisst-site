import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { asset, content, meta } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { Button, Caption, Pic, SectionCode, SectionHead, SpecTag } from "@/components/ui";
import { SpecTable } from "@/components/SpecTable";
import { CTABand } from "@/components/Layout";

export const metadata = pageMeta(
  "/",
  "Corrugated tube heat exchangers for boilers and cylinders",
  "Stainless steel corrugated tubes DN 12–100, coils and custom fittings for boiler and hot water cylinder manufacturers. 100% helium leak tested. ISO 9001, 14001, 45001.",
);

const h = content.home;

/* Callout geometry from the Figma frame (719 × 594). */
const VB = { w: 719, h: 594 };
const callouts = [
  { x: 28, y: 72, line: [237, 89, 359.5, 118.8], dot: [359.5, 118.8] },
  { x: 543, y: 249.5, line: [543, 266.5, 474.5, 285.1], dot: [474.5, 285.1] },
  { x: 28, y: 474, line: [202, 491, 302, 439.6], dot: [302, 439.6] },
];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1440px] xl:grid-cols-2">
          <div className="flex flex-col justify-between px-4 pb-10 pt-10 md:px-10 xl:px-20 xl:pb-16 xl:pt-[88px]">
            <div>
              <SectionCode code={h.hero.code} label={h.hero.label} />
              <h1 className="mt-6 text-display-r">{h.hero.title}</h1>
              <p className="mt-6 max-w-[576px] text-body-lg text-steel">{h.hero.intro}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Button href={h.hero.primary.href} label={h.hero.primary.label} />
                <Button href={h.hero.secondary.href} label={h.hero.secondary.label} variant="secondary" />
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 border-t border-ink sm:grid-cols-4">
              {h.hero.keySpecs.map((s) => (
                <div key={s.label} className="border-b border-line py-3.5 pr-3 sm:border-b-0">
                  <dt className="eyebrow text-steel">{s.label}</dt>
                  <dd className="tnum mt-1.5 font-medium">
                    {s.mobileValue ? (
                      <>
                        <span className="sm:hidden">{s.mobileValue}</span>
                        <span className="hidden sm:inline">{s.value}</span>
                      </>
                    ) : (
                      s.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="border-line xl:border-l">
            <div className="relative overflow-hidden" style={{ aspectRatio: `${VB.w} / ${VB.h}` }}>
              <Pic
                src={h.hero.image}
                alt="Corrugated stainless steel tube heat exchanger on a drawing grid"
                sizes="(min-width: 1200px) 50vw, 100vw"
                priority
                className="h-full w-full object-cover"
              />
              <svg aria-hidden viewBox={`0 0 ${VB.w} ${VB.h}`} className="absolute inset-0 hidden h-full w-full md:block">
                {callouts.map((c, i) => (
                  <g key={i}>
                    <line x1={c.line[0]} y1={c.line[1]} x2={c.line[2]} y2={c.line[3]} stroke="#1C1F22" strokeWidth="1" />
                    <circle cx={c.dot[0]} cy={c.dot[1]} r="3.5" fill="#FF7F00" />
                  </g>
                ))}
              </svg>
              <ul className="hidden md:block">
                {h.hero.callouts.map((c, i) => (
                  <li
                    key={c.label}
                    className="absolute flex items-baseline gap-2 border border-ink bg-white px-2.5 py-1.5"
                    style={{ left: `${(callouts[i].x / VB.w) * 100}%`, top: `${(callouts[i].y / VB.h) * 100}%` }}
                  >
                    <span className="eyebrow text-steel">{c.label}</span>
                    <span className="tnum text-[14px] font-medium">{c.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figcaption className="flex justify-between border-t border-line px-4 py-3 text-small text-steel md:px-5">
              <span>{h.hero.caption}</span>
              <span className="tnum font-medium text-ink">{h.hero.ref}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- Trust bar ---------- */}
      <section aria-label={h.trustBar.label} className="container-x">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 py-6">
          <p className="eyebrow text-steel">{h.trustBar.label}</p>
          <ul className="flex items-center gap-8">
            {meta.certifications.map((c) => (
              <li key={c.title}>
                <img src={asset(c.image)} alt={c.title} width={60} height={56} className="h-11 w-auto grayscale" loading="lazy" />
              </li>
            ))}
          </ul>
          <p className="text-small text-steel">{h.trustBar.text}</p>
        </div>
      </section>

      {/* ---------- Key figures (dark) ---------- */}
      <section className="bg-ink-2 text-paper">
        <div className="container-x section-y">
          <SectionHead dark code={h.keyFigures.code} label={h.keyFigures.label} title={h.keyFigures.title} intro={h.keyFigures.intro} />
          <dl className="mt-10 grid grid-cols-2 gap-6 xl:grid-cols-4">
            {h.keyFigures.stats.map((s) => (
              <div key={s.label} className="reveal flex flex-col-reverse border-t border-white/15 pt-5">
                <dt className="eyebrow mt-2 text-steel-light">{s.label}</dt>
                <dd className="tnum font-heading text-m-h1 font-semibold xl:text-h1">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Applications ---------- */}
      <section className="bg-paper">
        <div className="container-x section-y">
          <SectionHead code={h.applications.code} label={h.applications.label} title={h.applications.title} intro={h.applications.intro} />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {h.applications.items.map((a) => (
              <li key={a.code} className="reveal border-t border-line pt-5">
                <p className="eyebrow text-accent-text">{a.code}</p>
                <h3 className="mt-3 text-h3-r">{a.title}</h3>
                <p className="mt-3 text-steel">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Products ---------- */}
      <section>
        <div className="container-x section-y">
          <SectionHead code={h.products.code} label={h.products.label} title={h.products.title} intro={h.products.intro} />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {h.products.items.map((p) => (
              <li key={p.name} className="reveal group flex flex-col border border-line bg-white">
                <Link href={p.href} className="flex flex-1 flex-col">
                  <div className="aspect-[4/3] overflow-hidden border-b border-line">
                    <Pic src={p.image} alt={p.name} sizes="(min-width: 1200px) 400px, (min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="eyebrow text-accent-text">{p.code}</p>
                    <h3 className="mt-3 text-h3-r">{p.name}</h3>
                    <p className="mt-3 text-steel">{p.text}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map(([l, v]) => (
                        <SpecTag key={l} label={l} value={v} />
                      ))}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 font-medium group-hover:text-accent-text">
                      View specifications <ArrowRight aria-hidden size={18} className="text-accent" />
                      <span className="sr-only">for {p.name}</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Spec preview ---------- */}
      <section className="border-t border-line">
        <div className="container-x section-y">
          <SectionHead code={h.specPreview.code} label={h.specPreview.label} title={h.specPreview.title} intro={h.specPreview.intro} />
          <div className="reveal mt-8">
            <SpecTable dns={h.specPreview.rowsDN} />
          </div>
          <div className="mt-8">
            <Button href={h.specPreview.link.href} label={h.specPreview.link.label} variant="ghost" />
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="bg-paper">
        <div className="container-x section-y">
          <SectionHead code={h.process.code} label={h.process.label} title={h.process.title} intro={h.process.intro} />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {h.process.steps.map((s) => (
              <li key={s.number} className="reveal border-t border-line pt-5">
                <p className="tnum eyebrow text-accent-text">{s.number}</p>
                <h3 className="mt-3 text-h3-r">{s.title}</h3>
                <p className="mt-2 text-small text-steel">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Quality ---------- */}
      <section>
        <div className="container-x section-y">
          <SectionHead code={h.quality.code} label={h.quality.label} title={h.quality.title} intro={h.quality.intro} />
          <div className="mt-10 grid gap-10 xl:grid-cols-2 xl:gap-16">
            <figure className="reveal">
              <Pic src={h.quality.image} alt="Test laboratory at the Ningbo production site" sizes="(min-width: 1200px) 620px, 100vw" className="aspect-[3/2] w-full object-cover" />
              <Caption>{h.quality.caption}</Caption>
            </figure>
            <ul className="reveal border-t border-line">
              {meta.certifications.map((c) => (
                <li key={c.title} className="flex items-center gap-6 border-b border-line py-6">
                  <img src={asset(c.image)} alt="" width={60} height={56} className="h-14 w-auto grayscale" loading="lazy" />
                  <div>
                    <p className="font-heading text-h3 font-semibold">{c.title}</p>
                    <p className="text-small text-steel">{c.scope}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

import Link from "next/link";
import { asset, meta } from "@/lib/content";
import { A, Button, ExtIcon, Txt } from "./ui";
import { LinkedInIcon } from "./LinkedInIcon";

export function CTABand() {
  const c = meta.cta;
  return (
    <section aria-labelledby="cta-title" className="bg-ink-2 text-paper">
      <div className="container-x flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between xl:py-20">
        <div>
          <h2 id="cta-title" className="text-h2-r">{c.title}</h2>
          <p className="mt-3 text-body-lg text-steel-light">{c.text}</p>
        </div>
        <Button href={c.button.href} label={c.button.label} variant="inverse" className="self-start md:self-auto" />
      </div>
    </section>
  );
}

function Cell({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-5 ${className}`}>
      <p className="eyebrow text-steel-light">{label}</p>
      <div className="mt-3 text-small text-paper/90">{children}</div>
    </div>
  );
}

export function Footer() {
  const f = meta.footer;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1A1E22] text-paper">
      <div className="container-x py-12 xl:py-16">
        {/* Title block */}
        <div className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 xl:grid-cols-5 [&>*]:bg-[#1A1E22]">
          <Cell label="Company">
            <img src={asset("/brand/logo-on-dark.png")} alt="Flexcisst" width={638} height={119} className="h-8 w-auto" loading="lazy" />
            <p className="mt-3 text-steel-light">{meta.tagline}</p>
          </Cell>
          <Cell label="UK headquarters">
            <address className="not-italic">
              {f.hq.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </address>
          </Cell>
          <Cell label="Enquiries">
            <ul className="space-y-1">
              {f.enquiries.map((e) => (
                <li key={e.label}>
                  <A href={e.href} className="inline-flex items-center gap-2 hover:text-accent">
                    {e.label === "LinkedIn" && <LinkedInIcon />}
                    {e.label}
                    {e.external && <ExtIcon />}
                  </A>
                </li>
              ))}
            </ul>
          </Cell>
          <Cell label="Production">
            <address className="not-italic">
              {f.production.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </address>
          </Cell>
          <Cell label="Pages">
            <ul className="space-y-1">
              {meta.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-accent">{n.label}</Link>
                </li>
              ))}
            </ul>
          </Cell>
        </div>
        {/* Legal row */}
        <div className="flex flex-col gap-3 border-x border-b border-white/15 p-5 text-small text-steel-light md:flex-row md:items-center md:justify-between">
          <p><Txt>{f.legal.replace("{year}", String(year))}</Txt></p>
          <ul className="flex gap-4">
            {f.legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({ breadcrumb, title, intro }: { breadcrumb: string; title: string; intro: string }) {
  const parts = breadcrumb.split(" / ");
  return (
    <section className="border-b border-line bg-paper">
      <div className="container-x py-14 xl:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="eyebrow flex gap-2 text-steel">
            {parts.map((p, i) => (
              <li key={p} className="flex gap-2">
                {i > 0 && <span aria-hidden className="text-accent">/</span>}
                {i === 0 ? <Link href="/" className="hover:text-accent-text">{p}</Link> : <span aria-current="page">{p}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-12">
          <h1 className="text-h1-r">{title}</h1>
          <p className="text-body-lg text-steel md:pt-3">{intro}</p>
        </div>
      </div>
    </section>
  );
}

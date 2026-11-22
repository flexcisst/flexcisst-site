import { content } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata = pageMeta(
  "/contact",
  "Contact & request a quote",
  "Contact Flexcisst Technology UK Ltd in London, or send a drawing or specification for a quotation on corrugated tube heat exchangers and fittings.",
);

const c = content.contact;

export default function ContactPage() {
  return (
    <>
      <PageHeader {...c.pageHeader} />
      <section>
        <div className="container-x section-y grid gap-12 xl:grid-cols-[420px_1fr] xl:gap-20">
          <div className="border-t border-line">
            {c.blocks.map((b) => (
              <div key={b.label} className="border-b border-line py-6">
                <h2 className="eyebrow text-steel">{b.label}</h2>
                <address className="mt-3 not-italic text-body-lg">
                  {b.lines.map((l) =>
                    "tel" in b && l.replace(/\s/g, "") === b.tel ? (
                      <a key={l} href={`tel:${b.tel}`} className="tnum block underline decoration-line underline-offset-4 hover:text-accent-text">{l}</a>
                    ) : "email" in b && l === b.email ? (
                      <a key={l} href={`mailto:${b.email}`} className="block underline decoration-line underline-offset-4 hover:text-accent-text">{l}</a>
                    ) : (
                      <span key={l} className="block">{l}</span>
                    ),
                  )}
                </address>
              </div>
            ))}
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

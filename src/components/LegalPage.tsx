import { meta } from "@/lib/content";
import { PageHeader } from "./Layout";
import { Txt } from "./ui";

/** Imprint / data protection. Body text to be supplied by Flexcisst. */
export function LegalPage({ title, crumb, intro }: { title: string; crumb: string; intro: string }) {
  return (
    <>
      <PageHeader breadcrumb={`Home / ${crumb}`} title={title} intro={intro} />
      <section>
        <div className="container-x section-y max-w-[880px] xl:mx-0 xl:ml-[max(5rem,calc((100vw-1440px)/2+5rem))]">
          <h2 className="eyebrow text-steel">Responsible company</h2>
          <address className="mt-3 not-italic text-body-lg">
            {meta.footer.hq.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </address>
          <p className="mt-10 border-l-2 border-accent bg-paper px-5 py-4 text-steel">
            <Txt>{"Full text to follow from Flexcisst: copy from the current site and update. [[CLIENT TO CONFIRM]]"}</Txt>
          </p>
        </div>
      </section>
    </>
  );
}

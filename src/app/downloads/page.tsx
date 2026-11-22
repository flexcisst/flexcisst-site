import { Download, ArrowRight } from "lucide-react";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { A, SectionHead, Txt } from "@/components/ui";
import { CTABand, PageHeader } from "@/components/Layout";

export const metadata = pageMeta(
  "/downloads",
  "Downloads: catalogue and certificates",
  "Download the Flexcisst catalogue of heat exchangers based on corrugated pipes, and request ISO 9001, 14001 and 45001 certificates.",
);

const d = content.downloads;

type Item = { code: string; title: string; text: string; type: string; size: string; href: string; action: string };

function Row({ it }: { it: Item }) {
  const isDownload = it.action === "Download";
  return (
    <li className="reveal border-b border-line">
      <A
        href={it.href}
        className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-6 md:grid-cols-[80px_1fr_120px_auto]"
      >
        <span className="tnum eyebrow text-accent-text md:text-[14px]">{it.code}</span>
        <span className="col-span-2 row-start-2 md:col-span-1 md:row-start-auto">
          <span className="block font-heading text-h3-r font-semibold group-hover:text-accent-text">{it.title}</span>
          <span className="mt-1 block text-small text-steel"><Txt>{it.text}</Txt></span>
        </span>
        <span className="tnum hidden text-small text-steel md:block">
          {it.type} · {it.size}
        </span>
        <span className="col-start-2 row-start-1 inline-flex items-center gap-2 justify-self-end font-medium md:col-start-auto md:row-start-auto">
          {it.action}
          {isDownload ? <Download aria-hidden size={18} className="text-accent" /> : <ArrowRight aria-hidden size={18} className="text-accent" />}
          {isDownload && <span className="sr-only">({it.type}, {it.size})</span>}
        </span>
      </A>
    </li>
  );
}

export default function DownloadsPage() {
  return (
    <>
      <PageHeader {...d.pageHeader} />
      {[d.documents, d.certificates].map((g, i) => (
        <section key={g.code} className={i ? "bg-paper" : ""}>
          <div className="container-x section-y">
            <SectionHead code={g.code} label={g.label} title={g.title} />
            <ul className="mt-8 border-t border-ink">
              {g.items.map((it) => (
                <Row key={it.code} it={it as Item} />
              ))}
            </ul>
          </div>
        </section>
      ))}
      <CTABand />
    </>
  );
}

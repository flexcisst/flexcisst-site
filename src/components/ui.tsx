import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import manifest from "@/lib/images.json";
import { BASE_PATH, PLACEHOLDER, isExternal } from "@/lib/content";

/* ---------- Text with [[CLIENT TO CONFIRM]] markers kept visible ---------- */
export function Txt({ children }: { children: string }) {
  const parts = children.split(PLACEHOLDER);
  return (
    <>
      {parts.map((p, i) =>
        PLACEHOLDER.test(p) ? (
          <mark key={i} className="bg-accent/15 px-0.5 text-inherit">
            {p}
          </mark>
        ) : (
          p
        ),
      )}
    </>
  );
}

/* ---------- Smart link ---------- */
export function A({
  href,
  className,
  children,
  ...rest
}: { href: string; className?: string; children: ReactNode; "aria-label"?: string }) {
  if (isExternal(href))
    return (
      <a href={href} target="_blank" rel="noopener" className={className} {...rest}>
        {children}
      </a>
    );
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

/* ---------- Buttons ---------- */
type BtnProps = { href: string; label: string; variant?: "primary" | "secondary" | "ghost" | "inverse"; className?: string };

export function Button({ href, label, variant = "primary", className = "" }: BtnProps) {
  const base = "group inline-flex items-center gap-3 font-medium text-[16px] leading-5 tracking-[0.01em] transition-colors";
  const styles = {
    primary: "bg-ink text-white px-5 py-4 rounded hover:bg-accent hover:text-accent-ink",
    inverse: "bg-paper text-ink px-5 py-4 rounded hover:bg-accent",
    secondary: "text-ink border-b border-ink pb-1 hover:border-accent",
    ghost: "text-ink hover:text-accent-text",
  }[variant];
  const arrow = variant === "primary" ? "text-accent group-hover:text-accent-ink" : "text-accent";
  return (
    <A href={href} className={`${base} ${styles} ${className}`}>
      {label}
      <ArrowRight aria-hidden size={18} strokeWidth={1.75} className={`${arrow} transition-transform group-hover:translate-x-0.5`} />
    </A>
  );
}

/* ---------- Section code "03 / Products" on a keyline ---------- */
export function SectionCode({ code, label, dark = false }: { code: string; label: string; dark?: boolean }) {
  return (
    <p className={`eyebrow flex items-center gap-3 border-t pt-4 ${dark ? "border-white/15 text-steel-light" : "border-line text-steel"}`}>
      <span className={dark ? "text-accent" : "text-accent-text"}>{code}</span>
      <span aria-hidden className={dark ? "text-white/30" : "text-line"}>/</span>
      <span>{label}</span>
    </p>
  );
}

/* ---------- Section head: code + title left, intro right ---------- */
export function SectionHead({
  code,
  label,
  title,
  intro,
  dark = false,
  as: H = "h2",
}: {
  code: string;
  label: string;
  title: string;
  intro?: string;
  dark?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className="reveal">
      <SectionCode code={code} label={label} dark={dark} />
      <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-12">
        <H className={`${H === "h1" ? "text-h1-r" : "text-h2-r"} ${dark ? "text-paper" : "text-ink"}`}>{title}</H>
        {intro && <p className={`text-body-lg md:pt-2 ${dark ? "text-steel-light" : "text-steel"}`}>{intro}</p>}
      </div>
    </div>
  );
}

/* ---------- Spec tag: LABEL value, ruled box ---------- */
export function SpecTag({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-baseline gap-2 border border-line bg-white px-2.5 py-1.5">
      <span className="eyebrow text-steel">{label}</span>
      <span className="tnum text-[14px] font-medium leading-5 text-ink">{value}</span>
    </span>
  );
}

/* ---------- Responsive picture from the generated image set ---------- */
type Img = { name: string; width: number; height: number; widths: number[] };
export function Pic({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const img = (manifest as Record<string, Img>)[src];
  if (!img) return <div className={`drawing-grid ${className}`} role="img" aria-label={alt} />;
  const set = (ext: string) => img.widths.map((w) => `${BASE_PATH}/images/${img.name}-${w}.${ext} ${w}w`).join(", ");
  const largest = img.widths[img.widths.length - 1];
  return (
    <picture>
      <source type="image/avif" srcSet={set("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
      <img
        src={`${BASE_PATH}/images/${img.name}-${largest}.jpg`}
        srcSet={set("jpg")}
        sizes={sizes}
        alt={alt}
        width={img.width}
        height={img.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={className}
      />
    </picture>
  );
}

/* ---------- Figure caption "Fig. 1: … · REF 00.1" ---------- */
export function Caption({ children }: { children: string }) {
  return <p className="mt-3 text-small text-steel">{children}</p>;
}

export function ExtIcon() {
  return <ExternalLink aria-hidden size={14} strokeWidth={1.75} className="text-accent" />;
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { asset, meta } from "@/lib/content";
import { Button, ExtIcon } from "./ui";
import { LinkedInIcon } from "./LinkedInIcon";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="sticky top-0 z-40 bg-white">
      {/* Utility bar (desktop) */}
      <div className="hidden border-b border-line bg-paper xl:block">
        <div className="container-x flex h-[42px] items-center justify-between text-small text-steel">
          <p>{meta.utilityBar}</p>
          <a href={meta.linkedin} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-ink hover:text-accent-text">
            <LinkedInIcon /> LinkedIn <ExtIcon />
          </a>
        </div>
      </div>

      <div className="border-b border-line">
        <div className="container-x flex h-16 items-center justify-between xl:h-20">
          <Link href="/" aria-label="Flexcisst home" className="shrink-0">
            <img src={asset("/brand/logo-on-light.png")} alt="Flexcisst" width={638} height={119} className="h-8 w-auto xl:h-9" />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-10">
              {meta.nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={isActive(n.href) ? "page" : undefined}
                    className={`text-[15px] font-medium transition-colors hover:text-accent-text ${
                      isActive(n.href) ? "border-b-2 border-accent pb-1 text-ink" : "text-steel"
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden xl:block">
            <Button href={meta.headerCta.href} label={meta.headerCta.label} className="!py-3" />
          </div>

          {/* Mobile / tablet */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link href={meta.headerCta.href} className="rounded bg-ink px-3.5 py-2.5 text-[14px] font-medium text-white">
              Quote
            </Link>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(true)}
              className="px-3 py-2.5 text-[14px] font-medium text-ink"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 flex flex-col bg-ink-2 text-paper xl:hidden">
          <div className="container-x flex h-16 items-center justify-between border-b border-white/15">
            <img src={asset("/brand/logo-on-dark.png")} alt="Flexcisst" width={638} height={119} className="h-8 w-auto" />
            <button type="button" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 px-2 py-2 text-[14px] font-medium" autoFocus>
              Close <X aria-hidden size={18} className="text-accent" />
            </button>
          </div>
          <nav aria-label="Mobile" className="container-x flex-1 py-6">
            <ul>
              {meta.nav.map((n, i) => (
                <li key={n.href} className="border-b border-white/15">
                  <Link href={n.href} className="flex items-baseline gap-4 py-5 font-heading text-m-h2 font-semibold">
                    <span className="eyebrow w-6 shrink-0 text-accent">0{i}</span>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={meta.linkedin} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-2 text-steel-light">
              <LinkedInIcon /> LinkedIn <ExtIcon />
            </a>
          </nav>
          <div className="container-x pb-8">
            <Button href={meta.headerCta.href} label={meta.headerCta.label} variant="inverse" className="w-full justify-between" />
          </div>
        </div>
      )}
    </header>
  );
}

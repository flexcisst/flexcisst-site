"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, Paperclip } from "lucide-react";
import Link from "next/link";
import { content } from "@/lib/content";
import { SectionCode } from "./ui";

const f = content.contact.form;
const MAX_BYTES = 10 * 1024 * 1024;

/**
 * Form endpoint: set NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree URL) in Vercel.
 * Later this can post to HubSpot instead without changing the markup.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

const field = "w-full rounded-sm border border-line bg-white px-3.5 py-3 text-body text-ink placeholder:text-steel/70 focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-accent";
const label = "mb-2 block text-[14px] font-medium leading-5";

export function QuoteForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");
  const done = useRef<HTMLHeadingElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return; // honeypot
    const file = data.get("drawing");
    if (file instanceof File && file.size > MAX_BYTES) {
      setState("error");
      setError("The drawing is larger than 10 MB. Please send a smaller file.");
      return;
    }
    if (!ENDPOINT) {
      setState("error");
      setError("The form isn't connected yet [[FORM_ENDPOINT]]. Please use the email address on this page.");
      return;
    }
    setState("sending");
    try {
      const res = await fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
      setTimeout(() => done.current?.focus(), 0);
    } catch {
      setState("error");
      setError("Something went wrong sending your request. Please try again, or use the email address on this page.");
    }
  }

  if (state === "sent")
    return (
      <div className="border border-line bg-paper p-6 md:p-10" role="status">
        <SectionCode code={f.code} label={f.label} />
        <h2 ref={done} tabIndex={-1} className="mt-5 text-h2-r focus:outline-none">{f.success.title}</h2>
        <p className="mt-4 text-body-lg text-steel">{f.success.text}</p>
      </div>
    );

  return (
    <form id={f.id} onSubmit={onSubmit} noValidate={false} encType="multipart/form-data" className="scroll-mt-24 border border-line bg-paper p-6 md:p-10" aria-labelledby="form-title">
      <SectionCode code={f.code} label={f.label} />
      <h2 id="form-title" className="mt-5 text-h2-r">{f.title}</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {f.fields.map((fd) => {
          const req = "required" in fd && fd.required;
          const full = fd.type === "select" || fd.type === "textarea" || fd.type === "file";
          const id = `f-${fd.name}`;
          return (
            <div key={fd.name} className={full ? "md:col-span-2" : ""}>
              {fd.type !== "file" && (
                <label htmlFor={id} className={label}>
                  {fd.label}
                  {req ? <span className="text-accent-text"> *</span> : <span className="font-normal text-steel"> (optional)</span>}
                </label>
              )}
              {fd.type === "select" ? (
                <select id={id} name={fd.name} className={field} defaultValue="">
                  <option value="" disabled>Select an application</option>
                  {"options" in fd && fd.options?.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : fd.type === "textarea" ? (
                <textarea id={id} name={fd.name} required={req} rows={5} placeholder={fd.placeholder} className={field} />
              ) : fd.type === "file" ? (
                <>
                  <span className={label}>{fd.label}</span>
                  <label htmlFor={id} className="flex cursor-pointer items-center gap-3 border border-dashed border-steel/50 bg-white px-4 py-5 text-steel hover:border-ink focus-within:outline focus-within:outline-2 focus-within:outline-accent">
                    <Paperclip aria-hidden size={18} className="text-accent" />
                    <span>{fileName || fd.placeholder}</span>
                    <input
                      id={id}
                      name={fd.name}
                      type="file"
                      accept={"accept" in fd ? fd.accept : undefined}
                      className="sr-only"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                    />
                  </label>
                  <p className="mt-2 text-small text-steel">Max 10 MB.</p>
                </>
              ) : (
                <input id={id} name={fd.name} type={fd.type} required={req} placeholder={fd.placeholder} autoComplete={fd.name === "company" ? "organization" : fd.name} className={field} />
              )}
            </div>
          );
        })}
      </div>

      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label>Leave this empty <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <p className="mt-6 text-small text-steel">
        {f.privacy.replace(" See Data protection.", " See ")}
        <Link href="/data-protection" className="underline hover:text-accent-text">Data protection</Link>.
      </p>

      {state === "error" && (
        <p role="alert" className="mt-4 border-l-2 border-danger bg-white px-4 py-3 text-small text-danger">{error}</p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="group mt-6 inline-flex items-center gap-3 rounded bg-ink px-5 py-4 font-medium text-white transition-colors hover:bg-accent hover:text-accent-ink disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : f.submit}
        <ArrowRight aria-hidden size={18} className="text-accent group-hover:text-accent-ink" />
      </button>
    </form>
  );
}

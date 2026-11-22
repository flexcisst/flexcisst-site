import { Button, SectionCode } from "@/components/ui";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="drawing-grid">
      <div className="container-x py-24 xl:py-36">
        <div className="max-w-[640px] bg-white p-8 md:p-12">
          <SectionCode code="404" label="Not found" />
          <h1 className="mt-5 text-h1-r">This page doesn&rsquo;t exist</h1>
          <p className="mt-4 text-body-lg text-steel">The page may have moved when the site was updated.</p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Button href="/" label="Home" />
            <Button href="/product" label="Products" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}

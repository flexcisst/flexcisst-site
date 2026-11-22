import { content } from "@/lib/content";

const spec = content.products.specifications;

/** Specification table. Desktop: ruled columns. Mobile: one stacked block per row. */
export function SpecTable({ dns }: { dns?: string[] }) {
  const rows = dns ? spec.rows.filter((r) => dns.includes(r[0])) : spec.rows;
  return (
    <>
      <div className="hidden overflow-x-auto md:block">
        <table className="tnum w-full border-collapse text-left">
          <caption className="sr-only">Corrugated tube specifications by nominal size</caption>
          <thead>
            <tr className="border-b border-ink">
              {spec.columns.map((c) => (
                <th key={c} scope="col" className="eyebrow py-3 pr-4 font-medium text-steel">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([dn, idod, area, wall]) => (
              <tr key={dn} className="border-b border-line text-[15px] hover:bg-paper">
                <th scope="row" className="py-4 pr-4 font-medium">{dn}</th>
                <td className="py-4 pr-4">{idod}</td>
                <td className="py-4 pr-4">{area}</td>
                <td className="py-4 pr-4">{wall}</td>
                <td className="py-4 pr-4 text-steel">{spec.material}</td>
                <td className="py-4">{spec.pressure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="tnum border-t border-ink md:hidden" aria-label="Corrugated tube specifications by nominal size">
        {rows.map(([dn, idod, area, wall]) => (
          <li key={dn} className="border-b border-line py-4">
            <div className="flex items-baseline justify-between">
              <span className="font-heading text-m-h3 font-semibold">DN {dn}</span>
              <span className="font-medium">{idod.replace(" × ", " × ")} mm</span>
            </div>
            <p className="mt-1 text-small text-steel">
              {area} m²/m · wall {wall.split(" · ")[0]}–{wall.split(" · ").at(-1)} mm
            </p>
          </li>
        ))}
        <li className="py-3 text-small text-steel">
          All sizes: {spec.material} · {spec.pressure}
        </li>
      </ul>
    </>
  );
}

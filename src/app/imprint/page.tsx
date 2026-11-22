import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMeta("/imprint", "Imprint", "Legal information for Flexcisst Technology UK Ltd.");

export default function Imprint() {
  return <LegalPage title="Imprint" crumb="Imprint" intro="Legal information for Flexcisst Technology UK Ltd." />;
}

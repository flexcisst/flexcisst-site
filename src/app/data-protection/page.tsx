import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMeta("/data-protection", "Data protection", "How Flexcisst Technology UK Ltd handles personal data.");

export default function DataProtection() {
  return <LegalPage title="Data protection" crumb="Data protection" intro="How Flexcisst Technology UK Ltd handles personal data." />;
}

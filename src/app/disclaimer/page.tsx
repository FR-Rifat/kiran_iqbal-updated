import FinalCTA from "@/features/Home/components/FinalCTA";
import DisclaimerChecklist from "@/features/Disclaimer/components/DisclaimerChecklist";
import DisclaimerHero from "@/features/Disclaimer/components/DisclaimerHero";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Installation Disclaimer", "Important installation and preparation information for replacement used engines and transmissions.", "/disclaimer");

export default function DisclaimerPage() {
  return <main className="overflow-hidden"><DisclaimerHero /><DisclaimerChecklist /><FinalCTA /></main>;
}

import FinalCTA from "@/features/Home/components/FinalCTA";
import RefundsReturnsHero from "@/features/RefundsReturns/components/RefundsReturnsHero";
import RefundsReturnsPolicy from "@/features/RefundsReturns/components/RefundsReturnsPolicy";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Refunds & Returns", "Review return, freight-inspection, and warranty-claim information before purchasing a replacement part.", "/refunds-returns");

export default function RefundsReturnsPage() {
  return <main className="overflow-hidden"><RefundsReturnsHero /><RefundsReturnsPolicy /><FinalCTA /></main>;
}

import FAQ from "@/features/Home/components/FAQ";
import FinalCTA from "@/features/Home/components/FinalCTA";
import HowItWorks from "@/features/Home/components/HowItWorks";
import TrustBar from "@/features/Home/components/FeatureBar";
import UsedTransmissionsDetails from "@/features/UsedTransmissions/components/UsedTransmissionsDetails";
import UsedTransmissionsHero from "@/features/UsedTransmissions/components/UsedTransmissionsHero";
import HowItWorks2 from "@/features/UsedTransmissions/components/HowitWork2";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { faqData } from "@/Content/data";

export const metadata: Metadata = pageMetadata("Quality Used Transmissions For Sale", "Find an A-grade used automatic, manual, or CVT transmission with nationwide delivery, promotional savings, and eligible 3-year limited warranty protection.", "/used-transmissions");

export default function UsedTransmissionsPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd data={faqSchema(faqData.faqs.map(({ question, answer }) => ({ question, answer })))} />
      <div id="quote" className="scroll-mt-20"><UsedTransmissionsHero /></div>
      <HowItWorks2 />
      <UsedTransmissionsDetails />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

import FAQ from "@/features/Home/components/FAQ";
import FinalCTA from "@/features/Home/components/FinalCTA";
import UsedEnginesDetails from "@/features/UsedEngines/components/UsedEnginesDetails";
import UsedEnginesHero from "@/features/UsedEngines/components/UsedEnginesHero";
import HowItWorks1 from "@/features/UsedEngines/components/HowitWork";
import BetterWaySection from "@/features/UsedEngines/components/BetterWaySection";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { faqData } from "@/Content/data";

export const metadata: Metadata = pageMetadata("Quality Used Engines For Sale", "Find an A-grade, low-mileage used engine with expert part matching, free nationwide shipping, 20% savings, and a 3-year warranty.", "/used-engines");

export default function UsedEnginesPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd data={faqSchema(faqData.faqs.map(({ question, answer }) => ({ question, answer })))} />
      <div id="quote" className="scroll-mt-20">
        <UsedEnginesHero />
      </div>
      <HowItWorks1 />
      <BetterWaySection/>
      <UsedEnginesDetails />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

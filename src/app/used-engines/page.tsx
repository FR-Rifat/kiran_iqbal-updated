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

export const metadata: Metadata = pageMetadata("Used Engine Quotes", "Request a used engine quote and review vehicle fitment, part information, delivery options, pricing, and warranty terms before purchase.", "/used-engines");

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

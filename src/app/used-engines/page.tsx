import FAQ from "@/features/Home/components/FAQ";
import FinalCTA from "@/features/Home/components/FinalCTA";
import UsedEnginesDetails from "@/features/UsedEngines/components/UsedEnginesDetails";
import UsedEnginesHero from "@/features/UsedEngines/components/UsedEnginesHero";
import HowItWorks1 from "@/features/UsedEngines/components/HowitWork";
import BetterWaySection from "@/features/UsedEngines/components/BetterWaySection";

export default function UsedEnginesPage() {
  return (
    <main className="overflow-hidden">
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

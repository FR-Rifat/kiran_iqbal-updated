import FAQ from "@/features/Home/components/FAQ";
import FinalCTA from "@/features/Home/components/FinalCTA";
import HowItWorks from "@/features/Home/components/HowItWorks";
import TrustBar from "@/features/Home/components/FeatureBar";
import UsedEnginesDetails from "@/features/UsedEngines/components/UsedEnginesDetails";
import UsedEnginesHero from "@/features/UsedEngines/components/UsedEnginesHero";

export default function UsedEnginesPage() {
  return (
    <main className="overflow-hidden">
      <div id="quote" className="scroll-mt-20"><UsedEnginesHero /></div>
      <TrustBar />
      <HowItWorks />
      <UsedEnginesDetails />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

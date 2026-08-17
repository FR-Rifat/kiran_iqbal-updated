import FAQ from "@/features/Home/components/FAQ";
import FinalCTA from "@/features/Home/components/FinalCTA";
import HowItWorks from "@/features/Home/components/HowItWorks";
import TrustBar from "@/features/Home/components/FeatureBar";
import UsedTransmissionsDetails from "@/features/UsedTransmissions/components/UsedTransmissionsDetails";
import UsedTransmissionsHero from "@/features/UsedTransmissions/components/UsedTransmissionsHero";

export default function UsedTransmissionsPage() {
  return (
    <main className="overflow-hidden">
      <div id="quote" className="scroll-mt-20"><UsedTransmissionsHero /></div>
      <TrustBar />
      <HowItWorks />
      <UsedTransmissionsDetails />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

import FinalCTA from "@/features/Home/components/FinalCTA";
import TrustBar from "@/features/Home/components/FeatureBar";
import ShippingWarrantyContent from "@/features/ShippingWarranty/components/ShippingWarrantyContent";
import ShippingWarrantyHero from "@/features/ShippingWarranty/components/ShippingWarrantyHero";
import FAQ from "@/features/Home/components/FAQ";
import HowItWorks2 from "@/features/ShippingWarranty/components/HowitWork3";

export default function ShippingWarrantyPage() {
  return (
    <main className="overflow-hidden">
      <ShippingWarrantyHero />
      <TrustBar />
      <HowItWorks2/>
      <ShippingWarrantyContent />
      <FAQ/>
      <FinalCTA />
    </main>
  );
}

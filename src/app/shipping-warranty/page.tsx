import FinalCTA from "@/features/Home/components/FinalCTA";
import TrustBar from "@/features/Home/components/FeatureBar";
import ShippingWarrantyContent from "@/features/ShippingWarranty/components/ShippingWarrantyContent";
import ShippingWarrantyHero from "@/features/ShippingWarranty/components/ShippingWarrantyHero";

export default function ShippingWarrantyPage() {
  return <main className="overflow-hidden"><ShippingWarrantyHero /><TrustBar /><ShippingWarrantyContent /><FinalCTA /></main>;
}

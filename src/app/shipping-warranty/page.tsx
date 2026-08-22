import FinalCTA from "@/features/Home/components/FinalCTA";
import TrustBar from "@/features/Home/components/FeatureBar";
import ShippingWarrantyContent from "@/features/ShippingWarranty/components/ShippingWarrantyContent";
import ShippingWarrantyHero from "@/features/ShippingWarranty/components/ShippingWarrantyHero";
import FAQ from "@/features/Home/components/FAQ";
import HowItWorks2 from "@/features/ShippingWarranty/components/HowitWork3";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Shipping & Warranty Information", "Review how delivery, freight inspection, and warranty terms are confirmed for an A&R Auto Parts quote.", "/shipping-warranty");

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

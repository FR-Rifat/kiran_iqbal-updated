import FinalCTA from "@/features/Home/components/FinalCTA";
import ContactContent from "@/features/Contact/components/ContactContent";
import ContactHero from "@/features/Contact/components/ContactHero";
import Map from "@/features/Contact/components/Map";
import { business } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata("Contact A&R Auto Parts", "Submit your vehicle details and find a replacement used engine or transmission from A&R Auto Parts.", "/contact");

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <ContactHero />
      <ContactContent />
      {business.address && <div className="bg-[#E6F5E6]">
        <Map />
      </div>}
      {/* <FinalCTA /> */}
    </main>
  );
}

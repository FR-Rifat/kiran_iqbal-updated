import FinalCTA from "@/features/Home/components/FinalCTA";
import ContactContent from "@/features/Contact/components/ContactContent";
import ContactHero from "@/features/Contact/components/ContactHero";
import Map from "@/features/Contact/components/Map";

export default function ContactPage() {
  return <main className="overflow-hidden"><ContactHero /><ContactContent /><div className="bg-[#F8F8F8]"><Map /></div><FinalCTA /></main>;
}
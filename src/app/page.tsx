import QuoteFocusedHome from "@/features/Home/components/QuoteFocusedHome";
import FAQ from "@/features/Home/components/FAQ";
import FinalCTA from "@/features/Home/components/FinalCTA";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { faqData } from "@/Content/data";

export const metadata: Metadata = pageMetadata("Used Engines & Transmissions Quotes", "Request a written quote for a replacement used engine or transmission. Review fitment, price, delivery, and warranty details before purchase.");

export default function Home() {
  return <main className="overflow-hidden">
    <JsonLd data={faqSchema(faqData.faqs.map(({ question, answer }) => ({ question, answer })))} />
    <QuoteFocusedHome />
    <FAQ/>
    <FinalCTA/>
  </main>;
}

import { ArrowDownRight, ArrowUpRight, Asterisk, CircleArrowRight, Dribbble, Instagram, Menu, Sparkles } from "lucide-react";
import Button from "@/components/ui/button";
import Banner from "@/features/Home/components/Banner";
import TrustBar from "@/features/Home/components/FeatureBar";
import HowItWorks from "@/features/Home/components/HowItWorks";
import WhyChooseUs from "@/features/Home/components/WhyChooseUs";
import WarrantyBanner from "@/features/Home/components/WarrantyBanner";
import PaymentOptions from "@/features/Home/components/PaymentOptions";
import Testimonials from "@/features/Home/components/Testimonials";
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
    <Banner />
    <TrustBar />
    <HowItWorks />
    <WhyChooseUs />
    <WarrantyBanner/>
    <PaymentOptions/>
    <Testimonials/>
    <FAQ/>
    <FinalCTA/>
  </main>;
}

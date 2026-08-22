import AboutHero from '@/features/About/components/banner';
import About from '@/features/About/components/banner'
import MissionSection from '@/features/About/components/MissionSection';
import OurStory from '@/features/About/components/OurStory';
import TheARStandard from '@/features/About/components/TheARStandard';
import WhoWeAre from '@/features/About/components/WhoWeAre';
import FAQ from '@/features/Home/components/FAQ';
import TrustBar from '@/features/Home/components/FeatureBar';
import FinalCTA from '@/features/Home/components/FinalCTA';
import React from 'react'
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("About A&R Auto Parts", "Learn how A&R Auto Parts handles replacement engine and transmission quote requests and part information.", "/about");

export default function page() {
  return (
    <div>
      <AboutHero />
      <TrustBar />
      <WhoWeAre />
      <OurStory/>
      <MissionSection/>
      <TheARStandard/>
      <FAQ/>
      <FinalCTA/>
    </div>
  )
}

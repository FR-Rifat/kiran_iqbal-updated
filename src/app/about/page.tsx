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

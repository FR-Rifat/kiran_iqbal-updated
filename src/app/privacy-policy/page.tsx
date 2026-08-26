import FinalCTA from "@/features/Home/components/FinalCTA";
import PrivacyPolicyContent from "@/features/PrivacyPolicy/components/PrivacyPolicyContent";
import PrivacyPolicyHero from "@/features/PrivacyPolicy/components/PrivacyPolicyHero";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Privacy Policy",
  "How A&R Auto Parts collects and uses information submitted through this website.",
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden">
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
      {/* <FinalCTA /> */}
    </main>
  );
}

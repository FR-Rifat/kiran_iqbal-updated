import FinalCTA from "@/features/Home/components/FinalCTA";
import DisclaimerChecklist from "@/features/Disclaimer/components/DisclaimerChecklist";
import DisclaimerHero from "@/features/Disclaimer/components/DisclaimerHero";

export default function DisclaimerPage() {
  return <main className="overflow-hidden"><DisclaimerHero /><DisclaimerChecklist /><FinalCTA /></main>;
}

import { PublicHero } from "@/components/public-hero";
import { Page01BusinessContext } from "@/components/page01-business-context";
import { GovernanceProblemSection } from "@/components/governance-problem-section";
import { BusinessOutcomeSection } from "@/components/business-outcome-section";
import { GovernanceLifecycleSection } from "@/components/governance-lifecycle-section";
import { CapabilityOverview } from "@/components/capability-overview";
import { TrustArchitectureSection } from "@/components/trust-architecture-section";
import { FinalConversionSection } from "@/components/final-conversion-section";

export default function HomePage() {
  return (
    <>
      <PublicHero />
      <Page01BusinessContext />

      <GovernanceProblemSection />
      <BusinessOutcomeSection />
      <GovernanceLifecycleSection />
      <CapabilityOverview />
      <TrustArchitectureSection />
      <FinalConversionSection />
    </>
  );
}

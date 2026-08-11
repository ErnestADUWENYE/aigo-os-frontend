import { TrustArchitectureSection } from "@/components/trust-architecture-section";
import { FinalConversionSection } from "@/components/final-conversion-section";
import { ResourceSalesSection } from "@/components/resource-sales-section";
import { DesignPartnerSection } from "@/components/design-partner-section";
import { IntegrationStorySection } from "@/components/integration-story-section";
import { BusinessOutcomeSection } from "@/components/business-outcome-section";
import { GovernanceProblemSection } from "@/components/governance-problem-section";
import { GovernanceLifecycleSection } from "@/components/governance-lifecycle-section";
import { PublicHero } from "@/components/public-hero";
import { CapabilityOverview } from "@/components/capability-overview";

export default function HomePage() {
  return (
    <>
      <PublicHero />
      <GovernanceProblemSection />
      <CapabilityOverview />
      <GovernanceLifecycleSection />
      <BusinessOutcomeSection />
      <IntegrationStorySection />
      <TrustArchitectureSection />
      <DesignPartnerSection />
      <ResourceSalesSection />
      <FinalConversionSection />
    </>
  );
}



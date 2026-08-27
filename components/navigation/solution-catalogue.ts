export const governSolutions = [
  {
    title: "Unclear Control Applicability",
    href: "/solutions/unclear-control-applicability",
    description:
      "Understand which controls apply to an enterprise object and why.",
  },
  {
    title: "Disconnected Policies & Controls",
    href: "/solutions/disconnected-policies-controls",
    description:
      "See how policies, requirements and the controls intended to address them connect.",
  },
  {
    title: "Unclear Control Coverage",
    href: "/solutions/unclear-control-coverage",
    description:
      "See where expected governance coverage exists, is missing or remains unclear.",
  },
  {
    title: "Unknown Governance Change Impact",
    href: "/solutions/unknown-governance-change-impact",
    description:
      "Understand what governance conclusions may be affected when requirements, controls or enterprise context change.",
  },
  {
    title: "Unclear Ownership & Accountability",
    href: "/solutions/unclear-ownership-accountability",
    description:
      "See where ownership, responsibility or accountability is missing, conflicting or unclear.",
  },
] as const;


export const impactSolutions = [
  {
    title: "Unknown Change Impact",
    href: "/solutions/unknown-change-impact",
    description:
      "Understand which connected services, dependencies and business operations could be affected by a proposed change.",
  },
  {
    title: "Unclear Incident Business Impact",
    href: "/solutions/unclear-incident-business-impact",
    description:
      "Understand which business services and dependencies are connected to an incident and why they are affected.",
  },
  {
    title: "Hidden Dependencies",
    href: "/solutions/hidden-dependencies",
    description:
      "See what an enterprise object depends on and what depends on it.",
  },
  {
    title: "Unclear Critical Service Dependencies",
    href: "/solutions/unclear-critical-service-dependencies",
    description:
      "Understand the connected dependencies supporting a critical business service.",
  },
] as const;


export const solutionCatalogue = {
  govern: governSolutions,
  impact: impactSolutions,
} as const;










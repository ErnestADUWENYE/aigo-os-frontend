// app/(dashboard)/policies/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function PoliciesPage() {
  return (
    <ResourcePage
      title="Policies"
      description="Define and enforce AI governance policies across agents, models, and workflows."
      actions={[{ label: "New Policy", href: "/policies/new" }]}
      metrics={[
        { label: "Policies", value: 32 },
        { label: "Active", value: 25 },
        { label: "Draft", value: 5 },
        { label: "Retired", value: 2 },
      ]}
      sections={[
        { title: "Policy Library", description: "Operational rules for safe and compliant AI usage." },
        { title: "Enforcement", description: "Track policy mode, severity, violations, and exceptions." },
      ]}
    />
  );
}
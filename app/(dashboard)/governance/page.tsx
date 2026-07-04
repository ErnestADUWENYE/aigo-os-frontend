// app/(dashboard)/governance/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function GovernancePage() {
  return (
    <ResourcePage
      title="Governance"
      description="Manage frameworks, controls, reviews, and audit trail for AI oversight."
      actions={[
        { label: "Frameworks", href: "/governance/frameworks" },
        { label: "Controls", href: "/governance/controls" },
      ]}
      metrics={[
        { label: "Frameworks", value: 6 },
        { label: "Controls", value: 84 },
        { label: "Reviews", value: 19 },
        { label: "Audit Events", value: "1.2k" },
      ]}
      sections={[
        { title: "Framework Mapping", description: "Map AI controls to NIST, ISO, EU AI Act, and internal frameworks." },
        { title: "Review Workflow", description: "Approve, reject, escalate, and document AI governance decisions." },
      ]}
    />
  );
}
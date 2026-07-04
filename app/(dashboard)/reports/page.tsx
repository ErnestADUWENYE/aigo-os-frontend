// app/(dashboard)/reports/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function ReportsPage() {
  return (
    <ResourcePage
      title="Reports"
      description="Generate governance, risk, compliance, audit, and executive reports."
      actions={[{ label: "Generate Report", href: "/reports/generate" }]}
      sections={[
        { title: "Executive Summary", description: "Board-ready AI governance and risk reports." },
        { title: "Audit Reports", description: "Framework, control, evidence, and audit trail exports." },
      ]}
    />
  );
}
// app/(dashboard)/incidents/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function IncidentsPage() {
  return (
    <ResourcePage
      title="Incidents"
      description="Investigate AI failures, policy violations, harm reports, and operational events."
      actions={[{ label: "Report Incident", href: "/incidents/new" }]}
      metrics={[
        { label: "Open", value: 3 },
        { label: "Investigating", value: 2 },
        { label: "Resolved", value: 14 },
        { label: "Critical", value: 1 },
      ]}
      sections={[
        { title: "Incident Queue", description: "Track AI incidents from detection through resolution." },
        { title: "Root Cause", description: "Capture impact, timeline, affected systems, and corrective actions." },
      ]}
    />
  );
}
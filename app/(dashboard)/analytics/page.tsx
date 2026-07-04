// app/(dashboard)/analytics/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function AnalyticsPage() {
  return (
    <ResourcePage
      title="Analytics"
      description="Analyze AI adoption, risk posture, compliance readiness, and operational trends."
      metrics={[
        { label: "Compliance Score", value: "82%" },
        { label: "Risk Trend", value: "+4%" },
        { label: "Controls Passed", value: "76%" },
        { label: "Review SLA", value: "91%" },
      ]}
      sections={[
        { title: "Risk Analytics", description: "Trends across risk categories, severity, and mitigation progress." },
        { title: "Governance KPIs", description: "Review velocity, control health, evidence readiness, and audit performance." },
      ]}
    />
  );
}
// app/(dashboard)/alerts/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function AlertsPage() {
  return (
    <ResourcePage
      title="Alerts"
      description="Monitor governance alerts, policy breaches, risk threshold changes, and system warnings."
      metrics={[
        { label: "Active Alerts", value: 9 },
        { label: "Critical", value: 2 },
        { label: "Warnings", value: 5 },
        { label: "Resolved Today", value: 11 },
      ]}
      sections={[
        { title: "Alert Feed", description: "Real-time governance and operational signals." },
        { title: "Escalations", description: "Alerts requiring owner action or executive visibility." },
      ]}
    />
  );
}
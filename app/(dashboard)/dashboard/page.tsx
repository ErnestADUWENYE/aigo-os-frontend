// app/(dashboard)/dashboard/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function DashboardPage() {
  return (
    <ResourcePage
      title="AIGO Command Center"
      description="Monitor AI systems, risks, incidents, governance posture, and compliance activity."
      metrics={[
        { label: "AI Agents", value: 24, helper: "Registered systems" },
        { label: "Open Risks", value: 7, helper: "Requires attention" },
        { label: "Incidents", value: 3, helper: "Active investigations" },
        { label: "Compliance", value: "82%", helper: "Overall posture" },
      ]}
      sections={[
        { title: "Risk Watch", description: "Critical and high-risk AI systems needing review." },
        { title: "Governance Activity", description: "Recent policy, control, and review decisions." },
        { title: "Evidence Readiness", description: "Evidence collection status for audits and frameworks." },
        { title: "Platform Health", description: "Backend, integrations, and monitoring status." },
      ]}
    />
  );
}
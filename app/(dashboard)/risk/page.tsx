// app/(dashboard)/risk/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function RiskPage() {
  return (
    <ResourcePage
      title="Risk Register"
      description="Identify, assess, mitigate, and monitor AI risk across the platform."
      actions={[{ label: "New Risk", href: "/risk/new" }]}
      metrics={[
        { label: "Open Risks", value: 7 },
        { label: "Critical", value: 2 },
        { label: "Mitigated", value: 11 },
        { label: "Residual High", value: 4 },
      ]}
      sections={[
        { title: "Risk Register", description: "Enterprise AI risk records with severity and mitigation plans." },
        { title: "Mitigation Tracking", description: "Owners, due dates, residual risk, and treatment progress." },
      ]}
    />
  );
}
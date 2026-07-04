// app/(dashboard)/agents/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function AgentsPage() {
  return (
    <ResourcePage
      title="Agent Registry"
      description="Inventory and govern autonomous AI agents across the organization."
      actions={[{ label: "Register Agent", href: "/agents/new" }]}
      metrics={[
        { label: "Total Agents", value: 24 },
        { label: "High Risk", value: 5 },
        { label: "In Review", value: 8 },
        { label: "Approved", value: 16 },
      ]}
      sections={[
        { title: "Agent Inventory", description: "View all registered AI agents and their ownership." },
        { title: "Risk Classification", description: "Track autonomy level, risk tier, and approval state." },
      ]}
    />
  );
}
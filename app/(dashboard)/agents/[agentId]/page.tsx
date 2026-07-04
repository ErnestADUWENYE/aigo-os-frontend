// app/(dashboard)/agents/[agentId]/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ agentId: string }>;
}) {
  const { agentId } = await params;

  return (
    <ResourcePage
      title="Agent Details"
      description={`Governance profile for agent ${agentId}.`}
      metrics={[
        { label: "Risk Level", value: "High" },
        { label: "Controls", value: 12 },
        { label: "Incidents", value: 1 },
        { label: "Status", value: "Monitoring" },
      ]}
      sections={[
        { title: "Overview", description: "Purpose, owner, autonomy, data access, and operational context." },
        { title: "Governance History", description: "Reviews, incidents, risks, controls, and audit events." },
      ]}
    />
  );
}
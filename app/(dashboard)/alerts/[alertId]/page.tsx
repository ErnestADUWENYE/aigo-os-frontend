import ResourcePage from "@/components/shared/ResourcePage";

export default async function AlertDetailPage({
  params,
}: {
  params: Promise<{ alertId: string }>;
}) {
  const { alertId } = await params;

  return (
    <ResourcePage
      title="Alert Details"
      description={`Review alert ${alertId}, severity, source, owner, and resolution status.`}
      metrics={[
        { label: "Severity", value: "High" },
        { label: "Status", value: "Open" },
        { label: "Source", value: "Policy" },
        { label: "SLA", value: "24h" },
      ]}
      sections={[
        {
          title: "Alert Context",
          description:
            "Source system, affected AI asset, triggering signal, and governance impact.",
        },
        {
          title: "Response Workflow",
          description:
            "Assigned owner, escalation path, remediation notes, and resolution history.",
        },
      ]}
    />
  );
}
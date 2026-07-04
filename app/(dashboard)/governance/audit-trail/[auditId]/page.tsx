import ResourcePage from "@/components/shared/ResourcePage";

export default async function AuditDetailPage({
  params,
}: {
  params: Promise<{ auditId: string }>;
}) {
  const { auditId } = await params;

  return (
    <ResourcePage
      title="Audit Event Details"
      description={`Immutable event record, actor context, entity change, and metadata for ${auditId}.`}
      metrics={[
        { label: "Action", value: "Updated" },
        { label: "Actor", value: "Admin" },
        { label: "Entity", value: "Policy" },
        { label: "Integrity", value: "Verified" },
      ]}
      sections={[
        {
          title: "Event Context",
          description: "Actor, action, entity, timestamp, request ID, IP address, and workspace context.",
        },
        {
          title: "Change Record",
          description: "Previous values, new values, metadata, and compliance-relevant audit notes.",
        },
      ]}
    />
  );
}
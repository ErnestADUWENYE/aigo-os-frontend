import ResourcePage from "@/components/shared/ResourcePage";

export default async function ControlDetailPage({
  params,
}: {
  params: Promise<{ controlId: string }>;
}) {
  const { controlId } = await params;

  return (
    <ResourcePage
      title="Control Details"
      description={`Control design, implementation, evidence, testing, and framework mapping for ${controlId}.`}
      metrics={[
        { label: "Status", value: "Implemented" },
        { label: "Evidence", value: "Partial" },
        { label: "Mapped Frameworks", value: 3 },
        { label: "Last Test", value: "Passed" },
      ]}
      sections={[
        {
          title: "Control Design",
          description: "Objective, scope, owner, frequency, expected operation, and linked AI assets.",
        },
        {
          title: "Testing & Evidence",
          description: "Evidence items, testing results, exceptions, gaps, and remediation notes.",
        },
      ]}
    />
  );
}
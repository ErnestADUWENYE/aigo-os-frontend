import ResourcePage from "@/components/shared/ResourcePage";

export default async function FrameworkDetailPage({
  params,
}: {
  params: Promise<{ frameworkId: string }>;
}) {
  const { frameworkId } = await params;

  return (
    <ResourcePage
      title="Framework Details"
      description={`Framework mapping, control coverage, evidence readiness, and compliance posture for ${frameworkId}.`}
      metrics={[
        { label: "Controls", value: 24 },
        { label: "Mapped", value: 18 },
        { label: "Evidence Ready", value: "71%" },
        { label: "Open Gaps", value: 6 },
      ]}
      sections={[
        {
          title: "Framework Scope",
          description: "Requirements, domains, obligations, and applicable AI governance controls.",
        },
        {
          title: "Compliance Gaps",
          description: "Unmapped requirements, missing evidence, owner actions, and remediation timeline.",
        },
      ]}
    />
  );
}
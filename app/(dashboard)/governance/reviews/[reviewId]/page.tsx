import ResourcePage from "@/components/shared/ResourcePage";

export default async function ReviewDetailPage({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const { reviewId } = await params;

  return (
    <ResourcePage
      title="Review Details"
      description={`Governance review, decision context, evidence, risk posture, and approval workflow for ${reviewId}.`}
      metrics={[
        { label: "Risk", value: "High" },
        { label: "Status", value: "Pending" },
        { label: "Evidence", value: 5 },
        { label: "SLA", value: "48h" },
      ]}
      sections={[
        {
          title: "Decision Context",
          description: "Requested action, affected AI asset, risk rationale, policy impact, and owner notes.",
        },
        {
          title: "Review Decision",
          description: "Approve, reject, request changes, escalate, or document an exception with evidence.",
        },
      ]}
    />
  );
}
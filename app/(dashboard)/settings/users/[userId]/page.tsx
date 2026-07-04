import PageShell from "@/components/shared/PageShell";
import MetricCard from "@/components/shared/MetricCard";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return (
    <PageShell
      title="User Details"
      description={`Access profile, role assignment, workspace membership, and governance activity for ${userId}.`}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Status" value="Active" helper="Account enabled" />
        <MetricCard label="Role" value="Reviewer" helper="Access level" />
        <MetricCard label="Workspaces" value={3} helper="Assigned scopes" />
        <MetricCard label="Reviews" value={12} helper="Decision history" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Access Profile</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Role: Governance reviewer</p>
            <p>Permissions: Review, comment, approve, and request evidence</p>
            <p>Workspaces: Enterprise AI, Risk & Compliance, Product AI</p>
            <p>Authentication: Managed by identity provider</p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Governance Activity</h2>

          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <p>Completed model governance review</p>
            <p>Approved evidence mapping request</p>
            <p>Commented on high-risk agent review</p>
            <p>Access change recorded in audit trail</p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
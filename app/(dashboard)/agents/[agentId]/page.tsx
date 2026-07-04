import PageShell from "@/components/shared/PageShell";
import MetricCard from "@/components/shared/MetricCard";

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ agentId: string }>;
}) {
  const { agentId } = await params;

  return (
    <PageShell
      title="Agent Details"
      description={`Governance profile, risk posture, controls, and activity for ${agentId}.`}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Risk Level" value="High" helper="Requires review" />
        <MetricCard label="Controls" value={12} helper="Mapped controls" />
        <MetricCard label="Incidents" value={1} helper="Open incident" />
        <MetricCard label="Status" value="Monitoring" helper="Active state" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Agent Profile</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Owner: Risk Operations</p>
            <p>Autonomy: Decision support with human approval</p>
            <p>Data access: Customer, transaction, and policy data</p>
            <p>Environment: Production monitored</p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Governance Timeline</h2>
          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <p>Risk review requested</p>
            <p>Policy mapping completed</p>
            <p>Evidence package pending</p>
            <p>Monitoring enabled</p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
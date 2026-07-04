import PageShell from "@/components/shared/PageShell";
import MetricCard from "@/components/shared/MetricCard";

export default async function AlertDetailPage({
  params,
}: {
  params: Promise<{ alertId: string }>;
}) {
  const { alertId } = await params;

  return (
    <PageShell
      title="Alert Details"
      description={`Alert context, severity, source signal, escalation path, and resolution activity for ${alertId}.`}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Severity" value="High" helper="Priority signal" />
        <MetricCard label="Status" value="Open" helper="Needs action" />
        <MetricCard label="Source" value="Policy" helper="Trigger origin" />
        <MetricCard label="SLA" value="24h" helper="Response target" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Alert Context</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Source: Governance monitoring and policy signal</p>
            <p>Affected asset: AI agent or model workflow</p>
            <p>Owner: Governance Operations</p>
            <p>Escalation: Required when unresolved past SLA</p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Response Activity</h2>

          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <p>Alert triggered from policy condition</p>
            <p>Owner assigned for review</p>
            <p>Linked risk and incident checks pending</p>
            <p>Resolution notes not yet submitted</p>
          </div>
        </section>
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="font-semibold text-gray-900">Resolution Plan</h2>
        <p className="mt-3 text-sm text-gray-500">
          Validate the source signal, determine whether a policy violation or
          incident should be opened, attach evidence, document remediation, and
          close the alert with owner approval.
        </p>
      </section>
    </PageShell>
  );
}
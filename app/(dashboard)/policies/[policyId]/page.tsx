import PageShell from "@/components/shared/PageShell";
import MetricCard from "@/components/shared/MetricCard";

export default async function PolicyDetailPage({
  params,
}: {
  params: Promise<{ policyId: string }>;
}) {
  const { policyId } = await params;

  return (
    <PageShell
      title="Policy Details"
      description={`Policy governance record, enforcement state, exceptions, and linked controls for ${policyId}.`}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Severity" value="High" helper="Governance impact" />
        <MetricCard label="Mode" value="Enforced" helper="Active guardrail" />
        <MetricCard label="Exceptions" value={2} helper="Approved waivers" />
        <MetricCard label="Controls" value={8} helper="Mapped controls" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Policy Scope</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Applies to: High-impact AI systems and agent workflows</p>
            <p>Owner: Governance Office</p>
            <p>Review cadence: Quarterly</p>
            <p>Exception process: Requires documented approval and evidence</p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Enforcement Activity</h2>

          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <p>Policy activated</p>
            <p>Linked to framework controls</p>
            <p>Two exceptions approved with mitigation notes</p>
            <p>Next review scheduled</p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
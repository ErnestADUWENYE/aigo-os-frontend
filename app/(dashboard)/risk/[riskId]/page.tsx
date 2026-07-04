import PageShell from "@/components/shared/PageShell";
import MetricCard from "@/components/shared/MetricCard";

export default async function RiskDetailPage({
  params,
}: {
  params: Promise<{ riskId: string }>;
}) {
  const { riskId } = await params;

  return (
    <PageShell
      title="Risk Details"
      description={`Risk assessment, mitigation plan, controls, evidence, and activity for ${riskId}.`}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Inherent Risk" value="Critical" helper="Before controls" />
        <MetricCard label="Residual Risk" value="High" helper="After treatment" />
        <MetricCard label="Controls" value={6} helper="Mapped controls" />
        <MetricCard label="Status" value="Mitigating" helper="Owner active" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Risk Scenario</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Category: Human oversight and autonomous decisioning</p>
            <p>Owner: Risk Office</p>
            <p>Affected systems: Agent workflows and decision support models</p>
            <p>Impact: Regulatory, operational, customer, and reputational harm</p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Mitigation Activity</h2>

          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <p>Human approval control mapped</p>
            <p>Evidence request opened</p>
            <p>Policy exception review pending</p>
            <p>Residual risk awaiting owner confirmation</p>
          </div>
        </section>
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="font-semibold text-gray-900">Treatment Plan</h2>
        <p className="mt-3 text-sm text-gray-500">
          Strengthen human oversight, enforce escalation for high-confidence
          autonomous actions, monitor incident signals, and require evidence
          before risk acceptance.
        </p>
      </section>
    </PageShell>
  );
}
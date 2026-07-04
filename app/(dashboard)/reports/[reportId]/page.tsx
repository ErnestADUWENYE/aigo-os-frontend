import PageShell from "@/components/shared/PageShell";
import MetricCard from "@/components/shared/MetricCard";

export default async function ReportDetailPage({
  params,
}: {
  params: Promise<{ reportId: string }>;
}) {
  const { reportId } = await params;

  return (
    <PageShell
      title="Report Details"
      description={`Report summary, included data, export readiness, and governance context for ${reportId}.`}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Status" value="Ready" helper="Exportable" />
        <MetricCard label="Sections" value={8} helper="Included" />
        <MetricCard label="Evidence" value="71%" helper="Ready" />
        <MetricCard label="Controls" value={42} helper="Covered" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Report Scope</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Audience: Executive, compliance, or audit stakeholders</p>
            <p>Includes: Risks, controls, evidence, incidents, and reviews</p>
            <p>Frameworks: NIST AI RMF, ISO/IEC 42001, internal policy</p>
            <p>Owner: Governance Office</p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Export Readiness</h2>

          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <p>Evidence package checked</p>
            <p>Control coverage summarized</p>
            <p>Risk posture included</p>
            <p>Audit trail references attached</p>
          </div>
        </section>
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="font-semibold text-gray-900">Executive Summary</h2>
        <p className="mt-3 text-sm text-gray-500">
          This report summarizes AI governance maturity, risk exposure, control
          effectiveness, evidence readiness, and required remediation actions for
          the selected reporting period.
        </p>
      </section>
    </PageShell>
  );
}
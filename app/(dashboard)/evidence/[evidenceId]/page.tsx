import PageShell from "@/components/shared/PageShell";
import MetricCard from "@/components/shared/MetricCard";

export default async function EvidenceDetailPage({
  params,
}: {
  params: Promise<{ evidenceId: string }>;
}) {
  const { evidenceId } = await params;

  return (
    <PageShell
      title="Evidence Details"
      description={`Evidence record, mappings, freshness, audit readiness, and review history for ${evidenceId}.`}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Status" value="Ready" helper="Audit usable" />
        <MetricCard label="Linked Controls" value={3} helper="Mapped" />
        <MetricCard label="Frameworks" value={2} helper="Coverage" />
        <MetricCard label="Freshness" value="Current" helper="No refresh due" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Evidence Profile</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Type: Assessment document</p>
            <p>Owner: Compliance Office</p>
            <p>Retention: Governance archive</p>
            <p>Review cadence: Quarterly</p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Mapped Records</h2>
          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <p>Linked to model evaluation control</p>
            <p>Linked to AI risk treatment plan</p>
            <p>Linked to NIST AI RMF evidence package</p>
            <p>Included in audit export readiness</p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
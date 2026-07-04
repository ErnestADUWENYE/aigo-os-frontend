import PageShell from "@/components/shared/PageShell";
import MetricCard from "@/components/shared/MetricCard";

export default async function IncidentDetailPage({
  params,
}: {
  params: Promise<{ incidentId: string }>;
}) {
  const { incidentId } = await params;

  return (
    <PageShell
      title="Incident Details"
      description={`Investigation record, impact assessment, remediation plan, and audit history for ${incidentId}.`}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Severity" value="High" helper="Business impact" />
        <MetricCard label="Status" value="Investigating" helper="Owner active" />
        <MetricCard label="Linked Risks" value={2} helper="Mapped records" />
        <MetricCard label="Evidence" value={5} helper="Attached items" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Incident Summary</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Category: Policy violation and operational reliability</p>
            <p>Owner: Governance Office</p>
            <p>Affected system: Customer support AI workflow</p>
            <p>Impact: Incorrect response escalated for review and containment</p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Response Timeline</h2>

          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <p>Incident opened from monitoring alert</p>
            <p>Owner assigned and severity confirmed</p>
            <p>Temporary control activated</p>
            <p>Root cause review in progress</p>
          </div>
        </section>
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="font-semibold text-gray-900">Remediation Plan</h2>
        <p className="mt-3 text-sm text-gray-500">
          Contain affected workflow, validate policy breach, attach supporting
          evidence, update controls, complete root cause analysis, and document
          post-incident review before closure.
        </p>
      </section>
    </PageShell>
  );
}
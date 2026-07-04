import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

export default async function IntegrationDetailPage({
  params,
}: {
  params: Promise<{ integrationId: string }>;
}) {
  const { integrationId } = await params;

  return (
    <PageShell
      title="Integration Details"
      description={`Connection health, synchronization activity, governance scope, and operational status for ${integrationId}.`}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard
          label="Status"
          value="Connected"
          helper="Active connection"
        />

        <MetricCard
          label="Sync Health"
          value="Healthy"
          helper="Operating normally"
        />

        <MetricCard
          label="Records"
          value="1.8k"
          helper="Governance records"
        />

        <MetricCard
          label="Last Sync"
          value="5m"
          helper="Minutes ago"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">
            Connection Profile
          </h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Environment: Production</p>
            <p>Authentication: Managed integration credentials</p>
            <p>Sync mode: Scheduled and event-driven</p>
            <p>Owner: Platform Operations</p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">
            Governance Scope
          </h2>

          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <p>AI assets synchronized into inventory</p>
            <p>Operational signals evaluated for alerts</p>
            <p>Evidence records linked to governance controls</p>
            <p>Integration events recorded in audit trail</p>
          </div>
        </section>
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="font-semibold text-gray-900">
          Synchronization Activity
        </h2>

        <div className="mt-4 space-y-4 text-sm text-gray-600">
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            Inventory synchronization completed successfully.
          </div>

          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            Governance signals processed and mapped to active policies.
          </div>

          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            Evidence metadata refreshed for connected records.
          </div>

          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            Audit event written for integration synchronization.
          </div>
        </div>
      </section>
    </PageShell>
  );
}
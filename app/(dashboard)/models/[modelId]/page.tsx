import PageShell from "@/components/shared/PageShell";
import MetricCard from "@/components/shared/MetricCard";

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ modelId: string }>;
}) {
  const { modelId } = await params;

  return (
    <PageShell
      title="Model Details"
      description={`Model governance profile, evaluations, restrictions, and linked AI systems for ${modelId}.`}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Risk Level" value="Medium" helper="Reviewed" />
        <MetricCard label="Linked Agents" value={6} helper="Using model" />
        <MetricCard label="Evaluations" value={4} helper="Completed" />
        <MetricCard label="Status" value="Approved" helper="Production ready" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Model Profile</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Provider: Approved vendor or internal model owner</p>
            <p>Version: Current governed release</p>
            <p>Use case: Documented and approved AI workflow</p>
            <p>Restrictions: No use outside approved business context</p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Evaluation Record</h2>
          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <p>Safety evaluation completed</p>
            <p>Quality benchmark reviewed</p>
            <p>Bias and fairness assessment pending refresh</p>
            <p>Evidence linked to governance controls</p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
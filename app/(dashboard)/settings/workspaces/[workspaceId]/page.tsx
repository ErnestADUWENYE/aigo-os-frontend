import PageShell from "@/components/shared/PageShell";
import MetricCard from "@/components/shared/MetricCard";

export default async function WorkspaceDetailPage({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) {
  const { workspaceId } = await params;

  return (
    <PageShell
      title="Workspace Details"
      description={`Workspace configuration, governance scope, members, controls, and activity for ${workspaceId}.`}
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Status" value="Active" helper="Workspace enabled" />
        <MetricCard label="Members" value={12} helper="Assigned users" />
        <MetricCard label="AI Assets" value={21} helper="In scope" />
        <MetricCard label="Open Reviews" value={5} helper="Pending decisions" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Workspace Profile</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Owner: Governance Office</p>
            <p>Scope: AI assets, risks, controls, incidents, and evidence</p>
            <p>Environment: Production governance</p>
            <p>Access model: Role-based workspace permissions</p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Governance Activity</h2>

          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <p>AI assets added to workspace registry</p>
            <p>Controls mapped to active frameworks</p>
            <p>Evidence package updated</p>
            <p>Open reviews awaiting owner action</p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
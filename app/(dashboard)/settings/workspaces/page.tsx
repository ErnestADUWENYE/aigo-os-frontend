import Link from "next/link";
import { Workflow, ShieldCheck, Users, Activity } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const workspaces = [
  {
    id: "workspace-enterprise-ai",
    name: "Enterprise AI",
    owner: "Governance Office",
    scope: "Corporate AI oversight",
    status: "Active",
  },
  {
    id: "workspace-risk",
    name: "Risk & Compliance",
    owner: "Risk Office",
    scope: "Risk and controls",
    status: "Active",
  },
  {
    id: "workspace-product",
    name: "Product AI",
    owner: "Product Operations",
    scope: "Product copilots and agents",
    status: "Active",
  },
];

export default function WorkspacesPage() {
  return (
    <PageShell
      title="Workspaces"
      description="Manage governance scopes, business units, environments, access boundaries, and workspace-level controls."
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Workspaces" value={4} helper="Governance scopes" />
        <MetricCard label="Active" value={3} helper="Operational" />
        <MetricCard label="Users" value={18} helper="Assigned members" />
        <MetricCard label="Controls" value={84} helper="Mapped controls" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <Workflow className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Workspace Registry</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {workspaces.map((workspace) => (
            <Link
              key={workspace.id}
              href={`/settings/workspaces/${workspace.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-5"
            >
              <div className="md:col-span-2">
                <p className="font-medium text-gray-900">{workspace.name}</p>
                <p className="text-sm text-gray-500">
                  Owner: {workspace.owner}
                </p>
              </div>

              <p className="text-sm text-gray-600 md:col-span-2">
                {workspace.scope}
              </p>

              <p className="text-sm text-gray-600">
                Status: {workspace.status}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <ShieldCheck className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Governance Scope
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Separate AI governance by business unit, product, region, or environment.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Users className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Access Boundaries
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Assign users, reviewers, approvers, and workspace-specific permissions.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Activity className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Workspace Health
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Track workspace activity, stale records, open reviews, and unresolved risks.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
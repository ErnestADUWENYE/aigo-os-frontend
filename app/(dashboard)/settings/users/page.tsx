import Link from "next/link";
import { ShieldCheck, UserCog, Users } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const users = [
  {
    id: "user-governance-admin",
    name: "Governance Admin",
    email: "admin@aigo.local",
    role: "Admin",
    status: "Active",
  },
  {
    id: "user-risk-owner",
    name: "Risk Owner",
    email: "risk@aigo.local",
    role: "Risk Manager",
    status: "Active",
  },
  {
    id: "user-compliance-reviewer",
    name: "Compliance Reviewer",
    email: "compliance@aigo.local",
    role: "Reviewer",
    status: "Active",
  },
];

export default function UsersPage() {
  return (
    <PageShell
      title="Users"
      description="Manage AIGO members, roles, access permissions, reviewers, approvers, and workspace assignments."
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Users" value={18} helper="Active members" />
        <MetricCard label="Admins" value={3} helper="Privileged access" />
        <MetricCard label="Reviewers" value={7} helper="Decision makers" />
        <MetricCard label="Pending Invites" value={2} helper="Awaiting join" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">User Directory</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {users.map((user) => (
            <Link
              key={user.id}
              href={`/settings/users/${user.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-5"
            >
              <div className="md:col-span-2">
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              <p className="text-sm text-gray-600">Role: {user.role}</p>
              <p className="text-sm text-gray-600">Status: {user.status}</p>
              <p className="text-sm text-gray-400">Manage user →</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <ShieldCheck className="h-5 w-5 text-gray-500" />

          <h3 className="mt-3 font-semibold text-gray-900">
            Role-Based Access
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Control who can create, approve, review, export, administer, and audit AIGO records.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <UserCog className="h-5 w-5 text-gray-500" />

          <h3 className="mt-3 font-semibold text-gray-900">
            Reviewer Assignment
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Assign governance reviewers and approvers for risks, policies, models, and agents.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
import Link from "next/link";
import {
  Building2,
  HeartPulse,
  Settings,
  Users,
  Workflow,
} from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const settingsAreas = [
  {
    title: "Organization",
    description: "Manage tenant profile, compliance context, and enterprise governance settings.",
    href: "/settings/organization",
    icon: Building2,
  },
  {
    title: "Workspaces",
    description: "Configure business units, environments, teams, and governance scopes.",
    href: "/settings/workspaces",
    icon: Workflow,
  },
  {
    title: "Users",
    description: "Manage members, roles, permissions, reviewers, and platform access.",
    href: "/settings/users",
    icon: Users,
  },
  {
    title: "Platform Health",
    description: "Monitor backend services, integrations, sync jobs, and operational readiness.",
    href: "/settings/platform-health",
    icon: HeartPulse,
  },
];

export default function SettingsPage() {
  return (
    <PageShell
      title="Settings"
      description="Administer organization, workspaces, users, access control, and AIGO platform operations."
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Users" value={18} helper="Active members" />
        <MetricCard label="Workspaces" value={4} helper="Governance scopes" />
        <MetricCard label="Roles" value={5} helper="Permission groups" />
        <MetricCard label="Health" value="OK" helper="Platform status" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-gray-500" />
          <h2 className="font-semibold text-gray-900">Administration</h2>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {settingsAreas.map((area) => {
            const Icon = area.icon;

            return (
              <Link
                key={area.href}
                href={area.href}
                className="rounded-xl border border-gray-200 p-5 transition hover:bg-gray-50"
              >
                <Icon className="h-5 w-5 text-gray-500" />
                <h3 className="mt-3 font-semibold text-gray-900">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {area.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
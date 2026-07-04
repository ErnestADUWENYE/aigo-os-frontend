import Link from "next/link";
import { History } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const events = [
  {
    id: "audit-001",
    action: "Policy updated",
    actor: "Governance Admin",
    entity: "Human Oversight Policy",
    time: "Today",
  },
  {
    id: "audit-002",
    action: "Risk record created",
    actor: "Risk Office",
    entity: "Autonomous decisioning risk",
    time: "Yesterday",
  },
  {
    id: "audit-003",
    action: "Evidence uploaded",
    actor: "Compliance User",
    entity: "Control evidence package",
    time: "2 days ago",
  },
];

export default function AuditTrailPage() {
  return (
    <PageShell
      title="Audit Trail"
      description="Review immutable governance activity, user actions, system events, and compliance history."
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Events" value="1.2k" helper="Tracked actions" />
        <MetricCard label="Today" value={42} helper="Recent activity" />
        <MetricCard label="Users" value={18} helper="Active actors" />
        <MetricCard label="Exports" value={7} helper="Audit packages" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <History className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Recent Events</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/governance/audit-trail/${event.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-4"
            >
              <div>
                <p className="font-medium text-gray-900">{event.action}</p>
                <p className="text-sm text-gray-500">{event.entity}</p>
              </div>
              <p className="text-sm text-gray-600">Actor: {event.actor}</p>
              <p className="text-sm text-gray-600">{event.time}</p>
              <p className="text-sm text-gray-400">View event →</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
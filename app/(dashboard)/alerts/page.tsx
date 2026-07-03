import AlertTable from "@/components/alerts/AlertTable";

const alerts = [
  { id: "alt_001", title: "Critical policy violation detected", source: "Policy Engine", severity: "critical", status: "active", created_at: "2026-07-03" },
  { id: "alt_002", title: "Agent risk score increased", source: "Risk Monitor", severity: "high", status: "active", created_at: "2026-07-03" },
];

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Real-Time Governance Alerts</h1>
        <p className="mt-2 text-gray-500">
          Monitor high-priority AI governance alerts across agents, policies, and risk systems.
        </p>
      </div>

      <AlertTable alerts={alerts} />
    </div>
  );
}
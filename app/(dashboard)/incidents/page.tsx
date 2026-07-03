import IncidentTable from "@/components/incidents/IncidentTable";

const incidents = [
  { id: "inc_001", title: "Unauthorized financial workflow attempt", agent_id: "ag_002", severity: "high", status: "open", created_at: "2026-07-03" },
  { id: "inc_002", title: "Sensitive data exposure risk detected", agent_id: "ag_001", severity: "medium", status: "investigating", created_at: "2026-07-02" },
];

export default function IncidentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Governance Incidents</h1>
        <p className="mt-2 text-gray-500">
          Track, investigate, and resolve AI safety, security, privacy, and compliance incidents.
        </p>
      </div>

      <IncidentTable incidents={incidents} />
    </div>
  );
}
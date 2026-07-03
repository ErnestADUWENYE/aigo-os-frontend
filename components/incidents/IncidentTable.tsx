import Badge from "../ui/Badge";
import EmptyState from "../ui/EmptyState";
import Table from "../ui/Table";

type Incident = {
  id: string;
  title?: string;
  severity?: string;
  status?: string;
  agent_id?: string;
  created_at?: string;
};

export default function IncidentTable({ incidents }: { incidents: Incident[] }) {
  if (!incidents.length) {
    return (
      <EmptyState
        title="No incidents detected"
        description="Governance, compliance, and AI safety incidents will appear here."
      />
    );
  }

  return (
    <Table headers={["Incident", "Agent", "Severity", "Status", "Created"]}>
      {incidents.map((incident) => (
        <tr key={incident.id}>
          <td className="px-4 py-3 font-medium text-gray-900">{incident.title}</td>
          <td className="px-4 py-3 text-gray-600">{incident.agent_id || "N/A"}</td>
          <td className="px-4 py-3">
            <Badge variant={incident.severity === "high" ? "danger" : "warning"}>
              {incident.severity || "medium"}
            </Badge>
          </td>
          <td className="px-4 py-3">
            <Badge variant={incident.status === "resolved" ? "success" : "warning"}>
              {incident.status || "open"}
            </Badge>
          </td>
          <td className="px-4 py-3 text-gray-600">{incident.created_at || "N/A"}</td>
        </tr>
      ))}
    </Table>
  );
}
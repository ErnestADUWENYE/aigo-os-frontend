import Badge from "../ui/Badge";
import EmptyState from "../ui/EmptyState";
import Table from "../ui/Table";

type Alert = {
  id: string;
  title?: string;
  severity?: string;
  status?: string;
  source?: string;
  created_at?: string;
};

export default function AlertTable({ alerts }: { alerts: Alert[] }) {
  if (!alerts.length) {
    return (
      <EmptyState
        title="No active alerts"
        description="Real-time governance and compliance alerts will appear here."
      />
    );
  }

  return (
    <Table headers={["Alert", "Source", "Severity", "Status", "Created"]}>
      {alerts.map((alert) => (
        <tr key={alert.id}>
          <td className="px-4 py-3 font-medium text-gray-900">{alert.title}</td>
          <td className="px-4 py-3 text-gray-600">{alert.source || "System"}</td>
          <td className="px-4 py-3">
            <Badge
              variant={
                alert.severity === "critical"
                  ? "critical"
                  : alert.severity === "high"
                  ? "danger"
                  : "warning"
              }
            >
              {alert.severity || "medium"}
            </Badge>
          </td>
          <td className="px-4 py-3">
            <Badge variant={alert.status === "resolved" ? "success" : "danger"}>
              {alert.status || "active"}
            </Badge>
          </td>
          <td className="px-4 py-3 text-gray-600">{alert.created_at || "N/A"}</td>
        </tr>
      ))}
    </Table>
  );
}
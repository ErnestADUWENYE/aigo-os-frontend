import Badge from "../ui/Badge";
import EmptyState from "../ui/EmptyState";
import Table from "../ui/Table";

type Policy = {
  id: string;
  name?: string;
  category?: string;
  severity?: string;
  status?: string;
  enforcement?: string;
};

export default function PolicyTable({ policies }: { policies: Policy[] }) {
  if (!policies.length) {
    return (
      <EmptyState
        title="No governance policies created"
        description="Create policies to enforce safety, compliance, privacy, and operational controls."
      />
    );
  }

  return (
    <Table headers={["Policy", "Category", "Severity", "Status", "Enforcement"]}>
      {policies.map((policy) => (
        <tr key={policy.id}>
          <td className="px-4 py-3 font-medium text-gray-900">{policy.name}</td>
          <td className="px-4 py-3 text-gray-600">{policy.category || "N/A"}</td>
          <td className="px-4 py-3">
            <Badge
              variant={
                policy.severity === "high"
                  ? "danger"
                  : policy.severity === "medium"
                  ? "warning"
                  : "neutral"
              }
            >
              {policy.severity || "low"}
            </Badge>
          </td>
          <td className="px-4 py-3">
            <Badge variant={policy.status === "active" ? "success" : "neutral"}>
              {policy.status || "inactive"}
            </Badge>
          </td>
          <td className="px-4 py-3 text-gray-600">
            {policy.enforcement || "Monitor only"}
          </td>
        </tr>
      ))}
    </Table>
  );
}
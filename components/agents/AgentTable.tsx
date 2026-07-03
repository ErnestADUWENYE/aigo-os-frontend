import Badge from "../ui/Badge";
import EmptyState from "../ui/EmptyState";
import Table from "../ui/Table";

type Agent = {
  id: string;
  name?: string;
  type?: string;
  status?: string;
  risk_level?: string;
  owner?: string;
  created_at?: string;
};

export default function AgentTable({ agents }: { agents: Agent[] }) {
  if (!agents.length) {
    return (
      <EmptyState
        title="No AI agents registered"
        description="Register agents to begin governance monitoring, policy enforcement, and risk tracking."
      />
    );
  }

  return (
    <Table headers={["Agent", "Type", "Status", "Risk", "Owner", "Created"]}>
      {agents.map((agent) => (
        <tr key={agent.id}>
          <td className="px-4 py-3 font-medium text-gray-900">{agent.name}</td>
          <td className="px-4 py-3 text-gray-600">{agent.type || "N/A"}</td>
          <td className="px-4 py-3">
            <Badge variant={agent.status === "active" ? "success" : "neutral"}>
              {agent.status || "unknown"}
            </Badge>
          </td>
          <td className="px-4 py-3">
            <Badge
              variant={
                agent.risk_level === "high"
                  ? "danger"
                  : agent.risk_level === "medium"
                  ? "warning"
                  : "success"
              }
            >
              {agent.risk_level || "low"}
            </Badge>
          </td>
          <td className="px-4 py-3 text-gray-600">{agent.owner || "Unassigned"}</td>
          <td className="px-4 py-3 text-gray-600">{agent.created_at || "N/A"}</td>
        </tr>
      ))}
    </Table>
  );
}
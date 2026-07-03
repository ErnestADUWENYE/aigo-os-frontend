import Badge from "../ui/Badge";
import EmptyState from "../ui/EmptyState";
import Table from "../ui/Table";

type Review = {
  id: string;
  agent_id?: string;
  policy?: string;
  status?: string;
  reviewer?: string;
  created_at?: string;
};

export default function ReviewTable({ reviews }: { reviews: Review[] }) {
  if (!reviews.length) {
    return (
      <EmptyState
        title="No human reviews pending"
        description="Human-in-the-loop review cases will appear here when AI actions require oversight."
      />
    );
  }

  return (
    <Table headers={["Review", "Agent", "Policy", "Status", "Reviewer", "Created"]}>
      {reviews.map((review) => (
        <tr key={review.id}>
          <td className="px-4 py-3 font-medium text-gray-900">{review.id}</td>
          <td className="px-4 py-3 text-gray-600">{review.agent_id || "N/A"}</td>
          <td className="px-4 py-3 text-gray-600">{review.policy || "N/A"}</td>
          <td className="px-4 py-3">
            <Badge variant={review.status === "open" ? "warning" : "success"}>
              {review.status || "pending"}
            </Badge>
          </td>
          <td className="px-4 py-3 text-gray-600">{review.reviewer || "Unassigned"}</td>
          <td className="px-4 py-3 text-gray-600">{review.created_at || "N/A"}</td>
        </tr>
      ))}
    </Table>
  );
}
import ReviewTable from "@/components/reviews/ReviewTable";

const reviews = [
  { id: "rev_001", agent_id: "ag_002", policy: "Financial Approval Policy", status: "open", reviewer: "Unassigned", created_at: "2026-07-03" },
  { id: "rev_002", agent_id: "ag_001", policy: "PII Redaction Policy", status: "open", reviewer: "Compliance Team", created_at: "2026-07-02" },
];

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Human Oversight Reviews</h1>
        <p className="mt-2 text-gray-500">
          Review policy violations, escalated AI decisions, and approval-required agent actions.
        </p>
      </div>

      <ReviewTable reviews={reviews} />
    </div>
  );
}
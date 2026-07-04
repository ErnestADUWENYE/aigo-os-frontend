import PageShell from "@/components/shared/PageShell";

export default function NewAgentPage() {
  return (
    <PageShell
      title="Register New Agent"
      description="Create a governed AI agent profile before production use."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-xl border border-gray-200 bg-white p-5 lg:col-span-2">
          <h2 className="font-semibold text-gray-900">Agent Intake</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Agent name",
              "Business owner",
              "Primary use case",
              "Autonomy level",
              "Risk level",
              "Data sensitivity",
            ].map((label) => (
              <label key={label} className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  {label}
                </span>
                <input
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
                  placeholder={label}
                />
              </label>
            ))}
          </div>

          <label className="mt-4 block space-y-2">
            <span className="text-sm font-medium text-gray-700">
              Governance notes
            </span>
            <textarea
              className="min-h-32 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
              placeholder="Describe intended behavior, limitations, controls, and escalation path."
            />
          </label>
        </section>

        <aside className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Required Review</h2>
          <p className="mt-3 text-sm text-gray-500">
            New agents should be reviewed for risk, policies, controls, data
            access, and human oversight before activation.
          </p>

          <button className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Save Draft
          </button>
        </aside>
      </div>
    </PageShell>
  );
}
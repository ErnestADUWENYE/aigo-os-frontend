import PageShell from "@/components/shared/PageShell";

export default function NewPolicyPage() {
  return (
    <PageShell
      title="New Policy"
      description="Create an AI governance policy with category, severity, enforcement mode, and approval workflow."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-xl border border-gray-200 bg-white p-5 lg:col-span-2">
          <h2 className="font-semibold text-gray-900">Policy Definition</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Policy name",
              "Category",
              "Severity",
              "Enforcement mode",
              "Owner",
              "Review frequency",
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
              Policy description
            </span>
            <textarea
              className="min-h-32 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
              placeholder="Describe the rule, scope, prohibited behavior, required controls, and exception process."
            />
          </label>
        </section>

        <aside className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Approval Checklist</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Policy owner assigned</p>
            <p>Applicable AI assets identified</p>
            <p>Severity and enforcement mode selected</p>
            <p>Exception workflow documented</p>
            <p>Evidence and review requirements defined</p>
          </div>

          <button className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Save Draft
          </button>
        </aside>
      </div>
    </PageShell>
  );
}
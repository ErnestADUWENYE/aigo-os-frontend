import PageShell from "@/components/shared/PageShell";

export default function NewIncidentPage() {
  return (
    <PageShell
      title="Report Incident"
      description="Open a new AI incident record with severity, affected systems, impact, timeline, and remediation ownership."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-xl border border-gray-200 bg-white p-5 lg:col-span-2">
          <h2 className="font-semibold text-gray-900">Incident Intake</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Incident title",
              "Category",
              "Severity",
              "Affected AI system",
              "Incident owner",
              "Detection source",
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
              Incident description
            </span>
            <textarea
              className="min-h-28 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
              placeholder="Describe what happened, affected users, affected AI assets, business impact, and known timeline."
            />
          </label>

          <label className="mt-4 block space-y-2">
            <span className="text-sm font-medium text-gray-700">
              Immediate containment actions
            </span>
            <textarea
              className="min-h-28 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
              placeholder="Describe actions already taken, escalation path, temporary controls, and next response steps."
            />
          </label>
        </section>

        <aside className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Response Checklist</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Severity classified</p>
            <p>Affected AI assets identified</p>
            <p>Owner assigned</p>
            <p>Containment action documented</p>
            <p>Related risks and policies linked</p>
            <p>Evidence collection started</p>
          </div>

          <button className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Save Incident Draft
          </button>
        </aside>
      </div>
    </PageShell>
  );
}
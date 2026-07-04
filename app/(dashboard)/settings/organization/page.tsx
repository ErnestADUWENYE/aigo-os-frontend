import PageShell from "@/components/shared/PageShell";

export default function OrganizationSettingsPage() {
  return (
    <PageShell
      title="Organization Settings"
      description="Manage tenant profile, regulatory context, governance posture, and enterprise-level AIGO configuration."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-xl border border-gray-200 bg-white p-5 lg:col-span-2">
          <h2 className="font-semibold text-gray-900">Organization Profile</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Organization name",
              "Industry",
              "Primary region",
              "Regulatory scope",
              "Governance owner",
              "Compliance contact",
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
              Governance statement
            </span>
            <textarea
              className="min-h-28 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
              placeholder="Describe organization-wide AI governance principles, oversight model, and compliance priorities."
            />
          </label>
        </section>

        <aside className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Tenant Controls</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Multi-workspace governance enabled</p>
            <p>Audit trail required</p>
            <p>Evidence retention active</p>
            <p>Role-based access enabled</p>
            <p>Framework mapping enabled</p>
          </div>

          <button className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Save Organization Settings
          </button>
        </aside>
      </div>
    </PageShell>
  );
}
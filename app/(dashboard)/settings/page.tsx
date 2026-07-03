import Card from "@/components/ui/Card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Workspace Settings</h1>
        <p className="mt-2 text-gray-500">
          Configure organization settings, security controls, integrations, roles, and API access.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card><h2 className="font-semibold">Organization</h2><p className="mt-2 text-sm text-gray-500">Manage workspace profile, departments, teams, and governance ownership.</p></Card>
        <Card><h2 className="font-semibold">Security</h2><p className="mt-2 text-sm text-gray-500">Configure authentication, sessions, access controls, and audit requirements.</p></Card>
        <Card><h2 className="font-semibold">Integrations</h2><p className="mt-2 text-sm text-gray-500">Connect AI providers, workflow tools, SIEM systems, and data warehouses.</p></Card>
        <Card><h2 className="font-semibold">API Access</h2><p className="mt-2 text-sm text-gray-500">Manage API keys, webhooks, service accounts, and backend access policies.</p></Card>
      </div>
    </div>
  );
}
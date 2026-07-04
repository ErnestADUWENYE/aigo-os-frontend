// app/(dashboard)/settings/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function SettingsPage() {
  return (
    <ResourcePage
      title="Settings"
      description="Manage organization, workspaces, users, roles, permissions, and platform health."
      actions={[
        { label: "Users", href: "/settings/users" },
        { label: "Health", href: "/settings/platform-health" },
      ]}
      sections={[
        { title: "Organization", description: "Company profile, compliance posture, and tenant-level settings." },
        { title: "Access Control", description: "Users, roles, workspace access, and permission management." },
      ]}
    />
  );
}
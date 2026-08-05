import { ApplicationShell } from "../../design-system/layouts/application-shell";

const adminLinks = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/customers", label: "Customers" },
  { href: "/admin/system-health", label: "System Health" },
  { href: "/admin/security", label: "Security" },
  { href: "/admin/audit", label: "Audit" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApplicationShell
      title="Admin Console"
      eyebrow="AIGO Administration"
      links={adminLinks}
      surface="admin"
    >
      {children}
    </ApplicationShell>
  );
}

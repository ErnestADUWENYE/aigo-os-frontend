import { ApplicationShell } from "../../design-system/layouts/application-shell";

const customerLinks = [
  { href: "/console/dashboard", label: "Dashboard" },
  { href: "/console/governance", label: "Governance" },
  { href: "/console/assurance", label: "Assurance" },
  { href: "/console/integrations", label: "Integrations" },
  { href: "/console/reports", label: "Reports" },
  { href: "/console/settings", label: "Settings" },
];

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApplicationShell
      title="Customer Console"
      eyebrow="Enterprise Workspace"
      links={customerLinks}
      surface="customer"
    >
      {children}
    </ApplicationShell>
  );
}

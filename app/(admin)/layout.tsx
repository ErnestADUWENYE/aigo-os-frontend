import { AdminConsoleLayout } from "../../components/admin/admin-console-layout";
import { AdminAccessGate } from "../../components/admin/admin-access-gate";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminAccessGate>
      <AdminConsoleLayout>
        {children}
      </AdminConsoleLayout>
    </AdminAccessGate>
  );
}

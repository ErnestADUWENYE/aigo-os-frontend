import { AdminConsoleLayout } from "../../components/admin/admin-console-layout";
import { AdminAccessGate } from "../../components/admin/admin-access-gate";
import { ApplicationProviders } from "../providers/application-providers";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApplicationProviders>
      <AdminAccessGate>
        <AdminConsoleLayout>
          {children}
        </AdminConsoleLayout>
      </AdminAccessGate>
    </ApplicationProviders>
  );
}

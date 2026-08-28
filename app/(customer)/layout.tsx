import type { ReactNode } from "react";

import { CustomerConsoleLayout } from "../../components/customer/customer-console-layout";
import { ApplicationProviders } from "../providers/application-providers";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ApplicationProviders>
      <CustomerConsoleLayout>
        {children}
      </CustomerConsoleLayout>
    </ApplicationProviders>
  );
}

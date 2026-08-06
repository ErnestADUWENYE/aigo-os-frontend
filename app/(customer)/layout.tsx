import type { ReactNode } from "react";

import { CustomerConsoleLayout } from "../../components/customer/customer-console-layout";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <CustomerConsoleLayout>
      {children}
    </CustomerConsoleLayout>
  );
}

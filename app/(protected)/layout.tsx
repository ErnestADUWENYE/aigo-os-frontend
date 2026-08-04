import type { ReactNode } from "react";

import { AuthBoundary } from "@/lib/auth/AuthBoundary";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <AuthBoundary>
      {children}
    </AuthBoundary>
  );
}

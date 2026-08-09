import type { ReactNode } from "react";

import { PublicFooter } from "@/components/public-footer";
import { PublicHeader } from "@/components/public-header";

export default function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="public-site">
      <PublicHeader />

      <main className="public-site__main">
        {children}
      </main>

      <PublicFooter />
    </div>
  );
}
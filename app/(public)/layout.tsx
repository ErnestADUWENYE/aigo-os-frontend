import type { ReactNode } from "react";

import { PublicFooter } from "@/components/public/public-footer";
import { PublicHeader } from "@/components/public/public-header";

import styles from "./public-site.module.css";

export default function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={styles.publicSite}>
      <PublicHeader />

      <main>
        {children}
      </main>

      <PublicFooter />
    </div>
  );
}


import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


export const metadata = createPageMetadata({
  title: "Enterprise AI Integrations",
  description:
    "See how AIGO-OS is designed to connect relevant context across enterprise systems rather than recreate identity, security, workflow or observability platforms.",
  path: "/integrations",
  keywords: [
    "AI governance integrations",
    "enterprise AI integrations",
    "AI governance connectivity",
  ],
});
export default function IntegrationsPage() {
  return (
    <main className={styles.page}>
      <PublicContainer>
        <div className={styles.shell}>

          <p className={styles.eyebrow}>
            AIGO-OS Integrations
          </p>

          <h1>
            Integration resources are being prepared.
          </h1>

          <p className={styles.lead}>
            This destination will become the technical integration
            environment for AIGO-OS, including implementation guidance,
            connection methods, authentication, APIs, examples and
            integration reference material.
          </p>

          <div className={styles.notice}>
            <span>
              Planned technical resource
            </span>

            <strong>
              The public integration center is not yet available.
            </strong>

            <p>
              A dedicated documentation platform will be connected here
              when the AIGO-OS integration environment is ready.
            </p>
          </div>

          <div className={styles.actions}>
            <Link
              href="/products/aigo-os-govern"
              className={styles.secondary}
            >
              AIGO-OS Govern
            </Link>

            <Link
              href="/products/aigo-os-impact"
              className={styles.secondary}
            >
              AIGO-OS Impact
            </Link>

            <Link
              href="/talk-to-an-expert"
              className={styles.primary}
            >
                  Talk to an Expert
                </Link>
          </div>

        </div>
      </PublicContainer>
    </main>
  );
}





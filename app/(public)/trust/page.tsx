import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

export default function TrustPage() {
  return (
    <main className={styles.page}>
      <PublicContainer>
        <div className={styles.shell}>

          <p className={styles.eyebrow}>
            Privacy & Trust
          </p>

          <h1>
            AIGO-OS Trust Center is being prepared.
          </h1>

          <p className={styles.lead}>
            This destination will provide security, privacy, compliance,
            data protection, architecture, subprocessors and assurance
            information for AIGO-OS.
          </p>

          <div className={styles.status}>
            <div>
              <span>
                Trust Center
              </span>

              <strong>
                Vanta-powered public trust environment
              </strong>
            </div>

            <span className={styles.badge}>
              Coming later
            </span>
          </div>

          <div className={styles.scope}>
            <div>
              <span>
                Security
              </span>

              <strong>
                Product and infrastructure security
              </strong>
            </div>

            <div>
              <span>
                Privacy
              </span>

              <strong>
                Data protection and handling
              </strong>
            </div>

            <div>
              <span>
                Compliance
              </span>

              <strong>
                Assurance and evidence
              </strong>
            </div>

            <div>
              <span>
                Architecture
              </span>

              <strong>
                Security and data-flow information
              </strong>
            </div>
          </div>

          <p className={styles.note}>
            When the AIGO-OS Vanta Trust Center is ready, this destination
            will connect directly to that public trust environment.
          </p>

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




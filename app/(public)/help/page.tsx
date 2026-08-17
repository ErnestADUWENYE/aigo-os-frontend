import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

export default function HelpPage() {
  return (
    <main className={styles.page}>
      <PublicContainer>

        <div className={styles.shell}>

          <p className={styles.eyebrow}>
            AIGO-OS Help Center
          </p>

          <h1>
            Product guidance and support will live here.
          </h1>

          <p className={styles.lead}>
            The AIGO-OS Help Center will become the public knowledge base
            for learning how to use, administer and troubleshoot AIGO-OS.
          </p>


          <div className={styles.knowledgeAreas}>

            <div>
              <span>
                Getting Started
              </span>

              <strong>
                Initial product guidance
              </strong>
            </div>

            <div>
              <span>
                AIGO-OS Govern
              </span>

              <strong>
                Governance workflows and product guidance
              </strong>
            </div>

            <div>
              <span>
                AIGO-OS Impact
              </span>

              <strong>
                Impact workflows and product guidance
              </strong>
            </div>

            <div>
              <span>
                Administration
              </span>

              <strong>
                Users, access and organization settings
              </strong>
            </div>

            <div>
              <span>
                Troubleshooting
              </span>

              <strong>
                Common issues and support guidance
              </strong>
            </div>

            <div>
              <span>
                Questions
              </span>

              <strong>
                Frequently asked product questions
              </strong>
            </div>

          </div>


          <div className={styles.notice}>
            <span>
              Knowledge base
            </span>

            <strong>
              The public Help Center is not yet connected.
            </strong>

            <p>
              A dedicated knowledge-base platform will be selected and
              connected to this stable AIGO-OS destination later.
            </p>
          </div>


          <div className={styles.actions}>
            <Link
              href="/integrations"
              className={styles.secondary}
            >
              Integrations
            </Link>

            <Link
              href="/trust"
              className={styles.secondary}
            >
              Privacy & Trust
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



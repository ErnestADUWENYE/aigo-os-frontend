import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

export default function RequestDemoPage() {
  return (
    <main className={styles.page}>
      <PublicContainer>

        <div className={styles.shell}>

          <p className={styles.eyebrow}>
            Request a Demo
          </p>

          <h1>
            See AIGO-OS in the context of your enterprise problem.
          </h1>

          <p className={styles.lead}>
            A product demonstration can focus on AIGO-OS Govern,
            AIGO-OS Impact, or a specific governance or business-impact
            use case.
          </p>


          <div className={styles.demoScope}>

            <div>
              <span>
                AIGO-OS Govern
              </span>

              <strong>
                Governance intelligence
              </strong>

              <p>
                Accountability, authority, agent sprawl and governance priorities.
              </p>
            </div>

            <div>
              <span>
                AIGO-OS Impact
              </span>

              <strong>
                Business impact intelligence
              </strong>

              <p>
                Dependencies, AI change impact and AI incident business impact.
              </p>
            </div>

          </div>


          <div className={styles.notice}>
            <span>
              Demo enquiry
            </span>

            <strong>
              Lead capture will be connected here.
            </strong>

            <p>
              The public route is now established so the website can
              use Request a Demo consistently while the final enquiry
              workflow is completed.
            </p>
          </div>


          <div className={styles.actions}>
            <Link
              href="/talk-to-an-expert"
              className={styles.secondary}
            >
              Talk to an Expert
            </Link>

            <Link
              href="/contact-sales"
              className={styles.primary}
            >
              Contact Sales
            </Link>
          </div>

        </div>

      </PublicContainer>
    </main>
  );
}



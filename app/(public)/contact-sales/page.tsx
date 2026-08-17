import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

export default function ContactSalesPage() {
  return (
    <main className={styles.page}>
      <PublicContainer>

        <div className={styles.shell}>

          <p className={styles.eyebrow}>
            Contact Sales
          </p>

          <h1>
            Discuss AIGO-OS for your organization.
          </h1>

          <p className={styles.lead}>
            Use this route for enterprise purchasing, procurement,
            commercial evaluation, licensing and deployment conversations.
          </p>


          <div className={styles.commercialAreas}>

            <div>
              <span>
                Product
              </span>

              <strong>
                Govern or Impact
              </strong>
            </div>

            <div>
              <span>
                Commercial
              </span>

              <strong>
                Licensing & procurement
              </strong>
            </div>

            <div>
              <span>
                Enterprise
              </span>

              <strong>
                Deployment requirements
              </strong>
            </div>

          </div>


          <div className={styles.notice}>
            <span>
              Sales enquiry
            </span>

            <strong>
              Commercial enquiry capability will be connected here.
            </strong>

            <p>
              AIGO-OS does not currently publish self-service pricing,
              so commercial requirements are handled through a direct
              enterprise conversation.
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
              href="/request-demo"
              className={styles.primary}
            >
              Request a Demo
            </Link>
          </div>

        </div>

      </PublicContainer>
    </main>
  );
}



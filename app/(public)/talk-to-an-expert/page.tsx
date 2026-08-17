import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

export default function TalkToAnExpertPage() {
  return (
    <main className={styles.page}>
      <PublicContainer>

        <div className={styles.hero}>
          <p className={styles.eyebrow}>
            Talk to AIGO-OS
          </p>

          <h1>
            Start with the question your organization needs to answer.
          </h1>

          <p className={styles.lead}>
            Whether you are evaluating AI governance, business impact,
            implementation or enterprise adoption, we can route the
            conversation to the right place.
          </p>
        </div>


        <div className={styles.paths}>

          <Link
            href="/request-demo"
            className={styles.path}
          >
            <span>
              Product evaluation
            </span>

            <strong>
              Request a Demo
            </strong>

            <p>
              See AIGO-OS Govern or AIGO-OS Impact applied to your
              enterprise use case.
            </p>

            <small>
              Request a product conversation
            </small>
          </Link>


          <Link
            href="/contact-sales"
            className={styles.path}
          >
            <span>
              Commercial enquiry
            </span>

            <strong>
              Contact Sales
            </strong>

            <p>
              Discuss enterprise purchasing, licensing, procurement
              or commercial requirements.
            </p>

            <small>
              Speak with sales
            </small>
          </Link>


          <div className={styles.pathQuiet}>
            <span>
              General conversation
            </span>

            <strong>
              Talk to an Expert
            </strong>

            <p>
              Discuss your AI environment, governance problem,
              business-impact requirements or deployment objectives.
            </p>

            <small>
              Enquiry capability will be connected here
            </small>
          </div>

        </div>

      </PublicContainer>
    </main>
  );
}



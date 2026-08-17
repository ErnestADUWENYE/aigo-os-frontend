import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";


import { ProductResources } from "@/components/products/product-resources";
import styles from "./page.module.css";

const governanceAreas = [
  {
    number: "01",
    title: "Accountability",
    text:
      "Understand who is responsible for AI activity in the surrounding business context.",
  },
  {
    number: "02",
    title: "Authority",
    text:
      "See where decision rights, permissions and responsibility need to be understood together.",
  },
  {
    number: "03",
    title: "Governance priority",
    text:
      "Distinguish routine AI activity from issues that need management attention.",
  },
];

export default function AigoOsGovernPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AI Governance Intelligence
              </p>

              <h1>
                Bring accountability and authority into business context.
              </h1>

              <p className={styles.heroText}>
                AIGO-OS Govern helps organizations understand who is
                responsible, what authority exists and which AI governance
                issues require management attention.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/talk-to-an-expert"
                  className={styles.primaryButton}
                >
                  Talk to an Expert
                </Link>

                <Link
                  href="/products"
                  className={styles.secondaryButton}
                >
                  Products Overview
                </Link>
              </div>
            </div>


            <div className={styles.governanceBoard}>

              <div className={styles.boardHeader}>
                <div>
                  <span>AIGO-OS Govern</span>
                  <strong>Governance review</strong>
                </div>

                <span className={styles.reviewState}>
                  Review required
                </span>
              </div>


              <div className={styles.governanceFocus}>
                <span>
                  Governance priority
                </span>

                <strong>
                  Authority-sensitive AI activity
                </strong>

                <p>
                  Activity is occurring inside a high-criticality
                  customer operation with an identified responsible owner.
                </p>
              </div>


              <div className={styles.governanceFacts}>
                <div>
                  <span>Accountable owner</span>
                  <strong>Digital Operations</strong>
                </div>

                <div>
                  <span>Business function</span>
                  <strong>Customer Operations</strong>
                </div>

                <div>
                  <span>Authority context</span>
                  <strong>Decision-sensitive activity</strong>
                </div>

                <div>
                  <span>Governance priority</span>
                  <strong>High</strong>
                </div>
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.questionSection}>
        <PublicContainer>

          <div className={styles.questionHeader}>
            <p className={styles.sectionLabel}>
              Governance question
            </p>

            <h2>
              Who is responsible, what authority exists, and what needs attention?
            </h2>
          </div>


          <div className={styles.questionGrid}>

            <div className={styles.questionItem}>
              <span>01</span>

              <strong>
                Who is accountable?
              </strong>

              <p>
                Connect AI activity to the responsible business owner
                and operating environment.
              </p>
            </div>


            <div className={styles.questionItem}>
              <span>02</span>

              <strong>
                What authority exists?
              </strong>

              <p>
                Understand authority-sensitive activity in relation to
                business ownership and responsibility.
              </p>
            </div>


            <div className={styles.questionItemEmphasis}>
              <span>03</span>

              <strong>
                What needs governance attention?
              </strong>

              <p>
                Use business significance and context to support
                governance prioritisation.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.accountabilitySection}>
        <PublicContainer>

          <div className={styles.accountabilityGrid}>

            <div className={styles.accountabilityCopy}>
              <p className={styles.sectionLabelLight}>
                Accountability
              </p>

              <h2>
                Governance starts with knowing where responsibility sits.
              </h2>

              <p>
                AIGO-OS Govern keeps business ownership visible around
                AI activity so governance questions do not begin with
                anonymous technical records.
              </p>
            </div>


            <div className={styles.accountabilityView}>

              <div className={styles.accountabilityPrimary}>
                <span>
                  AI activity
                </span>

                <strong>
                  Customer service agent
                </strong>
              </div>

              <div className={styles.accountabilityOwner}>
                <span>
                  Accountable business owner
                </span>

                <strong>
                  Digital Operations
                </strong>
              </div>

              <div className={styles.accountabilityContext}>
                <div>
                  <span>Function</span>
                  <strong>Customer Operations</strong>
                </div>

                <div>
                  <span>Process</span>
                  <strong>Customer Support</strong>
                </div>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.authoritySection}>
        <PublicContainer>

          <div className={styles.authorityHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Authority
              </p>

              <h2>
                Governance becomes clearer when authority is understood with ownership.
              </h2>
            </div>

            <p>
              Authority-sensitive activity should not be interpreted in
              isolation from the business area, responsible owner and
              operating context around it.
            </p>
          </div>


          <div className={styles.authorityLayout}>

            <div className={styles.authorityContext}>
              <span>
                Business ownership
              </span>

              <strong>
                Digital Operations
              </strong>

              <p>
                Responsible organization around the activity.
              </p>
            </div>


            <div className={styles.authorityFocus}>
              <span>
                Authority-sensitive activity
              </span>

              <strong>
                Decision-affecting AI action
              </strong>

              <p>
                Governance review considers both the activity and the
                business context in which it occurred.
              </p>
            </div>


            <div className={styles.authorityOutcome}>
              <span>
                Governance outcome
              </span>

              <strong>
                Review required
              </strong>

              <p>
                Management attention is prioritized with ownership and
                business significance visible.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.prioritySection}>
        <PublicContainer>

          <div className={styles.priorityGrid}>

            <div className={styles.priorityIntro}>
              <p className={styles.sectionLabelLight}>
                Governance priorities
              </p>

              <h2>
                Not every governance issue carries the same business significance.
              </h2>
            </div>


            <div className={styles.priorityBoard}>

              <div className={styles.priorityRowHigh}>
                <span>
                  High
                </span>

                <div>
                  <strong>
                    Authority-sensitive activity in a critical business function
                  </strong>

                  <p>
                    Management governance review required.
                  </p>
                </div>
              </div>


              <div className={styles.priorityRow}>
                <span>
                  Medium
                </span>

                <div>
                  <strong>
                    Ownership clarification required
                  </strong>

                  <p>
                    Responsibility should be confirmed before further action.
                  </p>
                </div>
              </div>


              <div className={styles.priorityRow}>
                <span>
                  Monitor
                </span>

                <div>
                  <strong>
                    Routine activity with established ownership
                  </strong>

                  <p>
                    Continue normal governance monitoring.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.platformSection}>
        <PublicContainer>

          <div className={styles.platformHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Built on AIGO-OS
              </p>

              <h2>
                Govern uses the platform context already connected around AI.
              </h2>
            </div>

            <Link
              href="/platform"
              className={styles.platformLink}
            >
              Explore the Platform
            </Link>
          </div>


          <div className={styles.platformStrip}>
            {governanceAreas.map((item) => (
              <div
                key={item.number}
                className={styles.platformItem}
              >
                <span>
                  {item.number}
                </span>

                <strong>
                  {item.title}
                </strong>

                <p>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </PublicContainer>
      </section>


      <section className={styles.finalSection}>
        <PublicContainer>
          <div className={styles.finalPanel}>

            <div>
              <p className={styles.sectionLabelLight}>
                AIGO-OS Govern
              </p>

              <h2>
                Put governance decisions in the context of the business they affect.
              </h2>
            </div>

            <div className={styles.finalActions}>
              <Link
                href="/talk-to-an-expert"
                className={styles.finalPrimary}
              >
                  Talk to an Expert
                </Link>

              <Link
                href="/products/aigo-os-impact"
                className={styles.finalSecondary}
              >
                Explore AIGO-OS Impact
              </Link>
            </div>

          </div>
        </PublicContainer>
      </section>
    
      <PublicContainer>
        <ProductResources product="Govern" />
      </PublicContainer>
</>
  );
}





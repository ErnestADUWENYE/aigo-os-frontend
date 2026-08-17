import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";


import { ProductResources } from "@/components/products/product-resources";
import styles from "./page.module.css";

const impactAreas = [
  {
    number: "01",
    title: "Incidents",
    text:
      "Understand which business functions, services and processes may be affected when AI activity becomes an incident.",
  },
  {
    number: "02",
    title: "Changes",
    text:
      "Connect AI changes to the operating environment so business consequences are easier to understand.",
  },
  {
    number: "03",
    title: "Dependencies",
    text:
      "Preserve the business relationships that explain where impact may propagate.",
  },
];

export default function AigoOsImpactPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AI Business Impact Intelligence
              </p>

              <h1>
                Understand where AI incidents and changes affect the business.
              </h1>

              <p className={styles.heroText}>
                AIGO-OS Impact connects AI incidents, changes and dependencies
                to the business functions, services and operational
                relationships they may affect.
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


            <div className={styles.impactBoard}>

              <div className={styles.boardHeader}>
                <div>
                  <span>
                    AIGO-OS Impact
                  </span>

                  <strong>
                    Business impact view
                  </strong>
                </div>

                <span className={styles.impactState}>
                  Impact assessed
                </span>
              </div>


              <div className={styles.incidentFocus}>
                <span>
                  AI incident
                </span>

                <strong>
                  Customer service disruption
                </strong>

                <p>
                  AI activity has affected a business service within
                  Customer Operations.
                </p>
              </div>


              <div className={styles.impactPath}>
                <div>
                  <span>
                    AI activity
                  </span>

                  <strong>
                    Customer service agent
                  </strong>
                </div>

                <div>
                  <span>
                    Business process
                  </span>

                  <strong>
                    Customer Support
                  </strong>
                </div>

                <div>
                  <span>
                    Business service
                  </span>

                  <strong>
                    Customer Assistance
                  </strong>
                </div>
              </div>


              <div className={styles.impactFooter}>
                <div>
                  <span>
                    Affected function
                  </span>

                  <strong>
                    Customer Operations
                  </strong>
                </div>

                <div>
                  <span>
                    Business significance
                  </span>

                  <strong>
                    High
                  </strong>
                </div>
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.impactQuestionSection}>
        <PublicContainer>

          <div className={styles.impactQuestionHeader}>
            <p className={styles.sectionLabel}>
              Business impact question
            </p>

            <h2>
              What changed, what is affected, and where does the business impact sit?
            </h2>
          </div>


          <div className={styles.impactQuestionGrid}>

            <div className={styles.impactQuestionItem}>
              <span>
                01
              </span>

              <strong>
                What happened?
              </strong>

              <p>
                Identify the AI incident, change or operational event
                that needs to be understood.
              </p>
            </div>


            <div className={styles.impactQuestionItem}>
              <span>
                02
              </span>

              <strong>
                What is connected to it?
              </strong>

              <p>
                Preserve the surrounding process, service and business
                relationships.
              </p>
            </div>


            <div className={styles.impactQuestionItemEmphasis}>
              <span>
                03
              </span>

              <strong>
                Where is the business impact?
              </strong>

              <p>
                Bring affected functions, services and dependencies into
                the same impact view.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.propagationSection}>
        <PublicContainer>

          <div className={styles.propagationGrid}>

            <div className={styles.propagationCopy}>
              <p className={styles.sectionLabelLight}>
                Impact propagation
              </p>

              <h2>
                Impact can move through the business relationships around AI.
              </h2>

              <p>
                AIGO-OS Impact preserves those relationships so an AI
                incident or change can be understood in relation to the
                operating processes and services that depend on it.
              </p>
            </div>


            <div className={styles.propagationBoard}>

              <div className={styles.propagationOrigin}>
                <span>
                  AI incident
                </span>

                <strong>
                  Customer service agent
                </strong>
              </div>

              <div className={styles.propagationLines}>
                <span />
                <span />
                <span />
              </div>

              <div className={styles.propagationTargets}>

                <div>
                  <span>
                    Process
                  </span>

                  <strong>
                    Customer Support
                  </strong>
                </div>

                <div>
                  <span>
                    Service
                  </span>

                  <strong>
                    Customer Assistance
                  </strong>
                </div>

                <div>
                  <span>
                    Business function
                  </span>

                  <strong>
                    Customer Operations
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.dependencySection}>
        <PublicContainer>

          <div className={styles.dependencyHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Business dependencies
              </p>

              <h2>
                Dependencies explain why one AI issue can matter beyond the system itself.
              </h2>
            </div>

            <p>
              Impact becomes easier to understand when business services,
              processes and ownership structures remain connected to the
              AI capability they depend on.
            </p>
          </div>


          <div className={styles.dependencyLayout}>

            <div className={styles.dependencySource}>
              <span>
                AI capability
              </span>

              <strong>
                Customer service agent
              </strong>

              <p>
                Source of the operational issue.
              </p>
            </div>


            <div className={styles.dependencyList}>

              <div className={styles.dependencyRow}>
                <span>
                  Direct dependency
                </span>

                <strong>
                  Customer Support
                </strong>

                <p>
                  Process directly uses the AI capability.
                </p>
              </div>

              <div className={styles.dependencyRow}>
                <span>
                  Service dependency
                </span>

                <strong>
                  Customer Assistance
                </strong>

                <p>
                  Business service relies on the supporting process.
                </p>
              </div>

              <div className={styles.dependencyRowEmphasis}>
                <span>
                  Business impact
                </span>

                <strong>
                  Customer Operations
                </strong>

                <p>
                  The affected business area becomes visible through the
                  dependency chain.
                </p>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.changeSection}>
        <PublicContainer>

          <div className={styles.changeGrid}>

            <div className={styles.changeIntro}>
              <p className={styles.sectionLabelLight}>
                Change intelligence
              </p>

              <h2>
                AI change should be understood in terms of business consequence.
              </h2>
            </div>


            <div className={styles.changeBoard}>

              <div className={styles.changeBefore}>
                <span>
                  Before change
                </span>

                <strong>
                  Customer service agent
                </strong>

                <p>
                  Existing process and service relationships.
                </p>
              </div>


              <div className={styles.changeDelta}>
                <span>
                  Change
                </span>

                <strong>
                  New decision behavior introduced
                </strong>

                <p>
                  Operational significance requires review.
                </p>
              </div>


              <div className={styles.changeAfter}>
                <span>
                  Business consequence
                </span>

                <strong>
                  Customer Support process affected
                </strong>

                <p>
                  Impact is evaluated with the surrounding business
                  relationships visible.
                </p>
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
                Impact uses the same connected intelligence foundation as Govern.
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
            {impactAreas.map((item) => (
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
                AIGO-OS Impact
              </p>

              <h2>
                Understand AI impact in the context of the business that depends on it.
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
                href="/products/aigo-os-govern"
                className={styles.finalSecondary}
              >
                Explore AIGO-OS Govern
              </Link>
            </div>

          </div>
        </PublicContainer>
      </section>
    
      <PublicContainer>
        <ProductResources product="Impact" />
      </PublicContainer>
</>
  );
}





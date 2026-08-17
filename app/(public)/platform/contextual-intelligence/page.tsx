import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const evidence = [
  {
    label: "AI activity",
    value: "Authority-sensitive action",
  },
  {
    label: "Business function",
    value: "Customer Operations",
  },
  {
    label: "Owner",
    value: "Digital Operations",
  },
  {
    label: "Enterprise event",
    value: "Operational review opened",
  },
];

export default function ContextualIntelligencePage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Platform Capability 04
              </p>

              <h1>
                Interpret AI activity with the business meaning still attached.
              </h1>

              <p className={styles.heroText}>
                Contextual Intelligence brings connected activity,
                ownership, business relationships and enterprise events
                into a single interpretive view.
              </p>

              <div className={styles.heroActions}>
                <Link href="/talk-to-an-expert" className={styles.primaryButton}>
                  Talk to an Expert
                </Link>

                <Link href="/platform" className={styles.secondaryButton}>
                  Platform Overview
                </Link>
              </div>
            </div>


            <div className={styles.heroInterpretation}>
              <div className={styles.evidenceColumn}>
                <span className={styles.visualLabel}>
                  Connected evidence
                </span>

                {evidence.map((item) => (
                  <div
                    key={item.label}
                    className={styles.evidenceRow}
                  >
                    <span>
                      {item.label}
                    </span>

                    <strong>
                      {item.value}
                    </strong>
                  </div>
                ))}
              </div>


              <div className={styles.interpretationColumn}>
                <span className={styles.visualLabel}>
                  Contextual interpretation
                </span>

                <div className={styles.interpretationResult}>
                  <span>
                    Business-relevant reading
                  </span>

                  <strong>
                    Governance-sensitive AI activity in a critical
                    customer operation with clear ownership and an
                    active operational review.
                  </strong>

                  <p>
                    The same underlying activity carries more meaning
                    once enterprise context is preserved.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.signalSection}>
        <PublicContainer>

          <div className={styles.signalHeader}>
            <p className={styles.sectionLabel}>
              From signal to meaning
            </p>

            <h2>
              Context changes what an individual signal can tell you.
            </h2>
          </div>


          <div className={styles.signalComparison}>

            <div className={styles.rawSignal}>
              <span className={styles.stateLabel}>
                Isolated signal
              </span>

              <div className={styles.rawRecord}>
                <span>
                  AI activity
                </span>

                <strong>
                  Authority-sensitive action
                </strong>

                <small>
                  09:51
                </small>
              </div>

              <p>
                The record identifies what happened but leaves the
                surrounding business meaning unresolved.
              </p>
            </div>


            <div className={styles.contextualSignal}>
              <span className={styles.stateLabel}>
                Contextual reading
              </span>

              <div className={styles.contextualSummary}>
                <span>
                  Interpretation
                </span>

                <strong>
                  A governance-relevant action occurred inside a
                  high-criticality customer operation.
                </strong>
              </div>

              <div className={styles.contextualEvidence}>
                <span>Owner: Digital Operations</span>
                <span>Function: Customer Operations</span>
                <span>Review: Open</span>
              </div>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.readingSection}>
        <PublicContainer>

          <div className={styles.readingGrid}>

            <div className={styles.readingCopy}>
              <p className={styles.sectionLabelLight}>
                Contextual reading
              </p>

              <h2>
                Interpretation is stronger when evidence stays connected.
              </h2>

              <p>
                AIGO-OS does not reduce contextual intelligence to a
                single score or decorative status. The useful part is
                the relationship between the evidence and the business
                environment around it.
              </p>
            </div>


            <div className={styles.readingBoard}>

              <div className={styles.readingEvidence}>
                <span>
                  Evidence
                </span>

                <strong>
                  Authority-sensitive AI activity
                </strong>
              </div>

              <div className={styles.readingContext}>
                <div>
                  <span>
                    Ownership
                  </span>

                  <strong>
                    Digital Operations
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

                <div>
                  <span>
                    Criticality
                  </span>

                  <strong>
                    High
                  </strong>
                </div>
              </div>

              <div className={styles.readingConclusion}>
                <span>
                  Contextual interpretation
                </span>

                <strong>
                  Management attention is warranted because the activity
                  sits within a high-criticality business environment.
                </strong>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.perspectiveSection}>
        <PublicContainer>

          <div className={styles.perspectiveHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Multiple perspectives
              </p>

              <h2>
                One event can carry different significance depending on the question being asked.
              </h2>
            </div>

            <p>
              Contextual Intelligence preserves enough of the surrounding
              environment for different management questions to be answered
              from the same connected information.
            </p>
          </div>


          <div className={styles.perspectiveGrid}>

            <div className={styles.perspectiveItem}>
              <span>
                Governance perspective
              </span>

              <strong>
                Who is accountable?
              </strong>

              <p>
                Ownership and authority remain visible around the AI activity.
              </p>
            </div>


            <div className={styles.perspectiveItem}>
              <span>
                Operational perspective
              </span>

              <strong>
                What changed?
              </strong>

              <p>
                Relevant enterprise events remain connected to the activity.
              </p>
            </div>


            <div className={styles.perspectiveItemEmphasis}>
              <span>
                Business perspective
              </span>

              <strong>
                Why does it matter?
              </strong>

              <p>
                Business function, criticality and operational relevance
                provide the meaning needed for interpretation.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.handoffSection}>
        <PublicContainer>
          <div className={styles.handoff}>

            <div>
              <p className={styles.sectionLabelLight}>
                Next capability
              </p>

              <h2>
                Management Intelligence
              </h2>

              <p>
                Contextual interpretation becomes more useful when it can
                be distilled into a concise management view of priorities,
                ownership and significance.
              </p>
            </div>

            <Link
              href="/platform/management-intelligence"
              className={styles.nextLink}
            >
              Continue to capability 05
            </Link>

          </div>
        </PublicContainer>
      </section>
    </>
  );
}




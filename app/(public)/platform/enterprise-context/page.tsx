import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const contextDimensions = [
  {
    key: "Ownership",
    value: "Digital Operations",
    detail: "Who carries responsibility around the activity.",
  },
  {
    key: "Business function",
    value: "Customer Operations",
    detail: "Where the activity sits within the organization.",
  },
  {
    key: "Operating process",
    value: "Customer Support",
    detail: "The process surrounding the AI activity.",
  },
  {
    key: "Criticality",
    value: "High",
    detail: "How important the surrounding business context is.",
  },
];

export default function EnterpriseContextPage() {
  return (
    <>
      {/* ====================================================
          HERO — ENTERPRISE ARCHITECTURE
      ==================================================== */}

      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Platform Capability 01
              </p>

              <h1>
                Establish the enterprise context around AI.
              </h1>

              <p className={styles.heroText}>
                Enterprise Context gives AIGO-OS the organizational,
                operational and ownership structure needed to understand
                where AI activity sits within the business.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/talk-to-an-expert"
                  className={styles.primaryButton}
                >
                  Talk to an Expert
                </Link>

                <Link
                  href="/platform"
                  className={styles.secondaryButton}
                >
                  Platform Overview
                </Link>
              </div>
            </div>


            <div className={styles.enterpriseModel}>
              <div className={styles.enterpriseBackplane} />

              <div className={styles.enterpriseCanvas}>

                <div className={styles.canvasHeader}>
                  <div>
                    <span>
                      Enterprise Context
                    </span>

                    <strong>
                      Organizational position
                    </strong>
                  </div>

                  <div className={styles.contextState}>
                    Context available
                  </div>
                </div>


                <div className={styles.orgHierarchy}>

                  <div className={styles.orgLevel}>
                    <span>
                      Enterprise
                    </span>

                    <strong>
                      AIGO example organization
                    </strong>
                  </div>

                  <div className={styles.hierarchyRule} />


                  <div className={styles.orgLevelSecondary}>
                    <span>
                      Business function
                    </span>

                    <strong>
                      Customer Operations
                    </strong>
                  </div>

                  <div className={styles.hierarchyRuleShort} />


                  <div className={styles.processRow}>
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
                        Owner
                      </span>

                      <strong>
                        Digital Operations
                      </strong>
                    </div>
                  </div>

                  <div className={styles.contextFocus}>
                    <span>
                      AI activity
                    </span>

                    <strong>
                      Customer service agent
                    </strong>

                    <div className={styles.focusMeta}>
                      <span>
                        Criticality: High
                      </span>

                      <span>
                        Context retained
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      {/* ====================================================
          ENTERPRISE CONTEXT ANATOMY
      ==================================================== */}

      <section className={styles.anatomySection}>
        <PublicContainer>

          <div className={styles.anatomyHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Context anatomy
              </p>

              <h2>
                AI sits inside an enterprise structure.
              </h2>
            </div>

            <p className={styles.anatomyIntro}>
              AIGO-OS treats the surrounding business environment as part
              of the intelligence itself, rather than information that must
              be reconstructed later.
            </p>
          </div>


          <div className={styles.anatomyLayout}>

            <div className={styles.anatomyPrimary}>
              <span className={styles.largeIndex}>
                01
              </span>

              <div>
                <p className={styles.microLabel}>
                  Enterprise position
                </p>

                <h3>
                  Where does this AI activity belong?
                </h3>

                <p>
                  Place AI within the organizational structure that gives
                  its activity meaning.
                </p>
              </div>
            </div>


            <div className={styles.dimensionList}>
              {contextDimensions.map((item, index) => (
                <div
                  key={item.key}
                  className={styles.dimensionRow}
                >
                  <span className={styles.dimensionNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className={styles.dimensionName}>
                    <span>
                      {item.key}
                    </span>

                    <strong>
                      {item.value}
                    </strong>
                  </div>

                  <p>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </PublicContainer>
      </section>


      {/* ====================================================
          OWNERSHIP + CRITICALITY — ASYMMETRIC SECTION
      ==================================================== */}

      <section className={styles.operatingSection}>
        <PublicContainer>

          <div className={styles.operatingGrid}>

            <div className={styles.operatingCopy}>
              <p className={styles.sectionLabelLight}>
                Ownership and significance
              </p>

              <h2>
                Context explains who is responsible and how much the activity matters.
              </h2>

              <p>
                AI activity becomes more meaningful when management can see
                the responsible business area, the operating process around
                it and the criticality of the environment it affects.
              </p>
            </div>


            <div className={styles.operatingComposition}>

              <div className={styles.ownershipPanel}>
                <span>
                  Responsible owner
                </span>

                <strong>
                  Digital Operations
                </strong>

                <p>
                  Clear organizational responsibility around the activity.
                </p>
              </div>


              <div className={styles.criticalityPanel}>
                <span>
                  Business criticality
                </span>

                <strong>
                  High
                </strong>

                <div className={styles.criticalityScale}>
                  <span />
                  <span />
                  <span />
                  <span className={styles.activeScale} />
                </div>
              </div>


              <div className={styles.businessPanel}>
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
                    Operating process
                  </span>

                  <strong>
                    Customer Support
                  </strong>
                </div>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      {/* ====================================================
          CONTEXT BEFORE / AFTER
      ==================================================== */}

      <section className={styles.comparisonSection}>
        <PublicContainer>

          <div className={styles.comparisonHeader}>
            <p className={styles.sectionLabel}>
              Why context changes the view
            </p>

            <h2>
              The activity is the same. The understanding is not.
            </h2>
          </div>


          <div className={styles.comparisonGrid}>

            <div className={styles.comparisonBare}>
              <div className={styles.comparisonTop}>
                <span>
                  Without enterprise context
                </span>

                <strong>
                  AI activity observed
                </strong>
              </div>

              <div className={styles.bareRecord}>
                <span>
                  Customer service agent
                </span>

                <strong>
                  Activity recorded
                </strong>
              </div>

              <p>
                The activity exists, but business ownership,
                operational significance and enterprise relationships
                are not immediately visible.
              </p>
            </div>


            <div className={styles.comparisonContextual}>
              <div className={styles.comparisonTop}>
                <span>
                  With enterprise context
                </span>

                <strong>
                  Business meaning retained
                </strong>
              </div>

              <div className={styles.contextualRecord}>
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
                    Function
                  </span>

                  <strong>
                    Customer Operations
                  </strong>
                </div>

                <div>
                  <span>
                    Owner
                  </span>

                  <strong>
                    Digital Operations
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
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* ====================================================
          PLATFORM HANDOFF
      ==================================================== */}

      <section className={styles.handoffSection}>
        <PublicContainer>

          <div className={styles.handoffGrid}>

            <div className={styles.handoffCopy}>
              <p className={styles.sectionLabelLight}>
                Context becomes a foundation
              </p>

              <h2>
                Enterprise Context gives the next capabilities something meaningful to build on.
              </h2>
            </div>


            <div className={styles.handoffSequence}>

              <div className={styles.handoffCurrent}>
                <span>
                  01
                </span>

                <strong>
                  Enterprise Context
                </strong>

                <p>
                  Establish the business environment.
                </p>
              </div>


              <Link
                href="/platform/ai-business-mapping"
                className={styles.handoffNext}
              >
                <span>
                  02
                </span>

                <strong>
                  AI Business Mapping
                </strong>

                <p>
                  Connect AI to the business structures it serves.
                </p>

                <span className={styles.continueLabel}>
                  Continue
                </span>
              </Link>

            </div>

          </div>

        </PublicContainer>
      </section>
    </>
  );
}




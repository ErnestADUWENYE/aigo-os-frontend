import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const priorities = [
  {
    level: "High",
    title: "Governance review required",
    context: "Customer Operations",
    owner: "Digital Operations",
  },
  {
    level: "Medium",
    title: "Business dependency requires attention",
    context: "Customer Assistance",
    owner: "Service Operations",
  },
  {
    level: "Low",
    title: "Routine monitoring",
    context: "Internal Productivity",
    owner: "Enterprise Technology",
  },
];

export default function ManagementIntelligencePage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Platform Capability 05
              </p>

              <h1>
                Turn connected context into a management view.
              </h1>

              <p className={styles.heroText}>
                Management Intelligence distills connected AI and business
                context into a clearer view of priorities, ownership,
                significance and the areas requiring management attention.
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


            <div className={styles.managementBoard}>

              <div className={styles.boardHeader}>
                <div>
                  <span>
                    Management Intelligence
                  </span>

                  <strong>
                    Priority overview
                  </strong>
                </div>

                <span className={styles.boardState}>
                  Current
                </span>
              </div>


              <div className={styles.prioritySummary}>
                <div className={styles.priorityCountHigh}>
                  <span>High priority</span>
                  <strong>03</strong>
                </div>

                <div className={styles.priorityCount}>
                  <span>Medium</span>
                  <strong>07</strong>
                </div>

                <div className={styles.priorityCount}>
                  <span>Monitoring</span>
                  <strong>12</strong>
                </div>
              </div>


              <div className={styles.priorityList}>
                {priorities.map((priority) => (
                  <div
                    key={priority.title}
                    className={styles.priorityRow}
                  >
                    <span
                      className={
                        priority.level === "High"
                          ? styles.priorityIndicatorHigh
                          : priority.level === "Medium"
                          ? styles.priorityIndicatorMedium
                          : styles.priorityIndicatorLow
                      }
                    >
                      {priority.level}
                    </span>

                    <div className={styles.priorityContent}>
                      <strong>
                        {priority.title}
                      </strong>

                      <span>
                        {priority.context}
                      </span>
                    </div>

                    <div className={styles.priorityOwner}>
                      <span>
                        Owner
                      </span>

                      <strong>
                        {priority.owner}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.attentionSection}>
        <PublicContainer>
          <div className={styles.attentionHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Management attention
              </p>

              <h2>
                Not every signal deserves the same level of attention.
              </h2>
            </div>

            <p>
              Management Intelligence gives decision-makers a way to
              distinguish routine activity from issues that carry greater
              governance or business significance.
            </p>
          </div>


          <div className={styles.attentionGrid}>

            <div className={styles.attentionPrimary}>
              <span className={styles.priorityTag}>
                High priority
              </span>

              <h3>
                Governance review required
              </h3>

              <p>
                Authority-sensitive AI activity is occurring inside a
                high-criticality customer operation with clear ownership.
              </p>

              <div className={styles.attentionMeta}>
                <div>
                  <span>Business function</span>
                  <strong>Customer Operations</strong>
                </div>

                <div>
                  <span>Owner</span>
                  <strong>Digital Operations</strong>
                </div>

                <div>
                  <span>Criticality</span>
                  <strong>High</strong>
                </div>
              </div>
            </div>


            <div className={styles.attentionSecondary}>
              <div>
                <span>
                  Management question
                </span>

                <strong>
                  What requires attention now?
                </strong>
              </div>

              <div>
                <span>
                  Supporting context
                </span>

                <strong>
                  Ownership, business significance and operational relevance
                </strong>
              </div>

              <div>
                <span>
                  Management outcome
                </span>

                <strong>
                  A clearer basis for review and prioritisation
                </strong>
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.portfolioSection}>
        <PublicContainer>

          <div className={styles.portfolioGrid}>

            <div className={styles.portfolioCopy}>
              <p className={styles.sectionLabelLight}>
                Portfolio view
              </p>

              <h2>
                Management needs to see the wider pattern, not only individual events.
              </h2>

              <p>
                AIGO-OS can present connected context across multiple areas
                so management teams can compare significance, ownership and
                priority across the operating environment.
              </p>
            </div>


            <div className={styles.portfolioBoard}>

              <div className={styles.portfolioHeader}>
                <span>
                  Management portfolio
                </span>

                <strong>
                  Current attention by business area
                </strong>
              </div>


              <div className={styles.portfolioRows}>
                <div className={styles.portfolioRow}>
                  <span>
                    Customer Operations
                  </span>

                  <div className={styles.barTrack}>
                    <span
                      className={styles.barHigh}
                      style={{ width: "82%" }}
                    />
                  </div>

                  <strong>
                    High
                  </strong>
                </div>

                <div className={styles.portfolioRow}>
                  <span>
                    Service Operations
                  </span>

                  <div className={styles.barTrack}>
                    <span
                      className={styles.barMedium}
                      style={{ width: "58%" }}
                    />
                  </div>

                  <strong>
                    Medium
                  </strong>
                </div>

                <div className={styles.portfolioRow}>
                  <span>
                    Internal Productivity
                  </span>

                  <div className={styles.barTrack}>
                    <span
                      className={styles.barLow}
                      style={{ width: "31%" }}
                    />
                  </div>

                  <strong>
                    Monitor
                  </strong>
                </div>

                <div className={styles.portfolioRow}>
                  <span>
                    Enterprise Technology
                  </span>

                  <div className={styles.barTrack}>
                    <span
                      className={styles.barMedium}
                      style={{ width: "49%" }}
                    />
                  </div>

                  <strong>
                    Medium
                  </strong>
                </div>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.decisionSection}>
        <PublicContainer>

          <div className={styles.decisionHeader}>
            <p className={styles.sectionLabel}>
              Decision context
            </p>

            <h2>
              A management view should answer four questions quickly.
            </h2>
          </div>


          <div className={styles.decisionGrid}>

            <div className={styles.decisionItem}>
              <span>01</span>

              <strong>
                What happened?
              </strong>

              <p>
                The AI activity or event requiring attention.
              </p>
            </div>


            <div className={styles.decisionItem}>
              <span>02</span>

              <strong>
                Where does it matter?
              </strong>

              <p>
                The business function, process or service around it.
              </p>
            </div>


            <div className={styles.decisionItem}>
              <span>03</span>

              <strong>
                Who owns it?
              </strong>

              <p>
                The accountable team or responsible business area.
              </p>
            </div>


            <div className={styles.decisionItemEmphasis}>
              <span>04</span>

              <strong>
                What needs attention?
              </strong>

              <p>
                The significance and management priority created by the
                combined context.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.productSection}>
        <PublicContainer>

          <div className={styles.productHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Where management intelligence is used
              </p>

              <h2>
                Govern and Impact use the same management foundation differently.
              </h2>
            </div>

            <p>
              The platform creates the connected management view.
              AIGO-OS Govern and AIGO-OS Impact apply that view to
              different management questions.
            </p>
          </div>


          <div className={styles.productSplit}>

            <Link
              href="/products/aigo-os-govern"
              className={styles.productGovern}
            >
              <span>
                AIGO-OS Govern
              </span>

              <h3>
                Which governance issues require management attention?
              </h3>

              <p>
                Prioritize accountability, authority and governance
                concerns using business significance and ownership.
              </p>
            </Link>


            <Link
              href="/products/aigo-os-impact"
              className={styles.productImpact}
            >
              <span>
                AIGO-OS Impact
              </span>

              <h3>
                Which incidents and changes matter most to the business?
              </h3>

              <p>
                Prioritize business-impact attention using functions,
                dependencies and operational significance.
              </p>
            </Link>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.completeSection}>
        <PublicContainer>
          <div className={styles.completePanel}>

            <div>
              <p className={styles.sectionLabelLight}>
                Platform sequence complete
              </p>

              <h2>
                Five capabilities create one connected intelligence foundation.
              </h2>

              <p>
                Explore the full platform again or move into the products
                that turn this foundation into governance and business-impact
                intelligence.
              </p>
            </div>

            <div className={styles.completeActions}>
              <Link
                href="/platform"
                className={styles.completePrimary}
              >
                Platform Overview
              </Link>

              <Link
                href="/products"
                className={styles.completeSecondary}
              >
                Explore Products
              </Link>
            </div>

          </div>
        </PublicContainer>
      </section>
    </>
  );
}




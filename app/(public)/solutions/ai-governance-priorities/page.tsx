import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const priorityFactors = [
  {
    number: "01",
    title: "Business significance",
    text:
      "Understand how important the affected business function, process or service is.",
  },
  {
    number: "02",
    title: "Governance exposure",
    text:
      "Distinguish routine issues from activity involving accountability, authority or oversight concerns.",
  },
  {
    number: "03",
    title: "Ownership clarity",
    text:
      "Keep responsible teams visible so priority issues can be routed to the right people.",
  },
];

const queue = [
  {
    level: "High",
    title: "Authority-sensitive agent activity",
    owner: "Digital Operations",
    context: "Customer Operations",
  },
  {
    level: "High",
    title: "Agent ownership cannot be resolved",
    owner: "Governance Review",
    context: "Enterprise Services",
  },
  {
    level: "Medium",
    title: "Potential capability overlap",
    owner: "AI Platform Team",
    context: "Finance Operations",
  },
  {
    level: "Monitor",
    title: "Routine autonomous activity",
    owner: "Customer Operations",
    context: "Customer Support",
  },
];

export default function AIGovernancePrioritiesPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AIGO-OS Govern Use Case
              </p>

              <h1>
                Focus governance attention on what matters most.
              </h1>

              <p className={styles.heroText}>
                AI Governance Priorities helps organizations distinguish
                routine activity from governance issues that carry greater
                business significance, accountability concerns or authority risk.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/request-demo"
                  className={styles.primaryButton}
                >
                  Request a Demo
                </Link>

                <Link
                  href="/products/aigo-os-govern"
                  className={styles.secondaryButton}
                >
                  Explore AIGO-OS Govern
                </Link>
              </div>
            </div>


            <div className={styles.priorityBoard}>

              <div className={styles.boardHeader}>
                <div>
                  <span>
                    Governance attention
                  </span>

                  <strong>
                    Priority queue
                  </strong>
                </div>

                <span className={styles.boardState}>
                  4 items
                </span>
              </div>


              <div className={styles.queue}>
                {queue.map((item) => (
                  <div
                    key={item.title}
                    className={
                      item.level === "High"
                        ? styles.queueRowHigh
                        : item.level === "Medium"
                        ? styles.queueRowMedium
                        : styles.queueRowMonitor
                    }
                  >
                    <span className={styles.queueLevel}>
                      {item.level}
                    </span>

                    <div className={styles.queueIssue}>
                      <strong>
                        {item.title}
                      </strong>

                      <span>
                        {item.context}
                      </span>
                    </div>

                    <div className={styles.queueOwner}>
                      <span>
                        Owner
                      </span>

                      <strong>
                        {item.owner}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.problemSection}>
        <PublicContainer>

          <div className={styles.problemHeader}>
            <p className={styles.sectionLabel}>
              Prioritisation problem
            </p>

            <h2>
              Governance teams need more than a growing list of AI issues.
            </h2>
          </div>


          <div className={styles.problemGrid}>
            {priorityFactors.map((item) => (
              <article
                key={item.number}
                className={styles.problemItem}
              >
                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>
              </article>
            ))}
          </div>

        </PublicContainer>
      </section>


      <section className={styles.triageSection}>
        <PublicContainer>

          <div className={styles.triageGrid}>

            <div className={styles.triageCopy}>
              <p className={styles.sectionLabelLight}>
                Governance triage
              </p>

              <h2>
                Priority should reflect business context, not just technical severity.
              </h2>

              <p>
                AIGO-OS Govern keeps ownership, criticality and governance
                relevance visible so management can distinguish what needs
                attention now from what can remain under normal monitoring.
              </p>
            </div>


            <div className={styles.triageBoard}>

              <div className={styles.triageHigh}>
                <span>
                  High
                </span>

                <strong>
                  Authority-sensitive activity
                </strong>

                <p>
                  Critical business function with clear governance relevance.
                </p>
              </div>

              <div className={styles.triageMedium}>
                <span>
                  Medium
                </span>

                <strong>
                  Capability overlap
                </strong>

                <p>
                  Governance review is useful, but immediate intervention is not required.
                </p>
              </div>

              <div className={styles.triageMonitor}>
                <span>
                  Monitor
                </span>

                <strong>
                  Routine agent activity
                </strong>

                <p>
                  Ownership and operating scope are already established.
                </p>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.contextSection}>
        <PublicContainer>

          <div className={styles.contextHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Priority in context
              </p>

              <h2>
                The same governance issue can carry different urgency in different parts of the business.
              </h2>
            </div>

            <p>
              Priority becomes more useful when the business environment,
              accountable owner and operational significance remain attached
              to the issue being reviewed.
            </p>
          </div>


          <div className={styles.contextComparison}>

            <div className={styles.contextCase}>
              <span>
                Lower business significance
              </span>

              <strong>
                Ownership exception
              </strong>

              <div className={styles.contextFacts}>
                <div>
                  <span>Function</span>
                  <strong>Internal Productivity</strong>
                </div>

                <div>
                  <span>Criticality</span>
                  <strong>Low</strong>
                </div>

                <div>
                  <span>Priority</span>
                  <strong>Monitor</strong>
                </div>
              </div>
            </div>


            <div className={styles.contextCaseHigh}>
              <span>
                Higher business significance
              </span>

              <strong>
                Ownership exception
              </strong>

              <div className={styles.contextFactsDark}>
                <div>
                  <span>Function</span>
                  <strong>Customer Operations</strong>
                </div>

                <div>
                  <span>Criticality</span>
                  <strong>High</strong>
                </div>

                <div>
                  <span>Priority</span>
                  <strong>Governance review</strong>
                </div>
              </div>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.managementSection}>
        <PublicContainer>

          <div className={styles.managementGrid}>

            <div className={styles.managementIntro}>
              <p className={styles.sectionLabelLight}>
                Management queue
              </p>

              <h2>
                Priority is most useful when it leads to clear ownership and action.
              </h2>
            </div>


            <div className={styles.managementQueue}>

              <div className={styles.managementRow}>
                <span className={styles.rank}>
                  01
                </span>

                <div>
                  <span>
                    Immediate review
                  </span>

                  <strong>
                    Authority-sensitive activity in Customer Operations
                  </strong>
                </div>

                <small>
                  Digital Operations
                </small>
              </div>

              <div className={styles.managementRow}>
                <span className={styles.rank}>
                  02
                </span>

                <div>
                  <span>
                    Accountability review
                  </span>

                  <strong>
                    Agent owner unresolved
                  </strong>
                </div>

                <small>
                  Governance Review
                </small>
              </div>

              <div className={styles.managementRow}>
                <span className={styles.rank}>
                  03
                </span>

                <div>
                  <span>
                    Planned review
                  </span>

                  <strong>
                    Potential capability overlap
                  </strong>
                </div>

                <small>
                  AI Platform Team
                </small>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.demoSection}>
        <PublicContainer>

          <div className={styles.demoPanel}>
            <div>
              <p className={styles.sectionLabelLight}>
                See AI Governance Priorities in AIGO-OS
              </p>

              <h2>
                See how governance attention can be prioritized using business context.
              </h2>

              <p>
                Request a demo to see how AIGO-OS Govern can help surface
                the issues that matter most, with ownership and business
                significance still visible.
              </p>
            </div>

            <Link
              href="/request-demo"
              className={styles.demoButton}
            >
              Request a Demo
            </Link>
          </div>

        </PublicContainer>
      </section>
    </>
  );
}


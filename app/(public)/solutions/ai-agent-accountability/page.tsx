import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const accountabilityQuestions = [
  {
    number: "01",
    title: "Who owns the agent?",
    text:
      "Identify the business team or function responsible for the agent operating in the enterprise.",
  },
  {
    number: "02",
    title: "Who delegated authority?",
    text:
      "Connect agent permissions and operating scope back to the human or organizational authority behind them.",
  },
  {
    number: "03",
    title: "Who reviews its actions?",
    text:
      "Make oversight responsibility visible when activity requires management or governance attention.",
  },
];

export default function AIAgentAccountabilityPage() {
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
                Know who is accountable for what an AI agent does.
              </h1>

              <p className={styles.heroText}>
                AI Agent Accountability connects autonomous activity to the
                business owner, delegated authority and oversight structure
                responsible for it.
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


            <div className={styles.accountabilityChain}>
              <div className={styles.chainStage}>
                <span>
                  Agent
                </span>

                <strong>
                  Customer service agent
                </strong>

                <small>
                  Autonomous activity
                </small>
              </div>

              <div className={styles.chainConnector} />

              <div className={styles.chainStageEmphasis}>
                <span>
                  Responsible owner
                </span>

                <strong>
                  Digital Operations
                </strong>

                <small>
                  Business accountability
                </small>
              </div>

              <div className={styles.chainConnector} />

              <div className={styles.chainStage}>
                <span>
                  Oversight
                </span>

                <strong>
                  AI Governance Lead
                </strong>

                <small>
                  Review responsibility
                </small>
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.questionSection}>
        <PublicContainer>

          <div className={styles.questionHeader}>
            <p className={styles.sectionLabel}>
              Accountability questions
            </p>

            <h2>
              Accountability becomes clearer when responsibility is explicit.
            </h2>
          </div>

          <div className={styles.questionGrid}>
            {accountabilityQuestions.map((item) => (
              <article
                key={item.number}
                className={styles.questionItem}
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


      <section className={styles.responsibilitySection}>
        <PublicContainer>

          <div className={styles.responsibilityGrid}>

            <div className={styles.responsibilityCopy}>
              <p className={styles.sectionLabelLight}>
                Responsibility chain
              </p>

              <h2>
                Autonomous does not mean unowned.
              </h2>

              <p>
                AI agents may act independently within their operating scope,
                but accountability still needs to resolve back to identifiable
                people, teams and governance structures.
              </p>
            </div>


            <div className={styles.responsibilityBoard}>

              <div className={styles.responsibilityRow}>
                <span>
                  Operating agent
                </span>

                <strong>
                  Customer service agent
                </strong>

                <small>
                  Performs autonomous activity
                </small>
              </div>

              <div className={styles.responsibilityRow}>
                <span>
                  Business owner
                </span>

                <strong>
                  Digital Operations
                </strong>

                <small>
                  Responsible for business use
                </small>
              </div>

              <div className={styles.responsibilityRow}>
                <span>
                  Delegating authority
                </span>

                <strong>
                  Customer Operations Leadership
                </strong>

                <small>
                  Defines acceptable operating scope
                </small>
              </div>

              <div className={styles.responsibilityRowStrong}>
                <span>
                  Governance oversight
                </span>

                <strong>
                  AI Governance Lead
                </strong>

                <small>
                  Reviews accountability exceptions
                </small>
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.ownershipSection}>
        <PublicContainer>

          <div className={styles.ownershipHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Ownership in context
              </p>

              <h2>
                The same agent can involve several kinds of responsibility.
              </h2>
            </div>

            <p>
              Ownership is not one label. Business use, delegated authority,
              technical operation and governance review can sit with different
              parts of the organization.
            </p>
          </div>


          <div className={styles.ownershipLayout}>

            <div className={styles.agentCore}>
              <span>
                AI Agent
              </span>

              <strong>
                Customer service agent
              </strong>

              <p>
                Autonomous activity in Customer Operations.
              </p>
            </div>


            <div className={styles.ownershipRoles}>
              <div>
                <span>
                  Business responsibility
                </span>

                <strong>
                  Digital Operations
                </strong>
              </div>

              <div>
                <span>
                  Operating responsibility
                </span>

                <strong>
                  AI Platform Team
                </strong>
              </div>

              <div>
                <span>
                  Governance responsibility
                </span>

                <strong>
                  AI Governance Lead
                </strong>
              </div>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.exceptionSection}>
        <PublicContainer>

          <div className={styles.exceptionGrid}>

            <div className={styles.exceptionIntro}>
              <p className={styles.sectionLabelLight}>
                Accountability exceptions
              </p>

              <h2>
                The important moment is when responsibility becomes unclear.
              </h2>
            </div>


            <div className={styles.exceptionBoard}>

              <div className={styles.exceptionNormal}>
                <span>
                  Normal operating state
                </span>

                <strong>
                  Owner identified
                </strong>

                <p>
                  Agent activity sits inside an established accountability chain.
                </p>
              </div>


              <div className={styles.exceptionIssue}>
                <span>
                  Accountability issue
                </span>

                <strong>
                  Delegated authority cannot be traced
                </strong>

                <p>
                  Governance attention is required because responsibility
                  cannot be resolved cleanly.
                </p>
              </div>


              <div className={styles.exceptionOutcome}>
                <span>
                  Management action
                </span>

                <strong>
                  Review ownership and authority
                </strong>

                <p>
                  The issue can be routed to the appropriate accountable team.
                </p>
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
                See AI Agent Accountability in AIGO-OS
              </p>

              <h2>
                See how responsibility can stay connected to autonomous AI activity.
              </h2>

              <p>
                Request a demo to see how AIGO-OS Govern can make ownership,
                delegated authority and governance oversight easier to understand.
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


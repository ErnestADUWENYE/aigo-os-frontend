import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const authorityAreas = [
  {
    number: "01",
    title: "Granted scope",
    text:
      "Define the business systems, data and actions an AI agent is authorized to use.",
  },
  {
    number: "02",
    title: "Restricted scope",
    text:
      "Make prohibited or higher-risk actions visible instead of leaving them implicit.",
  },
  {
    number: "03",
    title: "Escalation boundary",
    text:
      "Identify when an agent must hand control back to a human or accountable authority.",
  },
];

export default function AIAgentAccessAuthorityPage() {
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
                Make an AI agent’s authority boundaries explicit.
              </h1>

              <p className={styles.heroText}>
                AI Agent Access Authority helps organizations understand what
                an agent is permitted to access, what it may act on and where
                human approval or escalation is required.
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


            <div className={styles.authorityMap}>

              <div className={styles.authorityHeader}>
                <div>
                  <span>
                    Agent authority
                  </span>

                  <strong>
                    Customer service agent
                  </strong>
                </div>

                <span className={styles.authorityState}>
                  Controlled
                </span>
              </div>


              <div className={styles.authorityZones}>

                <div className={styles.allowedZone}>
                  <span>
                    Allowed
                  </span>

                  <strong>
                    Read customer account context
                  </strong>

                  <small>
                    Approved operating scope
                  </small>
                </div>

                <div className={styles.allowedZone}>
                  <span>
                    Allowed
                  </span>

                  <strong>
                    Draft service response
                  </strong>

                  <small>
                    Approved operating scope
                  </small>
                </div>

                <div className={styles.reviewZone}>
                  <span>
                    Approval required
                  </span>

                  <strong>
                    Modify customer entitlement
                  </strong>

                  <small>
                    Human review boundary
                  </small>
                </div>

                <div className={styles.blockedZone}>
                  <span>
                    Restricted
                  </span>

                  <strong>
                    Execute financial adjustment
                  </strong>

                  <small>
                    Outside delegated authority
                  </small>
                </div>

              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.scopeSection}>
        <PublicContainer>

          <div className={styles.scopeHeader}>
            <p className={styles.sectionLabel}>
              Authority scope
            </p>

            <h2>
              Authority should be understandable before an action becomes a problem.
            </h2>
          </div>


          <div className={styles.scopeGrid}>
            {authorityAreas.map((item) => (
              <article
                key={item.number}
                className={styles.scopeItem}
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


      <section className={styles.boundarySection}>
        <PublicContainer>

          <div className={styles.boundaryGrid}>

            <div className={styles.boundaryCopy}>
              <p className={styles.sectionLabelLight}>
                Operating boundary
              </p>

              <h2>
                The important distinction is not only what the agent can do, but what it must not do.
              </h2>

              <p>
                AIGO-OS Govern keeps allowed actions, approval points and
                restricted operations visible in the same authority view.
              </p>
            </div>


            <div className={styles.boundaryBoard}>

              <div className={styles.boundaryColumnAllowed}>
                <span>
                  Within authority
                </span>

                <div>
                  <strong>
                    Read customer profile
                  </strong>

                  <small>
                    Allowed
                  </small>
                </div>

                <div>
                  <strong>
                    Draft response
                  </strong>

                  <small>
                    Allowed
                  </small>
                </div>
              </div>


              <div className={styles.boundaryColumnReview}>
                <span>
                  Review boundary
                </span>

                <div>
                  <strong>
                    Change service entitlement
                  </strong>

                  <small>
                    Human approval required
                  </small>
                </div>
              </div>


              <div className={styles.boundaryColumnBlocked}>
                <span>
                  Outside authority
                </span>

                <div>
                  <strong>
                    Issue financial adjustment
                  </strong>

                  <small>
                    Restricted
                  </small>
                </div>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.delegationSection}>
        <PublicContainer>

          <div className={styles.delegationHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Delegated authority
              </p>

              <h2>
                Agent authority should resolve back to the organization that granted it.
              </h2>
            </div>

            <p>
              Permissions have more governance value when the business
              authority behind them remains visible alongside the agent.
            </p>
          </div>


          <div className={styles.delegationLayout}>

            <div className={styles.delegator}>
              <span>
                Delegating authority
              </span>

              <strong>
                Customer Operations Leadership
              </strong>

              <p>
                Defines the acceptable operating scope.
              </p>
            </div>


            <div className={styles.delegatedScope}>
              <div>
                <span>
                  Agent
                </span>

                <strong>
                  Customer service agent
                </strong>
              </div>

              <div>
                <span>
                  Approved scope
                </span>

                <strong>
                  Customer support assistance
                </strong>
              </div>

              <div>
                <span>
                  Escalation point
                </span>

                <strong>
                  Digital Operations
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
                Authority exception
              </p>

              <h2>
                Governance attention begins when agent activity crosses its authority boundary.
              </h2>
            </div>


            <div className={styles.exceptionFlow}>

              <div className={styles.exceptionNormal}>
                <span>
                  Authorized action
                </span>

                <strong>
                  Draft customer response
                </strong>

                <p>
                  Within delegated operating scope.
                </p>
              </div>

              <div className={styles.exceptionCrossing}>
                <span>
                  Boundary crossing
                </span>

                <strong>
                  Attempt to modify entitlement
                </strong>

                <p>
                  Action requires human authorization.
                </p>
              </div>

              <div className={styles.exceptionAction}>
                <span>
                  Governance response
                </span>

                <strong>
                  Escalate for review
                </strong>

                <p>
                  Activity is routed to the responsible authority.
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
                See AI Agent Access Authority in AIGO-OS
              </p>

              <h2>
                See how agent permissions and authority boundaries can stay connected to business governance.
              </h2>

              <p>
                Request a demo to see how AIGO-OS Govern can make
                granted scope, restrictions and escalation points easier to understand.
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


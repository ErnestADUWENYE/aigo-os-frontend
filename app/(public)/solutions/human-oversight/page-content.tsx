import Link from "next/link";
import styles from "./page.module.css";


function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="18"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}


function HumanIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <circle
        cx="12"
        cy="8"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5.5 19c.8-4 3-6 6.5-6s5.7 2 6.5 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}


function RouteIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M4 7h8M12 7l-3-3M12 7l-3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M20 17h-8M12 17l3-3M12 17l3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}


function DecisionIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M7 4h10v16H7z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="m9.5 12 1.8 1.8 3.5-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}


const enablement = [
  {
    number: "01",
    eyebrow: "DETERMINE",
    title: "Know when human authority is required",
    description:
      "Evaluate AI activity against its authority, Business Significance and applicable governance requirements.",
    icon: <HumanIcon />,
  },
  {
    number: "02",
    eyebrow: "ROUTE",
    title: "Direct the decision to the right person",
    description:
      "Create a Human Governance Task and route it to the authorised organisational role or decision-maker.",
    icon: <RouteIcon />,
  },
  {
    number: "03",
    eyebrow: "DECIDE",
    title: "Capture accountable human judgement",
    description:
      "Record the resulting Human Governance Decision and carry it forward into the governance evidence chain.",
    icon: <DecisionIcon />,
  },
];


const outcomes = [
  {
    title: "Proportionate oversight",
    description:
      "Allow appropriate AI activity to remain autonomous while directing higher-consequence or exceptional activity to human authority.",
  },
  {
    title: "Clear accountability",
    description:
      "Route decisions to an authorised person with the context required to understand why their judgement is needed.",
  },
  {
    title: "Decision traceability",
    description:
      "Preserve the Human Governance Decision together with the AI Actor, activity and governance context that produced it.",
  },
];


const decisions = [
  "Approve",
  "Approve with Conditions",
  "Reject",
  "Request More Information",
  "Escalate",
];


const capabilities = [
  {
    number: "01",
    name: "AI Actor Passports",
    question: "Who is acting?",
  },
  {
    number: "02",
    name: "Machine Authority",
    question: "What authority is available?",
  },
  {
    number: "03",
    name: "Business Significance",
    question: "What does the activity mean?",
  },
  {
    number: "04",
    name: "Governance Decisioning",
    question: "Does governance require human authority?",
  },
  {
    number: "05",
    name: "Human Authority & Intervention",
    question: "Route accountable human judgement.",
    active: true,
  },
  {
    number: "06",
    name: "Governance Receipts",
    question: "Preserve what was decided.",
  },
];


export function Page12HumanOversight() {
  return (
    <main className={styles.page}>

      {/* ======================================================
          HERO
         ====================================================== */}

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <span className={styles.kicker}>
                USE CASE · HUMAN OVERSIGHT
              </span>

              <h1>
                Establish
                <span> Human Oversight.</span>
              </h1>

              <p className={styles.heroLead}>
                Bring accountable human judgement into AI activity
                when Business Significance, governance requirements
                or delegated authority make human intervention necessary.
              </p>

              <div className={styles.heroActions}>
                <Link
                  className={styles.primaryButton}
                  href="/contact"
                >
                  Talk to us
                  <ArrowRight />
                </Link>

                <Link
                  className={styles.secondaryButton}
                  href="/platform/human-authority"
                >
                  Explore Human Authority &amp; Intervention
                  <ArrowRight />
                </Link>
              </div>
            </div>


            <div className={styles.heroVisual}>
              <div className={styles.heroHalo} />

              <div className={styles.routeTag}>
                <span>ROUTED TO</span>
                <strong>Customer Operations Owner</strong>
              </div>

              <div className={styles.contextTag}>
                <span>BUSINESS SIGNIFICANCE</span>
                <strong>High</strong>
              </div>


              <div className={styles.taskPanel}>

                <div className={styles.taskHeader}>
                  <div>
                    <span>HUMAN GOVERNANCE TASK</span>
                    <strong>
                      Customer account adjustment
                    </strong>
                  </div>

                  <div className={styles.awaitingStatus}>
                    Awaiting decision
                  </div>
                </div>


                <div className={styles.taskGrid}>

                  <div>
                    <span>AI ACTOR</span>
                    <strong>
                      Customer Operations Agent
                    </strong>
                  </div>

                  <div>
                    <span>ACTIVITY</span>
                    <strong>
                      Adjust customer account balance
                    </strong>
                  </div>

                  <div>
                    <span>AUTHORITY</span>
                    <strong>
                      Adjustment authority available
                    </strong>
                  </div>

                  <div>
                    <span>BUSINESS SIGNIFICANCE</span>
                    <strong>
                      High customer / financial impact
                    </strong>
                  </div>

                </div>


                <div className={styles.requiredPanel}>
                  <div className={styles.requiredSignal}>
                    <i />
                  </div>

                  <div>
                    <span>AI GOVERNANCE DECISION</span>
                    <strong>
                      Human authority required
                    </strong>
                    <p>
                      Activity exceeds autonomous threshold
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ======================================================
          CHALLENGE
         ====================================================== */}

      <section className={styles.challenge}>
        <div className={styles.shell}>

          <div className={styles.sectionSplit}>

            <div>
              <span className={styles.sectionKicker}>
                THE CHALLENGE
              </span>

              <h2>
                Human oversight needs to appear at the right point —
                not everywhere and not too late.
              </h2>
            </div>

            <div className={styles.sectionCopy}>
              <p>
                Some AI activity can proceed within established authority
                and operating conditions. Other activity carries enough
                consequence, exception or governance requirement to need
                accountable human judgement.
              </p>

              <p>
                The challenge is determining which is which, identifying
                the appropriate decision-maker and giving that person the
                context needed to make an informed decision.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          WHAT AIGO-OS ENABLES
         ====================================================== */}

      <section className={styles.enableSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              WHAT AIGO-OS ENABLES
            </span>

            <h2>
              Put accountable human judgement where governance requires it.
            </h2>
          </div>


          <div className={styles.enableGrid}>
            {enablement.map((item) => (
              <article
                className={styles.enableCard}
                key={item.number}
              >
                <div className={styles.cardTop}>
                  <span className={styles.number}>
                    {item.number}
                  </span>

                  <div className={styles.cardIcon}>
                    {item.icon}
                  </div>
                </div>

                <span className={styles.cardEyebrow}>
                  {item.eyebrow}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================
          DECISION-READY HUMAN OVERSIGHT
         ====================================================== */}

      <section className={styles.contextSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              DECISION-READY HUMAN OVERSIGHT
            </span>

            <h2>
              Give people the context to make the decision.
            </h2>

            <p>
              AIGO-OS assembles the governance context behind the activity
              so the authorised person can understand what is being asked,
              why their authority is required and what decision they need
              to make.
            </p>
          </div>


          <div className={styles.governanceTask}>

            <div className={styles.governanceTaskTop}>
              <div>
                <span>HUMAN GOVERNANCE TASK</span>
                <strong>
                  Customer account adjustment
                </strong>
              </div>

              <div className={styles.taskStatus}>
                AWAITING DECISION
              </div>
            </div>


            <div className={styles.governanceDetails}>

              <div>
                <span>AI ACTOR</span>
                <strong>
                  Customer Operations Agent
                </strong>
              </div>

              <div>
                <span>ACTIVITY</span>
                <strong>
                  Adjust customer account balance
                </strong>
              </div>

              <div>
                <span>AUTHORITY</span>
                <strong>
                  Adjustment authority available
                </strong>
              </div>

              <div>
                <span>BUSINESS SIGNIFICANCE</span>
                <strong>
                  High customer / financial impact
                </strong>
              </div>

              <div>
                <span>WHY HUMAN AUTHORITY IS REQUIRED</span>
                <strong>
                  Activity exceeds autonomous threshold
                </strong>
              </div>

              <div>
                <span>ROUTED TO</span>
                <strong>
                  Customer Operations Owner
                </strong>
              </div>

            </div>


            <div className={styles.decisionArea}>
              <span>AVAILABLE HUMAN GOVERNANCE DECISIONS</span>

              <div className={styles.decisionGrid}>
                {decisions.map((decision) => (
                  <div
                    className={styles.decisionOption}
                    key={decision}
                  >
                    <i />
                    {decision}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          ENTERPRISE ACTION BOUNDARY
         ====================================================== */}

      <section className={styles.boundarySection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              HUMAN DECISION → ENTERPRISE ACTION
            </span>

            <h2>
              Decision in AIGO-OS. Operational action where it belongs.
            </h2>

            <p>
              AIGO-OS surfaces the governance task, decision context and
              required human judgement. Where a decision requires an
              operational change, the authorised person continues in the
              enterprise system responsible for that action.
            </p>
          </div>


          <div className={styles.boundaryFlow}>

            <div className={styles.boundaryCard}>
              <span>AIGO-OS</span>
              <strong>
                Human Governance Task
              </strong>
              <p>
                Decision-ready governance context
              </p>
            </div>

            <div className={styles.boundaryArrow}>
              <ArrowRight />
            </div>

            <div className={`${styles.boundaryCard} ${styles.boundaryActive}`}>
              <span>AUTHORISED PERSON</span>
              <strong>
                Human Governance Decision
              </strong>
              <p>
                Accountable judgement
              </p>
            </div>

            <div className={styles.boundaryArrow}>
              <ArrowRight />
            </div>

            <div className={styles.boundaryCard}>
              <span>ENTERPRISE SYSTEM</span>
              <strong>
                Operational action
              </strong>
              <p>
                IAM · ITSM · GRC · Application · Cloud · Workflow
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          OUTCOMES
         ====================================================== */}

      <section className={styles.outcomeSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              OUTCOME
            </span>

            <h2>
              Put accountable human judgement where AI governance requires it.
            </h2>
          </div>


          <div className={styles.outcomeGrid}>
            {outcomes.map((item, index) => (
              <article
                className={styles.outcomeCard}
                key={item.title}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================
          PLATFORM CONNECTION
         ====================================================== */}

      <section className={styles.capabilitySection}>
        <div className={styles.shell}>

          <div className={styles.capabilityHeader}>
            <div>
              <span className={styles.sectionKicker}>
                POWERED BY AIGO-OS
              </span>

              <h2>
                Human oversight starts with context.
              </h2>
            </div>

            <Link
              className={styles.capabilityLink}
              href="/platform/human-authority"
            >
              Explore Human Authority &amp; Intervention
              <ArrowRight />
            </Link>
          </div>


          <div className={styles.capabilityFlow}>
            {capabilities.map((item, index) => (
              <div
                className={
                  item.active
                    ? `${styles.capabilityCard} ${styles.capabilityActive}`
                    : styles.capabilityCard
                }
                key={item.name}
              >
                <span>{item.number}</span>

                <strong>{item.name}</strong>

                <p>{item.question}</p>

                {index < capabilities.length - 1 ? (
                  <div className={styles.capabilityArrow}>
                    <ArrowRight />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================
          CTA
         ====================================================== */}

      <section className={styles.cta}>
        <div className={styles.shell}>

          <div className={styles.ctaPanel}>
            <div>
              <span className={styles.ctaKicker}>
                AIGO-OS
              </span>

              <h2>
                Bring human authority into AI decisions when it matters.
              </h2>

              <p>
                Determine when human judgement is required, route the
                decision with the right context and preserve the outcome.
              </p>
            </div>

            <Link
              className={styles.ctaButton}
              href="/contact"
            >
              Talk to us
              <ArrowRight />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}



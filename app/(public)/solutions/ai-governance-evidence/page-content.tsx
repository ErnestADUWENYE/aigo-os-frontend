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


function RecordIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M7 3.8h7l3 3V20H7V3.8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M14 4v4h4M9.5 12h5M9.5 15.5h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
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


function ReuseIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M7 7h7a4 4 0 0 1 4 4v1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="m15 9 3 3 3-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M17 17h-7a4 4 0 0 1-4-4v-1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="m9 15-3-3-3 3"
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
    eyebrow: "DECISION CONTEXT",
    title: "Preserve the governance context",
    description:
      "Record the AI Actor, activity, authority, Business Significance and governance decision associated with the event.",
    icon: <RecordIcon />,
  },
  {
    number: "02",
    eyebrow: "HUMAN JUDGEMENT",
    title: "Connect accountable human decisions",
    description:
      "Where human authority is required, preserve the authorised person's decision alongside the context that produced it.",
    icon: <HumanIcon />,
  },
  {
    number: "03",
    eyebrow: "REUSABLE EVIDENCE",
    title: "Make governance evidence reusable",
    description:
      "Keep governance records available for assurance, audit, investigations, reporting and integration with existing enterprise systems.",
    icon: <ReuseIcon />,
  },
];


const receiptFields = [
  {
    title: "AI Actor",
    description: "Who was involved.",
  },
  {
    title: "AI Activity",
    description: "What occurred or was evaluated.",
  },
  {
    title: "AI Authority Boundary",
    description: "What authority applied.",
  },
  {
    title: "Business Significance",
    description: "Why the activity mattered in context.",
  },
  {
    title: "Governance Decisions",
    description: "What AIGO-OS and authorised people decided.",
  },
  {
    title: "Evidence & References",
    description: "Supporting records and references.",
  },
];


const outcomes = [
  {
    title: "Stronger accountability",
    description:
      "Preserve who or what was involved, what authority applied and what governance decision was made.",
  },
  {
    title: "Faster assurance",
    description:
      "Reduce the effort required to reconstruct AI governance context from disconnected enterprise records.",
  },
  {
    title: "Durable governance evidence",
    description:
      "Maintain a consistent evidence trail across automated governance decisions and accountable human judgement.",
  },
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
    question: "What authority applies?",
  },
  {
    number: "03",
    name: "Business Significance",
    question: "What does the activity mean?",
  },
  {
    number: "04",
    name: "Governance Decisioning",
    question: "What governance treatment applies?",
  },
  {
    number: "05",
    name: "Human Authority & Intervention",
    question: "What did the authorised person decide?",
  },
  {
    number: "06",
    name: "Governance Receipts",
    question: "Preserve the evidence.",
    active: true,
  },
];


export function Page14AIGovernanceEvidence() {
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
                USE CASE · EVIDENCE &amp; TRACEABILITY
              </span>

              <h1>
                Build AI Governance
                <span> Evidence.</span>
              </h1>

              <p className={styles.heroLead}>
                Preserve the identity, authority, business context
                and governance decisions behind AI activity in a
                durable evidence record.
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
                  href="/platform/governance-receipts"
                >
                  Explore Governance Receipts
                  <ArrowRight />
                </Link>
              </div>
            </div>


            <div className={styles.heroVisual}>
              <div className={styles.heroHalo} />

              <div className={styles.auditTag}>
                <span>STATUS</span>
                <strong>Evidence recorded</strong>
              </div>

              <div className={styles.referenceTag}>
                <span>TRACEABILITY</span>
                <strong>Context linked</strong>
              </div>


              <div className={styles.receiptPanel}>

                <div className={styles.receiptHeader}>
                  <div>
                    <span>AI GOVERNANCE RECEIPT</span>
                    <strong>
                      Supplier Management Agent
                    </strong>
                  </div>

                  <div className={styles.receiptStatus}>
                    Recorded
                  </div>
                </div>


                <div className={styles.receiptGrid}>

                  <div>
                    <span>AI ACTOR</span>
                    <strong>
                      Supplier Management Agent
                    </strong>
                  </div>

                  <div>
                    <span>AI ACTIVITY</span>
                    <strong>
                      Contract change submitted
                    </strong>
                  </div>

                  <div>
                    <span>AUTHORITY</span>
                    <strong>
                      Supplier management authority
                    </strong>
                  </div>

                  <div>
                    <span>BUSINESS SIGNIFICANCE</span>
                    <strong>
                      High contractual impact
                    </strong>
                  </div>

                  <div>
                    <span>AI GOVERNANCE DECISION</span>
                    <strong>
                      Human authority required
                    </strong>
                  </div>

                  <div>
                    <span>HUMAN GOVERNANCE DECISION</span>
                    <strong>
                      Approved with Conditions
                    </strong>
                  </div>

                </div>


                <div className={styles.receiptFooter}>
                  <div className={styles.receiptSignal}>
                    <RecordIcon />
                  </div>

                  <div>
                    <span>EVIDENCE</span>
                    <strong>
                      Governance context preserved
                    </strong>
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
                Evidence exists across the enterprise.
                Governance context can still be hard to reconstruct.
              </h2>
            </div>

            <div className={styles.sectionCopy}>
              <p>
                AI activity can leave evidence across identity systems,
                applications, workflows, tickets, logs and governance
                platforms. Those records may show individual events
                without preserving the complete context behind why an
                AI activity was allowed, reviewed, escalated or approved.
              </p>

              <p>
                When assurance, audit or investigation requires that
                context later, organisations need a reliable way to
                reconstruct what was known and decided at the time.
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
              Preserve the evidence behind AI governance decisions.
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
          GOVERNANCE TRACEABILITY
         ====================================================== */}

      <section className={styles.traceabilitySection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              GOVERNANCE TRACEABILITY
            </span>

            <h2>
              Reconstruct what AIGO-OS knew
              and what the organisation decided.
            </h2>

            <p>
              Governance Receipts preserve the connected context around
              AI activity so organisations can trace the path from AI Actor
              to authority, Business Significance, governance treatment
              and human judgement.
            </p>
          </div>


          <div className={styles.traceFlow}>

            <div className={styles.traceCard}>
              <span>AI ACTOR</span>
              <strong>
                Supplier Management Agent
              </strong>
            </div>

            <div className={styles.traceArrow}>
              <ArrowRight />
            </div>

            <div className={styles.traceCard}>
              <span>MACHINE AUTHORITY</span>
              <strong>
                Supplier management authority
              </strong>
            </div>

            <div className={styles.traceArrow}>
              <ArrowRight />
            </div>

            <div className={styles.traceCard}>
              <span>BUSINESS SIGNIFICANCE</span>
              <strong>
                High contractual impact
              </strong>
            </div>

            <div className={styles.traceArrow}>
              <ArrowRight />
            </div>

            <div className={styles.traceCard}>
              <span>AI GOVERNANCE DECISION</span>
              <strong>
                Human authority required
              </strong>
            </div>

            <div className={styles.traceArrow}>
              <ArrowRight />
            </div>

            <div className={styles.traceCard}>
              <span>HUMAN GOVERNANCE DECISION</span>
              <strong>
                Approved with Conditions
              </strong>
            </div>

            <div className={styles.traceArrow}>
              <ArrowRight />
            </div>

            <div className={`${styles.traceCard} ${styles.traceActive}`}>
              <span>AI GOVERNANCE RECEIPT</span>
              <strong>
                Evidence recorded
              </strong>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          EVIDENCE RECORD
         ====================================================== */}

      <section className={styles.recordSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              EVIDENCE RECORD
            </span>

            <h2>
              One connected governance record.
            </h2>
          </div>


          <div className={styles.recordGrid}>
            {receiptFields.map((field, index) => (
              <article
                className={styles.recordCard}
                key={field.title}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{field.title}</h3>

                <p>{field.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================
          ENTERPRISE USE
         ====================================================== */}

      <section className={styles.enterpriseSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              ENTERPRISE USE
            </span>

            <h2>
              Use the evidence where the organisation already works.
            </h2>
          </div>


          <div className={styles.enterpriseGrid}>

            <article className={styles.enterpriseCard}>
              <span>01</span>
              <h3>Audit &amp; assurance</h3>
              <p>
                Provide reconstructable AI governance evidence for
                internal assurance, audit and control review.
              </p>
            </article>

            <article className={styles.enterpriseCard}>
              <span>02</span>
              <h3>Investigation &amp; review</h3>
              <p>
                Trace the identity, authority and governance decisions
                associated with an AI activity when questions arise later.
              </p>
            </article>

            <article className={styles.enterpriseCard}>
              <span>03</span>
              <h3>Reporting &amp; integration</h3>
              <p>
                Make governance records available to existing GRC,
                assurance, reporting and enterprise workflows.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* ======================================================
          ENTERPRISE BOUNDARY
         ====================================================== */}

      <section className={styles.boundarySection}>
        <div className={styles.shell}>

          <div className={styles.boundaryPanel}>

            <div>
              <span className={styles.sectionKicker}>
                WORKS WITH EXISTING EVIDENCE SYSTEMS
              </span>

              <h2>
                Governance evidence in AIGO-OS.
                Enterprise records where they already belong.
              </h2>

              <p>
                AIGO-OS preserves the AI governance context and can expose
                that evidence to the organisation&apos;s existing GRC, audit,
                reporting, ITSM and assurance environments.
              </p>
            </div>


            <div className={styles.boundarySystems}>
              <span>GRC</span>
              <span>AUDIT</span>
              <span>ASSURANCE</span>
              <span>ITSM</span>
              <span>REPORTING</span>
              <span>EVIDENCE PLATFORMS</span>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          OUTCOME
         ====================================================== */}

      <section className={styles.outcomeSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              OUTCOME
            </span>

            <h2>
              Make AI governance decisions traceable
              after the moment has passed.
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
                Evidence is stronger when context
                is connected from the start.
              </h2>
            </div>

            <Link
              className={styles.capabilityLink}
              href="/platform/governance-receipts"
            >
              Explore Governance Receipts
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
                Preserve the evidence behind AI governance.
              </h2>

              <p>
                Connect AI identity, authority, business context and
                governance decisions into durable evidence your
                organisation can use later.
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



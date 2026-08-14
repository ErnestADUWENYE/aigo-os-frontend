import Link from "next/link";
import styles from "@/styles/page10-excessive-agency.module.css";

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

function FunctionIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M8 6h8M8 12h8M8 18h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <circle
        cx="5"
        cy="6"
        r="1.2"
        fill="currentColor"
      />
      <circle
        cx="5"
        cy="12"
        r="1.2"
        fill="currentColor"
      />
      <circle
        cx="5"
        cy="18"
        r="1.2"
        fill="currentColor"
      />
    </svg>
  );
}

function AuthorityIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <circle
        cx="8"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M11 12h8M16 9v6M19 10v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function AutonomyIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M5 17V7M5 7l3 3M5 7 2 10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9 12h3.5c3.5 0 6.5-2.4 6.5-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M16 6h3V9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

const assessmentDimensions = [
  {
    number: "01",
    eyebrow: "FUNCTIONALITY",
    title: "Assess what the AI Actor can do",
    description:
      "Compare the actions and tools available to the AI Actor with what its intended purpose actually requires.",
    icon: <FunctionIcon />,
    expected: "Required",
    expectedItems: ["Read incidents", "Restart service"],
    available: "Available",
    availableItems: [
      "Read incidents",
      "Restart service",
      "Modify configuration",
    ],
  },
  {
    number: "02",
    eyebrow: "AUTHORITY",
    title: "Assess how far its authority extends",
    description:
      "Understand the systems, resources and actions covered by the authority available to the AI Actor.",
    icon: <AuthorityIcon />,
    expected: "Intended",
    expectedItems: ["Assigned service"],
    available: "Available",
    availableItems: [
      "Assigned service",
      "Production API",
      "Configuration access",
    ],
  },
  {
    number: "03",
    eyebrow: "AUTONOMY",
    title: "Assess what it may do independently",
    description:
      "Determine where delegated authority can be exercised autonomously and where additional governance should apply.",
    icon: <AutonomyIcon />,
    expected: "Low impact",
    expectedItems: ["Autonomous remediation"],
    available: "Higher impact",
    availableItems: [
      "Production change",
      "Human authority required",
    ],
  },
];

const outcomes = [
  {
    title: "Identify overextended agency",
    description:
      "Surface AI Actors whose available functionality, authority or autonomy extends beyond their intended operating purpose.",
  },
  {
    title: "Focus governance attention",
    description:
      "Give security, platform and governance teams context for determining where agency should be reduced, constrained or reviewed.",
  },
  {
    title: "Apply proportionate oversight",
    description:
      "Distinguish activity that can remain autonomous from activity requiring stronger governance or accountable human judgment.",
  },
];

const capabilityChain = [
  {
    number: "01",
    name: "AI Actor Passports",
    question: "Who is acting?",
  },
  {
    number: "02",
    name: "Machine Authority",
    question: "What authority is available?",
    active: true,
  },
  {
    number: "03",
    name: "Business Significance",
    question: "What does it mean here?",
  },
  {
    number: "04",
    name: "Governance Decisioning",
    question: "What governance applies?",
  },
];

export function Page10ExcessiveAgency() {
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
                USE CASE · EXCESSIVE AGENCY
              </span>

              <h1>
                Assess
                <span> Excessive Agency.</span>
              </h1>

              <p className={styles.heroLead}>
                Understand where an AI Actor has more functionality,
                authority or autonomy than its intended purpose and
                operating context require.
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
                  href="/platform/machine-authority"
                >
                  Explore Machine Authority
                  <ArrowRight />
                </Link>
              </div>
            </div>


            <div className={styles.heroVisual}>

              <div className={styles.heroHalo} />

              <div className={styles.floatingPurpose}>
                <span>PURPOSE</span>
                <strong>Low-impact remediation</strong>
              </div>

              <div className={styles.floatingContext}>
                <span>BUSINESS CONTEXT</span>
                <strong>Customer-facing service</strong>
              </div>

              <div className={styles.assessmentPanel}>

                <div className={styles.assessmentHeader}>
                  <div>
                    <span>AI ACTOR</span>
                    <strong>
                      Production Operations Agent
                    </strong>
                  </div>

                  <div className={styles.assessmentStatus}>
                    Assessment active
                  </div>
                </div>


                <div className={styles.assessmentRows}>

                  <div>
                    <span>FUNCTIONALITY</span>
                    <strong>
                      Production remediation actions
                    </strong>
                  </div>

                  <div>
                    <span>AUTHORITY</span>
                    <strong>
                      Production configuration access
                    </strong>
                  </div>

                  <div>
                    <span>AUTONOMY</span>
                    <strong>
                      Independent execution enabled
                    </strong>
                  </div>

                </div>


                <div className={styles.assessmentResult}>
                  <div className={styles.resultSignal}>
                    <i />
                  </div>

                  <div>
                    <span>AIGO-OS ASSESSMENT</span>
                    <strong>
                      Agency exceeds intended operating scope
                    </strong>
                    <p>
                      Governance attention required
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
                AI can be correctly authenticated and still
                have too much agency.
              </h2>
            </div>

            <div className={styles.sectionCopy}>
              <p>
                An AI Actor may legitimately have access to enterprise
                tools and systems while still carrying more functionality,
                authority or autonomy than its intended role requires.
              </p>

              <p>
                The governance question is not simply whether access exists,
                but whether the effective agency created by that access is
                appropriate for what the AI Actor is meant to do.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          ASSESSMENT DIMENSIONS
         ====================================================== */}

      <section className={styles.dimensionsSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              WHAT AIGO-OS ASSESSES
            </span>

            <h2>
              Assess the dimensions that create agency.
            </h2>
          </div>


          <div className={styles.dimensionGrid}>

            {assessmentDimensions.map((item) => (
              <article
                className={styles.dimensionCard}
                key={item.number}
              >

                <div className={styles.cardTop}>
                  <span className={styles.number}>
                    {item.number}
                  </span>

                  <div className={styles.dimensionIcon}>
                    {item.icon}
                  </div>
                </div>

                <span className={styles.cardEyebrow}>
                  {item.eyebrow}
                </span>

                <h3>{item.title}</h3>

                <p className={styles.dimensionDescription}>
                  {item.description}
                </p>


                <div className={styles.miniAssessment}>

                  <div className={styles.miniColumn}>
                    <span>{item.expected}</span>

                    {item.expectedItems.map((entry) => (
                      <div
                        className={styles.normalItem}
                        key={entry}
                      >
                        {entry}
                      </div>
                    ))}
                  </div>


                  <div className={styles.miniColumn}>
                    <span>{item.available}</span>

                    {item.availableItems.map((entry, index) => (
                      <div
                        className={
                          index === item.availableItems.length - 1
                            ? styles.attentionItem
                            : styles.normalItem
                        }
                        key={entry}
                      >
                        {entry}
                      </div>
                    ))}
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ======================================================
          AGENCY IN CONTEXT
         ====================================================== */}

      <section className={styles.contextSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              AGENCY IN CONTEXT
            </span>

            <h2>
              Assess agency against purpose, authority
              and business context.
            </h2>

            <p>
              AIGO-OS evaluates the AI Actor together with the authority
              available to it and the business context in which that
              authority may be exercised.
            </p>
          </div>


          <div className={styles.contextVisual}>

            <div className={styles.contextActor}>
              <span>AI ACTOR</span>
              <strong>
                Production Operations Agent
              </strong>
            </div>


            <div className={styles.flowStemOne} />


            <div className={styles.contextInputs}>

              <div className={styles.contextInput}>
                <span>PURPOSE</span>
                <strong>
                  Low-impact remediation
                </strong>
                <p>
                  Intended operating role
                </p>
              </div>

              <div className={styles.contextInput}>
                <span>AUTHORITY</span>
                <strong>
                  Production access
                </strong>
                <p>
                  Actions and resources available
                </p>
              </div>

              <div className={styles.contextInput}>
                <span>AUTONOMY</span>
                <strong>
                  Independent execution
                </strong>
                <p>
                  Authority exercisable without prior approval
                </p>
              </div>

            </div>


            <div className={styles.flowStemTwo} />


            <div className={styles.businessContext}>
              <div>
                <span>BUSINESS CONTEXT</span>
                <strong>
                  Customer-facing production service
                </strong>
              </div>

              <div className={styles.contextBadge}>
                High operational significance
              </div>
            </div>


            <div className={styles.flowStemThree} />


            <div className={styles.finalAssessment}>
              <div className={styles.finalPulse}>
                <i />
              </div>

              <div>
                <span>AIGO-OS ASSESSMENT</span>
                <strong>EXCESSIVE AGENCY</strong>
                <p>
                  Governance attention required
                </p>
              </div>
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
              See where AI agency deserves attention.
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
                Agency is assessed in context,
                not from permissions alone.
              </h2>
            </div>


            <Link
              className={styles.capabilityLink}
              href="/platform/machine-authority"
            >
              Explore Machine Authority
              <ArrowRight />
            </Link>

          </div>


          <div className={styles.capabilityFlow}>

            {capabilityChain.map((item, index) => (
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

                {index < capabilityChain.length - 1 ? (
                  <div className={styles.capabilityArrow}>
                    <ArrowRight />
                  </div>
                ) : null}

              </div>
            ))}

          </div>


          <div className={styles.extendedCapabilities}>

            <div>
              <span>WHEN REQUIRED</span>
              <strong>
                Human Authority &amp; Intervention
              </strong>
              <p>
                Bring accountable human judgment into cases
                requiring human authority.
              </p>
            </div>

            <div>
              <span>EVIDENCE</span>
              <strong>
                Governance Receipts
              </strong>
              <p>
                Preserve the context and governance decisions
                associated with the assessment.
              </p>
            </div>

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
                Find where AI has more agency than it needs.
              </h2>

              <p>
                Assess AI functionality, authority and autonomy
                in the context of what the AI Actor is intended
                to do and what its activity means to the business.
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


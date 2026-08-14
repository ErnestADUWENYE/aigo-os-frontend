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


function ContextIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M5 6h14M5 12h14M5 18h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <circle cx="9" cy="6" r="1.7" fill="currentColor" />
      <circle cx="15" cy="12" r="1.7" fill="currentColor" />
      <circle cx="11" cy="18" r="1.7" fill="currentColor" />
    </svg>
  );
}


function PriorityIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M5 18V9M12 18V5M19 18v-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M3 18h18"
        stroke="currentColor"
        strokeLinecap="round"
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
    eyebrow: "BUSINESS SIGNIFICANCE",
    title: "Differentiate what matters to the business",
    description:
      "Understand where AI authority intersects with important services, sensitive processes, critical data or consequential activity.",
    icon: <ContextIcon />,
  },
  {
    number: "02",
    eyebrow: "GOVERNANCE PRIORITY",
    title: "Identify where attention belongs",
    description:
      "Bring AI identity, authority and business context together so materially different activities are not treated the same.",
    icon: <PriorityIcon />,
  },
  {
    number: "03",
    eyebrow: "GOVERNANCE RESPONSE",
    title: "Direct the next governance action",
    description:
      "Use established context to determine where review, stronger controls, human judgement or other governance treatment should follow.",
    icon: <DecisionIcon />,
  },
];


const outcomes = [
  {
    title: "Focus governance effort",
    description:
      "Give governance teams a clearer view of which AI activities warrant greater review, control or oversight.",
  },
  {
    title: "Support proportionate governance",
    description:
      "Apply stronger governance where business significance and authority justify it without creating the same level of friction everywhere.",
  },
  {
    title: "Inform investment and control decisions",
    description:
      "Provide contextual intelligence for deciding where security, governance, compliance and oversight should be strengthened.",
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
    question: "What authority is available?",
  },
  {
    number: "03",
    name: "Business Significance",
    question: "What does this mean to the business?",
    active: true,
  },
  {
    number: "04",
    name: "Governance Decisioning",
    question: "What governance treatment applies?",
  },
];


const postureRows = [
  {
    area: "Customer Operations",
    actors: "42",
    attention: "Elevated",
  },
  {
    area: "Finance",
    actors: "28",
    attention: "Elevated",
  },
  {
    area: "Procurement",
    actors: "17",
    attention: "Standard",
  },
  {
    area: "Internal Productivity",
    actors: "64",
    attention: "Standard",
  },
];


export function Page13PrioritiseAIGovernance() {
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
                USE CASE · GOVERNANCE PRIORITISATION
              </span>

              <h1>
                Prioritise
                <span> AI Governance.</span>
              </h1>

              <p className={styles.heroLead}>
                Focus governance attention where AI authority and
                activity carry the greatest business significance,
                exposure or need for intervention.
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
                  href="/platform/business-significance"
                >
                  Explore Business Significance
                  <ArrowRight />
                </Link>
              </div>
            </div>


            <div className={styles.heroVisual}>
              <div className={styles.heroHalo} />

              <div className={styles.priorityPanel}>

                <div className={styles.priorityHeader}>
                  <div>
                    <span>AI GOVERNANCE PRIORITIES</span>
                    <strong>
                      Organisational priority view
                    </strong>
                  </div>

                  <div className={styles.priorityState}>
                    Context active
                  </div>
                </div>


                <div className={styles.priorityRows}>

                  <div className={styles.priorityRow}>
                    <div>
                      <span>AI ACTOR</span>
                      <strong>
                        Customer Credit Agent
                      </strong>
                    </div>

                    <div>
                      <span>BUSINESS CONTEXT</span>
                      <strong>
                        High-impact service
                      </strong>
                    </div>

                    <div className={styles.attentionHigh}>
                      Elevated attention
                    </div>
                  </div>


                  <div className={styles.priorityRow}>
                    <div>
                      <span>AI ACTOR</span>
                      <strong>
                        Finance Reconciliation Agent
                      </strong>
                    </div>

                    <div>
                      <span>BUSINESS CONTEXT</span>
                      <strong>
                        Controlled workflow
                      </strong>
                    </div>

                    <div className={styles.attentionStandard}>
                      Standard attention
                    </div>
                  </div>


                  <div className={styles.priorityRow}>
                    <div>
                      <span>AI ACTOR</span>
                      <strong>
                        Internal Knowledge Agent
                      </strong>
                    </div>

                    <div>
                      <span>BUSINESS CONTEXT</span>
                      <strong>
                        Internal support
                      </strong>
                    </div>

                    <div className={styles.attentionStandard}>
                      Standard attention
                    </div>
                  </div>

                </div>


                <div className={styles.priorityFooter}>
                  <span>AIGO-OS</span>
                  <strong>
                    Governance attention prioritised from context
                  </strong>
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
                Not every AI activity requires the same governance response.
              </h2>
            </div>

            <div className={styles.sectionCopy}>

              <p>
                Organisations may operate AI across many applications,
                services and business processes. The same technical
                capability can carry very different significance depending
                on the authority involved, the business service affected
                and the consequences of the activity.
              </p>

              <p>
                Applying the same governance intensity everywhere can
                create unnecessary friction while leaving more consequential
                AI activity without enough attention.
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
              Prioritise governance from connected business context.
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
          GOVERNANCE IN CONTEXT
         ====================================================== */}

      <section className={styles.contextSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>

            <span className={styles.sectionKicker}>
              GOVERNANCE IN CONTEXT
            </span>

            <h2>
              Prioritise from Business Significance,
              not technical signals alone.
            </h2>

            <p>
              AIGO-OS relates AI authority and activity to the
              business context in which they operate, giving governance
              teams a clearer basis for where attention should be concentrated.
            </p>

          </div>


          <div className={styles.contextVisual}>

            <div className={styles.actorLayer}>

              <div className={styles.actorCard}>
                <span>AI ACTOR</span>
                <strong>Agent A</strong>
                <p>Internal workflow</p>
              </div>

              <div className={styles.actorCard}>
                <span>AI ACTOR</span>
                <strong>Agent B</strong>
                <p>Critical service</p>
              </div>

              <div className={styles.actorCard}>
                <span>AI ACTOR</span>
                <strong>Agent C</strong>
                <p>Support process</p>
              </div>

            </div>


            <div className={styles.flowStem} />


            <div className={styles.authorityLayer}>

              <div>
                <span>MACHINE AUTHORITY</span>
                <strong>Limited</strong>
              </div>

              <div className={styles.authorityElevated}>
                <span>MACHINE AUTHORITY</span>
                <strong>Broad</strong>
              </div>

              <div>
                <span>MACHINE AUTHORITY</span>
                <strong>Moderate</strong>
              </div>

            </div>


            <div className={styles.flowStem} />


            <div className={styles.businessLayer}>

              <div>
                <span>BUSINESS SIGNIFICANCE</span>
                <strong>Internal support</strong>
              </div>

              <div className={styles.businessElevated}>
                <span>BUSINESS SIGNIFICANCE</span>
                <strong>Critical service</strong>
              </div>

              <div>
                <span>BUSINESS SIGNIFICANCE</span>
                <strong>Operational support</strong>
              </div>

            </div>


            <div className={styles.flowStem} />


            <div className={styles.priorityLayer}>

              <div>
                <span>GOVERNANCE ATTENTION</span>
                <strong>Standard</strong>
              </div>

              <div className={styles.priorityElevated}>
                <span>GOVERNANCE ATTENTION</span>
                <strong>Elevated</strong>
              </div>

              <div>
                <span>GOVERNANCE ATTENTION</span>
                <strong>Standard</strong>
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
              Concentrate governance resources where they matter most.
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
          ORGANISATIONAL VIEW
         ====================================================== */}

      <section className={styles.postureSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              ORGANISATIONAL VIEW
            </span>

            <h2>
              Move from individual AI assessments
              to organisational AI posture.
            </h2>

            <p>
              As AIGO-OS establishes context across governed AI Actors,
              organisations can see where authority, Business Significance
              and governance attention are concentrated across business areas.
            </p>
          </div>


          <div className={styles.posturePanel}>

            <div className={styles.postureHeader}>
              <div>
                <span>ORGANISATIONAL AI POSTURE</span>
                <strong>
                  Governance attention by business area
                </strong>
              </div>

              <div className={styles.postureStatus}>
                Current view
              </div>
            </div>


            <div className={styles.postureTable}>

              <div className={styles.postureTableHeader}>
                <span>BUSINESS AREA</span>
                <span>AI ACTORS</span>
                <span>GOVERNANCE ATTENTION</span>
              </div>

              {postureRows.map((row) => (
                <div
                  className={styles.postureTableRow}
                  key={row.area}
                >
                  <strong>{row.area}</strong>
                  <span>{row.actors}</span>
                  <span
                    className={
                      row.attention === "Elevated"
                        ? styles.postureElevated
                        : styles.postureStandard
                    }
                  >
                    {row.attention}
                  </span>
                </div>
              ))}

            </div>


            <div className={styles.postureSignals}>
              <span>KEY SIGNALS</span>

              <div>
                <i />
                Broad authority
              </div>

              <div>
                <i />
                High-significance services
              </div>

              <div>
                <i />
                Human oversight requirements
              </div>

              <div>
                <i />
                Open governance decisions
              </div>
            </div>

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
                Governance priority comes from connected context.
              </h2>
            </div>

            <Link
              className={styles.capabilityLink}
              href="/platform/business-significance"
            >
              Explore Business Significance
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


          <div className={styles.extendedCapabilities}>

            <div>
              <span>WHEN REQUIRED</span>
              <strong>
                Human Authority &amp; Intervention
              </strong>
              <p>
                Bring accountable human judgement into activity
                requiring human authority.
              </p>
            </div>

            <div>
              <span>EVIDENCE</span>
              <strong>
                Governance Receipts
              </strong>
              <p>
                Preserve the context and decisions behind the
                resulting governance treatment.
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
                Put governance attention where AI matters most.
              </h2>

              <p>
                Connect AI authority with Business Significance
                and give your organisation a clearer basis for
                prioritising governance action.
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



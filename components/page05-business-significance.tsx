"use client";

import Link from "next/link";

import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Database,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

import styles from "@/styles/page05-business-significance.module.css";


const businessContext = [
  {
    icon: Building2,
    label: "BUSINESS SERVICE",
    title: "What business service is affected?",
    text:
      "Connect the AI activity to the business service, process or function that depends on the affected technology.",
  },
  {
    icon: Layers3,
    label: "OPERATING CONTEXT",
    title: "Where is the activity happening?",
    text:
      "Identify whether the activity affects development, internal operations, production or another operating environment.",
  },
  {
    icon: Database,
    label: "BUSINESS ASSETS",
    title: "What business assets are involved?",
    text:
      "Use available information about applications, data, infrastructure, ownership and business importance.",
  },
  {
    icon: ShieldCheck,
    label: "BUSINESS IMPACT",
    title: "What could the activity affect?",
    text:
      "Consider customer impact, financial relevance, service criticality, sensitive information and regulatory obligations where they apply.",
  },
];


export function Page05BusinessSignificance() {
  return (
    <main className={styles.page}>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>
        <div
          className={styles.heroGrid}
          aria-hidden="true"
        />

        <div className={styles.shell}>
          <div className={styles.heroLayout}>

            <div className={styles.heroCopy}>
              <p className={styles.blueEyebrow}>
                BUSINESS SIGNIFICANCE
              </p>

              <h1>
                Understand what AI activity means to the business.
              </h1>

              <p className={styles.heroLead}>
                Business Significance connects a specific AI
                activity to the business service, process or
                function it affects.
              </p>

              <p className={styles.heroSupporting}>
                AIGO-OS brings together the identified AI Actor,
                its AI Authority Boundary, the current activity
                and connected business context to establish why
                that activity matters now.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/contact?intent=demo"
                  className={styles.primaryButton}
                >
                  Request a Demo

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="#business-example"
                  className={styles.secondaryButton}
                >
                  See one example

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>


            <div className={styles.heroVisual}>
              <div className={styles.significancePanel}>

                <div className={styles.significanceTop}>
                  <div className={styles.significanceIcon}>
                    <Activity
                      size={25}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <span>
                      CURRENT AI ACTIVITY
                    </span>

                    <strong>
                      Restart a production service
                    </strong>

                    <small>
                      Production Operations AI Agent
                    </small>
                  </div>
                </div>


                <div className={styles.significanceQuestion}>
                  <span>
                    BUSINESS SIGNIFICANCE
                  </span>

                  <strong>
                    What does this AI activity mean to the business?
                  </strong>
                </div>


                <div className={styles.significanceOutput}>
                  <Building2
                    size={22}
                    aria-hidden="true"
                  />

                  <div>
                    <span>
                      OUTPUT
                    </span>

                    <strong>
                      AI Business Significance Assessment
                    </strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          HOW IT IS ESTABLISHED
      ====================================================== */}

      <section className={styles.coreSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                HOW IT WORKS
              </p>

              <h2>
                Follow the AI activity into its business context.
              </h2>
            </div>

            <p>
              Business Significance focuses on the part of the
              organisation affected by the current AI activity,
              rather than treating every activity as an
              organisation-wide assessment.
            </p>
          </div>


          <div className={styles.mappingFlow}>

            <article className={styles.mappingCard}>
              <div className={styles.mappingIcon}>
                <Bot
                  size={22}
                  aria-hidden="true"
                />
              </div>

              <span>
                01
              </span>

              <h3>
                AI activity
              </h3>

              <p>
                What is the identified AI Actor doing now?
              </p>
            </article>


            <div
              className={styles.mappingArrow}
              aria-hidden="true"
            >
              <ArrowRight size={21} />
            </div>


            <article className={styles.mappingCard}>
              <div className={styles.mappingIcon}>
                <Network
                  size={22}
                  aria-hidden="true"
                />
              </div>

              <span>
                02
              </span>

              <h3>
                Affected technology
              </h3>

              <p>
                Which application, service, API, data or resource
                is involved?
              </p>
            </article>


            <div
              className={styles.mappingArrow}
              aria-hidden="true"
            >
              <ArrowRight size={21} />
            </div>


            <article className={styles.mappingCard}>
              <div className={styles.mappingIcon}>
                <Building2
                  size={22}
                  aria-hidden="true"
                />
              </div>

              <span>
                03
              </span>

              <h3>
                Business context
              </h3>

              <p>
                Which business service, process or function
                depends on that technology?
              </p>
            </article>


            <div
              className={styles.mappingArrow}
              aria-hidden="true"
            >
              <ArrowRight size={21} />
            </div>


            <article
              className={`${styles.mappingCard} ${styles.mappingCardOutput}`}
            >
              <div className={styles.mappingIcon}>
                <BarChart3
                  size={22}
                  aria-hidden="true"
                />
              </div>

              <span>
                OUTPUT
              </span>

              <h3>
                AI Business Significance Assessment
              </h3>

              <p>
                Establish what the current AI activity means in
                the business context it affects.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* =====================================================
          BUSINESS CONTEXT EVIDENCE
      ====================================================== */}

      <section className={styles.sourcesSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntroCentered}>
            <p className={styles.blueDarkEyebrow}>
              BUSINESS CONTEXT
            </p>

            <h2>
              Connect AI activity to business information the organisation already maintains.
            </h2>

            <p>
              AIGO-OS can use connected service catalogues,
              application and asset data, service maps, ownership
              information, classifications and organisation-defined
              business rules to understand the affected context.
            </p>
          </div>


          <div className={styles.signalGrid}>
            {businessContext.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className={styles.signalCard}
                  key={item.label}
                >
                  <div className={styles.signalTop}>
                    <div className={styles.signalIcon}>
                      <Icon
                        size={21}
                        aria-hidden="true"
                      />
                    </div>

                    <span>
                      {item.label}
                    </span>
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          ONE EXAMPLE
      ====================================================== */}

      <section
        className={styles.exampleSection}
        id="business-example"
      >
        <div className={styles.shell}>

          <div className={styles.sectionIntroDark}>
            <div>
              <p className={styles.blueEyebrow}>
                ONE CLEAR EXAMPLE
              </p>

              <h2>
                Business significance depends on what the AI activity affects.
              </h2>
            </div>

            <p>
              The assessment belongs to the current AI activity
              and its business context. It is not a permanent
              label attached to the AI Actor.
            </p>
          </div>


          <div className={styles.exampleFlow}>

            <div className={styles.exampleContext}>
              <div className={styles.exampleHeader}>
                <span>
                  AI ACTOR
                </span>

                <strong>
                  Production Operations AI Agent
                </strong>
              </div>

              <div className={styles.exampleRow}>
                <span>
                  CURRENT ACTIVITY
                </span>

                <strong>
                  Restart a production service
                </strong>
              </div>

              <div className={styles.exampleRow}>
                <span>
                  AI AUTHORITY BOUNDARY
                </span>

                <strong>
                  Approved low-impact remediation
                </strong>
              </div>
            </div>


            <div
              className={styles.exampleArrow}
              aria-hidden="true"
            >
              <ArrowRight size={24} />
            </div>


            <div className={styles.exampleBusiness}>
              <div className={styles.exampleHeader}>
                <span>
                  AFFECTED BUSINESS CONTEXT
                </span>

                <strong>
                  Customer Payments Service
                </strong>
              </div>

              <div className={styles.exampleRow}>
                <span>
                  ENVIRONMENT
                </span>

                <strong>
                  Production
                </strong>
              </div>

              <div className={styles.exampleRow}>
                <span>
                  SERVICE IMPORTANCE
                </span>

                <strong>
                  Critical
                </strong>
              </div>

              <div className={styles.exampleRow}>
                <span>
                  BUSINESS IMPACT
                </span>

                <strong>
                  Direct customer and financial relevance
                </strong>
              </div>
            </div>


            <div
              className={styles.exampleArrow}
              aria-hidden="true"
            >
              <ArrowRight size={24} />
            </div>


            <div className={styles.exampleAssessment}>
              <div className={styles.assessmentLabel}>
                OUTPUT
              </div>

              <h3>
                AI Business Significance Assessment
              </h3>

              <p>
                This AI activity affects a critical production
                service with direct customer and financial
                relevance.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          OUTPUT + NEXT CAPABILITY
      ====================================================== */}

      <section className={styles.outputSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                FROM ACTIVITY TO OPERATING POSTURE
              </p>

              <h2>
                See what matters at activity level and across the AI estate.
              </h2>
            </div>

            <p>
              Each AI Business Significance Assessment explains
              why a specific AI activity matters. Across many
              activities, these assessments can also show where
              significant AI activity is concentrated across
              business services, customers, data, financial
              processes and regulated areas.
            </p>
          </div>


          <div className={styles.handoff}>

            <div className={styles.handoffCard}>
              <span>
                BUSINESS SIGNIFICANCE
              </span>

              <strong>
                What does this AI activity mean to the business?
              </strong>

              <small>
                OUTPUT
              </small>

              <p>
                AI Business Significance Assessment
              </p>
            </div>


            <div
              className={styles.handoffArrow}
              aria-hidden="true"
            >
              <ArrowRight size={24} />
            </div>


            <div
              className={`${styles.handoffCard} ${styles.handoffNext}`}
            >
              <span>
                GOVERNANCE DECISIONING
              </span>

              <strong>
                What governance should apply now?
              </strong>

              <small>
                NEXT CAPABILITY
              </small>

              <p>
                Use the AI Actor, AI Authority Boundary and
                Business Significance Assessment to determine
                the appropriate governance response.
              </p>
            </div>

          </div>


          <div className={styles.handoffActions}>
            <Link
              href="/platform/governance-decisioning"
              className={styles.handoffPrimary}
            >
              Explore Governance Decisioning

              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/contact?intent=demo"
              className={styles.handoffSecondary}
            >
              Request a Demo
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}


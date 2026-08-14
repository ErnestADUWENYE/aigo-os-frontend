"use client";

import Link from "next/link";

import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  CircleAlert,
  FileCheck2,
  GitBranch,
  ListChecks,
  Network,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
} from "lucide-react";

import styles from "./page.module.css";


const decisionOutcomes = [
  {
    icon: Check,
    number: "01",
    title: "Proceed",
    text:
      "The current AI activity is consistent with the applicable governance.",
  },
  {
    icon: SlidersHorizontal,
    number: "02",
    title: "Proceed with Controls",
    text:
      "The AI activity may proceed subject to defined conditions or additional controls.",
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Human Authority Required",
    text:
      "An authorised person is required to make or complete the governance decision.",
  },
  {
    icon: GitBranch,
    number: "04",
    title: "Escalate for Review",
    text:
      "Additional review is required before the governance position can be resolved.",
  },
  {
    icon: CircleAlert,
    number: "05",
    title: "Governance Restriction",
    text:
      "The applicable governance does not support the AI activity proceeding as currently proposed.",
  },
];


const governanceSources = [
  {
    icon: ShieldCheck,
    title: "AI governance requirements",
    text:
      "Organisation-defined requirements for how AI should operate and be governed.",
  },
  {
    icon: Scale,
    title: "Risk & compliance",
    text:
      "Applicable risk, regulatory, compliance and control requirements.",
  },
  {
    icon: FileCheck2,
    title: "Policies & standards",
    text:
      "Security, data, operating and other organisational policies that apply to the activity.",
  },
  {
    icon: Building2,
    title: "Business rules",
    text:
      "Rules linked to services, criticality, ownership, customers and operating conditions.",
  },
];


export function Page06GovernanceDecisioning() {
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
                GOVERNANCE DECISIONING
              </p>

              <h1>
                Determine what governance should apply to an AI activity now.
              </h1>

              <p className={styles.heroLead}>
                Governance Decisioning brings together the AI Actor,
                its AI Authority Boundary, the current activity,
                its Business Significance and the governance that
                applies.
              </p>

              <p className={styles.heroSupporting}>
                AIGO-OS uses that connected context to produce a
                clear AI Governance Decision for the current activity.
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
                  href="#decision-example"
                  className={styles.secondaryButton}
                >
                  See one decision

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>


            <div className={styles.heroVisual}>
              <div className={styles.decisionPanel}>

                <div className={styles.panelTop}>
                  <div className={styles.panelIcon}>
                    <ListChecks
                      size={25}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <span>
                      CURRENT QUESTION
                    </span>

                    <strong>
                      What governance should apply now?
                    </strong>
                  </div>
                </div>


                <div className={styles.heroInputs}>
                  <div>
                    <span>
                      AI ACTOR
                    </span>

                    <strong>
                      Production Operations AI Agent
                    </strong>
                  </div>

                  <div>
                    <span>
                      AI AUTHORITY BOUNDARY
                    </span>

                    <strong>
                      Approved low-impact remediation
                    </strong>
                  </div>

                  <div>
                    <span>
                      BUSINESS SIGNIFICANCE
                    </span>

                    <strong>
                      Critical customer-facing service
                    </strong>
                  </div>
                </div>


                <div className={styles.heroDecision}>
                  <span>
                    OUTPUT
                  </span>

                  <strong>
                    AI Governance Decision
                  </strong>

                  <small>
                    HUMAN AUTHORITY REQUIRED
                  </small>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONNECTED DECISION CONTEXT
      ====================================================== */}

      <section className={styles.inputsSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                DECISION CONTEXT
              </p>

              <h2>
                Evaluate the current AI activity with the context already established.
              </h2>
            </div>

            <p>
              Governance Decisioning combines the outputs of the
              earlier capabilities with the current activity and
              the organisation's applicable governance.
            </p>
          </div>


          <div className={styles.inputFlow}>

            <article className={styles.inputCard}>
              <Bot
                size={22}
                aria-hidden="true"
              />

              <span>
                01
              </span>

              <h3>
                AI Actor Passport
              </h3>

              <p>
                Which AI Actor is involved?
              </p>
            </article>


            <div
              className={styles.flowPlus}
              aria-hidden="true"
            >
              +
            </div>


            <article className={styles.inputCard}>
              <ShieldCheck
                size={22}
                aria-hidden="true"
              />

              <span>
                02
              </span>

              <h3>
                AI Authority Boundary
              </h3>

              <p>
                What authority has been delegated to this AI Actor?
              </p>
            </article>


            <div
              className={styles.flowPlus}
              aria-hidden="true"
            >
              +
            </div>


            <article className={styles.inputCard}>
              <Network
                size={22}
                aria-hidden="true"
              />

              <span>
                03
              </span>

              <h3>
                Current AI activity
              </h3>

              <p>
                What is the AI Actor attempting or performing now?
              </p>
            </article>


            <div
              className={styles.flowPlus}
              aria-hidden="true"
            >
              +
            </div>


            <article className={styles.inputCard}>
              <Building2
                size={22}
                aria-hidden="true"
              />

              <span>
                04
              </span>

              <h3>
                Business Significance
              </h3>

              <p>
                What does the activity mean in the affected
                business context?
              </p>
            </article>


            <div
              className={styles.flowPlus}
              aria-hidden="true"
            >
              +
            </div>


            <article className={styles.inputCard}>
              <Scale
                size={22}
                aria-hidden="true"
              />

              <span>
                05
              </span>

              <h3>
                Applicable governance
              </h3>

              <p>
                Which organisational requirements and rules apply?
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* =====================================================
          GOVERNANCE SOURCES
      ====================================================== */}

      <section className={styles.originSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntroCentered}>
            <p className={styles.blueDarkEyebrow}>
              APPLICABLE GOVERNANCE
            </p>

            <h2>
              Apply the governance the organisation has established.
            </h2>

            <p>
              AIGO-OS connects organisation-defined governance
              requirements to the current AI activity and its
              operating context.
            </p>
          </div>


          <div className={styles.originGrid}>
            {governanceSources.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className={styles.originCard}
                  key={item.title}
                >
                  <div className={styles.originIcon}>
                    <Icon
                      size={22}
                      aria-hidden="true"
                    />
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
          STANDARD AI GOVERNANCE DECISIONS
      ====================================================== */}

      <section className={styles.outcomesSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntroDark}>
            <div>
              <p className={styles.blueEyebrow}>
                AI GOVERNANCE DECISIONS
              </p>

              <h2>
                Make the governance response clear and consistent.
              </h2>
            </div>

            <p>
              Organisations define the governance that applies.
              AIGO-OS uses a consistent set of decision outcomes
              so the result can be understood, routed and measured.
            </p>
          </div>


          <div className={styles.outcomeGrid}>
            {decisionOutcomes.map((outcome) => {
              const Icon = outcome.icon;

              return (
                <article
                  className={styles.outcomeCard}
                  key={outcome.number}
                >
                  <div className={styles.outcomeTop}>
                    <div className={styles.outcomeIcon}>
                      <Icon
                        size={21}
                        aria-hidden="true"
                      />
                    </div>

                    <span>
                      {outcome.number}
                    </span>
                  </div>

                  <h3>
                    {outcome.title}
                  </h3>

                  <p>
                    {outcome.text}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          ONE CLEAR EXAMPLE
      ====================================================== */}

      <section
        className={styles.exampleSection}
        id="decision-example"
      >
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                ONE CLEAR EXAMPLE
              </p>

              <h2>
                Delegated authority and business context lead to the governance decision.
              </h2>
            </div>

            <p>
              The AI Governance Decision reflects the current
              activity, its authority boundary, its Business
              Significance and the governance that applies.
            </p>
          </div>


          <div className={styles.exampleGrid}>

            <div className={styles.exampleContext}>

              <div className={styles.exampleRow}>
                <span>
                  AI ACTOR
                </span>

                <strong>
                  Production Operations AI Agent
                </strong>
              </div>

              <div className={styles.exampleRow}>
                <span>
                  CURRENT AI ACTIVITY
                </span>

                <strong>
                  Restart a critical production service
                </strong>
              </div>

              <div className={styles.exampleRow}>
                <span>
                  AI AUTHORITY BOUNDARY
                </span>

                <strong>
                  Approved low-impact production remediation
                </strong>
              </div>

              <div className={styles.exampleRow}>
                <span>
                  AI BUSINESS SIGNIFICANCE ASSESSMENT
                </span>

                <strong>
                  Critical customer-facing service with high
                  business relevance
                </strong>
              </div>

            </div>


            <div className={styles.exampleGovernance}>

              <div className={styles.exampleGovernanceTop}>
                <Scale
                  size={23}
                  aria-hidden="true"
                />

                <span>
                  APPLICABLE GOVERNANCE
                </span>
              </div>

              <p>
                Changes affecting this critical business service
                require accountable human authority.
              </p>

            </div>


            <div className={styles.exampleDecision}>

              <span>
                AI GOVERNANCE DECISION
              </span>

              <h3>
                Human Authority Required
              </h3>

              <p>
                The AI Actor has relevant delegated authority,
                but the applicable governance requires an
                authorised person to make or complete the decision.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          HANDOFF
      ====================================================== */}

      <section className={styles.visibilitySection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                FROM DECISION TO ACCOUNTABLE ACTION
              </p>

              <h2>
                Keep the AI Governance Decision visible and actionable.
              </h2>
            </div>

            <p>
              The decision can be reviewed with the AI Actor,
              activity, authority, business context and governance
              basis that produced it. When accountable human
              authority is required, the next capability routes
              that requirement to the appropriate person.
            </p>
          </div>


          <div className={styles.handoff}>

            <div className={styles.handoffCard}>
              <span>
                GOVERNANCE DECISIONING
              </span>

              <strong>
                What governance should apply to this AI activity now?
              </strong>

              <small>
                OUTPUT
              </small>

              <p>
                AI Governance Decision
              </p>
            </div>


            <div
              className={styles.handoffArrow}
              aria-hidden="true"
            >
              <ArrowRight
                size={25}
                aria-hidden="true"
              />
            </div>


            <div
              className={`${styles.handoffCard} ${styles.handoffNext}`}
            >
              <span>
                HUMAN AUTHORITY &amp; INTERVENTION
              </span>

              <strong>
                Bring accountable human authority in when the decision requires it.
              </strong>

              <small>
                NEXT CAPABILITY
              </small>

              <p>
                Route the governance requirement to the authorised
                person with the context needed to decide.
              </p>
            </div>

          </div>


          <div className={styles.handoffActions}>
            <Link
              href="/contact?intent=demo"
              className={styles.handoffPrimary}
            >
              Request a Demo

              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}


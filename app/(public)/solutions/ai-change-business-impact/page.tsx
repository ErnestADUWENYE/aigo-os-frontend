import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const changeDimensions = [
  {
    number: "01",
    title: "Behavior change",
    text:
      "Understand what changed in the AI capability and how its operating behavior differs.",
  },
  {
    number: "02",
    title: "Business relationship",
    text:
      "Keep the affected processes, services and business functions visible around the change.",
  },
  {
    number: "03",
    title: "Operational consequence",
    text:
      "See where the change may alter service delivery, decision flow or business performance.",
  },
];

export default function AIChangeBusinessImpactPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AIGO-OS Impact Use Case
              </p>

              <h1>
                Understand what an AI change means for the business.
              </h1>

              <p className={styles.heroText}>
                AI Change Business Impact connects a change in AI behavior
                to the business processes, services and operating relationships
                that may be affected by it.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/request-demo"
                  className={styles.primaryButton}
                >
                  Request a Demo
                </Link>

                <Link
                  href="/products/aigo-os-impact"
                  className={styles.secondaryButton}
                >
                  Explore AIGO-OS Impact
                </Link>
              </div>
            </div>


            <div className={styles.changeSequence}>

              <div className={styles.sequenceHeader}>
                <div>
                  <span>
                    Change impact
                  </span>

                  <strong>
                    Customer service agent
                  </strong>
                </div>

                <span className={styles.sequenceState}>
                  Change detected
                </span>
              </div>


              <div className={styles.sequenceBody}>

                <div className={styles.beforeState}>
                  <span>
                    Before
                  </span>

                  <strong>
                    Agent drafts responses
                  </strong>

                  <small>
                    Human approval required
                  </small>
                </div>


                <div className={styles.changeState}>
                  <span>
                    Change
                  </span>

                  <strong>
                    Autonomous decision behavior introduced
                  </strong>

                  <small>
                    Operating behavior altered
                  </small>
                </div>


                <div className={styles.afterState}>
                  <span>
                    Business consequence
                  </span>

                  <strong>
                    Customer Support process changes
                  </strong>

                  <small>
                    Review required
                  </small>
                </div>

              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.changeQuestionSection}>
        <PublicContainer>

          <div className={styles.changeQuestionHeader}>
            <p className={styles.sectionLabel}>
              Change impact question
            </p>

            <h2>
              What changed, where does it connect, and what does that alter in the business?
            </h2>
          </div>


          <div className={styles.changeQuestionGrid}>
            {changeDimensions.map((item) => (
              <article
                key={item.number}
                className={styles.changeQuestionItem}
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


      <section className={styles.deltaSection}>
        <PublicContainer>

          <div className={styles.deltaGrid}>

            <div className={styles.deltaCopy}>
              <p className={styles.sectionLabelLight}>
                Before and after
              </p>

              <h2>
                A small technical change can create a meaningful operating difference.
              </h2>

              <p>
                AIGO-OS Impact keeps the surrounding business process visible
                so the organization can understand the practical consequence
                of the change rather than only the technical delta.
              </p>
            </div>


            <div className={styles.deltaBoard}>

              <div className={styles.deltaBefore}>
                <span>
                  Previous state
                </span>

                <strong>
                  Draft-only assistance
                </strong>

                <p>
                  Human decision remains inside the Customer Support process.
                </p>
              </div>


              <div className={styles.deltaChange}>
                <span>
                  AI change
                </span>

                <strong>
                  Agent gains autonomous decision behavior
                </strong>

                <p>
                  The operating model changes even though the same agent remains in use.
                </p>
              </div>


              <div className={styles.deltaAfter}>
                <span>
                  New operating state
                </span>

                <strong>
                  Customer Support workflow altered
                </strong>

                <p>
                  The business process now relies on a different decision pattern.
                </p>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.impactPathSection}>
        <PublicContainer>

          <div className={styles.impactPathHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Change propagation
              </p>

              <h2>
                Change can travel from AI behavior into the wider operating model.
              </h2>
            </div>

            <p>
              AIGO-OS Impact preserves the business relationships around
              the changed capability so the downstream consequence can be
              understood in context.
            </p>
          </div>


          <div className={styles.impactPath}>

            <div className={styles.impactStage}>
              <span>
                AI behavior
              </span>

              <strong>
                Autonomous decision introduced
              </strong>
            </div>


            <div className={styles.impactStage}>
              <span>
                Process
              </span>

              <strong>
                Customer Support workflow changes
              </strong>
            </div>


            <div className={styles.impactStage}>
              <span>
                Service
              </span>

              <strong>
                Customer Assistance behavior changes
              </strong>
            </div>


            <div className={styles.impactStageEmphasis}>
              <span>
                Business function
              </span>

              <strong>
                Customer Operations affected
              </strong>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.assessmentSection}>
        <PublicContainer>

          <div className={styles.assessmentGrid}>

            <div className={styles.assessmentIntro}>
              <p className={styles.sectionLabelLight}>
                Impact assessment
              </p>

              <h2>
                The important question is whether the change alters something the business depends on.
              </h2>
            </div>


            <div className={styles.assessmentBoard}>

              <div className={styles.assessmentRow}>
                <span>
                  Change
                </span>

                <strong>
                  Autonomous decision behavior
                </strong>

                <small>
                  AI capability altered
                </small>
              </div>

              <div className={styles.assessmentRow}>
                <span>
                  Process consequence
                </span>

                <strong>
                  Human approval step removed
                </strong>

                <small>
                  Operating workflow changed
                </small>
              </div>

              <div className={styles.assessmentRow}>
                <span>
                  Service consequence
                </span>

                <strong>
                  Customer response path changes
                </strong>

                <small>
                  Service delivery affected
                </small>
              </div>

              <div className={styles.assessmentRowStrong}>
                <span>
                  Business impact
                </span>

                <strong>
                  Customer Operations requires review
                </strong>

                <small>
                  High business significance
                </small>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.readinessSection}>
        <PublicContainer>

          <div className={styles.readinessHeader}>
            <p className={styles.sectionLabel}>
              Change readiness
            </p>

            <h2>
              Business context makes change review more practical before release.
            </h2>
          </div>


          <div className={styles.readinessGrid}>

            <div className={styles.readinessItem}>
              <span>
                Business owner
              </span>

              <strong>
                Digital Operations
              </strong>

              <p>
                Responsible owner is visible before the change is introduced.
              </p>
            </div>

            <div className={styles.readinessItem}>
              <span>
                Affected process
              </span>

              <strong>
                Customer Support
              </strong>

              <p>
                The operating workflow affected by the change is known.
              </p>
            </div>

            <div className={styles.readinessItemStrong}>
              <span>
                Change decision
              </span>

              <strong>
                Management review required
              </strong>

              <p>
                Change can be evaluated using its business consequence, not only its technical implementation.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.demoSection}>
        <PublicContainer>

          <div className={styles.demoPanel}>
            <div>
              <p className={styles.sectionLabelLight}>
                See AI Change Business Impact in AIGO-OS
              </p>

              <h2>
                See how AI changes can be understood in terms of the business they may alter.
              </h2>

              <p>
                Request a demo to see how AIGO-OS Impact can connect
                AI changes to operating processes, services and business consequence.
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


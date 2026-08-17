import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const incidentQuestions = [
  {
    number: "01",
    title: "What is affected?",
    text:
      "Identify the AI capability involved and the business processes and services that depend on it.",
  },
  {
    number: "02",
    title: "How significant is it?",
    text:
      "Understand the incident in terms of business criticality, service exposure and operational consequence.",
  },
  {
    number: "03",
    title: "Who needs to respond?",
    text:
      "Keep accountable business and operational owners visible as the incident is assessed.",
  },
];

export default function AIIncidentBusinessImpactPage() {
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
                Understand the business impact of an AI incident.
              </h1>

              <p className={styles.heroText}>
                AI Incident Business Impact connects an AI incident to the
                processes, services and business functions exposed to it,
                helping teams understand business consequence alongside
                technical investigation.
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


            <div className={styles.incidentConsole}>

              <div className={styles.consoleHeader}>
                <div>
                  <span>
                    Active incident
                  </span>

                  <strong>
                    Customer service agent
                  </strong>
                </div>

                <span className={styles.incidentStatus}>
                  Business review
                </span>
              </div>


              <div className={styles.incidentSummary}>

                <div className={styles.incidentOrigin}>
                  <span>
                    Incident
                  </span>

                  <strong>
                    Response behavior degraded
                  </strong>

                  <p>
                    Customer service agent is producing inconsistent responses.
                  </p>
                </div>


                <div className={styles.incidentFacts}>

                  <div>
                    <span>
                      Affected process
                    </span>

                    <strong>
                      Customer Support
                    </strong>
                  </div>

                  <div>
                    <span>
                      Affected service
                    </span>

                    <strong>
                      Customer Assistance
                    </strong>
                  </div>

                  <div>
                    <span>
                      Business function
                    </span>

                    <strong>
                      Customer Operations
                    </strong>
                  </div>

                  <div className={styles.factEmphasis}>
                    <span>
                      Business severity
                    </span>

                    <strong>
                      High
                    </strong>
                  </div>

                </div>

              </div>


              <div className={styles.consoleFooter}>
                <span>
                  Responsible owner
                </span>

                <strong>
                  Digital Operations
                </strong>

                <span className={styles.reviewRequired}>
                  Management attention required
                </span>
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.questionsSection}>
        <PublicContainer>

          <div className={styles.questionsHeader}>
            <p className={styles.sectionLabel}>
              Incident context
            </p>

            <h2>
              A technical incident becomes a business issue when something important depends on it.
            </h2>
          </div>


          <div className={styles.questionsGrid}>
            {incidentQuestions.map((item) => (
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


      <section className={styles.exposureSection}>
        <PublicContainer>

          <div className={styles.exposureGrid}>

            <div className={styles.exposureCopy}>
              <p className={styles.sectionLabelLight}>
                Business exposure
              </p>

              <h2>
                See beyond the failing component to what the business may actually lose.
              </h2>

              <p>
                AIGO-OS Impact keeps business dependencies around the incident
                visible, helping teams distinguish a contained technical problem
                from an event affecting important operations or services.
              </p>
            </div>


            <div className={styles.exposurePanel}>

              <div className={styles.exposureSource}>
                <span>
                  Incident source
                </span>

                <strong>
                  Customer service agent
                </strong>

                <p>
                  Response quality degraded
                </p>
              </div>


              <div className={styles.exposureAffected}>

                <div>
                  <span>
                    Process exposure
                  </span>

                  <strong>
                    Customer Support
                  </strong>

                  <small>
                    Directly affected
                  </small>
                </div>

                <div>
                  <span>
                    Service exposure
                  </span>

                  <strong>
                    Customer Assistance
                  </strong>

                  <small>
                    Service quality exposed
                  </small>
                </div>

                <div className={styles.exposureCritical}>
                  <span>
                    Operational exposure
                  </span>

                  <strong>
                    Customer Operations
                  </strong>

                  <small>
                    High business significance
                  </small>
                </div>

              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.severitySection}>
        <PublicContainer>

          <div className={styles.severityHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Business severity
              </p>

              <h2>
                Incident severity should reflect the business affected, not only the technical symptom.
              </h2>
            </div>

            <p>
              AIGO-OS Impact provides business context for incident assessment
              by keeping operational criticality, service exposure and ownership
              attached to the affected AI capability.
            </p>
          </div>


          <div className={styles.severityLayout}>

            <div className={styles.severityContext}>
              <span>
                Technical condition
              </span>

              <strong>
                Response behavior degraded
              </strong>

              <p>
                The AI capability remains available but its output quality has changed.
              </p>
            </div>


            <div className={styles.severityContext}>
              <span>
                Service consequence
              </span>

              <strong>
                Customer assistance affected
              </strong>

              <p>
                An active customer-facing service relies on the affected capability.
              </p>
            </div>


            <div className={styles.severityResult}>
              <span>
                Business assessment
              </span>

              <strong>
                High severity
              </strong>

              <div className={styles.severityFacts}>
                <div>
                  <small>
                    Criticality
                  </small>

                  <b>
                    High
                  </b>
                </div>

                <div>
                  <small>
                    Exposure
                  </small>

                  <b>
                    Customer-facing
                  </b>
                </div>

                <div>
                  <small>
                    Attention
                  </small>

                  <b>
                    Immediate
                  </b>
                </div>
              </div>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.responseSection}>
        <PublicContainer>

          <div className={styles.responseGrid}>

            <div className={styles.responseIntro}>
              <p className={styles.sectionLabelLight}>
                Management response
              </p>

              <h2>
                Give incident teams the business context needed to coordinate the right response.
              </h2>

              <p>
                Technical investigation can continue while business owners
                understand what is exposed, how significant it is and where
                operational decisions may be required.
              </p>
            </div>


            <div className={styles.responseBoard}>

              <div className={styles.responseRow}>
                <span className={styles.responseNumber}>
                  01
                </span>

                <div>
                  <span>
                    Technical response
                  </span>

                  <strong>
                    Investigate degraded agent behavior
                  </strong>
                </div>

                <small>
                  AI Platform Team
                </small>
              </div>


              <div className={styles.responseRow}>
                <span className={styles.responseNumber}>
                  02
                </span>

                <div>
                  <span>
                    Operational response
                  </span>

                  <strong>
                    Review Customer Support continuity
                  </strong>
                </div>

                <small>
                  Digital Operations
                </small>
              </div>


              <div className={styles.responseRowStrong}>
                <span className={styles.responseNumber}>
                  03
                </span>

                <div>
                  <span>
                    Business response
                  </span>

                  <strong>
                    Assess customer service exposure
                  </strong>
                </div>

                <small>
                  Customer Operations
                </small>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.decisionSection}>
        <PublicContainer>

          <div className={styles.decisionHeader}>
            <p className={styles.sectionLabel}>
              Incident decision context
            </p>

            <h2>
              Put the information management needs in one clear incident view.
            </h2>
          </div>


          <div className={styles.decisionGrid}>

            <div className={styles.decisionItem}>
              <span>
                What happened
              </span>

              <strong>
                AI response quality degraded
              </strong>

              <p>
                The technical condition remains visible without becoming the whole incident story.
              </p>
            </div>


            <div className={styles.decisionItem}>
              <span>
                What is exposed
              </span>

              <strong>
                Customer Assistance
              </strong>

              <p>
                The affected business service is visible alongside the incident.
              </p>
            </div>


            <div className={styles.decisionItem}>
              <span>
                Who owns the response
              </span>

              <strong>
                Digital Operations
              </strong>

              <p>
                Responsible business ownership remains explicit.
              </p>
            </div>


            <div className={styles.decisionItemStrong}>
              <span>
                Management decision
              </span>

              <strong>
                Immediate operational review
              </strong>

              <p>
                Business severity provides a clear basis for management attention.
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
                See AI Incident Business Impact in AIGO-OS
              </p>

              <h2>
                See how AI incidents can be understood in terms of their real business consequence.
              </h2>

              <p>
                Request a demo to see how AIGO-OS Impact can connect
                AI incidents to affected services, operational criticality
                and responsible business owners.
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


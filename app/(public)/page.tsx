import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const capabilities = [
  {
    number: "01",
    title: "Enterprise Context",
    href: "/platform/enterprise-context",
    description:
      "Understand the enterprise environment surrounding AI activity.",
  },
  {
    number: "02",
    title: "AI Business Mapping",
    href: "/platform/ai-business-mapping",
    description:
      "Connect AI to the business structures and processes it affects.",
  },
  {
    number: "03",
    title: "Activity & Event Correlation",
    href: "/platform/activity-event-correlation",
    description:
      "Relate AI activity to relevant operational and enterprise events.",
  },
  {
    number: "04",
    title: "Contextual Intelligence",
    href: "/platform/contextual-intelligence",
    description:
      "Interpret AI activity without separating it from business context.",
  },
  {
    number: "05",
    title: "Management Intelligence",
    href: "/platform/management-intelligence",
    description:
      "Turn connected context into intelligence management teams can use.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AIGO-OS Intelligence Platform
              </p>

              <h1>
                Understand AI in business context.
              </h1>

              <p className={styles.heroText}>
                Connect AI activity to the enterprise structures,
                business relationships and operational context needed
                to understand governance priorities and business impact.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/platform"
                  className={styles.primaryButton}
                >
                  Explore the Platform
                </Link>

                <Link
                  href="/talk-to-an-expert"
                  className={styles.secondaryButton}
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.visualFrame}>
                <div className={styles.visualHeader}>
                  <div>
                    <span>Enterprise view</span>
                    <strong>AI business context</strong>
                  </div>

                  <div className={styles.liveState}>
                    Connected
                  </div>
                </div>

                <div className={styles.visualBody}>
                  <div className={styles.signalPanel}>
                    <span className={styles.signalLabel}>
                      Current activity
                    </span>

                    <strong>
                      AI activity
                    </strong>

                    <p>
                      Activity enters the platform with enterprise
                      context retained.
                    </p>
                  </div>

                  <div className={styles.contextPanel}>
                    <div>
                      <span>Business area</span>
                      <strong>Operations</strong>
                    </div>

                    <div>
                      <span>Enterprise context</span>
                      <strong>Available</strong>
                    </div>

                    <div>
                      <span>Management view</span>
                      <strong>Ready</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.visualFooter}>
                  <span>Governance intelligence</span>
                  <span>Business impact intelligence</span>
                </div>
              </div>

              <div className={styles.depthPanel} />
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.contextSection}>
        <PublicContainer>
          <div className={styles.contextGrid}>
            <p className={styles.sectionLabel}>
              Why AIGO-OS
            </p>

            <div>
              <h2>
                AI becomes harder to manage when it is separated
                from the business around it.
              </h2>

              <p>
                AIGO-OS creates a connected intelligence layer between
                AI activity and enterprise context, giving organizations
                a clearer basis for understanding what matters.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.capabilitiesSection}>
        <PublicContainer>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionLabel}>
                Platform capabilities
              </p>

              <h2>
                Five capabilities. One connected view.
              </h2>
            </div>

            <Link href="/platform" className={styles.inlineLink}>
              Platform Overview
            </Link>
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.map((capability) => (
              <Link
                key={capability.href}
                href={capability.href}
                className={styles.capabilityCard}
              >
                <span className={styles.cardNumber}>
                  {capability.number}
                </span>

                <div>
                  <h3>{capability.title}</h3>

                  <p>{capability.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </PublicContainer>
      </section>


      <section className={styles.productsSection}>
        <PublicContainer>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionLabel}>
                AIGO-OS Products
              </p>

              <h2>
                Intelligence for governance and business impact.
              </h2>
            </div>

            <Link href="/products" className={styles.inlineLink}>
              Products Overview
            </Link>
          </div>

          <div className={styles.productGrid}>
            <Link
              href="/products/aigo-os-govern"
              className={styles.productCard}
            >
              <div className={styles.productTop}>
                <span>01</span>

                <span>AI Governance Intelligence</span>
              </div>

              <div className={styles.productContent}>
                <h3>AIGO-OS Govern</h3>

                <p>
                  Understand AI accountability, authority and governance
                  priorities in enterprise context.
                </p>
              </div>

              <div className={styles.productStrip}>
                <span>Accountability</span>
                <span>Authority</span>
                <span>Priorities</span>
              </div>
            </Link>

            <Link
              href="/products/aigo-os-impact"
              className={styles.productCard}
            >
              <div className={styles.productTop}>
                <span>02</span>

                <span>AI Business Impact Intelligence</span>
              </div>

              <div className={styles.productContent}>
                <h3>AIGO-OS Impact</h3>

                <p>
                  Understand how AI incidents, changes and dependencies
                  connect to business impact.
                </p>
              </div>

              <div className={styles.productStrip}>
                <span>Incidents</span>
                <span>Changes</span>
                <span>Dependencies</span>
              </div>
            </Link>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.useCaseSection}>
        <PublicContainer>
          <div className={styles.useCaseGrid}>
            <div>
              <p className={styles.sectionLabelDark}>
                Use cases
              </p>

              <h2>
                Start with the business question that needs an answer.
              </h2>
            </div>

            <div className={styles.useCaseLists}>
              <div>
                <span className={styles.useCaseHeading}>
                  AI Governance
                </span>

                <Link href="/solutions/ai-agent-accountability">
                  AI Agent Accountability
                </Link>

                <Link href="/solutions/ai-agent-access-authority">
                  AI Agent Access & Authority
                </Link>

                <Link href="/solutions/ai-agent-sprawl">
                  AI Agent Sprawl
                </Link>

                <Link href="/solutions/ai-governance-priorities">
                  AI Governance Priorities
                </Link>
              </div>

              <div>
                <span className={styles.useCaseHeading}>
                  AI Business Impact
                </span>

                <Link href="/solutions/ai-incident-business-impact">
                  AI Incident Business Impact
                </Link>

                <Link href="/solutions/ai-change-business-impact">
                  AI Change Business Impact
                </Link>

                <Link href="/solutions/ai-business-dependencies">
                  AI Business Dependencies
                </Link>
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.finalSection}>
        <PublicContainer>
          <div className={styles.finalPanel}>
            <div>
              <p className={styles.finalEyebrow}>
                AIGO-OS
              </p>

              <h2>
                Bring AI into business context.
              </h2>
            </div>

            <div className={styles.finalActions}>
              <Link
                href="/talk-to-an-expert"
                className={styles.finalPrimary}
              >
                  Talk to an Expert
                </Link>

              <Link
                href="/talk-to-an-expert"
                className={styles.finalSecondary}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </PublicContainer>
      </section>
    </>
  );
}




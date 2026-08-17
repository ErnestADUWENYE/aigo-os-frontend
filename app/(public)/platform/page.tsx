import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const capabilities = [
  {
    number: "01",
    title: "Enterprise Context",
    href: "/platform/enterprise-context",
    text:
      "Establish the enterprise environment around AI activity so information is interpreted in the right business setting.",
  },
  {
    number: "02",
    title: "AI Business Mapping",
    href: "/platform/ai-business-mapping",
    text:
      "Connect AI to the business functions, processes, operating structures and relationships that give it meaning.",
  },
  {
    number: "03",
    title: "Activity & Event Correlation",
    href: "/platform/activity-event-correlation",
    text:
      "Relate AI activity to relevant enterprise events so important changes and operational signals can be understood together.",
  },
  {
    number: "04",
    title: "Contextual Intelligence",
    href: "/platform/contextual-intelligence",
    text:
      "Interpret AI activity with the surrounding business context intact rather than treating events in isolation.",
  },
  {
    number: "05",
    title: "Management Intelligence",
    href: "/platform/management-intelligence",
    text:
      "Turn connected context into useful management intelligence for governance priorities and business impact.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AIGO-OS Platform
              </p>

              <h1>
                The intelligence layer between AI activity and business context.
              </h1>

              <p className={styles.heroText}>
                AIGO-OS connects AI activity to the enterprise structures,
                business relationships and operational context required to
                understand governance priorities and business impact.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/talk-to-an-expert"
                  className={styles.primaryButton}
                >
                  Talk to an Expert
                </Link>

                <Link
                  href="/products"
                  className={styles.secondaryButton}
                >
                  Explore Products
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.visualBack} />

              <div className={styles.visualMain}>
                <div className={styles.visualHeader}>
                  <span>
                    Enterprise intelligence
                  </span>

                  <strong>
                    Connected context
                  </strong>
                </div>

                <div className={styles.visualRows}>
                  <div>
                    <span>AI activity</span>
                    <strong>Observed</strong>
                  </div>

                  <div>
                    <span>Business mapping</span>
                    <strong>Connected</strong>
                  </div>

                  <div>
                    <span>Enterprise context</span>
                    <strong>Available</strong>
                  </div>

                  <div>
                    <span>Management intelligence</span>
                    <strong>Ready</strong>
                  </div>
                </div>

                <div className={styles.visualFooter}>
                  <span>
                    Govern
                  </span>

                  <span>
                    Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.problemSection}>
        <PublicContainer>
          <div className={styles.problemGrid}>
            <p className={styles.sectionLabel}>
              The platform problem
            </p>

            <div>
              <h2>
                AI activity alone does not explain what it means to the business.
              </h2>

              <p>
                Organizations can see individual AI systems, activities or
                events without necessarily understanding who owns them, what
                business functions they support, what dependencies surround
                them or what changes matter most.
              </p>

              <p>
                AIGO-OS is designed to preserve and connect that context so
                governance and business-impact decisions are made with a more
                complete view.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.sequenceSection}>
        <PublicContainer>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionLabel}>
                Platform capabilities
              </p>

              <h2>
                Five capabilities that build a connected intelligence view.
              </h2>
            </div>
          </div>

          <div className={styles.sequenceGrid}>
            {capabilities.map((capability) => (
              <Link
                key={capability.href}
                href={capability.href}
                className={styles.sequenceCard}
              >
                <div className={styles.sequenceTop}>
                  <span className={styles.sequenceNumber}>
                    {capability.number}
                  </span>

                  <span className={styles.sequenceLine} />
                </div>

                <div>
                  <h3>
                    {capability.title}
                  </h3>

                  <p>
                    {capability.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </PublicContainer>
      </section>


      <section className={styles.connectionSection}>
        <PublicContainer>
          <div className={styles.connectionPanel}>
            <div className={styles.connectionCopy}>
              <p className={styles.sectionLabelLight}>
                Connected intelligence
              </p>

              <h2>
                Context moves through the platform instead of being discarded between tools.
              </h2>

              <p>
                Enterprise context, business mapping and relevant activity can
                remain connected as information moves toward governance and
                impact decisions.
              </p>
            </div>

            <div className={styles.connectionVisual}>
              <div className={styles.connectionLayer}>
                <span>Enterprise Context</span>
                <strong>Business environment</strong>
              </div>

              <div className={styles.connectionLayer}>
                <span>AI Business Mapping</span>
                <strong>Operational relationship</strong>
              </div>

              <div className={styles.connectionLayer}>
                <span>Contextual Intelligence</span>
                <strong>Interpretation</strong>
              </div>

              <div className={styles.connectionLayer}>
                <span>Management Intelligence</span>
                <strong>Decision support</strong>
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.productsSection}>
        <PublicContainer>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionLabel}>
                Built into AIGO-OS products
              </p>

              <h2>
                One platform. Two intelligence products.
              </h2>
            </div>
          </div>

          <div className={styles.productGrid}>
            <Link
              href="/products/aigo-os-govern"
              className={styles.productCard}
            >
              <span className={styles.productLabel}>
                AI Governance Intelligence
              </span>

              <h3>
                AIGO-OS Govern
              </h3>

              <p>
                Use connected enterprise context to understand accountability,
                authority and governance priorities.
              </p>
            </Link>

            <Link
              href="/products/aigo-os-impact"
              className={styles.productCard}
            >
              <span className={styles.productLabel}>
                AI Business Impact Intelligence
              </span>

              <h3>
                AIGO-OS Impact
              </h3>

              <p>
                Use connected enterprise context to understand incidents,
                changes and business dependencies.
              </p>
            </Link>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.finalSection}>
        <PublicContainer>
          <div className={styles.finalPanel}>
            <div>
              <p className={styles.sectionLabelLight}>
                AIGO-OS Platform
              </p>

              <h2>
                Start with enterprise context.
              </h2>

              <p>
                Explore the first platform capability or begin a conversation
                about how AIGO-OS can fit your environment.
              </p>
            </div>

            <div className={styles.finalActions}>
              <Link
                href="/platform/enterprise-context"
                className={styles.finalPrimary}
              >
                Enterprise Context
              </Link>

              <Link
                href="/talk-to-an-expert"
                className={styles.finalSecondary}
              >
                  Talk to an Expert
                </Link>
            </div>
          </div>
        </PublicContainer>
      </section>
    </>
  );
}




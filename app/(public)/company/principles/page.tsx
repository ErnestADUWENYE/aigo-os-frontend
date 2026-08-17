import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const principles = [
  {
    number: "01",
    title: "Understand AI in business context",
    text:
      "AI activity should be understood in relation to the organisation, the process it supports, the authority around it and the people responsible for it.",
  },
  {
    number: "02",
    title: "Keep accountability visible",
    text:
      "As AI becomes more autonomous, ownership, responsibility and delegated authority should remain clear.",
  },
  {
    number: "03",
    title: "Use significance to focus attention",
    text:
      "Not every AI event deserves the same governance response. Attention should follow business significance and context.",
    featured: true,
  },
  {
    number: "04",
    title: "Connect governance decisions to evidence",
    text:
      "Important governance outcomes should preserve the context, reasoning and accountability needed to understand what happened and why.",
  },
  {
    number: "05",
    title: "Work with the enterprise environment",
    text:
      "AI governance should connect relevant context from existing systems rather than require organisations to replace the platforms they already use.",
  },
];

export default function PrinciplesPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroLayout}>
            <div>
              <p className={styles.eyebrow}>
                Our Principles
              </p>

              <h1>
                Principles for building a clearer governance layer around enterprise AI.
              </h1>
            </div>

            <div className={styles.heroAside}>
              <p>
                These principles shape how we design AIGO-OS and how we think
                about governance across complex enterprise AI environments.
              </p>

              <p>
                They are intended to keep the product focused on management
                understanding, accountability and practical governance.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.statement}>
        <PublicContainer>
          <div className={styles.statementLayout}>
            <p className={styles.sectionLabel}>
              Our position
            </p>

            <h2>
              Governance should help organisations understand AI in the context in which it actually operates.
            </h2>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.principlesSection}>
        <PublicContainer>
          <div className={styles.principlesGrid}>
            {principles.map((principle) => (
              <article
                key={principle.number}
                className={
                  principle.featured
                    ? `${styles.principle} ${styles.featured}`
                    : styles.principle
                }
              >
                <div className={styles.principleTop}>
                  <span className={styles.number}>
                    {principle.number}
                  </span>

                  <span className={styles.rule} />
                </div>

                <div className={styles.principleCopy}>
                  <h2>
                    {principle.title}
                  </h2>

                  <p>
                    {principle.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </PublicContainer>
      </section>

      <section className={styles.closing}>
        <PublicContainer>
          <div className={styles.closingGrid}>
            <p className={styles.sectionLabel}>
              The standard we set
            </p>

            <div>
              <h2>
                Clear enough for management. Grounded enough for governance.
              </h2>

              <p>
                AIGO-OS should make the governance state of enterprise AI
                easier to understand without hiding important context or
                creating unnecessary complexity.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>
    </>
  );
}

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroLayout}>
            <div>
              <p className={styles.eyebrow}>
                About AIGO-OS
              </p>

              <h1>
                We are building the governance operating layer for enterprise AI.
              </h1>
            </div>

            <div className={styles.heroAside}>
              <p>
                AI is becoming part of how organisations make decisions,
                operate services and execute business processes.
              </p>

              <p>
                AIGO-OS is being built to help organisations understand the
                governance state of AI across their environment, what carries
                business significance, and where management attention is needed.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.problem}>
        <PublicContainer>
          <div className={styles.problemGrid}>
            <p className={styles.sectionLabel}>
              Why we exist
            </p>

            <div>
              <h2>
                The context needed to govern AI is distributed across the enterprise.
              </h2>

              <p>
                Information about AI already exists across different systems
                and teams. Identity may live in one system, activity in another,
                access elsewhere, and business responsibility with the teams
                using it.
              </p>

              <p>
                AIGO-OS connects relevant context so AI can be understood and
                governed within the business environment in which it operates.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.purpose}>
        <PublicContainer>
          <div className={styles.purposeHeader}>
            <p className={styles.sectionLabelLight}>
              Our purpose
            </p>

            <h2>
              Connect the context needed to understand the governance state of enterprise AI.
            </h2>
          </div>

          <div className={styles.purposeGrid}>
            <div className={styles.purposeItem}>
              <span>01</span>

              <strong>
                Connect relevant context
              </strong>

              <p>
                Bring together the information needed to understand AI activity
                in its enterprise setting.
              </p>
            </div>

            <div className={styles.purposeItem}>
              <span>02</span>

              <strong>
                Understand significance
              </strong>

              <p>
                Relate AI activity to responsibility, authority, business
                context and the conditions around its use.
              </p>
            </div>

            <div className={styles.purposeItem}>
              <span>03</span>

              <strong>
                Focus management attention
              </strong>

              <p>
                Make it clearer where governance attention is needed and why
                it matters to the organisation.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.belief}>
        <PublicContainer>
          <div className={styles.beliefGrid}>
            <div>
              <p className={styles.sectionLabel}>
                What we believe
              </p>

              <h2>
                AI governance should work with the enterprise environment, not require another disconnected view of it.
              </h2>
            </div>

            <div className={styles.beliefCopy}>
              <p>
                Organisations already use systems for building AI, managing
                identity and access, observing operations, managing security,
                and running business processes.
              </p>

              <p>
                AIGO-OS is being built to work across that environment,
                connecting relevant context into a governance view for
                management.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>
    </>
  );
}

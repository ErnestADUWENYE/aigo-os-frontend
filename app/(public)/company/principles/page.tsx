import {
  BrainCircuit,
  FileCheck2,
  Network,
  ShieldCheck,
  Target,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


const principles = [
  {
    icon: BrainCircuit,

    meta: "Interpretation",

    title: "Context before conclusion",

    text:
      "AIGO-OS should not interpret an AI signal in isolation. Activity becomes useful for governance when it is understood alongside the business process, system, dependency, ownership and operating conditions around it.",

    featured: true,
  },

  {
    icon: ShieldCheck,

    meta: "Accountability",

    title: "Responsibility must survive automation",

    text:
      "As AI systems and agents take on more activity, AIGO-OS should keep responsibility, delegated authority and the relevant management ownership visible rather than allowing automation to obscure them.",
  },

  {
    icon: Target,

    meta: "Management attention",

    title: "Business significance drives attention",

    text:
      "AIGO-OS should help distinguish what matters from what merely happened. Governance attention should follow business relevance, potential impact and the context surrounding the activity.",
  },

  {
    icon: FileCheck2,

    meta: "Evidence",

    title: "Keep evidence connected to the decision",

    text:
      "When AIGO-OS presents a governance conclusion or management view, the supporting signals, enterprise context and reasoning should remain connected so the outcome can be understood and challenged.",
  },

  {
    icon: Network,

    meta: "Enterprise architecture",

    title: "Connect to the enterprise. Do not recreate it.",

    text:
      "AIGO-OS should use relevant context already held across enterprise systems. It is an intelligence and governance layer, not a replacement for identity, workflow, security, observability or business platforms.",
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
                Govern AI in context, not in isolation.
              </h1>
            </div>

            <div className={styles.heroAside}>
              <p>
                AIGO-OS is built around a simple idea: AI governance should
                preserve business context, accountability and evidence rather
                than separate AI from the enterprise environment in which it
                operates.
              </p>

              <p>
                These principles guide how AIGO-OS connects information,
                interprets significance and presents governance intelligence
                to management.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.standard}>
        <PublicContainer>
          <div className={styles.standardGrid}>
            <p className={styles.sectionLabel}>
              The standard we set
            </p>

            <div className={styles.standardContent}>
              <div className={styles.standardStatement}>
                <h2>
                  Clear enough for management.
                </h2>

                <h2>
                  Connected enough to explain why.
                </h2>
              </div>

              <p>
                AIGO-OS should make the governance state of enterprise AI
                easier for management to understand without separating
                conclusions from the context, accountability and evidence
                behind them.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.principlesSection}>
        <PublicContainer>
          <div className={styles.principlesIntro}>
            <p className={styles.sectionLabel}>
              How we build AIGO-OS
            </p>

            <h2>
              The principles behind the platform.
            </h2>
          </div>

          <div className={styles.principlesGrid}>
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className={
                    principle.featured
                      ? `${styles.principle} ${styles.featured}`
                      : styles.principle
                  }
                >
                  <div className={styles.principleTop}>
                    <div className={styles.iconWrap}>
                      <Icon
                        size={23}
                        strokeWidth={1.65}
                        aria-hidden="true"
                      />
                    </div>

                    <span className={styles.principleMeta}>
                      {principle.meta}
                    </span>
                  </div>

                  <div className={styles.principleCopy}>
                    <h3>
                      {principle.title}
                    </h3>

                    <p>
                      {principle.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </PublicContainer>
      </section>
    </>
  );
}

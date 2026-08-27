import { createPageMetadata } from "@/lib/seo/metadata";
import {
  BrainCircuit,
  FileCheck2,
  Network,
  ShieldCheck,
  Target,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "AIGO-OS Principles",
  description:
    "Explore the principles guiding AIGO-OS, including contextual interpretation, accountability, business significance, connected evidence and enterprise integration.",
  path: "/company/principles",
  keywords: [
    "AI governance principles",
    "responsible enterprise AI",
  ],
});
const principles = [
  {
    icon: BrainCircuit,
    meta: "Context",
    title: "Understand context before drawing conclusions",
    text:
      "Signals become meaningful when they are understood alongside the systems, services, ownership, controls, dependencies and operating conditions around them.",
  },

  {
    icon: Network,
    meta: "Relationships",
    title: "Make relationships part of the intelligence",
    text:
      "Enterprise understanding depends on seeing how information connects. AIGO-OS should preserve those relationships rather than reduce them to isolated records.",
  },

  {
    icon: Target,
    meta: "Significance",
    title: "Focus on what matters to the enterprise",
    text:
      "Not every event has the same consequence. Intelligence should help distinguish activity from significance and show what deserves management attention.",
  },

  {
    icon: ShieldCheck,
    meta: "Responsibility",
    title: "Keep ownership and accountability visible",
    text:
      "Automation should not make responsibility harder to understand. Relevant ownership, authority and accountability should remain connected to the activity they govern.",
  },

  {
    icon: FileCheck2,
    meta: "Explainability",
    title: "Keep understanding connected to its evidence",
    text:
      "When AIGO-OS presents a conclusion, the supporting context, relationships and reasoning should remain understandable so the result can be examined and challenged.",
  },
];


export default function PrinciplesPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Our Principles
              </p>

              <h1>
                Understand the enterprise in context, not in fragments.
              </h1>

              <p className={styles.heroStatement}>
                AIGO-OS is built around the belief that better enterprise
                intelligence comes from understanding relationships,
                significance, responsibility and evidence together.
              </p>
            </div>

            <div className={styles.heroAside}>
              <p className={styles.heroLead}>
                Information becomes more useful when the connections
                around it remain visible.
              </p>

              <p>
                These principles guide how AIGO-OS connects enterprise
                information, interprets what matters and helps management
                understand governance and business impact in context.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      {/* =====================================================
          STANDARD
      ===================================================== */}

      <section className={styles.standard}>
        <PublicContainer>
          <div className={styles.standardLayout}>
            <div className={styles.standardHeading}>
              <p className={styles.sectionLabel}>
                The standard we set
              </p>

              <h2>
                Clear enough to understand.
                <span>
                  Connected enough to explain why.
                </span>
              </h2>
            </div>

            <div className={styles.standardCopy}>
              <p>
                AIGO-OS should help leaders understand what is happening,
                what it relates to, what may be affected and why the
                information matters.
              </p>

              <p>
                The goal is not to produce more signals. It is to make
                enterprise information more understandable without
                separating conclusions from the context that gives
                them meaning.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className={styles.principlesSection}>
        <PublicContainer>
          <div className={styles.principlesHeader}>
            <div>
              <p className={styles.sectionLabel}>
                How we build AIGO-OS
              </p>

              <h2>
                Principles that shape the intelligence.
              </h2>
            </div>

            <p>
              These are not decorative values. They influence how
              information is connected, interpreted and presented
              throughout AIGO-OS.
            </p>
          </div>


          <div className={styles.principlesGrid}>
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className={styles.principle}
                >
                  <div className={styles.principleTop}>
                    <div className={styles.iconWrap}>
                      <Icon
                        size={21}
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


      {/* =====================================================
          CLOSING PRINCIPLE
      ===================================================== */}

      <section className={styles.closing}>
        <PublicContainer>
          <div className={styles.closingLayout}>
            <p className={styles.sectionLabel}>
              What this means
            </p>

            <div>
              <h2>
                AIGO-OS should help people understand more, not simply
                show them more.
              </h2>

              <p>
                Every part of the platform should move enterprise
                information toward clearer context, clearer consequence
                and more explainable management understanding.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>
    </>
  );
}


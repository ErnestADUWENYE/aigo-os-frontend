import { createPageMetadata } from "@/lib/seo/metadata";
import {
  BrainCircuit,
  Network,
  Target,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "About AIGO-OS",
  description:
    "Learn why AIGO-OS is being built and how its mission connects enterprise AI activity, governance context, accountability, dependencies and business consequence.",
  path: "/company/about",
  keywords: [
    "about AIGO-OS",
    "AI governance company",
  ],
});
const purposeItems = [
  {
    icon: Network,
    eyebrow: "Connect",
    title: "Bring enterprise context together",
    description:
      "Connect information across systems, teams, controls, services and business operations so important relationships can be understood together.",
  },

  {
    icon: BrainCircuit,
    eyebrow: "Understand",
    title: "Turn relationships into understanding",
    description:
      "Make ownership, dependencies, governance conditions and business significance easier to interpret in context.",
  },

  {
    icon: Target,
    eyebrow: "Focus",
    title: "Help leaders see what matters",
    description:
      "Give management clearer insight into where attention is required, what may be affected and why it matters.",
  },
];


const beliefs = [
  {
    title: "Context changes meaning",
    text:
      "An event, control, system or AI activity means more when the surrounding enterprise context is understood.",
  },

  {
    title: "Relationships reveal consequence",
    text:
      "Dependencies, ownership and business connections make it possible to understand what change may actually affect.",
  },

  {
    title: "Understanding should be explainable",
    text:
      "Management intelligence should make it clear how conclusions were reached and what information supports them.",
  },
];


export default function AboutPage() {
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
                About AIGO-OS
              </p>

              <h1>
                We are building a clearer way to understand the enterprise
                around AI.
              </h1>

              <p className={styles.heroStatement}>
                AIGO-OS exists to turn fragmented enterprise information
                into connected understanding for governance, business
                impact and management decision-making.
              </p>
            </div>


            <div className={styles.heroAside}>
              <p className={styles.heroLead}>
                Enterprises do not lack information.
                They lack a connected view of what that information means.
              </p>

              <p>
                Systems, controls, services, ownership, activity and business
                responsibility are often understood separately. AIGO-OS is
                being built to connect those relationships so leaders can
                understand the wider picture.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      {/* =====================================================
          WHY WE EXIST
      ===================================================== */}

      <section className={styles.problem}>
        <PublicContainer>
          <div className={styles.problemGrid}>
            <div>
              <p className={styles.sectionLabel}>
                Why AIGO-OS exists
              </p>

              <h2>
                Important enterprise decisions are still being made from
                fragmented understanding.
              </h2>
            </div>

            <div className={styles.problemCopy}>
              <p>
                Information already exists across identity systems,
                operational platforms, governance tools, business services,
                security environments and the teams responsible for them.
              </p>

              <p>
                The difficulty is understanding how those things relate,
                what has changed, what depends on what, who is responsible
                and what the business may be affected by.
              </p>

              <p className={styles.problemEmphasis}>
                We believe enterprises need connected intelligence that
                explains those relationships rather than another isolated
                view of them.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      {/* =====================================================
          WHAT WE ARE BUILDING
      ===================================================== */}

      <section className={styles.purpose}>
        <PublicContainer>
          <div className={styles.purposeHeader}>
            <div>
              <p className={styles.sectionLabelLight}>
                What we are building
              </p>

              <h2>
                Connected intelligence that helps enterprises understand
                what matters and why.
              </h2>
            </div>

            <p>
              AIGO-OS connects enterprise context so governance,
              relationships, dependencies and business impact can be
              understood as part of the same operating environment.
            </p>
          </div>


          <div className={styles.purposeGrid}>
            {purposeItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={styles.purposeItem}
                >
                  <div className={styles.purposeTop}>
                    <div className={styles.purposeIcon}>
                      <Icon
                        size={22}
                        strokeWidth={1.65}
                        aria-hidden="true"
                      />
                    </div>

                    <span className={styles.purposeMeta}>
                      {item.eyebrow}
                    </span>
                  </div>

                  <div className={styles.purposeCopy}>
                    <strong>
                      {item.title}
                    </strong>

                    <p>
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </PublicContainer>
      </section>


      {/* =====================================================
          WHERE WE ARE GOING
      ===================================================== */}

      <section className={styles.future}>
        <PublicContainer>
          <div className={styles.futureLayout}>
            <div className={styles.futureHeading}>
              <p className={styles.sectionLabel}>
                Where we are going
              </p>

              <h2>
                We want enterprise understanding to become as connected as
                the environments leaders are responsible for.
              </h2>
            </div>

            <div className={styles.futureCopy}>
              <p>
                Our direction is an enterprise environment where leaders can
                understand how AI, systems, controls, ownership, services,
                dependencies and business outcomes connect before they have
                to make important decisions.
              </p>

              <p>
                That means moving beyond dashboards that report isolated
                activity toward intelligence that helps explain significance,
                consequence and responsibility in context.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      {/* =====================================================
          WHAT WE BELIEVE
      ===================================================== */}

      <section className={styles.belief}>
        <PublicContainer>
          <div className={styles.beliefHeader}>
            <p className={styles.sectionLabel}>
              What guides us
            </p>

            <h2>
              Better enterprise decisions begin with better understanding.
            </h2>

            <p>
              These ideas shape how we think about AIGO-OS and the
              intelligence we want the platform to provide.
            </p>
          </div>


          <div className={styles.beliefsGrid}>
            {beliefs.map((belief) => (
              <article
                key={belief.title}
                className={styles.beliefItem}
              >
                <strong>
                  {belief.title}
                </strong>

                <p>
                  {belief.text}
                </p>
              </article>
            ))}
          </div>
        </PublicContainer>
      </section>
    </>
  );
}


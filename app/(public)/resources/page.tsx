import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Building2,
  FileText,
  LifeBuoy,
  Network,
  Plug,
  Presentation,
  ShieldCheck,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "AI Governance Resources",
  description:
    "Explore AIGO-OS resources covering enterprise AI governance, connected context, accountability, dependencies, governance intelligence and business impact.",
  path: "/resources",
  keywords: [
    "AI governance resources",
    "enterprise AI governance resources",
  ],
});
const subjectAreas = [
  {
    icon: ShieldCheck,
    label: "Governance Intelligence",
    title: "Understand what governance requires in context.",
    text:
      "Perspectives on controls, accountability, policy relationships, ownership and the consequences of governance change.",
    topics: [
      "Control Applicability",
      "Policies & Controls",
      "Control Coverage",
      "Governance Change Impact",
      "Ownership & Accountability",
    ],
  },

  {
    icon: BrainCircuit,
    label: "Business Impact Intelligence",
    title: "See what change, disruption and dependency mean for the business.",
    text:
      "Practical thinking on operational dependencies, incidents, change and the business services affected by AI and enterprise activity.",
    topics: [
      "Change Impact",
      "Incident Business Impact",
      "Hidden Dependencies",
      "Critical Service Dependencies",
    ],
  },

  {
    icon: Network,
    label: "Enterprise Context",
    title: "Understand relationships before making conclusions.",
    text:
      "Ideas on connecting enterprise information so systems, activity, ownership and business meaning can be understood together.",
    topics: [
      "Enterprise Connectivity",
      "Enterprise Context",
      "Relationship Intelligence",
      "Continuous Intelligence",
      "Contextual Reasoning",
      "Explainability",
    ],
  },
];


const resourceFormats = [
  {
    icon: FileText,
    eyebrow: "Perspective",
    title: "Insights",
    text:
      "Focused AIGO-OS perspectives on enterprise AI governance, business impact, context and decision-making.",
    status: "Publishing soon",
  },

  {
    icon: BookOpen,
    eyebrow: "Executive material",
    title: "Executive Briefs & Research",
    text:
      "Deeper analysis, management frameworks and research designed for enterprise leaders and governance teams.",
    status: "In development",
  },

  {
    icon: Presentation,
    eyebrow: "Discussion",
    title: "Briefings & Events",
    text:
      "Structured conversations and sessions exploring important enterprise AI questions and operating realities.",
    status: "Coming later",
  },

  {
    icon: Building2,
    eyebrow: "Reference",
    title: "Glossary",
    text:
      "Clear definitions for the concepts used throughout AIGO-OS and the wider enterprise AI conversation.",
    status: "Planned",
  },
];


const boundaries = [
  {
    icon: Plug,
    eyebrow: "Connect AIGO-OS",
    title: "Integrations",
    text:
      "Technical information about connecting AIGO-OS to enterprise systems and information sources.",
    href: "/integrations",
    action: "Explore integrations",
  },

  {
    icon: LifeBuoy,
    eyebrow: "Use AIGO-OS",
    title: "Help Center",
    text:
      "Product guidance, support and operational help belong in the dedicated AIGO-OS Help Center.",
    href: "/help",
    action: "Visit Help Center",
  },

  {
    icon: ShieldCheck,
    eyebrow: "Trust AIGO-OS",
    title: "Security",
    text:
      "Security, privacy and assurance information is maintained separately from the editorial resource library.",
    href: "/security",
    action: "Explore security",
  },
];


export default function ResourcesPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div
          className={styles.heroGridPattern}
          aria-hidden="true"
        />

        <PublicContainer>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AIGO-OS Resources
              </p>

              <h1>
                Think more clearly about enterprise AI.
              </h1>

              <div
                className={styles.heroSignals}
                aria-label="Resource focus areas"
              >
                <span>Governance</span>
                <span>Business impact</span>
                <span>Enterprise context</span>
              </div>
            </div>

            <div className={styles.heroIntro}>
              <span className={styles.heroIntroRule} />

              <p className={styles.heroLead}>
                AIGO-OS Resources brings together perspectives,
                research and practical thinking for leaders trying
                to understand AI in the context of the enterprise.
              </p>

              <p>
                The goal is not content volume. It is useful material
                that makes relationships, consequences and management
                questions easier to understand.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      {/* =====================================================
          EDITORIAL POSITION
      ===================================================== */}

      <section className={styles.positionSection}>
        <PublicContainer>
          <div className={styles.positionLayout}>
            <div className={styles.positionHeading}>
              <p className={styles.sectionLabel}>
                AIGO-OS perspective
              </p>

              <h2>
                Enterprise AI becomes more useful when it can be
                understood as part of the business around it.
              </h2>
            </div>

            <div className={styles.positionDetail}>
              <p>
                Our resource program focuses on the questions between
                AI activity and enterprise decision-making: what is
                connected, what matters, who is accountable, what
                changed and what the business may be affected by.
              </p>

              <div className={styles.positionPrinciples}>
                <div>
                  <span>01</span>
                  <strong>Understand context</strong>
                  <p>
                    Look beyond isolated systems, events and AI activity.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Understand relationships</strong>
                  <p>
                    See how enterprise information connects before
                    drawing conclusions.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Understand consequence</strong>
                  <p>
                    Connect technical activity to governance and
                    business meaning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>


      {/* =====================================================
          FOCUS AREAS
      ===================================================== */}

      <section className={styles.subjectSection}>
        <PublicContainer>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Areas of focus
              </p>

              <h2>
                The questions behind the platform.
              </h2>
            </div>

            <p>
              Resources explores the same enterprise problems AIGO-OS
              is designed to help make understandable, without turning
              the library into product documentation.
            </p>
          </div>


          <div className={styles.subjectGrid}>
            {subjectAreas.map((subject) => {
              const Icon = subject.icon;

              return (
                <article
                  key={subject.label}
                  className={styles.subjectCard}
                >
                  <div className={styles.subjectTop}>
                    <div className={styles.subjectIcon}>
                      <Icon
                        size={22}
                        strokeWidth={1.65}
                        aria-hidden="true"
                      />
                    </div>

                    <span>
                      {subject.label}
                    </span>
                  </div>

                  <div className={styles.subjectCopy}>
                    <h3>
                      {subject.title}
                    </h3>

                    <p>
                      {subject.text}
                    </p>
                  </div>

                  <div className={styles.topicList}>
                    {subject.topics.map((topic) => (
                      <span key={topic}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </PublicContainer>
      </section>


      {/* =====================================================
          RESOURCE LIBRARY
      ===================================================== */}

      <section className={styles.librarySection}>
        <div
          className={styles.libraryGlow}
          aria-hidden="true"
        />

        <PublicContainer>
          <div className={styles.libraryHeader}>
            <div>
              <p className={styles.sectionLabelLight}>
                Resource library
              </p>

              <h2>
                Different formats.
                <br />
                One connected point of view.
              </h2>
            </div>

            <div className={styles.libraryHeaderCopy}>
              <p>
                The library is being built deliberately around original
                AIGO-OS material for enterprise leaders, governance
                teams and people responsible for understanding AI
                in business context.
              </p>

              <span>
                New material will appear here as it is published.
              </span>
            </div>
          </div>


          <div className={styles.resourceGrid}>
            {resourceFormats.map((format) => {
              const Icon = format.icon;

              return (
                <article
                  key={format.title}
                  className={styles.resourceCard}
                >
                  <div className={styles.resourceCardTop}>
                    <div className={styles.resourceIcon}>
                      <Icon
                        size={23}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <span className={styles.resourceStatus}>
                      {format.status}
                    </span>
                  </div>

                  <div className={styles.resourceCardCopy}>
                    <span className={styles.resourceEyebrow}>
                      {format.eyebrow}
                    </span>

                    <h3>
                      {format.title}
                    </h3>

                    <p>
                      {format.text}
                    </p>
                  </div>

                  <div
                    className={styles.resourceCardRule}
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </PublicContainer>
      </section>


      {/* =====================================================
          RESOURCE BOUNDARIES
      ===================================================== */}

      <section className={styles.boundarySection}>
        <PublicContainer>
          <div className={styles.boundaryLayout}>
            <div className={styles.boundaryHeader}>
              <p className={styles.sectionLabel}>
                Find the right place
              </p>

              <h2>
                Resources is for thinking and learning.
              </h2>

              <p>
                Implementation guidance, support and trust information
                each have a dedicated destination elsewhere in AIGO-OS.
              </p>
            </div>


            <div className={styles.boundaryCards}>
              {boundaries.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={styles.boundaryCard}
                  >
                    <div className={styles.boundaryCardHeader}>
                      <div className={styles.boundaryIcon}>
                        <Icon
                          size={20}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <ArrowUpRight
                        className={styles.boundaryArrow}
                        size={17}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    <span className={styles.boundaryEyebrow}>
                      {item.eyebrow}
                    </span>

                    <strong>
                      {item.title}
                    </strong>

                    <p>
                      {item.text}
                    </p>

                    <div className={styles.boundaryAction}>
                      {item.action}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </PublicContainer>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className={styles.finalSection}>
        <PublicContainer>
          <div className={styles.finalPanel}>
            <div className={styles.finalCopy}>
              <p className={styles.finalEyebrow}>
                Continue the conversation
              </p>

              <h2>
                Some enterprise AI questions need more than an article.
              </h2>

              <p>
                Talk with us about governance intelligence, business
                impact intelligence or how AIGO-OS may fit into your
                enterprise environment.
              </p>
            </div>

            <div className={styles.finalActions}>
              <Link
                href="/talk-to-an-expert"
                className={styles.primaryButton}
              >
                Talk to an Expert
              </Link>

              <Link
                href="/request-demo"
                className={styles.secondaryButton}
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </PublicContainer>
      </section>
    </>
  );
}


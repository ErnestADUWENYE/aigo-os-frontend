import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const subjectAreas = [
  {
    number: "01",
    label: "AI Governance",
    title: "Govern AI in the context of the business.",
    text:
      "Perspectives on accountability, authority, AI agent oversight, governance priorities and enterprise responsibility.",
    topics: [
      "AI Agent Accountability",
      "AI Agent Authority",
      "Governance Priorities",
      "AI Agent Sprawl",
    ],
  },
  {
    number: "02",
    label: "Business Impact",
    title: "Understand what AI means for operations and outcomes.",
    text:
      "Research and practical thinking on dependencies, operational change, incidents and the business consequences surrounding AI.",
    topics: [
      "AI Business Dependencies",
      "AI Change Impact",
      "AI Incident Impact",
      "Management Intelligence",
    ],
  },
  {
    number: "03",
    label: "Enterprise Context",
    title: "Understand AI as part of an operating enterprise.",
    text:
      "Ideas on connecting AI activity to business functions, processes, ownership, events and the environment in which AI operates.",
    topics: [
      "Enterprise Context",
      "AI Business Mapping",
      "Activity & Events",
      "Contextual Intelligence",
    ],
  },
];

const formats = [
  {
    title: "Insights",
    text:
      "Articles and perspectives on enterprise AI governance, business impact and contextual intelligence.",
    status: "Publishing soon",
  },
  {
    title: "Executive Briefs & Research",
    text:
      "Deeper analysis, management frameworks, research and decision material for enterprise leaders.",
    status: "In development",
  },
  {
    title: "Webinars & Events",
    text:
      "Conversations, briefings and sessions exploring important enterprise AI questions.",
    status: "Coming later",
  },
  {
    title: "Glossary",
    text:
      "Clear definitions for the concepts used throughout AIGO-OS and the wider enterprise AI conversation.",
    status: "Planned",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>

          <div className={styles.heroGrid}>

            <div>
              <p className={styles.eyebrow}>
                Resources
              </p>

              <h1>
                Perspectives for governing AI in business context.
              </h1>
            </div>

            <div className={styles.heroIntro}>
              <p>
                AIGO-OS Resources will bring together practical thinking,
                research and executive perspectives on AI governance,
                enterprise context and business impact.
              </p>

              <p>
                The library will grow as original AIGO-OS material is
                published. We will not fill it with generic content simply
                to make the library look larger.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.editorialSection}>
        <PublicContainer>

          <div className={styles.editorialPanel}>

            <div className={styles.editorialLabel}>
              <span>
                Editorial focus
              </span>
            </div>

            <div className={styles.editorialStatement}>
              <h2>
                AI becomes more useful to management when it can be understood
                as part of the business around it.
              </h2>

              <p>
                Our resource program will focus on the questions that sit
                between AI activity and enterprise decision-making: who is
                accountable, what authority exists, what the business depends
                on, what changes and what requires management attention.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.subjectSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Areas of focus
              </p>

              <h2>
                Three subjects anchor the AIGO-OS resource library.
              </h2>
            </div>

            <p>
              These themes follow the same business questions addressed by
              the AIGO-OS platform without turning Resources into product
              documentation.
            </p>
          </div>


          <div className={styles.subjectList}>

            {subjectAreas.map((subject) => (
              <article
                key={subject.number}
                className={styles.subject}
              >
                <div className={styles.subjectNumber}>
                  {subject.number}
                </div>

                <div className={styles.subjectIdentity}>
                  <span>
                    {subject.label}
                  </span>

                  <h3>
                    {subject.title}
                  </h3>
                </div>

                <div className={styles.subjectDescription}>
                  <p>
                    {subject.text}
                  </p>

                  <div className={styles.topicList}>
                    {subject.topics.map((topic) => (
                      <span key={topic}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}

          </div>

        </PublicContainer>
      </section>


      <section className={styles.librarySection}>
        <PublicContainer>

          <div className={styles.libraryHeader}>
            <p className={styles.sectionLabelLight}>
              Resource library
            </p>

            <h2>
              Built to grow with real AIGO-OS material.
            </h2>

            <p>
              As material is published, these sections will become searchable
              content libraries rather than placeholder marketing pages.
            </p>
          </div>


          <div className={styles.formatList}>

            {formats.map((format, index) => (
              <div
                key={format.title}
                className={styles.formatRow}
              >
                <span className={styles.formatNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {format.title}
                </strong>

                <p>
                  {format.text}
                </p>

                <span className={styles.formatStatus}>
                  {format.status}
                </span>
              </div>
            ))}

          </div>

        </PublicContainer>
      </section>


      <section className={styles.boundarySection}>
        <PublicContainer>

          <div className={styles.boundaryGrid}>

            <div>
              <p className={styles.sectionLabel}>
                What Resources is not
              </p>

              <h2>
                Learning content stays separate from product support.
              </h2>
            </div>


            <div className={styles.boundaryList}>

              <div>
                <span>
                  Connect AIGO-OS
                </span>

                <strong>
                  Integrations
                </strong>

                <Link href="/integrations">
                  Technical implementation resources
                </Link>
              </div>

              <div>
                <span>
                  Use AIGO-OS
                </span>

                <strong>
                  Help Center
                </strong>

                <Link href="/help">
                  Product guidance and support
                </Link>
              </div>

              <div>
                <span>
                  Trust AIGO-OS
                </span>

                <strong>
                  Privacy & Trust
                </strong>

                <Link href="/trust">
                  Security and assurance information
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
              <p className={styles.sectionLabelLight}>
                AIGO-OS perspectives
              </p>

              <h2>
                Looking for a conversation rather than an article?
              </h2>

              <p>
                Talk with us about AI governance, business impact or how
                AIGO-OS could fit into your enterprise environment.
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

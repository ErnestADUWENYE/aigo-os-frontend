"use client";

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

import {
  useEffect,
  useState,
} from "react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


const subjectAreas = [
  {
    icon: ShieldCheck,
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
    icon: BrainCircuit,
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
    icon: Network,
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
    icon: FileText,
    eyebrow: "Perspective",
    title: "Insights",
    text:
      "Articles and perspectives on enterprise AI governance, business impact and contextual intelligence.",
    status: "Publishing soon",
  },

  {
    icon: BookOpen,
    eyebrow: "Executive material",
    title: "Executive Briefs & Research",
    text:
      "Deeper analysis, management frameworks, research and decision material for enterprise leaders.",
    status: "In development",
  },

  {
    icon: Presentation,
    eyebrow: "Live discussion",
    title: "Webinars & Events",
    text:
      "Conversations, briefings and sessions exploring important enterprise AI questions.",
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
      "Technical implementation and information about connecting AIGO-OS to the enterprise environment.",
    href: "/integrations",
    action: "Explore integrations",
  },

  {
    icon: LifeBuoy,
    eyebrow: "Use AIGO-OS",
    title: "Help Center",
    text:
      "Product guidance and support belong in the Help Center rather than the editorial resource library.",
    href: "/help",
    action: "Visit Help Center",
  },

  {
    icon: ShieldCheck,
    eyebrow: "Trust AIGO-OS",
    title: "Trust & Security",
    text:
      "Security, privacy and assurance information stays in the dedicated trust area.",
    href: "/trust",
    action: "Explore trust",
  },
];


export default function ResourcesPage() {
  const [activeFormat, setActiveFormat] =
    useState(0);

  const [paused, setPaused] =
    useState(false);


  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveFormat((current) =>
        (current + 1) % formats.length
      );
    }, 2000);

    return () => {
      window.clearInterval(timer);
    };
  }, [paused]);


  const active = formats[activeFormat];

  const ActiveIcon = active.icon;


  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Resources
              </p>

              <h1>
                Think more clearly about enterprise AI.
              </h1>
            </div>

            <div className={styles.heroIntro}>
              <p>
                AIGO-OS Resources brings together perspectives,
                research and practical thinking on AI governance,
                enterprise context and business impact.
              </p>

              <p>
                The focus is not content volume. It is material that
                helps enterprise leaders understand the questions
                surrounding AI more clearly.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.positionSection}>
        <PublicContainer>
          <div className={styles.positionCard}>
            <span className={styles.positionEyebrow}>
              AIGO-OS perspective
            </span>

            <h2>
              AI becomes more useful to management when it can be
              understood as part of the business around it.
            </h2>

            <p>
              Our resource program focuses on the questions between
              AI activity and enterprise decision-making: who is
              accountable, what authority exists, what the business
              depends on, what changed and what requires attention.
            </p>
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
                The questions we keep coming back to.
              </h2>
            </div>

            <p>
              These themes reflect the problems AIGO-OS is built
              around without turning the resource library into
              product documentation.
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
                        size={24}
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


      <section className={styles.librarySection}>
        <PublicContainer>
          <div className={styles.libraryLayout}>
            <div className={styles.libraryIntro}>
              <p className={styles.sectionLabelLight}>
                Resource library
              </p>

              <h2>
                Different formats. One point of view.
              </h2>

              <p>
                The library will expand through original AIGO-OS
                material designed for enterprise leaders, governance
                teams and people responsible for understanding AI
                in business context.
              </p>

              <div
                className={styles.formatSelectors}
                aria-label="Resource formats"
              >
                {formats.map((format, index) => (
                  <button
                    key={format.title}
                    type="button"
                    className={
                      index === activeFormat
                        ? `${styles.formatSelector} ${styles.formatSelectorActive}`
                        : styles.formatSelector
                    }
                    onClick={() =>
                      setActiveFormat(index)
                    }
                    aria-label={`Show ${format.title}`}
                    aria-pressed={
                      index === activeFormat
                    }
                  >
                    <span>
                      {format.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>


            <div
              className={styles.flashStage}
              onMouseEnter={() =>
                setPaused(true)
              }
              onMouseLeave={() =>
                setPaused(false)
              }
              onFocusCapture={() =>
                setPaused(true)
              }
              onBlurCapture={() =>
                setPaused(false)
              }
            >
              <article
                key={activeFormat}
                className={styles.flashCard}
              >
                <div className={styles.flashTop}>
                  <div className={styles.flashIcon}>
                    <ActiveIcon
                      size={27}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <span className={styles.flashStatus}>
                    {active.status}
                  </span>
                </div>

                <div className={styles.flashCopy}>
                  <span className={styles.flashEyebrow}>
                    {active.eyebrow}
                  </span>

                  <h3>
                    {active.title}
                  </h3>

                  <p>
                    {active.text}
                  </p>
                </div>
              </article>

              <div
                className={styles.flashProgress}
                aria-hidden="true"
              >
                {formats.map((format, index) => (
                  <span
                    key={format.title}
                    className={
                      index === activeFormat
                        ? styles.flashProgressActive
                        : ""
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.boundarySection}>
        <PublicContainer>
          <div className={styles.boundaryHeader}>
            <p className={styles.sectionLabel}>
              Find the right place
            </p>

            <h2>
              Resources is for thinking and learning.
            </h2>

            <p>
              Product implementation, product support and trust
              information each have their own dedicated home.
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
                  <div className={styles.boundaryIcon}>
                    <Icon
                      size={21}
                      strokeWidth={1.7}
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
                    <span>
                      {item.action}
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </PublicContainer>
      </section>


      <section className={styles.finalSection}>
        <PublicContainer>
          <div className={styles.finalPanel}>
            <div>
              <p className={styles.finalEyebrow}>
                Continue the conversation
              </p>

              <h2>
                Have an enterprise AI question that needs more than an article?
              </h2>

              <p>
                Talk with us about AI governance, business impact
                or how AIGO-OS may fit into your enterprise
                environment.
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

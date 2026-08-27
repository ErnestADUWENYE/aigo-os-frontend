"use client";

import Link from "next/link";

import {
  ArrowRight,
  BrainCircuit,
  CircleAlert,
  FileText,
  GitBranch,
  Layers3,
  Network,
  SearchCheck,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


const reasoningExamples = [
  {
    mode: "Governance interpretation",
    question:
      "What does this requirement mean for this service?",
    evidence: [
      ["Requirement", "Privileged access must be periodically reviewed"],
      ["Service context", "Production business application"],
      ["Organisation rule", "Quarterly review is the approved standard"],
      ["Control relationship", "Access review control applies"],
    ],
    answer:
      "The service is in scope and the implementing control must demonstrate a quarterly privileged-access review.",
  },
  {
    mode: "Applicability reasoning",
    question:
      "Does this control apply to the enterprise object?",
    evidence: [
      ["Control objective", "Protect privileged administrative access"],
      ["Object context", "Production application"],
      ["Access model", "Privileged administration is used"],
      ["Governance scope", "Production services are included"],
    ],
    answer:
      "Yes. The object meets the organisation&apos;s approved applicability conditions for this control.",
  },
  {
    mode: "Evidence interpretation",
    question:
      "What evidence would actually demonstrate this control?",
    evidence: [
      ["Control intent", "Privileged access is periodically reviewed"],
      ["Operating model", "Quarterly certification"],
      ["Evidence source", "Identity governance platform"],
      ["Required proof", "Completed review and disposition record"],
    ],
    answer:
      "Evidence should show the completed quarterly review, the population reviewed and the resulting access decisions.",
  },
  {
    mode: "Business-impact reasoning",
    question:
      "What does this technology incident mean to the business?",
    evidence: [
      ["Incident", "Shared identity capability degraded"],
      ["Dependencies", "Multiple services rely on it"],
      ["Business context", "Customer and employee access"],
      ["Current state", "Authentication failures increasing"],
    ],
    answer:
      "The incident can affect access across several business services because they share the same identity dependency.",
  },
];


const reasoningInputs = [
  {
    icon: FileText,
    label: "Authoritative content",
    title: "Policies, requirements and standards",
    text:
      "Use the organisation&apos;s approved governance content rather than generic assumptions.",
  },
  {
    icon: Layers3,
    label: "Enterprise context",
    title: "Ownership, purpose and classification",
    text:
      "Use the organisational meaning already established around the enterprise object.",
  },
  {
    icon: GitBranch,
    label: "Relationships",
    title: "Dependencies and connected structure",
    text:
      "Follow what applies, what supports what and where consequences can propagate.",
  },
  {
    icon: Workflow,
    label: "Current state",
    title: "Changes, incidents and assurance results",
    text:
      "Reason with current enterprise conditions rather than a static historical snapshot.",
  },
];


export default function ContextualReasoningPage() {
  const [activeExample, setActiveExample] = useState(0);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveExample((current) =>
        (current + 1) % reasoningExamples.length
      );
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const active = reasoningExamples[activeExample];

  return (
    <>
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className={styles.hero}>
        <PublicContainer>

          <div className={styles.platformIdentity}>
            <span>
              AIGO-OS PLATFORM
            </span>

            <strong>
              CONTEXTUAL REASONING
            </strong>
          </div>


          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>

              <h1>
                <span>
                  Understand what connected information
                </span>

                <span>
                  actually means here.
                </span>
              </h1>

              <p className={styles.heroText}>
                AIGO-OS reasons across authoritative enterprise information,
                organisational meaning, relationships and current conditions
                to answer governance and business-impact questions in the
                context of the organisation.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/talk-to-an-expert"
                  className={styles.primaryButton}
                >
                  Talk to an Expert
                </Link>

                <Link
                  href="/platform"
                  className={styles.secondaryButton}
                >
                  Platform Overview
                </Link>
              </div>

            </div>


            {/* =================================================
                LIVE REASONING WORKSPACE
                ================================================= */}

            <div className={styles.reasoningWorkspace}>

              <div className={styles.workspaceHeader}>
                <div>
                  <span>
                    LIVE CONTEXTUAL REASONING
                  </span>

                  <strong>
                    Relevant enterprise context is brought into the question.
                  </strong>
                </div>

                <div className={styles.reasoningStatus}>
                  <i aria-hidden="true" />
                  Reasoning
                </div>
              </div>


              <div
                key={activeExample}
                className={styles.workspaceBody}
              >

                <div className={styles.questionPanel}>
                  <span>
                    {active.mode}
                  </span>

                  <strong>
                    {active.question}
                  </strong>
                </div>


                <div className={styles.reasoningEvidence}>
                  {active.evidence.map(([label, value], index) => (
                    <div
                      key={label}
                      style={{
                        animationDelay:
                          `${index * 120}ms`,
                      }}
                    >
                      <span>
                        {label}
                      </span>

                      <strong>
                        {value}
                      </strong>
                    </div>
                  ))}
                </div>


                <div className={styles.reasoningProcess}>
                  <div className={styles.reasoningCore}>
                    <BrainCircuit
                      size={20}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />

                    <div>
                      <span>
                        AIGO-OS
                      </span>

                      <strong>
                        Reason across context
                      </strong>
                    </div>
                  </div>

                  <div className={styles.reasoningProgress}>
                    <i />
                  </div>
                </div>


                <div className={styles.answerPanel}>
                  <span>
                    Contextual answer
                  </span>

                  <strong>
                    {active.answer}
                  </strong>
                </div>

              </div>


              <div className={styles.workspaceControls}>
                {reasoningExamples.map((item, index) => (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() =>
                      setActiveExample(index)
                    }
                    className={
                      index === activeExample
                        ? styles.controlActive
                        : styles.control
                    }
                    aria-label={`Show ${item.mode}`}
                  >
                    <span />
                  </button>
                ))}
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          WHY
          ===================================================== */}

      <section className={styles.problemSection}>
        <PublicContainer>

          <div className={styles.problemGrid}>

            <p className={styles.sectionLabel}>
              WHY REASONING MATTERS
            </p>

            <div>
              <h2>
                Connected facts are useful. Understanding what they mean together is more useful.
              </h2>

              <p>
                A policy requirement, application classification, control
                relationship or operational event carries only part of the
                answer on its own.
              </p>

              <p>
                Contextual Reasoning combines those facts using the meaning
                already established inside the organisation, while preserving
                the context behind each one.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          INPUTS
          ===================================================== */}

      <section className={styles.inputSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabelLight}>
                REASONING INPUTS
              </p>

              <h2>
                A conclusion should reflect the enterprise, not a single isolated record.
              </h2>
            </div>

            <p>
              AIGO-OS reasons across authoritative information, enterprise
              context, relationships and current conditions before producing
              a contextual answer.
            </p>
          </div>


          <div className={styles.inputGrid}>
            {reasoningInputs.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={styles.inputCard}
                >
                  <div className={styles.inputCardTop}>
                    <Icon
                      size={19}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />

                    <span>
                      {item.label}
                    </span>
                  </div>

                  <strong>
                    {item.title}
                  </strong>

                  <p>
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          GOVERN
          ===================================================== */}

      <section className={styles.governSection}>
        <PublicContainer>

          <div className={styles.useCaseGrid}>

            <div className={styles.useCaseCopy}>
              <p className={styles.sectionLabel}>
                AIGO-OS GOVERN
              </p>

              <h2>
                Help people understand what governance means here.
              </h2>

              <p>
                Govern uses contextual reasoning to explain policies,
                requirements, control objectives, applicability and evidence
                expectations using the organisation&apos;s own approved context.
              </p>
            </div>


            <div className={styles.governReasoning}>

              <div className={styles.useCaseQuestion}>
                <SearchCheck
                  size={19}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    Governance question
                  </span>

                  <strong>
                    What evidence would demonstrate this control?
                  </strong>
                </div>
              </div>


              <div className={styles.reasoningSteps}>

                <div>
                  <span>
                    Control intent
                  </span>

                  <strong>
                    Privileged access is reviewed
                  </strong>
                </div>

                <div>
                  <span>
                    Organisation standard
                  </span>

                  <strong>
                    Quarterly certification
                  </strong>
                </div>

                <div>
                  <span>
                    Evidence source
                  </span>

                  <strong>
                    Identity governance platform
                  </strong>
                </div>

              </div>


              <div className={styles.useCaseResult}>
                <span>
                  Contextual interpretation
                </span>

                <strong>
                  Provide the completed quarterly review, the population
                  assessed and the resulting access decisions.
                </strong>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          IMPACT
          ===================================================== */}

      <section className={styles.impactSection}>
        <PublicContainer>

          <div className={styles.useCaseGridReverse}>

            <div className={styles.impactReasoning}>

              <div className={styles.useCaseQuestionDark}>
                <CircleAlert
                  size={19}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    Business-impact question
                  </span>

                  <strong>
                    What does this technology incident mean to the business?
                  </strong>
                </div>
              </div>


              <div className={styles.impactPath}>

                <div>
                  <span>
                    Incident
                  </span>

                  <strong>
                    Shared identity capability degraded
                  </strong>
                </div>

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    Dependencies
                  </span>

                  <strong>
                    Multiple services affected
                  </strong>
                </div>

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    Business context
                  </span>

                  <strong>
                    Customer and employee access
                  </strong>
                </div>

              </div>


              <div className={styles.impactResult}>
                <span>
                  Contextual interpretation
                </span>

                <strong>
                  The incident can affect access across several business
                  services because they share the same identity dependency.
                </strong>
              </div>

            </div>


            <div className={styles.useCaseCopyDark}>
              <p className={styles.sectionLabelLight}>
                AIGO-OS IMPACT
              </p>

              <h2>
                Translate technical conditions into business consequence.
              </h2>

              <p>
                Impact uses contextual reasoning to follow dependency paths,
                combine them with business context and explain what a change,
                incident or failure means to the organisation.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          REASONING DISCIPLINE
          ===================================================== */}

      <section className={styles.disciplineSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>
                REASONING DISCIPLINE
              </p>

              <h2>
                Reason from enterprise evidence. Surface uncertainty when the answer is not established.
              </h2>
            </div>

            <p>
              Contextual reasoning remains bounded by the quality,
              authority and completeness of connected enterprise information.
            </p>
          </div>


          <div className={styles.disciplineGrid}>

            <div>
              <ShieldCheck
                size={19}
                aria-hidden="true"
              />

              <span>
                Authoritative information
              </span>

              <strong>
                Prefer approved enterprise information over unsupported assumptions.
              </strong>
            </div>


            <div>
              <Network
                size={19}
                aria-hidden="true"
              />

              <span>
                Connected context
              </span>

              <strong>
                Keep conclusions grounded in actual enterprise relationships and meaning.
              </strong>
            </div>


            <div>
              <CircleAlert
                size={19}
                aria-hidden="true"
              />

              <span>
                Uncertainty
              </span>

              <strong>
                Make ambiguity visible when the available enterprise context is insufficient.
              </strong>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          PRODUCTS
          ===================================================== */}

      <section className={styles.productSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabelLight}>
                SHARED REASONING FOUNDATION
              </p>

              <h2>
                Govern and Impact use the same context to answer different questions.
              </h2>
            </div>

            <p>
              The platform provides contextual reasoning. The products apply
              that capability to governance and business-impact questions.
            </p>
          </div>


          <div className={styles.productGrid}>

            <Link
              href="/products/aigo-os-govern"
              className={styles.productCard}
            >
              <span>
                AIGO-OS GOVERN
              </span>

              <h3>
                What does governance mean here?
              </h3>

              <p>
                Interpret policies, requirements, controls, evidence,
                applicability, coverage and assurance conditions using
                organisation-specific context.
              </p>

              <strong>
                Explore Govern
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                />
              </strong>
            </Link>


            <Link
              href="/products/aigo-os-impact"
              className={styles.productCard}
            >
              <span>
                AIGO-OS IMPACT
              </span>

              <h3>
                What does this mean to the business?
              </h3>

              <p>
                Interpret incidents, change and dependencies against
                business services, processes, customers and operating context.
              </p>

              <strong>
                Explore Impact
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                />
              </strong>
            </Link>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          NEXT
          ===================================================== */}

      <section className={styles.nextSection}>
        <PublicContainer>

          <Link
            href="/platform/explainability-traceability"
            className={styles.nextCapability}
          >
            <div>
              <span>
                Explore next
              </span>

              <strong>
                Explainability & Traceability
              </strong>

              <p>
                Contextual Reasoning produces the interpretation.
                Explainability & Traceability shows the sources, relationships
                and enterprise context behind it.
              </p>
            </div>

            <ArrowRight
              size={22}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </Link>

        </PublicContainer>
      </section>

    </>
  );
}


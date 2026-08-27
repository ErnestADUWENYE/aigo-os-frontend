"use client";

import Link from "next/link";

import {
  ArrowRight,
  CircleAlert,
  Clock3,
  FileText,
  GitBranch,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


const traceExamples = [
  {
    type: "Governance conclusion",
    conclusion:
      "This requirement applies to the enterprise service.",
    steps: [
      {
        label: "Authoritative source",
        value: "Information Security Standard",
        meta: "Approved policy repository",
      },
      {
        label: "Requirement",
        value: "Privileged access must be reviewed periodically",
        meta: "Governance requirement",
      },
      {
        label: "Enterprise context",
        value: "Production service with privileged administration",
        meta: "Current object context",
      },
      {
        label: "Relationship",
        value: "Requirement applies to this governed population",
        meta: "Established applicability relationship",
      },
    ],
    freshness: "Current",
  },

  {
    type: "Coverage conclusion",
    conclusion:
      "Five governed services may no longer have complete coverage.",
    steps: [
      {
        label: "Policy change",
        value: "Requirement revised",
        meta: "Policy repository",
      },
      {
        label: "Control mapping",
        value: "Three connected controls",
        meta: "GRC control library",
      },
      {
        label: "Governed population",
        value: "Twenty-seven connected services",
        meta: "Service inventory",
      },
      {
        label: "Exception result",
        value: "Five services lack complete mapped coverage",
        meta: "Current evaluation",
      },
    ],
    freshness: "Re-evaluated after change",
  },

  {
    type: "Business-impact conclusion",
    conclusion:
      "Customer access has material exposure.",
    steps: [
      {
        label: "Operational signal",
        value: "Identity capability degraded",
        meta: "Observability platform",
      },
      {
        label: "Dependency",
        value: "Four customer-facing channels depend on it",
        meta: "Enterprise relationship context",
      },
      {
        label: "Business context",
        value: "Critical digital access capability",
        meta: "Business service context",
      },
      {
        label: "Impact interpretation",
        value: "Customer access is materially exposed",
        meta: "Current AIGO-OS conclusion",
      },
    ],
    freshness: "Current incident state",
  },
];


const traceElements = [
  {
    icon: FileText,
    label: "Source",
    title: "Where the information came from",
    text:
      "Keep the authoritative system, record or document behind a material conclusion visible.",
  },
  {
    icon: GitBranch,
    label: "Relationship path",
    title: "How connected information led to the result",
    text:
      "Show the governance, technology and business relationships followed when the conclusion was produced.",
  },
  {
    icon: Network,
    label: "Enterprise context",
    title: "Which conditions influenced the conclusion",
    text:
      "Expose ownership, classification, business role and other organisational meaning used in the interpretation.",
  },
  {
    icon: Clock3,
    label: "Freshness",
    title: "How current the supporting information is",
    text:
      "Show when relevant information was observed, changed or last evaluated.",
  },
];


export default function ExplainabilityTraceabilityPage() {
  const [activeTrace, setActiveTrace] = useState(0);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveTrace((current) =>
        (current + 1) % traceExamples.length
      );
    }, 5600);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const active = traceExamples[activeTrace];

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
              EXPLAINABILITY & TRACEABILITY
            </strong>
          </div>


          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>

              <h1>
                <span>
                  See why AIGO-OS reached
                </span>

                <span>
                  the conclusion it did.
                </span>
              </h1>

              <p className={styles.heroText}>
                Material AIGO-OS conclusions remain connected to the
                authoritative sources, enterprise context, relationships
                and current conditions that support them.
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
                LIVE TRACE
                ================================================= */}

            <div className={styles.traceWorkspace}>

              <div className={styles.traceHeader}>
                <div>
                  <span>
                    LIVE CONCLUSION TRACE
                  </span>

                  <strong>
                    Follow a conclusion back to the enterprise evidence behind it.
                  </strong>
                </div>

                <div className={styles.traceStatus}>
                  <i aria-hidden="true" />
                  Trace available
                </div>
              </div>


              <div
                key={activeTrace}
                className={styles.traceBody}
              >

                <div className={styles.traceConclusion}>
                  <span>
                    {active.type}
                  </span>

                  <strong>
                    {active.conclusion}
                  </strong>

                  <small>
                    AIGO-OS conclusion
                  </small>
                </div>


                <div className={styles.traceReveal}>
                  <span className={styles.traceSpine} />

                  {active.steps.map((step, index) => (
                    <div
                      key={step.label}
                      className={styles.traceStep}
                      style={{
                        animationDelay:
                          `${index * 160}ms`,
                      }}
                    >
                      <i aria-hidden="true" />

                      <div>
                        <span>
                          {step.label}
                        </span>

                        <strong>
                          {step.value}
                        </strong>

                        <small>
                          {step.meta}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>


                <div className={styles.freshnessBar}>
                  <Clock3
                    size={14}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <span>
                    Supporting state
                  </span>

                  <strong>
                    {active.freshness}
                  </strong>
                </div>

              </div>


              <div className={styles.traceControls}>
                {traceExamples.map((item, index) => (
                  <button
                    key={item.conclusion}
                    type="button"
                    onClick={() =>
                      setActiveTrace(index)
                    }
                    className={
                      index === activeTrace
                        ? styles.controlActive
                        : styles.control
                    }
                    aria-label={`Show ${item.type}`}
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
              WHY EXPLAINABILITY MATTERS
            </p>

            <div>
              <h2>
                Enterprise intelligence should not become another black box.
              </h2>

              <p>
                Governance and business-impact conclusions can influence
                management attention, assurance activity and operational
                decisions.
              </p>

              <p>
                AIGO-OS keeps material conclusions inspectable so users can
                understand the enterprise evidence, context and relationships
                that support them.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          TRACE ELEMENTS
          ===================================================== */}

      <section className={styles.traceSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>
              <p className={styles.sectionLabelLight}>
                WHAT REMAINS TRACEABLE
              </p>

              <h2>
                Keep conclusions connected to the evidence behind them.
              </h2>
            </div>

            <p>
              Explainability here is not a generic description of an
              algorithm. It is the ability to inspect the enterprise
              information that supports a particular AIGO-OS conclusion.
            </p>

          </div>


          <div className={styles.traceElementGrid}>
            {traceElements.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={styles.traceElementCard}
                >
                  <div className={styles.traceElementTop}>
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

          <div className={styles.featureGrid}>

            <div className={styles.featureCopy}>
              <p className={styles.sectionLabel}>
                AIGO-OS GOVERN
              </p>

              <h2>
                Show why a governance conclusion exists.
              </h2>

              <p>
                Govern can expose the policies, requirements, organisation
                definitions, controls, service context and mappings behind
                an interpretation or governance finding.
              </p>
            </div>


            <div className={styles.governTrace}>

              <div className={styles.findingHeader}>
                <span>
                  Governance finding
                </span>

                <strong>
                  Five governed services may no longer have complete coverage.
                </strong>
              </div>


              <div className={styles.findingEvidence}>
                <div>
                  <span>
                    Policy change
                  </span>

                  <strong>
                    Requirement revised
                  </strong>
                </div>

                <div>
                  <span>
                    Connected controls
                  </span>

                  <strong>
                    3
                  </strong>
                </div>

                <div>
                  <span>
                    Governed population
                  </span>

                  <strong>
                    27 services
                  </strong>
                </div>

                <div>
                  <span>
                    Coverage exceptions
                  </span>

                  <strong>
                    5 services
                  </strong>
                </div>
              </div>


              <div className={styles.sourceFooter}>
                <ShieldCheck
                  size={15}
                  aria-hidden="true"
                />

                <span>
                  Policy repository · control library · service inventory
                </span>
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

          <div className={styles.featureGridReverse}>

            <div className={styles.impactTrace}>

              <div className={styles.impactFinding}>
                <span>
                  Business-impact finding
                </span>

                <strong>
                  Customer access has material exposure.
                </strong>
              </div>


              <div className={styles.impactPath}>

                <div>
                  <span>
                    Incident
                  </span>

                  <strong>
                    Identity capability degraded
                  </strong>
                </div>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    Shared dependency
                  </span>

                  <strong>
                    Four customer channels
                  </strong>
                </div>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    Business context
                  </span>

                  <strong>
                    Critical digital access
                  </strong>
                </div>

              </div>


              <div className={styles.sourceFooterDark}>
                <Workflow
                  size={15}
                  aria-hidden="true"
                />

                <span>
                  Observability · service inventory · dependency context
                </span>
              </div>

            </div>


            <div className={styles.featureCopyDark}>
              <p className={styles.sectionLabelLight}>
                AIGO-OS IMPACT
              </p>

              <h2>
                Show why a technical condition matters to the business.
              </h2>

              <p>
                Impact can expose the dependency path, business services,
                criticality and operating context that caused an incident
                or change to be considered significant.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          GAPS & AMBIGUITY
          ===================================================== */}

      <section className={styles.ambiguitySection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>
              <p className={styles.sectionLabel}>
                WHEN THE EVIDENCE IS NOT ENOUGH
              </p>

              <h2>
                Explainability should also expose uncertainty.
              </h2>
            </div>

            <p>
              Missing, stale, contradictory or insufficiently authoritative
              information should remain visible rather than being hidden
              behind a confident-looking answer.
            </p>

          </div>


          <div className={styles.ambiguityExperience}>

            <div className={styles.ambiguityIssue}>
              <CircleAlert
                size={19}
                aria-hidden="true"
              />

              <span>
                Conflicting enterprise context
              </span>

              <strong>
                Service ownership differs between two connected sources.
              </strong>
            </div>


            <div className={styles.ambiguitySources}>
              <div>
                <span>
                  ITSM
                </span>

                <strong>
                  Digital Operations
                </strong>
              </div>

              <div>
                <span>
                  Architecture
                </span>

                <strong>
                  Platform Engineering
                </strong>
              </div>
            </div>


            <div className={styles.ambiguityResponse}>
              <span>
                AIGO-OS response
              </span>

              <strong>
                Ownership is ambiguous. Resolve the authoritative source
                before relying on ownership-sensitive conclusions.
              </strong>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          HISTORY
          ===================================================== */}

      <section className={styles.historySection}>
        <PublicContainer>

          <div className={styles.featureGrid}>

            <div className={styles.featureCopyDark}>
              <p className={styles.sectionLabelLight}>
                INTELLIGENCE OVER TIME
              </p>

              <h2>
                See how a conclusion changed when the enterprise changed.
              </h2>

              <p>
                Where appropriate, AIGO-OS can retain enough history to show
                how a conclusion changed as sources, relationships and
                enterprise context changed.
              </p>
            </div>


            <div className={styles.historyTimeline}>

              <div>
                <span>
                  09:12
                </span>

                <strong>
                  Requirement updated
                </strong>

                <small>
                  Source information changed
                </small>
              </div>

              <div>
                <span>
                  09:13
                </span>

                <strong>
                  Relationships re-evaluated
                </strong>

                <small>
                  Connected population refreshed
                </small>
              </div>

              <div>
                <span>
                  09:14
                </span>

                <strong>
                  Conclusion updated
                </strong>

                <small>
                  Exceptions surfaced
                </small>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          CLOSE
          ===================================================== */}

      <section className={styles.closeSection}>
        <PublicContainer>

          <div className={styles.closePanel}>

            <div>
              <p className={styles.sectionLabelLight}>
                INSPECTABLE ENTERPRISE INTELLIGENCE
              </p>

              <h2>
                Use AIGO-OS conclusions without losing sight of the evidence behind them.
              </h2>

              <p>
                Explainability & Traceability completes the intelligence loop:
                conclusions remain connected to the enterprise information
                from which they were derived.
              </p>
            </div>


            <div className={styles.closeActions}>
              <Link
                href="/platform"
                className={styles.closePrimary}
              >
                Platform Overview
              </Link>

              <Link
                href="/products"
                className={styles.closeSecondary}
              >
                Explore Products
              </Link>
            </div>

          </div>

        </PublicContainer>
      </section>

    </>
  );
}


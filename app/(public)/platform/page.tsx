"use client";

import Link from "next/link";

import {
  ArrowRight,
  BrainCircuit,
  GitBranch,
  Layers3,
  Network,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { PublicContainer } from "@/components/public/public-container";
import { platformCapabilities } from "@/components/platform/platform-capabilities";

import styles from "./page.module.css";


const platformViews = [
  {
    label: "Enterprise systems",
    title: "Authoritative information connected",
    detail:
      "Governance, technology, AI and business information remains in the systems responsible for it.",
  },
  {
    label: "Enterprise context",
    title: "Organisational meaning established",
    detail:
      "Ownership, purpose, classification, governance and business context are understood consistently.",
  },
  {
    label: "Relationships",
    title: "Dependencies understood",
    detail:
      "AIGO-OS understands how enterprise objects connect, apply to and depend on one another.",
  },
  {
    label: "Continuous intelligence",
    title: "Context remains current",
    detail:
      "Meaningful enterprise change can trigger renewed context, applicability and exposure analysis.",
  },
  {
    label: "Contextual reasoning",
    title: "Enterprise questions interpreted",
    detail:
      "Connected context is used to answer governance and business-impact questions.",
  },
  {
    label: "Explainability",
    title: "Conclusions remain traceable",
    detail:
      "Material conclusions remain connected to the sources and enterprise context behind them.",
  },
];


const capabilityIcons = {
  "enterprise-connectivity": RadioTower,
  "enterprise-context": Layers3,
  "relationship-dependency-intelligence": Network,
  "continuous-intelligence": GitBranch,
  "contextual-reasoning": BrainCircuit,
  "explainability-traceability": ShieldCheck,
} as const;


export default function PlatformPage() {
  const [activeView, setActiveView] = useState(0);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveView((current) =>
        (current + 1) % platformViews.length
      );
    }, 4800);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const active = platformViews[activeView];

  return (
    <>
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className={styles.hero}>
        <PublicContainer>

          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>

              <p className={styles.eyebrow}>
                AIGO-OS PLATFORM
              </p>

              <h1>
                <span>
                  Connect the enterprise.
                </span>

                <span>
                  Understand what it means together.
                </span>
              </h1>

              <p className={styles.heroText}>
                AIGO-OS connects governance, technology, AI and business
                information already distributed across the enterprise and
                turns that connected context into intelligence for Govern
                and Impact.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/talk-to-an-expert"
                  className={styles.primaryButton}
                >
                  Talk to an Expert
                </Link>

                <Link
                  href="/products"
                  className={styles.secondaryButton}
                >
                  Explore Products
                </Link>
              </div>

            </div>


            {/* =================================================
                LIVE PLATFORM FOUNDATION
                ================================================= */}

            <div className={styles.platformVisual}>

              <div className={styles.visualHeader}>
                <div>
                  <span>
                    SHARED INTELLIGENCE FOUNDATION
                  </span>

                  <strong>
                    Enterprise understanding in context
                  </strong>
                </div>

                <div className={styles.visualStatus}>
                  <i aria-hidden="true" />
                  Current
                </div>
              </div>


              <div
                key={activeView}
                className={styles.visualStage}
              >

                <div className={styles.platformCore}>
                  <span>
                    AIGO-OS
                  </span>

                  <strong>
                    Shared enterprise intelligence
                  </strong>

                  <small>
                    One foundation for Govern and Impact
                  </small>
                </div>

<div className={styles.platformSignal}>
                  <i />
                </div>

<div className={styles.activePlatformView}>
                  <span>
                    {active.label}
                  </span>

                  <strong>
                    {active.title}
                  </strong>

                  <p>
                    {active.detail}
                  </p>
                </div>

              </div>


              <div className={styles.visualProducts}>
                <span>
                  AIGO-OS Govern
                </span>

                <span>
                  AIGO-OS Impact
                </span>
              </div>


              <div className={styles.visualControls}>
                {platformViews.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() =>
                      setActiveView(index)
                    }
                    className={
                      index === activeView
                        ? styles.controlActive
                        : styles.control
                    }
                    aria-label={`Show ${item.label}`}
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
          ENTERPRISE PROBLEM
          ===================================================== */}

      <section className={styles.problemSection}>
        <PublicContainer>

          <div className={styles.problemGrid}>

            <p className={styles.sectionLabel}>
              THE ENTERPRISE PROBLEM
            </p>

            <div>
              <h2>
                The information already exists. The understanding is fragmented.
              </h2>

              <p>
                Governance records, policies, controls, applications,
                services, incidents, dependencies, architecture, data and AI
                are often distributed across specialised enterprise systems.
              </p>

              <p>
                Each system can be correct on its own while the meaning between
                those records remains difficult to reconstruct. AIGO-OS creates
                the shared intelligence layer needed to understand that
                enterprise picture together.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          CAPABILITIES
          ===================================================== */}

      <section className={styles.capabilitySection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>
              <p className={styles.sectionLabel}>
                PLATFORM CAPABILITIES
              </p>

              <h2>
                Six shared capabilities support Govern and Impact.
              </h2>
            </div>

            <p>
              Each capability solves a different part of the same problem:
              turning distributed enterprise information into connected,
              current and explainable intelligence.
            </p>

          </div>


          <div className={styles.capabilityGrid}>

            {platformCapabilities.map((capability) => {
              const Icon =
                capabilityIcons[
                  capability.slug as keyof typeof capabilityIcons
                ];

              return (
                <Link
                  key={capability.slug}
                  href={`/platform/${capability.slug}`}
                  className={styles.capabilityCard}
                >

                  <div className={styles.capabilityTop}>
                    <div className={styles.capabilityIcon}>
                      <Icon
                        size={20}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <ArrowRight
                      size={16}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>


                  <div className={styles.capabilityBody}>

                    <span>
                      {capability.question}
                    </span>

                    <h3>
                      {capability.name}
                    </h3>

                    <p>
                      {capability.short}
                    </p>

                  </div>

                </Link>
              );
            })}

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
    HOW THE PLATFORM WORKS
    ===================================================== */}

<section className={styles.foundationSection}>
  <PublicContainer>

    <div className={styles.foundationGrid}>

      <div className={styles.foundationCopy}>
        <p className={styles.sectionLabelLight}>
          HOW AIGO-OS BUILDS INTELLIGENCE
        </p>

        <h2>
          Turn distributed enterprise information into connected intelligence.
        </h2>

        <p>
          AIGO-OS preserves the authority of existing enterprise systems
          while adding organisational meaning, relationships, current state,
          reasoning and traceability across them.
        </p>
      </div>


      <div className={styles.intelligencePipeline}>

        <div className={styles.pipelineHeader}>
          <span>
            AIGO-OS INTELLIGENCE BUILD
          </span>

          <strong>
            Enterprise understanding becomes progressively richer.
          </strong>
        </div>


        <div className={styles.pipelineBody}>

          <div className={styles.pipelineSource}>
            <span>
              Authoritative enterprise information
            </span>

            <strong>
              Connected record
            </strong>

            <small>
              Information remains governed by the systems responsible for it.
            </small>
          </div>


          <div className={styles.pipelineConnector}>
            <span />
          </div>


          <div className={styles.pipelineStage}>

            <div
              className={`${styles.pipelineState} ${styles.stateConnect}`}
            >
              <span>
                Connected
              </span>

              <strong>
                Enterprise object available
              </strong>

              <p>
                AIGO-OS can work with authoritative enterprise information.
              </p>
            </div>


            <div
              className={`${styles.pipelineState} ${styles.stateContext}`}
            >
              <span>
                Context established
              </span>

              <strong>
                Organisational meaning added
              </strong>

              <p>
                Ownership, purpose, classification and governance context
                become part of the object.
              </p>
            </div>


            <div
              className={`${styles.pipelineState} ${styles.stateRelationships}`}
            >
              <span>
                Relationships understood
              </span>

              <strong>
                Connections and dependencies resolved
              </strong>

              <p>
                AIGO-OS understands what applies, what depends on what and
                what the object affects.
              </p>
            </div>


            <div
              className={`${styles.pipelineState} ${styles.stateCurrent}`}
            >
              <span>
                Current state maintained
              </span>

              <strong>
                Enterprise understanding stays current
              </strong>

              <p>
                Meaningful change can trigger refreshed context and
                relationship evaluation.
              </p>
            </div>


            <div
              className={`${styles.pipelineState} ${styles.stateReasoning}`}
            >
              <span>
                Contextual reasoning
              </span>

              <strong>
                Connected information becomes usable meaning
              </strong>

              <p>
                AIGO-OS can answer governance and business-impact questions
                using organisation-specific context.
              </p>
            </div>


            <div
              className={`${styles.pipelineState} ${styles.stateTraceability}`}
            >
              <span>
                Explainable intelligence
              </span>

              <strong>
                Conclusions remain traceable
              </strong>

              <p>
                Material conclusions remain connected to the sources,
                relationships and context behind them.
              </p>
            </div>

          </div>


          <div className={styles.pipelineConnector}>
            <span />
          </div>


          <div className={styles.pipelineResult}>
            <span>
              AIGO-OS ENTERPRISE INTELLIGENCE
            </span>

            <strong>
              Shared intelligence for Govern and Impact
            </strong>

            <div>
              <small>
                Govern
              </small>

              <small>
                Impact
              </small>
            </div>
          </div>

        </div>


        <div className={styles.pipelineFooter}>
          <span>
            Authoritative systems remain authoritative.
          </span>

          <span>
            AIGO-OS connects the meaning between them.
          </span>
        </div>

      </div>

    </div>

  </PublicContainer>
</section>


      {/* =====================================================
          PRODUCT USE
          ===================================================== */}

      <section className={styles.productsSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>
              <p className={styles.sectionLabel}>
                BUILT INTO AIGO-OS PRODUCTS
              </p>

              <h2>
                One platform. Two intelligence products.
              </h2>
            </div>

            <p>
              Govern and Impact use the same enterprise foundation but apply
              it to different management questions.
            </p>

          </div>


          <div className={styles.productGrid}>

            <Link
              href="/products/aigo-os-govern"
              className={styles.productCard}
            >

              <span className={styles.productLabel}>
                GOVERNANCE INTELLIGENCE
              </span>

              <h3>
                AIGO-OS Govern
              </h3>

              <p>
                Understand what governance requirements mean, where they
                apply, what evidence is expected, whether coverage remains
                complete and where governance attention is required.
              </p>

              <strong>
                Explore Govern
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                />
              </strong>

            </Link>


            <Link
              href="/products/aigo-os-impact"
              className={styles.productCard}
            >

              <span className={styles.productLabel}>
                BUSINESS IMPACT INTELLIGENCE
              </span>

              <h3>
                AIGO-OS Impact
              </h3>

              <p>
                Understand what a change, dependency, incident or failure
                means to business services, processes, customers and
                operating outcomes.
              </p>

              <strong>
                Explore Impact
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                />
              </strong>

            </Link>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          FINAL
          ===================================================== */}

      <section className={styles.finalSection}>
        <PublicContainer>

          <div className={styles.finalPanel}>

            <div>
              <p className={styles.sectionLabelLight}>
                AIGO-OS PLATFORM
              </p>

              <h2>
                Start with the enterprise information you already have.
              </h2>

              <p>
                AIGO-OS works with authoritative enterprise systems already
                maintaining governance, technology, AI and business
                information, then builds shared intelligence across them.
              </p>
            </div>


            <div className={styles.finalActions}>
              <Link
                href="/platform/enterprise-connectivity"
                className={styles.finalPrimary}
              >
                Explore Enterprise Connectivity
              </Link>

              <Link
                href="/talk-to-an-expert"
                className={styles.finalSecondary}
              >
                Talk to an Expert
              </Link>
            </div>

          </div>

        </PublicContainer>
      </section>

    </>
  );
}


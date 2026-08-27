"use client";

import Link from "next/link";

import {
  Activity,
  ArrowRight,
  BrainCircuit,
  FileText,
  GitBranch,
  Radar,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


const liveChanges = [
  {
    source: "Governance",
    event: "Policy requirement revised",
    object: "Requirement",
    response: "Applicability reconsidered",
    detail:
      "Connected controls and governed services may now require renewed evaluation.",
  },
  {
    source: "Technology",
    event: "Shared dependency changed",
    object: "Technology dependency",
    response: "Connected services reassessed",
    detail:
      "Applications and services using the dependency are brought back into context.",
  },
  {
    source: "Operations",
    event: "Service criticality increased",
    object: "Business service",
    response: "Business significance refreshed",
    detail:
      "The enterprise context around the service now carries greater significance.",
  },
  {
    source: "AI",
    event: "AI capability changed",
    object: "AI-enabled capability",
    response: "Relevant context refreshed",
    detail:
      "Connected business, technology and governance relationships are reconsidered.",
  },
];


const changeTypes = [
  {
    icon: FileText,
    category: "Governance",
    title: "Policy requirement revised",
    changed:
      "A requirement has been added, removed or materially changed.",
    why:
      "The obligations applying to existing services or controls may no longer be the same.",
    response:
      "AIGO-OS re-evaluates applicability, mappings and affected governed services.",
  },
  {
    icon: Activity,
    category: "Business significance",
    title: "Service criticality increased",
    changed:
      "A service has moved to a higher business-criticality classification.",
    why:
      "Conditions that were previously routine may now deserve greater management attention.",
    response:
      "AIGO-OS refreshes significance, exposure and prioritisation context.",
  },
  {
    icon: GitBranch,
    category: "Dependencies",
    title: "Shared dependency changed",
    changed:
      "A technology or service dependency has been added, removed or replaced.",
    why:
      "The number of applications, services or business outcomes exposed to that dependency may have changed.",
    response:
      "AIGO-OS reassesses connected dependency paths and enterprise exposure.",
  },
  {
    icon: ShieldCheck,
    category: "Assurance",
    title: "Control assurance result changed",
    changed:
      "New QA, QC or assurance information has changed the confidence around a control.",
    why:
      "A control previously considered healthy may now show weakness, recurrence or insufficient evidence.",
    response:
      "AIGO-OS refreshes control confidence, coverage and recurring weakness context.",
  },
  {
    icon: Workflow,
    category: "Organisation & scope",
    title: "Ownership or scope changed",
    changed:
      "Responsibility, service ownership or governance scope has moved.",
    why:
      "The teams accountable for a requirement or the population it applies to may now be different.",
    response:
      "AIGO-OS refreshes organisational responsibility, applicability and governance context.",
  },
  {
    icon: BrainCircuit,
    category: "AI",
    title: "AI capability changed",
    changed:
      "An AI model, agent, use case or AI-enabled service has changed.",
    why:
      "Its business use, dependencies, risk profile or applicable governance obligations may have changed with it.",
    response:
      "AIGO-OS reassesses AI context, relationships and relevant governance requirements.",
  },
];


export default function ContinuousIntelligencePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        (current + 1) % liveChanges.length
      );
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const active = liveChanges[activeIndex];

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
              CONTINUOUS INTELLIGENCE
            </strong>
          </div>


          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <h1>
                <span>
                  Keep enterprise understanding current.
                </span>

                <span>
                  As the enterprise changes.
                </span>
              </h1>

              <p className={styles.heroText}>
                AIGO-OS continuously recognises meaningful change across
                connected enterprise information and identifies where context,
                relationships or conclusions may now need to be reconsidered.
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


            <div className={styles.pulseVisual}>

              <div className={styles.pulseHeader}>
                <div>
                  <span>
                    LIVE ENTERPRISE PULSE
                  </span>

                  <strong>
                    Meaningful change recognised
                  </strong>
                </div>

                <div className={styles.liveBadge}>
                  <i aria-hidden="true" />
                  Current
                </div>
              </div>


              <div
                key={activeIndex}
                className={styles.pulseStage}
              >

                <div className={styles.eventSource}>
                  <span>
                    {active.source}
                  </span>

                  <strong>
                    {active.event}
                  </strong>

                  <small>
                    Source state changed
                  </small>
                </div>


                <div className={styles.pulsePath}>
                  <span />
                </div>


                <div className={styles.aigoCore}>
                  <span>
                    AIGO-OS
                  </span>

                  <strong>
                    Enterprise context check
                  </strong>

                  <small>
                    Evaluating what the change now touches
                  </small>

                  <div className={styles.scanBar}>
                    <i />
                  </div>
                </div>


                <div className={styles.pulsePath}>
                  <span />
                </div>


                <div className={styles.contextResponse}>
                  <span>
                    Context response
                  </span>

                  <strong>
                    {active.response}
                  </strong>

                  <small>
                    {active.detail}
                  </small>
                </div>

              </div>


              <div className={styles.pulseMeta}>
                <div>
                  <span>
                    Changed object
                  </span>

                  <strong>
                    {active.object}
                  </strong>
                </div>

                <div>
                  <span>
                    Enterprise state
                  </span>

                  <strong>
                    Current
                  </strong>
                </div>

                <div>
                  <span>
                    Action
                  </span>

                  <strong>
                    Context refreshed
                  </strong>
                </div>
              </div>


              <div className={styles.pulseControls}>
                {liveChanges.map((change, index) => (
                  <button
                    key={change.event}
                    type="button"
                    aria-label={`Show ${change.event}`}
                    onClick={() => setActiveIndex(index)}
                    className={
                      index === activeIndex
                        ? styles.controlActive
                        : styles.control
                    }
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
              WHY CONTINUOUS INTELLIGENCE MATTERS
            </p>

            <div>
              <h2>
                Enterprise understanding becomes unreliable when it is only established once.
              </h2>

              <p>
                Policies change. Applications are introduced or retired.
                Dependencies move. Controls are revised. Ownership changes.
                Operational conditions change. AI systems evolve.
              </p>

              <p>
                Continuous Intelligence keeps AIGO-OS aware of meaningful
                change so Govern and Impact can work from the current
                enterprise state rather than an increasingly stale snapshot.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          CHANGE SOURCES
          ===================================================== */}

      <section className={styles.changeSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabelLight}>
                CHANGE ACROSS THE ENTERPRISE
              </p>

              <h2>
                Change can come from many parts of the enterprise.
              </h2>
            </div>

            <p>
              AIGO-OS is not limited to one operational stream. It can
              recognise changes across governance, technology, services,
              relationships, operations and AI.
            </p>
          </div>


          <div className={styles.changeCarouselViewport}>

  <div className={styles.changeCarouselTrack}>

    {[...changeTypes, ...changeTypes].map(
      (item, index) => {
        const Icon = item.icon;

        return (
          <article
            key={`${item.title}-${index}`}
            className={styles.changeCarouselCard}
          >

            <div className={styles.changeCarouselTop}>

              <div className={styles.changeCarouselIcon}>
                <Icon
                  size={19}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <span>
                {item.category}
              </span>

            </div>


            <div className={styles.changeCarouselBody}>

              <strong>
                {item.title}
              </strong>


              <div className={styles.changeReason}>

                <span>
                  What changed
                </span>

                <p>
                  {item.changed}
                </p>

              </div>


              <div className={styles.changeReason}>

                <span>
                  Why it matters
                </span>

                <p>
                  {item.why}
                </p>

              </div>

            </div>


            <div className={styles.changeResponse}>

              <span>
                AIGO-OS RESPONSE
              </span>

              <strong>
                {item.response}
              </strong>

            </div>

          </article>
        );
      }
    )}

  </div>

</div>


<div className={styles.changeCarouselNote}>
  <span>
    Governance
  </span>

  <span>
    Business significance
  </span>

  <span>
    Dependencies
  </span>

  <span>
    Assurance
  </span>

  <span>
    Organisation & scope
  </span>

  <span>
    AI
  </span>
</div>

        </PublicContainer>
      </section>


      {/* =====================================================
          PROPAGATION
          ===================================================== */}

      <section className={styles.propagationSection}>
        <PublicContainer>

          <div className={styles.propagationGrid}>

            <div className={styles.propagationCopy}>
              <p className={styles.sectionLabel}>
                FOLLOW THE EFFECT
              </p>

              <h2>
                A change matters because of what it touches next.
              </h2>

              <p>
                Continuous Intelligence uses established enterprise context
                and relationships to identify where a meaningful change may
                require renewed understanding.
              </p>
            </div>


            <div className={styles.effectVisual}>

              <div className={styles.effectSource}>
                <span>
                  Change detected
                </span>

                <strong>
                  Shared technology dependency changed
                </strong>
              </div>


              <div className={styles.effectConnector}>
                <i />
              </div>


              <div className={styles.effectResults}>

                <div>
                  <span>
                    Applications
                  </span>

                  <strong>
                    Context affected
                  </strong>
                </div>

                <div>
                  <span>
                    Business services
                  </span>

                  <strong>
                    Exposure reconsidered
                  </strong>
                </div>

                <div>
                  <span>
                    Governance
                  </span>

                  <strong>
                    Applicability reconsidered
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          RELEVANCE
          ===================================================== */}

      <section className={styles.relevanceSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabelLight}>
                SIGNAL RELEVANCE
              </p>

              <h2>
                Not every change deserves the same attention.
              </h2>
            </div>

            <p>
              Connected enterprise context helps distinguish routine source
              updates from changes that can materially alter governance or
              business understanding.
            </p>
          </div>


          <div className={styles.relevanceBoard}>

            <div className={styles.routineColumn}>
              <span>
                ROUTINE CHANGE
              </span>

              <div>
                <strong>
                  Description updated
                </strong>

                <small>
                  Meaning unchanged
                </small>
              </div>

              <div>
                <strong>
                  Monitoring label changed
                </strong>

                <small>
                  No material enterprise effect
                </small>
              </div>

              <div>
                <strong>
                  Metadata refreshed
                </strong>

                <small>
                  Existing context remains valid
                </small>
              </div>
            </div>


            <div className={styles.relevanceEngine}>
              <Radar
                size={25}
                strokeWidth={1.6}
                aria-hidden="true"
              />

              <span>
                Context + relationships
              </span>

              <strong>
                Relevance
              </strong>
            </div>


            <div className={styles.materialColumn}>
              <span>
                MEANINGFUL CHANGE
              </span>

              <div>
                <strong>
                  Requirement revised
                </strong>

                <small>
                  Governance applicability may change
                </small>
              </div>

              <div>
                <strong>
                  Shared dependency removed
                </strong>

                <small>
                  Business exposure may change
                </small>
              </div>

              <div>
                <strong>
                  Criticality increased
                </strong>

                <small>
                  Significance requires renewed evaluation
                </small>
              </div>
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
              <p className={styles.sectionLabel}>
                SHARED CONTINUOUS FOUNDATION
              </p>

              <h2>
                Govern and Impact respond to different consequences of change.
              </h2>
            </div>

            <p>
              The platform maintains current enterprise understanding.
              Each product applies the changed context to its own questions.
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
                Know when governance understanding may need to change.
              </h3>

              <p>
                Changes to policies, requirements, controls, services,
                scope and assurance can trigger renewed interpretation,
                applicability and coverage analysis.
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
                Know when business exposure may have changed.
              </h3>

              <p>
                Technology, service, operational and dependency changes can
                alter which processes, customers or outcomes are exposed.
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
            href="/platform/contextual-reasoning"
            className={styles.nextCapability}
          >
            <div>
              <span>
                Explore next
              </span>

              <strong>
                Contextual Reasoning
              </strong>

              <p>
                Once AIGO-OS knows what changed, it can reason across the
                current enterprise context to understand what that change means.
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



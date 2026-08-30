"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


const heroScenes = [
  {
    eyebrow: "AIGO-OS | ENTERPRISE AI GOVERNANCE",
    title: "Enterprise AI needs connected intelligence.",
    emphasis: "AIGO-OS makes the context understandable.",
    text:
      "AIGO-OS connects AI activity, governance information and enterprise relationships so organisations can understand what requires attention, what the business depends on and why it matters.",
    mode: "context",
    background: "/images/hero/connected-intelligence.png",
  },

  {
    eyebrow: "THE AGENTIC ENTERPRISE",
    title: "AI agents are becoming part of enterprise work.",
    emphasis: "Their business context needs to keep up.",
    text:
      "AIGO-OS connects agentic activity with ownership, authority, services and business context so teams can understand where it sits and why it matters.",
    mode: "agentic",
    background: "/images/hero/agentic-ai.png",
  },

  {
    eyebrow: "FROM ACTIVITY TO CONTEXT",
    title: "AI activity should not become another black box.",
    emphasis: "Make its enterprise context visible.",
    text:
      "AIGO-OS connects AI activity to the ownership, authority, dependencies and business relationships that give it enterprise significance.",
    mode: "blackbox",
    background: "/images/hero/black-box.jpg",
  },

  {
    eyebrow: "AIGO-OS GOVERN",
    title: "Know what needs governance attention.",
    emphasis: "And understand why.",
    text:
      "Interpret accountability, authority, applicability, coverage and governance priorities using the business context surrounding AI.",
    mode: "govern",
    background: "/images/hero/governance.jpg",
  },

  {
    eyebrow: "AIGO-OS IMPACT",
    title: "Know what changed.",
    emphasis: "Know what the business depends on.",
    text:
      "Connect incidents, changes and dependencies to the services, applications, processes and business relationships that give them significance.",
    mode: "impact",
    background: "/images/hero/business-impact.png",
  },

  {
    eyebrow: "AIGO-OS",
    title: "Connect the context.",
    emphasis: "Understand what matters.",
    text:
      "AIGO-OS brings governance intelligence and business impact intelligence together around connected enterprise context.",
    mode: "resolve",
    background: "/images/hero/connected-context.jpg",
  },
] as const;


const integrationNodes = [
  "GRC",
  "ITSM",
  "CMDB",
  "Observability",
  "Architecture",
  "AI Platforms",
] as const;


function Arrow() {
  return (
    <ArrowUpRight
      size={16}
      strokeWidth={1.8}
      aria-hidden="true"
    />
  );
}


function CinematicHero() {
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">(
    "enter"
  );

  useEffect(() => {
    const holdTimer = window.setTimeout(() => {
      setPhase("hold");
    }, 2500);

    const exitTimer = window.setTimeout(() => {
      setPhase("exit");
    }, 7200);

    const nextTimer = window.setTimeout(() => {
      setPhase("enter");
      setActive((current) => (current + 1) % heroScenes.length);
    }, 8000);

    return () => {
      window.clearTimeout(holdTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(nextTimer);
    };
  }, [active]);

  const scene = heroScenes[active];

  const storyClassName =
    phase === "exit"
      ? `${styles.heroStory} ${styles.heroStoryExit}`
      : phase === "hold"
        ? `${styles.heroStory} ${styles.heroStoryHold}`
        : `${styles.heroStory} ${styles.heroStoryEnter}`;

  return (
    <section
      className={styles.hero}
      style={
        {
          "--hero-bg": `url("${scene.background}")`,
        } as React.CSSProperties
      }
    >
      <div
        className={`${styles.heroSceneWash} ${styles[`heroWash_${scene.mode}`]}`}
        key={`wash-${active}`}
        aria-hidden="true"
      />

      <div
        className={styles.heroAtmosphere}
        aria-hidden="true"
      >
        <div className={styles.heroGlowOne} />
        <div className={styles.heroGlowTwo} />
        <div className={styles.heroAmbientField} />
      </div>

      <PublicContainer>
        <div className={styles.heroViewport}>
          <div
            className={storyClassName}
            key={`story-${active}`}
          >
            <p className={styles.heroEyebrow}>
              {scene.eyebrow}
            </p>

            <h1 className={styles.heroHeadline}>
              <span className={styles.heroSentenceOne}>
                {scene.title}
              </span>

              <span className={styles.heroSentenceTwo}>
                {scene.emphasis}
              </span>
            </h1>

            <p className={styles.heroSupporting}>
              {scene.text}
            </p>

            <div className={styles.heroActions}>
              <Link
                href="/products"
                className={styles.heroPrimary}
              >
                Explore AIGO-OS
                <Arrow />
              </Link>

              <Link
                href="/talk-to-an-expert"
                className={styles.heroSecondary}
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </PublicContainer>
    </section>
  );
}


export default function HomePage() {
  return (
    <>
      <CinematicHero />


      {/* ======================================================
          WHY AIGO-OS
          TRUE FISHBONE RELATIONSHIP MODEL
          ====================================================== */}

      <section className={styles.contextFishSection}>
        <PublicContainer>

          <div className={styles.contextFishHeader}>

            <aside className={styles.contextFishIntro}>
              <p className={styles.contextFishEyebrow}>
                Why AIGO-OS
              </p>

              <span
                className={styles.contextFishIntroRule}
                aria-hidden="true"
              />

              <p className={styles.contextFishIntroCopy}>
                Enterprise systems already contain useful facts.
                The challenge is understanding how those facts relate.
              </p>
            </aside>


            <div className={styles.contextFishHeading}>
              <h2>
                <span>
                  Enterprise information exists.
                </span>

                <strong>
                  Understanding is still fragmented.
                </strong>
              </h2>

              <p>
                Policies, controls, services, applications, ownership,
                incidents, changes and dependencies live across different
                systems. Each source can hold useful facts while still
                leaving management to reconstruct the wider context.
              </p>
            </div>

          </div>


          <div className={styles.fishbonePanel}>

            <div className={styles.fishboneBodyV2}>

              <svg
                className={styles.fishboneSkeleton}
                viewBox="0 0 1000 360"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="fishSpineGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop
                      offset="0%"
                      stopColor="#1789a3"
                    />

                    <stop
                      offset="70%"
                      stopColor="#1789a3"
                    />

                    <stop
                      offset="88%"
                      stopColor="#59a5a7"
                    />

                    <stop
                      offset="100%"
                      stopColor="#d9ae3d"
                    />
                  </linearGradient>
                </defs>


                {/* Pair 1 */}
                <path
                  d="M 125 105 L 215 180"
                  className={styles.fishSkeletonBone}
                />

                <path
                  d="M 125 255 L 215 180"
                  className={styles.fishSkeletonBone}
                />


                {/* Pair 2 */}
                <path
                  d="M 375 105 L 455 180"
                  className={styles.fishSkeletonBone}
                />

                <path
                  d="M 375 255 L 455 180"
                  className={styles.fishSkeletonBone}
                />


                {/* Pair 3 */}
                <path
                  d="M 625 105 L 705 180"
                  className={styles.fishSkeletonBone}
                />

                <path
                  d="M 625 255 L 705 180"
                  className={styles.fishSkeletonBone}
                />


                {/* Pair 4 */}
                <path
                  d="M 875 105 L 945 180"
                  className={styles.fishSkeletonBone}
                />

                <path
                  d="M 875 255 L 945 180"
                  className={styles.fishSkeletonBone}
                />


                <circle
                  cx="18"
                  cy="180"
                  r="8"
                  className={styles.fishSkeletonTail}
                />


                <circle
                  cx="215"
                  cy="180"
                  r="5"
                  className={styles.fishSkeletonJunction}
                />

                <circle
                  cx="455"
                  cy="180"
                  r="5"
                  className={styles.fishSkeletonJunction}
                />

                <circle
                  cx="705"
                  cy="180"
                  r="5"
                  className={styles.fishSkeletonJunction}
                />

                <circle
                  cx="945"
                  cy="180"
                  r="5"
                  className={styles.fishSkeletonJunction}
                />


                <circle
                  r="5"
                  className={styles.fishSkeletonSignal}
                >
                  <animateMotion
                    dur="7s"
                    repeatCount="indefinite"
                    path="M 18 180 L 995 180"
                  />
                </circle>


                <circle
                  r="4"
                  className={styles.fishSkeletonSignalSecondary}
                >
                  <animateMotion
                    dur="7s"
                    begin="-3.5s"
                    repeatCount="indefinite"
                    path="M 18 180 L 995 180"
                  />
                </circle>
              </svg>


              <div className={styles.fishboneTopRow}>

                <article className={styles.fishboneSourceV2}>
                  <span>Policies</span>
                </article>

                <article className={styles.fishboneSourceV2}>
                  <span>Controls</span>
                </article>

                <article className={styles.fishboneSourceV2}>
                  <span>Ownership</span>
                </article>

                <article className={styles.fishboneSourceV2}>
                  <span>Services</span>
                </article>

              </div>


              <div className={styles.fishboneCenterRow}>

                <div className={styles.relationshipIntelligenceV2}>
                  <span>
                    Relationship Intelligence
                  </span>

                  <small>
                    Context resolved
                  </small>
                </div>

              </div>


              <div className={styles.fishboneBottomRow}>

                <article className={styles.fishboneSourceV2}>
                  <span>Applications</span>
                </article>

                <article className={styles.fishboneSourceV2}>
                  <span>Incidents</span>
                </article>

                <article className={styles.fishboneSourceV2}>
                  <span>Changes</span>
                </article>

                <article className={styles.fishboneSourceV2}>
                  <span>Dependencies</span>
                </article>

              </div>

            </div>


            <article className={styles.fishboneHead}>

              <span className={styles.fishboneHeadLabel}>
                Connected Context
              </span>

              <h3>
                Relationships become understandable.
              </h3>

              <p>
                Facts are interpreted through the enterprise
                relationships that give them meaning.
              </p>

            </article>

          </div>


          <div className={styles.mobileContextModel}>

  <div className={styles.mobileFish}>

    <svg
      className={styles.mobileFishSkeleton}
      viewBox="0 0 360 630"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="mobileSpineGradientFinal"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#1789a3" />
          <stop offset="72%" stopColor="#1789a3" />
          <stop offset="89%" stopColor="#59a5a7" />
          <stop offset="100%" stopColor="#d9ae3d" />
        </linearGradient>
      </defs>

      <rect
        x="178"
        y="20"
        width="4"
        height="565"
        rx="2"
        fill="#1789a3"
        className={styles.mobileFishSpineSolid}
      />

      <rect
        x="178"
        y="585"
        width="4"
        height="45"
        rx="2"
        fill="#d9ae3d"
        className={styles.mobileFishSpineTailSolid}
      />

      <path
        d="M 137 74 L 180 116"
        className={styles.mobileFishBone}
      />

      <path
        d="M 223 74 L 180 116"
        className={styles.mobileFishBone}
      />

      <path
        d="M 137 184 L 180 226"
        className={styles.mobileFishBone}
      />

      <path
        d="M 223 184 L 180 226"
        className={styles.mobileFishBone}
      />

      <path
        d="M 137 414 L 180 456"
        className={styles.mobileFishBone}
      />

      <path
        d="M 223 414 L 180 456"
        className={styles.mobileFishBone}
      />

      <path
        d="M 137 524 L 180 566"
        className={styles.mobileFishBone}
      />

      <path
        d="M 223 524 L 180 566"
        className={styles.mobileFishBone}
      />

      <circle
        cx="180"
        cy="116"
        r="5"
        className={styles.mobileFishJunction}
      />

      <circle
        cx="180"
        cy="226"
        r="5"
        className={styles.mobileFishJunction}
      />

      <circle
        cx="180"
        cy="456"
        r="5"
        className={styles.mobileFishJunction}
      />

      <circle
        cx="180"
        cy="566"
        r="5"
        className={styles.mobileFishJunction}
      />

      <circle
        r="5"
        className={styles.mobileFishSignal}
      >
        <animateMotion
          dur="7s"
          repeatCount="indefinite"
          path="M 180 20 L 180 630"
        />
      </circle>

      <circle
        r="4"
        className={styles.mobileFishSignalSecondary}
      >
        <animateMotion
          dur="7s"
          begin="-3.5s"
          repeatCount="indefinite"
          path="M 180 20 L 180 630"
        />
      </circle>
    </svg>


    <article
      className={`${styles.mobileFishSource} ${styles.mobileFishPolicies}`}
    >
      Policies
    </article>

    <article
      className={`${styles.mobileFishSource} ${styles.mobileFishApplications}`}
    >
      Applications
    </article>


    <article
      className={`${styles.mobileFishSource} ${styles.mobileFishControls}`}
    >
      Controls
    </article>

    <article
      className={`${styles.mobileFishSource} ${styles.mobileFishIncidents}`}
    >
      Incidents
    </article>


    <div className={styles.mobileFishIntelligence}>
      <span>
        Relationship Intelligence
      </span>

      <small>
        Context resolved
      </small>
    </div>


    <article
      className={`${styles.mobileFishSource} ${styles.mobileFishOwnership}`}
    >
      Ownership
    </article>

    <article
      className={`${styles.mobileFishSource} ${styles.mobileFishChanges}`}
    >
      Changes
    </article>


    <article
      className={`${styles.mobileFishSource} ${styles.mobileFishServices}`}
    >
      Services
    </article>

    <article
      className={`${styles.mobileFishSource} ${styles.mobileFishDependencies}`}
    >
      Dependencies
    </article>

  </div>


  <article className={styles.mobileFishHead}>

    <span className={styles.mobileFishHeadLabel}>
      Connected Context
    </span>

    <h3>
      Relationships become understandable.
    </h3>

    <p>
      Facts are interpreted through the enterprise relationships that give
      them meaning.
    </p>

  </article>

</div>

</PublicContainer>
      </section>


      {/* ======================================================
          PRODUCTS
          ====================================================== */}

      <section className={styles.productsSection}>
        <PublicContainer>

          <div className={styles.sectionIntro}>

            <div>
              <p className={styles.sectionLabel}>
                AIGO-OS Products
              </p>

              <h2>
                One intelligence foundation.
                <span>
                  Two management perspectives.
                </span>
              </h2>
            </div>


            <div className={styles.sectionIntroAside}>
              <p>
                Govern and Impact use connected enterprise context
                to answer different management questions without
                creating another isolated source of truth.
              </p>

              <Link
                href="/products"
                className={styles.textLink}
              >
                Explore Products
                <Arrow />
              </Link>
            </div>

          </div>


          <div className={styles.productStage}>

            <Link
              href="/products/aigo-os-govern"
              className={`${styles.productExperience} ${styles.governProduct}`}
            >
              <div className={styles.productHeader}>
                <span>
                  AI Governance Intelligence
                </span>
              </div>


              <div className={styles.productMain}>
                <div>
                  <p className={styles.productName}>
                    AIGO-OS Govern
                  </p>

                  <h3>
                    Understand what needs governance attention.
                  </h3>

                  <p>
                    Interpret accountability, authority, applicability,
                    coverage and governance priorities using the
                    enterprise context surrounding AI.
                  </p>
                </div>

                <span className={styles.productArrow}>
                  <Arrow />
                </span>
              </div>


              <div className={styles.productSignals}>
                <div>
                  <span>Accountability</span>
                  <strong>Who owns it</strong>
                </div>

                <div>
                  <span>Authority</span>
                  <strong>What it can do</strong>
                </div>

                <div>
                  <span>Priority</span>
                  <strong>What needs attention</strong>
                </div>
              </div>
            </Link>


            <Link
              href="/products/aigo-os-impact"
              className={`${styles.productExperience} ${styles.impactProduct}`}
            >
              <div className={styles.productHeader}>
                <span>
                  AI Business Impact Intelligence
                </span>
              </div>


              <div className={styles.productMain}>
                <div>
                  <p className={styles.productName}>
                    AIGO-OS Impact
                  </p>

                  <h3>
                    Understand what matters to the business.
                  </h3>

                  <p>
                    Connect incidents, changes and dependencies to
                    services, applications and business relationships
                    to understand where significance sits.
                  </p>
                </div>

                <span className={styles.productArrow}>
                  <Arrow />
                </span>
              </div>


              <div className={styles.productSignals}>
                <div>
                  <span>Incident</span>
                  <strong>What is affected</strong>
                </div>

                <div>
                  <span>Change</span>
                  <strong>What moved</strong>
                </div>

                <div>
                  <span>Dependencies</span>
                  <strong>What relies on it</strong>
                </div>
              </div>
            </Link>

          </div>

        </PublicContainer>
      </section>


      {/* ======================================================
          EXISTING ENTERPRISE
          ORIGINAL CONNECTED INTELLIGENCE ORBIT
          ====================================================== */}

      <section className={styles.foundationSection}>
        <PublicContainer>

          <div className={styles.foundationGrid}>

            <div className={styles.foundationCopy}>
              <p className={styles.sectionLabelLight}>
                Designed for the existing enterprise
              </p>

              <h2>
                Add intelligence without replacing the systems
                that already run the organization.
              </h2>

              <p>
                AIGO-OS works with selected information from existing
                enterprise systems and AI platforms, relating records
                and signals through shared business context rather than
                requiring another operational system of record.
              </p>

              <div className={styles.foundationActions}>
                <Link href="/platform">
                  Explore the Platform
                  <Arrow />
                </Link>

                <Link href="/integrations">
                  View Integrations
                </Link>
              </div>
            </div>


            <div className={styles.integrationSystem}>

              <div
                className={styles.integrationOrbitTwo}
                aria-hidden="true"
              />


              {/* Animated connections from enterprise systems into AIGO-OS */}
              <svg
                className={styles.orbitConnectionLayer}
                viewBox="0 0 420 420"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line
                  className={styles.orbitSpoke1}
                  x1="210"
                  y1="210"
                  x2="210"
                  y2="45"
                />

                <line
                  className={styles.orbitSpoke2}
                  x1="210"
                  y1="210"
                  x2="353"
                  y2="127"
                />

                <line
                  className={styles.orbitSpoke3}
                  x1="210"
                  y1="210"
                  x2="353"
                  y2="293"
                />

                <line
                  className={styles.orbitSpoke4}
                  x1="210"
                  y1="210"
                  x2="210"
                  y2="375"
                />

                <line
                  className={styles.orbitSpoke5}
                  x1="210"
                  y1="210"
                  x2="67"
                  y2="293"
                />

                <line
                  className={styles.orbitSpoke6}
                  x1="210"
                  y1="210"
                  x2="67"
                  y2="127"
                />


                {/* Signals travelling from enterprise systems into AIGO-OS */}

                <circle
                  r="4"
                  className={`${styles.orbitInboundSignal} ${styles.orbitInboundSignal1}`}
                >
                  <animateMotion
                    dur="4.8s"
                    begin="0s"
                    repeatCount="indefinite"
                    path="M 210 45 L 210 210"
                  />
                </circle>


                <circle
                  r="4"
                  className={`${styles.orbitInboundSignal} ${styles.orbitInboundSignal2}`}
                >
                  <animateMotion
                    dur="4.8s"
                    begin="-0.8s"
                    repeatCount="indefinite"
                    path="M 353 127 L 210 210"
                  />
                </circle>


                <circle
                  r="4"
                  className={`${styles.orbitInboundSignal} ${styles.orbitInboundSignal3}`}
                >
                  <animateMotion
                    dur="4.8s"
                    begin="-1.6s"
                    repeatCount="indefinite"
                    path="M 353 293 L 210 210"
                  />
                </circle>


                <circle
                  r="4"
                  className={`${styles.orbitInboundSignal} ${styles.orbitInboundSignal4}`}
                >
                  <animateMotion
                    dur="4.8s"
                    begin="-2.4s"
                    repeatCount="indefinite"
                    path="M 210 375 L 210 210"
                  />
                </circle>


                <circle
                  r="4"
                  className={`${styles.orbitInboundSignal} ${styles.orbitInboundSignal5}`}
                >
                  <animateMotion
                    dur="4.8s"
                    begin="-3.2s"
                    repeatCount="indefinite"
                    path="M 67 293 L 210 210"
                  />
                </circle>


                <circle
                  r="4"
                  className={`${styles.orbitInboundSignal} ${styles.orbitInboundSignal6}`}
                >
                  <animateMotion
                    dur="4.8s"
                    begin="-4s"
                    repeatCount="indefinite"
                    path="M 67 127 L 210 210"
                  />
                </circle>
              </svg>


              {/* Primary travelling enterprise signal */}
              <div
                className={`${styles.orbitMotionLayer} ${styles.orbitMotionPrimary}`}
                aria-hidden="true"
              >
                <span />
              </div>


              {/* Secondary signal, offset around the same orbit */}


              <svg
                className={styles.integrationConnections}
                viewBox="0 0 600 600"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="300" y1="300" x2="300" y2="58" />
                <line x1="300" y1="300" x2="508" y2="178" />
                <line x1="300" y1="300" x2="508" y2="422" />
                <line x1="300" y1="300" x2="300" y2="542" />
                <line x1="300" y1="300" x2="92" y2="422" />
                <line x1="300" y1="300" x2="92" y2="178" />
              </svg>


              <div
                className={`${styles.integrationSignalOrbit} ${styles.integrationSignalOrbitOne}`}
                aria-hidden="true"
              >
                <span />
              </div>

              <div
                className={`${styles.integrationSignalOrbit} ${styles.integrationSignalOrbitTwo}`}
                aria-hidden="true"
              >
                <span />
              </div>

              <div
                className={`${styles.integrationSignalOrbit} ${styles.integrationSignalOrbitThree}`}
                aria-hidden="true"
              >
                <span />
              </div>


              <div className={styles.integrationCore}>
                <span>
                  AIGO-OS
                </span>

                <strong>
                  Connected
                  <br />
                  Intelligence
                </strong>
              </div>


              {integrationNodes.map((node, index) => (
                <div
                  key={node}
                  className={`${styles.integrationNode} ${styles[`integrationNode${index + 1}`]}`}
                >
                  <span />
                  {node}
                </div>
              ))}

            </div>

          </div>

        </PublicContainer>
      </section>


      {/* ======================================================
          MANAGEMENT QUESTIONS
          ====================================================== */}

      <section className={styles.questionsSection}>
        <PublicContainer>

          <div className={styles.questionsHeader}>
            <p className={styles.sectionLabel}>
              Start with the question
            </p>

            <h2>
              Move from fragmented records to management answers.
            </h2>
          </div>


          <div className={styles.questionGrid}>

            <Link
              href="/solutions/unclear-ownership-accountability"
              className={styles.questionCard}
            >
              <span className={styles.questionType}>
                Govern
              </span>

              <h3>
                Who is accountable for this AI activity?
              </h3>

              <p>
                Connect AI activity to accountable owners and the
                business structures surrounding responsibility.
              </p>

              <span className={styles.questionAction}>
                Explore accountability
                <Arrow />
              </span>
            </Link>


            <Link
              href="/products/aigo-os-govern"
              className={styles.questionCard}
            >
              <span className={styles.questionType}>
                Govern
              </span>

              <h3>
                What authority does this AI activity have?
              </h3>

              <p>
                Understand access and authority in relation to the
                business context in which AI operates.
              </p>

              <span className={styles.questionAction}>
                Explore authority
                <Arrow />
              </span>
            </Link>


            <Link
              href="/solutions/unclear-incident-business-impact"
              className={styles.questionCard}
            >
              <span className={styles.questionType}>
                Impact
              </span>

              <h3>
                What does this incident mean to the business?
              </h3>

              <p>
                Trace affected technology into services, dependencies
                and business context to understand significance.
              </p>

              <span className={styles.questionAction}>
                Explore incident impact
                <Arrow />
              </span>
            </Link>


            <Link
              href="/solutions/unknown-change-impact"
              className={styles.questionCard}
            >
              <span className={styles.questionType}>
                Impact
              </span>

              <h3>
                What changed and what depends on it?
              </h3>

              <p>
                Follow change through connected relationships to see
                where operational and business consequences may emerge.
              </p>

              <span className={styles.questionAction}>
                Explore change impact
                <Arrow />
              </span>
            </Link>

          </div>

        </PublicContainer>
      </section>


      {/* ======================================================
          AIGO-OS DEFINITION
          ====================================================== */}

      <section className={styles.definitionSection}>
        <PublicContainer>
          <div className={styles.definitionIntro}>
            <div className={styles.definitionLabelColumn}>
              <p className={styles.sectionLabel}>
                What is AIGO-OS?
              </p>
            </div>

            <div className={styles.definitionLead}>
              <h2>
                AIGO-OS is the governance intelligence layer
                <span>for enterprise AI.</span>
              </h2>

              <p>
                AIGO-OS helps organisations understand and govern AI in the
                context of the enterprise in which it operates. It connects AI
                activity with existing information about policies, controls,
                ownership, authority, applications, services, dependencies,
                incidents and change so management can reason from connected
                context rather than isolated records.
              </p>
            </div>
          </div>

          <div className={styles.definitionGrid}>
            <article className={styles.definitionCard}>
              <span className={styles.definitionCardLabel}>
                Governance intelligence
              </span>

              <h3>
                Govern AI in context.
              </h3>

              <p>
                Understand which governance requirements, controls,
                responsibilities and areas of attention matter to specific AI
                activity.
              </p>

              <Link
                href="/products/aigo-os-govern"
                className={styles.definitionCardLink}
              >
                Explore AIGO-OS Govern
                <Arrow />
              </Link>
            </article>

            <article className={styles.definitionCard}>
              <span className={styles.definitionCardLabel}>
                Relationship intelligence
              </span>

              <h3>
                Understand business relationships.
              </h3>

              <p>
                Relate AI, applications, services, processes, ownership and
                dependencies so enterprise significance becomes easier to
                understand.
              </p>

              <Link
                href="/platform/relationship-dependency-intelligence"
                className={styles.definitionCardLink}
              >
                Explore Relationship Intelligence
                <Arrow />
              </Link>
            </article>

            <article className={styles.definitionCard}>
              <span className={styles.definitionCardLabel}>
                Contextual reasoning
              </span>

              <h3>
                Reason from connected information.
              </h3>

              <p>
                Bring relevant enterprise records and signals into context so
                management can understand why something matters and what may
                require attention.
              </p>

              <Link
                href="/platform/contextual-reasoning"
                className={styles.definitionCardLink}
              >
                Explore Contextual Reasoning
                <Arrow />
              </Link>
            </article>
          </div>
        </PublicContainer>
      </section>


      {/* ======================================================
          HOW AIGO-OS WORKS
          ====================================================== */}

      <section className={styles.operatingModelSection}>
        <PublicContainer>
          <div className={styles.operatingModelHeader}>
            <div>
              <p className={styles.sectionLabelLight}>
                How AIGO-OS works
              </p>

              <h2>
                From fragmented enterprise information
                <span>to connected intelligence.</span>
              </h2>
            </div>

            <p className={styles.operatingModelIntro}>
              AIGO-OS does not ask the enterprise to create another isolated
              source of truth. It works with selected information from the
              systems already used across governance, technology, operations
              and AI.
            </p>
          </div>

          <div className={styles.operatingModelFlow}>
            <article className={styles.operatingModelStep}>
              <span className={styles.operatingModelWord}>
                Connect
              </span>

              <h3>
                Bring relevant enterprise information into view.
              </h3>

              <p>
                Work with selected records and signals from GRC, ITSM, CMDB,
                architecture, observability, AI platforms and other enterprise
                sources.
              </p>
            </article>

            <article className={styles.operatingModelStep}>
              <span className={styles.operatingModelWord}>
                Relate
              </span>

              <h3>
                Understand how enterprise facts connect.
              </h3>

              <p>
                Relate policies, controls, AI activity, applications, services,
                owners, incidents, changes and dependencies through shared
                enterprise context.
              </p>
            </article>

            <article className={styles.operatingModelStep}>
              <span className={styles.operatingModelWord}>
                Reason
              </span>

              <h3>
                Interpret what those relationships mean.
              </h3>

              <p>
                Use contextual reasoning to understand governance
                applicability, accountability, authority, control coverage,
                dependencies and potential business significance.
              </p>
            </article>

            <article className={styles.operatingModelStep}>
              <span className={styles.operatingModelWord}>
                Understand
              </span>

              <h3>
                Turn connected context into management understanding.
              </h3>

              <p>
                AIGO-OS Govern and AIGO-OS Impact apply the same intelligence
                foundation to different governance and business impact
                questions.
              </p>
            </article>
          </div>

          <div className={styles.operatingModelActions}>
            <Link
              href="/platform"
              className={styles.operatingModelPrimary}
            >
              Explore the Platform
              <Arrow />
            </Link>

            <Link
              href="/integrations"
              className={styles.operatingModelSecondary}
            >
              View Enterprise Connectivity
            </Link>
          </div>
        </PublicContainer>
      </section>


      {/* ======================================================
          ENTERPRISE AI GOVERNANCE
          ====================================================== */}

      <section className={styles.governanceContextSection}>
        <PublicContainer>
          <div className={styles.governanceContextHeader}>
            <div className={styles.governanceContextHeading}>
              <p className={styles.sectionLabel}>
                Enterprise AI Governance
              </p>

              <h2>
                AI governance cannot stop
                <span>at the AI system.</span>
              </h2>
            </div>

            <div className={styles.governanceContextLead}>
              <p>
                Enterprise AI operates inside existing organisations,
                technology estates, business services and governance
                structures. Understanding an AI model or agent in isolation
                does not explain who is accountable for it, what authority it
                has, which controls apply, what services depend on it or what a
                change or incident could mean to the business.
              </p>

              <p>
                AIGO-OS connects these questions to the enterprise context
                needed to understand them.
              </p>
            </div>
          </div>

          <div className={styles.governanceContextGrid}>
            <article className={styles.governanceContextItem}>
              <span>
                Governance applicability
              </span>

              <h3>
                Understand what applies.
              </h3>

              <p>
                Connect AI activity to policies, obligations and enterprise
                context to understand which governance requirements are
                relevant.
              </p>

              <Link href="/solutions/unclear-control-applicability">
                Explore applicability
                <Arrow />
              </Link>
            </article>

            <article className={styles.governanceContextItem}>
              <span>
                Controls and coverage
              </span>

              <h3>
                See where governance is covered.
              </h3>

              <p>
                Understand where controls exist, what they cover and where
                governance coverage may require further attention.
              </p>

              <Link href="/solutions/unclear-control-coverage">
                Explore control coverage
                <Arrow />
              </Link>
            </article>

            <article className={styles.governanceContextItem}>
              <span>
                Ownership and accountability
              </span>

              <h3>
                Know who is responsible.
              </h3>

              <p>
                Relate AI activity to accountable owners, organisational
                structures and the responsibilities surrounding its use.
              </p>

              <Link href="/solutions/unclear-ownership-accountability">
                Explore accountability
                <Arrow />
              </Link>
            </article>

            <article className={styles.governanceContextItem}>
              <span>
                Authority
              </span>

              <h3>
                Understand what AI can do.
              </h3>

              <p>
                Interpret access and authority in relation to the business
                environment in which AI activity operates.
              </p>

              <Link href="/products/aigo-os-govern">
                Explore authority
                <Arrow />
              </Link>
            </article>

            <article className={styles.governanceContextItem}>
              <span>
                Relationships and dependencies
              </span>

              <h3>
                See what depends on what.
              </h3>

              <p>
                Understand how AI, applications, services, processes and other
                enterprise components are connected through operational and
                business relationships.
              </p>

              <Link href="/solutions/hidden-dependencies">
                Explore dependencies
                <Arrow />
              </Link>
            </article>

            <article className={styles.governanceContextItem}>
              <span>
                Change and incident impact
              </span>

              <h3>
                Understand why change matters.
              </h3>

              <p>
                Trace change or disruption through connected relationships to
                understand where operational and business significance may
                emerge.
              </p>

              <Link href="/products/aigo-os-impact">
                Explore AIGO-OS Impact
                <Arrow />
              </Link>
            </article>
          </div>

          <div className={styles.governanceContextFooter}>
            <div>
              <span>
                One connected intelligence foundation
              </span>

              <p>
                Govern AI with enterprise context. Understand business impact
                through the same connected relationships.
              </p>
            </div>

            <Link
              href="/solutions"
              className={styles.governanceContextCta}
            >
              Explore Enterprise AI Governance Solutions
              <Arrow />
            </Link>
          </div>
        </PublicContainer>
      </section>

      {/* ======================================================
          FINAL CTA
          ====================================================== */}

      <section className={styles.finalSection}>
        <PublicContainer>

          <div className={styles.finalPanel}>

            <div className={styles.finalCopy}>
              <p className={styles.sectionLabelLight}>
                AIGO-OS
              </p>

              <h2>
                Put AI activity into the context your business
                already understands.
              </h2>

              <p>
                See how connected intelligence can support governance
                decisions and business impact understanding across the
                enterprise.
              </p>
            </div>


            <div className={styles.finalActions}>
              <Link
                href="/talk-to-an-expert"
                className={styles.finalPrimary}
              >
                Talk to an Expert
                <Arrow />
              </Link>

              <Link
                href="/request-demo"
                className={styles.finalSecondary}
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















"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  Blocks,
  Bot,
  BrainCircuit,
  Building2,
  CircleUserRound,
  FileCheck2,
  Fingerprint,
  Network,
  Scale,
  ShieldCheck,
} from "lucide-react";

import styles from "@/styles/page02-platform-overview.module.css";


type CapabilityKey =
  | "passport"
  | "authority"
  | "significance"
  | "decisioning"
  | "human"
  | "receipts";


const capabilityOrder: CapabilityKey[] = [
  "passport",
  "authority",
  "significance",
  "decisioning",
  "human",
  "receipts",
];


const architectureCapabilities = {
  passport: {
    label: "AI Actor Passports",
    caption: "Identify the AI Actor",
    icon: Fingerprint,
    uses: [
      "Technical identities",
      "Platform relationships",
    ],
    output: "AI Actor Passport",
  },

  authority: {
    label: "Machine Authority",
    caption: "Establish delegated authority",
    icon: ShieldCheck,
    uses: [
      "Access & permissions",
      "Organisational delegation",
    ],
    output: "AI Authority Boundary",
  },

  significance: {
    label: "Business Significance",
    caption: "Interpret business meaning",
    icon: BrainCircuit,
    uses: [
      "Current AI activity",
      "Affected business context",
    ],
    output: "AI Business Significance Assessment",
  },

  decisioning: {
    label: "Governance Decisioning",
    caption: "Determine what governance applies",
    icon: Scale,
    uses: [
      "Connected AI context",
      "Applicable governance",
    ],
    output: "AI Governance Decision",
  },

  human: {
    label: "Human Authority & Intervention",
    caption: "Bring accountable authority in",
    icon: CircleUserRound,
    uses: [
      "AI Governance Decision",
      "Authority ownership",
    ],
    output: "Human Authority Requirement",
  },

  receipts: {
    label: "Governance Receipts",
    caption: "Preserve governance evidence",
    icon: FileCheck2,
    uses: [
      "Governance context",
      "Decisions & outcomes",
    ],
    output: "AI Governance Receipt",
  },
} satisfies Record<
  CapabilityKey,
  {
    label: string;
    caption: string;
    icon: typeof Fingerprint;
    uses: string[];
    output: string;
  }
>;


const capabilityLinks = [
  {
    number: "01",
    eyebrow: "AI ACTOR CONTEXT",
    title: "AI Actor Passports",
    question:
      "Which technical representations belong to the same AI Actor?",
    description:
      "Connect technical identities and platform relationships to one persistent AI Actor.",
    output: "AI Actor Passport",
    href: "/platform/actor-passports",
    icon: Fingerprint,
  },

  {
    number: "02",
    eyebrow: "AUTHORITY",
    title: "Machine Authority",
    question:
      "What authority has been delegated to this AI Actor?",
    description:
      "Establish the scope, limits, conditions and human requirements around delegated AI authority.",
    output: "AI Authority Boundary",
    href: "/platform/machine-authority",
    icon: ShieldCheck,
  },

  {
    number: "03",
    eyebrow: "BUSINESS CONTEXT",
    title: "Business Significance",
    question:
      "What does this AI activity mean to the business?",
    description:
      "Connect the current AI activity to the specific business service, process or function it affects.",
    output: "AI Business Significance Assessment",
    href: "/platform/business-significance",
    icon: BrainCircuit,
  },

  {
    number: "04",
    eyebrow: "GOVERNANCE",
    title: "Governance Decisioning",
    question:
      "What governance should apply to this AI activity now?",
    description:
      "Apply organisation-defined governance to the connected AI Actor, authority, activity and business context.",
    output: "AI Governance Decision",
    href: "/platform/governance-decisioning",
    icon: Scale,
  },

  {
    number: "05",
    eyebrow: "HUMAN AUTHORITY",
    title: "Human Authority & Intervention",
    question:
      "When is accountable human authority required?",
    description:
      "Route the governance requirement and supporting context to the appropriate authorised person when human judgment is required.",
    output: "Human Authority Requirement",
    href: "/platform/human-authority",
    icon: CircleUserRound,
  },

  {
    number: "06",
    eyebrow: "EVIDENCE",
    title: "Governance Receipts",
    question:
      "What happened, what was decided, and on what basis?",
    description:
      "Assemble the relevant AI context, governance decisions and supporting references into a durable record.",
    output: "AI Governance Receipt",
    href: "/platform/governance-receipts",
    icon: FileCheck2,
  },
];


const platformAdvantages = [
  {
    title: "One AI Actor across technical systems",
    description:
      "Connect different technical representations to the persistent AI Actor they represent.",
    icon: Fingerprint,
  },

  {
    title: "Authority beyond technical access",
    description:
      "Separate what technology makes possible from what the organisation has actually delegated.",
    icon: ShieldCheck,
  },

  {
    title: "Business context around AI activity",
    description:
      "Understand which services, processes, customers, data and business outcomes are affected.",
    icon: Building2,
  },

  {
    title: "Governance in operating context",
    description:
      "Apply organisation-defined governance using the AI context available at the time of the activity.",
    icon: Scale,
  },

  {
    title: "Accountable human authority",
    description:
      "Bring authorised people into the governance path when accountable judgment or intervention is required.",
    icon: CircleUserRound,
  },

  {
    title: "Evidence connected to the decision",
    description:
      "Preserve what AIGO-OS understood, what was decided and the context behind the outcome.",
    icon: FileCheck2,
  },
];


export function Page02PlatformOverview() {
  const [activeCapability, setActiveCapability] =
    useState<CapabilityKey>("passport");


  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveCapability((current) => {
        const currentIndex =
          capabilityOrder.indexOf(current);

        const nextIndex =
          (currentIndex + 1) %
          capabilityOrder.length;

        return capabilityOrder[nextIndex];
      });
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);


  const active = useMemo(
    () =>
      architectureCapabilities[
        activeCapability
      ],
    [activeCapability],
  );


  return (
    <div className={styles.page}>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>
        <div
          className={styles.heroGrid}
          aria-hidden="true"
        />

        <div
          className={styles.heroGlow}
          aria-hidden="true"
        />


        <div className={styles.shell}>
          <div className={styles.heroLayout}>

            <div className={styles.heroCopy}>
              <p className={styles.blueEyebrow}>
                AIGO-OS PLATFORM
              </p>

              <h1 className={styles.heroTitle}>
                <span>
                  Understand how AI operates
                </span>

                <span>
                  across the enterprise.
                </span>
              </h1>

              <p className={styles.heroLead}>
                AIGO-OS connects technical AI context,
                enterprise business context and accountable
                authority to show which AI Actor is acting,
                what authority it has, what the activity means
                to the business and how it should be governed.
              </p>


              <div className={styles.heroActions}>
                <Link
                  className={styles.primaryButton}
                  href="/contact?intent=demo"
                >
                  Request a Demo

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>

                <a
                  className={styles.secondaryButton}
                  href="#platform-architecture"
                >
                  See How AIGO-OS Works

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>


            <div
              className={styles.heroPlatformVisual}
              aria-label="AIGO-OS platform overview"
            >

              <div className={styles.previewSources}>

                <div>
                  <span>
                    AI SYSTEMS
                  </span>

                  <strong>
                    AI Agents
                  </strong>

                  <strong>
                    Applications
                  </strong>

                  <strong>
                    Models & Runtimes
                  </strong>
                </div>


                <div>
                  <span>
                    ENTERPRISE CONTEXT
                  </span>

                  <strong>
                    Business Systems
                  </strong>

                  <strong>
                    Security & Identity
                  </strong>

                  <strong>
                    Policy & Governance
                  </strong>
                </div>

              </div>


              <div className={styles.previewConnector}>
                <i />
                <b />
              </div>


              <div className={styles.previewCore}>

                <div className={styles.previewCoreHeader}>
                  <span>
                    ENTERPRISE AI OPERATING CONTEXT
                  </span>

                  <strong>
                    AIGO-OS
                  </strong>
                </div>


                <div className={styles.previewCapabilityGrid}>
                  <span>
                    AI Actor
                  </span>

                  <span>
                    Authority
                  </span>

                  <span>
                    Business Significance
                  </span>

                  <span>
                    Governance Decision
                  </span>

                  <span>
                    Human Authority
                  </span>

                  <span>
                    Governance Receipt
                  </span>
                </div>


                <div className={styles.previewOutcome}>
                  <span>
                    CONNECTED AI OPERATING POSTURE
                  </span>

                  <strong>
                    Understand how AI is operating,
                    what it means to the business
                    and where governance needs attention.
                  </strong>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          HOW THE PLATFORM CONNECTS CONTEXT
      ====================================================== */}

      <section
        className={styles.architecture}
        id="platform-architecture"
      >
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                HOW AIGO-OS WORKS
              </p>

              <h2>
                Connect AI technical context to the business and governance context around it.
              </h2>
            </div>

            <p>
              AIGO-OS works with the enterprise systems already
              responsible for identity, security, observability,
              business operations, policy and GRC. It connects
              the relevant context around AI activity rather
              than replacing those systems.
            </p>
          </div>


          <div className={styles.architectureBoard}>

            <div className={styles.architectureInputs}>

              <article>
                <div className={styles.contextIcon}>
                  <Bot
                    size={20}
                    aria-hidden="true"
                  />
                </div>

                <span>
                  AI TECHNICAL CONTEXT
                </span>

                <strong>
                  What the connected AI environment provides
                </strong>

                <div className={styles.contextTags}>
                  <b>
                    AI identities
                  </b>

                  <b>
                    Applications
                  </b>

                  <b>
                    Models & runtimes
                  </b>

                  <b>
                    Service identities
                  </b>

                  <b>
                    Permissions
                  </b>

                  <b>
                    Current activity
                  </b>
                </div>
              </article>


              <article>
                <div className={styles.contextIcon}>
                  <Building2
                    size={20}
                    aria-hidden="true"
                  />
                </div>

                <span>
                  ENTERPRISE CONTEXT
                </span>

                <strong>
                  What the organisation already knows
                </strong>

                <div className={styles.contextTags}>
                  <b>
                    Business services
                  </b>

                  <b>
                    Ownership
                  </b>

                  <b>
                    Security
                  </b>

                  <b>
                    Risk & compliance
                  </b>

                  <b>
                    Policies
                  </b>

                  <b>
                    Business rules
                  </b>
                </div>
              </article>

            </div>


            <div className={styles.architectureFlow}>
              <span>
                CONNECTED CONTEXT
              </span>

              <i />
              <b />
            </div>


            <div className={styles.architectureCore}>

              <div className={styles.coreHeading}>
                <div>
                  <span>
                    ONE PLATFORM
                  </span>

                  <strong>
                    AIGO-OS
                  </strong>
                </div>

                <div className={styles.liveIndicator}>
                  <i />
                  SIX CONNECTED CAPABILITIES
                </div>
              </div>


              <div className={styles.coreCapabilityGrid}>
                {capabilityOrder.map((key) => {
                  const item =
                    architectureCapabilities[key];

                  const Icon = item.icon;

                  const selected =
                    activeCapability === key;

                  return (
                    <button
                      className={
                        selected
                          ? `${styles.coreCapability} ${styles.coreCapabilityActive}`
                          : styles.coreCapability
                      }
                      key={key}
                      type="button"
                      onClick={() =>
                        setActiveCapability(key)
                      }
                      aria-pressed={selected}
                    >
                      <span
                        className={
                          styles.coreCapabilityIcon
                        }
                      >
                        <Icon
                          size={19}
                          aria-hidden="true"
                        />
                      </span>

                      <span>
                        <strong>
                          {item.label}
                        </strong>

                        <small>
                          {item.caption}
                        </small>
                      </span>
                    </button>
                  );
                })}
              </div>


              <div className={styles.activeExplanation}>

                <div>
                  <span>
                    ACTIVE PLATFORM CAPABILITY
                  </span>

                  <strong>
                    {active.label}
                  </strong>
                </div>


                <div>
                  <span>
                    USES
                  </span>

                  {active.uses.map((item) => (
                    <b key={item}>
                      {item}
                    </b>
                  ))}
                </div>


                <ArrowRight
                  className={
                    styles.explanationArrow
                  }
                  size={24}
                  aria-hidden="true"
                />


                <div>
                  <span>
                    OUTPUT
                  </span>

                  <b>
                    {active.output}
                  </b>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PLATFORM CAPABILITIES
      ====================================================== */}

      <section className={styles.capabilities}>
        <div className={styles.shell}>

          <div className={styles.centerHeading}>
            <p className={styles.goldEyebrow}>
              PLATFORM CAPABILITIES
            </p>

            <h2>
              One platform. Six connected capabilities.
            </h2>

            <p>
              Each capability answers a different question,
              produces a clear output and passes relevant
              context into the next part of the platform.
            </p>
          </div>


          <div className={styles.capabilityGrid}>
            {capabilityLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  className={styles.capabilityCard}
                  href={item.href}
                  key={item.href}
                >

                  <div className={styles.capabilityCardTop}>
                    <span>
                      {item.number}
                    </span>

                    <div>
                      <Icon
                        size={20}
                        aria-hidden="true"
                      />
                    </div>
                  </div>


                  <p className={styles.capabilityEyebrow}>
                    {item.eyebrow}
                  </p>


                  <h3>
                    {item.title}
                  </h3>


                  <p className={styles.capabilityQuestion}>
                    {item.question}
                  </p>


                  <p>
                    {item.description}
                  </p>


                  <div className={styles.capabilityOutput}>
                    <span>
                      OUTPUT
                    </span>

                    <strong>
                      {item.output}
                    </strong>
                  </div>


                  <strong className={styles.capabilityLink}>
                    Explore capability

                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                    />
                  </strong>

                </Link>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          WHY CONNECTED CAPABILITIES MATTER
      ====================================================== */}

      <section className={styles.advantages}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.blueEyebrow}>
                WHY THE CONNECTED MODEL MATTERS
              </p>

              <h2>
                Build a clearer view of how AI is operating across the organisation.
              </h2>
            </div>

            <p>
              AIGO-OS connects identity, authority, business
              meaning, governance decisions, human accountability
              and evidence around the same AI activity.
            </p>
          </div>


          <div className={styles.advantageGrid}>
            {platformAdvantages.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className={styles.advantageCard}
                  key={item.title}
                >
                  <div className={styles.advantageIcon}>
                    <Icon
                      size={22}
                      aria-hidden="true"
                    />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          ENTERPRISE INTEGRATION
      ====================================================== */}

      <section className={styles.integration}>
        <div className={styles.shell}>

          <div className={styles.integrationPanel}>

            <div>
              <p className={styles.goldEyebrow}>
                BUILT FOR THE ENTERPRISE STACK
              </p>

              <h2>
                Connect AI governance context without replacing the systems that run the business.
              </h2>

              <p>
                Identity, security, observability, business
                applications, service management and GRC systems
                remain responsible for their existing functions.
                AIGO-OS connects relevant AI and business context
                across those systems.
              </p>
            </div>


            <div className={styles.integrationVisual}>

              <div className={styles.enterpriseColumn}>
                <span>
                  ENTERPRISE SYSTEMS
                </span>

                <b>
                  Identity & access
                </b>

                <b>
                  Security
                </b>

                <b>
                  Observability
                </b>

                <b>
                  Business systems
                </b>

                <b>
                  Service management
                </b>

                <b>
                  Policy & GRC
                </b>
              </div>


              <div className={styles.integrationBridge}>
                <i />

                <Network
                  size={25}
                  aria-hidden="true"
                />

                <i />
              </div>


              <div className={styles.aigoColumn}>
                <span>
                  CONNECTED AI OPERATING CONTEXT
                </span>

                <strong>
                  AIGO-OS
                </strong>

                <div>
                  <b>
                    AI Actor
                  </b>

                  <b>
                    Authority
                  </b>

                  <b>
                    Business Significance
                  </b>

                  <b>
                    Governance Decision
                  </b>

                  <b>
                    Human Authority
                  </b>

                  <b>
                    Governance Receipt
                  </b>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className={styles.finalCta}>
        <div className={styles.shell}>

          <div className={styles.finalPanel}>

            <div>
              <p className={styles.blueEyebrow}>
                SEE AIGO-OS IN YOUR ENVIRONMENT
              </p>

              <h2>
                See how AIGO-OS connects the context around enterprise AI.
              </h2>
            </div>


            <div>
              <p>
                Understand which AI Actor is operating,
                what authority it has, what its activity means
                to the business, how governance applies and
                where accountable action is required.
              </p>

              <Link
                className={styles.primaryButton}
                href="/contact?intent=demo"
              >
                Request a Demo

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}


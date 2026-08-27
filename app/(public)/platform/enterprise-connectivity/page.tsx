import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Database,
  FileText,
  Network,
  RadioTower,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "Enterprise Connectivity for AI Governance",
  description:
    "AIGO-OS is designed to connect relevant context across enterprise identity, security, observability, workflow and business systems without recreating those platforms.",
  path: "/platform/enterprise-connectivity",
  keywords: [
    "enterprise AI connectivity",
    "AI governance integrations",
    "enterprise AI systems",
  ],
});
const sources = [
  {
    icon: ShieldCheck,
    label: "Governance & risk",
    examples: "GRC platforms, risk registers and control libraries",
  },
  {
    icon: Workflow,
    label: "IT service management",
    examples: "ITSM, CMDB, services, incidents and changes",
  },
  {
    icon: FileText,
    label: "Policy & knowledge",
    examples: "Policies, standards, requirements and knowledge repositories",
  },
  {
    icon: Network,
    label: "Enterprise architecture",
    examples: "Applications, technologies, services and dependencies",
  },
  {
    icon: RadioTower,
    label: "Operations & observability",
    examples: "Events, monitoring, operational signals and service health",
  },
  {
    icon: BrainCircuit,
    label: "AI & data platforms",
    examples: "Models, agents, AI services, datasets and data dependencies",
  },
  {
    icon: Boxes,
    label: "Business systems",
    examples: "Processes, products, customers, suppliers and organisational context",
  },
  {
    icon: Database,
    label: "Enterprise inventories",
    examples: "Applications, assets, ownership, classification and criticality",
  },
];


export default function EnterpriseConnectivityPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>

              <div className={styles.platformIdentity}>
                <span>
                  AIGO-OS PLATFORM
                </span>

                <strong>
                  ENTERPRISE CONNECTIVITY
                </strong>
              </div>

              <h1 className={styles.heroTitle}>
                <span>
                  Connect what the enterprise
                </span>

                <span>
                  already knows.
                </span>
              </h1>

              <p className={styles.heroText}>
                AIGO-OS connects to the systems where governance,
                technology, AI and business information already lives,
                creating a shared intelligence foundation without requiring
                the enterprise to rebuild those records inside another platform.
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


            <div className={styles.connectionVisual}>

              <div className={styles.visualHeading}>
                <span>
                  Connected enterprise environment
                </span>

                <strong>
                  Existing systems connect into one enterprise context.
                </strong>
              </div>


              <div className={styles.connectionMap}>

                <div className={styles.sourceNodes}>

                  <div className={styles.mapSource}>
                    <span>Governance</span>
                    <strong>GRC</strong>
                  </div>

                  <div className={styles.mapSource}>
                    <span>Services</span>
                    <strong>ITSM / CMDB</strong>
                  </div>

                  <div className={styles.mapSource}>
                    <span>Knowledge</span>
                    <strong>Policy repositories</strong>
                  </div>

                  <div className={styles.mapSource}>
                    <span>Technology</span>
                    <strong>Architecture</strong>
                  </div>

                  <div className={styles.mapSource}>
                    <span>Operations</span>
                    <strong>Observability</strong>
                  </div>

                  <div className={styles.mapSource}>
                    <span>AI & data</span>
                    <strong>Models, agents & data</strong>
                  </div>

                </div>


                <div
                  className={styles.flowCanvas}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 230 360"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <filter id="signalGlow">
                        <feGaussianBlur
                          stdDeviation="2.4"
                          result="blur"
                        />

                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <path
                      id="flow1"
                      d="M 0 28 C 78 28, 118 162, 150 180"
                      className={styles.flowPath}
                    />

                    <path
                      id="flow2"
                      d="M 0 88 C 78 88, 116 164, 150 180"
                      className={styles.flowPath}
                    />

                    <path
                      id="flow3"
                      d="M 0 148 C 85 148, 116 170, 150 180"
                      className={styles.flowPath}
                    />

                    <path
                      id="flow4"
                      d="M 0 208 C 85 208, 116 190, 150 180"
                      className={styles.flowPath}
                    />

                    <path
                      id="flow5"
                      d="M 0 268 C 78 268, 116 196, 150 180"
                      className={styles.flowPath}
                    />

                    <path
                      id="flow6"
                      d="M 0 328 C 78 328, 118 198, 150 180"
                      className={styles.flowPath}
                    />

                    <path
                      id="combinedFlow"
                      d="M 150 180 L 230 180"
                      className={styles.combinedPath}
                    />


                    <circle
                      r="4.2"
                      className={styles.signalDot}
                      filter="url(#signalGlow)"
                    >
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        begin="0s"
                      >
                        <mpath href="#flow1" />
                      </animateMotion>
                    </circle>

                    <circle
                      r="4.2"
                      className={styles.signalDot}
                      filter="url(#signalGlow)"
                    >
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        begin="-0.4s"
                      >
                        <mpath href="#flow2" />
                      </animateMotion>
                    </circle>

                    <circle
                      r="4.2"
                      className={styles.signalDot}
                      filter="url(#signalGlow)"
                    >
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        begin="-0.8s"
                      >
                        <mpath href="#flow3" />
                      </animateMotion>
                    </circle>

                    <circle
                      r="4.2"
                      className={styles.signalDot}
                      filter="url(#signalGlow)"
                    >
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        begin="-1.2s"
                      >
                        <mpath href="#flow4" />
                      </animateMotion>
                    </circle>

                    <circle
                      r="4.2"
                      className={styles.signalDot}
                      filter="url(#signalGlow)"
                    >
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        begin="-1.6s"
                      >
                        <mpath href="#flow5" />
                      </animateMotion>
                    </circle>

                    <circle
                      r="4.2"
                      className={styles.signalDot}
                      filter="url(#signalGlow)"
                    >
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        begin="-2s"
                      >
                        <mpath href="#flow6" />
                      </animateMotion>
                    </circle>


                    <circle
                      cx="150"
                      cy="180"
                      r="12"
                      className={styles.junctionOuter}
                    />

                    <circle
                      cx="150"
                      cy="180"
                      r="5.5"
                      className={styles.junctionInner}
                    />


                    <circle
                      r="4.8"
                      className={styles.combinedSignal}
                      filter="url(#signalGlow)"
                    >
                      <animateMotion
                        dur="1.3s"
                        repeatCount="indefinite"
                      >
                        <mpath href="#combinedFlow" />
                      </animateMotion>
                    </circle>
                  </svg>
                </div>


                <div className={styles.aigoNode}>

                  <div className={styles.nodeStatus}>
                    <i aria-hidden="true" />

                    <span>
                      Connected
                    </span>
                  </div>

                  <small>
                    AIGO-OS
                  </small>

                  <strong>
                    Shared enterprise context
                  </strong>

                  <p>
                    Authoritative information becomes available to Govern
                    and Impact without becoming another copy of the
                    enterprise record.
                  </p>

                  <div className={styles.productTags}>
                    <span>
                      Govern
                    </span>

                    <span>
                      Impact
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.sourceSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>
              <p className={styles.sectionLabel}>
                Connect the existing environment
              </p>

              <h2>
                Enterprise information lives across specialised systems.
              </h2>
            </div>

            <p>
              AIGO-OS works across those systems instead of requiring
              governance, service, architecture, business or AI information
              to be consolidated into one new repository first.
            </p>

          </div>


          <div className={styles.carouselViewport}>
            <div className={styles.carouselTrack}>

              {[...sources, ...sources].map((source, index) => {
                const Icon = source.icon;

                return (
                  <article
                    key={`${source.label}-${index}`}
                    className={styles.sourceCard}
                    aria-hidden={index >= sources.length}
                  >
                    <div className={styles.sourceCardTop}>
                      <div className={styles.sourceIcon}>
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      <span>
                        Enterprise source
                      </span>
                    </div>

                    <div className={styles.sourceCardBody}>
                      <strong>
                        {source.label}
                      </strong>

                      <p>
                        {source.examples}
                      </p>
                    </div>
                  </article>
                );
              })}

            </div>
          </div>


          <div className={styles.carouselNote}>
            <span>
              Governance
            </span>

            <span>
              Technology
            </span>

            <span>
              Business
            </span>

            <span>
              AI
            </span>

            <span>
              Operations
            </span>
          </div>

        </PublicContainer>
      </section>


      <section className={styles.authoritySection}>
        <PublicContainer>

          <div className={styles.authorityGrid}>

            <div className={styles.authorityCopy}>
              <p className={styles.sectionLabelLight}>
                Preserve enterprise authority
              </p>

              <h2>
                AIGO-OS connects the record. It does not replace its owner.
              </h2>

              <p>
                Service management platforms can continue managing services
                and changes. GRC platforms can continue managing governance
                records and workflows. Architecture, policy, observability
                and business systems continue performing their existing roles.
              </p>

              <p>
                AIGO-OS uses the information across them to create the
                connected enterprise context needed for intelligence.
              </p>
            </div>


            <div className={styles.authorityVisual}>

              <div className={styles.authorityCard}>
                <span>
                  Service management
                </span>

                <strong>
                  Services, changes and operational records
                </strong>

                <small>
                  Remains authoritative
                </small>
              </div>

              <div className={styles.authorityCard}>
                <span>
                  Governance platform
                </span>

                <strong>
                  Policies, controls, risks and assurance
                </strong>

                <small>
                  Remains authoritative
                </small>
              </div>

              <div className={styles.authorityCard}>
                <span>
                  Architecture & technology
                </span>

                <strong>
                  Applications, technology and dependencies
                </strong>

                <small>
                  Remains authoritative
                </small>
              </div>

              <div className={styles.authorityAigo}>
                <span>
                  AIGO-OS
                </span>

                <strong>
                  Connected context across the enterprise
                </strong>

                <small>
                  Intelligence layer
                </small>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.productSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>
              <p className={styles.sectionLabel}>
                One connection foundation
              </p>

              <h2>
                The same enterprise connections support Govern and Impact.
              </h2>
            </div>

            <p>
              The products use different parts of the connected enterprise
              context to solve different problems.
            </p>

          </div>


          <div className={styles.productGrid}>

            <Link
              href="/products/aigo-os-govern"
              className={styles.productCard}
            >
              <span>
                AIGO-OS Govern
              </span>

              <h3>
                Connect the governance environment.
              </h3>

              <p>
                Bring policies, requirements, controls, service scope,
                assurance information and other governance context together
                without replacing existing GRC platforms.
              </p>

              <strong>
                Explore Govern
                <ArrowRight size={15} aria-hidden="true" />
              </strong>
            </Link>


            <Link
              href="/products/aigo-os-impact"
              className={styles.productCard}
            >
              <span>
                AIGO-OS Impact
              </span>

              <h3>
                Connect technology to business context.
              </h3>

              <p>
                Bring applications, services, incidents, changes,
                dependencies, AI systems and business context together so
                technical conditions can be understood in business terms.
              </p>

              <strong>
                Explore Impact
                <ArrowRight size={15} aria-hidden="true" />
              </strong>
            </Link>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.nextSection}>
        <PublicContainer>

          <Link
            href="/platform/enterprise-context"
            className={styles.nextCapability}
          >
            <div>
              <span>
                Explore next
              </span>

              <strong>
                Enterprise Context
              </strong>

              <p>
                Connected information becomes more useful when AIGO-OS
                understands what it represents inside the organisation.
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


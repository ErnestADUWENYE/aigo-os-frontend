import { createPageMetadata } from "@/lib/seo/metadata";
import type { CSSProperties } from "react";

import Link from "next/link";

import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cloud,
  Database,
  Eye,
  FileText,
  Layers3,
  Network,
  ScanSearch,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "Identify Hidden AI Dependencies",
  description:
    "AIGO-OS connects relationships between AI, enterprise systems, services, ownership and dependencies so hidden operational and governance connections become easier to understand.",
  path: "/solutions/hidden-dependencies",
  keywords: [
    "AI dependencies",
    "AI dependency mapping",
    "enterprise AI relationships",
  ],
});
const onboardingDependencies = [
  {
    icon: ShieldCheck,
    type: "Identity service",
    title: "Identity Verification",
    description:
      "Confirms the customer's identity during onboarding.",
  },
  {
    icon: Database,
    type: "Customer data",
    title: "Customer Profile",
    description:
      "Provides customer record and profile context.",
  },
  {
    icon: FileText,
    type: "Document service",
    title: "Document Services",
    description:
      "Provides submitted documents and supporting evidence.",
  },
];


const sourceViews = [
  {
    source: "Service inventory",
    title: "Customer Onboarding",
    visible:
      "Shows the business service and the application used to deliver it.",
    missing:
      "The identity, data and infrastructure dependencies behind the service may be outside this view.",
  },
  {
    source: "Architecture repository",
    title: "Onboarding Platform",
    visible:
      "Shows application and technology relationships around the platform.",
    missing:
      "The business service and customer context supported by those components may not be visible here.",
  },
  {
    source: "Data and platform records",
    title: "Customer Profile",
    visible:
      "Shows data and platform relationships used during onboarding.",
    missing:
      "The wider business significance of those relationships can remain elsewhere.",
  },
];


const deeperDependencies = [
  {
    icon: Server,
    type: "Platform",
    title: "Workflow Platform",
    description:
      "Coordinates the onboarding workflow in its operational platform.",
  },
  {
    icon: BrainCircuit,
    type: "Risk capability",
    title: "Risk Screening",
    description:
      "Provides risk assessment information used during onboarding.",
  },
  {
    icon: Cloud,
    type: "Infrastructure",
    title: "Cloud Runtime",
    description:
      "Provides the runtime supporting the onboarding application.",
  },
];


const significanceFacts = [
  {
    label: "Business service",
    value: "Customer Onboarding",
  },
  {
    label: "Environment",
    value: "Production",
  },
  {
    label: "Criticality",
    value: "Business critical",
  },
  {
    label: "Owner",
    value: "Customer Operations",
  },
];


export default function HiddenDependenciesPage() {
  return (
    <main className={styles.page}>

      {/* HERO */}

      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.productLabel}>
                AIGO-OS Impact
              </p>

              <h1>
                Hidden Dependencies
              </h1>

              <p className={styles.heroLead}>
                Important business services can rely on applications, data,
                identity, AI and infrastructure that are difficult to see
                together.
              </p>

              <p className={styles.heroText}>
                AIGO-OS Impact connects existing relationship information so
                teams can understand what a service relies on and how those
                dependencies extend through the enterprise.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/talk-to-an-expert"
                  className={styles.primaryButton}
                >
                  Talk to an Expert

                  <ArrowRight
                    size={16}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/products/aigo-os-impact"
                  className={styles.secondaryButton}
                >
                  Explore AIGO-OS Impact
                </Link>
              </div>
            </div>


            <div
              className={styles.discoveryPanel}
              aria-label="Hidden dependencies around Customer Onboarding becoming visible"
            >
              <div className={styles.discoveryHeader}>
                <div>
                  <span>
                    Dependency discovery
                  </span>

                  <strong>
                    Customer Onboarding
                  </strong>
                </div>

                <div className={styles.discoveryStatus}>
                  <ScanSearch
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  Connected context
                </div>
              </div>


              <div className={styles.discoveryBody}>
                <div className={styles.selectedService}>
                  <Workflow
                    size={24}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <span>
                    Selected business service
                  </span>

                  <strong>
                    Customer Onboarding
                  </strong>

                  <small>
                    Production
                  </small>
                </div>


                <div className={styles.discoveryCards}>
                  {onboardingDependencies.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.title}
                        className={styles.discoveryCard}
                        style={
                          {
                            "--reveal-delay": `${index * 0.7}s`,
                          } as CSSProperties
                        }
                      >
                        <div className={styles.discoveryIcon}>
                          <Icon
                            size={18}
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                        </div>

                        <div className={styles.discoveryCardContent}>
                          <span className={styles.discoveryType}>
                            {item.type}
                          </span>

                          <strong className={styles.discoveryTitle}>
                            {item.title}
                          </strong>

                          <p className={styles.discoveryDescription}>
                            {item.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>


              <div className={styles.discoveryResult}>
                <Eye
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    Dependency picture
                  </span>

                  <strong>
                    Multiple enterprise domains support the same business service.
                  </strong>
                </div>
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      {/* PROBLEM */}

      <section className={styles.problemSection}>
        <PublicContainer>

          <div className={styles.problemIntro}>
            <div>
              <p className={styles.sectionLabelGold}>
                Why dependencies stay hidden
              </p>

              <h2>
                Each system can hold a valid relationship and still show only
                part of the picture.
              </h2>
            </div>

            <div className={styles.problemText}>
              <p>
                Service inventories, architecture repositories, CMDBs, data
                platforms and other systems each maintain useful relationship
                information.
              </p>

              <p>
                The problem appears when the organisation needs to understand
                those relationships together around the same business service.
              </p>
            </div>
          </div>


          <div className={styles.sourceViews}>
            {sourceViews.map((item) => (
              <article
                key={item.source}
                className={styles.sourceView}
              >
                <div className={styles.sourceViewHeader}>
                  <span>
                    {item.source}
                  </span>

                  <Network
                    size={17}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.sourceViewContent}>
                  <strong>
                    {item.title}
                  </strong>

                  <p>
                    {item.visible}
                  </p>
                </div>

                <div className={styles.sourceViewMissing}>
                  <span>
                    Outside this view
                  </span>

                  <p>
                    {item.missing}
                  </p>
                </div>
              </article>
            ))}
          </div>


          <div className={styles.problemSummary}>
            <div className={styles.problemSummaryIcon}>
              <Layers3
                size={20}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <div>
              <span>
                The dependency problem
              </span>

              <strong>
                Each source is useful. None necessarily shows the complete
                dependency context by itself.
              </strong>
            </div>
          </div>

        </PublicContainer>
      </section>


      {/* CONNECTED VIEW */}

      <section className={styles.connectedSection}>
        <PublicContainer>
          <div className={styles.connectedGrid}>

            <div className={styles.connectedCopy}>
              <p className={styles.sectionLabel}>
                With AIGO-OS Impact
              </p>

              <h2>
                Bring the relationship information together around the service
                that matters.
              </h2>

              <p>
                AIGO-OS connects relationship information from existing
                systems and places it into shared enterprise context. The
                authoritative records remain in the systems responsible for
                maintaining them.
              </p>
            </div>


            <div className={styles.connectedWorkspace}>
              <div className={styles.connectedService}>
                <Workflow
                  size={21}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    Business service
                  </span>

                  <strong>
                    Customer Onboarding
                  </strong>
                </div>
              </div>


              <div className={styles.connectedDependencyGrid}>
                {onboardingDependencies.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article key={item.title}>
                      <div className={styles.connectedIcon}>
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <div className={styles.connectedCardContent}>
                        <span>
                          {item.type}
                        </span>

                        <strong>
                          {item.title}
                        </strong>

                        <p>
                          {item.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>


              <div className={styles.connectedOutcome}>
                <CheckCircle2
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <span>
                  Immediate dependencies are visible around the same business service.
                </span>
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      {/* DEPTH */}

      <section className={styles.depthSection}>
        <PublicContainer>

          <div className={styles.depthIntro}>
            <p className={styles.sectionLabelGold}>
              Hidden behind the first dependency
            </p>

            <h2>
              One dependency can rely on other dependencies that are not
              obvious from the first relationship.
            </h2>

            <p>
              AIGO-OS can follow connected relationship information further so
              users can understand how reliance extends beyond the first
              visible object.
            </p>
          </div>


          <div className={styles.depthCanvas}>
            <div className={styles.depthSelected}>
              <span>
                Selected dependency
              </span>

              <strong>
                Onboarding Platform
              </strong>

              <p>
                Supports Customer Onboarding
              </p>
            </div>


            <div className={styles.depthLayers}>

              <div className={styles.depthLayerTitle}>
                What the platform relies on
              </div>

              <div className={styles.depthImmediate}>
                <article>
                  <ShieldCheck
                    size={18}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <span>
                      Identity service
                    </span>

                    <strong>
                      Identity Verification
                    </strong>
                  </div>
                </article>

                <article>
                  <Database
                    size={18}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <span>
                      Customer data
                    </span>

                    <strong>
                      Customer Profile
                    </strong>
                  </div>
                </article>
              </div>


              <div className={styles.depthLayerTitle}>
                Dependencies behind those services
              </div>

              <div className={styles.depthDeeper}>
                {deeperDependencies.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      style={
                        {
                          "--depth-delay": `${index * 0.55}s`,
                        } as CSSProperties
                      }
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      <div>
                        <span>
                          {item.type}
                        </span>

                        <strong>
                          {item.title}
                        </strong>

                        <p>
                          {item.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

        </PublicContainer>
      </section>


      {/* SIGNIFICANCE */}

      <section className={styles.significanceSection}>
        <PublicContainer>
          <div className={styles.significanceGrid}>

            <div className={styles.significanceCopy}>
              <p className={styles.sectionLabel}>
                Why the dependency matters
              </p>

              <h2>
                A technical relationship becomes more useful when its business
                context is visible.
              </h2>

              <p>
                AIGO-OS adds surrounding enterprise context so users can
                understand why a dependency matters, not simply that the
                relationship exists.
              </p>
            </div>


            <div className={styles.significanceCard}>
              <div className={styles.significanceHeader}>
                <div className={styles.significanceIcon}>
                  <Network
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>
                    Dependency context
                  </span>

                  <strong>
                    Customer Onboarding relies on Onboarding Platform
                  </strong>
                </div>
              </div>


              <div className={styles.significanceReason}>
                <span>
                  Why this matters
                </span>

                <strong>
                  This dependency supports a production, business critical,
                  customer facing onboarding service.
                </strong>
              </div>


              <div className={styles.significanceFacts}>
                {significanceFacts.map((item) => (
                  <div key={item.label}>
                    <span>
                      {item.label}
                    </span>

                    <strong>
                      {item.value}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      {/* BOUNDARY */}

      <section className={styles.boundarySection}>
        <PublicContainer>
          <div className={styles.boundaryGrid}>

            <div>
              <p className={styles.sectionLabelGold}>
                The AIGO-OS role
              </p>

              <h2>
                Understand dependency context without creating another system
                of record.
              </h2>
            </div>

            <div className={styles.boundaryText}>
              <p>
                Architecture repositories, CMDBs, service inventories, data
                platforms and other enterprise systems continue to maintain
                their authoritative records.
              </p>

              <p>
                AIGO-OS Impact connects and reasons across that information so
                the dependency picture can be understood in context.
              </p>
            </div>

          </div>
        </PublicContainer>
      </section>


      {/* OUTCOME */}

      <section className={styles.outcomeSection}>
        <PublicContainer>
          <div className={styles.outcomeGrid}>

            <div>
              <p className={styles.sectionLabelGold}>
                What becomes visible
              </p>

              <h2>
                See the dependency picture that was previously scattered
                across systems.
              </h2>
            </div>


            <div className={styles.outcomeList}>
              <div>
                <Eye
                  size={18}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>
                  What a business service relies on
                </span>
              </div>

              <div>
                <Network
                  size={18}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>
                  Dependencies beyond the first relationship
                </span>
              </div>

              <div>
                <Building2
                  size={18}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>
                  The business context around those relationships
                </span>
              </div>

              <div>
                <CheckCircle2
                  size={18}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>
                  A clearer view without replacing source systems
                </span>
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      {/* FINAL CTA */}

      <section className={styles.finalSection}>
        <PublicContainer>
          <div className={styles.finalPanel}>

            <div>
              <p>
                AIGO-OS Impact
              </p>

              <h2>
                Make hidden dependencies easier to see and understand.
              </h2>

              <span>
                Connect relationship information across existing enterprise
                systems and understand the dependency context around the
                services that matter.
              </span>
            </div>


            <div className={styles.finalActions}>
              <Link
                href="/talk-to-an-expert"
                className={styles.finalPrimary}
              >
                Talk to an Expert

                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/products/aigo-os-impact"
                className={styles.finalSecondary}
              >
                Explore AIGO-OS Impact
              </Link>
            </div>

          </div>
        </PublicContainer>
      </section>

    </main>
  );
}


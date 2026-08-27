import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import styles from "./page.module.css";


export const metadata = createPageMetadata({
  title: "Understand AI Dependencies on Critical Services",
  description:
    "AIGO-OS reveals relationships between AI activity and critical business services so organisations can understand dependencies and potential operational consequence.",
  path: "/solutions/unclear-critical-service-dependencies",
  keywords: [
    "AI critical service dependencies",
    "AI operational dependencies",
    "enterprise AI impact",
  ],
});
function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 21V5.5L12 3v18M12 8h7v13M8 8h1M8 12h1M8 16h1M15 11h1M15 15h1M15 19h1M3 21h18" />
    </svg>
  );
}

function ApplicationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="6" rx="2" />
      <rect x="4" y="14" width="16" height="6" rx="2" />
      <path d="M8 7h.01M8 17h.01" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 19 6v5c0 4.8-2.8 8.1-7 10-4.2-1.9-7-5.2-7-10V6l7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.5-4" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

function PlatformIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="7" height="7" rx="2" />
      <rect x="14" y="13" width="7" height="7" rx="2" />
      <path d="M10 7.5h4a3 3 0 0 1 3 3V13" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 18h10a4 4 0 0 0 .7-7.9A6 6 0 0 0 6.4 8.4 4.8 4.8 0 0 0 7 18Z" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 22 20H2L12 3Z" />
      <path d="M12 9v5M12 17h.01" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.6 2.6L16.5 9" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

const dependencies = [
  {
    type: "Application",
    title: "Onboarding Platform",
    description: "Runs the onboarding journey",
    icon: <ApplicationIcon />,
  },
  {
    type: "Identity",
    title: "Identity Verification",
    description: "Confirms customer identity",
    icon: <ShieldIcon />,
  },
  {
    type: "Information",
    title: "Customer Profile Data",
    description: "Supports account creation",
    icon: <DataIcon />,
  },
];

const fragmentedRecords = [
  {
    source: "Service inventory",
    knows: "Customer Onboarding is critical",
    misses: "What technology must remain available",
  },
  {
    source: "Application catalogue",
    knows: "Onboarding Platform supports the service",
    misses: "The deeper platform and runtime chain",
  },
  {
    source: "Identity inventory",
    knows: "Identity Verification is in use",
    misses: "Its significance to service continuity",
  },
  {
    source: "Technology inventory",
    knows: "Cloud Runtime exists",
    misses: "Which critical service ultimately depends on it",
  },
];

const outcomes = [
  {
    number: "01",
    title: "See the support chain",
    text: "Understand the applications, information, platforms and technology beneath a critical service.",
  },
  {
    number: "02",
    title: "Separate direct from deeper dependencies",
    text: "Distinguish what directly delivers the service from technology that supports those essential components.",
  },
  {
    number: "03",
    title: "Expose uncertainty",
    text: "Keep relationships that still need validation visible instead of presenting incomplete context as certainty.",
  },
];

export default function UnclearCriticalServiceDependenciesPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>AIGO-OS IMPACT</p>

            <h1 className={styles.title}>
              Unclear Critical Service Dependencies
            </h1>

            <p className={styles.lead}>
              You know the service is critical. The harder question is what
              must remain available for it to work.
            </p>

            <p className={styles.body}>
              Critical service records can identify importance, ownership and
              status without showing the complete enterprise support structure
              beneath the service. AIGO-OS Impact brings those connected
              dependencies into one understandable view.
            </p>

            <div className={styles.actions}>
              <Link href="/talk-to-an-expert" className={styles.primaryAction}>
                <span>Talk to an Expert</span>
                <ArrowIcon />
              </Link>

              <Link href="/products/aigo-os-impact" className={styles.secondaryAction}>
                Explore AIGO-OS Impact
              </Link>
            </div>
          </div>

          <div className={styles.visualColumn}>
            <div className={styles.dependencyMap}>
              <div className={styles.mapHeader}>
                <div>
                  <span className={styles.mapEyebrow}>
                    CRITICAL SERVICE DEPENDENCY VIEW
                  </span>
                  <h2>What must stay available?</h2>
                </div>

                <span className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  Critical service
                </span>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <BuildingIcon />
                </div>

                <div className={styles.serviceIdentity}>
                  <span>CRITICAL BUSINESS SERVICE</span>
                  <strong>Customer Onboarding</strong>
                  <small>Customer-facing business service</small>
                </div>

                <div className={styles.knownState}>
                  <span>KNOWN</span>
                  <strong>The service is critical.</strong>
                </div>
              </div>

              <div className={styles.connectorRail} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className={styles.foundation}>
                <div className={styles.foundationHeading}>
                  <div>
                    <span>ESSENTIAL FOUNDATION</span>
                    <strong>
                      Direct dependencies needed to deliver the service
                    </strong>
                  </div>

                  <div className={styles.layerMark}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className={styles.dependencyGrid}>
                  {dependencies.map((item) => (
                    <article
                      className={styles.dependencyCard}
                      key={item.title}
                    >
                      <div className={styles.dependencyIcon}>{item.icon}</div>

                      <div>
                        <span>{item.type}</span>
                        <strong>{item.title}</strong>
                        <small>{item.description}</small>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className={styles.deeperSupport}>
                <div className={styles.deeperLabel}>
                  <span>DEEPER SUPPORT</span>
                  <strong>Technology beneath the essentials</strong>
                </div>

                <div className={styles.compactDependency}>
                  <PlatformIcon />
                  <div>
                    <span>PLATFORM</span>
                    <strong>Workflow Platform</strong>
                  </div>
                </div>

                <div className={styles.compactDependency}>
                  <CloudIcon />
                  <div>
                    <span>TECHNOLOGY</span>
                    <strong>Cloud Runtime</strong>
                  </div>
                </div>
              </div>

              <div className={styles.reviewRow}>
                <div className={styles.reviewIcon}>
                  <AlertIcon />
                </div>

                <div className={styles.reviewCopy}>
                  <span>RELATIONSHIP STILL UNCLEAR</span>
                  <strong>External Document Service</strong>
                </div>

                <span className={styles.reviewBadge}>Needs review</span>
              </div>

              <div className={styles.mapConclusion}>
                <span className={styles.eyeIcon}>◎</span>
                <p>
                  See the critical service together with the dependencies that
                  keep it operating, including relationships that still need
                  review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className={styles.problemSection}>
        <div className={styles.sectionInner}>
          <div className={styles.problemIntro}>
            <div>
              <p className={styles.sectionEyebrow}>THE PROBLEM</p>

              <h2 className={styles.sectionTitle}>
                Criticality can be known while the dependency picture remains
                incomplete.
              </h2>
            </div>

            <p className={styles.sectionBody}>
              Customer Onboarding may already be classified as a critical
              business service. That does not mean the applications,
              information, platforms and technology required to keep it
              operating are understood together.
            </p>
          </div>

          <div className={styles.fragmentedView}>
            <div className={styles.fragmentedHeader}>
              <span>WHAT EACH SYSTEM KNOWS</span>
              <strong>Useful records. Fragmented context.</strong>
            </div>

            <div className={styles.fragmentedGrid}>
              {fragmentedRecords.map((record) => (
                <article className={styles.fragmentCard} key={record.source}>
                  <span className={styles.fragmentSource}>{record.source}</span>

                  <div className={styles.fragmentKnown}>
                    <span>KNOWN</span>
                    <strong>{record.knows}</strong>
                  </div>

                  <div className={styles.fragmentMissing}>
                    <span>NOT CLEAR FROM THIS RECORD</span>
                    <p>{record.misses}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS QUESTION */}
      <section className={styles.questionSection}>
        <div className={styles.sectionInner}>
          <div className={styles.questionLayout}>
            <div className={styles.questionCopy}>
              <p className={styles.sectionEyebrow}>THE BUSINESS QUESTION</p>

              <h2 className={styles.sectionTitle}>
                If Customer Onboarding is disrupted, what should teams protect
                first?
              </h2>

              <p className={styles.sectionBody}>
                Answering that question requires more than a list of
                technologies. Teams need to understand which enterprise
                components directly support the service, which sit deeper in
                the support chain, and which relationships are still uncertain.
              </p>
            </div>

            <div className={styles.questionVisual}>
              <div className={styles.questionService}>
                <span>CRITICAL SERVICE</span>
                <strong>Customer Onboarding</strong>
              </div>

              <div className={styles.questionLine} />

              <div className={styles.questionLayers}>
                <div className={styles.questionLayer}>
                  <span>DIRECT</span>
                  <strong>Onboarding Platform</strong>
                  <small>Delivers the customer journey</small>
                </div>

                <div className={styles.questionLayer}>
                  <span>DIRECT</span>
                  <strong>Identity Verification</strong>
                  <small>Confirms customer identity</small>
                </div>

                <div className={styles.questionLayer}>
                  <span>DIRECT</span>
                  <strong>Customer Profile Data</strong>
                  <small>Supports account creation</small>
                </div>

                <div className={styles.questionLayerDeeper}>
                  <span>DEEPER</span>
                  <strong>Workflow Platform + Cloud Runtime</strong>
                  <small>Support the components above</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNCERTAINTY */}
      <section className={styles.uncertaintySection}>
        <div className={styles.sectionInner}>
          <div className={styles.uncertaintyLayout}>
            <div className={styles.uncertaintyVisual}>
              <div className={styles.uncertaintyTop}>
                <AlertIcon />
                <span>DEPENDENCY REQUIRES REVIEW</span>
              </div>

              <div className={styles.uncertaintyObject}>
                <span>EXTERNAL SERVICE</span>
                <strong>External Document Service</strong>
              </div>

              <div className={styles.uncertaintyPath}>
                <span className={styles.dashedPath} />
                <span className={styles.questionMark}>?</span>
              </div>

              <div className={styles.uncertaintyTarget}>
                <span>CRITICAL BUSINESS SERVICE</span>
                <strong>Customer Onboarding</strong>
              </div>

              <div className={styles.uncertaintyState}>
                Relationship significance has not yet been established.
              </div>
            </div>

            <div className={styles.uncertaintyCopy}>
              <p className={styles.sectionEyebrow}>DO NOT HIDE UNCERTAINTY</p>

              <h2 className={styles.sectionTitle}>
                An unclear dependency is itself important information.
              </h2>

              <p className={styles.sectionBody}>
                A relationship may exist without enough context to determine
                whether it is essential to the service. AIGO-OS keeps that
                uncertainty visible so teams know what still requires
                validation.
              </p>

              <div className={styles.callout}>
                <strong>The goal is not false completeness.</strong>
                <span>
                  The goal is to distinguish established dependencies from
                  relationships that still need review.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIGO-OS IMPACT */}
      <section className={styles.solutionSection}>
        <div className={styles.sectionInner}>
          <div className={styles.solutionHeading}>
            <p className={styles.sectionEyebrow}>WITH AIGO-OS IMPACT</p>

            <h2 className={styles.sectionTitle}>
              Build the dependency picture around the service that matters.
            </h2>

            <p className={styles.sectionBody}>
              AIGO-OS Impact connects existing enterprise relationship
              information around the critical service so teams can understand
              its support structure without replacing the systems that maintain
              the underlying records.
            </p>
          </div>

          <div className={styles.solutionFlow}>
            <div className={styles.sourceColumn}>
              <span className={styles.flowLabel}>EXISTING CONTEXT</span>

              <div className={styles.sourceItem}>
                <BuildingIcon />
                <span>Service records</span>
              </div>

              <div className={styles.sourceItem}>
                <ApplicationIcon />
                <span>Application records</span>
              </div>

              <div className={styles.sourceItem}>
                <DataIcon />
                <span>Information records</span>
              </div>

              <div className={styles.sourceItem}>
                <PlatformIcon />
                <span>Technology records</span>
              </div>
            </div>

            <div className={styles.flowArrow}>
              <ArrowIcon />
              <span>CONNECT RELATIONSHIPS</span>
            </div>

            <div className={styles.contextColumn}>
              <span className={styles.flowLabel}>AIGO-OS IMPACT</span>

              <div className={styles.contextCore}>
                <EyeIcon />

                <div>
                  <strong>Connected service context</strong>
                  <span>
                    Dependencies organised around Customer Onboarding
                  </span>
                </div>
              </div>

              <div className={styles.contextStates}>
                <span>Direct dependencies</span>
                <span>Deeper support</span>
                <span>Relationships to review</span>
              </div>
            </div>

            <div className={styles.flowArrow}>
              <ArrowIcon />
              <span>UNDERSTAND IMPACT</span>
            </div>

            <div className={styles.decisionColumn}>
              <span className={styles.flowLabel}>BUSINESS VIEW</span>

              <strong>
                What must remain available to keep the critical service
                operating?
              </strong>

              <p>
                Teams can reason from the business service down into the
                enterprise components that support it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className={styles.outcomeSection}>
        <div className={styles.sectionInner}>
          <div className={styles.outcomeHeader}>
            <div>
              <p className={styles.sectionEyebrow}>WHAT BECOMES CLEAR</p>

              <h2 className={styles.sectionTitle}>
                Criticality becomes actionable when the support structure is
                visible.
              </h2>
            </div>

            <p className={styles.sectionBody}>
              The result is not another inventory. It is a clearer view of what
              the critical service depends on and where further investigation
              is still required.
            </p>
          </div>

          <div className={styles.outcomeGrid}>
            {outcomes.map((outcome) => (
              <article className={styles.outcomeCard} key={outcome.number}>
                <span className={styles.outcomeNumber}>{outcome.number}</span>
                <CheckIcon />
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <div>
            <p className={styles.finalEyebrow}>AIGO-OS IMPACT</p>

            <h2>
              Understand what your critical services actually depend on.
            </h2>

            <p>
              Bring service, application, information and technology
              relationships into one connected dependency view.
            </p>
          </div>

          <div className={styles.finalActions}>
            <Link href="/talk-to-an-expert" className={styles.finalPrimary}>
              <span>Talk to an Expert</span>
              <ArrowIcon />
            </Link>

            <Link href="/products/aigo-os-impact" className={styles.finalSecondary}>
              Explore AIGO-OS Impact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}




import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

import {
  ArrowRight,
  BellRing,
  Building2,
  CheckCircle2,
  FileText,
  GitBranch,
  Layers3,
  Network,
  RefreshCw,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "Understand AI Governance Change Impact",
  description:
    "AIGO-OS connects governance changes with affected AI, controls, relationships and enterprise context so organisations can understand where governance state may change.",
  path: "/solutions/unknown-governance-change-impact",
  keywords: [
    "AI governance change impact",
    "AI governance change management",
    "AI control impact",
  ],
});
const changeSources = [
  {
    icon: FileText,
    label: "POLICY OR REQUIREMENT",
    title: "A governance source changes",
    text:
      "A policy statement, obligation or requirement is revised and existing mappings may need to be reconsidered.",
    className: "policySource",
  },
  {
    icon: ShieldCheck,
    label: "CONTROL",
    title: "A control changes",
    text:
      "A control is introduced, revised, retired or reclassified and the coverage picture may change with it.",
    className: "controlSource",
  },
  {
    icon: Layers3,
    label: "ENTERPRISE CONTEXT",
    title: "A governed object changes",
    text:
      "Criticality, environment, classification, ownership or business purpose changes around an enterprise object.",
    className: "contextSource",
  },
  {
    icon: Network,
    label: "RELATIONSHIP",
    title: "A connected relationship changes",
    text:
      "A dependency or organisational relationship changes and alters the context used in governance reasoning.",
    className: "relationshipSource",
  },
];


const affectedConclusions = [
  {
    label: "APPLICABILITY",
    title: "Two controls now apply",
    text:
      "The service is now business-critical, bringing additional control requirements into scope.",
    state: "Changed",
    className: "applicabilityImpact",
  },
  {
    label: "COVERAGE",
    title: "Coverage needs review",
    text:
      "One newly applicable requirement does not yet have an established control relationship.",
    state: "Review",
    className: "coverageImpact",
  },
  {
    label: "MAPPING",
    title: "Requirement mapping changes",
    text:
      "Connected governance relationships are re-evaluated against the updated context.",
    state: "Changed",
    className: "mappingImpact",
  },
];


const visibilityItems = [
  {
    label: "Changed source",
    title:
      "See which governance or enterprise fact changed.",
  },
  {
    label: "Dependent context",
    title:
      "See which governed objects and relationships relied on that fact.",
  },
  {
    label: "Affected conclusion",
    title:
      "See which applicability, coverage or mapping conclusion may no longer hold.",
  },
  {
    label: "Reason",
    title:
      "Trace the updated conclusion back to the change that caused it.",
  },
];


export default function GovernanceChangeImpactPage() {
  return (
    <main className={styles.page}>

      {/* ======================================================
          HERO
          ====================================================== */}

      <section className={styles.hero}>
        <PublicContainer>

          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AIGO-OS GOVERN
              </p>

              <h1>
                Unknown Governance Change Impact
              </h1>

              <p className={styles.heroLead}>
                A governance conclusion can become outdated when the context
                behind it changes.
              </p>

              <p className={styles.heroText}>
                AIGO-OS Govern identifies which applicability, mapping and
                coverage conclusions depend on changed governance or enterprise
                context, so teams can see what needs to be reconsidered and why.
              </p>

              <div className={styles.heroActions}>

                <Link
                  href="/talk-to-an-expert"
                  className={styles.primaryButton}
                >
                  <span>Talk to an Expert</span>

                  <ArrowRight
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/products/aigo-os-govern"
                  className={styles.secondaryButton}
                >
                  Explore AIGO-OS Govern
                </Link>

              </div>
            </div>


            {/* Governance re-evaluation map */}

            <div className={styles.heroVisual}>

              <div className={styles.governanceMap}>

                <div className={styles.mapHeader}>
                  <div>
                    <span>GOVERNANCE RE-EVALUATION</span>
                    <strong>Customer Access Service</strong>
                  </div>

                  <div className={styles.detectedBadge}>
                    <RefreshCw
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    Context changed
                  </div>
                </div>


                <div className={styles.contextChange}>

                  <div className={styles.previousContext}>
                    <span>PREVIOUS CONTEXT</span>
                    <strong>Standard business service</strong>
                  </div>

                  <div className={styles.changePulse}>
                    <ArrowRight
                      size={19}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.currentContext}>
                    <span>CURRENT CONTEXT</span>
                    <strong>Business-critical service</strong>
                  </div>

                </div>


                <div className={styles.governedObject}>

                  <div className={styles.objectIcon}>
                    <Building2
                      size={24}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <span>GOVERNED OBJECT</span>
                    <strong>Customer Access Service</strong>
                    <small>
                      Criticality changed in the authoritative service context
                    </small>
                  </div>

                </div>


                <div className={styles.impactField}>

                  {affectedConclusions.map((item) => (
                    <article
                      key={item.title}
                      className={`${styles.impactSurface} ${
                        styles[item.className]
                      }`}
                    >
                      <div>
                        <span>{item.label}</span>
                        <strong>{item.title}</strong>
                        <small>{item.text}</small>
                      </div>

                      <div
                        className={
                          item.state === "Review"
                            ? styles.reviewPill
                            : styles.changedPill
                        }
                      >
                        {item.state}
                      </div>
                    </article>
                  ))}

                </div>


                <div className={styles.mapConclusion}>

                  <div className={styles.conclusionIcon}>
                    <CheckCircle2
                      size={19}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <span>UPDATED GOVERNANCE INTELLIGENCE</span>

                    <strong>
                      The criticality change alters applicability and exposes a
                      control coverage gap.
                    </strong>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </PublicContainer>
      </section>



      {/* ======================================================
          PROBLEM
          ====================================================== */}

      <section className={styles.problemSection}>
        <PublicContainer>

          <div className={styles.problemLayout}>

            <div className={styles.problemCopy}>
              <p className={styles.sectionLabel}>
                THE PROBLEM
              </p>

              <h2>
                Governance conclusions depend on context that does not stand still.
              </h2>

              <p className={styles.problemLead}>
                A conclusion can be correct when it is made and still become
                wrong later because the requirement, control, governed object or
                relationship behind it has changed.
              </p>
            </div>


            <div className={styles.problemVisual}>

              <div className={styles.staleConclusion}>
                <span>EXISTING CONCLUSION</span>

                <strong>
                  Control not applicable
                </strong>

                <small>
                  Based on the service being classified as non-critical
                </small>
              </div>


              <div className={styles.contextShift}>
                <div className={styles.shiftIcon}>
                  <RefreshCw
                    size={21}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <span>CONTEXT CHANGED</span>

                <strong>
                  Service is now business-critical
                </strong>
              </div>


              <div className={styles.recheckMessage}>
                <TriangleAlert
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <div>
                  <span>RE-EVALUATION REQUIRED</span>

                  <strong>
                    The previous applicability conclusion can no longer be
                    assumed to remain valid.
                  </strong>
                </div>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>



      {/* ======================================================
          WHAT CAN CHANGE
          ====================================================== */}

      <section className={styles.sourcesSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>
              <p className={styles.sectionLabel}>
                WHAT CAN TRIGGER RE-EVALUATION
              </p>

              <h2>
                The triggering change may happen anywhere in the connected context.
              </h2>
            </div>

            <p>
              Governance impact is not limited to changes made inside a GRC
              platform. Enterprise context can change somewhere else and still
              invalidate an existing governance conclusion.
            </p>

          </div>


          <div className={styles.sourceMatrix}>

            {changeSources.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`${styles.sourceCard} ${
                    styles[item.className]
                  }`}
                >
                  <div className={styles.sourceIcon}>
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <span>{item.label}</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              );
            })}

          </div>

        </PublicContainer>
      </section>



      {/* ======================================================
          REASONING TRACE
          ====================================================== */}

      <section className={styles.reasoningSection}>
        <PublicContainer>

          <div className={styles.reasoningLayout}>

            <div className={styles.reasoningCopy}>
              <p className={styles.sectionLabelLight}>
                CONNECTED GOVERNANCE REASONING
              </p>

              <h2>
                Follow the changed fact to the conclusions that depended on it.
              </h2>

              <p>
                AIGO-OS starts with the changed information, resolves the
                governed context that relies on it and re-evaluates the
                governance relationships whose conclusions may have changed.
              </p>


              <div className={styles.boundaryNote}>
                <BellRing
                  size={19}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <p>
                  The underlying change remains in its authoritative system.
                  AIGO-OS does not approve or operationally implement that
                  change. It explains the governance consequences created by it.
                </p>
              </div>

            </div>


            <div className={styles.reasoningVisual}>

              <div className={styles.reasoningOrigin}>
                <span>CHANGED INFORMATION</span>
                <strong>Business criticality updated</strong>
                <small>Authoritative service context</small>
              </div>


              <div className={styles.reasoningMiddle}>

                <article>
                  <GitBranch
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <span>AFFECTED CONTEXT</span>

                  <strong>
                    Customer Access Service is now critical
                  </strong>
                </article>

                <article>
                  <Network
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <span>AFFECTED RELATIONSHIPS</span>

                  <strong>
                    Requirement and control relationships are reconsidered
                  </strong>
                </article>

              </div>


              <div className={styles.reasoningOutcome}>
                <div>
                  <span>UPDATED CONCLUSION</span>

                  <strong>
                    Two controls are newly applicable
                  </strong>
                </div>

                <CheckCircle2
                  size={22}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>



      {/* ======================================================
          WHAT BECOMES VISIBLE
          ====================================================== */}

      <section className={styles.visibilitySection}>
        <PublicContainer>

          <div className={styles.visibilityLayout}>

            <div className={styles.visibilityCopy}>
              <p className={styles.sectionLabel}>
                WHAT BECOMES VISIBLE
              </p>

              <h2>
                See what changed, what depended on it and what conclusion moved.
              </h2>

              <p>
                Instead of manually rebuilding governance context after every
                change, teams can work from an explainable view of the
                relationships that actually changed the outcome.
              </p>
            </div>


            <div className={styles.visibilityCloud}>

              {visibilityItems.map((item, index) => (
                <article
                  key={item.label}
                  className={`${styles.visibilityTile} ${
                    index === 1 || index === 2
                      ? styles.visibilityTileRaised
                      : ""
                  }`}
                >
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                </article>
              ))}

              <div className={styles.visibilityCore}>
<strong>
                  Explainable governance change impact
                </strong>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>



      {/* ======================================================
          SPECIFIC EXAMPLE
          ====================================================== */}

      <section className={styles.exampleSection}>
        <PublicContainer>

          <div className={styles.examplePanel}>

            <div className={styles.exampleCopy}>
              <p className={styles.sectionLabel}>
                EXAMPLE
              </p>

              <h2>
                A service becomes business-critical.
              </h2>

              <p>
                The operational classification changes in the authoritative
                service system. That single change affects governance
                conclusions that previously relied on the service being
                non-critical.
              </p>
            </div>


            <div className={styles.exampleOutcome}>

              <div className={styles.exampleChange}>
                <span>ENTERPRISE CHANGE</span>

                <strong>
                  Customer Access Service
                </strong>

                <small>
                  Standard → Business-critical
                </small>
              </div>


              <div className={styles.exampleConsequences}>

                <article>
                  <span>APPLICABILITY</span>
                  <strong>Additional controls now apply</strong>
                </article>

                <article>
                  <span>COVERAGE</span>
                  <strong>One new gap requires review</strong>
                </article>

                <article>
                  <span>EXPLANATION</span>
                  <strong>Both conclusions trace back to criticality</strong>
                </article>

              </div>

            </div>

          </div>

        </PublicContainer>
      </section>



      {/* ======================================================
          FINAL CTA
          ====================================================== */}

      <section className={styles.finalSection}>
        <PublicContainer>

          <div className={styles.finalPanel}>

            <div>
              <span>AIGO-OS GOVERN</span>

              <h2>
                Keep governance conclusions aligned with changing enterprise context.
              </h2>

              <p>
                Understand which governance conclusions are affected when
                requirements, controls, relationships or enterprise conditions
                change.
              </p>
            </div>


            <div className={styles.finalActions}>

              <Link
                href="/talk-to-an-expert"
                className={styles.finalPrimary}
              >
                <span>Talk to an Expert</span>

                <ArrowRight
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/products/aigo-os-govern"
                className={styles.finalSecondary}
              >
                Explore AIGO-OS Govern
              </Link>

            </div>

          </div>

        </PublicContainer>
      </section>

    </main>
  );
}



import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CircleDashed,
  Eye,
  FileCheck2,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "Understand AI Control Coverage",
  description:
    "AIGO-OS connects AI activity with applicable governance controls and enterprise context so organisations can understand where control coverage is clear, incomplete or uncertain.",
  path: "/solutions/unclear-control-coverage",
  keywords: [
    "AI control coverage",
    "AI governance coverage",
    "AI controls",
  ],
});
const heroCoverage = [
  {
    state: "Covered",
    className: "covered",
    requirement: "Privileged access review",
    controls: "Quarterly review and access certification",
  },
  {
    state: "Partial",
    className: "partial",
    requirement: "Emergency access governance",
    controls: "Break glass procedure",
  },
  {
    state: "Coverage gap",
    className: "uncovered",
    requirement: "Access removal on role change",
    controls: "No connected control visible",
  },
];


const coverageStates = [
  {
    state: "Covered",
    className: "covered",
    icon: CheckCircle2,
    requirement: "Privileged access review",
    explanation:
      "Quarterly review and access certification controls are connected to the applicable requirement.",
  },
  {
    state: "Partial coverage",
    className: "partial",
    icon: AlertTriangle,
    requirement: "Emergency access governance",
    explanation:
      "A break glass procedure is connected, but the available governance context does not establish complete coverage.",
  },
  {
    state: "Coverage gap",
    className: "uncovered",
    icon: CircleDashed,
    requirement: "Access removal on role change",
    explanation:
      "No connected control is visible for this applicable requirement.",
  },
];


export default function UnclearControlCoveragePage() {
  return (
    <main className={styles.page}>

      {/* HERO */}

      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.productLabel}>
                AIGO-OS GOVERN
              </p>

              <h1>
                Unclear Control Coverage
              </h1>

              <p className={styles.heroLead}>
                Having controls does not automatically mean every applicable
                requirement is covered.
              </p>

              <p className={styles.heroText}>
                AIGO-OS Govern brings applicable requirements and their
                connected control relationships into one view so teams can see
                where coverage is established, incomplete, or missing.
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
                  href="/products/aigo-os-govern"
                  className={styles.secondaryButton}
                >
                  Explore AIGO-OS Govern
                </Link>
              </div>
            </div>


            {/* COMPACT COVERAGE LENS */}

            <div
              className={styles.coverageLens}
              aria-label="Control coverage view for Privileged Access Governance"
            >
              <div className={styles.lensHeader}>
                <div>
                  <span>
                    Coverage lens
                  </span>

                  <strong>
                    Privileged Access Governance
                  </strong>
                </div>

                <div className={styles.lensStatus}>
                  <SearchCheck
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  Coverage reviewed
                </div>
              </div>


              <div className={styles.lensMetrics}>
                <div>
                  <span>
                    Applicable
                  </span>

                  <strong>
                    18
                  </strong>
                </div>

                <div>
                  <span>
                    Covered
                  </span>

                  <strong>
                    13
                  </strong>
                </div>

                <div>
                  <span>
                    Partial
                  </span>

                  <strong>
                    3
                  </strong>
                </div>

                <div className={styles.metricGap}>
                  <span>
                    Gaps
                  </span>

                  <strong>
                    2
                  </strong>
                </div>
              </div>


              <div className={styles.lensRows}>
                {heroCoverage.map((item) => (
                  <article
                    key={item.requirement}
                    className={`${styles.lensRow} ${
                      styles[item.className]
                    }`}
                  >
                    <div className={styles.lensRequirement}>
                      <span>
                        Applicable requirement
                      </span>

                      <strong>
                        {item.requirement}
                      </strong>
                    </div>

                    <div className={styles.lensControl}>
                      <span>
                        Control relationship
                      </span>

                      <strong>
                        {item.controls}
                      </strong>
                    </div>

                    <div className={styles.lensState}>
                      {item.state}
                    </div>
                  </article>
                ))}
              </div>


              <div className={styles.lensFinding}>
                <CircleDashed
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    Coverage gap identified
                  </span>

                  <strong>
                    Access removal on role change has no connected control in
                    the available governance context.
                  </strong>
                </div>
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      {/* CORE PROBLEM */}

      <section className={styles.problemSection}>
        <PublicContainer>

          <div className={styles.problemIntro}>
            <p className={styles.sectionLabelGold}>
              The problem
            </p>

            <h2>
              A large control inventory can still hide a coverage gap.
            </h2>

            <p>
              The real question is not how many controls exist. It is whether
              every requirement that applies has a meaningful control
              relationship behind it.
            </p>
          </div>


          <div className={styles.problemStory}>

            <div className={styles.inventoryPanel}>
              <div className={styles.storyLabel}>
                What the control inventory tells you
              </div>

              <strong className={styles.storyHeading}>
                Controls exist
              </strong>

              <div className={styles.inventoryPills}>
                <span>
                  MFA enforcement
                </span>

                <span>
                  Quarterly access review
                </span>

                <span>
                  Access certification
                </span>

                <span>
                  Break glass procedure
                </span>
              </div>
            </div>


            <div className={styles.questionPanel}>
              <Eye
                size={22}
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <span>
                The unanswered question
              </span>

              <strong>
                Do these controls cover every requirement that applies?
              </strong>
            </div>


            <div className={styles.gapPanel}>
              <div className={styles.storyLabel}>
                What the coverage view reveals
              </div>

              <div className={styles.gapRequirement}>
                <CircleDashed
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    Applicable requirement
                  </span>

                  <strong>
                    Access removal on role change
                  </strong>
                </div>
              </div>

              <div className={styles.gapConclusion}>
                <span>
                  Coverage gap identified
                </span>

                <strong>
                  No connected control is visible for this requirement.
                </strong>
              </div>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* REQUIREMENT LENS */}

      <section className={styles.requirementSection}>
        <PublicContainer>
          <div className={styles.requirementGrid}>

            <div className={styles.requirementCopy}>
              <p className={styles.sectionLabel}>
                Start with what actually applies
              </p>

              <h2>
                Coverage becomes meaningful only when it is evaluated against
                applicable requirements.
              </h2>

              <p>
                AIGO-OS Govern keeps the requirement at the centre of the
                coverage question, then shows the control relationships
                connected to it.
              </p>
            </div>


            <div className={styles.requirementLens}>
              <div className={styles.requirementLensTop}>
                <div>
                  <span>
                    Applicable requirement set
                  </span>

                  <strong>
                    Privileged Access Governance
                  </strong>
                </div>

                <div className={styles.requirementCount}>
                  18 applicable
                </div>
              </div>


              <div className={styles.requirementStates}>
                <article className={styles.requirementCovered}>
                  <CheckCircle2
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <div>
                    <span>
                      Covered
                    </span>

                    <strong>
                      Privileged access review
                    </strong>

                    <p>
                      Two connected controls are visible.
                    </p>
                  </div>
                </article>


                <article className={styles.requirementPartial}>
                  <AlertTriangle
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <div>
                    <span>
                      Partial coverage
                    </span>

                    <strong>
                      Emergency access governance
                    </strong>

                    <p>
                      A control is connected, but complete coverage is not
                      established.
                    </p>
                  </div>
                </article>


                <article className={styles.requirementGap}>
                  <CircleDashed
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <div>
                    <span>
                      Coverage gap
                    </span>

                    <strong>
                      Access removal on role change
                    </strong>

                    <p>
                      No connected control is visible.
                    </p>
                  </div>
                </article>
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      {/* AIGO OS ANALYSIS */}

      <section className={styles.analysisSection}>
        <PublicContainer>

          <div className={styles.analysisIntro}>
            <p className={styles.sectionLabelGold}>
              With AIGO-OS Govern
            </p>

            <h2>
              See the requirement, connected control and coverage conclusion
              together.
            </h2>

            <p>
              AIGO-OS brings the available governance relationships into one
              reviewable context so teams can understand why coverage appears
              complete, partial, or missing.
            </p>
          </div>


          <div className={styles.analysisSurface}>

            <div className={styles.analysisRequirement}>
              <span>
                Applicable requirement
              </span>

              <strong>
                Emergency access governance
              </strong>

              <p>
                Emergency privileged access must be governed by appropriate
                control measures.
              </p>
            </div>


            <div className={styles.analysisControl}>
              <div className={styles.analysisIcon}>
                <ShieldCheck
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <span>
                Connected control
              </span>

              <strong>
                Break glass procedure
              </strong>

              <p>
                A relevant control relationship exists.
              </p>
            </div>


            <div className={styles.analysisResult}>
              <AlertTriangle
                size={23}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span>
                Coverage conclusion
              </span>

              <strong>
                Partial coverage
              </strong>

              <p>
                A connected control is visible, but the available context does
                not establish full coverage of the requirement.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* COVERAGE STATES */}

      <section className={styles.statesSection}>
        <PublicContainer>

          <div className={styles.statesIntro}>
            <p className={styles.sectionLabel}>
              Make the coverage state explicit
            </p>

            <h2>
              Show where coverage is established and where attention is
              needed.
            </h2>

            <p>
              Each conclusion should explain what was found, rather than
              presenting a status without context.
            </p>
          </div>


          <div className={styles.coverageStates}>
            {coverageStates.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.state}
                  className={`${styles.coverageStateCard} ${
                    styles[item.className]
                  }`}
                >
                  <div className={styles.coverageStateTop}>
                    <div className={styles.coverageStateIcon}>
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    <span>
                      {item.state}
                    </span>
                  </div>

                  <strong>
                    {item.requirement}
                  </strong>

                  <p>
                    {item.explanation}
                  </p>
                </article>
              );
            })}
          </div>

        </PublicContainer>
      </section>


      {/* BOUNDARY */}

      <section className={styles.boundarySection}>
        <PublicContainer>
          <div className={styles.boundaryPanel}>

            <div className={styles.boundaryIcon}>
              <FileCheck2
                size={25}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <div>
              <p className={styles.sectionLabelGold}>
                The AIGO-OS role
              </p>

              <h2>
                Understand coverage without moving control operations into
                AIGO-OS.
              </h2>

              <p>
                AIGO-OS Govern analyses the relationships between applicable
                requirements and connected controls. It does not test control
                effectiveness, perform assurance activity, remediate gaps, or
                operate controls.
              </p>
            </div>

          </div>
        </PublicContainer>
      </section>


      {/* FINAL */}

      <section className={styles.finalSection}>
        <PublicContainer>
          <div className={styles.finalPanel}>

            <div>
              <p>
                AIGO-OS GOVERN
              </p>

              <h2>
                Make unclear control coverage easier to see.
              </h2>

              <span>
                Start with the requirements that apply and understand where
                control relationships establish coverage, where coverage is
                incomplete, and where a gap remains.
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



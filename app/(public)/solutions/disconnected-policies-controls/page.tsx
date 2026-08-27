import { createPageMetadata } from "@/lib/seo/metadata";
import type { CSSProperties } from "react";
import Link from "next/link";

import {
  ArrowRight,
  BookOpenCheck,
  Check,
  CheckCircle2,
  FileCheck2,
  FileText,
  Library,
  Link2,
  Search,
  ShieldCheck,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "Connect AI Policies and Controls",
  description:
    "AIGO-OS connects policies, controls, enterprise context and AI activity so organisations can understand which governance requirements apply and where attention is needed.",
  path: "/solutions/disconnected-policies-controls",
  keywords: [
    "AI policies and controls",
    "AI governance controls",
    "AI control mapping",
  ],
});
const heroRecords = [
  {
    icon: FileText,
    type: "Policy repository",
    title: "Information Security Policy",
    text: "Access must follow business need.",
  },
  {
    icon: BookOpenCheck,
    type: "Standards library",
    title: "Access Management Standard",
    text: "Privileged access requires approval and review.",
  },
  {
    icon: ShieldCheck,
    type: "GRC platform",
    title: "Control Library",
    text: "Privileged access certification control.",
  },
];


const fragmentationProblems = [
  {
    title: "The same intent is described differently",
    text:
      "Policies, standards, requirements and controls can describe related governance expectations using different terminology.",
    tone: "warm",
  },
  {
    title: "The records live in different systems",
    text:
      "The enterprise may already have the information, but it is distributed across repositories, GRC platforms and control libraries.",
    tone: "cool",
  },
  {
    title: "The relationship depends on human knowledge",
    text:
      "Teams may know that records belong together even when that relationship is not represented clearly in the systems themselves.",
    tone: "sage",
  },
];


export default function DisconnectedPoliciesControlsPage() {
  return (
    <main className={styles.page}>

      {/* HERO */}

      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.productLabel}>
                AIGO-OS Govern
              </p>

              <h1>
                Disconnected Policies &amp; Controls
              </h1>

              <p className={styles.heroLead}>
                Policies, requirements and controls exist. The connection
                between them is often unclear.
              </p>

              <p className={styles.heroText}>
                AIGO-OS Govern connects governance information across the
                systems where it already lives so teams can understand how
                policy intent, requirements and controls relate.
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


            <div
              className={styles.heroStory}
              aria-label="Governance records becoming connected context"
            >
              <div className={styles.heroStoryHead}>
                <div>
                  <span>
                    Governance question
                  </span>

                  <strong>
                    Which control addresses this requirement, and why?
                  </strong>
                </div>

                <div className={styles.heroStatus}>
                  <span />
                  Context building
                </div>
              </div>


              <div className={styles.heroRecordStage}>
                {heroRecords.map((record, index) => {
                  const Icon = record.icon;

                  return (
                    <article
                      key={record.type}
                      className={styles.heroRecord}
                      style={
                        {
                          "--record-delay": `${index * 0.7}s`,
                        } as CSSProperties
                      }
                    >
                      <div className={styles.heroRecordIcon}>
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <span>
                          {record.type}
                        </span>

                        <strong>
                          {record.title}
                        </strong>

                        <p>
                          {record.text}
                        </p>
                      </div>

                      <div className={styles.heroRecordCheck}>
                        <Check
                          size={13}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </div>
                    </article>
                  );
                })}
              </div>


              <div className={styles.heroResolved}>
                <div className={styles.heroResolvedIcon}>
                  <Link2
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>
                    Connected relationship
                  </span>

                  <strong>
                    Policy intent, requirement and control understood together.
                  </strong>

                  <p>
                    The relationship is shown with the source context that
                    explains why the records belong together.
                  </p>
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
                Why this problem exists
              </p>

              <h2>
                The enterprise can have the records and still lack the
                relationship.
              </h2>
            </div>

            <div className={styles.problemIntroCopy}>
              <p>
                A policy may state the intent. A standard may define the
                requirement. A control library may contain the control.
              </p>

              <p>
                Each record can be correct on its own while the connection
                between them still has to be reconstructed by people.
              </p>
            </div>
          </div>


          <div className={styles.fragmentationGrid}>
            {fragmentationProblems.map((item) => (
              <article
                key={item.title}
                className={`${styles.fragmentationCard} ${
                  styles[`fragmentation_${item.tone}`]
                }`}
              >
                <div className={styles.fragmentationGlow} />

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>
              </article>
            ))}
          </div>

        </PublicContainer>
      </section>


      {/* MANUAL RECONSTRUCTION */}

      <section className={styles.reconstructionSection}>
        <PublicContainer>
          <div className={styles.reconstructionGrid}>

            <div className={styles.reconstructionCopy}>
              <p className={styles.sectionLabel}>
                What teams face
              </p>

              <h2>
                The relationship has to be reconstructed before the question
                can be answered.
              </h2>

              <p>
                The difficulty is not the absence of governance information.
                The difficulty is finding the right records across different
                systems and then establishing how they belong together.
              </p>
            </div>


            <div className={styles.manualWorkspace}>

              <div className={styles.manualQuestion}>
                <div className={styles.manualQuestionIcon}>
                  <Search
                    size={19}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>
                    Governance question
                  </span>

                  <strong>
                    Why does this control exist and what requirement does it
                    address?
                  </strong>
                </div>
              </div>


              <div className={styles.manualSearchArea}>

                <article className={styles.manualSourcePolicy}>
                  <span>
                    Policy repository
                  </span>

                  <strong>
                    Find the governing intent
                  </strong>

                  <p>
                    Information Security Policy
                  </p>
                </article>


                <article className={styles.manualSourceStandard}>
                  <span>
                    Standards library
                  </span>

                  <strong>
                    Find the detailed requirement
                  </strong>

                  <p>
                    Access Management Standard
                  </p>
                </article>


                <article className={styles.manualSourceControl}>
                  <span>
                    GRC platform
                  </span>

                  <strong>
                    Find the associated control
                  </strong>

                  <p>
                    Control Library
                  </p>
                </article>

              </div>


              <div className={styles.manualInterpretation}>
                <div>
                  <span>
                    Manual interpretation still required
                  </span>

                  <strong>
                    A person still has to establish why these records belong
                    together.
                  </strong>
                </div>

                <span className={styles.manualPulse} />
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      {/* CONNECTED CONTEXT */}

      <section className={styles.connectedSection}>
        <PublicContainer>

          <div className={styles.connectedIntro}>
            <p className={styles.sectionLabelGold}>
              With AIGO-OS Govern
            </p>

            <h2>
              Bring the governance context together around the question.
            </h2>

            <p>
              AIGO-OS connects the relevant governance records and the context
              around them so the relationship becomes understandable without
              moving the authoritative records out of their existing systems.
            </p>
          </div>


          <div className={styles.connectedStage}>

            <div className={styles.connectedRecords}>

              <article className={styles.connectedPolicy}>
                <div className={styles.connectedRecordIcon}>
                  <FileText
                    size={18}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <span>
                  Policy intent
                </span>

                <strong>
                  Access must be restricted according to business need.
                </strong>

                <p>
                  Information Security Policy
                </p>
              </article>


              <article className={styles.connectedRequirement}>
                <div className={styles.connectedRecordIcon}>
                  <BookOpenCheck
                    size={18}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <span>
                  Requirement
                </span>

                <strong>
                  Privileged access must be approved and reviewed.
                </strong>

                <p>
                  Access Management Standard
                </p>
              </article>


              <article className={styles.connectedControl}>
                <div className={styles.connectedRecordIcon}>
                  <ShieldCheck
                    size={18}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <span>
                  Control
                </span>

                <strong>
                  Privileged access certification control.
                </strong>

                <p>
                  Control Library
                </p>
              </article>

            </div>


            <div className={styles.connectedAnswer}>
              <div className={styles.connectedAnswerIcon}>
                <Link2
                  size={24}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <p className={styles.connectedAnswerLabel}>
                Relationship understood
              </p>

              <h3>
                The control can be understood in the context of the
                requirement and the policy intent behind it.
              </h3>

              <p className={styles.connectedAnswerText}>
                AIGO-OS retains the source context that explains what is
                connected and why.
              </p>

              <div className={styles.connectedChecks}>
                <span>
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  Sources retained
                </span>

                <span>
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  Relationship visible
                </span>

                <span>
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  Context reviewable
                </span>
              </div>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* EVIDENCE */}

      <section className={styles.evidenceSection}>
        <PublicContainer>
          <div className={styles.evidenceGrid}>

            <div className={styles.evidenceCopy}>
              <p className={styles.sectionLabel}>
                Relationship review
              </p>

              <h2>
                See why the relationship exists.
              </h2>

              <p>
                AIGO-OS does not only show that records are connected. It keeps
                the source context needed to understand how the relationship
                was established and what information supports it.
              </p>
            </div>


            <div
              className={styles.relationshipReview}
              aria-label="Review of a governance relationship and the sources behind it"
            >

              <div className={styles.reviewHead}>
                <div className={styles.reviewHeadIcon}>
                  <Link2
                    size={21}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>
                    Relationship review
                  </span>

                  <strong>
                    Privileged access certification control
                  </strong>
                </div>

                <div className={styles.reviewStatus}>
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  Context available
                </div>
              </div>


              <div className={styles.reviewBody}>

                <div className={styles.reviewRelationship}>
                  <div className={styles.reviewBlock}>
                    <span>
                      Connected to requirement
                    </span>

                    <strong>
                      Privileged access must be approved and reviewed.
                    </strong>

                    <small>
                      Access Management Standard
                    </small>
                  </div>


                  <div className={styles.reviewReason}>
                    <span>
                      Why these records are connected
                    </span>

                    <p>
                      The control addresses the requirement for privileged
                      access approval and review. That requirement expresses
                      the policy intent that access must follow business need.
                    </p>
                  </div>


                  <div className={styles.reviewPolicy}>
                    <span>
                      Governing policy intent
                    </span>

                    <strong>
                      Access must follow business need.
                    </strong>

                    <small>
                      Information Security Policy
                    </small>
                  </div>
                </div>


                <div className={styles.reviewSources}>
                  <div className={styles.reviewSourcesHead}>
                    <span>
                      Source context used
                    </span>

                    <strong>
                      The basis behind the relationship remains visible.
                    </strong>
                  </div>

                  <div className={styles.reviewSourceGrid}>

                    <article>
                      <FileText
                        size={17}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      <div>
                        <span>
                          Policy
                        </span>

                        <strong>
                          Information Security Policy
                        </strong>
                      </div>
                    </article>


                    <article>
                      <BookOpenCheck
                        size={17}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      <div>
                        <span>
                          Requirement
                        </span>

                        <strong>
                          Access Management Standard
                        </strong>
                      </div>
                    </article>


                    <article>
                      <ShieldCheck
                        size={17}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      <div>
                        <span>
                          Control
                        </span>

                        <strong>
                          Control Library
                        </strong>
                      </div>
                    </article>

                  </div>


                  <div className={styles.reviewMeta}>
                    <div>
                      <span>
                        Effective version
                      </span>

                      <strong>
                        Policy v4.2
                      </strong>
                    </div>

                    <div>
                      <span>
                        Source owner
                      </span>

                      <strong>
                        Security Governance
                      </strong>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      {/* PRODUCT BOUNDARY */}

      <section className={styles.boundarySection}>
        <PublicContainer>
          <div className={styles.boundaryPanel}>

            <div className={styles.boundaryCopy}>
              <p className={styles.sectionLabelGold}>
                The AIGO-OS role
              </p>

              <h2>
                Connect the context without taking over the systems that
                maintain it.
              </h2>

              <p>
                AIGO-OS is not a policy repository, GRC workflow, or control
                management system. Those operational activities remain in
                their respective platforms.
              </p>
            </div>


            <div className={styles.boundaryStory}>

              <div className={styles.boundaryExisting}>
                <div className={styles.boundaryIcon}>
                  <Library
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>
                    Existing platforms
                  </span>

                  <strong>
                    Maintain policies, requirements and controls.
                  </strong>
                </div>
              </div>


              <div className={styles.boundaryAigo}>
                <div className={styles.boundaryIcon}>
                  <Link2
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>
                    AIGO-OS Govern
                  </span>

                  <strong>
                    Connects the governance context around those records.
                  </strong>
                </div>
              </div>


              <div className={styles.boundaryOutcome}>
                <div className={styles.boundaryIcon}>
                  <FileCheck2
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>
                    Outcome
                  </span>

                  <strong>
                    The relationship becomes understandable and reviewable.
                  </strong>
                </div>
              </div>

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
                What changes
              </p>

              <h2>
                Stop rebuilding the same governance relationship every time a
                question is asked.
              </h2>
            </div>


            <div className={styles.outcomeCopy}>
              <p>
                Teams can see where an expectation originated, how it became
                a requirement, and which control is associated with it without
                starting again from disconnected records.
              </p>

              <div className={styles.outcomeStatements}>
                <span>
                  Understand the source
                </span>

                <span>
                  See the relationship
                </span>

                <span>
                  Retain the explanation
                </span>
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      {/* CTA */}

      <section className={styles.finalSection}>
        <PublicContainer>
          <div className={styles.finalPanel}>

            <div>
              <p>
                AIGO-OS Govern
              </p>

              <h2>
                Make disconnected governance information understandable as
                connected enterprise context.
              </h2>

              <span>
                Keep policies, standards and controls in their authoritative
                systems while making the relationships between them easier to
                understand.
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




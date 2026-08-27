import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  CircleHelp,
  Database,
  Eye,
  Layers3,
  Server,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "Understand AI Control Applicability",
  description:
    "AIGO-OS helps organisations understand which governance controls are relevant to AI activity by connecting controls with context, ownership, systems and business conditions.",
  path: "/solutions/unclear-control-applicability",
  keywords: [
    "AI control applicability",
    "AI governance controls",
    "AI compliance controls",
  ],
});
const objectFacts = [
  {
    icon: Building2,
    label: "Business service",
    value: "Customer Onboarding",
  },
  {
    icon: Server,
    label: "Environment",
    value: "Production",
  },
  {
    icon: Database,
    label: "Information handled",
    value: "Customer identity data",
  },
  {
    icon: UserRound,
    label: "Owner",
    value: "Customer Operations",
  },
];


const applicabilityExamples = [
  {
    state: "Applicable",
    icon: Check,
    className: "applicable",
    control: "Customer identity access control",
    explanation:
      "The service processes customer identity data in production.",
  },
  {
    state: "Not applicable",
    icon: X,
    className: "notApplicable",
    control: "Physical media handling",
    explanation:
      "The connected service context does not show physical media in scope.",
  },
  {
    state: "Needs review",
    icon: CircleHelp,
    className: "needsReview",
    control: "Third party oversight",
    explanation:
      "An external identity service is present, but more relationship context is needed.",
  },
];


export default function UnclearControlApplicabilityPage() {
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
                Unclear Control Applicability
              </h1>

              <p className={styles.heroLead}>
                A control library tells you which controls exist. It does not
                automatically tell you which controls apply to this service,
                application or system.
              </p>

              <p className={styles.heroText}>
                AIGO-OS Govern brings the relevant enterprise context together
                so teams can understand whether a control appears applicable,
                not applicable, or still needs review.
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
              className={styles.decisionSurface}
              aria-label="Control applicability decision for Customer Onboarding"
            >

              <div className={styles.decisionHeader}>
                <div>
                  <span>
                    Applicability question
                  </span>

                  <strong>
                    Does this control apply?
                  </strong>
                </div>

                <div className={styles.decisionStatus}>
                  <Eye
                    size={14}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  Context available
                </div>
              </div>


              <div className={styles.controlQuestion}>
                <div className={styles.controlIcon}>
                  <ShieldCheck
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>
                    Control being considered
                  </span>

                  <strong>
                    Customer identity access control
                  </strong>
                </div>
              </div>


              <div className={styles.objectSummary}>
                <div className={styles.objectMark}>
                  <Layers3
                    size={21}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>
                    Governed object
                  </span>

                  <strong>
                    Customer Onboarding Service
                  </strong>
                </div>
              </div>


              <div className={styles.factStrip}>
                {objectFacts.slice(1, 3).map((fact) => {
                  const Icon = fact.icon;

                  return (
                    <div
                      key={fact.label}
                      className={styles.factStripItem}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      <div>
                        <span>
                          {fact.label}
                        </span>

                        <strong>
                          {fact.value}
                        </strong>
                      </div>
                    </div>
                  );
                })}
              </div>


              <div className={styles.heroConclusion}>
                <div>
                  <span>
                    Conclusion
                  </span>

                  <strong>
                    Applicable
                  </strong>
                </div>

                <p>
                  This production service processes customer identity data.
                </p>

                <CheckCircle2
                  size={21}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      {/* PROBLEM */}

      <section className={styles.problemSection}>
        <PublicContainer>

          <div className={styles.problemIntro}>
            <p className={styles.sectionLabelGold}>
              The problem
            </p>

            <h2>
              The control may be clear. The scope is not.
            </h2>

            <p>
              Applicability depends on the characteristics of the object being
              governed. When those characteristics are distributed across
              different enterprise systems, teams have to reconstruct the
              context before they can decide what belongs in scope.
            </p>
          </div>


          <div className={styles.scopeComparison}>

            <div className={styles.scopeControl}>
              <span>
                Same control
              </span>

              <strong>
                Restrict access to confidential customer information
              </strong>
            </div>


            <div className={styles.scopeObjects}>

              <article className={styles.scopeObjectApplicable}>
                <div className={styles.scopeObjectTop}>
                  <span>
                    Customer Onboarding Service
                  </span>

                  <strong>
                    Confidential customer data is present
                  </strong>
                </div>

                <div className={styles.scopeFacts}>
                  <span>
                    Production
                  </span>

                  <span>
                    Customer identity data
                  </span>

                  <span>
                    Customer facing
                  </span>
                </div>

                <div className={styles.scopeOutcome}>
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <div>
                    <span>
                      Result
                    </span>

                    <strong>
                      Applicable
                    </strong>
                  </div>
                </div>
              </article>


              <article className={styles.scopeObjectNotApplicable}>
                <div className={styles.scopeObjectTop}>
                  <span>
                    Public Content Service
                  </span>

                  <strong>
                    Only public website content is present
                  </strong>
                </div>

                <div className={styles.scopeFacts}>
                  <span>
                    Production
                  </span>

                  <span>
                    Public content
                  </span>

                  <span>
                    No customer records
                  </span>
                </div>

                <div className={styles.scopeOutcome}>
                  <X
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <div>
                    <span>
                      Result
                    </span>

                    <strong>
                      Not applicable
                    </strong>
                  </div>
                </div>
              </article>

            </div>

          </div>

        </PublicContainer>
      </section>


      {/* CONTEXT */}

      <section className={styles.contextSection}>
        <PublicContainer>
          <div className={styles.contextGrid}>

            <div className={styles.contextCopy}>
              <p className={styles.sectionLabel}>
                What changes the answer
              </p>

              <h2>
                Applicability follows the real context of the governed object.
              </h2>

              <p>
                Business purpose, environment, information handled, ownership
                and connected services can all change whether a requirement is
                relevant.
              </p>
            </div>


            <div className={styles.contextCanvas}>

              <div className={styles.contextObject}>
                <span>
                  Governed object
                </span>

                <strong>
                  Customer Onboarding Service
                </strong>

                <p>
                  The applicability question is evaluated against the context
                  around this specific service.
                </p>
              </div>


              <div className={styles.contextFacts}>
                {objectFacts.map((fact) => {
                  const Icon = fact.icon;

                  return (
                    <article key={fact.label}>
                      <div className={styles.contextFactIcon}>
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <span>
                          {fact.label}
                        </span>

                        <strong>
                          {fact.value}
                        </strong>
                      </div>
                    </article>
                  );
                })}
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      {/* AIGO OS */}

      <section className={styles.reasoningSection}>
        <PublicContainer>

          <div className={styles.reasoningIntro}>
            <p className={styles.sectionLabelGold}>
              With AIGO-OS Govern
            </p>

            <h2>
              Put the control and the relevant enterprise context in the same
              view.
            </h2>

            <p>
              AIGO-OS connects the available context around the governed
              object so the applicability conclusion can be understood against
              the conditions that matter.
            </p>
          </div>


          <div className={styles.reasoningSurface}>

            <div className={styles.reasoningQuestion}>
              <span>
                Control
              </span>

              <strong>
                Customer identity access control
              </strong>

              <p>
                Intended to protect access to confidential customer
                information.
              </p>
            </div>


            <div className={styles.reasoningContext}>
              <span>
                Relevant context
              </span>

              <div>
                <strong>
                  Customer identity data
                </strong>

                <strong>
                  Production environment
                </strong>

                <strong>
                  Customer Onboarding
                </strong>
              </div>
            </div>


            <div className={styles.reasoningDecision}>
              <div className={styles.reasoningDecisionIcon}>
                <CheckCircle2
                  size={23}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <span>
                Applicability conclusion
              </span>

              <strong>
                Applicable
              </strong>

              <p>
                The service processes customer identity information in
                production, so the control is relevant to this governed object.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* DIFFERENT OUTCOMES */}

      <section className={styles.resultsSection}>
        <PublicContainer>

          <div className={styles.resultsIntro}>
            <p className={styles.sectionLabel}>
              A clear answer can have more than two states
            </p>

            <h2>
              Show what the available context actually supports.
            </h2>

            <p>
              When the evidence is incomplete, the result should remain open
              for review instead of presenting unsupported certainty.
            </p>
          </div>


          <div className={styles.resultRail}>
            {applicabilityExamples.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.state}
                  className={`${styles.resultItem} ${
                    styles[item.className]
                  }`}
                >
                  <div className={styles.resultIcon}>
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.resultContent}>
                    <span>
                      {item.state}
                    </span>

                    <strong>
                      {item.control}
                    </strong>

                    <p>
                      {item.explanation}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

        </PublicContainer>
      </section>


      {/* EXPLAINABILITY */}

      <section className={styles.explainSection}>
        <PublicContainer>
          <div className={styles.explainGrid}>

            <div className={styles.explainCopy}>
              <p className={styles.sectionLabelGold}>
                Explain why
              </p>

              <h2>
                A status alone is not enough.
              </h2>

              <p>
                Teams need to understand which contextual facts support the
                conclusion so they can review it rather than simply accept a
                label.
              </p>
            </div>


            <div className={styles.reviewRecord}>

              <div className={styles.reviewHeader}>
                <div>
                  <span>
                    Applicability review
                  </span>

                  <strong>
                    Customer identity access control
                  </strong>
                </div>

                <div className={styles.reviewBadge}>
                  Applicable
                </div>
              </div>


              <div className={styles.reviewReason}>
                <span>
                  Why
                </span>

                <strong>
                  Customer Onboarding processes customer identity information
                  in a production environment.
                </strong>
              </div>


              <div className={styles.reviewEvidence}>
                <div>
                  <Database
                    size={17}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <span>
                    Customer identity data
                  </span>
                </div>

                <div>
                  <Server
                    size={17}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <span>
                    Production
                  </span>
                </div>

                <div>
                  <Building2
                    size={17}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <span>
                    Customer Onboarding
                  </span>
                </div>
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      {/* BOUNDARY */}

      <section className={styles.boundarySection}>
        <PublicContainer>
          <div className={styles.boundaryGrid}>

            <div className={styles.boundaryMark}>
              <ShieldCheck
                size={26}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <div>
              <p className={styles.sectionLabelGold}>
                The AIGO-OS role
              </p>

              <h2>
                Understand applicability. Keep control operations where they
                belong.
              </h2>

              <p>
                AIGO-OS Govern does not implement, remediate, test or operate
                controls. It connects the context needed to understand whether
                a control appears relevant and why.
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
                Make unclear control applicability easier to resolve.
              </h2>

              <span>
                Bring enterprise context together so teams can understand what
                appears applicable, what does not, and what still needs human
                review.
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



import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import styles from "./page.module.css";


export const metadata = createPageMetadata({
  title: "Understand AI Incident Business Impact",
  description:
    "AIGO-OS connects AI incidents with enterprise relationships, services, ownership and dependencies so organisations can understand potential business significance.",
  path: "/solutions/unclear-incident-business-impact",
  keywords: [
    "AI incident business impact",
    "AI incident management",
    "AI operational risk",
  ],
});
function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 22 20H2L12 3Z" />
      <path d="M12 9v5M12 17h.01" />
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

function ServiceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 21V5.5L12 3v18M12 8h7v13" />
      <path d="M8 8h1M8 12h1M8 16h1M15 11h1M15 15h1M15 19h1" />
      <path d="M3 21h18" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20v-2.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V20" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M16 14h.8a4.2 4.2 0 0 1 4.2 4.2V20" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5 5" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
      <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16.5 9" />
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

const questions = [
  {
    icon: <AlertIcon />,
    label: "Incident origin",
    title: "What failed?",
    text: "Identify the affected technology or application recorded by the operational incident.",
  },
  {
    icon: <LinkIcon />,
    label: "Dependency context",
    title: "What depends on it?",
    text: "Connect the affected component to the applications and services that rely on it.",
  },
  {
    icon: <ServiceIcon />,
    label: "Service impact",
    title: "Which business service is affected?",
    text: "Follow the dependency context until the affected customer or business service becomes visible.",
  },
  {
    icon: <PeopleIcon />,
    label: "Business consequence",
    title: "What operation is now disrupted?",
    text: "Explain the operational consequence in business terms rather than stopping at the technical failure.",
  },
];

const outcomes = [
  {
    icon: <AlertIcon />,
    title: "Incident origin",
    text: "See where the impact began and which operational incident provides the starting point.",
  },
  {
    icon: <LinkIcon />,
    title: "Affected path",
    text: "Understand the applications, services and dependencies connected to the affected component.",
  },
  {
    icon: <ServiceIcon />,
    title: "Business consequence",
    text: "See which customer-facing service or business operation is disrupted.",
  },
  {
    icon: <SearchIcon />,
    title: "Explanation",
    text: "Understand why the available enterprise context supports the business-impact conclusion.",
  },
];

export default function UnclearIncidentBusinessImpactPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>AIGO-OS IMPACT</p>

            <h1 className={styles.heroTitle}>
              Unclear Incident Business Impact
            </h1>

            <p className={styles.heroLead}>
              The incident is known. The business consequence is not.
            </p>

            <p className={styles.heroBody}>
              Operational tools can tell you what failed, when it failed and
              who is investigating it. The harder question is what that failure
              means for the business. AIGO-OS Impact connects the incident to
              existing enterprise dependency context so the consequence can be
              understood and explained.
            </p>

            <div className={styles.heroActions}>
              <Link href="/talk-to-an-expert" className={styles.primaryAction}>
                <span>Talk to an Expert</span>
                <ArrowIcon />
              </Link>

              <Link
                href="/products/aigo-os-impact"
                className={styles.secondaryAction}
              >
                Explore AIGO-OS Impact
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.impactConsole}>
              <div className={styles.consoleHeader}>
                <div>
                  <span>INCIDENT BUSINESS IMPACT</span>
                  <strong>What is the business actually losing?</strong>
                </div>

                <div className={styles.liveStatus}>
                  <span />
                  Active incident
                </div>
              </div>

              <div className={styles.incidentOrigin}>
                <div className={styles.originIcon}>
                  <AlertIcon />
                </div>

                <div>
                  <span>INCIDENT</span>
                  <strong>Authentication Service Failure</strong>
                  <small>Production authentication unavailable</small>
                </div>

                <div className={styles.originState}>
                  <span>KNOWN</span>
                  <strong>Technical failure identified</strong>
                </div>
              </div>

              <div className={styles.impactJourney}>
                <article className={styles.journeyApplication}>
                  <div className={styles.journeyIcon}>
                    <ApplicationIcon />
                  </div>
                  <div>
                    <span>APPLICATION EFFECT</span>
                    <strong>Customer Portal</strong>
                    <small>Customers cannot authenticate</small>
                  </div>
                </article>

                <article className={styles.journeyService}>
                  <div className={styles.journeyIcon}>
                    <ShieldIcon />
                  </div>
                  <div>
                    <span>SERVICE EFFECT</span>
                    <strong>Digital Customer Access</strong>
                    <small>Authenticated access is unavailable</small>
                  </div>
                </article>

                <article className={styles.journeyBusiness}>
                  <div className={styles.journeyIcon}>
                    <PeopleIcon />
                  </div>
                  <div>
                    <span>BUSINESS OPERATION</span>
                    <strong>Customer Servicing</strong>
                    <small>Digital servicing cannot proceed normally</small>
                  </div>
                </article>
              </div>

              <div className={styles.businessConclusion}>
                <div className={styles.conclusionIcon}>
                  <ServiceIcon />
                </div>

                <div>
                  <span>BUSINESS IMPACT</span>
                  <strong>Digital customer servicing is disrupted.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}

      <section className={styles.problemSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionEyebrow}>THE PROBLEM</p>

              <h2 className={styles.sectionTitle}>
                Incident records describe what failed. They do not always
                explain what the business is losing.
              </h2>
            </div>

            <p className={styles.sectionBody}>
              Monitoring and service-management platforms hold operational
              incident detail. Business services, application relationships and
              dependency context may live elsewhere. Without those perspectives
              together, technical severity and business significance can be
              difficult to distinguish.
            </p>
          </div>

          <div className={styles.problemScene}>
            <div className={styles.incidentRecord}>
              <span className={styles.sceneLabel}>OPERATIONAL RECORD</span>

              <div className={styles.recordIdentity}>
                <div className={styles.recordIcon}>
                  <AlertIcon />
                </div>

                <div>
                  <small>INC-2048</small>
                  <strong>Authentication Service Failure</strong>
                </div>
              </div>

              <div className={styles.recordFacts}>
                <div>
                  <span>Status</span>
                  <strong>Investigating</strong>
                </div>

                <div>
                  <span>Environment</span>
                  <strong>Production</strong>
                </div>

                <div>
                  <span>Technical severity</span>
                  <strong>High</strong>
                </div>
              </div>

              <p>
                The operational record explains the technical event and its
                current handling state.
              </p>
            </div>

            <div className={styles.unknownImpact}>
              <span className={styles.unknownMark}>?</span>

              <div>
                <span>STILL UNCLEAR</span>
                <strong>
                  Which business service is affected, and what operation is
                  actually disrupted?
                </strong>
              </div>
            </div>

            <div className={styles.contextField}>
              <span className={styles.sceneLabel}>
                ENTERPRISE CONTEXT ELSEWHERE
              </span>

              <div className={styles.contextChips}>
                <span>
                  <ApplicationIcon />
                  Customer Portal
                </span>

                <span>
                  <ShieldIcon />
                  Digital Customer Access
                </span>

                <span>
                  <ServiceIcon />
                  Customer Servicing
                </span>

                <span>
                  <LinkIcon />
                  Dependency relationships
                </span>
              </div>

              <p>
                The business meaning exists across connected enterprise
                records, not necessarily inside the incident itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}

      <section className={styles.questionsSection}>
        <div className={styles.sectionInner}>
          <div className={styles.questionsIntro}>
            <p className={styles.darkEyebrow}>THE BUSINESS QUESTIONS</p>

            <h2>
              Move from a technical incident to the consequence the business
              needs to understand.
            </h2>

            <p>
              The reasoning should progress from the failed component to the
              dependent service and finally to the affected business operation.
            </p>
          </div>

          <div className={styles.questionField}>
            {questions.map((item, index) => (
              <article
                className={`${styles.questionCard} ${
                  index === 1 || index === 3 ? styles.questionCardRaised : ""
                }`}
                key={item.title}
              >
                <div className={styles.questionIcon}>{item.icon}</div>

                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REASONING */}

      <section className={styles.reasoningSection}>
        <div className={styles.sectionInner}>
          <div className={styles.reasoningLayout}>
            <div className={styles.reasoningCopy}>
              <p className={styles.sectionEyebrow}>
                FROM FAILURE TO BUSINESS IMPACT
              </p>

              <h2 className={styles.sectionTitle}>
                Follow the consequence through the enterprise context.
              </h2>

              <p className={styles.sectionBody}>
                The value is not simply knowing that objects are related. The
                relationship needs to explain how a technical failure becomes a
                business disruption.
              </p>

              <div className={styles.reasoningStatement}>
                <SearchIcon />

                <p>
                  The conclusion is understandable because every step retains
                  its business meaning.
                </p>
              </div>
            </div>

            <div className={styles.reasoningVisual}>
              <div className={styles.reasoningOrigin}>
                <div>
                  <AlertIcon />
                </div>

                <span>TECHNICAL FAILURE</span>

                <strong>Authentication service unavailable</strong>

                <p>
                  Production authentication can no longer process customer
                  login requests.
                </p>
              </div>

              <div className={styles.reasoningMiddle}>
                <article>
                  <ApplicationIcon />

                  <div>
                    <span>APPLICATION CONSEQUENCE</span>
                    <strong>Customer Portal login affected</strong>
                    <p>
                      Customers cannot establish authenticated portal sessions.
                    </p>
                  </div>
                </article>

                <article>
                  <ShieldIcon />

                  <div>
                    <span>SERVICE CONSEQUENCE</span>
                    <strong>Digital Customer Access degraded</strong>
                    <p>
                      The customer access capability cannot be delivered
                      normally.
                    </p>
                  </div>
                </article>
              </div>

              <div className={styles.reasoningOutcome}>
                <PeopleIcon />

                <div>
                  <span>BUSINESS CONSEQUENCE</span>
                  <strong>Customer Servicing is disrupted</strong>
                  <p>
                    Customers cannot use authenticated digital servicing
                    journeys that depend on portal access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}

      <section className={styles.comparisonSection}>
        <div className={styles.sectionInner}>
          <div className={styles.comparisonIntro}>
            <p className={styles.darkEyebrow}>
              BUSINESS SIGNIFICANCE IS CONTEXTUAL
            </p>

            <h2>
              Similar technical incidents can have very different business
              consequences.
            </h2>

            <p>
              Technical severity alone does not tell you whether a failure
              affects a critical customer or business operation.
            </p>
          </div>

          <div className={styles.comparisonStage}>
            <article className={styles.lowImpactCase}>
              <div className={styles.caseHeader}>
                <span>INCIDENT</span>
                <strong>Authentication failure</strong>
              </div>

              <div className={styles.caseEnvironment}>
                <ApplicationIcon />

                <div>
                  <span>ENVIRONMENT</span>
                  <strong>Internal test environment</strong>
                </div>
              </div>

              <div className={styles.caseResult}>
                <span>BUSINESS CONSEQUENCE</span>
                <strong>No customer-facing service disruption</strong>
              </div>
            </article>

            <div className={styles.comparisonMeaning}>
              <span>CONTEXT CHANGES THE MEANING</span>

              <strong>
                The same type of technical failure does not automatically
                create the same business impact.
              </strong>
            </div>

            <article className={styles.materialImpactCase}>
              <div className={styles.caseHeader}>
                <span>INCIDENT</span>
                <strong>Authentication failure</strong>
              </div>

              <div className={styles.caseEnvironment}>
                <ApplicationIcon />

                <div>
                  <span>ENVIRONMENT</span>
                  <strong>Production customer environment</strong>
                </div>
              </div>

              <div className={styles.caseContext}>
                <ShieldIcon />
                Supports Digital Customer Access
              </div>

              <div className={styles.caseResult}>
                <span>BUSINESS CONSEQUENCE</span>
                <strong>Customer Servicing is disrupted</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* AIGO-OS ROLE */}

      <section className={styles.solutionSection}>
        <div className={styles.sectionInner}>
          <div className={styles.solutionIntro}>
            <p className={styles.sectionEyebrow}>WHAT AIGO-OS IMPACT ADDS</p>

            <h2 className={styles.sectionTitle}>
              Connect the operational incident to the enterprise context needed
              to explain its business consequence.
            </h2>

            <p className={styles.sectionBody}>
              AIGO-OS Impact does not replace incident-management platforms. It
              uses available enterprise relationships to organise the context
              around the incident and make its business significance easier to
              understand.
            </p>
          </div>

          <div className={styles.solutionWorkspace}>
            <div className={styles.operationalSide}>
              <span className={styles.workspaceLabel}>
                OPERATIONAL / ITSM SYSTEM
              </span>

              <div className={styles.operationalIncident}>
                <AlertIcon />

                <div>
                  <small>INCIDENT</small>
                  <strong>Authentication Service Failure</strong>
                </div>
              </div>

              <div className={styles.operationalFacts}>
                <span>Detection</span>
                <span>Assignment</span>
                <span>Investigation</span>
                <span>Remediation</span>
                <span>Resolution</span>
              </div>

              <p>
                Incident handling remains in the organisation&apos;s operational
                and service-management platforms.
              </p>
            </div>

            <div className={styles.impactSide}>
              <span className={styles.workspaceLabel}>AIGO-OS IMPACT</span>

              <div className={styles.impactFocus}>
                <SearchIcon />

                <div>
                  <small>CONNECTED IMPACT CONTEXT</small>
                  <strong>What does this incident mean to the business?</strong>
                </div>
              </div>

              <div className={styles.impactContext}>
                <div>
                  <ApplicationIcon />
                  <span>Application</span>
                  <strong>Customer Portal</strong>
                </div>

                <div>
                  <ShieldIcon />
                  <span>Service</span>
                  <strong>Digital Customer Access</strong>
                </div>

                <div>
                  <PeopleIcon />
                  <span>Operation</span>
                  <strong>Customer Servicing</strong>
                </div>
              </div>

              <div className={styles.impactAnswer}>
                <CheckIcon />

                <div>
                  <span>EXPLAINABLE BUSINESS IMPACT</span>
                  <strong>Digital customer servicing is disrupted.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}

      <section className={styles.outcomesSection}>
        <div className={styles.sectionInner}>
          <div className={styles.outcomesIntro}>
            <p className={styles.darkEyebrow}>WHAT BECOMES VISIBLE</p>

            <h2>
              The incident can be understood in business terms, not only
              technical terms.
            </h2>
          </div>

          <div className={styles.outcomeField}>
            {outcomes.map((item, index) => (
              <article
                key={item.title}
                className={`${styles.outcomeCard} ${
                  index === 1 || index === 3 ? styles.outcomeCardRaised : ""
                }`}
              >
                <div className={styles.outcomeIcon}>{item.icon}</div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <div>
            <p>AIGO-OS IMPACT</p>

            <h2>
              Understand what a technical incident actually means to the
              business.
            </h2>

            <span>
              Connect incidents to the applications, services and business
              operations that give them significance.
            </span>
          </div>

          <div className={styles.finalActions}>
            <Link href="/talk-to-an-expert" className={styles.finalPrimary}>
              <span>Talk to an Expert</span>
              <ArrowIcon />
            </Link>

            <Link
              href="/products/aigo-os-impact"
              className={styles.finalSecondary}
            >
              Explore AIGO-OS Impact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}




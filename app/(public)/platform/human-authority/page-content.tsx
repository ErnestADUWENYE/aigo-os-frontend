"use client";

import Link from "next/link";

import {
  ArrowRight,
  Bell,
  Building2,
  Check,
  CheckCircle2,
  FileQuestion,
  GitBranch,
  Mail,
  MessageSquare,
  ShieldCheck,
  UserCheck,
  Workflow,
  X,
} from "lucide-react";

import styles from "./page.module.css";


const humanActions = [
  {
    icon: Check,
    title: "Approve",
    text:
      "Authorise the proposed AI activity from a governance perspective.",
  },
  {
    icon: ShieldCheck,
    title: "Approve with Conditions",
    text:
      "Authorise the activity subject to defined conditions or limits.",
  },
  {
    icon: X,
    title: "Reject",
    text:
      "Do not provide the human authority required for the proposed activity.",
  },
  {
    icon: FileQuestion,
    title: "Request More Information",
    text:
      "Ask for additional context before making the governance decision.",
  },
  {
    icon: GitBranch,
    title: "Escalate",
    text:
      "Route the decision to another person or function with the required authority.",
  },
];


const notificationChannels = [
  {
    icon: Bell,
    title: "AIGO-OS work queue",
    text:
      "Surface governance tasks to the responsible person or team.",
  },
  {
    icon: Mail,
    title: "Email",
    text:
      "Notify authorised users when a governance decision needs their attention.",
  },
  {
    icon: MessageSquare,
    title: "Enterprise messaging",
    text:
      "Bring governance tasks into connected collaboration channels.",
  },
  {
    icon: Workflow,
    title: "Enterprise workflow",
    text:
      "Connect human governance tasks to existing workflow and service-management processes.",
  },
];


export function Page07HumanAuthority() {
  return (
    <main className={styles.page}>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.shell}>
          <div className={styles.heroLayout}>

            <div className={styles.heroCopy}>
              <p className={styles.blueEyebrow}>
                HUMAN AUTHORITY &amp; INTERVENTION
              </p>

              <h1>
                Bring the right human into AI governance when accountable judgment is required.
              </h1>

              <p className={styles.heroLead}>
                AIGO-OS identifies when an AI governance decision
                requires human authority, routes the case to the
                right person and provides the context needed to act.
              </p>

              <p className={styles.heroSupporting}>
                Human involvement becomes a governed part of the
                AI operating process instead of an informal exception.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/contact?intent=demo"
                  className={styles.primaryButton}
                >
                  Request a Demo
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <a
                  href="#human-example"
                  className={styles.secondaryButton}
                >
                  See one example
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>


            <div className={styles.heroVisual}>
              <div className={styles.taskPanel}>

                <div className={styles.taskPanelTop}>
                  <div className={styles.taskIcon}>
                    <UserCheck size={25} aria-hidden="true" />
                  </div>

                  <div>
                    <span>HUMAN GOVERNANCE TASK</span>

                    <strong>
                      Human Authority Required
                    </strong>
                  </div>
                </div>


                <div className={styles.taskContext}>
                  <div>
                    <span>AI ACTOR</span>
                    <strong>
                      Production Operations AI Agent
                    </strong>
                  </div>

                  <div>
                    <span>AI ACTIVITY</span>
                    <strong>
                      Restart payment-processing service
                    </strong>
                  </div>

                  <div>
                    <span>WHY HUMAN AUTHORITY IS REQUIRED</span>
                    <strong>
                      Critical customer service requires accountable human authority.
                    </strong>
                  </div>
                </div>


                <div className={styles.taskAssignment}>
                  <Building2 size={18} aria-hidden="true" />

                  <div>
                    <span>ROUTED TO</span>
                    <strong>
                      Authorised Service Owner
                    </strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PURPOSE
      ====================================================== */}

      <section className={styles.purposeSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                THE PURPOSE
              </p>

              <h2>
                Turn required human involvement into a clear governance process.
              </h2>
            </div>

            <p>
              When Governance Decisioning determines that human
              authority or review is required, AIGO-OS creates a
              Human Governance Task and routes it to the person
              with the right authority.
            </p>
          </div>


          <div className={styles.purposeFlow}>

            <article className={styles.flowCard}>
              <span>INPUT</span>

              <strong>
                AI Governance Decision
              </strong>

              <p>
                Human Authority Required or Escalate for Review.
              </p>
            </article>


            <ArrowRight
              className={styles.flowArrow}
              size={24}
              aria-hidden="true"
            />


            <article className={`${styles.flowCard} ${styles.flowCardActive}`}>
              <span>PLATFORM ACTION</span>

              <strong>
                Human Governance Task
              </strong>

              <p>
                Route the case with the AI, authority, business and governance context.
              </p>
            </article>


            <ArrowRight
              className={styles.flowArrow}
              size={24}
              aria-hidden="true"
            />


            <article className={styles.flowCard}>
              <span>FINAL OUTPUT</span>

              <strong>
                Human Governance Decision
              </strong>

              <p>
                Capture the accountable human decision and its context.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHEN HUMAN AUTHORITY IS NEEDED
      ====================================================== */}

      <section className={styles.triggerSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntroCentered}>
            <p className={styles.blueDarkEyebrow}>
              WHEN HUMAN AUTHORITY IS NEEDED
            </p>

            <h2>
              Human authority enters the flow when governance requires accountable judgment.
            </h2>

            <p>
              This can happen because of business significance,
              policy requirements, authority limits, exceptions
              or situations that need additional review.
            </p>
          </div>


          <div className={styles.triggerGrid}>

            <article className={styles.triggerCard}>
              <span>01</span>

              <h3>
                Required by governance
              </h3>

              <p>
                The applicable governance requires an authorised person to decide.
              </p>
            </article>


            <article className={styles.triggerCard}>
              <span>02</span>

              <h3>
                High business significance
              </h3>

              <p>
                The AI activity affects a business context where accountable human judgment is required.
              </p>
            </article>


            <article className={styles.triggerCard}>
              <span>03</span>

              <h3>
                Authority boundary reached
              </h3>

              <p>
                The AI activity reaches a point where delegated autonomy is no longer enough.
              </p>
            </article>


            <article className={styles.triggerCard}>
              <span>04</span>

              <h3>
                Additional review required
              </h3>

              <p>
                The situation cannot be resolved confidently from the available governance and context.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          TASK
      ====================================================== */}

      <section className={styles.taskSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                DECISION-READY CONTEXT
              </p>

              <h2>
                Give the authorised person the context needed to decide.
              </h2>
            </div>

            <p>
              The Human Governance Task carries forward the context
              already established by AIGO-OS so the person can see
              what is happening and why their authority is required.
            </p>
          </div>


          <div className={styles.taskExample}>

            <div className={styles.taskExampleHeader}>
              <div>
                <span>EXAMPLE GOVERNANCE TASK</span>

                <h3>
                  Review AI activity requiring accountable human authority
                </h3>
              </div>

              <div className={styles.taskStatus}>
                AWAITING DECISION
              </div>
            </div>


            <div className={styles.taskDetails}>

              <div>
                <span>AI ACTOR</span>
                <strong>
                  Production Operations AI Agent
                </strong>
              </div>

              <div>
                <span>EXAMPLE AI ACTIVITY</span>
                <strong>
                  Restart a critical production service
                </strong>
              </div>

              <div>
                <span>AI AUTHORITY BOUNDARY</span>
                <strong>
                  Approved low-impact remediation
                </strong>
              </div>

              <div>
                <span>BUSINESS SIGNIFICANCE</span>
                <strong>
                  Critical customer-facing service
                </strong>
              </div>

              <div>
                <span>AI GOVERNANCE DECISION</span>
                <strong>
                  Human Authority Required
                </strong>
              </div>

              <div>
                <span>REASON</span>
                <strong>
                  The applicable governance requires accountable human authority for this activity.
                </strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          NOTIFICATION
      ====================================================== */}

      <section className={styles.notificationSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntroCentered}>
            <p className={styles.blueDarkEyebrow}>
              ROUTING &amp; NOTIFICATION
            </p>

            <h2>
              Reach the right person through the channels the organisation already uses.
            </h2>

            <p>
              Human Governance Tasks can be surfaced in AIGO-OS
              and through connected enterprise communication and workflow channels.
            </p>
          </div>


          <div className={styles.notificationGrid}>
            {notificationChannels.map((channel) => {
              const Icon = channel.icon;

              return (
                <article
                  className={styles.notificationCard}
                  key={channel.title}
                >
                  <div className={styles.notificationIcon}>
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <h3>{channel.title}</h3>

                  <p>{channel.text}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          HUMAN ACTIONS
      ====================================================== */}

      <section className={styles.actionSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntroDark}>
            <div>
              <p className={styles.blueEyebrow}>
                HUMAN GOVERNANCE ACTIONS
              </p>

              <h2>
                Keep human governance decisions simple and consistent.
              </h2>
            </div>

            <p>
              A small set of standard actions makes human
              governance easier to understand, route and measure
              across the organisation.
            </p>
          </div>


          <div className={styles.actionGrid}>
            {humanActions.map((action) => {
              const Icon = action.icon;

              return (
                <article
                  className={styles.actionCard}
                  key={action.title}
                >
                  <div className={styles.actionIcon}>
                    <Icon size={21} aria-hidden="true" />
                  </div>

                  <h3>{action.title}</h3>

                  <p>{action.text}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          ENTERPRISE ACTION
      ====================================================== */}

      <section className={styles.enterpriseSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                FROM AI GOVERNANCE SIGNAL TO ACTION
              </p>

              <h2>
                Connect AI governance decisions to the systems that run the business.
              </h2>
            </div>

            <p>
              AIGO-OS identifies when AI activity requires accountable
              human authority and provides the context needed to act.
              When operational action is required, the authorised person
              continues in the relevant enterprise system.
            </p>
          </div>


          <div className={styles.enterpriseFlow}>

            <article className={styles.enterpriseCard}>
              <span>01 · AIGO-OS</span>

              <h3>
                Human Authority Task
              </h3>

              <p>
                Surface the AI activity, explain why human authority
                is required and provide the relevant business and
                governance context.
              </p>
            </article>


            <ArrowRight
              className={styles.enterpriseArrow}
              size={24}
              aria-hidden="true"
            />


            <article className={`${styles.enterpriseCard} ${styles.enterpriseActive}`}>
              <span>02 · AUTHORISED PERSON</span>

              <h3>
                Human Decision
              </h3>

              <p>
                Review the context and make the required decision
                or determine what action is needed.
              </p>
            </article>


            <ArrowRight
              className={styles.enterpriseArrow}
              size={24}
              aria-hidden="true"
            />


            <article className={styles.enterpriseCard}>
              <span>03 · ENTERPRISE SYSTEM</span>

              <h3>
                Operational Action
              </h3>

              <p>
                Where required, complete the technical or business
                action in the system responsible for that work.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          EXAMPLE
      ====================================================== */}

      <section
        className={styles.exampleSection}
        id="human-example"
      >
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                ONE CLEAR EXAMPLE
              </p>

              <h2>
                Route the decision to the person who has the authority to make it.
              </h2>
            </div>

            <p>
              Human Authority &amp; Intervention keeps the governance
              decision accountable without replacing the systems
              where operational work is performed.
            </p>
          </div>


          <div className={styles.exampleFlow}>

            <article className={styles.exampleCard}>
              <span>AI GOVERNANCE DECISION</span>

              <h3>
                Human Authority Required
              </h3>

              <p>
                A proposed AI activity affects a critical customer payment service.
              </p>
            </article>


            <ArrowRight
              className={styles.exampleArrow}
              size={22}
              aria-hidden="true"
            />


            <article className={`${styles.exampleCard} ${styles.exampleHighlight}`}>
              <span>AIGO-OS</span>

              <h3>
                Human Governance Task
              </h3>

              <p>
                The authorised service owner receives the relevant
                AI, authority, business and governance context.
              </p>
            </article>


            <ArrowRight
              className={styles.exampleArrow}
              size={22}
              aria-hidden="true"
            />


            <article className={styles.exampleCard}>
              <span>FINAL OUTPUT</span>

              <h3>
                Human Governance Decision
              </h3>

              <p>
                The accountable human decision is captured and
                carried forward into the governance record.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          OUTPUT / NEXT
      ====================================================== */}

      <section className={styles.outputSection}>
        <div className={styles.shell}>

          <div className={styles.outputGrid}>

            <div className={styles.outputCopy}>
              <p className={styles.blueDarkEyebrow}>
                THE OUTPUT
              </p>

              <h2>
                Human Governance Decision
              </h2>

              <p>
                A clear record of the accountable human decision,
                who made it, why human authority was required and
                the context in which the decision was made.
              </p>
            </div>


            <div className={styles.nextPanel}>
              <span>NEXT CAPABILITY</span>

              <div className={styles.nextIcon}>
                <CheckCircle2 size={28} aria-hidden="true" />
              </div>

              <h3>
                Governance Receipts
              </h3>

              <p>
                Preserve the evidence of what AIGO-OS understood,
                what governance applied, what was decided and what followed.
              </p>

              <Link
                href="/platform/governance-receipts"
                className={styles.nextLink}
              >
                Explore Governance Receipts
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}





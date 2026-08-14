"use client";

import Link from "next/link";

import {
  ArrowRight,
  Bot,
  Braces,
  Check,
  CircleSlash2,
  Fingerprint,
  Gauge,
  KeyRound,
  Network,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import styles from "@/styles/page04-machine-authority.module.css";


const authoritySources = [
  {
    icon: KeyRound,
    label: "ACCESS & PERMISSIONS",
    title: "What technology permits",
    text:
      "Roles, service identities, API permissions and tool access show what the AI Actor can technically access or execute.",
  },
  {
    icon: Braces,
    label: "CONFIGURATION",
    title: "How the AI Actor is configured",
    text:
      "Agent, application, workflow and environment configuration show where the AI Actor operates and which actions have been enabled.",
  },
  {
    icon: UserCheck,
    label: "ORGANISATIONAL DELEGATION",
    title: "What the organisation has authorised",
    text:
      "Defined responsibilities, approval requirements and business rules establish what authority has actually been delegated to the AI Actor.",
  },
];


const boundaryDimensions = [
  {
    number: "01",
    label: "ACTIONS",
    title: "What it may do",
    text:
      "The actions the AI Actor has been authorised to perform.",
  },
  {
    number: "02",
    label: "RESOURCES",
    title: "What it may act on",
    text:
      "The systems, services, data or other resources covered by that authority.",
  },
  {
    number: "03",
    label: "LIMITS",
    title: "How far it may go",
    text:
      "The thresholds and limits that restrict the AI Actor's delegated authority.",
  },
  {
    number: "04",
    label: "CONDITIONS",
    title: "When the authority applies",
    text:
      "The environments, situations or conditions under which the authority is valid.",
  },
  {
    number: "05",
    label: "AUTONOMY",
    title: "What it may do independently",
    text:
      "The delegated actions the AI Actor may perform without prior human approval.",
  },
  {
    number: "06",
    label: "HUMAN REQUIREMENTS",
    title: "Where human authority is required",
    text:
      "The points where approval, review or intervention must come from an authorised person.",
  },
];


export function Page04MachineAuthority() {
  return (
    <main className={styles.page}>

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
                MACHINE AUTHORITY
              </p>

              <h1>
                Know what authority an AI Actor has been given.
              </h1>

              <p className={styles.heroLead}>
                Machine Authority establishes the authority
                delegated to an AI Actor and the boundaries
                within which that authority applies.
              </p>

              <p className={styles.heroSupporting}>
                AIGO-OS connects technical authority evidence
                with the authority defined by the organisation,
                separating what technology permits from what the
                AI Actor has actually been authorised to do.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/contact?intent=demo"
                  className={styles.primaryButton}
                >
                  Request a Demo

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="#authority-example"
                  className={styles.secondaryButton}
                >
                  See one example

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>


            <div className={styles.heroVisual}>
              <div className={styles.authorityProfile}>

                <div className={styles.profileTop}>
                  <div className={styles.profileIcon}>
                    <Bot
                      size={25}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <span>
                      IDENTIFIED AI ACTOR
                    </span>

                    <strong>
                      Production Operations AI Agent
                    </strong>

                    <small>
                      AI Actor ID: ai-actor-prod-ops-017
                    </small>
                  </div>
                </div>


                <div className={styles.profileDivider} />


                <div className={styles.profileQuestion}>
                  <span>
                    MACHINE AUTHORITY
                  </span>

                  <strong>
                    What authority has this AI Actor been given?
                  </strong>
                </div>


                <div className={styles.profileOutput}>
                  <ShieldCheck
                    size={21}
                    aria-hidden="true"
                  />

                  <div>
                    <span>
                      OUTPUT
                    </span>

                    <strong>
                      AI Authority Boundary
                    </strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          TECHNICAL PERMISSION VS DELEGATED AUTHORITY
      ====================================================== */}

      <section className={styles.coreSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntroCentered}>
            <p className={styles.goldEyebrow}>
              THE CORE IDEA
            </p>

            <h2>
              Technical permission is not delegated authority.
            </h2>

            <p>
              A system may make an action technically possible
              without the organisation having delegated that
              authority to the AI Actor.
            </p>
          </div>


          <div className={styles.distinctionGrid}>

            <article className={styles.distinctionCard}>
              <div className={styles.distinctionIcon}>
                <KeyRound
                  size={24}
                  aria-hidden="true"
                />
              </div>

              <span>
                TECHNICAL PERMISSION
              </span>

              <h3>
                What technology permits
              </h3>

              <p>
                Credentials, APIs, access controls, tools and
                configuration can make an action technically
                possible.
              </p>

              <div className={styles.distinctionExample}>
                <small>
                  EXAMPLE
                </small>

                <strong>
                  A service identity can invoke a production
                  remediation API.
                </strong>
              </div>
            </article>


            <div
              className={styles.notEqual}
              aria-hidden="true"
            >
              <CircleSlash2 size={31} />

              <span>
                NOT THE SAME AS
              </span>
            </div>


            <article
              className={`${styles.distinctionCard} ${styles.delegatedCard}`}
            >
              <div className={styles.distinctionIcon}>
                <ShieldCheck
                  size={24}
                  aria-hidden="true"
                />
              </div>

              <span>
                DELEGATED AUTHORITY
              </span>

              <h3>
                What the organisation has authorised
              </h3>

              <p>
                The organisation determines whether the AI Actor
                may use that capability, under which conditions
                and within which limits.
              </p>

              <div className={styles.distinctionExample}>
                <small>
                  EXAMPLE
                </small>

                <strong>
                  The AI Actor may perform approved low-impact
                  remediation, while high-impact changes require
                  human authority.
                </strong>
              </div>
            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          AUTHORITY EVIDENCE
      ====================================================== */}

      <section className={styles.sourcesSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.blueEyebrow}>
                AUTHORITY EVIDENCE
              </p>

              <h2>
                Build authority from connected evidence and organisational delegation.
              </h2>
            </div>

            <p>
              AIGO-OS combines information from connected systems
              with authority defined by the organisation to
              establish what has actually been delegated.
            </p>
          </div>


          <div className={styles.sourceGrid}>
            {authoritySources.map((source) => {
              const Icon = source.icon;

              return (
                <article
                  key={source.label}
                  className={styles.sourceCard}
                >
                  <div className={styles.sourceIcon}>
                    <Icon
                      size={22}
                      aria-hidden="true"
                    />
                  </div>

                  <span>
                    {source.label}
                  </span>

                  <h3>
                    {source.title}
                  </h3>

                  <p>
                    {source.text}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          AI AUTHORITY BOUNDARY
      ====================================================== */}

      <section className={styles.boundarySection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntroCentered}>
            <p className={styles.goldEyebrow}>
              THE OUTPUT
            </p>

            <h2>
              Establish the AI Authority Boundary.
            </h2>

            <p>
              The AI Authority Boundary defines the scope of
              delegated authority for the AI Actor: what it may
              do, where that authority applies, its limits and
              where human authority is required.
            </p>
          </div>


          <div className={styles.boundaryGrid}>
            {boundaryDimensions.map((item) => (
              <article
                key={item.number}
                className={styles.boundaryCard}
              >
                <div className={styles.boundaryTop}>
                  <span className={styles.boundaryNumber}>
                    {item.number}
                  </span>

                  <Gauge
                    size={20}
                    aria-hidden="true"
                  />
                </div>

                <span className={styles.boundaryLabel}>
                  {item.label}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          ONE CLEAR EXAMPLE
      ====================================================== */}

      <section
        className={styles.exampleSection}
        id="authority-example"
      >
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.blueEyebrow}>
                ONE CLEAR EXAMPLE
              </p>

              <h2>
                See the authority available to one AI Actor.
              </h2>
            </div>

            <p>
              The AI Authority Boundary shows what has been
              delegated, where limits apply and where human
              authority is required.
            </p>
          </div>


          <div className={styles.exampleLayout}>

            <div className={styles.exampleActor}>
              <div className={styles.exampleActorTop}>
                <Fingerprint
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    AI ACTOR PASSPORT
                  </span>

                  <strong>
                    Production Operations AI Agent
                  </strong>

                  <small>
                    ai-actor-prod-ops-017
                  </small>
                </div>
              </div>


              <div className={styles.exampleActorQuestion}>
                <span>
                  MACHINE AUTHORITY
                </span>

                <strong>
                  What authority has this AI Actor been given?
                </strong>
              </div>
            </div>


            <div
              className={styles.exampleArrow}
              aria-hidden="true"
            >
              <ArrowRight size={24} />
            </div>


            <div className={styles.exampleBoundary}>
              <div className={styles.exampleBoundaryTop}>
                <div>
                  <span>
                    OUTPUT
                  </span>

                  <h3>
                    AI Authority Boundary
                  </h3>
                </div>

                <ShieldCheck
                  size={25}
                  aria-hidden="true"
                />
              </div>


              <div className={styles.authorityState}>
                <span className={styles.allowed}>
                  <Check
                    size={16}
                    aria-hidden="true"
                  />

                  AUTHORISED
                </span>

                <strong>
                  Read production telemetry
                </strong>
              </div>


              <div className={styles.authorityState}>
                <span className={styles.allowed}>
                  <Check
                    size={16}
                    aria-hidden="true"
                  />

                  AUTHORISED
                </span>

                <strong>
                  Recommend remediation
                </strong>
              </div>


              <div className={styles.authorityState}>
                <span className={styles.limited}>
                  <Gauge
                    size={16}
                    aria-hidden="true"
                  />

                  AUTHORISED WITH LIMITS
                </span>

                <strong>
                  Execute approved low-impact remediation
                </strong>
              </div>


              <div className={styles.authorityState}>
                <span className={styles.humanRequired}>
                  <UserCheck
                    size={16}
                    aria-hidden="true"
                  />

                  HUMAN AUTHORITY REQUIRED
                </span>

                <strong>
                  High-impact production changes
                </strong>
              </div>


              <div className={styles.authorityState}>
                <span className={styles.notAuthorised}>
                  <CircleSlash2
                    size={16}
                    aria-hidden="true"
                  />

                  NOT AUTHORISED
                </span>

                <strong>
                  Unrestricted production changes
                </strong>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          HANDOFF TO BUSINESS SIGNIFICANCE
      ====================================================== */}

      <section className={styles.handoffSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.blueEyebrow}>
                AUTHORITY IS NOT BUSINESS SIGNIFICANCE
              </p>

              <h2>
                Authority alone does not tell us what the activity means to the business.
              </h2>
            </div>

            <p>
              Machine Authority establishes the AI Authority
              Boundary. Business Significance then interprets the
              current AI activity in the business context it affects.
            </p>
          </div>


          <div className={styles.handoffFlow}>

            <article className={styles.handoffCard}>
              <span>
                MACHINE AUTHORITY
              </span>

              <strong>
                What authority has this AI Actor been given?
              </strong>

              <small>
                OUTPUT
              </small>

              <p>
                AI Authority Boundary
              </p>
            </article>


            <div
              className={styles.handoffArrow}
              aria-hidden="true"
            >
              <ArrowRight size={24} />
            </div>


            <article
              className={`${styles.handoffCard} ${styles.nextCard}`}
            >
              <span>
                BUSINESS SIGNIFICANCE
              </span>

              <strong>
                What does this AI activity mean to the business now?
              </strong>

              <small>
                NEXT CAPABILITY
              </small>

              <p>
                Interpret the activity in its business context.
              </p>
            </article>

          </div>


          <div className={styles.handoffActions}>
            <Link
              href="/platform/business-significance"
              className={styles.handoffPrimary}
            >
              Explore Business Significance

              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/contact?intent=demo"
              className={styles.handoffSecondary}
            >
              Request a Demo
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}


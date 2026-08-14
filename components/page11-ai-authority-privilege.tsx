import Link from "next/link";
import styles from "@/styles/page11-ai-authority-privilege.module.css";


function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="18"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}


function IdentityIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <circle
        cx="8"
        cy="8"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M3.5 18c.8-3.6 2.9-5.5 6.2-5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />

      <path
        d="M14 11.5h6M17 8.5v6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}


function AuthorityIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <circle
        cx="7.5"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M10.5 12H20M16 9v6M19 10v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}


function LimitsIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M6 5h12v14H6z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />

      <path
        d="M9 9h6M9 13h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />

      <path
        d="M16.5 16.5 19 19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}


const authorityDimensions = [
  {
    number: "01",
    eyebrow: "IDENTITY & ACCESS",
    title: "Connect access to the AI Actor",
    description:
      "Relate the AI Actor to the identities, roles, permissions and enterprise resources through which it operates.",
    icon: <IdentityIcon />,
    items: [
      "Workload identity",
      "Application role",
      "API access",
    ],
  },
  {
    number: "02",
    eyebrow: "DELEGATED AUTHORITY",
    title: "Understand what that access represents",
    description:
      "Establish the organisational authority created by the technical privileges available to the AI Actor.",
    icon: <AuthorityIcon />,
    items: [
      "Permitted actions",
      "Resources in scope",
      "Delegated responsibility",
    ],
  },
  {
    number: "03",
    eyebrow: "LIMITS & CONDITIONS",
    title: "See how authority should be bounded",
    description:
      "Understand the limits, conditions, autonomy and human requirements associated with how authority may be exercised.",
    icon: <LimitsIcon />,
    items: [
      "Operating limits",
      "Governance conditions",
      "Human requirements",
    ],
  },
];


const outcomes = [
  {
    title: "Identify broad authority",
    description:
      "Surface AI Actors whose effective authority extends beyond the responsibility they are intended to perform.",
  },
  {
    title: "Review privilege in context",
    description:
      "Give identity, security and governance teams a shared view of how technical privileges translate into AI authority.",
  },
  {
    title: "Strengthen least-privilege decisions",
    description:
      "Provide context for reducing, conditioning or reviewing authority through the enterprise systems that manage access.",
  },
];


const capabilityChain = [
  {
    number: "01",
    title: "AI Actor Passports",
    question: "Which AI Actor does the identity represent?",
  },
  {
    number: "02",
    title: "Machine Authority",
    question: "What authority does that access create?",
    active: true,
  },
  {
    number: "03",
    title: "Business Significance",
    question: "What does that authority mean here?",
  },
  {
    number: "04",
    title: "Governance Decisioning",
    question: "What governance treatment applies?",
  },
];


export function Page11AIAuthorityPrivilege() {
  return (
    <main className={styles.page}>

      {/* ======================================================
          HERO
         ====================================================== */}

      <section className={styles.hero}>
        <div className={styles.shell}>

          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>

              <span className={styles.kicker}>
                USE CASE · AUTHORITY &amp; PRIVILEGE
              </span>

              <h1>
                Assess AI Authority
                <span> &amp; Privilege.</span>
              </h1>

              <p className={styles.heroLead}>
                Understand what access, privilege and delegated authority
                an AI Actor can exercise across enterprise systems — and
                whether that authority is appropriate for its role.
              </p>

              <div className={styles.heroActions}>

                <Link
                  className={styles.primaryButton}
                  href="/contact"
                >
                  Talk to us
                  <ArrowRight />
                </Link>

                <Link
                  className={styles.secondaryButton}
                  href="/platform/machine-authority"
                >
                  Explore Machine Authority
                  <ArrowRight />
                </Link>

              </div>

            </div>


            <div className={styles.heroVisual}>

              <div className={styles.heroHalo} />

              <div className={styles.identityTag}>
                <span>IDENTITY</span>
                <strong>svc-supplier-agent</strong>
              </div>

              <div className={styles.ownerTag}>
                <span>DELEGATED BY</span>
                <strong>Procurement Operations</strong>
              </div>


              <div className={styles.authorityPanel}>

                <div className={styles.authorityHeader}>
                  <div>
                    <span>AI ACTOR</span>
                    <strong>
                      Supplier Management Agent
                    </strong>
                  </div>

                  <div className={styles.authorityState}>
                    Authority established
                  </div>
                </div>


                <div className={styles.accessGroup}>

                  <span>ENTERPRISE ACCESS</span>

                  <div className={styles.accessTags}>
                    <i>Supplier platform</i>
                    <i>Contract repository</i>
                    <i>Procurement API</i>
                  </div>

                </div>


                <div className={styles.privilegeGrid}>

                  <div>
                    <span>PRIVILEGE</span>
                    <strong>Read supplier records</strong>
                  </div>

                  <div>
                    <span>PRIVILEGE</span>
                    <strong>Update supplier data</strong>
                  </div>

                  <div>
                    <span>PRIVILEGE</span>
                    <strong>Submit contract changes</strong>
                  </div>

                </div>


                <div className={styles.authorityOutput}>
                  <div className={styles.outputIcon}>
                    <AuthorityIcon />
                  </div>

                  <div>
                    <span>MACHINE AUTHORITY</span>
                    <strong>
                      Supplier management authority
                    </strong>
                    <p>
                      Limits and conditions connected
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ======================================================
          CHALLENGE
         ====================================================== */}

      <section className={styles.challenge}>
        <div className={styles.shell}>

          <div className={styles.sectionSplit}>

            <div>
              <span className={styles.sectionKicker}>
                THE CHALLENGE
              </span>

              <h2>
                Technical access does not always reflect the
                authority AI should exercise.
              </h2>
            </div>

            <div className={styles.sectionCopy}>

              <p>
                AI agents can inherit permissions through service
                identities, application roles and delegated access.
                Those privileges may be technically valid while still
                creating authority broader than the AI Actor&apos;s
                intended responsibility.
              </p>

              <p>
                The governance question is therefore not only what an
                identity can reach, but what authority that access
                effectively gives the AI Actor.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          WHAT AIGO-OS BRINGS TOGETHER
         ====================================================== */}

      <section className={styles.dimensionsSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>

            <span className={styles.sectionKicker}>
              WHAT AIGO-OS BRINGS TOGETHER
            </span>

            <h2>
              Connect technical privilege to delegated authority.
            </h2>

          </div>


          <div className={styles.dimensionGrid}>

            {authorityDimensions.map((item) => (

              <article
                className={styles.dimensionCard}
                key={item.number}
              >

                <div className={styles.cardTop}>

                  <span className={styles.number}>
                    {item.number}
                  </span>

                  <div className={styles.dimensionIcon}>
                    {item.icon}
                  </div>

                </div>


                <span className={styles.cardEyebrow}>
                  {item.eyebrow}
                </span>

                <h3>{item.title}</h3>

                <p>
                  {item.description}
                </p>


                <div className={styles.dimensionItems}>

                  {item.items.map((entry) => (
                    <div key={entry}>
                      <i />
                      {entry}
                    </div>
                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* ======================================================
          AUTHORITY IN CONTEXT
         ====================================================== */}

      <section className={styles.contextSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>

            <span className={styles.sectionKicker}>
              AUTHORITY IN CONTEXT
            </span>

            <h2>
              See the authority behind the permission.
            </h2>

            <p>
              AIGO-OS connects technical access to the AI Actor,
              establishes the authority that access represents and
              carries that authority into its relevant business context.
            </p>

          </div>


          <div className={styles.contextVisual}>

            <div className={styles.actorNode}>
              <span>AI ACTOR</span>
              <strong>
                Supplier Management Agent
              </strong>
            </div>


            <div className={styles.flowStem} />


            <div className={styles.accessLayer}>

              <div className={styles.accessCard}>
                <span>IDENTITY</span>
                <strong>
                  svc-supplier-agent
                </strong>
                <p>
                  Workload identity
                </p>
              </div>

              <div className={styles.accessCard}>
                <span>ROLE</span>
                <strong>
                  Procurement service role
                </strong>
                <p>
                  Application privilege
                </p>
              </div>

              <div className={styles.accessCard}>
                <span>RESOURCE</span>
                <strong>
                  Procurement API
                </strong>
                <p>
                  Enterprise access
                </p>
              </div>

            </div>


            <div className={styles.flowStem} />


            <div className={styles.machineAuthority}>

              <div className={styles.machineAuthorityHeader}>
                <span>MACHINE AUTHORITY</span>
                <strong>
                  Supplier management authority
                </strong>
              </div>


              <div className={styles.authorityDimensions}>

                <div>
                  <span>ACTIONS</span>
                  <strong>
                    Update supplier records
                  </strong>
                </div>

                <div>
                  <span>RESOURCES</span>
                  <strong>
                    Approved supplier domain
                  </strong>
                </div>

                <div>
                  <span>LIMITS</span>
                  <strong>
                    Assigned suppliers only
                  </strong>
                </div>

                <div>
                  <span>CONDITIONS</span>
                  <strong>
                    Procurement workflow
                  </strong>
                </div>

                <div>
                  <span>AUTONOMY</span>
                  <strong>
                    Limited independent action
                  </strong>
                </div>

                <div>
                  <span>HUMAN REQUIREMENTS</span>
                  <strong>
                    Contract commitment approval
                  </strong>
                </div>

              </div>

            </div>


            <div className={styles.flowStem} />


            <div className={styles.businessLayer}>

              <div>
                <span>BUSINESS CONTEXT</span>
                <strong>
                  Procurement Operations
                </strong>
              </div>

              <div className={styles.businessBadge}>
                Authority understood in context
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          OUTCOMES
         ====================================================== */}

      <section className={styles.outcomeSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>

            <span className={styles.sectionKicker}>
              OUTCOME
            </span>

            <h2>
              Understand where AI authority creates exposure.
            </h2>

          </div>


          <div className={styles.outcomeGrid}>

            {outcomes.map((item, index) => (

              <article
                className={styles.outcomeCard}
                key={item.title}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>
                  {item.description}
                </p>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* ======================================================
          PLATFORM CONNECTION
         ====================================================== */}

      <section className={styles.capabilitySection}>
        <div className={styles.shell}>

          <div className={styles.capabilityHeader}>

            <div>
              <span className={styles.sectionKicker}>
                POWERED BY AIGO-OS
              </span>

              <h2>
                Authority starts with identity,
                but it does not end there.
              </h2>
            </div>

            <Link
              className={styles.capabilityLink}
              href="/platform/machine-authority"
            >
              Explore Machine Authority
              <ArrowRight />
            </Link>

          </div>


          <div className={styles.capabilityFlow}>

            {capabilityChain.map((item, index) => (

              <div
                className={
                  item.active
                    ? `${styles.capabilityCard} ${styles.capabilityActive}`
                    : styles.capabilityCard
                }
                key={item.title}
              >

                <span>{item.number}</span>

                <strong>{item.title}</strong>

                <p>{item.question}</p>


                {index < capabilityChain.length - 1 ? (
                  <div className={styles.capabilityArrow}>
                    <ArrowRight />
                  </div>
                ) : null}

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ======================================================
          ENTERPRISE BOUNDARY
         ====================================================== */}

      <section className={styles.boundarySection}>
        <div className={styles.shell}>

          <div className={styles.boundaryPanel}>

            <div>
              <span className={styles.sectionKicker}>
                WORKS WITH EXISTING CONTROLS
              </span>

              <h2>
                Keep access control where it already belongs.
              </h2>

              <p>
                AIGO-OS provides the AI Actor and authority context needed
                to understand and govern privilege. Changes to identities,
                roles and permissions remain with the enterprise systems
                responsible for those controls.
              </p>
            </div>


            <div className={styles.boundarySystems}>

              <span>IAM</span>
              <span>PAM</span>
              <span>CLOUD</span>
              <span>APPLICATION ROLES</span>
              <span>API CONTROLS</span>

            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          CTA
         ====================================================== */}

      <section className={styles.cta}>
        <div className={styles.shell}>

          <div className={styles.ctaPanel}>

            <div>
              <span className={styles.ctaKicker}>
                AIGO-OS
              </span>

              <h2>
                Understand the authority AI carries
                through enterprise access.
              </h2>

              <p>
                Connect AI identity, privilege and delegated authority
                so your organisation can govern what AI may actually do,
                not only what it can technically reach.
              </p>
            </div>


            <Link
              className={styles.ctaButton}
              href="/contact"
            >
              Talk to us
              <ArrowRight />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}


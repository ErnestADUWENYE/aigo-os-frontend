import Link from "next/link";
import styles from "@/styles/page09-accountable-ai-identity.module.css";

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
        cx="12"
        cy="8"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5.5 19c.8-4 3-6 6.5-6s5.7 2 6.5 6"
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
        cx="8"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M11 12h8M16 9v6M19 10v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function EvidenceIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M7 3.8h7l3 3V20H7V3.8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M14 4v4h4M9.5 12h5M9.5 15.5h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

const outcomes = [
  {
    number: "01",
    eyebrow: "AI ACTOR",
    title: "Establish the accountable AI Actor",
    description:
      "Maintain the AI entity as a distinct governance subject across its enterprise activity.",
    icon: <IdentityIcon />,
  },
  {
    number: "02",
    eyebrow: "DELEGATED AUTHORITY",
    title: "Connect authority to the Actor",
    description:
      "Relate the AI Actor to the organisational or technical authority under which it operates.",
    icon: <AuthorityIcon />,
  },
  {
    number: "03",
    eyebrow: "GOVERNANCE CONTINUITY",
    title: "Carry accountability forward",
    description:
      "Keep identity and authority context connected to governance decisions, human oversight and evidence.",
    icon: <EvidenceIcon />,
  },
];

const benefits = [
  {
    title: "Attribution",
    description:
      "Maintain a consistent governance subject as AI activity moves across connected enterprise systems.",
  },
  {
    title: "Authority context",
    description:
      "Understand the relationship between the AI Actor and the authority under which it operates.",
  },
  {
    title: "Governance continuity",
    description:
      "Carry accountable AI identity into downstream governance decisions, human intervention and evidence.",
  },
];

const capabilityChain = [
  "AI Actor Passports",
  "Machine Authority",
  "Business Significance",
  "Governance Decisioning",
  "Human Authority",
  "Governance Receipts",
];

export function Page09AccountableAIIdentity() {
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
                USE CASE · AI IDENTITY
              </span>

              <h1>
                Establish Accountable
                <span> AI Identity.</span>
              </h1>

              <p className={styles.heroLead}>
                Give AI agents a distinct governance identity that connects
                who is acting, whose authority they carry and the enterprise
                context in which they operate.
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
                  href="/platform/actor-passports"
                >
                  Explore AI Actor Passports
                  <ArrowRight />
                </Link>
              </div>
            </div>


            <div className={styles.heroVisual}>
              <div className={styles.visualOrbit} />

              <div className={styles.sourceTagOne}>
                Workload Identity
              </div>

              <div className={styles.sourceTagTwo}>
                Agent Runtime
              </div>

              <div className={styles.sourceTagThree}>
                Application
              </div>

              <div className={styles.actorCard}>
                <div className={styles.actorCardTop}>
                  <div className={styles.actorIcon}>
                    <IdentityIcon />
                  </div>

                  <div>
                    <span>AI ACTOR</span>
                    <strong>Procurement Agent</strong>
                  </div>
                </div>

                <div className={styles.actorMeta}>
                  <div>
                    <span>ACTOR ID</span>
                    <strong>AA-2048</strong>
                  </div>

                  <div>
                    <span>OWNER</span>
                    <strong>Procurement Operations</strong>
                  </div>

                  <div>
                    <span>ENVIRONMENT</span>
                    <strong>Production</strong>
                  </div>
                </div>

                <div className={styles.actorStatus}>
                  <span>
                    <i />
                    Identity established
                  </span>

                  <span>
                    Authority connected
                  </span>
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
                An authenticated identity does not tell the whole
                accountability story.
              </h2>
            </div>

            <div className={styles.sectionCopy}>
              <p>
                AI agents can act through workload identities, service
                accounts, applications and delegated user authority.
              </p>

              <p>
                Those mechanisms establish access. Governing the AI activity
                also requires context about the Actor exercising that access,
                the authority it is carrying and where accountability sits.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ======================================================
          WHAT AIGO-OS ENABLES
         ====================================================== */}

      <section className={styles.enableSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              WHAT AIGO-OS ENABLES
            </span>

            <h2>
              Connect identity to accountable AI activity.
            </h2>
          </div>

          <div className={styles.outcomeGrid}>
            {outcomes.map((item) => (
              <article
                className={styles.outcomeCard}
                key={item.number}
              >
                <div className={styles.outcomeTop}>
                  <span className={styles.outcomeNumber}>
                    {item.number}
                  </span>

                  <div className={styles.outcomeIcon}>
                    {item.icon}
                  </div>
                </div>

                <span className={styles.outcomeEyebrow}>
                  {item.eyebrow}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================
          ACCOUNTABILITY IN CONTEXT
         ====================================================== */}

      <section className={styles.contextSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              ACCOUNTABILITY IN CONTEXT
            </span>

            <h2>
              Know which AI Actor stands behind the action.
            </h2>

            <p>
              AIGO-OS connects the AI Actor to the technical and
              organisational context required to govern its activity.
            </p>
          </div>


          <div className={styles.contextVisual}>

            <div className={styles.contextActor}>
              <span>AI ACTOR</span>
              <strong>Procurement Agent</strong>
              <small>AA-2048</small>
            </div>

            <div className={styles.contextLineTop} />

            <div className={styles.contextColumns}>

              <div className={styles.contextCard}>
                <span>IDENTITY</span>
                <strong>Workload Identity</strong>
                <p>svc-proc-07</p>
              </div>

              <div className={styles.contextCard}>
                <span>AUTHORITY</span>
                <strong>Delegated Authority</strong>
                <p>Procurement Operations</p>
              </div>

              <div className={styles.contextCard}>
                <span>OWNERSHIP</span>
                <strong>Accountable Function</strong>
                <p>Procurement Operations</p>
              </div>

            </div>

            <div className={styles.contextLineBottom} />

            <div className={styles.contextOutcome}>
              <span>GOVERNANCE CONTEXT</span>
              <strong>
                Identity, authority and accountability stay connected.
              </strong>
            </div>

          </div>
        </div>
      </section>


      {/* ======================================================
          WHY IT MATTERS
         ====================================================== */}

      <section className={styles.valueSection}>
        <div className={styles.shell}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionKicker}>
              WHY IT MATTERS
            </span>

            <h2>
              Accountability that follows AI into action.
            </h2>
          </div>

          <div className={styles.valueGrid}>
            {benefits.map((item, index) => (
              <article
                className={styles.valueCard}
                key={item.title}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
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
                Identity becomes the foundation for governance.
              </h2>
            </div>

            <Link
              className={styles.capabilityLink}
              href="/platform/actor-passports"
            >
              Explore AI Actor Passports
              <ArrowRight />
            </Link>
          </div>


          <div className={styles.capabilityChain}>
            {capabilityChain.map((capability, index) => (
              <div
                className={
                  index === 0
                    ? `${styles.capabilityNode} ${styles.capabilityNodeActive}`
                    : styles.capabilityNode
                }
                key={capability}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{capability}</strong>

                {index < capabilityChain.length - 1 ? (
                  <ArrowRight />
                ) : null}
              </div>
            ))}
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
                Establish accountability for AI that acts.
              </h2>

              <p>
                Bring AI identity, delegated authority and organisational
                context together in one connected governance layer.
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


import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CircleAlert,
  Fingerprint,
  Landmark,
  ShieldCheck,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "Clarify AI Ownership and Accountability",
  description:
    "AIGO-OS connects AI activity with ownership, responsibility and enterprise context so accountability remains visible as AI systems and agents become more autonomous.",
  path: "/solutions/unclear-ownership-accountability",
  keywords: [
    "AI accountability",
    "AI ownership",
    "AI governance responsibility",
  ],
});
const accountabilityQuestions = [
  {
    label: "OPERATES",
    title: "Digital Operations",
    detail: "Runs the customer service platform day to day.",
    icon: Wrench,
    state: "established",
  },
  {
    label: "OWNS THE TECHNOLOGY",
    title: "Platform Engineering",
    detail: "Maintains the application and supporting technology.",
    icon: Building2,
    state: "established",
  },
  {
    label: "APPROVES MATERIAL CHANGE",
    title: "Not established",
    detail: "No authoritative approval responsibility is visible.",
    icon: Fingerprint,
    state: "missing",
  },
  {
    label: "ACCEPTS BUSINESS RISK",
    title: "Customer Services",
    detail: "Business function responsible for the service outcome.",
    icon: ShieldCheck,
    state: "established",
  },
];


const failureModes = [
  {
    label: "MISSING",
    title: "Nobody reliable is identified",
    text:
      "The object exists, but connected enterprise context does not establish the responsibility needed for the decision.",
    className: "failureMissing",
  },
  {
    label: "CONFLICTING",
    title: "Two systems give different answers",
    text:
      "Different authoritative sources identify different people or teams for what appears to be the same responsibility.",
    className: "failureConflict",
  },
  {
    label: "MISLEADING",
    title: "An owner exists, but accountability does not",
    text:
      "A technical or operational owner is recorded even though the business function that must answer for the outcome is unclear.",
    className: "failureMisleading",
  },
  {
    label: "OUTDATED",
    title: "The organisation changed but the responsibility did not",
    text:
      "The service or organisation has moved while responsibility context still reflects an earlier operating model.",
    className: "failureOutdated",
  },
];


const evidenceItems = [
  {
    source: "Service inventory",
    responsibility: "Operational responsibility",
    value: "Digital Operations",
    status: "Established",
  },
  {
    source: "Application portfolio",
    responsibility: "Technology ownership",
    value: "Platform Engineering",
    status: "Established",
  },
  {
    source: "Business service context",
    responsibility: "Business accountability",
    value: "Customer Services",
    status: "Established",
  },
  {
    source: "Governance context",
    responsibility: "Change approval authority",
    value: "Not established",
    status: "Gap",
  },
];


export default function UnclearOwnershipAccountabilityPage() {
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
                Unclear Ownership &amp; Accountability
              </h1>

              <p className={styles.heroLead}>
                Knowing who is listed as the owner is not the same as knowing
                who can act and who must answer.
              </p>

              <p className={styles.heroBody}>
                AIGO-OS Govern brings responsibility context together around
                the enterprise object so teams can distinguish operational
                ownership, technology ownership, decision authority, risk
                responsibility and business accountability.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/talk-to-an-expert"
                  className={styles.primaryButton}
                >
                  Talk to an Expert

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


            <div className={styles.accountabilityDesk}>

  <div className={styles.deskHeader}>
    <div>
      <span>ACCOUNTABILITY VIEW</span>
      <strong>Customer Service Platform</strong>
    </div>

    <div className={styles.contextBadge}>
      <CheckCircle2
        size={15}
        strokeWidth={1.8}
        aria-hidden="true"
      />
      Context available
    </div>
  </div>


  <div className={styles.accountabilitySurface}>

    <div className={styles.governedObjectBand}>
      <div className={styles.governedObjectIcon}>
        <Building2
          size={26}
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </div>

      <div>
        <span>GOVERNED OBJECT</span>
        <strong>Customer Service Platform</strong>
        <small>
          Responsibility is distributed across different enterprise roles.
        </small>
      </div>
    </div>


    <div className={styles.roleMatrix}>

      <article className={styles.roleCardEstablished}>
        <div className={styles.roleCardIcon}>
          <Wrench
            size={20}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>

        <div>
          <span>OPERATES</span>
          <strong>Digital Operations</strong>
          <small>Runs the service day to day</small>
        </div>
      </article>


      <article className={styles.roleCardEstablished}>
        <div className={styles.roleCardIcon}>
          <Building2
            size={20}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>

        <div>
          <span>OWNS THE TECHNOLOGY</span>
          <strong>Platform Engineering</strong>
          <small>Maintains the application platform</small>
        </div>
      </article>


      <article className={styles.roleCardEstablished}>
        <div className={styles.roleCardIcon}>
          <Landmark
            size={20}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>

        <div>
          <span>BUSINESS ACCOUNTABILITY</span>
          <strong>Customer Services</strong>
          <small>Answers for the service outcome</small>
        </div>
      </article>


      <article className={styles.roleCardGap}>
        <div className={styles.roleCardIconGap}>
          <CircleAlert
            size={20}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <div>
          <span>APPROVAL AUTHORITY</span>
          <strong>Not established</strong>
          <small>No authoritative relationship is visible</small>
        </div>
      </article>

    </div>


    <div className={styles.accountabilityFooter}>
      <div className={styles.footerIcon}>
        <Fingerprint
          size={21}
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </div>

      <div>
        <span>ACCOUNTABILITY QUESTION</span>
        <strong>
          Who has authority to decide, and who must answer for the result?
        </strong>
      </div>
    </div>

  </div>
</div>

          </div>
        </PublicContainer>
      </section>



      {/* PROBLEM */}

      <section className={styles.problemSection}>
        <PublicContainer>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionLabel}>
                THE PROBLEM
              </p>

              <h2>
                An owner field can hide several different responsibility questions.
              </h2>
            </div>

            <p>
              Service, technology, governance and organisational systems often
              record responsibility differently. Those records may all be valid
              while describing different decision rights.
            </p>
          </div>


          <div className={styles.ownerVsAccountability}>

            <div className={styles.ownerClaim}>
              <span>THE RECORD SAYS</span>

              <strong>
                Owner: Digital Operations
              </strong>

              <p>
                That may establish who operates the platform without establishing
                who approves a material change, accepts risk or answers for the
                customer-service outcome.
              </p>
            </div>


            <div className={styles.responsibilitySpectrum}>

              <div className={styles.spectrumHeading}>
                <span>
                  WHAT THE BUSINESS ACTUALLY NEEDS TO KNOW
                </span>

                <strong>
                  Responsibility is not one field.
                </strong>
              </div>

              <div className={styles.spectrumItems}>

                <div>
                  <Wrench size={20} strokeWidth={1.7} aria-hidden="true" />
                  <span>Who operates it?</span>
                </div>

                <div>
                  <Building2 size={20} strokeWidth={1.7} aria-hidden="true" />
                  <span>Who owns the technology?</span>
                </div>

                <div>
                  <Fingerprint size={20} strokeWidth={1.7} aria-hidden="true" />
                  <span>Who can approve change?</span>
                </div>

                <div>
                  <ShieldCheck size={20} strokeWidth={1.7} aria-hidden="true" />
                  <span>Who accepts the risk?</span>
                </div>

                <div className={styles.accountabilityQuestion}>
                  <Landmark size={22} strokeWidth={1.7} aria-hidden="true" />
                  <span>Who must ultimately answer?</span>
                </div>

              </div>

            </div>

          </div>

        </PublicContainer>
      </section>



      {/* FAILURE MODES */}

      <section className={styles.failureSection}>
        <PublicContainer>

          <div className={styles.failureIntro}>
            <p className={styles.darkLabel}>
              HOW ACCOUNTABILITY BECOMES UNCLEAR
            </p>

            <h2>
              The problem is not always that an owner is missing.
            </h2>

            <p>
              Responsibility can be absent, contradictory, misleading or stale.
              Each case creates a different governance problem.
            </p>
          </div>


          <div className={styles.failureTerrain}>
            {failureModes.map((item) => (
              <article
                key={item.title}
                className={`${styles.failurePanel} ${styles[item.className]}`}
              >
                <span>
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

        </PublicContainer>
      </section>



      {/* DECISION RIGHTS */}

      <section className={styles.rightsSection}>
        <PublicContainer>

          <div className={styles.rightsLayout}>

            <div className={styles.rightsCopy}>
              <p className={styles.sectionLabel}>
                DECISION RIGHTS
              </p>

              <h2>
                Separate who does the work from who has authority and who is accountable.
              </h2>

              <p>
                Customer Service Platform can legitimately have several
                responsibility relationships. The governance question is whether
                each required role is established and supported by connected context.
              </p>
            </div>


            <div className={styles.rightsWorkbench}>

              <div className={styles.workbenchObject}>
                <Building2
                  size={23}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <div>
                  <span>ENTERPRISE OBJECT</span>
                  <strong>Customer Service Platform</strong>
                </div>
              </div>


              <div className={styles.rightsSlots}>
                {accountabilityQuestions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.label}
                      className={
                        item.state === "missing"
                          ? styles.rightSlotMissing
                          : styles.rightSlot
                      }
                    >
                      <div className={styles.slotIcon}>
                        <Icon
                          size={20}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <span>
                        {item.label}
                      </span>

                      <strong>
                        {item.title}
                      </strong>

                      <small>
                        {item.detail}
                      </small>
                    </article>
                  );
                })}
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>



      {/* GOVERN */}

      <section className={styles.governSection}>
        <PublicContainer>

          <div className={styles.governLayout}>

            <div className={styles.governCopy}>
              <p className={styles.lightLabel}>
                WITH AIGO-OS GOVERN
              </p>

              <h2>
                Show what responsibility the connected evidence supports.
              </h2>

              <p>
                AIGO-OS Govern does not manufacture ownership assignments.
                It connects available authoritative context and distinguishes
                established responsibility from responsibility that remains
                missing, contradictory or unresolved.
              </p>

              <div className={styles.governBoundary}>
                <ShieldCheck
                  size={20}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <p>
                  Organisational leaders still assign roles, approve changes and
                  make governance decisions. AIGO-OS makes the available
                  responsibility context visible and understandable.
                </p>
              </div>
            </div>


            <div className={styles.evidenceDesk}>

              <div className={styles.evidenceDeskHeader}>
                <span>RESPONSIBILITY EVIDENCE</span>
                <strong>Customer Service Platform</strong>
              </div>


              <div className={styles.evidenceStack}>

                {evidenceItems.map((item) => (
                  <article
                    key={item.responsibility}
                    className={
                      item.status === "Gap"
                        ? styles.evidenceGap
                        : styles.evidenceEstablished
                    }
                  >
                    <div>
                      <span>{item.source}</span>

                      <strong>
                        {item.responsibility}
                      </strong>
                    </div>

                    <div className={styles.evidenceValue}>
                      {item.value}
                    </div>

                    <div className={styles.evidenceState}>
                      {item.status}
                    </div>
                  </article>
                ))}

              </div>


              <div className={styles.accountabilityConclusion}>
                <CheckCircle2
                  size={22}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <div>
                  <span>BUSINESS ACCOUNTABILITY</span>

                  <strong>
                    Customer Services is the accountable business function.
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

          <div className={styles.outcomeIntro}>
            <p className={styles.sectionLabel}>
              WHAT BECOMES CLEAR
            </p>

            <h2>
              Know who can act, who has authority, who must answer and where accountability is still missing.
            </h2>
          </div>


          <div className={styles.outcomeComposition}>

            <article className={styles.outcomePrimary}>
              <UserRound
                size={27}
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <span>RESPONSIBILITY</span>

              <strong>
                See the role each team actually plays.
              </strong>

              <p>
                Operational ownership, technology ownership and business
                accountability remain distinct instead of collapsing into
                one generic owner field.
              </p>
            </article>


            <article className={styles.outcomeSecondary}>
              <UsersRound
                size={24}
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <span>CONFLICT</span>

              <strong>
                See when authoritative systems disagree.
              </strong>
            </article>


            <article className={styles.outcomeSecondary}>
              <CircleAlert
                size={24}
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <span>GAPS</span>

              <strong>
                Keep unresolved responsibility explicit.
              </strong>
            </article>


            <article className={styles.outcomeSecondary}>
              <ShieldCheck
                size={24}
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <span>ACCOUNTABILITY</span>

              <strong>
                Identify the function that must answer for the outcome.
              </strong>
            </article>

          </div>

        </PublicContainer>
      </section>



      {/* FINAL CTA */}

      <section className={styles.finalSection}>
        <PublicContainer>

          <div className={styles.finalPanel}>

            <div>
              <span>AIGO-OS GOVERN</span>

              <h2>
                Make accountability explicit instead of assumed.
              </h2>

              <p>
                Understand responsibility around the enterprise object, expose
                conflicting ownership signals and see where governance
                responsibility still needs to be established.
              </p>
            </div>


            <div className={styles.finalActions}>

              <Link
                href="/talk-to-an-expert"
                className={styles.finalPrimary}
              >
                Talk to an Expert

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



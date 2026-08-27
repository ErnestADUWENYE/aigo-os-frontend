import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import styles from "./page.module.css";


export const metadata = createPageMetadata({
  title: "Understand the Impact of AI Change",
  description:
    "AIGO-OS connects changes in AI and enterprise systems with dependencies, controls and business services so organisations can understand what may be affected.",
  path: "/solutions/unknown-change-impact",
  keywords: [
    "AI change impact",
    "AI dependency impact",
    "enterprise AI change management",
  ],
});
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

function ChangeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 7h8M8 17h8" />
      <path d="m13 4 3 3-3 3M11 14l-3 3 3 3" />
    </svg>
  );
}

function ApplicationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M8 9h8M8 13h5M8 17h3" />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="7" cy="7" r="3" />
      <circle cx="17" cy="17" r="3" />
      <path d="m9.2 9.2 5.6 5.6" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 21V7l7-3v17M12 9h7v12M8 10h1M8 14h1M8 18h1M15 13h1M15 17h1M3 21h18" />
    </svg>
  );
}

function ScopeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M22 12h-3M12 22v-3M2 12h3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.6 2.6L16.5 9" />
    </svg>
  );
}

const impactPath = [
  {
    type: "DIRECT DEPENDENCY",
    title: "Authentication Service",
    description: "Uses the changed identity platform",
    className: styles.technicalNode,
  },
  {
    type: "APPLICATION EXPOSURE",
    title: "Customer Portal",
    description: "Relies on authentication for customer login",
    className: styles.applicationNode,
  },
  {
    type: "BUSINESS SERVICE",
    title: "Digital Customer Access",
    description: "Depends on the portal authentication path",
    className: styles.serviceNode,
  },
  {
    type: "BUSINESS OPERATION",
    title: "Customer Servicing",
    description: "May be disrupted if digital access is affected",
    className: styles.businessNode,
  },
];

export default function UnknownChangeImpactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>AIGO-OS IMPACT</p>

            <h1 className={styles.title}>
              Unknown
              <br />
              Change Impact
            </h1>

            <p className={styles.lead}>
              The change is known. What it could affect across the enterprise
              may not be.
            </p>

            <p className={styles.body}>
              AIGO-OS Impact connects a proposed change to existing enterprise
              dependency context so teams can see which applications, services
              and business operations may be exposed before the change is
              implemented.
            </p>

            <div className={styles.actions}>
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
              <div className={styles.consoleGlow} aria-hidden="true" />

              <div className={styles.consoleHeader}>
                <div>
                  <span>PRE-CHANGE IMPACT VIEW</span>
                  <strong>Identity Platform</strong>
                </div>

                <div className={styles.proposedBadge}>
                  <ChangeIcon />
                  <span>Proposed change</span>
                </div>
              </div>

              <div className={styles.consoleBody}>
                <div className={styles.changedObject}>
                  <div className={styles.changedIcon}>
                    <ChangeIcon />
                  </div>
                  <span>CHANGED OBJECT</span>
                  <strong>Identity Platform</strong>
                  <small>Production authentication configuration</small>
                </div>

                <div className={styles.exposureColumn}>
                  <article className={styles.exposureCard}>
                    <div className={styles.exposureIcon}>
                      <ApplicationIcon />
                    </div>
                    <div>
                      <span>APPLICATION</span>
                      <strong>Customer Portal</strong>
                      <small>Uses authentication</small>
                    </div>
                  </article>

                  <article className={styles.exposureCard}>
                    <div className={styles.exposureIcon}>
                      <ServiceIcon />
                    </div>
                    <div>
                      <span>BUSINESS SERVICE</span>
                      <strong>Digital Customer Access</strong>
                      <small>Depends on portal access</small>
                    </div>
                  </article>

                  <article
                    className={`${styles.exposureCard} ${styles.businessExposure}`}
                  >
                    <div className={styles.exposureIcon}>
                      <BusinessIcon />
                    </div>
                    <div>
                      <span>BUSINESS OPERATION</span>
                      <strong>Customer Servicing</strong>
                      <small>Potential customer impact</small>
                    </div>
                  </article>
                </div>
              </div>

              <div className={styles.heroInsight}>
                <div className={styles.insightIcon}>
                  <ScopeIcon />
                </div>
                <div>
                  <span>POTENTIAL EXPOSURE</span>
                  <strong>
                    The proposed identity change reaches customer-facing
                    operations through a connected dependency path.
                  </strong>
                </div>
                <div className={styles.reviewState}>
                  <CheckIcon />
                  Review before change
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.questionSection}>
        <div className={styles.questionInner}>
          <div className={styles.questionCopy}>
            <p className={styles.sectionEyebrow}>THE CHANGE QUESTION</p>

            <h2>
              What sits beyond the component being changed?
            </h2>

            <p>
              Change records describe the work being proposed. They do not
              always reveal the enterprise consequences of that work. The
              missing context is often the dependency path between the changed
              technology and the business activity that ultimately relies on it.
            </p>
          </div>

          <div className={styles.questionVisual}>
            <div className={styles.orbitField} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className={styles.changeCore}>
              <ChangeIcon />
              <span>PROPOSED CHANGE</span>
              <strong>Identity Platform</strong>
            </div>

            <div className={`${styles.signal} ${styles.signalOne}`}>
              <span>Technical</span>
              <strong>Authentication</strong>
            </div>

            <div className={`${styles.signal} ${styles.signalTwo}`}>
              <span>Application</span>
              <strong>Customer Portal</strong>
            </div>

            <div className={`${styles.signal} ${styles.signalThree}`}>
              <span>Service</span>
              <strong>Digital Access</strong>
            </div>

            <div className={`${styles.signal} ${styles.signalFour}`}>
              <span>Business</span>
              <strong>Customer Servicing</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pathSection}>
        <div className={styles.pathInner}>
          <div className={styles.pathHeading}>
            <div>
              <p className={styles.sectionEyebrow}>
                FROM CHANGE TO BUSINESS EXPOSURE
              </p>

              <h2>
                See the impact path before production.
              </h2>
            </div>

            <p>
              AIGO-OS Impact follows connected enterprise context outward from
              the proposed change, showing why each potentially affected area
              matters.
            </p>
          </div>

          <div className={styles.impactRunway}>
            <div className={styles.runwayOrigin}>
              <div className={styles.runwayIcon}>
                <ChangeIcon />
              </div>
              <span>PROPOSED CHANGE</span>
              <strong>Identity Platform</strong>
              <small>Authentication configuration</small>
            </div>

            <div className={styles.runwayArrow} aria-hidden="true">
              <ArrowIcon />
            </div>

            {impactPath.map((item, index) => (
              <div className={styles.runwayGroup} key={item.title}>
                <article className={`${styles.runwayNode} ${item.className}`}>
                  <span>{item.type}</span>
                  <strong>{item.title}</strong>
                  <small>{item.description}</small>
                </article>

                {index < impactPath.length - 1 && (
                  <div className={styles.runwayArrow} aria-hidden="true">
                    <ArrowIcon />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.pathConclusion}>
            <div className={styles.conclusionMark}>
              <ScopeIcon />
            </div>

            <div>
              <span>IMPACT CONCLUSION</span>
              <strong>
                A change to the Identity Platform may expose Customer Servicing
                because the business operation depends on the authentication
                path.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valueSection}>
        <div className={styles.valueInner}>
          <div className={styles.valueCopy}>
            <p className={styles.sectionEyebrow}>AIGO-OS IMPACT</p>

            <h2>
              Make change decisions with business context already in view.
            </h2>

            <p>
              Instead of assessing a change only from the component being
              modified, teams can understand the applications, services and
              operations that may depend on it before deciding how the change
              should proceed.
            </p>
          </div>

          <div className={styles.valueStatement}>
            <span>BEFORE PRODUCTION</span>
            <strong>
              Know what may be exposed, understand why, and focus review where
              the potential business consequence is greatest.
            </strong>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.cta}>
          <div className={styles.ctaCopy}>
            <span>AIGO-OS IMPACT</span>
            <h2>
              Understand potential business impact before the change reaches
              production.
            </h2>
            <p>
              Connect proposed changes to the applications, services and
              business operations that depend on them, with the context behind
              every potential impact.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link href="/talk-to-an-expert" className={styles.ctaPrimary}>
              <span>Talk to an Expert</span>
              <ArrowIcon />
            </Link>

            <Link href="/products/aigo-os-impact" className={styles.ctaSecondary}>
              Explore AIGO-OS Impact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}




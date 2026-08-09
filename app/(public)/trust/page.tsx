import Link from "next/link";

const trustDomains = [
  {
    number: "01",
    title: "Security by architecture",
    body:
      "AIGO-OS is being designed so governance infrastructure can operate with explicit boundaries, controlled access and clear separation of responsibilities.",
    href: "/security",
    link: "Explore security",
  },
  {
    number: "02",
    title: "Traceable governance",
    body:
      "Governance decisions should not disappear into an opaque control plane. AIGO-OS preserves the context needed to understand what was evaluated, what decision was made and why.",
    href: "/product/governance-receipts",
    link: "Explore governance receipts",
  },
  {
    number: "03",
    title: "Responsible operation",
    body:
      "Security concerns need a clear path to the people responsible for the platform. Our disclosure process establishes that path as AIGO-OS develops.",
    href: "/responsible-disclosure",
    link: "Responsible disclosure",
  },
];

const principles = [
  {
    label: "Least necessary access",
    text:
      "Governance integrations should request only the access required for their defined purpose.",
  },
  {
    label: "Explicit authority",
    text:
      "Machine authority should be understandable, bounded and evaluated in context.",
  },
  {
    label: "Evidence preservation",
    text:
      "Material governance decisions should leave evidence that can be reconstructed later.",
  },
  {
    label: "Human accountability",
    text:
      "Autonomous governance should preserve clear paths for escalation, review and accountable human judgment.",
  },
];

export default function TrustPage() {
  return (
    <div className="trust-page">
      <section className="trust-page__hero">
        <div className="trust-page__hero-shell">
          <span className="trust-page__eyebrow">
            Trust center
          </span>

          <h1>
            Governance infrastructure has to earn the authority it holds.
          </h1>

          <p>
            AIGO-OS is being built for a consequential position in the
            enterprise stack. That requires disciplined security,
            bounded access, reconstructable decisions and transparent
            operating principles.
          </p>

          <div className="trust-page__actions">
            <Link href="/security">
              Security architecture
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/responsible-disclosure">
              Report a security concern
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-page__position public-light">
        <div className="public-section-shell">
          <div className="trust-page__position-heading">
            <div>
              <span className="public-section-kicker">
                Our position
              </span>

              <h2>
                Trust is part of the product architecture.
              </h2>
            </div>

            <p>
              An AI governance system may observe sensitive operating
              context and influence consequential decisions. Security
              and accountability therefore cannot be treated as
              documentation added after the platform is built.
            </p>
          </div>

          <div className="trust-page__domains">
            {trustDomains.map((domain) => (
              <article key={domain.number}>
                <span>{domain.number}</span>
                <h3>{domain.title}</h3>
                <p>{domain.body}</p>

                <Link href={domain.href}>
                  {domain.link}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-page__principles">
        <div className="trust-page__principles-shell">
          <div className="trust-page__principles-copy">
            <span>Operating principles</span>

            <h2>
              Control the governance layer itself.
            </h2>

            <p>
              AIGO-OS is intended to govern autonomy without becoming
              an uncontrolled source of authority. The governance layer
              must itself remain bounded, observable and accountable.
            </p>
          </div>

          <div className="trust-page__principles-list">
            {principles.map((principle, index) => (
              <article key={principle.label}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{principle.label}</h3>
                  <p>{principle.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-page__disclosure public-light">
        <div className="public-section-shell">
          <div className="trust-page__disclosure-grid">
            <div>
              <span className="public-section-kicker">
                Transparency
              </span>

              <h2>
                Be precise about what exists today.
              </h2>
            </div>

            <div>
              <p>
                AIGO-OS is an emerging platform. We will not represent
                planned controls, certifications or assurance programs
                as completed before they are completed.
              </p>

              <p>
                As security documentation, independent assurance and
                formal compliance artifacts become available, this
                trust center should become the authoritative public
                location for them.
              </p>

              <Link href="/contact">
                Ask a trust or security question
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-page__cta">
        <div className="trust-page__cta-shell">
          <span>Enterprise evaluation</span>

          <h2>
            Evaluating AIGO-OS for a sensitive environment?
          </h2>

          <p>
            Talk with us about your architecture, governance boundaries
            and security requirements.
          </p>

          <Link href="/contact">
            Start a security conversation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
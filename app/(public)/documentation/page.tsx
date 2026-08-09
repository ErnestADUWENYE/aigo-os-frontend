import Link from "next/link";

const foundations = [
  {
    number: "01",
    title: "AI actor model",
    text: "Understand how AIGO-OS represents agents, models, AI applications and automations as governed actors with identity, ownership and lifecycle context.",
    href: "/product/actor-passports",
    link: "Explore actor passports",
  },
  {
    number: "02",
    title: "Authority model",
    text: "Define what an AI actor may do, where it may operate, which resources it may access and which conditions require human approval.",
    href: "/product/authority",
    link: "Explore authority",
  },
  {
    number: "03",
    title: "Risk intelligence",
    text: "Interpret technical signals together with business context, authority, dependencies and operational significance.",
    href: "/product/risk-intelligence",
    link: "Explore risk intelligence",
  },
  {
    number: "04",
    title: "Governance receipts",
    text: "Preserve the evidence behind governance decisions so actions can be reconstructed, reviewed and explained.",
    href: "/product/governance-receipts",
    link: "Explore governance receipts",
  },
];

const lifecycle = [
  "Discover enterprise AI actors and their operating context",
  "Correlate identity, ownership, dependencies and provenance",
  "Establish an actor passport as the governance record",
  "Evaluate authority before consequential action",
  "Interpret risk in business and operational context",
  "Record decisions, actions and evidence for traceability",
];

const integrationAreas = [
  "AI platforms",
  "Identity systems",
  "Cloud and infrastructure",
  "Enterprise applications",
  "Observability systems",
  "Security and governance tooling",
];

export default function DocumentationPage() {
  return (
    <main className="docs-page">
      <section className="docs-hero">
        <div className="docs-shell">
          <div className="docs-hero__grid">
            <div>
              <span className="docs-eyebrow">AIGO-OS DOCUMENTATION</span>

              <h1>
                Understand the operating model behind governed autonomy.
              </h1>

              <p className="docs-hero__lead">
                Start with the core concepts that define how AIGO-OS discovers
                enterprise AI, establishes governance identity, evaluates
                authority and risk, and preserves evidence across autonomous
                operations.
              </p>

              <div className="docs-actions">
                <a className="docs-button docs-button--primary" href="#foundations">
                  Start with the foundations
                </a>

                <Link
                  className="docs-button docs-button--secondary"
                  href="/integrations"
                >
                  Explore integrations
                </Link>
              </div>
            </div>

            <div className="docs-model" aria-label="AIGO-OS governance lifecycle">
              <div className="docs-model__header">
                <span>Governance lifecycle</span>
                <strong>Continuous</strong>
              </div>

              <div className="docs-model__flow">
                {[
                  "Discover",
                  "Understand",
                  "Passport",
                  "Authorize",
                  "Decide",
                  "Trace",
                ].map((stage, index) => (
                  <div className="docs-model__stage" key={stage}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{stage}</strong>
                  </div>
                ))}
              </div>

              <div className="docs-model__footer">
                Machine first. Human by exception. Traceability always.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section" id="foundations">
        <div className="docs-shell">
          <div className="docs-section__heading">
            <span className="docs-eyebrow">FOUNDATIONS</span>
            <h2>Learn the governance primitives first.</h2>
            <p>
              AIGO-OS is built around a small set of concepts that remain
              consistent as AI systems become more autonomous.
            </p>
          </div>

          <div className="docs-card-grid">
            {foundations.map((item) => (
              <article className="docs-card" key={item.number}>
                <span className="docs-card__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href={item.href}>{item.link} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="docs-section docs-section--dark">
        <div className="docs-shell docs-two-column">
          <div className="docs-section__heading">
            <span className="docs-eyebrow">OPERATING MODEL</span>
            <h2>Governance follows the actor through its lifecycle.</h2>
            <p>
              Governance should not begin with a static policy document and end
              with a periodic review. AIGO-OS is designed around continuous
              interpretation of actors, authority, risk, decisions and evidence.
            </p>
          </div>

          <div className="docs-lifecycle">
            {lifecycle.map((item, index) => (
              <div className="docs-lifecycle__item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-shell">
          <div className="docs-section__heading">
            <span className="docs-eyebrow">INTEGRATION MODEL</span>
            <h2>Govern from the systems where AI already operates.</h2>
            <p>
              AIGO-OS is designed to consume governance signals from the
              enterprise environment rather than requiring every AI workload to
              be rebuilt around a new control plane.
            </p>
          </div>

          <div className="docs-integration-grid">
            {integrationAreas.map((area) => (
              <div className="docs-integration" key={area}>
                <span className="docs-integration__signal" />
                <strong>{area}</strong>
              </div>
            ))}
          </div>

          <div className="docs-inline-cta">
            <div>
              <span className="docs-eyebrow">CONNECT YOUR ENVIRONMENT</span>
              <h3>Bring governance to the systems already running your AI.</h3>
            </div>

            <Link href="/integrations">View integration architecture →</Link>
          </div>
        </div>
      </section>

      <section className="docs-section docs-section--light">
        <div className="docs-shell docs-two-column">
          <div className="docs-section__heading">
            <span className="docs-eyebrow">FOR BUILDERS</span>
            <h2>Documentation will grow with the platform.</h2>
          </div>

          <div className="docs-builder-copy">
            <p>
              As product interfaces stabilize, this documentation area will
              expand to include integration specifications, API references,
              event schemas, connector guidance and implementation examples.
            </p>

            <p>
              We will distinguish clearly between available interfaces and
              capabilities that remain in development. We will not publish
              placeholder APIs as if they are production contracts.
            </p>

            <Link href="/design-partners">
              Work with AIGO-OS as a design partner →
            </Link>
          </div>
        </div>
      </section>

      <section className="docs-final">
        <div className="docs-shell docs-final__inner">
          <div>
            <span className="docs-eyebrow">BUILD GOVERNANCE INTO AUTONOMY</span>
            <h2>
              Your AI systems are becoming operating actors. Govern them like it.
            </h2>
          </div>

          <div className="docs-actions">
            <Link
              className="docs-button docs-button--primary"
              href="/design-partners"
            >
              Become a Design Partner
            </Link>

            <Link
              className="docs-button docs-button--secondary"
              href="/product"
            >
              Explore AIGO-OS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Govern the actor",
    body:
      "Governance begins with understanding the AI actor itself, its identity, ownership, provenance, relationships and operating context.",
  },
  {
    number: "02",
    title: "Understand effective authority",
    body:
      "Enterprise control depends on knowing what an AI actor can actually access, execute, change and influence across connected systems.",
  },
  {
    number: "03",
    title: "Evaluate context continuously",
    body:
      "Risk and governance state should change when authority, dependencies, environment, business significance or operating conditions change.",
  },
  {
    number: "04",
    title: "Govern at machine speed",
    body:
      "Routine activity should proceed inside explicit boundaries while consequential exceptions are escalated when human judgment is valuable.",
  },
];

const lifecycle = [
  "Discover",
  "Correlate",
  "Identify",
  "Authorize",
  "Assess",
  "Decide",
  "Evidence",
  "Monitor",
];

export default function CompanyPage() {
  return (
    <div className="company-page">
      <section className="company-page__hero">
        <div className="company-page__hero-shell">
          <span>About AIGO-OS</span>

          <h1>
            AIGO-OS is the governance operating layer for
            autonomous enterprise AI.
          </h1>

          <p>
            Enterprise AI is moving from systems that generate
            recommendations toward actors that reason, invoke tools,
            interact with business systems and initiate actions.
            Governance infrastructure must evolve with it.
          </p>

          <div className="company-page__hero-actions">
            <Link href="/product">
              Explore AIGO-OS
              <span aria-hidden="true">â†’</span>
            </Link>

            <Link href="/contact?intent=demo">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="company-page__thesis public-light">
        <div className="public-section-shell">
          <div className="company-page__thesis-grid">
            <div>
              <span className="public-section-kicker">
                Our thesis
              </span>

              <h2>
                The governance model must change when the operating
                model changes.
              </h2>
            </div>

            <div className="company-page__thesis-copy">
              <p>
                Traditional governance approaches were built around
                inventories, periodic assessments, documents and human
                review cycles.
              </p>

              <p>
                Autonomous AI creates a different operating
                environment. Actors can emerge across platforms,
                inherit access, depend on surrounding services and
                participate directly in enterprise workflows.
              </p>

              <p>
                AIGO-OS makes that environment
                continuously understandable and governable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="company-page__principles">
        <div className="company-page__principles-shell">
          <div className="company-page__principles-heading">
            <span>How we think</span>

            <h2>
              Governance should be part of operation, not paperwork
              around it.
            </h2>
          </div>

          <div className="company-page__principles-grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-page__system public-light">
        <div className="public-section-shell">
          <div className="company-page__system-heading">
            <div>
              <span className="public-section-kicker">
                The operating loop
              </span>

              <h2>
                Continuous governance from discovery through evidence.
              </h2>
            </div>

            <p>
              AIGO-OS connects the stages required to move from
              fragmented enterprise AI signals to governed,
              reconstructable operation.
            </p>
          </div>

          <div className="company-page__lifecycle">
            {lifecycle.map((stage, index) => (
              <div key={stage}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{stage}</strong>
                {index < lifecycle.length - 1 ? <i /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-page__closing">
        <div className="company-page__closing-shell">
          <span>Build the next control layer</span>

          <h2>
            AI autonomy will keep increasing. Enterprise governance
            has to be ready for it.
          </h2>

          <p>
            AIGO-OS gives organizations an operational control layer for
            governing AI actors as autonomy expands across the enterprise.
          </p>

          <div>
            <Link href="/contact?intent=demo">
              Request a Demo
              <span aria-hidden="true">â†’</span>
            </Link>

            <Link href="/contact">
              Talk to AIGO-OS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

const solutions = [
  {
    number: "01",
    eyebrow: "AI agents",
    title: "Govern agents as operating actors.",
    body:
      "Discover agents across the enterprise, establish governance identity, understand their effective authority and continuously evaluate how they operate.",
    href: "/solutions/ai-agents",
    signal: "Actor governance",
  },
  {
    number: "02",
    eyebrow: "Enterprise AI",
    title: "Create one governance model across a fragmented AI estate.",
    body:
      "Connect models, applications, agents, automations and surrounding enterprise systems into a continuously understandable governance environment.",
    href: "/solutions/enterprise-ai",
    signal: "Estate governance",
  },
  {
    number: "03",
    eyebrow: "Governed autonomy",
    title: "Let machines move quickly inside explicit boundaries.",
    body:
      "Evaluate authority, risk and policy at decision time so routine activity can proceed while consequential exceptions reach the right human.",
    href: "/solutions/governed-autonomy",
    signal: "Runtime governance",
  },
];

const pressures = [
  {
    label: "Visibility",
    before: "AI is distributed across tools, teams and platforms.",
    after: "Continuously discover and correlate the operating AI estate.",
  },
  {
    label: "Identity",
    before: "Inventory records do not explain the actor behind an action.",
    after: "Establish persistent governance identity for AI actors.",
  },
  {
    label: "Authority",
    before: "Configured permissions do not reveal effective machine power.",
    after: "Understand what an actor can actually access and influence.",
  },
  {
    label: "Risk",
    before: "Static classifications lose the context of live operation.",
    after: "Evaluate risk using authority, environment and business context.",
  },
  {
    label: "Decisions",
    before: "Manual review cannot keep pace with autonomous activity.",
    after: "Make routine governance decisions at machine speed.",
  },
  {
    label: "Evidence",
    before: "Governance decisions become difficult to reconstruct later.",
    after: "Preserve the context and evidence behind every decision.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="solutions-page">
      <section className="solutions-page__hero">
        <div className="solutions-page__hero-shell">
          <div className="solutions-page__hero-copy">
            <span>Solutions</span>

            <h1>
              Govern AI where autonomy becomes an operating reality.
            </h1>

            <p>
              AIGO-OS gives enterprises a governance operating layer
              for AI actors, fragmented AI environments and autonomous
              workflows that can no longer depend on periodic review.
            </p>

            <div className="solutions-page__hero-actions">
              <Link href="/design-partners">
                Discuss your environment
                <span aria-hidden="true">→</span>
              </Link>

              <Link href="/product">
                Explore the platform
              </Link>
            </div>
          </div>

          <div
            aria-label="Enterprise AI governance flow"
            className="solutions-page__visual"
          >
            <div className="solutions-page__visual-head">
              <span>Enterprise AI</span>
              <strong>Governance state</strong>
            </div>

            <div className="solutions-page__visual-flow">
              <div className="solutions-page__visual-inputs">
                <span>Agents</span>
                <span>Models</span>
                <span>AI apps</span>
                <span>Automations</span>
              </div>

              <div className="solutions-page__visual-line">
                <i />
                <i />
                <i />
              </div>

              <div className="solutions-page__visual-core">
                <small>AIGO-OS</small>
                <strong>Govern</strong>
                <span>
                  Identity · Authority · Risk · Decision
                </span>
              </div>

              <div className="solutions-page__visual-line">
                <i />
                <i />
                <i />
              </div>

              <div className="solutions-page__visual-outcomes">
                <span>Known</span>
                <span>Authorized</span>
                <span>Monitored</span>
                <span>Traceable</span>
              </div>
            </div>

            <div className="solutions-page__visual-status">
              <span>
                <i />
                Continuous governance
              </span>

              <strong>Operating</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-page__portfolio public-light">
        <div className="public-section-shell">
          <div className="solutions-page__section-heading">
            <div>
              <span className="public-section-kicker">
                Where AIGO-OS operates
              </span>

              <h2>
                Three governance problems. One operating layer.
              </h2>
            </div>

            <p>
              The challenge is not simply managing more AI. It is
              governing systems whose identity, authority, risk and
              behavior can change as they operate.
            </p>
          </div>

          <div className="solutions-page__cards">
            {solutions.map((solution) => (
              <article key={solution.number}>
                <div className="solutions-page__card-top">
                  <span>{solution.number}</span>
                  <small>{solution.signal}</small>
                </div>

                <span className="solutions-page__card-eyebrow">
                  {solution.eyebrow}
                </span>

                <h3>{solution.title}</h3>
                <p>{solution.body}</p>

                <Link href={solution.href}>
                  Explore solution
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-page__shift">
        <div className="solutions-page__shift-shell">
          <div className="solutions-page__shift-heading">
            <span>Why the operating model changes</span>

            <h2>
              Autonomous AI creates governance pressure at every layer.
            </h2>
          </div>

          <div className="solutions-page__pressure-table">
            <div className="solutions-page__pressure-head">
              <span>Governance dimension</span>
              <span>Without an operating layer</span>
              <span>With AIGO-OS</span>
            </div>

            {pressures.map((pressure) => (
              <div
                className="solutions-page__pressure-row"
                key={pressure.label}
              >
                <strong>{pressure.label}</strong>
                <p>{pressure.before}</p>
                <p>{pressure.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-page__decision public-light">
        <div className="public-section-shell">
          <div className="solutions-page__decision-grid">
            <div>
              <span className="public-section-kicker">
                The result
              </span>

              <h2>
                More autonomy does not have to mean less control.
              </h2>

              <p>
                AIGO-OS is designed to make governance part of the
                operating path, giving machines room to act inside
                explicit boundaries while preserving accountability.
              </p>
            </div>

            <div className="solutions-page__decision-model">
              <div>
                <span>Routine action</span>
                <strong>Machine decision</strong>
                <small>Proceed inside verified boundaries</small>
              </div>

              <i />

              <div>
                <span>Material exception</span>
                <strong>Human judgment</strong>
                <small>Escalate with context and evidence</small>
              </div>

              <i />

              <div>
                <span>Every outcome</span>
                <strong>Governance receipt</strong>
                <small>Preserve a reconstructable decision trail</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-page__cta">
        <div className="solutions-page__cta-shell">
          <span>Start with the operating problem</span>

          <h2>
            Show us where AI is gaining authority in your enterprise.
          </h2>

          <p>
            We will start with the actors, systems and decisions that
            are becoming difficult to govern with existing approaches.
          </p>

          <Link href="/design-partners">
            Become a Design Partner
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
import Link from "next/link";

export default function Page() {
  return (
    <div className="capability-detail">
      <section className="capability-detail__hero">
        <div className="capability-detail__hero-shell">
          <span className="capability-detail__kicker">
            Enterprise AI
          </span>

          <h1>Create one governance model across a fragmented AI estate.</h1>

          <p>Bring agents, models, AI applications, automations and enterprise dependencies into a continuously understood governance environment.</p>

          <div className="capability-detail__actions">
            <Link href="/design-partners">
              Become a Design Partner
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/contact">
              Talk to AIGO-OS
            </Link>
          </div>
        </div>
      </section>

      <section className="capability-detail__proof public-light">
        <div className="public-section-shell">
          <div className="capability-detail__proof-grid">
            <div>
              <span className="public-section-kicker">
                Operating capability
              </span>

              <h2>
                Governance context built for autonomous operation.
              </h2>
            </div>

            <ul>
            <li>
              <span aria-hidden="true">✓</span>
              <strong>Continuously understand the enterprise AI estate</strong>
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              <strong>Correlate fragmented signals across platforms</strong>
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              <strong>Apply common governance context across AI types</strong>
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              <strong>Preserve accountability as the estate changes</strong>
            </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="capability-detail__flow">
        <div className="capability-detail__flow-shell">
          <span>Enterprise AI</span>
          <i />
          <strong>Enterprise AI</strong>
          <i />
          <span>Governed operation</span>
        </div>
      </section>

      <section className="capability-detail__conversion">
        <div>
          <span>Build with AIGO-OS</span>
          <h2>
            Bring this governance capability into a real enterprise environment.
          </h2>
        </div>

        <Link href="/design-partners">
          Explore the Design Partner Program
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
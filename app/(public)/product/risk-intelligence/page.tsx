import Link from "next/link";

export default function Page() {
  return (
    <div className="capability-detail">
      <section className="capability-detail__hero">
        <div className="capability-detail__hero-shell">
          <span className="capability-detail__kicker">
            Risk Intelligence
          </span>

          <h1>Interpret AI risk in the context that makes it matter.</h1>

          <p>AIGO-OS combines technical signals with authority, dependencies, business significance and operating context so risk reflects how an AI actor can affect the enterprise.</p>

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
              <strong>Combine technical and governance signals</strong>
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              <strong>Interpret exposure against effective authority</strong>
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              <strong>Include dependencies and business significance</strong>
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              <strong>Continuously reassess risk as operating context changes</strong>
            </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="capability-detail__flow">
        <div className="capability-detail__flow-shell">
          <span>Enterprise AI</span>
          <i />
          <strong>Risk Intelligence</strong>
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
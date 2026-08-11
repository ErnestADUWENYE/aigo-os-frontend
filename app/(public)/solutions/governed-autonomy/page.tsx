import Link from "next/link";

export default function Page() {
  return (
    <div className="capability-detail">
      <section className="capability-detail__hero">
        <div className="capability-detail__hero-shell">
          <span className="capability-detail__kicker">
            Governed Autonomy
          </span>

          <h1>Let machines move quickly without giving up control.</h1>

          <p>AIGO-OS is designed for an operating model where routine machine activity proceeds inside explicit boundaries and humans intervene when governance context requires judgment.</p>

          <div className="capability-detail__actions">
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
              <span aria-hidden="true">âœ“</span>
              <strong>Define explicit autonomous operating boundaries</strong>
            </li>
            <li>
              <span aria-hidden="true">âœ“</span>
              <strong>Evaluate authority and risk at decision time</strong>
            </li>
            <li>
              <span aria-hidden="true">âœ“</span>
              <strong>Escalate exceptions instead of every routine action</strong>
            </li>
            <li>
              <span aria-hidden="true">âœ“</span>
              <strong>Preserve evidence across machine-speed execution</strong>
            </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="capability-detail__flow">
        <div className="capability-detail__flow-shell">
          <span>Enterprise AI</span>
          <i />
          <strong>Governed Autonomy</strong>
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

        <Link href="/contact?intent=demo">
          Request a Demo
          <span aria-hidden="true">â†’</span>
        </Link>
      </section>
    </div>
  );
}

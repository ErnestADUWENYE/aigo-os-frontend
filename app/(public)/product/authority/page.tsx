import Link from "next/link";

export default function Page() {
  return (
    <div className="capability-detail">
      <section className="capability-detail__hero">
        <div className="capability-detail__hero-shell">
          <span className="capability-detail__kicker">
            Machine Authority
          </span>

          <h1>Know what an AI actor is actually allowed to do.</h1>

          <p>Identity tells you what an AI actor is. Authority determines where it may operate, which resources it may affect and where autonomous action must stop.</p>

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
              <strong>Express permitted actions and operating scope</strong>
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              <strong>Connect authority to resources, environments and conditions</strong>
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              <strong>Model expiry, revocation and approval requirements</strong>
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              <strong>Evaluate effective authority when governance decisions are made</strong>
            </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="capability-detail__flow">
        <div className="capability-detail__flow-shell">
          <span>Enterprise AI</span>
          <i />
          <strong>Machine Authority</strong>
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
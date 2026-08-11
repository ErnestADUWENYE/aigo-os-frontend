import Link from "next/link";

import { AigoCapabilityDemo } from "@/components/aigo-capability-demo";

export default function Page() {
  return (
    <div className="capability-detail">
      <section className="capability-detail__hero">
        <div className="capability-detail__hero-shell">
          <span className="capability-detail__kicker">
            Governance Receipts
          </span>

          <h1>Make autonomous governance reconstructable.</h1>

          <p>AIGO-OS preserves the context behind governed decisions so enterprises can understand what was known, what was allowed, what was decided and what happened.</p>

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
              <strong>Capture governance context at decision time</strong>
            </li>
            <li>
              <span aria-hidden="true">âœ“</span>
              <strong>Connect policy, authority, risk and evidence</strong>
            </li>
            <li>
              <span aria-hidden="true">âœ“</span>
              <strong>Record governed actions and outcomes</strong>
            </li>
            <li>
              <span aria-hidden="true">âœ“</span>
              <strong>Preserve traceability after autonomous execution</strong>
            </li>
            </ul>
          </div>
        </div>
      </section>

      <AigoCapabilityDemo mode="receipt" />

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

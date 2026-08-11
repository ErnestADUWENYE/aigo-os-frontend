import Link from "next/link";

import { AigoCapabilityDemo } from "@/components/aigo-capability-demo";

export default function Page() {
  return (
    <div className="capability-detail">
      <section className="capability-detail__hero">
        <div className="capability-detail__hero-shell">
          <span className="capability-detail__kicker">
            Actor Passports
          </span>

          <h1>Give every AI actor a governance identity.</h1>

          <p>AIGO-OS creates a canonical governance record for each AI actor, connecting identity, ownership, provenance, relationships, lifecycle state and operating context.</p>

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
              <strong>Resolve fragmented observations into a canonical actor</strong>
            </li>
            <li>
              <span aria-hidden="true">âœ“</span>
              <strong>Connect technical identity with accountable ownership</strong>
            </li>
            <li>
              <span aria-hidden="true">âœ“</span>
              <strong>Preserve provenance, relationships and lifecycle context</strong>
            </li>
            <li>
              <span aria-hidden="true">âœ“</span>
              <strong>Create the foundation for authority, risk and governance decisions</strong>
            </li>
            </ul>
          </div>
        </div>
      </section>

      <AigoCapabilityDemo mode="passport" />

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

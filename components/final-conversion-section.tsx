import Link from "next/link";

export function FinalConversionSection() {
  return (
    <section className="final-conversion">
      <div className="final-conversion__signal final-conversion__signal--one" />
      <div className="final-conversion__signal final-conversion__signal--two" />

      <div className="final-conversion__shell">
        <span className="final-conversion__kicker">
          Govern what comes next
        </span>

        <h2>
          Autonomous AI needs an operating system for governance.
        </h2>

        <p>
          See how AIGO-OS can help your organization establish
          visibility, identity, authority, contextual risk,
          governance decisions and traceability across enterprise AI.
        </p>

        <div className="final-conversion__actions">
          <Link
            className="final-conversion__primary"
            href="/design-partners"
          >
            Become a Design Partner
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            className="final-conversion__secondary"
            href="/contact"
          >
            Request a conversation
          </Link>
        </div>

        <div className="final-conversion__principles">
          <span>Discover continuously</span>
          <i />
          <span>Govern contextually</span>
          <i />
          <span>Intervene by exception</span>
          <i />
          <span>Preserve evidence</span>
        </div>
      </div>
    </section>
  );
}
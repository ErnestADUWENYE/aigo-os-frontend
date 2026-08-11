import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="aigo-solution-hero">
        <div className="aigo-home-shell">
          <p className="aigo-home-eyebrow">
            Enterprise use case
          </p>

          <h1>Control Excessive Agency</h1>

          <p className="aigo-solution-hero__lead">
            Prevent autonomous AI systems from taking actions beyond the authority, purpose or operating conditions they were given.
          </p>

          <div className="aigo-home-actions">
            <Link
              className="aigo-home-button aigo-home-button--primary"
              href="/contact?intent=demo"
            >
              Request a Demo
            </Link>

            <Link
              className="aigo-home-button aigo-home-button--secondary"
              href="/product"
            >
              Explore AIGO-OS
            </Link>
          </div>
        </div>
      </section>

      <section className="aigo-solution-body">
        <div className="aigo-home-shell aigo-solution-body__grid">
          <article>
            <span>THE PROBLEM</span>

            <h2>
              Control has to extend beyond identity and access.
            </h2>

            <p>
              An AI actor can have valid access and legitimate tools while still having more operational freedom than the organization intended. Excessive functionality, permissions or autonomy can turn a mistake or manipulated instruction into a consequential action.
            </p>
          </article>

          <article>
            <span>THE AIGO-OS CONTROL</span>

            <h2>
              Govern the action at the moment it matters.
            </h2>

            <p>
              AIGO-OS evaluates the proposed action against delegated authority, purpose, operating conditions, contextual risk and required human oversight before the action proceeds.
            </p>
          </article>
        </div>
      </section>

      <section className="aigo-solution-decision">
        <div className="aigo-home-shell">
          <p className="aigo-home-eyebrow aigo-home-eyebrow--dark">
            Contextual decision
          </p>

          <h2>
            Apply the appropriate response to each action.
          </h2>

          <div className="aigo-decision-grid">
            <strong>ALLOW</strong>
            <strong>DENY</strong>
            <strong>REVIEW REQUIRED</strong>
            <strong>ESCALATE</strong>
            <strong>SUSPEND</strong>
          </div>
        </div>
      </section>

      <section className="aigo-page-conversion">
        <div className="aigo-home-shell aigo-page-conversion__inner">
          <div>
            <span>See it in your environment</span>

            <h2>
              Evaluate this control problem with AIGO-OS.
            </h2>
          </div>

          <Link
            className="aigo-home-button aigo-home-button--primary"
            href="/contact?intent=demo"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  );
}

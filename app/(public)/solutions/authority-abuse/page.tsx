import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="aigo-solution-hero">
        <div className="aigo-home-shell">
          <p className="aigo-home-eyebrow">
            Enterprise use case
          </p>

          <h1>
            Control Privilege and Authority Abuse
          </h1>

          <p className="aigo-solution-hero__lead">
            Govern how recognized AI actors exercise
            permissions and delegated authority across
            enterprise systems, tools and workflows.
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
              A valid identity does not make every exercise
              of authority valid.
            </h2>

            <p>
              An AI actor may have an approved identity,
              assigned permissions and legitimate access
              while still attempting an action outside its
              delegated purpose, organizational scope or
              current operating conditions.
            </p>
          </article>

          <article>
            <span>THE AIGO-OS CONTROL</span>

            <h2>
              Evaluate authority at the moment of action.
            </h2>

            <p>
              AIGO-OS evaluates who or what is acting, the
              authority under which the actor is operating,
              the intended purpose, relevant conditions and
              contextual risk before consequential actions
              proceed.
            </p>
          </article>
        </div>
      </section>

      <section className="aigo-solution-decision">
        <div className="aigo-home-shell">
          <p className="aigo-home-eyebrow aigo-home-eyebrow--dark">
            Contextual authority
          </p>

          <h2>
            Permission is not the same as authority.
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
              Evaluate delegated authority with AIGO-OS.
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

import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="aigo-solution-hero">
        <div className="aigo-home-shell">
          <p className="aigo-home-eyebrow">
            Enterprise use case
          </p>

          <h1>Apply Human Oversight Where It Matters</h1>

          <p className="aigo-solution-hero__lead">
            Allow low-risk autonomous work to proceed while directing consequential actions to the appropriate human authority.
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
              Putting a human behind every AI action removes much of the value of autonomy. Allowing every action to proceed automatically creates unacceptable operational and governance risk.
            </p>
          </article>

          <article>
            <span>THE AIGO-OS CONTROL</span>

            <h2>
              Govern the action at the moment it matters.
            </h2>

            <p>
              AIGO-OS applies contextual decision outcomes so routine autonomous work can continue while higher-risk or exceptional actions are reviewed, escalated, denied or suspended.
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

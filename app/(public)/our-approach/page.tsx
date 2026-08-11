import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="aigo-solution-hero">
        <div className="aigo-home-shell">
          <p className="aigo-home-eyebrow">
            Our Approach
          </p>

          <h1>
            Governance should control action,
            not only document intention.
          </h1>

          <p className="aigo-solution-hero__lead">
            AIGO-OS is built around a simple premise:
            autonomous AI becomes economically useful when
            it can act, and enterprise governance becomes
            meaningful when it can control those actions at
            the point they matter.
          </p>
        </div>
      </section>

      <section className="aigo-solution-body">
        <div className="aigo-home-shell aigo-solution-body__grid">
          <article>
            <span>01</span>
            <h2>Identity is the beginning</h2>
            <p>
              Knowing which AI actor is operating is
              essential, but identity alone does not
              establish whether a specific consequential
              action should proceed.
            </p>
          </article>

          <article>
            <span>02</span>
            <h2>Authority must have context</h2>
            <p>
              Authority must reflect purpose, conditions,
              organizational boundaries and the operating
              context surrounding the requested action.
            </p>
          </article>

          <article>
            <span>03</span>
            <h2>Risk changes the decision</h2>
            <p>
              An action that can safely proceed in one
              context may require review or denial in
              another.
            </p>
          </article>

          <article>
            <span>04</span>
            <h2>Evidence completes accountability</h2>
            <p>
              Organizations need durable evidence of what
              was requested, what authority existed, what
              decision was made and why.
            </p>
          </article>
        </div>
      </section>

      <section className="aigo-page-conversion">
        <div className="aigo-home-shell aigo-page-conversion__inner">
          <div>
            <span>AIGO-OS</span>
            <h2>
              Build autonomy on explicit authority,
              contextual control and traceable decisions.
            </h2>
          </div>

          <Link
            className="aigo-home-button aigo-home-button--primary"
            href="/product"
          >
            Explore the Platform
          </Link>
        </div>
      </section>
    </>
  );
}

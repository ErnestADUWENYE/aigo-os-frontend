import Link from "next/link";

export default function Page() {
  return (
    <article className="resource-article public-light">
      <header className="resource-article__header">
        <div className="resource-article__header-shell">
          <span className="public-section-kicker">
            Governed Autonomy
          </span>

          <h1>Autonomy and control should not be opposing choices.</h1>

          <p>
            Governed autonomy creates explicit operating boundaries so machines can act quickly when conditions are satisfied and humans can intervene when judgment is required.
          </p>
        </div>
      </header>

      <div className="resource-article__body">
        <aside>
          <span>In this perspective</span>
          <strong>Enterprise AI</strong>
          <strong>Autonomous systems</strong>
          <strong>Governance context</strong>
          <strong>Continuous assurance</strong>
        </aside>

        <div className="resource-article__content">
          <h2>The operating environment has changed.</h2>

          <p>
            Enterprise AI is increasingly dynamic. Actors can appear
            across platforms, inherit access through surrounding
            systems, depend on other services and participate directly
            in business processes.
          </p>

          <p>
            That environment requires governance to understand more
            than a static record. Identity, authority, risk,
            relationships and evidence must be connected to the
            operating context in which AI acts.
          </p>

          <blockquote>
            AIGO-OS is being designed around a simple principle:
            governance should understand autonomous operation while it
            is happening, not only reconstruct it afterward.
          </blockquote>

          <h2>From oversight to operating capability.</h2>

          <p>
            The objective is not to insert a person into every machine
            decision. It is to establish explicit boundaries, evaluate
            relevant governance context and direct human attention
            toward the exceptions where judgment is valuable.
          </p>

          <div className="resource-article__cta">
            <span>Explore AIGO-OS</span>
            <strong>
              See how this concept becomes an operating capability.
            </strong>

            <Link href="/product">
              Explore the platform
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
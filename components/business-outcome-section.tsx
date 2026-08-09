import Link from "next/link";

const outcomes = [
  {
    number: "01",
    signal: "Visibility",
    title: "Know what AI is actually operating.",
    description:
      "Move beyond declared inventories. Establish a continuously updated view of AI actors, ownership, relationships and operating context.",
    before: "Fragmented inventory",
    after: "Governed AI estate",
  },
  {
    number: "02",
    signal: "Control",
    title: "Know what every AI actor is allowed to do.",
    description:
      "Connect identity to effective authority so teams can understand access, actions, boundaries and where human approval is required.",
    before: "Identity without authority",
    after: "Explicit operating boundaries",
  },
  {
    number: "03",
    signal: "Decision",
    title: "Apply governance while machines are acting.",
    description:
      "Bring policy, risk and authority into the decision path so autonomous activity can be allowed, constrained, escalated or stopped in context.",
    before: "Governance after the fact",
    after: "Runtime governance",
  },
  {
    number: "04",
    signal: "Evidence",
    title: "Reconstruct consequential machine actions.",
    description:
      "Preserve the context behind governance decisions so security, risk, compliance and business teams can understand what happened and why.",
    before: "Scattered logs",
    after: "Governance receipts",
  },
];

export function BusinessOutcomeSection() {
  return (
    <section className="business-outcomes public-light">
      <div className="business-outcomes__shell">
        <div className="business-outcomes__heading">
          <div>
            <span className="public-section-kicker">
              What changes with AIGO-OS
            </span>

            <h2>
              Turn autonomous AI from an unknown operating risk into a governed system.
            </h2>
          </div>

          <div className="business-outcomes__heading-copy">
            <p>
              AIGO-OS gives enterprise teams a shared operating model for
              understanding AI actors, bounding their authority, governing
              consequential actions and preserving evidence.
            </p>

            <Link href="/solutions">
              Explore enterprise solutions
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="business-outcomes__grid">
          {outcomes.map((outcome) => (
            <article
              className="business-outcome"
              key={outcome.number}
            >
              <div className="business-outcome__top">
                <span>{outcome.number}</span>
                <small>{outcome.signal}</small>
              </div>

              <h3>{outcome.title}</h3>
              <p>{outcome.description}</p>

              <div className="business-outcome__shift">
                <div>
                  <span>Without operating governance</span>
                  <strong>{outcome.before}</strong>
                </div>

                <i aria-hidden="true">&rarr;</i>

                <div>
                  <span>With AIGO-OS</span>
                  <strong>{outcome.after}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="business-outcomes__buyers">
          <div>
            <span className="public-section-kicker">
              One governance model
            </span>

            <h3>
              Different teams see the same AI actor through the context they need.
            </h3>
          </div>

          <div className="business-outcomes__buyer-grid">
            <div>
              <span>AI & Engineering</span>
              <strong>What is operating?</strong>
            </div>

            <div>
              <span>Security</span>
              <strong>What can it access and change?</strong>
            </div>

            <div>
              <span>Risk & Compliance</span>
              <strong>Is it inside policy and risk boundaries?</strong>
            </div>

            <div>
              <span>Business Owners</span>
              <strong>Who owns the outcome?</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
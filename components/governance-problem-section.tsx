const stages = [
  {
    number: "01",
    title: "Generate",
    description:
      "AI produces content, analysis and recommendations.",
  },
  {
    number: "02",
    title: "Reason",
    description:
      "AI interprets context and determines possible next steps.",
  },
  {
    number: "03",
    title: "Use tools",
    description:
      "AI can call APIs, use applications and participate in enterprise workflows.",
  },
  {
    number: "04",
    title: "Take action",
    description:
      "AI can increasingly influence or change real business operations.",
  },
];

export function GovernanceProblemSection() {
  return (
    <section className="aigo-public-why">
      <div className="aigo-public-shell">
        <div className="aigo-public-section-heading">
          <div>
            <span className="aigo-public-kicker">
              WHY AIGO-OS NOW
            </span>

            <h2>
              Enterprise AI has crossed the
              <span> action boundary.</span>
            </h2>
          </div>

          <p>
            AI is moving beyond generating answers. It can participate in
            workflows, use enterprise tools and interact with systems that
            affect real operations. That changes the governance problem.
            Technical access alone cannot determine whether an action is
            appropriate in its current business context.
          </p>
        </div>

        <div className="aigo-public-agency">
          {stages.map((stage) => (
            <article
              className="aigo-public-agency__item"
              key={stage.number}
            >
              <span>{stage.number}</span>
              <strong>{stage.title}</strong>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>

        <div className="aigo-public-thesis">
          <span>THE GOVERNANCE QUESTION</span>

          <strong>
            Access tells you what an AI system can reach.
            <em>
              AIGO-OS helps govern what it should be allowed to do.
            </em>
          </strong>
        </div>
      </div>
    </section>
  );
}

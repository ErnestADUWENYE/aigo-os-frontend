const problems = [
  {
    number: "01",
    title: "AI exists outside the inventory.",
    body:
      "Agents, models, AI applications and automations can appear across platforms and teams faster than traditional inventories can keep up.",
    signal: "Visibility gap",
  },
  {
    number: "02",
    title: "Identity does not define authority.",
    body:
      "Knowing that an AI actor exists is not enough. Enterprises need to know what it can access, what it can change and where its authority ends.",
    signal: "Authority gap",
  },
  {
    number: "03",
    title: "Risk changes with context.",
    body:
      "The same AI capability can represent very different risk depending on its data, dependencies, business significance and effective authority.",
    signal: "Context gap",
  },
  {
    number: "04",
    title: "Autonomous decisions need evidence.",
    body:
      "When machines act at runtime, governance needs a traceable record of what was known, what was allowed, what was decided and what happened.",
    signal: "Evidence gap",
  },
];

export function GovernanceProblemSection() {
  return (
    <section className="governance-problem public-light">
      <div className="public-section-shell">
        <div className="governance-problem__heading">
          <div>
            <span className="public-section-kicker">
              The governance gap
            </span>

            <h2>
              AI is becoming operational faster than governance can follow.
            </h2>
          </div>

          <p>
            Enterprise AI is no longer a static portfolio of approved
            models. It is becoming a changing network of actors,
            services, dependencies and machine actions. Governance has
            to understand that operating environment continuously.
          </p>
        </div>

        <div className="governance-problem__grid">
          {problems.map((problem) => (
            <article
              className="governance-problem__card"
              key={problem.number}
            >
              <div className="governance-problem__card-top">
                <span>{problem.number}</span>
                <small>{problem.signal}</small>
              </div>

              <h3>{problem.title}</h3>
              <p>{problem.body}</p>
            </article>
          ))}
        </div>

        <div className="governance-problem__transition">
          <span>Inventory tells you what was recorded.</span>
          <strong>
            AIGO-OS is designed to govern what is actually operating.
          </strong>
        </div>
      </div>
    </section>
  );
}
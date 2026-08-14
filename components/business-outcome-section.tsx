const significance = [
  {
    title: "Materiality",
    description:
      "How consequential the change may be to the enterprise.",
  },
  {
    title: "Urgency",
    description:
      "How quickly governance attention may be required.",
  },
  {
    title: "Business impact",
    description:
      "What business outcomes, exposure or operations may be affected.",
  },
  {
    title: "Stakeholders",
    description:
      "Which accountable teams or decision-makers may be affected.",
  },
  {
    title: "Capabilities",
    description:
      "Which business capabilities depend on the AI system.",
  },
  {
    title: "Processes",
    description:
      "Which enterprise processes may be influenced or changed.",
  },
];

export function BusinessOutcomeSection() {
  return (
    <section className="aigo-public-significance">
      <div className="aigo-public-shell aigo-public-significance__grid">
        <div>
          <span className="aigo-public-kicker">
            BUSINESS SIGNIFICANCE
          </span>

          <h2>
            Technical change is not the same as
            <span> business significance.</span>
          </h2>

          <p>
            Enterprise systems generate signals continuously. AIGO-OS connects
            relevant AI changes with business context so governance teams can
            understand what may matter, who may be affected and where attention
            should be directed.
          </p>
        </div>

        <div className="aigo-public-significance__visual">
          <div className="aigo-public-signal">
            <span>CHANGING AI CONTEXT</span>

            <strong>
              Governance state changes as enterprise AI changes.
            </strong>

            <div>
              <i>Identity</i>
              <i>Relationships</i>
              <i>Authority</i>
              <i>Operational signals</i>
              <i>Policy context</i>
            </div>
          </div>

          <div className="aigo-public-flow-label">
            <span>INTERPRETED IN BUSINESS CONTEXT</span>
          </div>

          <div className="aigo-public-significance__result">
            <span>BUSINESS SIGNIFICANCE</span>

            <div>
              {significance.map((item) => (
                <article key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="aigo-public-flow-label">
            <span>CONTRIBUTES TO GOVERNANCE REASONING</span>
          </div>

          <div className="aigo-public-significance__decision">
            DECISION-READY GOVERNANCE CONTEXT
          </div>
        </div>
      </div>
    </section>
  );
}

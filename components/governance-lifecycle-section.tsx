const stages = [
  {
    number: "01",
    title: "Discover",
    detail: "Detect AI actors across the enterprise environment.",
  },
  {
    number: "02",
    title: "Correlate",
    detail: "Resolve fragmented signals into canonical actors.",
  },
  {
    number: "03",
    title: "Passport",
    detail: "Establish identity, ownership, provenance and context.",
  },
  {
    number: "04",
    title: "Authority",
    detail: "Determine effective machine operating boundaries.",
  },
  {
    number: "05",
    title: "Risk",
    detail: "Interpret exposure using technical and business context.",
  },
  {
    number: "06",
    title: "Decide",
    detail: "Evaluate policy and governance requirements at decision time.",
  },
  {
    number: "07",
    title: "Act",
    detail: "Allow, constrain, escalate or intervene when required.",
  },
  {
    number: "08",
    title: "Receipt",
    detail: "Preserve evidence of the decision, action and outcome.",
  },
];

export function GovernanceLifecycleSection() {
  return (
    <section className="governance-lifecycle">
      <div className="governance-lifecycle__shell">
        <div className="governance-lifecycle__heading">
          <div>
            <span className="governance-lifecycle__kicker">
              The AIGO-OS operating model
            </span>

            <h2>
              From unknown AI to governed operation.
            </h2>
          </div>

          <p>
            AIGO-OS turns fragmented enterprise AI signals into a
            continuously governed operating state. Each stage adds the
            context required for the next governance decision.
          </p>
        </div>

        <div className="governance-lifecycle__actor">
          <div className="governance-lifecycle__actor-head">
            <div>
              <span>Live actor</span>
              <strong>Claims Assistant</strong>
            </div>

            <div className="governance-lifecycle__live">
              <i />
              Governance active
            </div>
          </div>

          <div className="governance-lifecycle__pipeline">
            {stages.map((stage) => (
              <article
                className="governance-lifecycle__stage"
                key={stage.number}
              >
                <span className="governance-lifecycle__number">
                  {stage.number}
                </span>

                <div className="governance-lifecycle__stage-signal">
                  <i />
                  <span />
                </div>

                <h3>{stage.title}</h3>
                <p>{stage.detail}</p>
              </article>
            ))}
          </div>

          <div className="governance-lifecycle__state">
            <div>
              <span>Identity</span>
              <strong>Verified</strong>
            </div>

            <div>
              <span>Owner</span>
              <strong>Claims Operations</strong>
            </div>

            <div>
              <span>Authority</span>
              <strong>Defined</strong>
            </div>

            <div>
              <span>Risk</span>
              <strong>Within boundary</strong>
            </div>

            <div>
              <span>Decision</span>
              <strong>Allow</strong>
            </div>

            <div>
              <span>Evidence</span>
              <strong>Receipt generated</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
type CapabilityMode =
  | "passport"
  | "authority"
  | "risk"
  | "receipt";

type CapabilityDemoProps = {
  mode: CapabilityMode;
};

const capabilities = {
  passport: {
    kicker: "ACTOR PASSPORT",
    title: "Establish persistent governance identity",
    statement:
      "AIGO-OS brings fragmented observations of an AI system into a governed identity that other governance services can use consistently.",
    inputs: [
      ["Discovery signals", "Observed AI systems and services"],
      ["Identity context", "Technical identifiers and attributes"],
      ["Ownership", "Accountable organizational context"],
      ["Provenance", "Where the actor and its context came from"],
      ["Relationships", "Dependencies and connected systems"],
      ["Lifecycle", "Current governance state"],
    ],
    stages: [
      "Observe",
      "Correlate",
      "Resolve",
      "Establish passport",
    ],
    resultTitle: "Governance identity established",
    result:
      "Identity, ownership, provenance, relationships and lifecycle context become connected governance context for the AI actor.",
    feeds: ["Authority", "Risk", "Decisions", "Evidence"],
  },

  authority: {
    kicker: "MACHINE AUTHORITY",
    title: "Turn permission into explicit operating authority",
    statement:
      "AIGO-OS represents what an AI actor may do, where it may operate and which conditions determine whether autonomous action can continue.",
    inputs: [
      ["Actor", "Governed identity and operating context"],
      ["Action", "The capability being exercised"],
      ["Resource", "The system or resource affected"],
      ["Scope", "Permitted operating boundary"],
      ["Conditions", "Context that constrains authority"],
      ["Human boundary", "Where judgement or approval is required"],
    ],
    stages: [
      "Resolve actor",
      "Resolve authority",
      "Evaluate conditions",
      "Determine boundary",
    ],
    resultTitle: "Effective authority determined",
    result:
      "The governance decision can distinguish what the actor can technically access from what it is authorized to do in the current context.",
    feeds: ["Decision", "Enforcement", "Escalation", "Evidence"],
  },

  risk: {
    kicker: "RISK INTELLIGENCE",
    title: "Interpret risk through business and governance context",
    statement:
      "AIGO-OS connects technical signals with authority, dependencies, business significance and operating context so risk reflects potential enterprise consequence.",
    inputs: [
      ["Actor context", "Identity, purpose and lifecycle"],
      ["Authority", "Effective operating boundary"],
      ["Technical signals", "Relevant observed conditions"],
      ["Dependencies", "Systems and relationships affected"],
      ["Business significance", "Why the activity matters"],
      ["Operating context", "Conditions surrounding the action"],
    ],
    stages: [
      "Collect context",
      "Interpret significance",
      "Evaluate exposure",
      "Inform decision",
    ],
    resultTitle: "Governance-relevant risk established",
    result:
      "Risk becomes decision context rather than an isolated technical score, allowing governance to respond to the significance of the activity.",
    feeds: ["Decision", "Review", "Reassessment", "Evidence"],
  },

  receipt: {
    kicker: "GOVERNANCE RECEIPTS",
    title: "Preserve the evidence behind governed autonomy",
    statement:
      "AIGO-OS retains the governance context associated with a decision so the enterprise can later reconstruct why an outcome occurred.",
    inputs: [
      ["Actor", "Governed identity at decision time"],
      ["Authority", "Effective authority evaluated"],
      ["Risk", "Relevant risk context"],
      ["Policy", "Governance basis used"],
      ["Decision", "Outcome of governance evaluation"],
      ["Action outcome", "What followed the decision"],
    ],
    stages: [
      "Capture context",
      "Link evaluation",
      "Record outcome",
      "Preserve evidence",
    ],
    resultTitle: "Governance record preserved",
    result:
      "The enterprise retains connected evidence of what was known, what governance basis applied, what was decided and what followed.",
    feeds: ["Audit", "Assurance", "Investigation", "Accountability"],
  },
} as const;

export function AigoCapabilityDemo({
  mode,
}: CapabilityDemoProps) {
  const capability = capabilities[mode];

  return (
    <section className={`aigo-cap-demo aigo-cap-demo--${mode}`}>
      <div className="public-section-shell">
        <div className="aigo-cap-demo__heading">
          <div>
            <span>{capability.kicker}</span>
            <h2>{capability.title}</h2>
          </div>

          <p>{capability.statement}</p>
        </div>

        <div className="aigo-cap-demo__scene">
          <div className="aigo-cap-demo__primary">
            <div className="aigo-cap-demo__primary-head">
              <div>
                <span>GOVERNANCE CONTEXT</span>
                <strong>Inputs AIGO-OS connects</strong>
              </div>

              <small>CONNECTED</small>
            </div>

            <div className="aigo-cap-demo__field-grid">
              {capability.inputs.map(([label, value], index) => (
                <div
                  className="aigo-cap-demo__field"
                  key={label}
                  style={{
                    animationDelay: `${index * 70}ms`,
                  }}
                >
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <div className="aigo-cap-demo__context-line">
              <span>Context remains connected across the governance lifecycle.</span>
              <i aria-hidden="true" />
            </div>
          </div>

          <div className="aigo-cap-demo__flow">
            <span className="aigo-cap-demo__flow-label">
              GOVERNANCE OPERATION
            </span>

            {capability.stages.map((stage, index) => (
              <div
                className="aigo-cap-demo__flow-stage"
                key={stage}
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{stage}</strong>

                <i aria-hidden="true" />
              </div>
            ))}
          </div>

          <div className="aigo-cap-demo__outcome">
            <span>GOVERNANCE RESULT</span>

            <div className="aigo-cap-demo__result-core">
              <small>AIGO-OS</small>
              <strong>{capability.resultTitle}</strong>
            </div>

            <p>{capability.result}</p>

            <div className="aigo-cap-demo__evidence">
              {capability.feeds.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

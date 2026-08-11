type CapabilityMode =
  | "passport"
  | "authority"
  | "risk"
  | "receipt";

type CapabilityDemoProps = {
  mode: CapabilityMode;
};

const demos = {
  passport: {
    kicker: "ACTOR PASSPORT",
    title: "Procurement Agent 07",
    status: "ACTIVE",
    scoreLabel: "Identity confidence",
    score: "98%",
    fields: [
      ["Actor type", "Autonomous agent"],
      ["Owner", "Procurement Operations"],
      ["Environment", "Production"],
      ["Purpose", "Supplier settlement"],
      ["Lifecycle", "Active"],
      ["Authority profile", "PROC-PAY-02"],
    ],
    flow: [
      "Observe actor",
      "Correlate identity",
      "Resolve ownership",
      "Create passport",
    ],
    outcome:
      "A canonical governance identity is available to authority, risk and decision services.",
  },

  authority: {
    kicker: "MACHINE AUTHORITY",
    title: "PROC-PAY-02",
    status: "ENFORCED",
    scoreLabel: "Authority utilization",
    score: "64%",
    fields: [
      ["Action", "Issue payment"],
      ["Resource", "Approved suppliers"],
      ["Autonomous limit", "$25,000"],
      ["Environment", "Production"],
      ["Expiry", "2026-12-31"],
      ["Human threshold", "> $25,000"],
    ],
    flow: [
      "Identify actor",
      "Resolve authority",
      "Evaluate conditions",
      "Enforce boundary",
    ],
    outcome:
      "The actor can act automatically inside the defined authority envelope and escalates outside it.",
  },

  risk: {
    kicker: "RISK INTELLIGENCE",
    title: "Contextual Risk Evaluation",
    status: "ELEVATED",
    scoreLabel: "Risk score",
    score: "78 / 100",
    fields: [
      ["Actor risk", "Low"],
      ["Action risk", "Medium"],
      ["Transaction", "$48,200"],
      ["Authority gap", "$23,200"],
      ["Environment", "Production"],
      ["Business impact", "Material"],
    ],
    flow: [
      "Collect signals",
      "Interpret context",
      "Calculate exposure",
      "Update decision state",
    ],
    outcome:
      "Risk rises because the requested action exceeds the autonomous authority threshold in a production context.",
  },

  receipt: {
    kicker: "GOVERNANCE RECEIPT",
    title: "GR-2026-0811-48200",
    status: "SEALED",
    scoreLabel: "Evidence completeness",
    score: "100%",
    fields: [
      ["Actor", "Procurement Agent 07"],
      ["Action", "Issue supplier payment"],
      ["Authority", "PROC-PAY-02"],
      ["Risk", "Elevated"],
      ["Decision", "Review required"],
      ["Human policy", "Finance approval"],
    ],
    flow: [
      "Capture context",
      "Record evaluation",
      "Record outcome",
      "Preserve evidence",
    ],
    outcome:
      "The enterprise retains a reconstructable record of what was requested, evaluated, decided and enforced.",
  },
} as const;

export function AigoCapabilityDemo({
  mode,
}: CapabilityDemoProps) {
  const demo = demos[mode];

  return (
    <section className={`aigo-cap-demo aigo-cap-demo--${mode}`}>
      <div className="public-section-shell">
        <div className="aigo-cap-demo__heading">
          <div>
            <span>{demo.kicker}</span>
            <h2>See the capability operating.</h2>
          </div>

          <p>
            Illustrative enterprise scenario showing how AIGO-OS
            turns governance context into operational control.
          </p>
        </div>

        <div className="aigo-cap-demo__scene">
          <div className="aigo-cap-demo__primary">
            <div className="aigo-cap-demo__primary-head">
              <div>
                <span>{demo.kicker}</span>
                <strong>{demo.title}</strong>
              </div>

              <small>{demo.status}</small>
            </div>

            <div className="aigo-cap-demo__field-grid">
              {demo.fields.map(([label, value], index) => (
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

            <div className="aigo-cap-demo__score">
              <div>
                <span>{demo.scoreLabel}</span>
                <strong>{demo.score}</strong>
              </div>

              <div className="aigo-cap-demo__score-track">
                <i />
              </div>
            </div>
          </div>

          <div className="aigo-cap-demo__flow">
            <span className="aigo-cap-demo__flow-label">
              AIGO-OS PROCESS
            </span>

            {demo.flow.map((stage, index) => (
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

                <i />
              </div>
            ))}
          </div>

          <div className="aigo-cap-demo__outcome">
            <span>OPERATING OUTCOME</span>

            <div className="aigo-cap-demo__outcome-orb">
              <div>
                <small>AIGO-OS</small>
                <strong>{demo.status}</strong>
              </div>
            </div>

            <p>{demo.outcome}</p>

            <div className="aigo-cap-demo__evidence">
              <span>Context</span>
              <span>Policy</span>
              <span>Decision</span>
              <span>Evidence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

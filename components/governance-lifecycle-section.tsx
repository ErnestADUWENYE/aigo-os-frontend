const pillars = [
  {
    label: "GOVERN",
    title:
      "Establish the governance context for autonomous operation.",
    items: [
      "Discovery",
      "Actor identity",
      "Relationships",
      "Authority",
      "Business Significance",
      "Risk",
      "Policy",
      "Governance decisions",
    ],
  },
  {
    label: "OPERATE",
    title:
      "Keep governance connected to a changing enterprise environment.",
    items: [
      "Integrations",
      "Continuous signals",
      "Monitoring",
      "Supported execution paths",
      "Human exception workflows",
      "Reassessment",
    ],
  },
  {
    label: "PROVE",
    title:
      "Preserve enough context to reconstruct governance decisions.",
    items: [
      "Decision reasoning",
      "Evidence",
      "Governance Receipts",
      "Audit trail",
      "Assurance",
      "Reporting",
    ],
  },
];

export function GovernanceLifecycleSection() {
  return (
    <section className="aigo-public-model">
      <div className="aigo-public-shell">
        <span className="aigo-public-kicker">
          THE AIGO-OS OPERATING MODEL
        </span>

        <h2>
          Govern.
          <span>Operate.</span>
          Prove.
        </h2>

        <div className="aigo-public-model__grid">
          {pillars.map((pillar, index) => (
            <article key={pillar.label}>
              <div className="aigo-public-model__number">
                0{index + 1}
              </div>

              <span>{pillar.label}</span>

              <h3>{pillar.title}</h3>

              <div>
                {pillar.items.map((item) => (
                  <small key={item}>{item}</small>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

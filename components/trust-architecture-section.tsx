const categories = [
  {
    label: "OBSERVABILITY",
    question: "What happened technically?",
    contribution:
      "Runtime behavior, traces, performance, events and operational signals.",
    aigo:
      "AIGO-OS can use relevant operational signals as governance context for understanding changing governance state and informing what should happen next.",
  },
  {
    label: "IDENTITY AND ACCESS",
    question: "Who or what can access a resource?",
    contribution:
      "Identity, authentication, permissions and access boundaries.",
    aigo:
      "AIGO-OS adds the authority question: what the governed AI actor may do, within which scope and under which conditions.",
  },
  {
    label: "GRC",
    question: "What policies, risks and obligations apply?",
    contribution:
      "Policies, controls, risks, assessments, attestations and compliance workflows.",
    aigo:
      "AIGO-OS connects relevant governance context to AI state, governance reasoning, supported actions and evidence.",
  },
  {
    label: "AI INVENTORY",
    question: "What AI exists?",
    contribution:
      "Records AI systems, models, applications and related assets.",
    aigo:
      "AIGO-OS establishes persistent governance identity, relationships, authority and changing governance state around enterprise AI.",
  },
];

export function TrustArchitectureSection() {
  return (
    <section className="aigo-public-difference">
      <div className="aigo-public-shell">
        <div className="aigo-public-section-heading">
          <div>
            <span className="aigo-public-kicker">
              WHERE AIGO-OS FITS
            </span>

            <h2>
              Not another dashboard.
              <span>
                A governance operating system for autonomous enterprise AI.
              </span>
            </h2>
          </div>

          <p>
            Identity, observability, security and GRC remain important.
            AIGO-OS is designed to work with that enterprise context rather
            than replace it. Its role is to bring relevant context into the
            continuous governance of enterprise AI.
          </p>
        </div>

        <div className="aigo-public-difference__grid">
          {categories.map((category) => (
            <article key={category.label}>
              <span>{category.label}</span>

              <h3>{category.question}</h3>

              <p>{category.contribution}</p>

              <div>
                <small>AIGO-OS ADDS</small>
                <strong>{category.aigo}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Discover the AI estate",
    description:
      "Continuously identify AI agents, models, applications, automations and governed services operating across the enterprise.",
    href: "/resources/ai-governance",
  },
  {
    number: "02",
    title: "Establish actor identity",
    description:
      "Build canonical Actor Passports that connect ownership, provenance, lifecycle state, relationships and governance context.",
    href: "/resources/actor-passports",
  },
  {
    number: "03",
    title: "Define machine authority",
    description:
      "Express what an AI actor may do, where it may act, which resources it may access and when human approval is required.",
    href: "/resources/authority",
  },
  {
    number: "04",
    title: "Interpret contextual risk",
    description:
      "Evaluate risk using technical signals, business significance, dependencies, authority and the operating context of each actor.",
    href: "/product/risk-intelligence",
  },
  {
    number: "05",
    title: "Govern decisions",
    description:
      "Apply policy and governance context at decision time so autonomous activity remains inside defined operating boundaries.",
    href: "/product",
  },
  {
    number: "06",
    title: "Preserve traceability",
    description:
      "Generate governance evidence that records what was known, what was decided, why it was decided and what happened next.",
    href: "/product/governance-receipts",
  },
];

export function CapabilityOverview() {
  return (
    <section className="public-light">
      <div className="public-section-shell">
        <div className="public-section-heading">
          <span className="public-section-kicker">
            Continuous governance
          </span>

          <h2>
            Governance that moves with the AI.
          </h2>

          <p className="public-section-intro">
            AIGO-OS connects discovery, identity, authority, risk,
            decisions and evidence into one continuous governance
            operating model.
          </p>
        </div>

        <div className="public-capability-grid">
          {capabilities.map((capability) => (
            <Link
              className="public-capability-card"
              href={capability.href}
              key={capability.number}
            >
              <span className="public-capability-card__number">
                {capability.number}
              </span>

              <h3>{capability.title}</h3>

              <p>{capability.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
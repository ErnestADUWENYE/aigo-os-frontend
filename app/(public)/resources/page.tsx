import Link from "next/link";

const resourceAreas = [
  {
    title: "AI Governance",
    body:
      "Practical guidance on governing AI agents, models, automations and AI-enabled services across the enterprise.",
    href: "/resources/ai-governance",
  },
  {
    title: "Governed Autonomy",
    body:
      "Explore how identity, authority, risk and traceability combine to create safe operating boundaries for autonomous systems.",
    href: "/resources/governed-autonomy",
  },
  {
    title: "Actor Passports",
    body:
      "Understand how AIGO-OS assembles canonical identity, ownership, provenance, lifecycle and governance context for AI actors.",
    href: "/resources/actor-passports",
  },
  {
    title: "Authority",
    body:
      "Learn how machine authority can be expressed through scope, conditions, resources, approval requirements and revocation.",
    href: "/resources/authority",
  },
  {
    title: "Risk Intelligence",
    body:
      "See how technical signals, business significance, dependencies and authority can be interpreted together.",
    href: "/product/risk-intelligence",
  },
  {
    title: "Governance Receipts",
    body:
      "Explore the role of traceable decision and action records in proving what happened and why.",
    href: "/product/governance-receipts",
  },
];

export default function ResourcesPage() {
  return (
    <div className="public-page resources-page">
      <section className="public-page__hero">
        <div className="public-page__eyebrow">
          Resources
        </div>

        <h1 className="public-page__title">
          Understand the operating model behind governed AI.
        </h1>

        <p className="public-page__lead">
          Explore the concepts, architecture and operating patterns
          shaping AIGO-OS and the move from manual AI oversight to
          continuous governance.
        </p>
      </section>

      <section className="public-section">
        <div className="public-section__eyebrow">
          Explore
        </div>

        <h2 className="public-section__title">
          Core concepts behind AIGO-OS.
        </h2>

        <div className="resources-grid">
          {resourceAreas.map((resource, index) => (
            <Link
              className="resource-card"
              href={resource.href}
              key={resource.title}
            >
              <span className="resource-card__index">
                0{index + 1}
              </span>

              <h3>{resource.title}</h3>
              <p>{resource.body}</p>

              <span className="resource-card__link">
                Explore
                <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
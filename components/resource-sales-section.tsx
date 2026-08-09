import Link from "next/link";

const resources = [
  {
    type: "Concept",
    title: "AI Governance",
    description:
      "Why enterprise AI governance must evolve from periodic oversight into a continuous operating capability.",
    href: "/resources/ai-governance",
  },
  {
    type: "Operating model",
    title: "Governed Autonomy",
    description:
      "How autonomous AI can operate at machine speed while remaining inside explicit governance boundaries.",
    href: "/resources/governed-autonomy",
  },
  {
    type: "Architecture",
    title: "Actor Passports",
    description:
      "A canonical governance identity for AI actors, connecting ownership, provenance, relationships and operating context.",
    href: "/resources/actor-passports",
  },
  {
    type: "Deep dive",
    title: "Machine Authority",
    description:
      "Move beyond identity to understand what an AI actor can actually access, change, execute and influence.",
    href: "/resources/authority",
  },
];

export function ResourceSalesSection() {
  return (
    <section className="resource-sales public-light">
      <div className="public-section-shell">
        <div className="resource-sales__heading">
          <div>
            <span className="public-section-kicker">
              AIGO-OS intelligence
            </span>

            <h2>
              Understand the operating model behind governed AI.
            </h2>
          </div>

          <div className="resource-sales__intro">
            <p>
              Explore the concepts, architecture and governance
              mechanisms behind AIGO-OS.
            </p>

            <Link href="/resources">
              Explore all resources
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="resource-sales__grid">
          {resources.map((resource, index) => (
            <Link
              className="resource-sales__card"
              href={resource.href}
              key={resource.title}
            >
              <div className="resource-sales__top">
                <span>{resource.type}</span>
                <small>
                  {String(index + 1).padStart(2, "0")}
                </small>
              </div>

              <div className="resource-sales__graphic">
                <i />
                <i />
                <i />
                <span />
              </div>

              <h3>{resource.title}</h3>
              <p>{resource.description}</p>

              <strong>
                Read more
                <span aria-hidden="true">→</span>
              </strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
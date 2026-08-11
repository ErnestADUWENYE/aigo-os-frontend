import Link from "next/link";

const pathways = [
  {
    label: "AI platforms",
    items: ["Agents", "Models", "AI applications"],
  },
  {
    label: "Enterprise systems",
    items: ["Business workflows", "Data services", "Automation"],
  },
  {
    label: "Control signals",
    items: ["Identity", "Security", "Observability"],
  },
];

const governanceSignals = [
  "Identity",
  "Authority",
  "Risk",
  "Decision",
  "Evidence",
];

export function IntegrationStorySection() {
  return (
    <section className="aigo-integration-story">
      <div className="aigo-home-shell">
        <div className="aigo-integration-story__heading">
          <div>
            <span className="aigo-home-eyebrow">
              Govern where AI operates
            </span>

            <h2>
              Governance cannot live in isolation.
            </h2>
          </div>

          <div className="aigo-integration-story__intro">
            <p>
              AIGO-OS connects governance context with the systems where
              enterprise AI is discovered, identified, authorized,
              observed and operated.
            </p>

            <Link href="/integrations">
              Explore integrations
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="aigo-integration-story__system">
          <div className="aigo-integration-story__sources">
            {pathways.map((pathway) => (
              <article
                className="aigo-integration-story__source"
                key={pathway.label}
              >
                <span>{pathway.label}</span>

                <div>
                  {pathway.items.map((item) => (
                    <strong key={item}>{item}</strong>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="aigo-integration-story__connector"
          >
            <i />
            <i />
            <i />
          </div>

          <div className="aigo-integration-story__core">
            <span>Governance operating layer</span>

            <strong>AIGO-OS</strong>

            <p>
              Context and control remain connected as AI moves across
              enterprise systems.
            </p>

            <div className="aigo-integration-story__signals">
              {governanceSignals.map((signal) => (
                <small key={signal}>{signal}</small>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

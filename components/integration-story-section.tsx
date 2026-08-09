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

export function IntegrationStorySection() {
  return (
    <section className="integration-story">
      <div className="integration-story__shell">
        <div className="integration-story__copy">
          <span className="integration-story__kicker">
            Govern where AI operates
          </span>

          <h2>
            Governance cannot live in isolation.
          </h2>

          <p>
            AIGO-OS is designed to connect governance context with
            the systems where enterprise AI is discovered, identified,
            authorized, observed and operated.
          </p>

          <Link href="/integrations">
            Explore integrations
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="integration-story__visual">
          <div className="integration-story__sources">
            {pathways.map((pathway) => (
              <div
                className="integration-story__source"
                key={pathway.label}
              >
                <span>{pathway.label}</span>

                {pathway.items.map((item) => (
                  <strong key={item}>{item}</strong>
                ))}
              </div>
            ))}
          </div>

          <div className="integration-story__rails">
            <i />
            <i />
            <i />
          </div>

          <div className="integration-story__core">
            <span>Governance layer</span>
            <strong>AIGO-OS</strong>

            <div>
              <small>Identity</small>
              <small>Authority</small>
              <small>Risk</small>
              <small>Decision</small>
              <small>Evidence</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
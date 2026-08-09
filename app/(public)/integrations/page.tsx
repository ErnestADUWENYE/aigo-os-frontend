const connectionPaths = [
  {
    number: "01",
    title: "Native AIGO-OS Connector",
    body:
      "Provider-specific integrations maintained by AIGO-OS for supported enterprise platforms and services.",
  },
  {
    number: "02",
    title: "Generic REST / API",
    body:
      "Connect compatible systems through governed API configuration, mappings, authentication and validated operations.",
  },
  {
    number: "03",
    title: "Generic Webhook",
    body:
      "Allow external systems to securely push events and signals into AIGO-OS with verification, replay protection and tenant-aware routing.",
  },
  {
    number: "04",
    title: "Custom Provider Adapter",
    body:
      "Support proprietary protocols, SDKs, authentication models and specialized mappings without changing the core AIGO-OS architecture.",
  },
];

const categories = [
  "AI & ML",
  "AI Governance",
  "Observability & Security",
  "IT / Operations",
  "Enterprise Systems",
  "Identity",
  "Cloud",
  "Storage / Data",
];

const signalExamples = [
  "Provider",
  "Connection",
  "Actor reference",
  "Signal type",
  "Severity",
  "Occurred time",
  "Business context",
  "Integrity metadata",
];

export default function IntegrationsPage() {
  return (
    <div className="public-page integrations-page">
      <section className="public-page__hero integrations-hero">
        <div>
          <div className="public-page__eyebrow">
            Integrations
          </div>

          <h1 className="public-page__title">
            Connect the systems where enterprise AI already operates.
          </h1>

          <p className="public-page__lead">
            AIGO-OS connects to enterprise platforms, AI services,
            operational systems and custom environments so governance
            can work from real signals rather than isolated manual data.
          </p>
        </div>

        <div className="integration-flow">
          <div className="integration-flow__sources">
            <span>AI platforms</span>
            <span>IT systems</span>
            <span>Identity</span>
            <span>Observability</span>
          </div>

          <div className="integration-flow__lines">
            <i />
            <i />
            <i />
          </div>

          <div className="integration-flow__core">
            <strong>AIGO-OS</strong>
            <span>Connector Runtime</span>
          </div>

          <div className="integration-flow__lines">
            <i />
            <i />
            <i />
          </div>

          <div className="integration-flow__destination">
            <span>Normalized signals</span>
            <strong>Governance context</strong>
          </div>
        </div>
      </section>

      <section className="public-section">
        <div className="public-section__eyebrow">
          Connection model
        </div>

        <h2 className="public-section__title">
          Four ways to connect without fragmenting the platform.
        </h2>

        <p className="public-section__lead">
          AIGO-OS uses one connector framework so known providers,
          previously unknown APIs and custom enterprise systems can all
          participate in the same governance model.
        </p>

        <div className="integration-path-grid">
          {connectionPaths.map((path) => (
            <article className="integration-path" key={path.number}>
              <span>{path.number}</span>
              <h3>{path.title}</h3>
              <p>{path.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="public-section integration-categories">
        <div>
          <div className="public-section__eyebrow">
            Enterprise coverage
          </div>

          <h2 className="public-section__title">
            Built for the systems surrounding enterprise AI.
          </h2>

          <p className="public-section__lead">
            The integration catalog is designed to accommodate AI
            platforms, governance tools, cloud environments, identity
            providers, enterprise systems and operational tooling.
          </p>
        </div>

        <div className="integration-category-cloud">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </section>

      <section className="public-section normalized-signals">
        <div className="public-section__eyebrow">
          Signal contract
        </div>

        <h2 className="public-section__title">
          Provider data becomes governed context.
        </h2>

        <p className="public-section__lead">
          AIGO-OS does not allow provider payloads to become governance
          contracts. External information is normalized so identity,
          provenance, timing and integrity remain consistent.
        </p>

        <div className="signal-grid">
          {signalExamples.map((signal) => (
            <div key={signal}>
              <span />
              {signal}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
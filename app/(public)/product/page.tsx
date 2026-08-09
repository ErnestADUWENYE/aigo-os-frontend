import Link from "next/link";

const operatingModel = [
  {
    number: "01",
    title: "Discover the AI estate",
    body:
      "AIGO-OS identifies AI agents, models, automations and AI-enabled services across connected enterprise systems, including unmanaged and shadow AI.",
  },
  {
    number: "02",
    title: "Establish identity and relationships",
    body:
      "Signals from multiple systems are correlated into canonical AI actors with ownership, dependencies, upstream and downstream relationships, and provenance.",
  },
  {
    number: "03",
    title: "Build the actor passport",
    body:
      "AIGO-OS assembles a governed identity record from trusted information, including lifecycle state, verification, context and governance baseline.",
  },
  {
    number: "04",
    title: "Define effective authority",
    body:
      "The platform determines what an AI actor may do, on which resources, under what conditions, for how long, and where human approval is required.",
  },
  {
    number: "05",
    title: "Understand significance and risk",
    body:
      "Technical signals are interpreted in business context to understand materiality, affected stakeholders, operational impact and governance risk.",
  },
  {
    number: "06",
    title: "Make governance decisions",
    body:
      "AIGO-OS combines authority, policy, risk, evidence and context to produce explainable outcomes such as allow, deny, review, escalate or suspend.",
  },
  {
    number: "07",
    title: "Govern actions",
    body:
      "Approved actions move through controlled execution with linked decisions, status, idempotency and traceable outcomes.",
  },
  {
    number: "08",
    title: "Preserve the governance receipt",
    body:
      "Every governed outcome can retain its inputs, decision, execution result, evidence references, timestamps and integrity information.",
  },
];

const productPillars = [
  {
    title: "Autonomy first",
    body:
      "AIGO-OS is designed for environments where AI systems operate continuously and governance must keep pace without forcing every decision through manual workflow.",
  },
  {
    title: "Human by exception",
    body:
      "People intervene where policy, confidence or authority requires judgement. Routine governance remains automated wherever the enterprise allows it.",
  },
  {
    title: "Traceability always",
    body:
      "Identity, provenance, authority, risk, decisions, evidence and outcomes remain connected so governance can be explained and reviewed.",
  },
];

export default function ProductPage() {
  return (
    <div className="public-page product-page">
      <section className="public-page__hero">
        <div className="public-page__eyebrow">
          Product
        </div>

        <h1 className="public-page__title">
          An operating system for governing autonomous AI.
        </h1>

        <p className="public-page__lead">
          AIGO-OS creates a continuous governance layer across enterprise
          AI. It discovers what exists, establishes identity and authority,
          interprets risk, governs decisions and preserves traceable
          outcomes as AI systems evolve.
        </p>
      </section>

      <section className="public-section">
        <div className="public-section__eyebrow">
          Operating model
        </div>

        <h2 className="public-section__title">
          From unknown AI to governed autonomy.
        </h2>

        <p className="public-section__lead">
          AIGO-OS follows the lifecycle of the AI actor rather than
          treating governance as a collection of disconnected forms,
          inventories and compliance tasks.
        </p>

        <div className="product-lifecycle">
          {operatingModel.map((item) => (
            <article className="product-lifecycle__item" key={item.number}>
              <div className="product-lifecycle__number">
                {item.number}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="public-section product-principles">
        <div className="public-section__eyebrow">
          Product philosophy
        </div>

        <h2 className="public-section__title">
          Governance designed for systems that do not wait.
        </h2>

        <div className="public-card-grid">
          {productPillars.map((pillar, index) => (
            <article className="public-card" key={pillar.title}>
              <span className="public-card__index">
                0{index + 1}
              </span>

              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-cta">
        <div>
          <span>Build with us</span>

          <h2>
            Help shape how enterprises govern the next generation of AI.
          </h2>

          <p>
            AIGO-OS is working with selected organizations through its
            Design Partner Program.
          </p>
        </div>

        <Link href="/design-partners">
          Become a Design Partner
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </section>
    </div>
  );
}
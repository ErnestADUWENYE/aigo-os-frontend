import Link from "next/link";

const dimensions = [
  {
    title: "Platform",
    body:
      "The AIGO-OS operating environment, governance engine, administration, assurance foundations and core platform capabilities.",
  },
  {
    title: "Governed AI estate",
    body:
      "Commercial scale can reflect the number and complexity of AI actors placed under active governance rather than simply the number of users.",
  },
  {
    title: "Governance operations",
    body:
      "Continuous monitoring, risk evaluation, governed actions and decision activity can contribute to the operating scale of a deployment.",
  },
  {
    title: "Enterprise requirements",
    body:
      "Integrations, assurance needs, deployment requirements, support, service levels and organizational complexity can influence commercial terms.",
  },
];

export default function CommercialModelPage() {
  return (
    <div className="public-page commercial-page">
      <section className="public-page__hero">
        <div className="public-page__eyebrow">
          Commercial Model
        </div>

        <h1 className="public-page__title">
          Pricing designed around governed AI, not seat count.
        </h1>

        <p className="public-page__lead">
          AIGO-OS is currently available to selected organizations
          through the Design Partner Program. Commercial arrangements
          are tailored to the scale and governance requirements of the
          enterprise environment.
        </p>
      </section>

      <section className="public-section">
        <div className="public-section__eyebrow">
          How commercial scale is considered
        </div>

        <h2 className="public-section__title">
          The model follows where AIGO-OS creates value.
        </h2>

        <div className="public-card-grid">
          {dimensions.map((dimension, index) => (
            <article className="public-card" key={dimension.title}>
              <span className="public-card__index">
                0{index + 1}
              </span>

              <h3>{dimension.title}</h3>
              <p>{dimension.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-cta">
        <div>
          <span>Current availability</span>
          <h2>Selected Design Partners</h2>
          <p>
            Early organizations can receive preferred founding terms
            as part of a structured design partnership.
          </p>
        </div>

        <Link href="/design-partners">
          Explore the program
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </section>
    </div>
  );
}
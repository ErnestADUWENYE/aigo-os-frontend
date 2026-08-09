import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Govern the AI estate",
    text: "Commercial scope should reflect the AI actors, governance domains and operating environments being governed, not the number of employees who log in.",
  },
  {
    number: "02",
    title: "Start with a defined boundary",
    text: "Begin with a business unit, agent estate, platform or governance problem where operating boundaries and outcomes can be clearly established.",
  },
  {
    number: "03",
    title: "Expand with governed operations",
    text: "As more AI actors, environments and governance workflows come under management, the commercial relationship can expand with them.",
  },
];

const engagement = [
  "Define the AI actors and environments in scope",
  "Identify authority, risk and evidence requirements",
  "Map the systems that provide governance signals",
  "Establish the initial deployment boundary",
  "Agree success criteria and operating outcomes",
  "Define the path from design partnership to production",
];

const questions = [
  {
    title: "Is AIGO-OS priced per user?",
    text: "That is not the intended model. AIGO-OS governs machine actors and enterprise AI operations, so human seat count alone is not a useful measure of governance scope.",
  },
  {
    title: "Do you publish fixed plans?",
    text: "Not yet. The platform is being developed with design partners, and commercial structure should follow validated deployment patterns rather than artificial packages created too early.",
  },
  {
    title: "Can we start with one use case?",
    text: "Yes. A bounded initial deployment is the preferred way to establish the governance model, integrations, controls and measurable outcomes before expanding.",
  },
  {
    title: "What determines production scope?",
    text: "Relevant factors can include governed AI actors, environments, governance domains, integration requirements, operational scale and assurance requirements.",
  },
];

export default function PricingPage() {
  return (
    <main className="commercial-page">
      <section className="commercial-hero">
        <div className="commercial-shell commercial-hero__grid">
          <div>
            <span className="commercial-eyebrow">COMMERCIAL MODEL</span>

            <h1>
              Pricing designed around governed AI, not seat count.
            </h1>

            <p className="commercial-lead">
              AIGO-OS is infrastructure for governing enterprise AI operations.
              The commercial model is therefore designed around the scope and
              complexity of the AI environment being governed.
            </p>

            <div className="commercial-actions">
              <Link
                className="commercial-button commercial-button--primary"
                href="/design-partners"
              >
                Discuss a Design Partnership
              </Link>

              <Link
                className="commercial-button commercial-button--secondary"
                href="/contact"
              >
                Talk to AIGO-OS
              </Link>
            </div>
          </div>

          <div className="commercial-model-card">
            <div className="commercial-model-card__top">
              <span>Commercial basis</span>
              <strong>Governed scope</strong>
            </div>

            <div className="commercial-model-card__body">
              <div>
                <span>AI actors</span>
                <strong>Agents, models, apps, automations</strong>
              </div>

              <div>
                <span>Operating environments</span>
                <strong>Enterprise systems and platforms</strong>
              </div>

              <div>
                <span>Governance domains</span>
                <strong>Identity, authority, risk, evidence</strong>
              </div>

              <div>
                <span>Deployment maturity</span>
                <strong>Design partner to production</strong>
              </div>
            </div>

            <div className="commercial-model-card__footer">
              No artificial per-seat packaging
            </div>
          </div>
        </div>
      </section>

      <section className="commercial-section">
        <div className="commercial-shell">
          <div className="commercial-heading">
            <span className="commercial-eyebrow">PRICING PRINCIPLES</span>
            <h2>Commercial structure should follow the governance problem.</h2>
            <p>
              Autonomous systems change the unit of value. The important
              question is not how many people have accounts. It is how much AI
              activity must be understood, bounded, governed and evidenced.
            </p>
          </div>

          <div className="commercial-principles">
            {principles.map((item) => (
              <article className="commercial-principle" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="commercial-section commercial-section--dark">
        <div className="commercial-shell commercial-two-column">
          <div className="commercial-heading">
            <span className="commercial-eyebrow">STARTING POINT</span>

            <h2>Begin with a deployment boundary that matters.</h2>

            <p>
              Early AIGO-OS engagements focus on a concrete governance problem
              where the operating model can be tested against real enterprise
              systems and real autonomous behavior.
            </p>

            <Link
              className="commercial-text-link"
              href="/design-partners"
            >
              Explore the design partner program →
            </Link>
          </div>

          <div className="commercial-engagement">
            {engagement.map((item, index) => (
              <div className="commercial-engagement__row" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="commercial-section commercial-section--soft">
        <div className="commercial-shell">
          <div className="commercial-heading">
            <span className="commercial-eyebrow">HOW SCOPE EXPANDS</span>
            <h2>Land with one governance boundary. Expand with autonomy.</h2>
          </div>

          <div className="commercial-expansion">
            <div className="commercial-expansion__stage">
              <span>01</span>
              <strong>Bounded deployment</strong>
              <p>
                Establish governance for a defined AI workload, business
                process or operating environment.
              </p>
            </div>

            <div className="commercial-expansion__connector">→</div>

            <div className="commercial-expansion__stage">
              <span>02</span>
              <strong>Operational governance</strong>
              <p>
                Connect identity, authority, risk and evidence to ongoing AI
                operations.
              </p>
            </div>

            <div className="commercial-expansion__connector">→</div>

            <div className="commercial-expansion__stage">
              <span>03</span>
              <strong>Enterprise coverage</strong>
              <p>
                Extend the governance model across additional actors,
                environments and business domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="commercial-section">
        <div className="commercial-shell commercial-two-column">
          <div className="commercial-heading">
            <span className="commercial-eyebrow">COMMERCIAL QUESTIONS</span>
            <h2>What enterprise buyers need to know.</h2>
          </div>

          <div className="commercial-faq">
            {questions.map((item) => (
              <article className="commercial-faq__item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="commercial-final">
        <div className="commercial-shell commercial-final__inner">
          <div>
            <span className="commercial-eyebrow">DEFINE YOUR GOVERNANCE BOUNDARY</span>
            <h2>
              Tell us what your AI can do. We will start with how it should be
              governed.
            </h2>
          </div>

          <div className="commercial-actions">
            <Link
              className="commercial-button commercial-button--primary"
              href="/design-partners"
            >
              Become a Design Partner
            </Link>

            <Link
              className="commercial-button commercial-button--dark"
              href="/product"
            >
              Explore AIGO-OS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";

const entryPaths = [
  {
    number: "01",
    title: "Evaluate AIGO-OS",
    body:
      "Understand the governance model, platform capabilities, architecture and fit for your enterprise AI environment.",
    href: "/contact?intent=evaluation",
    action: "Start an evaluation",
  },
  {
    number: "02",
    title: "Request a Demo",
    body:
      "See how AIGO-OS connects identity, authority, Business Significance, risk, governance decisions and evidence.",
    href: "/contact?intent=demo",
    action: "Request a Demo",
  },
  {
    number: "03",
    title: "Discuss Deployment",
    body:
      "Review integration boundaries, security requirements, deployment architecture and the operating model required for your environment.",
    href: "/contact?intent=deployment",
    action: "Discuss deployment",
  },
  {
    number: "04",
    title: "Commercial Inquiry",
    body:
      "Discuss licensing, commercial scope, procurement, contracting and enterprise onboarding.",
    href: "/contact?intent=commercial",
    action: "Discuss commercial scope",
  },
];

const pricingDimensions = [
  {
    number: "01",
    title: "Governed AI scope",
    body:
      "The AI systems, autonomous actors and operating environments that will sit within the AIGO-OS governance scope.",
  },
  {
    number: "02",
    title: "Governance capabilities",
    body:
      "The capabilities required across identity, Machine Authority, Business Significance, Risk Intelligence, decisioning and evidence.",
  },
  {
    number: "03",
    title: "Enterprise integrations",
    body:
      "The systems that provide governance context or participate in supported execution, review and escalation paths.",
  },
  {
    number: "04",
    title: "Deployment requirements",
    body:
      "Architecture, security, tenancy, data-handling and operating requirements associated with the deployment.",
  },
  {
    number: "05",
    title: "Assurance and support",
    body:
      "Implementation support, governance onboarding, assurance participation and ongoing enterprise support requirements.",
  },
];

const onboarding = [
  {
    number: "01",
    title: "Understand the environment",
    body:
      "Identify the AI systems, actors, enterprise dependencies and governance problems in scope.",
  },
  {
    number: "02",
    title: "Define governance scope",
    body:
      "Determine identity, authority, risk, Business Significance, decision and evidence requirements.",
  },
  {
    number: "03",
    title: "Evaluate architecture",
    body:
      "Review integrations, execution boundaries, security and deployment requirements.",
  },
  {
    number: "04",
    title: "Agree commercial scope",
    body:
      "Align licensing, procurement, contracting and implementation requirements.",
  },
  {
    number: "05",
    title: "Integrate AIGO-OS",
    body:
      "Connect the enterprise context and governance services required by the operating model.",
  },
  {
    number: "06",
    title: "Operationalize governance",
    body:
      "Move from evaluation into continuous governance, reassessment and evidence.",
  },
];

export default function GetStartedPage() {
  return (
    <main className="aigo-get-started">
      <section className="aigo-get-started__hero">
        <div className="aigo-public-shell aigo-get-started__hero-grid">
          <div>
            <span className="aigo-public-kicker">
              GET STARTED
            </span>

            <h1>
              Start with your
              <span> governance environment.</span>
            </h1>

            <p>
              AIGO-OS is enterprise governance infrastructure for AI that can
              act. Getting started begins with understanding the AI systems
              you operate, the authority they exercise, the enterprise
              context they affect and the governance outcomes your
              organization needs.
            </p>

            <div className="aigo-public-actions">
              <Link
                className="aigo-public-button aigo-public-button--primary"
                href="/contact?intent=demo"
              >
                Request a Demo
                <span aria-hidden="true" className="aigo-ui-arrow" />
              </Link>

              <Link
                className="aigo-public-button aigo-public-button--secondary"
                href="/contact?intent=commercial"
              >
                Discuss Commercial Scope
              </Link>
            </div>
          </div>

          <div className="aigo-get-started__model">
            <span>ENTERPRISE ENTRY PATH</span>

            <div>
              <small>01</small>
              <strong>Your AI environment</strong>
              <p>What AI operates, where it acts and what business context it affects.</p>
            </div>

            <i aria-hidden="true" />

            <div>
              <small>02</small>
              <strong>Governance requirements</strong>
              <p>Identity, authority, risk, oversight, policy and evidence requirements.</p>
            </div>

            <i aria-hidden="true" />

            <div>
              <small>03</small>
              <strong>AIGO-OS architecture</strong>
              <p>Capabilities, integrations and execution boundaries required.</p>
            </div>

            <i aria-hidden="true" />

            <div>
              <small>04</small>
              <strong>Commercial and deployment plan</strong>
              <p>The scope required to move from evaluation into operation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="aigo-get-started__paths">
        <div className="aigo-public-shell">
          <div className="aigo-public-section-heading">
            <div>
              <span className="aigo-public-kicker">
                CHOOSE YOUR ENTRY POINT
              </span>

              <h2>
                Start the conversation
                <span> that matches where you are.</span>
              </h2>
            </div>

            <p>
              Product evaluation, architecture, deployment and commercial
              discussions have different purposes. AIGO-OS should make each
              path clear.
            </p>
          </div>

          <div className="aigo-get-started__path-grid">
            {entryPaths.map((item) => (
              <Link href={item.href} key={item.number}>
                <span>{item.number}</span>

                <h3>{item.title}</h3>
                <p>{item.body}</p>

                <strong>
                  {item.action}
                  <i aria-hidden="true" className="aigo-ui-arrow" />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="aigo-get-started__pricing">
        <div className="aigo-public-shell">
          <div className="aigo-public-section-heading">
            <div>
              <span className="aigo-public-kicker">
                HOW PRICING WORKS
              </span>

              <h2>
                Commercial scope follows
                <span> the governance environment.</span>
              </h2>
            </div>

            <p>
              AIGO-OS should not be priced publicly as though every enterprise
              has the same AI estate, governance depth, integrations and
              deployment requirements.
            </p>
          </div>

          <div className="aigo-get-started__pricing-grid">
            {pricingDimensions.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="aigo-get-started__pricing-note">
            <div>
              <span>COMMERCIAL APPROACH</span>
              <strong>Enterprise scoping before pricing.</strong>
            </div>

            <p>
              Pricing is established through the scope of the deployment and
              governance requirements. Public package pricing should only be
              introduced when standardized commercial packages exist and can
              be represented accurately.
            </p>

            <Link href="/contact?intent=commercial">
              Discuss commercial scope
              <span aria-hidden="true" className="aigo-ui-arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section className="aigo-get-started__onboarding">
        <div className="aigo-public-shell">
          <span className="aigo-public-kicker">
            FROM EVALUATION TO OPERATION
          </span>

          <h2>
            Know what happens after the first conversation.
          </h2>

          <div className="aigo-get-started__onboarding-flow">
            {onboarding.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aigo-get-started__final">
        <div className="aigo-public-shell aigo-get-started__final-grid">
          <div>
            <span className="aigo-public-kicker">
              START WITH YOUR AI ENVIRONMENT
            </span>

            <h2>
              Tell us what your organization needs to govern.
            </h2>
          </div>

          <div>
            <p>
              We will use that context to determine the relevant AIGO-OS
              capabilities, integration requirements, evaluation path and
              commercial scope.
            </p>

            <Link
              className="aigo-public-button aigo-public-button--primary"
              href="/contact?intent=evaluation"
            >
              Get Started
              <span aria-hidden="true" className="aigo-ui-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

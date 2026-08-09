import Link from "next/link";

const outcomes = [
  {
    number: "01",
    title: "Shape the operating model",
    body:
      "Work directly with AIGO-OS around real AI governance requirements, autonomous workflows and enterprise operating constraints.",
  },
  {
    number: "02",
    title: "Influence product direction",
    body:
      "Help prioritize capabilities that matter in production environments instead of features designed around hypothetical governance problems.",
  },
  {
    number: "03",
    title: "Validate against real systems",
    body:
      "Explore how identity, authority, risk, policy decisions and governance evidence connect to your existing AI and enterprise infrastructure.",
  },
  {
    number: "04",
    title: "Prepare for governed autonomy",
    body:
      "Develop the governance foundations required as AI moves from assisted workflows toward increasingly autonomous enterprise operation.",
  },
];

const fit = [
  "You are deploying or evaluating AI agents and autonomous workflows",
  "Your AI estate spans multiple platforms, models or business systems",
  "Existing governance processes depend heavily on manual review",
  "You need stronger visibility into AI identity, authority and operating context",
  "You are preparing for greater autonomy without weakening enterprise control",
];

export default function DesignPartnersPage() {
  return (
    <div className="design-partners">
      <section className="design-partners__hero">
        <div className="design-partners__hero-shell">
          <div className="design-partners__copy">
            <span>Design Partner Program</span>

            <h1>
              Help define how autonomous enterprise AI should be governed.
            </h1>

            <p>
              AIGO-OS is working with forward-looking organizations to
              validate the governance operating model against real AI
              environments, real constraints and real enterprise risk.
            </p>

            <div className="design-partners__actions">
              <Link href="/contact">
                Start a conversation
                <span aria-hidden="true">→</span>
              </Link>

              <Link href="/product">
                Explore the platform
              </Link>
            </div>
          </div>

          <div className="design-partners__signal">
            <div className="design-partners__signal-head">
              <span>Design partnership</span>
              <strong>Active collaboration</strong>
            </div>

            <div className="design-partners__signal-flow">
              <div>
                <span>01</span>
                <strong>Your environment</strong>
                <small>
                  AI actors, workflows, systems and governance constraints
                </small>
              </div>

              <i />

              <div>
                <span>02</span>
                <strong>AIGO-OS</strong>
                <small>
                  Identity, authority, risk, decisions and evidence
                </small>
              </div>

              <i />

              <div>
                <span>03</span>
                <strong>Validated model</strong>
                <small>
                  Governance capability grounded in real operation
                </small>
              </div>
            </div>

            <div className="design-partners__signal-state">
              <span>
                <i />
                Program status
              </span>
              <strong>Building with early partners</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="design-partners__why public-light">
        <div className="public-section-shell">
          <div className="design-partners__section-heading">
            <div>
              <span className="public-section-kicker">
                Why participate
              </span>

              <h2>
                Do more than evaluate another governance product.
              </h2>
            </div>

            <p>
              Design Partners help pressure-test the assumptions,
              workflows and capabilities required for governance at
              machine speed.
            </p>
          </div>

          <div className="design-partners__outcomes">
            {outcomes.map((outcome) => (
              <article key={outcome.number}>
                <span>{outcome.number}</span>
                <h3>{outcome.title}</h3>
                <p>{outcome.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="design-partners__fit">
        <div className="design-partners__fit-shell">
          <div>
            <span>Who this is for</span>

            <h2>
              A strong fit if AI governance is becoming an operating problem.
            </h2>

            <p>
              The program is intended for organizations confronting
              practical governance questions as AI becomes more
              distributed, connected and autonomous.
            </p>
          </div>

          <div className="design-partners__fit-list">
            {fit.map((item) => (
              <div key={item}>
                <span aria-hidden="true">✓</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="design-partners__final public-light">
        <div className="design-partners__final-shell">
          <span>Build with us</span>

          <h2>
            Bring us the governance problem your current stack cannot solve.
          </h2>

          <p>
            We want to understand the AI environment, the autonomy you
            are introducing and the control model your organization
            needs to operate confidently.
          </p>

          <Link href="/contact">
            Talk to AIGO-OS
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
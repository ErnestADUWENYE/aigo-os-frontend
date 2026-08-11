import Link from "next/link";

const useCases = [
  {
    number: "01",
    eyebrow: "EXCESSIVE AGENCY",
    title: "Control Excessive Agency",
    body:
      "Keep autonomous AI inside the authority, purpose and operating conditions the enterprise intended — even as systems become more capable.",
    href: "/solutions/excessive-agency",
    signal: "Authority boundaries",
  },
  {
    number: "02",
    eyebrow: "TOOL MISUSE",
    title: "Prevent Inappropriate Agent Tool Use",
    body:
      "Govern when and how AI actors use enterprise tools, APIs, systems and workflows instead of relying on access permission alone.",
    href: "/solutions/agent-tool-misuse",
    signal: "Action control",
  },
  {
    number: "03",
    eyebrow: "HUMAN OVERSIGHT",
    title: "Apply Human Oversight Where It Matters",
    body:
      "Let routine autonomous work proceed while consequential actions are directed to the appropriate human authority with the context needed to decide.",
    href: "/solutions/human-oversight",
    signal: "Contextual escalation",
  },
  {
    number: "04",
    eyebrow: "AUTHORITY ABUSE",
    title: "Detect and Contain Authority Abuse",
    body:
      "Identify when legitimate machine authority is being exercised outside expected purpose, context or operating conditions and respond before impact expands.",
    href: "/solutions/authority-abuse",
    signal: "Runtime containment",
  },
];

const pressures = [
  {
    label: "Identity",
    before: "The enterprise sees an account, token or service.",
    after: "Establish a persistent governance identity for the AI actor.",
  },
  {
    label: "Authority",
    before: "Permissions show what access exists.",
    after: "Understand what the actor can actually access, execute and influence.",
  },
  {
    label: "Context",
    before: "A permitted action is often treated as an acceptable action.",
    after: "Evaluate purpose, conditions and business context before action.",
  },
  {
    label: "Risk",
    before: "Static assessments fall behind changing autonomous behavior.",
    after: "Continuously evaluate risk as authority and operating conditions change.",
  },
  {
    label: "Decision",
    before: "Every exception competes for manual human review.",
    after: "Allow, deny, review, escalate or suspend based on contextual policy.",
  },
  {
    label: "Evidence",
    before: "Teams reconstruct consequential decisions after the fact.",
    after: "Preserve governance evidence as part of the operating path.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="solutions-page">
      <section className="solutions-page__hero">
        <div className="solutions-page__hero-shell">
          <div className="solutions-page__hero-copy">
            <span>Enterprise AI governance use cases</span>

            <h1>
              Govern the actions autonomous AI is trusted to take.
            </h1>

            <p>
              AIGO-OS gives enterprises an operational control layer for
              machine identity, authority, contextual risk, runtime
              decisions and governance evidence.
            </p>

            <div className="solutions-page__hero-actions">
              <Link href="/contact?intent=demo">
                Request a Demo
                <span aria-hidden="true">→</span>
              </Link>

              <Link href="/product">
                Explore AIGO-OS
              </Link>
            </div>
          </div>

          <div
            aria-label="AIGO-OS runtime governance model"
            className="solutions-page__visual"
          >
            <div className="solutions-page__visual-head">
              <span>Autonomous action</span>
              <strong>Governance decision</strong>
            </div>

            <div className="solutions-page__visual-flow">
              <div className="solutions-page__visual-inputs">
                <span>Actor</span>
                <span>Authority</span>
                <span>Tool</span>
                <span>Context</span>
              </div>

              <div className="solutions-page__visual-line">
                <i />
                <i />
                <i />
              </div>

              <div className="solutions-page__visual-core">
                <small>AIGO-OS</small>
                <strong>Evaluate</strong>
                <span>
                  Identity · Authority · Risk · Policy
                </span>
              </div>

              <div className="solutions-page__visual-line">
                <i />
                <i />
                <i />
              </div>

              <div className="solutions-page__visual-outcomes">
                <span>Allow</span>
                <span>Deny</span>
                <span>Review</span>
                <span>Escalate</span>
              </div>
            </div>

            <div className="solutions-page__visual-status">
              <span>
                <i />
                Continuous governance
              </span>

              <strong>Operating</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-page__portfolio public-light">
        <div className="public-section-shell">
          <div className="solutions-page__section-heading">
            <div>
              <span className="public-section-kicker">
                Where AIGO-OS applies
              </span>

              <h2>
                Four critical control problems created by autonomous AI.
              </h2>
            </div>

            <p>
              These problems emerge when AI moves beyond generating
              information and begins exercising authority through tools,
              systems and enterprise workflows.
            </p>
          </div>

          <div className="solutions-page__cards">
            {useCases.map((useCase) => (
              <article key={useCase.number}>
                <div className="solutions-page__card-top">
                  <span>{useCase.number}</span>
                  <small>{useCase.signal}</small>
                </div>

                <span className="solutions-page__card-eyebrow">
                  {useCase.eyebrow}
                </span>

                <h3>{useCase.title}</h3>
                <p>{useCase.body}</p>

                <Link href={useCase.href}>
                  Explore use case
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-page__shift">
        <div className="solutions-page__shift-shell">
          <div className="solutions-page__shift-heading">
            <span>Why existing controls are not enough</span>

            <h2>
              Autonomous operation changes what enterprise governance
              has to understand.
            </h2>
          </div>

          <div className="solutions-page__pressure-table">
            <div className="solutions-page__pressure-head">
              <span>Governance dimension</span>
              <span>Traditional view</span>
              <span>AIGO-OS operating view</span>
            </div>

            {pressures.map((pressure) => (
              <div
                className="solutions-page__pressure-row"
                key={pressure.label}
              >
                <strong>{pressure.label}</strong>
                <p>{pressure.before}</p>
                <p>{pressure.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-page__decision public-light">
        <div className="public-section-shell">
          <div className="solutions-page__decision-grid">
            <div>
              <span className="public-section-kicker">
                Governed autonomy
              </span>

              <h2>
                More autonomy does not have to mean less control.
              </h2>

              <p>
                AIGO-OS puts governance into the operating path so AI can
                move at machine speed inside explicit boundaries while
                consequential exceptions reach human decision-makers.
              </p>
            </div>

            <div className="solutions-page__decision-model">
              <div>
                <span>Routine action</span>
                <strong>Proceed</strong>
                <small>Inside verified authority and policy</small>
              </div>

              <i />

              <div>
                <span>Material exception</span>
                <strong>Human oversight</strong>
                <small>Escalate with context and evidence</small>
              </div>

              <i />

              <div>
                <span>Every decision</span>
                <strong>Governance evidence</strong>
                <small>Maintain a reconstructable decision trail</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-page__cta">
        <div className="solutions-page__cta-shell">
          <span>Evaluate AIGO-OS</span>

          <h2>
            See how AIGO-OS can govern autonomous action in your
            environment.
          </h2>

          <p>
            Start with the actors, tools, authority paths and decisions
            that create the greatest governance exposure today.
          </p>

          <Link href="/contact?intent=demo">
            Request a Demo
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

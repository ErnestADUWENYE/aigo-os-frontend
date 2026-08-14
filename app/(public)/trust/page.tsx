import Link from "next/link";

const trustDomains = [
  {
    number: "01",
    title: "Bounded platform authority",
    body:
      "AIGO-OS is a governance decision layer, not an unrestricted operator. Governance authority should be explicitly scoped so the platform can evaluate, constrain, escalate or record decisions without silently expanding its own permissions.",
  },
  {
    number: "02",
    title: "Controlled integration boundaries",
    body:
      "Enterprise integrations should expose only the identity, authority, policy, risk and operational context required for a defined governance purpose. AIGO-OS should not require unnecessary access simply because the underlying system can provide it.",
  },
  {
    number: "03",
    title: "Reconstructable decisions",
    body:
      "A consequential governance decision should be explainable after it happens. AIGO-OS is structured to preserve the context of the decision, including the governed actor, evaluated authority, relevant risk and the resulting governance outcome.",
  },
  {
    number: "04",
    title: "Accountable escalation",
    body:
      "Governed autonomy does not remove human accountability. Where authority, policy or risk requires human judgment, the governance path should make that escalation explicit rather than allowing uncertainty to disappear inside an automated workflow.",
  },
];

const controlModel = [
  {
    label: "Identity",
    title: "Know what is acting.",
    text:
      "Governance starts by establishing the identity and governance context of the AI agent, model, application, automation or other governed actor.",
  },
  {
    label: "Authority",
    title: "Know what it is allowed to do.",
    text:
      "Permissions alone do not express business authority. AIGO-OS evaluates whether an action sits within the authority assigned to the governed actor.",
  },
  {
    label: "Context",
    title: "Understand the decision in context.",
    text:
      "Business significance, policy conditions, risk signals and available enterprise context can change how the same action should be governed.",
  },
  {
    label: "Decision",
    title: "Apply the required governance outcome.",
    text:
      "The governance layer can determine whether an action is permitted, constrained, escalated or otherwise subject to a defined governance path.",
  },
  {
    label: "Evidence",
    title: "Preserve what happened.",
    text:
      "Governance evidence provides a reconstructable record of material decisions so organizations can investigate, review and demonstrate how autonomy was governed.",
  },
];

const buyerQuestions = [
  "What systems and governance context does AIGO-OS need access to?",
  "What authority can the governance layer exercise?",
  "How are identities, policies and authority boundaries represented?",
  "What happens when governance context is incomplete or uncertain?",
  "Which decisions require escalation or accountable human review?",
  "What evidence is retained for later investigation and assurance?",
];

export default function TrustPage() {
  return (
    <main className="trust-page">
      <section className="trust-page__hero">
        <div className="trust-page__hero-shell">
          <span className="trust-page__eyebrow">Trust and assurance</span>

          <h1>
            A governance system must be governed too.
          </h1>

          <p>
            AIGO-OS sits between enterprise AI autonomy and consequential
            action. That position requires explicit authority boundaries,
            controlled integrations, accountable decision paths and evidence
            that organizations can reconstruct when a decision matters.
          </p>

          <div className="trust-page__actions">
            <Link href="/security">
              Review security architecture
              <span aria-hidden="true" className="aigo-ui-arrow" />
            </Link>

            <Link href="/responsible-disclosure">
              Responsible disclosure
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-page__position public-light">
        <div className="public-section-shell">
          <div className="trust-page__position-heading">
            <div>
              <span className="public-section-kicker">
                Trust model
              </span>

              <h2>
                The governance layer should never become an invisible source
                of uncontrolled authority.
              </h2>
            </div>

            <p>
              AIGO-OS is designed around a simple principle: the system that
              governs autonomous AI must itself operate within understandable
              boundaries. Enterprises should be able to determine what the
              platform can access, what decisions it can influence, when
              humans remain accountable and what evidence is produced.
            </p>
          </div>

          <div className="trust-page__domains">
            {trustDomains.map((domain) => (
              <article key={domain.number}>
                <span>{domain.number}</span>
                <h3>{domain.title}</h3>
                <p>{domain.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-page__principles">
        <div className="trust-page__principles-shell">
          <div className="trust-page__principles-copy">
            <span>Governance control model</span>

            <h2>
              Trust follows the decision path.
            </h2>

            <p>
              AIGO-OS does not treat trust as a badge beside the product.
              Trust has to exist throughout the governance path: from knowing
              what is acting, to evaluating its authority and context, to
              determining the governance outcome and preserving evidence.
            </p>
          </div>

          <div className="trust-page__principles-list">
            {controlModel.map((item, index) => (
              <article key={item.label}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <small>{item.label}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-page__disclosure public-light">
        <div className="public-section-shell">
          <div className="trust-page__disclosure-grid">
            <div>
              <span className="public-section-kicker">
                Enterprise evaluation
              </span>

              <h2>
                Ask the questions that determine whether a governance platform
                can be trusted.
              </h2>

              <p>
                Trust should be evaluated through architecture, authority,
                integration boundaries, decision behavior and evidence, not
                through broad claims.
              </p>
            </div>

            <div className="trust-page__evaluation">
              {buyerQuestions.map((question, index) => (
                <article key={question}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{question}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="trust-page__assurance">
        <div className="public-section-shell">
          <div className="trust-page__assurance-heading">
            <span className="public-section-kicker">
              Assurance position
            </span>

            <h2>
              Evidence before claims.
            </h2>

            <p>
              AIGO-OS will not present planned certifications, controls,
              independent assessments or compliance outcomes as completed
              assurance. Public trust claims should remain tied to evidence
              that can actually be substantiated.
            </p>
          </div>

          <div className="trust-page__assurance-grid">
            <article>
              <span>Architecture</span>
              <h3>Explain the boundary.</h3>
              <p>
                Document how AIGO-OS connects to enterprise systems, what
                information crosses the boundary and where governance
                decisions are made.
              </p>
            </article>

            <article>
              <span>Security</span>
              <h3>Protect the governance plane.</h3>
              <p>
                Security controls must protect the identities, policies,
                authority definitions, decision context and evidence used by
                the governance layer.
              </p>

              <Link href="/security">
                Security architecture
                <span aria-hidden="true" className="aigo-ui-arrow" />
              </Link>
            </article>

            <article>
              <span>Disclosure</span>
              <h3>Provide a responsible path.</h3>
              <p>
                Security researchers and enterprise stakeholders need a clear
                route for raising security concerns about the platform.
              </p>

              <Link href="/responsible-disclosure">
                Responsible disclosure
                <span aria-hidden="true" className="aigo-ui-arrow" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="trust-page__cta">
        <div className="trust-page__cta-shell">
          <span>Trust review</span>

          <h2>
            Evaluating AIGO-OS for an enterprise environment?
          </h2>

          <p>
            Discuss your architecture, AI operating model, authority
            boundaries, integration requirements and assurance questions with
            us directly.
          </p>

          <Link href="/contact?intent=demo">
            Request a Demo
            <span aria-hidden="true" className="aigo-ui-arrow" />
          </Link>
        </div>
      </section>
    </main>
  );
}
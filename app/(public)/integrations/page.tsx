import Link from "next/link";

import { IntegrationArchitecture } from "@/components/integration-architecture";

const integrationRoles = [
  {
    number: "01",
    title: "Discover AI",
    source: "AI environments",
    context:
      "AI systems, capabilities, relationships and lifecycle changes.",
    purpose:
      "Establish what AI is operating and maintain governance identity as the environment changes.",
  },
  {
    number: "02",
    title: "Resolve identity",
    source: "Identity and access systems",
    context:
      "Identity, ownership, authentication, permissions and access relationships.",
    purpose:
      "Connect technical identity to governed actors and distinguish access from authority.",
  },
  {
    number: "03",
    title: "Observe change",
    source: "Observability and operational systems",
    context:
      "Relevant runtime signals, events and changing operating conditions.",
    purpose:
      "Use operational change as input to Business Significance, risk and reassessment.",
  },
  {
    number: "04",
    title: "Interpret risk",
    source: "Security and risk systems",
    context:
      "Relevant security findings, control signals and changing risk conditions.",
    purpose:
      "Bring enterprise risk context into governance reasoning without replacing the source systems.",
  },
  {
    number: "05",
    title: "Apply governance context",
    source: "Policy and GRC systems",
    context:
      "Policies, controls, obligations, risk context and assurance requirements.",
    purpose:
      "Connect organizational requirements to AI governance decisions, evidence and assurance.",
  },
  {
    number: "06",
    title: "Understand consequence",
    source: "Business systems",
    context:
      "Processes, capabilities, stakeholders, resources and organizational relationships.",
    purpose:
      "Determine the Business Significance of changing AI activity.",
  },
];

const boundaries = [
  {
    title: "AIGO-OS consumes context.",
    body:
      "The platform is designed to use relevant identity, security, operational, governance and business signals from connected enterprise systems.",
  },
  {
    title: "AIGO-OS makes governance decisions.",
    body:
      "The connected context contributes to identity, authority, Business Significance, risk, policy reasoning and explainable governance outcomes.",
  },
  {
    title: "AIGO-OS can govern supported execution paths.",
    body:
      "Where an action passes through a supported AIGO-OS enforcement integration, the governance decision can influence whether activity proceeds or requires intervention.",
  },
  {
    title: "AIGO-OS does not claim control it does not have.",
    body:
      "Where AIGO-OS is not in the execution path, it can observe, assess, detect, record, alert and escalate rather than claim that an external action was prevented.",
  },
];

export default function IntegrationsPage() {
  return (
    <div className="aigo-integrations">
      <section className="aigo-integrations__hero">
        <div className="aigo-public-shell aigo-integrations__hero-grid">
          <div>
            <span className="aigo-public-kicker">
              INTEGRATIONS
            </span>

            <h1>
              Connect enterprise context to
              <span> AI governance.</span>
            </h1>

            <p>
              AIGO-OS does not need to recreate every enterprise control
              system. It connects relevant context from the systems your
              organization already uses and brings that context into the
              governance of enterprise AI.
            </p>

            <div className="aigo-public-actions">
              <Link
                className="aigo-public-button aigo-public-button--primary"
                href="/contact?intent=demo"
              >
                Discuss Your Environment
                <span
                  aria-hidden="true"
                  className="aigo-ui-arrow"
                />
              </Link>

              <Link
                className="aigo-public-button aigo-public-button--secondary"
                href="/platform"
              >
                Explore AIGO-OS
              </Link>
            </div>
          </div>

          <div className="aigo-integrations__hero-model">
            <span>THE INTEGRATION MODEL</span>

            <div>
              <strong>Enterprise context</strong>
              <small>Identity / Security / Operations / Policy / Business</small>
            </div>

            <i />

            <div className="aigo-integrations__hero-core">
              <strong>AIGO-OS</strong>
              <small>Governance context and decisioning</small>
            </div>

            <i />

            <div>
              <strong>Governed outcome</strong>
              <small>Decision / Evidence / Supported action / Escalation</small>
            </div>
          </div>
        </div>
      </section>

      <section className="aigo-integrations__principle">
        <div className="aigo-public-shell aigo-integrations__principle-grid">
          <div>
            <span className="aigo-public-kicker">
              THE PRINCIPLE
            </span>

            <h2>
              Integration is not about collecting more data.
            </h2>
          </div>

          <div>
            <p>
              AIGO-OS integrates because governance depends on context.
              Identity helps establish who or what is acting. Operational
              signals help establish what changed. Business context helps
              determine why it matters. Policy and risk context help determine
              what governance response is appropriate.
            </p>

            <p>
              The value is not another unified dashboard. The value is keeping
              relevant enterprise context connected to the governance decision.
            </p>
          </div>
        </div>
      </section>

      <section className="aigo-integrations__architecture">
        <div className="aigo-public-shell">
          <div className="aigo-public-section-heading">
            <div>
              <span className="aigo-public-kicker">
                HOW CONTEXT FLOWS INTO AIGO-OS
              </span>

              <h2>
                Every connection should answer
                <span> a governance question.</span>
              </h2>
            </div>

            <p>
              Explore how different enterprise systems contribute context
              without being confused with the governance operating system
              itself.
            </p>
          </div>

          <IntegrationArchitecture />
        </div>
      </section>

      <section className="aigo-integrations__roles">
        <div className="aigo-public-shell">
          <span className="aigo-public-kicker">
            INTEGRATION ROLES
          </span>

          <h2>
            What enters AIGO-OS, and why.
          </h2>

          <div className="aigo-integrations__role-grid">
            {integrationRoles.map((item) => (
              <article key={item.number}>
                <div>
                  <span>{item.number}</span>
                  <small>{item.source}</small>
                </div>

                <h3>{item.title}</h3>

                <div className="aigo-integrations__role-context">
                  <small>CONTEXT SUPPLIED</small>
                  <p>{item.context}</p>
                </div>

                <div className="aigo-integrations__role-purpose">
                  <small>WHY AIGO-OS USES IT</small>
                  <p>{item.purpose}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aigo-integrations__difference">
        <div className="aigo-public-shell">
          <div className="aigo-public-section-heading">
            <div>
              <span className="aigo-public-kicker">
                DIFFERENT SYSTEMS. DIFFERENT RESPONSIBILITIES.
              </span>

              <h2>
                Observability sees activity.
                <span>AIGO-OS governs its significance.</span>
              </h2>
            </div>

            <p>
              AIGO-OS is designed to consume relevant context from adjacent
              enterprise systems without pretending to replace their primary
              responsibilities.
            </p>
          </div>

          <div className="aigo-integrations__difference-grid">
            <article>
              <span>OBSERVABILITY</span>
              <h3>What happened technically?</h3>
              <p>
                Runtime behavior, events, traces, performance and operational
                signals.
              </p>
            </article>

            <article>
              <span>IDENTITY AND ACCESS</span>
              <h3>Who or what can access the resource?</h3>
              <p>
                Identity, authentication, credentials, permissions and access
                boundaries.
              </p>
            </article>

            <article>
              <span>GRC</span>
              <h3>What policies, risks and obligations apply?</h3>
              <p>
                Policies, controls, assessments, risks and organizational
                assurance context.
              </p>
            </article>

            <article className="aigo-integrations__difference-aigo">
              <span>AIGO-OS</span>

              <h3>
                What should this AI be allowed to do in the current context?
              </h3>

              <p>
                Identity, authority, Business Significance, risk, policy,
                governance decision, supported action and evidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="aigo-integrations__boundary">
        <div className="aigo-public-shell">
          <span className="aigo-public-kicker">
            THE EXECUTION BOUNDARY
          </span>

          <h2>
            Be precise about where governance can reach.
          </h2>

          <div className="aigo-integrations__boundary-grid">
            {boundaries.map((item, index) => (
              <article key={item.title}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aigo-integrations__final">
        <div className="aigo-public-shell aigo-integrations__final-grid">
          <div>
            <span className="aigo-public-kicker">
              YOUR ENTERPRISE ENVIRONMENT
            </span>

            <h2>
              Start with the systems and governance context you already have.
            </h2>
          </div>

          <div>
            <p>
              Talk to AIGO-OS about the identity, AI, security, observability,
              governance and business systems that shape your AI operating
              environment.
            </p>

            <Link
              className="aigo-public-button aigo-public-button--primary"
              href="/contact?intent=demo"
            >
              Discuss Your Environment
              <span
                aria-hidden="true"
                className="aigo-ui-arrow"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


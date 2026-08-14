import Link from "next/link";

import { AigoCapabilityDemo } from "@/components/aigo-capability-demo";

const riskContext = [
  {
    title: "Actor context",
    body:
      "Who or what is acting, its purpose, lifecycle state and governance identity.",
  },
  {
    title: "Effective authority",
    body:
      "Whether the intended activity sits inside or outside the actor's delegated operating boundary.",
  },
  {
    title: "Technical signals",
    body:
      "Relevant conditions observed from the systems in which the actor operates.",
  },
  {
    title: "Dependencies",
    body:
      "The connected systems and relationships through which consequences may propagate.",
  },
  {
    title: "Business significance",
    body:
      "The enterprise importance of the activity, resource, process or outcome being affected.",
  },
  {
    title: "Operating context",
    body:
      "The surrounding conditions that can make the same capability more or less consequential.",
  },
];

export default function Page() {
  return (
    <div className="capability-detail">
      <section className="capability-detail__hero">
        <div className="capability-detail__hero-shell">
          <span className="capability-detail__kicker">
            Risk Intelligence
          </span>

          <h1>
            A risk signal means little without the context of what AI can affect.
          </h1>

          <p>
            AIGO-OS interprets AI risk through identity, authority,
            dependencies, business significance and operating context so
            governance can respond to consequence, not just technical signal.
          </p>

          <div className="capability-detail__actions">
            <Link href="/contact?intent=demo">
              Request a Demo
            </Link>

            <Link href="/platform">
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>

      <section className="public-section public-light">
        <div className="public-section-shell">
          <div className="capability-story-grid">
            <div>
              <span className="public-section-kicker">
                Contextual risk
              </span>

              <h2>
                Move from isolated signals to governance-relevant exposure.
              </h2>
            </div>

            <div className="capability-story-copy">
              <p>
                The significance of AI activity depends on more than the
                presence of a technical finding. The same signal can carry very
                different consequences depending on the actor involved, its
                authority, the systems affected and the business activity at
                stake.
              </p>

              <p>
                AIGO-OS connects those dimensions so risk can inform decisions,
                escalation and reassessment as operating context changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="public-section">
        <div className="public-section-shell">
          <span className="public-section-kicker">
            Decision context
          </span>

          <h2 className="public-section__title">
            Understand why an autonomous action matters before deciding what happens next.
          </h2>

          <div className="capability-context-grid">
            {riskContext.map((item) => (
              <article key={item.title}>
                <span>{item.title}</span>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AigoCapabilityDemo mode="risk" />

      <section className="capability-detail__conversion">
        <div>
          <span>Put risk in context</span>
          <h2>
            Connect technical signals to the authority and business significance behind AI activity.
          </h2>
        </div>

        <Link href="/contact?intent=demo">
          Request a Demo
        </Link>
      </section>
    </div>
  );
}


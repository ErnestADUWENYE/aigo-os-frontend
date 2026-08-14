import Link from "next/link";

import { AigoCapabilityDemo } from "@/components/aigo-capability-demo";

const passportContext = [
  {
    title: "Identity",
    body:
      "Establish which AI system, agent, model-enabled service or automation is being governed instead of relying on disconnected identifiers from individual tools.",
  },
  {
    title: "Ownership",
    body:
      "Connect the AI actor to accountable organizational context so governance does not stop at technical discovery.",
  },
  {
    title: "Provenance",
    body:
      "Preserve where identity and governance context originated and how the actor was resolved across connected sources.",
  },
  {
    title: "Relationships",
    body:
      "Represent dependencies and relationships that can change the significance, authority and risk of autonomous activity.",
  },
  {
    title: "Lifecycle",
    body:
      "Maintain governance state as the actor is introduced, changed, operated, restricted or retired.",
  },
  {
    title: "Governance context",
    body:
      "Give authority, risk, decision and evidence services a consistent identity foundation to evaluate.",
  },
];

export default function Page() {
  return (
    <div className="capability-detail">
      <section className="capability-detail__hero">
        <div className="capability-detail__hero-shell">
          <span className="capability-detail__kicker">
            Actor Passports
          </span>

          <h1>
            AI inventory tells you what exists. Governance needs to know what it is.
          </h1>

          <p>
            AIGO-OS creates a persistent governance identity for each AI actor,
            connecting technical identity with ownership, provenance,
            relationships, lifecycle and operating context.
          </p>

          <div className="capability-detail__actions">
            <Link href="/contact?intent=demo">
              Request a Demo
            </Link>

            <Link href="/product">
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
                What is an AI actor?
              </span>

              <h2>
                The governed entity behind autonomous activity.
              </h2>
            </div>

            <div className="capability-story-copy">
              <p>
                An AI actor is the AI system or AI-enabled component whose
                activity must be understood and governed. Depending on the
                environment, that may include an agent, an AI-enabled service,
                an automation or another system exercising machine-driven
                capability.
              </p>

              <p>
                The problem is not simply finding another asset. Governance
                needs a stable way to connect that actor to who owns it, why it
                exists, what it depends on, what authority applies and what
                evidence belongs to its decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="public-section">
        <div className="public-section-shell">
          <span className="public-section-kicker">
            The passport
          </span>

          <h2 className="public-section__title">
            One governance identity. Context that follows the actor.
          </h2>

          <div className="capability-context-grid">
            {passportContext.map((item) => (
              <article key={item.title}>
                <span>{item.title}</span>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AigoCapabilityDemo mode="passport" />

      <section className="capability-detail__conversion">
        <div>
          <span>Govern the AI estate</span>
          <h2>
            Establish the identity layer that authority, risk and accountability depend on.
          </h2>
        </div>

        <Link href="/contact?intent=demo">
          Request a Demo
        </Link>
      </section>
    </div>
  );
}


import {
  ContactIntent,
  DemoRequestForm,
} from "@/components/demo-request-form";

type ContactPageProps = {
  searchParams: Promise<{
    intent?: string | string[];
  }>;
};

const pageContent: Record<
  ContactIntent,
  {
    eyebrow: string;
    title: string;
    lead: string;
    sectionKicker: string;
    sectionTitle: string;
    reasons: string[];
  }
> = {
  demo: {
    eyebrow: "AIGO-OS ENTERPRISE DEMO",
    title: "See how AIGO-OS governs autonomous AI action in production.",
    lead:
      "Bring us the governance problem. We will show how AIGO-OS establishes actor context, evaluates authority and risk, makes a governance decision and preserves the evidence.",
    sectionKicker: "WHERE THE CONVERSATION STARTS",
    sectionTitle:
      "A demo should answer a governance question, not replay a sales deck.",
    reasons: [
      "Govern AI agents taking consequential enterprise actions",
      "Establish machine authority and operating boundaries",
      "Evaluate action risk before execution",
      "Create reconstructable governance evidence",
    ],
  },

  evaluation: {
    eyebrow: "AIGO-OS ENTERPRISE EVALUATION",
    title: "Evaluate governance against the AI you actually operate.",
    lead:
      "Use a real governance problem to examine how AIGO-OS identifies actors, establishes authority, evaluates risk and produces evidence before and after consequential AI action.",
    sectionKicker: "WHAT TO EVALUATE",
    sectionTitle:
      "Move beyond governance claims. Test the operating model.",
    reasons: [
      "Evaluate governance against representative AI actions",
      "Test authority and policy boundaries",
      "Examine risk-informed decision paths",
      "Inspect the resulting governance evidence",
    ],
  },

  deployment: {
    eyebrow: "AIGO-OS DEPLOYMENT",
    title: "Put governance where enterprise AI operates.",
    lead:
      "Discuss the systems, integrations, controls and operating boundaries required to introduce AIGO-OS into your enterprise environment.",
    sectionKicker: "DEPLOYMENT CONVERSATION",
    sectionTitle:
      "Start with the operating environment, not a generic architecture diagram.",
    reasons: [
      "Map AI systems and enterprise integration points",
      "Define governance and authority boundaries",
      "Establish deployment and security requirements",
      "Plan an evaluation-to-production path",
    ],
  },

  commercial: {
    eyebrow: "AIGO-OS COMMERCIAL",
    title: "Build the commercial path around the governance requirement.",
    lead:
      "Discuss evaluation scope, deployment expectations, procurement requirements and the commercial structure for adopting AIGO-OS.",
    sectionKicker: "COMMERCIAL PATH",
    sectionTitle:
      "Align scope, evaluation and procurement around the operating requirement.",
    reasons: [
      "Define enterprise scope",
      "Structure an evaluation",
      "Discuss procurement requirements",
      "Plan the path toward deployment",
    ],
  },

  contact: {
    eyebrow: "CONTACT AIGO-OS",
    title: "Start with the governance problem.",
    lead:
      "Tell us what your organization is building, operating or trying to govern. We will route the conversation to the right place.",
    sectionKicker: "WHY ORGANIZATIONS CONTACT US",
    sectionTitle:
      "AIGO-OS is built around consequential AI action.",
    reasons: [
      "Enterprise AI governance",
      "Product and technical evaluation",
      "Deployment and integration",
      "Commercial or strategic inquiry",
    ],
  },
};

function resolveIntent(value?: string | string[]): ContactIntent {
  const candidate = Array.isArray(value) ? value[0] : value;

  if (
    candidate === "demo" ||
    candidate === "evaluation" ||
    candidate === "deployment" ||
    candidate === "commercial"
  ) {
    return candidate;
  }

  return "contact";
}

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const params = await searchParams;
  const intent = resolveIntent(params.intent);
  const selected = pageContent[intent];

  return (
    <div className="contact-sales aigo-demo-page">
      <section className="aigo-demo-page__hero">
        <div className="aigo-demo-page__shell">
          <div className="aigo-demo-page__copy">
            <span className="aigo-demo-page__eyebrow">
              {selected.eyebrow}
            </span>

            <h1>{selected.title}</h1>

            <p>{selected.lead}</p>

            <div className="aigo-demo-page__sequence">
              <div>
                <span>01</span>
                <strong>Identify the actor</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Verify authority</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Evaluate action risk</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Decide before execution</strong>
              </div>

              <div>
                <span>05</span>
                <strong>Preserve the receipt</strong>
              </div>
            </div>
          </div>

          <DemoRequestForm intent={intent} />
        </div>
      </section>

      <section className="aigo-demo-page__fit">
        <div className="public-section-shell">
          <span className="public-section-kicker">
            {selected.sectionKicker}
          </span>

          <h2>{selected.sectionTitle}</h2>

          <div className="aigo-demo-page__reason-grid">
            {selected.reasons.map((reason, index) => (
              <div key={reason}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{reason}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

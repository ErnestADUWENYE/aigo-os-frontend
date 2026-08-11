import Link from "next/link";

import { DemoRequestForm } from "@/components/demo-request-form";

const reasons = [
  "Govern AI agents taking consequential enterprise actions",
  "Establish machine authority and operating boundaries",
  "Evaluate action risk before execution",
  "Create reconstructable governance evidence",
];

export default function ContactPage() {
  return (
    <div className="contact-sales aigo-demo-page">
      <section className="aigo-demo-page__hero">
        <div className="aigo-demo-page__shell">
          <div className="aigo-demo-page__copy">
            <span className="aigo-demo-page__eyebrow">
              AIGO-OS ENTERPRISE DEMO
            </span>

            <h1>
              See how AIGO-OS governs autonomous AI action in production.
            </h1>

            <p>
              Bring us the governance problem. We will show how AIGO-OS
              establishes actor context, evaluates authority and risk,
              makes a governance decision and preserves the evidence.
            </p>

            <div className="aigo-demo-page__sequence">
              <div><span>01</span><strong>Identify the actor</strong></div>
              <div><span>02</span><strong>Verify authority</strong></div>
              <div><span>03</span><strong>Evaluate action risk</strong></div>
              <div><span>04</span><strong>Decide before execution</strong></div>
              <div><span>05</span><strong>Preserve the receipt</strong></div>
            </div>
          </div>

          <DemoRequestForm />
        </div>
      </section>

      <section className="aigo-demo-page__fit">
        <div className="public-section-shell">
          <span className="public-section-kicker">
            Where the conversation starts
          </span>

          <h2>
            A demo should answer a governance question, not replay a sales deck.
          </h2>

          <div className="aigo-demo-page__reason-grid">
            {reasons.map((reason, index) => (
              <div key={reason}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{reason}</strong>
              </div>
            ))}
          </div>

          <p className="aigo-demo-page__contact">
            Have a different inquiry?{" "}
            <Link href="mailto:hello@aigo-os.com">
              Contact AIGO-OS
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

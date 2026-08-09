import Link from "next/link";

const reasons = [
  "Explore AIGO-OS for an enterprise AI governance initiative",
  "Discuss AI agent governance and governed autonomy",
  "Evaluate participation in the Design Partner Program",
  "Discuss integration, security or architecture requirements",
];

export default function ContactPage() {
  return (
    <div className="contact-sales">
      <section className="contact-sales__hero">
        <div className="contact-sales__shell">
          <div className="contact-sales__copy">
            <span>Start a conversation</span>

            <h1>
              Your AI is becoming more autonomous. Let us talk about
              how you intend to govern it.
            </h1>

            <p>
              Tell us what your organization is building, where AI is
              operating and which governance problems are becoming
              difficult to solve with existing approaches.
            </p>
          </div>

          <div className="contact-sales__panel">
            <span className="contact-sales__panel-label">
              Talk to AIGO-OS
            </span>

            <h2>
              Start with the governance problem.
            </h2>

            <p>
              We are particularly interested in organizations working
              with AI agents, autonomous workflows and complex
              enterprise AI environments.
            </p>

            <a
              className="contact-sales__email"
              href="mailto:hello@aigo-os.com"
            >
              hello@aigo-os.com
              <span aria-hidden="true">→</span>
            </a>

            <small>
              Replace this address before launch if your production
              contact address is different.
            </small>
          </div>
        </div>
      </section>

      <section className="contact-sales__reasons public-light">
        <div className="public-section-shell">
          <span className="public-section-kicker">
            Reasons to connect
          </span>

          <div className="contact-sales__reason-grid">
            {reasons.map((reason, index) => (
              <div key={reason}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{reason}</strong>
              </div>
            ))}
          </div>

          <div className="contact-sales__partner">
            <div>
              <span>Building now?</span>
              <strong>
                Design Partners work more closely with us on real
                operating requirements and high-value use cases.
              </strong>
            </div>

            <Link href="/design-partners">
              Explore the program
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
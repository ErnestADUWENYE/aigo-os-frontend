import Link from "next/link";

type UseCaseSection = {
  title: string;
  body: string;
};

type UseCasePageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  problemTitle: string;
  problemBody: string;
  existingControls: UseCaseSection[];
  aigoCapabilities: UseCaseSection[];
  businessOutcomes: string[];
  decisionContext: string[];
  closingTitle: string;
};

export function AigoUseCasePage({
  eyebrow,
  title,
  lead,
  problemTitle,
  problemBody,
  existingControls,
  aigoCapabilities,
  businessOutcomes,
  decisionContext,
  closingTitle,
}: UseCasePageProps) {
  return (
    <div className="aigo-use-case-page">
      <section className="aigo-use-case-page__hero">
        <div className="aigo-public-shell">
          <span className="aigo-public-kicker">
            SOLUTIONS
          </span>

          <div className="aigo-use-case-page__pill">
            BY USE CASE
          </div>

          <span className="aigo-use-case-page__eyebrow">
            {eyebrow}
          </span>

          <h1>{title}</h1>

          <p>{lead}</p>

          <div className="aigo-public-actions">
            <Link
              className="aigo-public-button aigo-public-button--primary"
              href="/contact?intent=demo"
            >
              Request a Demo
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
      </section>

      <section className="aigo-use-case-page__problem">
        <div className="aigo-public-shell aigo-use-case-page__split">
          <div>
            <span className="aigo-public-kicker">
              THE GOVERNANCE PROBLEM
            </span>

            <h2>{problemTitle}</h2>
          </div>

          <div>
            <p>{problemBody}</p>
          </div>
        </div>
      </section>

      <section className="aigo-use-case-page__controls">
        <div className="aigo-public-shell">
          <div className="aigo-public-section-heading">
            <div>
              <span className="aigo-public-kicker">
                WHY EXISTING CONTROLS ARE NOT THE WHOLE ANSWER
              </span>

              <h2>
                Important controls remain necessary.
                <span>The governance question goes further.</span>
              </h2>
            </div>

            <p>
              AIGO-OS is designed to work with identity, security,
              observability, policy and other enterprise controls rather than
              pretend they no longer matter.
            </p>
          </div>

          <div className="aigo-use-case-page__control-grid">
            {existingControls.map((item) => (
              <article key={item.title}>
                <span>{item.title}</span>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aigo-use-case-page__aigo">
        <div className="aigo-public-shell">
          <span className="aigo-public-kicker">
            HOW AIGO-OS RESPONDS
          </span>

          <h2>
            Bring the governance context together
            <span>before deciding what happens next.</span>
          </h2>

          <div className="aigo-use-case-page__capability-flow">
            {aigoCapabilities.map((item, index) => (
              <article key={item.title}>
                <div>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <small>{item.title}</small>
                </div>

                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aigo-use-case-page__decision">
        <div className="aigo-public-shell aigo-use-case-page__decision-grid">
          <div>
            <span className="aigo-public-kicker">
              GOVERNANCE DECISION
            </span>

            <h2>
              Context determines the response.
            </h2>

            <p>
              AIGO-OS can bring the relevant governance context together to
              support explainable outcomes rather than treating every
              autonomous action the same way.
            </p>
          </div>

          <div>
            {decisionContext.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>

          <div className="aigo-use-case-page__outcomes">
            <span>AVAILABLE GOVERNANCE OUTCOMES</span>

            <div>
              <strong>ALLOW</strong>
              <strong>DENY</strong>
              <strong>REVIEW REQUIRED</strong>
              <strong>ESCALATE</strong>
              <strong>SUSPEND</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="aigo-use-case-page__business">
        <div className="aigo-public-shell">
          <span className="aigo-public-kicker">
            BUSINESS SIGNIFICANCE
          </span>

          <h2>
            The governance issue is not only technical.
          </h2>

          <div className="aigo-use-case-page__business-grid">
            {businessOutcomes.map((item) => (
              <article key={item}>
                <i aria-hidden="true" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aigo-use-case-page__final">
        <div className="aigo-public-shell aigo-use-case-page__final-grid">
          <div>
            <span className="aigo-public-kicker">
              SEE AIGO-OS IN YOUR ENVIRONMENT
            </span>

            <h2>{closingTitle}</h2>
          </div>

          <div>
            <p>
              Explore how AIGO-OS can connect identity, authority, business
              significance, risk, governance decisions and evidence around
              this use case.
            </p>

            <Link
              className="aigo-public-button aigo-public-button--primary"
              href="/contact?intent=demo"
            >
              Request a Demo
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


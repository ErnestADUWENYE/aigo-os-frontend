import Link from "next/link";

const partnerBenefits = [
  "Shape priority governance workflows around real enterprise environments.",
  "Influence integration and operating requirements before broad availability.",
  "Work directly with the AIGO-OS team on high-value governance scenarios.",
  "Establish an early path toward governed autonomy inside your organization.",
];

export function DesignPartnerSection() {
  return (
    <section className="design-partner-home">
      <div className="design-partner-home__shell">
        <div className="design-partner-home__copy">
          <span className="design-partner-home__kicker">
            Design Partner Program
          </span>

          <h2>
            Help define how autonomous AI should be governed in production.
          </h2>

          <p>
            We are working with forward-looking enterprises to develop
            AIGO-OS against real governance problems, operating
            environments and autonomous AI use cases.
          </p>

          <div className="design-partner-home__actions">
            <Link
              className="design-partner-home__primary"
              href="/design-partners"
            >
              Become a Design Partner
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              className="design-partner-home__secondary"
              href="/contact"
            >
              Talk to AIGO-OS
            </Link>
          </div>
        </div>

        <div className="design-partner-home__panel">
          <div className="design-partner-home__panel-head">
            <span>Early enterprise collaboration</span>
            <i />
          </div>

          <div className="design-partner-home__benefits">
            {partnerBenefits.map((benefit, index) => (
              <div key={benefit}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>

          <div className="design-partner-home__fit">
            <span>Best suited for</span>
            <strong>
              Enterprises actively deploying or preparing to deploy
              AI agents and other autonomous AI systems.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
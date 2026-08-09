import Link from "next/link";

const services = [
  {
    name: "Public website",
    description: "AIGO-OS public information and product experience.",
  },
  {
    name: "Application",
    description: "Authenticated AIGO-OS product services.",
  },
  {
    name: "Governance services",
    description: "Core governance processing and operating services.",
  },
  {
    name: "Integrations",
    description: "Connectivity between AIGO-OS and enterprise systems.",
  },
];

export default function StatusPage() {
  return (
    <main className="status-page">
      <section className="status-page__hero">
        <div className="status-page__shell">
          <span className="status-page__eyebrow">
            AIGO-OS STATUS
          </span>

          <h1>Platform status.</h1>

          <p>
            Operational information for AIGO-OS services will be published
            here as production monitoring and service reporting come online.
          </p>
        </div>
      </section>

      <section className="status-page__body public-light">
        <div className="status-page__shell">
          <div className="status-page__summary">
            <div>
              <span>Current reporting state</span>
              <strong>Pre-production</strong>
            </div>

            <p>
              AIGO-OS is not publishing production availability metrics yet.
              We will not display synthetic uptime history or fabricated
              operational performance.
            </p>
          </div>

          <div className="status-page__services">
            <div className="status-page__services-head">
              <span>Service</span>
              <span>Reporting</span>
            </div>

            {services.map((service) => (
              <div
                className="status-page__service"
                key={service.name}
              >
                <div>
                  <strong>{service.name}</strong>
                  <p>{service.description}</p>
                </div>

                <span>Monitoring planned</span>
              </div>
            ))}
          </div>

          <div className="status-page__future">
            <span className="public-section-kicker">
              Production readiness
            </span>

            <h2>
              This page will become operational, not decorative.
            </h2>

            <p>
              Before production launch, status reporting should be connected
              to the actual monitoring and incident-management environment so
              availability and incidents reflect real service state.
            </p>

            <div>
              <Link href="/trust">
                Visit the Trust Center
                <span aria-hidden="true">→</span>
              </Link>

              <Link href="/contact">
                Contact AIGO-OS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
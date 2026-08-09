import Link from "next/link";

const documents = [
  {
    title: "Privacy",
    text:
      "Our public framework for website privacy and the handling of business communications.",
    href: "/privacy",
  },
  {
    title: "Terms",
    text:
      "The initial terms governing use of the AIGO-OS public website and informational materials.",
    href: "/terms",
  },
  {
    title: "Cookies",
    text:
      "Information about the intended use of cookies and similar website technologies.",
    href: "/cookies",
  },
  {
    title: "Responsible Disclosure",
    text:
      "The public path for reporting potential security issues responsibly.",
    href: "/responsible-disclosure",
  },
];

export default function LegalPage() {
  return (
    <main className="legal-index public-light">
      <section className="legal-index__hero">
        <div className="legal-index__shell">
          <span className="public-section-kicker">
            AIGO-OS Legal
          </span>

          <h1>
            Clear terms for a consequential technology.
          </h1>

          <p>
            Find the public policies and notices governing the AIGO-OS
            website, privacy practices and responsible security reporting.
          </p>
        </div>
      </section>

      <section className="legal-index__documents">
        <div className="legal-index__shell">
          <div className="legal-index__heading">
            <span className="public-section-kicker">
              Documents
            </span>

            <h2>Public policies and notices.</h2>
          </div>

          <div className="legal-index__grid">
            {documents.map((document, index) => (
              <article key={document.title}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{document.title}</h3>
                <p>{document.text}</p>

                <Link href={document.href}>
                  Read document
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="legal-index__notice">
            <div>
              <span className="public-section-kicker">
                Pre-launch notice
              </span>

              <h2>Final legal review remains a launch requirement.</h2>
            </div>

            <p>
              These pages establish the public information architecture.
              Production legal language should be reviewed against the final
              product, hosting, analytics, authentication and data-processing
              configuration before AIGO-OS goes live.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
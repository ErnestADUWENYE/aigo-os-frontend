import Link from "next/link";

export default function Page() {
  return (
    <article className="legal-page public-light">
      <header className="legal-page__header">
        <div className="legal-page__header-shell">
          <span className="public-section-kicker">
            AIGO-OS
          </span>

          <h1>Responsible Disclosure</h1>

          <p>
            AIGO-OS takes the security of its systems and services seriously. This page provides the foundation for responsible reporting of potential security issues.
          </p>
        </div>
      </header>

      <div className="legal-page__body">
        <aside>
          <span>Document status</span>
          <strong>Pre-launch</strong>
          <small>
            Final legal language should be reviewed before production
            launch.
          </small>
        </aside>

        <div className="legal-page__content">
          <section>
            <h2>Purpose</h2>
            <p>
              AIGO-OS is currently being prepared for public launch.
              This document establishes the public structure for this
              policy area while final production language is completed.
            </p>
          </section>

          <section>
            <h2>Our approach</h2>
            <p>
              We intend to operate AIGO-OS with clear enterprise
              standards for security, privacy, accountability and
              responsible handling of information.
            </p>
          </section>

          <section>
            <h2>Questions</h2>
            <p>
              Organizations evaluating AIGO-OS can contact us directly
              for questions relating to this policy area or enterprise
              requirements.
            </p>

            <Link href="/contact">
              Contact AIGO-OS
              <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
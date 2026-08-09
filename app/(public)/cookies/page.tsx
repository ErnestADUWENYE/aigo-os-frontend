import Link from "next/link";

export default function CookiesPage() {
  return (
    <main className="policy-page public-light">
      <section className="policy-page__hero">
        <div className="policy-page__shell">
          <span className="public-section-kicker">Legal</span>
          <h1>Cookies</h1>
          <p>
            This notice explains the intended approach to cookies and similar
            technologies on the AIGO-OS public website.
          </p>
        </div>
      </section>

      <section className="policy-page__body">
        <div className="policy-page__shell policy-page__grid">
          <aside>
            <span>Document status</span>
            <strong>Pre-launch</strong>
            <p>
              This notice should be reviewed against the production analytics
              and consent configuration before launch.
            </p>
          </aside>

          <div className="policy-page__content">
            <section>
              <span>01</span>
              <h2>Essential technologies</h2>
              <p>
                AIGO-OS may use technologies required for security, session
                continuity, preferences and reliable operation of the website.
              </p>
            </section>

            <section>
              <span>02</span>
              <h2>Analytics</h2>
              <p>
                If analytics are enabled, this notice should identify the
                technologies used, their purpose and the choices available to
                visitors. We will not describe analytics tooling as active
                until the production configuration is known.
              </p>
            </section>

            <section>
              <span>03</span>
              <h2>Consent and preferences</h2>
              <p>
                Where consent is required, visitors should be given an
                appropriate way to make and revise their choices.
              </p>
            </section>

            <section>
              <span>04</span>
              <h2>Questions</h2>
              <p>
                Questions about website privacy or data practices can be
                directed to AIGO-OS.
              </p>

              <Link href="/contact">
                Contact AIGO-OS
                <span aria-hidden="true">→</span>
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="aigo-auth-shell">
      <section className="aigo-auth-shell__brand">
        <div className="aigo-brand-lockup">
          <div className="aigo-brand-mark" aria-hidden="true">
            AI
          </div>

          <div>
            <div className="aigo-brand-name">AIGO OS</div>
            <div className="aigo-brand-caption">
              AI Governance Operating System
            </div>
          </div>
        </div>

        <div>
          <p className="aigo-auth-shell__eyebrow">
            Secure enterprise access
          </p>
          <h1 className="aigo-auth-shell__title">
            Govern AI with confidence.
          </h1>
          <p className="aigo-auth-shell__description">
            Machine first. Human by exception. Traceability always.
          </p>
        </div>
      </section>

      <section className="aigo-auth-shell__content">
        {children}
      </section>
    </main>
  );
}

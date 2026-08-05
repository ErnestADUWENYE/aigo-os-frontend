export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="aigo-public-shell">
      <header className="aigo-public-shell__header">
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
      </header>

      <main>{children}</main>
    </div>
  );
}

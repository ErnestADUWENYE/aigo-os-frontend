import {
  CircleUserRound,
  Network,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

import { BrandLockup } from "../../design-system/branding/BrandLockup";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Governance by design",
    description:
      "Policy, accountability and control embedded into AI operations.",
  },
  {
    icon: ScanSearch,
    title: "Continuous assurance",
    description:
      "Observe AI behavior, evidence and governance posture continuously.",
  },
  {
    icon: Network,
    title: "Enterprise-wide visibility",
    description:
      "Connect AI systems, teams, risk and oversight in one operating environment.",
  },
  {
    icon: CircleUserRound,
    title: "Human accountability",
    description:
      "Automate routine governance while preserving human control.",
  },
];

export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="aigo-login">
      <section className="aigo-login__brand">
        <div className="aigo-login__grid" />
        <div className="aigo-login__orb aigo-login__orb--one" />
        <div className="aigo-login__orb aigo-login__orb--two" />

        <div className="aigo-login__brand-inner">
          <div className="aigo-login__logo">
            <BrandLockup
              size="sm"
              tone="dark"
            />
          </div>

          <div className="aigo-login__hero">
            <div className="aigo-login__pill">
              <ShieldCheck size={15} />
              Secure enterprise access
            </div>

            <h1>
              Govern AI
              <span>with confidence.</span>
            </h1>

            <p className="aigo-login__lead">
              AIGO-OS brings AI governance, assurance,
              accountability and operational control into
              one trusted enterprise environment.
            </p>

            <div className="aigo-login__capability-grid">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className="aigo-login__capability"
                    key={item.title}
                  >
                    <div className="aigo-login__capability-icon">
                      <Icon size={21} />
                    </div>

                    <h2>{item.title}</h2>

                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="aigo-login__principles">
              <span>Machine first</span>
              <span>Human by exception</span>
              <span>Traceability always</span>
            </div>
          </div>
        </div>
      </section>

      <section className="aigo-login__access">
        <div className="aigo-login__mesh aigo-login__mesh--top" />
        <div className="aigo-login__mesh aigo-login__mesh--bottom" />

        <div className="aigo-login__access-inner">
          {children}

          <p className="aigo-login__security-copy">
            Your access is protected by enterprise-grade
            authentication and AIGO-OS authorization
            policies.
          </p>
        </div>
      </section>
    </main>
  );
}

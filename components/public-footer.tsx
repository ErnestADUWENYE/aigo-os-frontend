import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Platform",
    links: [
      ["Platform Overview", "/product"],
      ["Actor Passports", "/product/actor-passports"],
      ["Machine Authority", "/product/authority"],
      ["Risk Intelligence", "/product/risk-intelligence"],
      ["Governance Receipts", "/product/governance-receipts"],
      ["Integrations", "/integrations"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Solutions Overview", "/solutions"],
      ["AI Agent Governance", "/solutions/ai-agents"],
      ["Enterprise AI", "/solutions/enterprise-ai"],
      ["Governed Autonomy", "/solutions/governed-autonomy"],
      ["Design Partners", "/design-partners"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Resources", "/resources"],
      ["AI Governance", "/resources/ai-governance"],
      ["Governed Autonomy", "/resources/governed-autonomy"],
      ["Actor Passports", "/resources/actor-passports"],
      ["Machine Authority", "/resources/authority"],
      ["Documentation", "/documentation"],
    ],
  },
  {
    title: "Trust",
    links: [
      ["Trust Center", "/trust"],
      ["Security", "/security"],
      ["Platform Status", "/status"],
      ["Responsible Disclosure", "/responsible-disclosure"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About AIGO-OS", "/company"],
      ["Commercial Model", "/pricing"],
      ["Contact", "/contact"],
      ["Sign in", "/sign-in"],
    ],
  },
];

export function PublicFooter() {
  return (
    <footer className="public-footer">
      <div className="public-footer__conversion">
        <div className="public-footer__conversion-inner">
          <div>
            <span>GOVERN THE NEXT OPERATING LAYER</span>

            <h2>
              Your AI is becoming more autonomous.
              <br />
              Its governance has to become operational.
            </h2>
          </div>

          <div className="public-footer__conversion-actions">
            <Link href="/design-partners">
              Become a Design Partner
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/product">
              Explore AIGO-OS
            </Link>
          </div>
        </div>
      </div>

      <div className="public-footer__shell">
        <div className="public-footer__top">
          <div className="public-footer__brand">
            <Link
              aria-label="AIGO-OS home"
              className="public-footer__logo-link"
              href="/"
            >
              <Image
                alt="AIGO-OS"
                className="public-footer__logo"
                height={78}
                src="/branding/aigo-os-logo-dark.png"
                width={150}
              />
            </Link>

            <p>
              The governance operating layer for autonomous enterprise AI.
            </p>

            <div className="public-footer__principle">
              <span>Machine first.</span>
              <span>Human by exception.</span>
              <span>Traceability always.</span>
            </div>
          </div>

          <div className="public-footer__columns">
            {footerColumns.map((column) => (
              <div
                className="public-footer__column"
                key={column.title}
              >
                <span>{column.title}</span>

                {column.links.map(([label, href]) => (
                  <Link href={href} key={href}>
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="public-footer__bottom">
          <span>
            © {new Date().getFullYear()} AIGO-OS. All rights reserved.
          </span>

          <div>
            <Link href="/legal">Legal</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
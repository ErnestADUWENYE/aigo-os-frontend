import Link from "next/link";

const groups = [
  {
    label: "Platform",
    items: [
      { href: "/platform", label: "Platform Overview" },
      { href: "/platform/actor-passports", label: "Actor Passports" },
      { href: "/platform/machine-authority", label: "Authority" },
      { href: "/platform", label: "Risk Intelligence" },
      { href: "/platform/governance-receipts", label: "Governance Receipts" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { href: "/solutions", label: "Solutions Overview" },
      { href: "/solutions/ai-agents", label: "AI Agents" },
      { href: "/solutions/enterprise-ai", label: "Enterprise AI" },
      { href: "/solutions/governed-autonomy", label: "Governed Autonomy" },
      { href: "/security", label: "Security & Trust" },
    ],
  },
  {
    label: "Explore",
    items: [
      { href: "/integrations", label: "Integrations" },
      { href: "/resources", label: "Resources" },
      { href: "/company", label: "Company" },
      { href: "/get-started", label: "Get Started" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function PublicMegaMenu() {
  return (
    <div className="public-mega-menu">
      <div className="public-mega-menu__intro">
        <span className="public-mega-menu__eyebrow">
          AIGO-OS
        </span>

        <strong>
          Governance infrastructure for autonomous enterprise AI.
        </strong>

        <p>
          Discover AI actors, establish identity and authority,
          interpret risk in context, govern decisions and preserve
          traceable evidence.
        </p>

        <Link href="/platform">
          Explore the platform <span aria-hidden="true">Ã¢â€ â€™</span>
        </Link>
      </div>

      <div className="public-mega-menu__groups">
        {groups.map((group) => (
          <div className="public-mega-menu__group" key={group.label}>
            <span className="public-mega-menu__label">
              {group.label}
            </span>

            {group.items.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="public-mega-menu__signal">
        <span>Governed autonomy</span>
        <strong>Machine first.</strong>
        <strong>Human by exception.</strong>
        <strong>Traceability always.</strong>
      </div>
    </div>
  );
}

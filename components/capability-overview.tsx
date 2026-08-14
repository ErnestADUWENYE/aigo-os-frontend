import Link from "next/link";

const useCases = [
  {
    number: "01",
    title: "Establish Accountable AI Identity",
    href: "/solutions/accountable-ai-identity",
    description:
      "Resolve fragmented AI identities and technical representations into accountable organisational context.",
  },
  {
    number: "02",
    title: "Assess Excessive Agency",
    href: "/solutions/excessive-agency",
    description:
      "Assess where AI authority, functionality or autonomy extends beyond its intended purpose or operating conditions.",
  },
  {
    number: "03",
    title: "Assess AI Authority & Privilege",
    href: "/solutions/ai-authority-privilege",
    description:
      "Understand the permissions, access and delegated authority available to an AI Actor in enterprise context.",
  },
  {
    number: "04",
    title: "Establish Human Oversight",
    href: "/solutions/human-oversight",
    description:
      "Bring accountable human judgment into AI activity when governance, consequence or authority requires it.",
  },
  {
    number: "05",
    title: "Prioritise AI Governance",
    href: "/solutions/prioritise-ai-governance",
    description:
      "Focus governance attention where AI authority and activity carry the greatest business significance.",
  },
  {
    number: "06",
    title: "Build AI Governance Evidence",
    href: "/solutions/ai-governance-evidence",
    description:
      "Preserve AI context, authority and governance decisions for traceability, assurance and audit.",
  },
];

export function CapabilityOverview() {
  return (
    <section className="aigo-public-usecases">
      <div className="aigo-public-shell">
        <div className="aigo-public-section-heading">
          <div>
            <span className="aigo-public-kicker">
              SOLUTIONS
            </span>

            <div className="aigo-public-pill">
              BY USE CASE
            </div>

            <h2>
              Govern the problems that emerge
              <span> when AI begins to act.</span>
            </h2>
          </div>

          <p>
            Address recognised enterprise AI governance challenges with connected organisational context.
            AIGO-OS brings identity, authority, business significance, risk,
            policy, decisioning and evidence together around each one.
          </p>
        </div>

        <div className="aigo-public-usecases__grid">
          {useCases.map((item) => (
            <Link href={item.href} key={item.href}>
              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <strong>
                Explore use case
                <i
                  aria-hidden="true"
                  className="aigo-ui-arrow"
                />
              </strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


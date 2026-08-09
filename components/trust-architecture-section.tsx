import Link from "next/link";

const trustLayers = [
  {
    number: "01",
    label: "Observe",
    title: "Connect without becoming the system of record.",
    description:
      "AIGO-OS is designed to consume governance-relevant signals from the systems where AI already operates rather than requiring the enterprise to rebuild its environment around a new control plane.",
  },
  {
    number: "02",
    label: "Interpret",
    title: "Separate governance context from raw operational data.",
    description:
      "Identity, authority, risk and relationships are correlated into governance context so decisions can be made without turning every source system into a governance engine.",
  },
  {
    number: "03",
    label: "Decide",
    title: "Apply policy at the point it matters.",
    description:
      "Governance decisions can evaluate actor identity, effective authority, risk and business context before consequential autonomous activity proceeds.",
  },
  {
    number: "04",
    label: "Evidence",
    title: "Preserve what governance knew and decided.",
    description:
      "Governance receipts provide a reconstructable record of the context, policy decision and resulting action for assurance and investigation.",
  },
];

export function TrustArchitectureSection() {
  return (
    <section className="trust-architecture">
      <div className="trust-architecture__shell">
        <div className="trust-architecture__heading">
          <div>
            <span className="trust-architecture__kicker">
              Built for enterprise trust
            </span>

            <h2>
              Governance infrastructure has to be trusted before it can govern.
            </h2>
          </div>

          <div>
            <p>
              AIGO-OS is being designed as an operating governance layer that
              works with existing enterprise systems, keeps decision context
              explicit and makes consequential governance actions traceable.
            </p>

            <Link href="/trust">
              Visit the Trust Center
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="trust-architecture__system">
          <div className="trust-architecture__boundary">
            <span>Enterprise environment</span>

            <div>
              <strong>AI platforms</strong>
              <strong>Identity</strong>
              <strong>Security</strong>
              <strong>Data</strong>
              <strong>Business systems</strong>
            </div>
          </div>

          <div className="trust-architecture__rail">
            <i />
            <i />
            <i />
            <span>Governance signals</span>
          </div>

          <div className="trust-architecture__core">
            <div className="trust-architecture__core-head">
              <span>AIGO-OS</span>
              <strong>Governance operating layer</strong>
            </div>

            <div className="trust-architecture__core-grid">
              <span>Identity</span>
              <span>Authority</span>
              <span>Risk</span>
              <span>Policy</span>
              <span>Decision</span>
              <span>Evidence</span>
            </div>
          </div>
        </div>

        <div className="trust-architecture__layers">
          {trustLayers.map((layer) => (
            <article key={layer.number}>
              <div>
                <span>{layer.number}</span>
                <small>{layer.label}</small>
              </div>

              <h3>{layer.title}</h3>
              <p>{layer.description}</p>
            </article>
          ))}
        </div>

        <div className="trust-architecture__links">
          <Link href="/security">
            Security architecture
            <span aria-hidden="true">&rarr;</span>
          </Link>

          <Link href="/documentation">
            Technical documentation
            <span aria-hidden="true">&rarr;</span>
          </Link>

          <Link href="/responsible-disclosure">
            Responsible disclosure
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
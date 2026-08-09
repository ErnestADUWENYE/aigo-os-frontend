const controls = [
  {
    title: "Tenant isolation",
    body:
      "Customer-owned records are scoped to the correct organization and workspace. Tenant boundaries are enforced by the backend, not inferred from interface state.",
  },
  {
    title: "Authorization by context",
    body:
      "Identity answers who the user is. Authorization determines whether that identity may perform an operation on a specific resource in the active tenant and workspace.",
  },
  {
    title: "Separated identities",
    body:
      "Customer users and AIGO-OS workforce identities remain technically and visibly distinct across application surfaces and access paths.",
  },
  {
    title: "Protected secrets",
    body:
      "Privileged credentials remain behind approved secret-management boundaries. Browser code does not contain retrievable privileged secrets.",
  },
  {
    title: "Traceable operations",
    body:
      "Administrative, governance and lifecycle activity can be captured through immutable or auditable records so changes and outcomes remain reviewable.",
  },
  {
    title: "Controlled integrations",
    body:
      "External connections are designed with validation, secret references, tenant-aware routing, replay protection, integrity checks and constrained execution.",
  },
];

const principles = [
  "Backend authorization remains the source of truth.",
  "Production, demo and development environments remain separated.",
  "Customer identities cannot access the AIGO-OS Admin Console.",
  "Tenant switching clears or invalidates tenant-bound frontend state.",
  "Security controls are designed into each development phase.",
  "Governance traceability is treated as a product requirement.",
];

export default function SecurityPage() {
  return (
    <div className="public-page security-page">
      <section className="public-page__hero security-hero">
        <div>
          <div className="public-page__eyebrow">
            Security & Trust
          </div>

          <h1 className="public-page__title">
            Governance infrastructure must be trusted before it can govern.
          </h1>

          <p className="public-page__lead">
            AIGO-OS is designed around explicit tenancy, contextual
            authorization, protected credentials, separated identities
            and traceable operations across customer and internal
            application surfaces.
          </p>
        </div>

        <div className="security-architecture">
          <div className="security-architecture__layer">
            <span>01</span>
            <strong>Identity</strong>
            <small>Authenticated user or service</small>
          </div>

          <i />

          <div className="security-architecture__layer">
            <span>02</span>
            <strong>Tenant context</strong>
            <small>Organization and workspace</small>
          </div>

          <i />

          <div className="security-architecture__layer">
            <span>03</span>
            <strong>Authorization</strong>
            <small>Operation and resource scope</small>
          </div>

          <i />

          <div className="security-architecture__layer">
            <span>04</span>
            <strong>Governed action</strong>
            <small>Auditable outcome</small>
          </div>
        </div>
      </section>

      <section className="public-section">
        <div className="public-section__eyebrow">
          Security architecture
        </div>

        <h2 className="public-section__title">
          Controls are part of the platform boundary.
        </h2>

        <p className="public-section__lead">
          AIGO-OS is built so security and tenancy are not optional
          features added after the product logic. They shape how users,
          services, integrations and governance operations interact.
        </p>

        <div className="security-control-grid">
          {controls.map((control, index) => (
            <article key={control.title}>
              <span>0{index + 1}</span>
              <h3>{control.title}</h3>
              <p>{control.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="public-section security-principles">
        <div>
          <div className="public-section__eyebrow">
            Trust principles
          </div>

          <h2 className="public-section__title">
            Clear boundaries. Explainable access. Reviewable outcomes.
          </h2>

          <p className="public-section__lead">
            The platform follows a small number of durable principles
            that keep identity, authorization, tenancy and governance
            responsibilities explicit.
          </p>
        </div>

        <div className="security-principles__list">
          {principles.map((principle) => (
            <div key={principle}>
              <span>&#10003;</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="security-disclosure">
        <div>
          <span>Trust transparency</span>
          <h2>
            Certification claims will be published only when they are true.
          </h2>
          <p>
            AIGO-OS will not present security certifications, audit
            reports or service guarantees as completed until those
            controls and independent validations are actually in place.
          </p>
        </div>
      </section>
    </div>
  );
}
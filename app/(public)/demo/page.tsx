import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="public-page demo-page">
      <section className="public-page__hero demo-hero">
        <div>
          <div className="public-page__eyebrow">
            Request a Demo
          </div>

          <h1 className="public-page__title">
            See how AIGO-OS governs enterprise AI.
          </h1>

          <p className="public-page__lead">
            We will walk through the AIGO-OS operating model and discuss
            how discovery, identity, authority, risk, governance
            decisions and traceability could apply to your environment.
          </p>

          <div className="demo-hero__actions">
            <Link href="/contact">
              Request a conversation
              <span aria-hidden="true">&rarr;</span>
            </Link>

            <Link href="/design-partners">
              Explore Design Partners
            </Link>
          </div>
        </div>

        <div className="demo-hero__panel">
          <span>What we can cover</span>

          <ul>
            <li>Enterprise AI discovery</li>
            <li>AI actor identity and passports</li>
            <li>Authority and machine boundaries</li>
            <li>Continuous risk intelligence</li>
            <li>Governance decisions and receipts</li>
            <li>Enterprise integration model</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
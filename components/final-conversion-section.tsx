import Link from "next/link";

export function FinalConversionSection() {
  return (
    <section className="aigo-public-final">
      <div className="aigo-public-shell aigo-public-final__inner">
        <div>
          <span className="aigo-public-kicker">
            GOVERN THE NEXT ERA OF ENTERPRISE AI
          </span>

          <h2>
            Consequential AI activity needs
            <span>
              identity, authority, governance reasoning and evidence.
            </span>
          </h2>
        </div>

        <div>
          <p>
            See how AIGO-OS connects discovery, authority, business
            significance, risk, governance decisions, supported execution
            and evidence across the enterprise AI lifecycle.
          </p>

          <Link
            className="aigo-public-button aigo-public-button--primary"
            href="/contact?intent=demo"
          >
            Request a Demo
            <span aria-hidden="true" className="aigo-ui-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}

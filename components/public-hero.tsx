import Link from "next/link";

import { GovernanceEngineVisual } from "@/components/governance-engine-visual";

export function PublicHero() {
  return (
    <section className="public-hero">
      <div className="public-hero__atmosphere" aria-hidden="true">
        <div className="public-hero__glow public-hero__glow--blue" />
        <div className="public-hero__glow public-hero__glow--gold" />
        <div className="public-hero__grid" />
      </div>

      <div className="public-hero__inner">
        <div className="public-hero__content">
          <div className="public-hero__eyebrow">
            <span className="public-hero__eyebrow-dot" />
            Autonomy-first AI governance
          </div>

          <h1 className="public-hero__title">
            Govern AI at the
            <span className="public-hero__title-accent">
              {" "}speed of autonomy.
            </span>
          </h1>

          <p className="public-hero__description">
            AIGO-OS discovers, understands and continuously governs
            enterprise AI, establishing identity, authority, risk and
            traceability across autonomous systems.
          </p>

          <div className="public-hero__actions">
            <Link
              className="public-hero__primary"
              href="/design-partners"
            >
              Become a Design Partner
              <span aria-hidden="true">&rarr;</span>
            </Link>

            <Link
              className="public-hero__secondary"
              href="/product"
            >
              Explore AIGO-OS
            </Link>
          </div>

          <div className="public-hero__principle">
            <span>Machine first.</span>
            <span>Human by exception.</span>
            <span>Traceability always.</span>
          </div>
        </div>

        <GovernanceEngineVisual />
      </div>

      <div className="public-hero__continuum">
        <span>Discover</span>
        <i />
        <span>Understand</span>
        <i />
        <span>Govern</span>
        <i />
        <span>Assure</span>
        <i />
        <span>Monitor</span>
      </div>
    </section>
  );
}
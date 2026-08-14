import Link from "next/link";

export default function Page() {
  return (
    <section className="aigo-corporate-page">
      <div className="aigo-home-shell aigo-corporate-page__inner">
        <p className="aigo-home-eyebrow">
          Careers
        </p>

        <h1>
          Build the control layer for autonomous AI.
        </h1>

        <p>
          AIGO-OS is building enterprise infrastructure
          for governing consequential AI actions across
          systems, tools and organizational boundaries.
        </p>

        <p>
          We are assembling the company deliberately.
          Current opportunities will be published here as
          roles become available.
        </p>

        <Link
          className="aigo-home-button aigo-home-button--primary"
          href="/contact"
        >
          Contact AIGO-OS
        </Link>
      </div>
    </section>
  );
}

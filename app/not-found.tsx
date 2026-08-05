import Link from "next/link";

export default function NotFound() {
  return (
    <main className="aigo-system-state">
      <section className="aigo-system-state__card">
        <div
          className="aigo-system-state__icon"
          aria-hidden="true"
        >
          404
        </div>

        <p className="aigo-system-state__eyebrow">
          Resource unavailable
        </p>

        <h1>Page not found.</h1>

        <p>
          The requested AIGO OS resource does not exist or is no longer
          available.
        </p>

        <Link className="aigo-button" href="/">
          Return to AIGO OS
        </Link>
      </section>
    </main>
  );
}

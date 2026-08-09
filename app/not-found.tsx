import Link from "next/link";

export default function NotFound() {
  return (
    <section className="public-not-found">
      <div className="public-not-found__background">
        <span />
        <span />
        <span />
      </div>

      <div className="public-not-found__shell">
        <div className="public-not-found__code">
          404
        </div>

        <span className="public-not-found__kicker">
          Unknown destination
        </span>

        <h1>
          This route is outside the known operating environment.
        </h1>

        <p>
          The page may have moved, may still be under development, or
          the address may be incorrect. Return to the AIGO-OS public
          site or continue exploring the platform.
        </p>

        <div className="public-not-found__actions">
          <Link
            className="public-not-found__primary"
            href="/"
          >
            Return home
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            className="public-not-found__secondary"
            href="/product"
          >
            Explore AIGO-OS
          </Link>
        </div>

        <div className="public-not-found__status">
          <span>
            <i />
            AIGO-OS
          </span>

          <strong>Route not found</strong>
        </div>
      </div>
    </section>
  );
}
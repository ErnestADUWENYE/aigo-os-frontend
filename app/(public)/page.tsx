import Link from "next/link";
import { redirect } from "next/navigation";

export default function HomePage() {
  const environment =
    process.env.NEXT_PUBLIC_AIGO_ENV ?? "local";

  if (environment === "demo") {
    redirect("/demo");
  }

  return (
    <main className="aigo-system-state">
      <section className="aigo-system-state__card">
        <p className="aigo-system-state__eyebrow">
          Local development
        </p>

        <h1>AIGO OS Development Workspace</h1>

        <p>
          This environment runs locally against the local API and
          local Supabase services.
        </p>

        <div className="aigo-local-links">
          <Link className="aigo-button" href="/demo">
            Design system
          </Link>

          <Link
            className="aigo-button"
            href="/console/dashboard"
          >
            Customer Console
          </Link>

          <Link
            className="aigo-button"
            href="/admin/dashboard"
          >
            Admin Console
          </Link>
        </div>
      </section>
    </main>
  );
}

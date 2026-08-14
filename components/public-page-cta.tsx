import Link from "next/link";

type PublicPageCtaProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function PublicPageCta({
  eyebrow = "Govern what comes next",
  title = "Bring autonomous AI under continuous governance.",
  description =
    "Explore how AIGO-OS governs enterprise AI across identity, authority, business significance, risk, decisions and evidence.",
}: PublicPageCtaProps) {
  return (
    <section className="public-page-cta">
      <div className="public-page-cta__shell">
        <div>
          <span>{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="public-page-cta__actions">
          <Link href="/contact?intent=demo">
            Request a Demo
            <span aria-hidden="true" className="aigo-ui-arrow" />
          </Link>

          <Link href="/contact">
            Talk to AIGO-OS
          </Link>
        </div>
      </div>
    </section>
  );
}

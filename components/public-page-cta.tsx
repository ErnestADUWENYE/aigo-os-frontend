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
    "Explore how AIGO-OS can support real enterprise AI environments through the Design Partner Program.",
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
          <Link href="/design-partners">
            Become a Design Partner
            <span aria-hidden="true">→</span>
          </Link>

          <Link href="/contact">
            Talk to AIGO-OS
          </Link>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

export default function Page() {
  return (
    <section className="aigo-corporate-page">
      <div className="aigo-home-shell aigo-corporate-page__inner">
        <p className="aigo-home-eyebrow">
          Newsroom
        </p>

        <h1>
          AIGO-OS Newsroom
        </h1>

        <p>
          Company announcements, product releases,
          research and official AIGO-OS communications are
          published through this newsroom.
        </p>

        <p>
          Media, analyst and research enquiries can be
          directed to the AIGO-OS team.
        </p>

        <Link
          className="aigo-home-button aigo-home-button--primary"
          href="/contact?intent=media"
        >
          Contact AIGO-OS
        </Link>
      </div>
    </section>
  );
}

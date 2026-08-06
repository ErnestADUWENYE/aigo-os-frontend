import Image from "next/image";

export default function Loading() {
  return (
    <main
      className="aigo-brand-loading"
      aria-busy="true"
      aria-label="Loading AIGO-OS"
    >
      <section className="aigo-brand-loading__content">
        <Image
          alt="AIGO-OS"
          className="aigo-brand-loading__logo"
          height={230}
          priority
          src="/branding/aigo-os-logo-light.png"
          width={360}
        />

        <div
          className="aigo-brand-loading__track"
          aria-hidden="true"
        >
          <div className="aigo-brand-loading__bar" />
        </div>
      </section>
    </main>
  );
}

export default function Loading() {
  return (
    <main
      className="aigo-system-state"
      aria-busy="true"
      aria-label="Loading AIGO OS"
    >
      <section className="aigo-system-state__card">
        <div
          className="aigo-system-state__spinner"
          aria-hidden="true"
        />

        <p className="aigo-system-state__eyebrow">
          AIGO OS
        </p>

        <h1>Preparing your workspace.</h1>

        <p>
          Loading secure application context and interface foundations.
        </p>

        <div className="aigo-skeleton-stack" aria-hidden="true">
          <div className="aigo-skeleton aigo-skeleton--wide" />
          <div className="aigo-skeleton" />
          <div className="aigo-skeleton aigo-skeleton--short" />
        </div>
      </section>
    </main>
  );
}

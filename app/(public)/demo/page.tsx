import { StateCard } from "../../../design-system/components/states/state-card";

const states = [
  {
    title: "Loading",
    description: "Data and workspace context are being prepared.",
    state: "loading",
  },
  {
    title: "Empty",
    description: "No records are available for this workspace.",
    state: "empty",
  },
  {
    title: "Success",
    description: "The requested operation completed successfully.",
    state: "success",
  },
  {
    title: "Warning",
    description: "Review is recommended before continuing.",
    state: "warning",
  },
  {
    title: "Error",
    description: "The operation could not be completed.",
    state: "error",
  },
  {
    title: "Forbidden",
    description: "Your current role cannot access this resource.",
    state: "forbidden",
  },
  {
    title: "Disabled",
    description: "This control is unavailable in the current state.",
    state: "disabled",
  },
] as const;

export default function DemoPage() {
  return (
    <section className="aigo-demo">
      <div className="aigo-demo__hero">
        <p className="aigo-demo__eyebrow">
          Phase 1 design foundation
        </p>

        <h1>AIGO OS Visual System</h1>

        <p>
          Switch between the five locked background designs
          using the selector in the application header.
        </p>
      </div>

      <div className="aigo-demo__metrics">
        <article className="aigo-metric-card">
          <span>Application surfaces</span>
          <strong>4</strong>
          <small>Public, Auth, Customer, Admin</small>
        </article>

        <article className="aigo-metric-card">
          <span>Locked designs</span>
          <strong>5</strong>
          <small>Platform-wide visual consistency</small>
        </article>

        <article className="aigo-metric-card">
          <span>Foundation status</span>
          <strong>Ready</strong>
          <small>No governance functionality represented</small>
        </article>
      </div>

      <div className="aigo-demo__section">
        <div>
          <p className="aigo-demo__eyebrow">
            Required UX states
          </p>
          <h2>Permanent component states</h2>
        </div>

        <div className="aigo-state-grid">
          {states.map((item) => (
            <StateCard
              key={item.state}
              title={item.title}
              description={item.description}
              state={item.state}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

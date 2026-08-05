type StateCardProps = {
  title: string;
  description: string;
  state:
    | "loading"
    | "empty"
    | "error"
    | "success"
    | "warning"
    | "forbidden"
    | "disabled";
};

export function StateCard({
  title,
  description,
  state,
}: StateCardProps) {
  return (
    <article
      className="aigo-state-card"
      data-state={state}
      aria-label={`${title} state`}
    >
      <div className="aigo-state-card__indicator" aria-hidden="true" />

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

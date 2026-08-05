"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="aigo-system-state" role="alert">
      <section className="aigo-system-state__card">
        <div
          className="aigo-system-state__icon"
          data-state="error"
          aria-hidden="true"
        >
          !
        </div>

        <p className="aigo-system-state__eyebrow">
          Application error
        </p>

        <h1>Something went wrong.</h1>

        <p>
          The request could not be completed. No governance decision
          or business action was performed.
        </p>

        {error.digest ? (
          <code>Reference: {error.digest}</code>
        ) : null}

        <button type="button" onClick={reset}>
          Try again
        </button>
      </section>
    </main>
  );
}

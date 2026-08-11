"use client";

import { FormEvent, useState } from "react";

export function DemoRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const subject = encodeURIComponent(
      `AIGO-OS demo request — ${String(data.get("company") || "")}`
    );

    const body = encodeURIComponent(
`AIGO-OS Demo Request

Name: ${String(data.get("name") || "")}
Work email: ${String(data.get("email") || "")}
Company: ${String(data.get("company") || "")}
Role: ${String(data.get("role") || "")}

AI environment:
${String(data.get("environment") || "")}

Governance priority:
${String(data.get("priority") || "")}`
    );

    setSubmitted(true);

    window.location.href =
      `mailto:hello@aigo-os.com?subject=${subject}&body=${body}`;
  }

  if (submitted) {
    return (
      <div className="aigo-demo-form__success">
        <span>REQUEST PREPARED</span>
        <h2>Thank you.</h2>
        <p>
          Your email application should open with the demo request prepared.
          If it does not, contact hello@aigo-os.com.
        </p>
      </div>
    );
  }

  return (
    <form className="aigo-demo-form" onSubmit={handleSubmit}>
      <div className="aigo-demo-form__heading">
        <span>REQUEST A DEMO</span>
        <h2>Show us where AI is operating.</h2>
        <p>
          We will focus the conversation on the actors, authority,
          actions and governance decisions that matter in your environment.
        </p>
      </div>

      <div className="aigo-demo-form__grid">
        <label>
          <span>Name *</span>
          <input name="name" required type="text" />
        </label>

        <label>
          <span>Work email *</span>
          <input name="email" required type="email" />
        </label>

        <label>
          <span>Company *</span>
          <input name="company" required type="text" />
        </label>

        <label>
          <span>Role</span>
          <input name="role" type="text" />
        </label>
      </div>

      <label>
        <span>Where is AI operating today? *</span>
        <textarea
          name="environment"
          required
          rows={4}
          placeholder="AI agents, workflows, enterprise applications, models, tools or other autonomous systems..."
        />
      </label>

      <label>
        <span>What governance problem are you trying to solve? *</span>
        <textarea
          name="priority"
          required
          rows={4}
          placeholder="Authority, excessive agency, tool misuse, human oversight, evidence, risk..."
        />
      </label>

      <button type="submit">
        Request an AIGO-OS Demo
        <span aria-hidden="true">→</span>
      </button>

      <small>
        Enterprise inquiries only. We use this information to understand
        your governance environment and prepare the right conversation.
      </small>
    </form>
  );
}

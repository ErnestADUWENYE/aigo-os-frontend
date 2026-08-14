"use client";

import { FormEvent, useState } from "react";

export type ContactIntent =
  | "demo"
  | "evaluation"
  | "deployment"
  | "commercial"
  | "contact";

type DemoRequestFormProps = {
  intent?: ContactIntent;
};

const content: Record<
  ContactIntent,
  {
    eyebrow: string;
    title: string;
    description: string;
    environmentLabel: string;
    environmentPlaceholder: string;
    priorityLabel: string;
    priorityPlaceholder: string;
    button: string;
  }
> = {
  demo: {
    eyebrow: "REQUEST A DEMO",
    title: "Show us where AI is operating.",
    description:
      "We will focus the conversation on the actors, authority, actions and governance decisions that matter in your environment.",
    environmentLabel: "Where is AI operating today?",
    environmentPlaceholder:
      "AI agents, workflows, enterprise applications, models, tools or other autonomous systems...",
    priorityLabel: "What governance problem are you trying to solve?",
    priorityPlaceholder:
      "Authority, excessive agency, tool misuse, human oversight, evidence, risk...",
    button: "Request an AIGO-OS Demo",
  },

  evaluation: {
    eyebrow: "EVALUATE AIGO-OS",
    title: "Evaluate AIGO-OS against a real governance problem.",
    description:
      "Tell us what you need to govern and what your evaluation needs to establish.",
    environmentLabel: "What AI environment are you evaluating?",
    environmentPlaceholder:
      "Agents, models, workflows, enterprise systems, autonomous operations...",
    priorityLabel: "What must the evaluation establish?",
    priorityPlaceholder:
      "Governance controls, authority boundaries, risk evaluation, evidence, oversight, deployment fit...",
    button: "Start an AIGO-OS Evaluation",
  },

  deployment: {
    eyebrow: "DISCUSS DEPLOYMENT",
    title: "Map AIGO-OS to your enterprise environment.",
    description:
      "Give us enough context to understand where governance must operate and what deployment constraints matter.",
    environmentLabel: "Describe the environment AIGO-OS would govern.",
    environmentPlaceholder:
      "Enterprise applications, AI systems, agents, infrastructure, workflows, integration points...",
    priorityLabel: "What deployment requirements matter most?",
    priorityPlaceholder:
      "Architecture, security, integrations, data boundaries, rollout, governance controls...",
    button: "Discuss AIGO-OS Deployment",
  },

  commercial: {
    eyebrow: "COMMERCIAL INQUIRY",
    title: "Discuss the commercial path for AIGO-OS.",
    description:
      "Tell us about your organization, expected scope and where you are in the buying or evaluation process.",
    environmentLabel: "What is the expected scope?",
    environmentPlaceholder:
      "Business units, AI systems, teams, environments, anticipated deployment scope...",
    priorityLabel: "What would you like to discuss?",
    priorityPlaceholder:
      "Commercial model, procurement, enterprise agreement, evaluation path, rollout...",
    button: "Start a Commercial Conversation",
  },

  contact: {
    eyebrow: "CONTACT AIGO-OS",
    title: "Start with the governance problem.",
    description:
      "Tell us what you are building, operating or trying to govern and we will route the conversation appropriately.",
    environmentLabel: "What are you building or operating?",
    environmentPlaceholder:
      "Describe the AI systems, agents, workflows or enterprise environment involved...",
    priorityLabel: "What would you like to discuss?",
    priorityPlaceholder:
      "Tell us the problem, question, partnership opportunity or other reason for contacting AIGO-OS...",
    button: "Contact AIGO-OS",
  },
};

export function DemoRequestForm({
  intent = "demo",
}: DemoRequestFormProps) {
  const [state, setState] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const selected = content[intent];

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setState("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      intent,
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      role: String(data.get("role") || ""),
      environment: String(data.get("environment") || ""),
      priority: String(data.get("priority") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message || "We could not send your inquiry."
        );
      }

      form.reset();
      setState("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not send your inquiry."
      );

      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="aigo-demo-form__success">
        <span>INQUIRY RECEIVED</span>

        <h2>Thank you.</h2>

        <p>
          Your inquiry has been submitted to AIGO-OS.
          We will review the context you provided and follow up
          through your work email.
        </p>
      </div>
    );
  }

  return (
    <form className="aigo-demo-form" onSubmit={handleSubmit}>
      <div className="aigo-demo-form__heading">
        <span>{selected.eyebrow}</span>
        <h2>{selected.title}</h2>
        <p>{selected.description}</p>
      </div>

      <div className="aigo-demo-form__grid">
        <label>
          <span>Name *</span>
          <input
            name="name"
            required
            type="text"
            autoComplete="name"
          />
        </label>

        <label>
          <span>Work email *</span>
          <input
            name="email"
            required
            type="email"
            autoComplete="email"
          />
        </label>

        <label>
          <span>Company *</span>
          <input
            name="company"
            required
            type="text"
            autoComplete="organization"
          />
        </label>

        <label>
          <span>Role</span>
          <input
            name="role"
            type="text"
            autoComplete="organization-title"
          />
        </label>
      </div>

      <label>
        <span>{selected.environmentLabel} *</span>
        <textarea
          name="environment"
          required
          rows={4}
          placeholder={selected.environmentPlaceholder}
        />
      </label>

      <label>
        <span>{selected.priorityLabel} *</span>
        <textarea
          name="priority"
          required
          rows={4}
          placeholder={selected.priorityPlaceholder}
        />
      </label>

      {state === "error" ? (
        <p className="aigo-demo-form__error" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button disabled={state === "sending"} type="submit">
        {state === "sending"
          ? "Sending..."
          : selected.button}

        <span aria-hidden="true" className="aigo-ui-arrow" />
      </button>

      <small>
        Enterprise inquiries only. We use this information to
        understand your environment and prepare the appropriate
        conversation.
      </small>
    </form>
  );
}
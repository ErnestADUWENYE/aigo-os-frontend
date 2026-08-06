import {
  BookOpen,
  CircleHelp,
  ExternalLink,
  Keyboard,
  LifeBuoy,
  MessageSquareWarning,
  Server,
} from "lucide-react";

const helpOptions = [
  {
    title: "Documentation",
    description:
      "Product guides and customer-console reference material.",
    icon: BookOpen,
  },
  {
    title: "Support",
    description:
      "Contact support for account, access, or product issues.",
    icon: LifeBuoy,
  },
  {
    title: "System status",
    description:
      "Review current platform availability and service notices.",
    icon: Server,
  },
  {
    title: "Keyboard shortcuts",
    description:
      "Review available navigation and productivity shortcuts.",
    icon: Keyboard,
  },
  {
    title: "Report an issue",
    description:
      "Submit reproducible product problems with relevant context.",
    icon: MessageSquareWarning,
  },
];

export default function HelpPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl border p-4">
            <CircleHelp
              aria-hidden="true"
              className="size-6"
            />
          </div>

          <div>
            <p className="text-sm font-medium opacity-65">
              Guidance and support
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Help
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Find documentation, support options, system
              status, and product guidance for the customer
              console.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Help options"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {helpOptions.map((option) => {
          const Icon = option.icon;

          return (
            <article
              className="rounded-2xl border p-6"
              key={option.title}
            >
              <Icon
                aria-hidden="true"
                className="size-5"
              />

              <h3 className="mt-4 font-semibold">
                {option.title}
              </h3>

              <p className="mt-2 text-sm opacity-65">
                {option.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs opacity-55">
                <ExternalLink
                  aria-hidden="true"
                  className="size-3.5"
                />
                Configuration required
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

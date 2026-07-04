// components/shared/ResourcePage.tsx
import Link from "next/link";
import PageShell from "./PageShell";
import MetricCard from "./MetricCard";

type ResourcePageProps = {
  title: string;
  description: string;
  metrics?: { label: string; value: string | number; helper?: string }[];
  actions?: { label: string; href: string }[];
  sections?: { title: string; description: string }[];
};

export default function ResourcePage({
  title,
  description,
  metrics = [],
  actions = [],
  sections = [],
}: ResourcePageProps) {
  return (
    <PageShell
      title={title}
      description={description}
      action={
        actions.length ? (
          <div className="flex gap-2">
            {actions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              >
                {action.label}
              </Link>
            ))}
          </div>
        ) : null
      }
    >
      {metrics.length ? (
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-xl border border-gray-200 bg-white p-5"
          >
            <h3 className="font-semibold text-gray-900">{section.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{section.description}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
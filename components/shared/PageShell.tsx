import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
};

export default function PageShell({
  title,
  description,
  action,
  children,
}: PageShellProps) {
  return (
    <main className="space-y-6 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          {description ? (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          ) : null}
        </div>

        {action ? <div>{action}</div> : null}
      </div>

      {children}
    </main>
  );
}
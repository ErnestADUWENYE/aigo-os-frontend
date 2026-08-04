import {
  AlertTriangle,
  CheckCircle2,
  CircleDashed,
  XCircle,
} from "lucide-react";

type SystemStatus =
  | "healthy"
  | "degraded"
  | "offline"
  | "checking";

type StatusPanelProps = {
  title: string;
  description: string;
  status: SystemStatus;
  detail?: string;
};

const statusConfig = {
  healthy: {
    label: "Healthy",
    icon: CheckCircle2,
    className:
      "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
  },
  degraded: {
    label: "Degraded",
    icon: AlertTriangle,
    className:
      "border-amber-300/20 bg-amber-300/10 text-amber-100",
  },
  offline: {
    label: "Offline",
    icon: XCircle,
    className:
      "border-rose-300/20 bg-rose-300/10 text-rose-200",
  },
  checking: {
    label: "Checking",
    icon: CircleDashed,
    className:
      "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
  },
};

export function StatusPanel({
  title,
  description,
  status,
  detail,
}: StatusPanelProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <article className="glass-panel rounded-3xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            {description}
          </p>
        </div>

        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold ${config.className}`}
        >
          <Icon
            className={`h-4 w-4 ${
              status === "checking" ? "animate-spin" : ""
            }`}
          />

          {config.label}
        </div>
      </div>

      {detail ? (
        <p className="mt-5 border-t border-white/[0.06] pt-4 text-sm leading-6 text-slate-400">
          {detail}
        </p>
      ) : null}
    </article>
  );
}

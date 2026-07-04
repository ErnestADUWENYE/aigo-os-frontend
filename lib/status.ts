import { STATUS_BADGE_VARIANTS, STATUS_LABELS } from "@/constants";

export function getStatusLabel(status?: string | null) {
  if (!status) return "Unknown";

  return (
    STATUS_LABELS[status as keyof typeof STATUS_LABELS] ||
    status.replaceAll("_", " ")
  );
}

export function getStatusBadgeVariant(status?: string | null) {
  if (!status) return "neutral";

  return (
    STATUS_BADGE_VARIANTS[
      status as keyof typeof STATUS_BADGE_VARIANTS
    ] || "neutral"
  );
}

export function isTerminalStatus(status?: string | null) {
  return ["closed", "resolved", "completed", "archived", "retired"].includes(
    status || ""
  );
}

export function isActiveStatus(status?: string | null) {
  return ["active", "monitoring", "open", "investigating"].includes(
    status || ""
  );
}
import clsx from "clsx";

type BadgeVariant =
  | "success"
  | "warning"
  | "danger"
  | "neutral"
  | "info"
  | "critical";

type BadgeProps = {
  children: string;
  variant?: BadgeVariant;
};

export default function Badge({ children, variant = "neutral" }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
        variant === "success" && "bg-green-100 text-green-700",
        variant === "warning" && "bg-yellow-100 text-yellow-700",
        variant === "danger" && "bg-red-100 text-red-700",
        variant === "critical" && "bg-red-200 text-red-900",
        variant === "info" && "bg-blue-100 text-blue-700",
        variant === "neutral" && "bg-gray-100 text-gray-700"
      )}
    >
      {children}
    </span>
  );
}
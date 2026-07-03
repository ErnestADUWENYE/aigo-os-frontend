import { ReactNode } from "react";
import Button from "./Button";

type EmptyStateProps = {
  title: string;
  description?: string;
  actionLabel?: string;
  icon?: ReactNode;
  onAction?: () => void;
};

export default function EmptyState({
  title,
  description,
  actionLabel,
  icon,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
      {icon && <div className="mb-4 text-gray-400">{icon}</div>}

      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>

      {description && (
        <p className="mt-2 max-w-md text-sm text-gray-500">{description}</p>
      )}

      {actionLabel && onAction && (
        <div className="mt-5">
          <Button onClick={onAction}>{actionLabel}</Button>
        </div>
      )}
    </div>
  );
}
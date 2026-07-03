import { ReactNode } from "react";
import Card from "../ui/Card";

type StatsCardProps = {
  title: string;
  value: string | number;
  description?: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: ReactNode;
};

export default function StatsCard({
  title,
  value,
  description,
  change,
  trend = "neutral",
  icon,
}: StatsCardProps) {
  const trendColor =
    trend === "up"
      ? "text-green-600"
      : trend === "down"
      ? "text-red-600"
      : "text-gray-500";

  return (
    <Card className="transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h3 className="text-3xl font-bold text-gray-900">
            {value}
          </h3>

          {description && (
            <p className="text-sm text-gray-500">
              {description}
            </p>
          )}

          {change && (
            <p className={`text-sm font-medium ${trendColor}`}>
              {change}
            </p>
          )}
        </div>

        {icon && (
          <div className="rounded-xl bg-gray-100 p-3">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}
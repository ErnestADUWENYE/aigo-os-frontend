import { SelectHTMLAttributes } from "react";
import clsx from "clsx";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  options: SelectOption[];
};

export default function Select({
  label,
  error,
  options,
  className,
  ...props
}: SelectProps) {
  return (
    <label className="block space-y-1">
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}

      <select
        className={clsx(
          "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none",
          "focus:border-black focus:ring-1 focus:ring-black",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
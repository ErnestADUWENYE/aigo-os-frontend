import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({ label, error, className, ...props }: InputProps) {
  return (
    <label className="block space-y-1">
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}

      <input
        className={clsx(
          "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none",
          "focus:border-black focus:ring-1 focus:ring-black",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />

      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
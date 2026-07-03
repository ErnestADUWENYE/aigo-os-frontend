import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  isLoading?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  isLoading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" && "bg-black text-white hover:bg-gray-800",
        variant === "secondary" && "bg-gray-100 text-gray-900 hover:bg-gray-200",
        variant === "danger" && "bg-red-600 text-white hover:bg-red-700",
        variant === "ghost" && "bg-transparent text-gray-700 hover:bg-gray-100",
        variant === "outline" && "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
        className
      )}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
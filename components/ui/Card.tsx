import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-gray-200 bg-white p-5 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
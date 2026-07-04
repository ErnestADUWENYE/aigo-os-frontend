import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function safeArray<T>(value?: T[] | null): T[] {
  return Array.isArray(value) ? value : [];
}

export function truncate(value: string, length = 80) {
  if (value.length <= length) return value;

  return `${value.slice(0, length)}...`;
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function generateRequestId(prefix = "req") {
  return `${prefix}_${crypto.randomUUID()}`;
}

export function getInitials(value?: string | null) {
  if (!value) return "NA";

  return value
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
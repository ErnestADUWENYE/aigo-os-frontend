import { brandSizes } from "./sizing";
import type { BrandProps } from "./types";

export function AigoMark({
  className,
  tone = "light",
  size = "md",
}: BrandProps) {
  const dimension = brandSizes[size].mark;
  const foreground = tone === "dark" ? "#ffffff" : "#f8fbff";

  return (
    <svg
      aria-label="AIGO OS"
      className={className}
      height={dimension}
      role="img"
      viewBox="0 0 64 64"
      width={dimension}
    >
      <defs>
        <linearGradient id="aigo-mark-gradient" x1="8" x2="56" y1="8" y2="56">
          <stop offset="0%" stopColor="#0875d1" />
          <stop offset="100%" stopColor="#10a4b8" />
        </linearGradient>
      </defs>

      <rect
        fill="url(#aigo-mark-gradient)"
        height="58"
        rx="15"
        width="58"
        x="3"
        y="3"
      />

      <path
        d="M18 43 29 18h6l11 25h-7l-2-5H27l-2 5h-7Zm11-11h6l-3-8-3 8Z"
        fill={foreground}
      />

      <circle cx="47" cy="19" fill={foreground} r="3" />
    </svg>
  );
}

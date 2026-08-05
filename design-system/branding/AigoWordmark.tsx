import { brandSizes } from "./sizing";
import type { BrandProps } from "./types";

export function AigoWordmark({
  className,
  tone = "light",
  size = "md",
}: BrandProps) {
  const width = brandSizes[size].wordmark;
  const color = tone === "dark" ? "#ffffff" : "currentColor";

  return (
    <svg
      aria-label="AIGO OS"
      className={className}
      height={Math.round(width * 0.25)}
      role="img"
      viewBox="0 0 180 44"
      width={width}
    >
      <text
        fill={color}
        fontFamily="Inter, Arial, sans-serif"
        fontSize="31"
        fontWeight="800"
        letterSpacing="1.2"
        x="0"
        y="32"
      >
        AIGO
      </text>

      <text
        fill={color}
        fontFamily="Inter, Arial, sans-serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="2"
        opacity="0.72"
        x="104"
        y="31"
      >
        OS
      </text>
    </svg>
  );
}

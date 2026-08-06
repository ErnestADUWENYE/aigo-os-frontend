import Image from "next/image";

import type { BrandProps } from "./types";

export function AigoLogo({
  className,
  size = "md",
}: BrandProps) {
  const widths = {
    sm: 150,
    md: 220,
    lg: 340,
  } as const;

  const width = widths[size];
  const height = Math.round(width * 0.58);

  return (
    <Image
      alt="AIGO-OS"
      className={className}
      height={height}
      priority
      src="/branding/aigo-os-logo.png"
      width={width}
    />
  );
}

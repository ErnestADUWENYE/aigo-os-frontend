import Image from "next/image";

import { brandSizes } from "./sizing";
import type { BrandProps } from "./types";

export function AigoWordmark({
  className,
  size = "md",
}: BrandProps) {
  const width = brandSizes[size].wordmark;
  const height = Math.round(width * 0.22);

  return (
    <Image
      alt="AIGO-OS"
      className={className}
      height={height}
      priority
      src="/branding/aigo-os-wordmark.png"
      width={width}
    />
  );
}

import Image from "next/image";

import { brandSizes } from "./sizing";
import type { BrandProps } from "./types";

export function AigoMark({
  className,
  size = "md",
}: BrandProps) {
  const dimension = brandSizes[size].mark;

  return (
    <Image
      alt="AIGO-OS"
      className={className}
      height={dimension}
      priority
      src="/branding/aigo-os-mark.png"
      width={dimension}
    />
  );
}

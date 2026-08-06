import Image from "next/image";

import type { BrandProps } from "./types";

type BrandLockupProps = BrandProps & {
  caption?: string;
};

export function BrandLockup({
  className,
}: BrandLockupProps) {
  return (
    <div className={className ?? "aigo-brand-lockup"}>
      <Image
        alt="AIGO-OS"
        className="aigo-brand-lockup__image"
        height={38}
        priority
        src="/branding/aigo-os-sidebar-logo.png"
        width={60}
      />
    </div>
  );
}

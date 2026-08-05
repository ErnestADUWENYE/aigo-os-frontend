import { AigoMark } from "./AigoMark";
import { AigoWordmark } from "./AigoWordmark";
import type { BrandProps } from "./types";

type BrandLockupProps = BrandProps & {
  caption?: string;
};

export function BrandLockup({
  caption,
  className,
  size = "md",
  tone = "light",
}: BrandLockupProps) {
  return (
    <div className={className ?? "aigo-brand-lockup"}>
      <AigoMark size={size} tone={tone} />

      <div className="aigo-brand-lockup__text">
        <AigoWordmark size={size} tone={tone} />

        {caption ? (
          <span className="aigo-brand-caption">{caption}</span>
        ) : null}
      </div>
    </div>
  );
}

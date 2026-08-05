export type BrandTone = "light" | "dark";
export type BrandSize = "sm" | "md" | "lg";

export type BrandProps = {
  className?: string;
  tone?: BrandTone;
  size?: BrandSize;
};

import type { BrandSize } from "./types";

export const brandSizes: Record<
  BrandSize,
  {
    mark: number;
    wordmark: number;
  }
> = {
  sm: {
    mark: 32,
    wordmark: 88,
  },
  md: {
    mark: 44,
    wordmark: 112,
  },
  lg: {
    mark: 64,
    wordmark: 152,
  },
};

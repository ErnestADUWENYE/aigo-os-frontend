import type { ReactNode } from "react";

type AuthBoundaryProps = {
  children: ReactNode;
};

export function AuthBoundary({
  children,
}: AuthBoundaryProps) {
  /*
   * Phase 0 authentication boundary.
   *
   * Real authentication, identity resolution,
   * tenant context, and authorization belong
   * to Phase 1.
   */
  return children;
}

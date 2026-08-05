import { renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it } from "vitest";

import {
  AuthorizationProvider,
  useAuthorization,
} from "../../app/providers/authorization-provider";

describe("AuthorizationProvider", () => {
  it("allows exact permissions", () => {
    const wrapper = ({
      children,
    }: {
      children: ReactNode;
    }) => (
      <AuthorizationProvider
        permissions={["reports.read"]}
      >
        {children}
      </AuthorizationProvider>
    );

    const { result } = renderHook(
      () => useAuthorization(),
      { wrapper },
    );

    expect(result.current.can("reports.read")).toBe(true);
    expect(result.current.can("reports.write")).toBe(false);
  });

  it("allows wildcard permissions", () => {
    const wrapper = ({
      children,
    }: {
      children: ReactNode;
    }) => (
      <AuthorizationProvider permissions={["*"]}>
        {children}
      </AuthorizationProvider>
    );

    const { result } = renderHook(
      () => useAuthorization(),
      { wrapper },
    );

    expect(result.current.can("anything")).toBe(true);
    expect(
      result.current.canAll([
        "reports.read",
        "finance.write",
      ]),
    ).toBe(true);
  });

  it("supports any and all permission checks", () => {
    const wrapper = ({
      children,
    }: {
      children: ReactNode;
    }) => (
      <AuthorizationProvider
        permissions={[
          "reports.read",
          "finance.read",
        ]}
      >
        {children}
      </AuthorizationProvider>
    );

    const { result } = renderHook(
      () => useAuthorization(),
      { wrapper },
    );

    expect(
      result.current.canAny([
        "reports.write",
        "finance.read",
      ]),
    ).toBe(true);

    expect(
      result.current.canAll([
        "reports.read",
        "finance.read",
      ]),
    ).toBe(true);

    expect(
      result.current.canAll([
        "reports.read",
        "finance.write",
      ]),
    ).toBe(false);
  });
});

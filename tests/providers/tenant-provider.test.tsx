import { renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it } from "vitest";

import {
  TenantProvider,
  useTenant,
} from "../../app/providers/tenant-provider";

describe("TenantProvider", () => {
  it("provides tenant and workspace context", () => {
    const wrapper = ({
      children,
    }: {
      children: ReactNode;
    }) => (
      <TenantProvider
        value={{
          tenantId: "tenant-1",
          workspaceId: "workspace-1",
          tenantName: "AIGO Demo Enterprise",
          workspaceName: "Executive Workspace",
        }}
      >
        {children}
      </TenantProvider>
    );

    const { result } = renderHook(
      () => useTenant(),
      { wrapper },
    );

    expect(result.current.tenantId).toBe("tenant-1");
    expect(result.current.workspaceId).toBe(
      "workspace-1",
    );
    expect(result.current.tenantName).toBe(
      "AIGO Demo Enterprise",
    );
  });
});

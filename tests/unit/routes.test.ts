import { describe, expect, it } from "vitest";

import { routes } from "@/lib/auth/routes";

describe("AIGO-OS route foundation", () => {
  it("keeps the health/status route public", () => {
    expect(routes.status).toEqual({
      path: "/status",
      access: "public",
    });
  });

  it("marks the workspace as authenticated", () => {
    expect(routes.home).toEqual({
      path: "/",
      access: "authenticated",
    });
  });

  it("keeps authentication support routes public", () => {
    expect(routes.signIn.access).toBe("public");
    expect(routes.unauthorized.access).toBe("public");
    expect(routes.forbidden.access).toBe("public");
  });
});

import {
  render,
  screen,
} from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  AllPermissionsGuard,
  AnyPermissionGuard,
  PermissionGuard,
} from "../../components/authorization";
import {
  AuthorizationProvider,
} from "../../app/providers/authorization-provider";

describe("permission guards", () => {
  it("renders content for an exact permission", () => {
    render(
      <AuthorizationProvider
        permissions={["reports.read"]}
      >
        <PermissionGuard permission="reports.read">
          <span>Reports available</span>
        </PermissionGuard>
      </AuthorizationProvider>,
    );

    expect(
      screen.getByText("Reports available"),
    ).toBeInTheDocument();
  });

  it("renders fallback when permission is missing", () => {
    render(
      <AuthorizationProvider
        permissions={["tasks.read"]}
      >
        <PermissionGuard
          fallback={<span>Access denied</span>}
          permission="reports.read"
        >
          <span>Reports available</span>
        </PermissionGuard>
      </AuthorizationProvider>,
    );

    expect(
      screen.getByText("Access denied"),
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Reports available"),
    ).not.toBeInTheDocument();
  });

  it("supports any-permission checks", () => {
    render(
      <AuthorizationProvider
        permissions={["organization.admin"]}
      >
        <AnyPermissionGuard
          permissions={[
            "memberships.manage",
            "organization.admin",
          ]}
        >
          <span>Administration available</span>
        </AnyPermissionGuard>
      </AuthorizationProvider>,
    );

    expect(
      screen.getByText(
        "Administration available",
      ),
    ).toBeInTheDocument();
  });

  it("supports all-permission checks", () => {
    render(
      <AuthorizationProvider
        permissions={[
          "roles.read",
          "roles.manage",
        ]}
      >
        <AllPermissionsGuard
          permissions={[
            "roles.read",
            "roles.manage",
          ]}
        >
          <span>Role management available</span>
        </AllPermissionsGuard>
      </AuthorizationProvider>,
    );

    expect(
      screen.getByText(
        "Role management available",
      ),
    ).toBeInTheDocument();
  });

  it("allows wildcard access", () => {
    render(
      <AuthorizationProvider permissions={["*"]}>
        <PermissionGuard permission="invitations.manage">
          <span>Invite available</span>
        </PermissionGuard>
      </AuthorizationProvider>,
    );

    expect(
      screen.getByText("Invite available"),
    ).toBeInTheDocument();
  });
});

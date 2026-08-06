import type {
  TenantSelection,
} from "./types";

const STORAGE_KEY = "aigo.customer.tenant";

const emptySelection: TenantSelection = {
  tenantId: null,
  workspaceId: null,
};

export function readTenantSelection(): TenantSelection {
  if (typeof window === "undefined") {
    return emptySelection;
  }

  try {
    const value = window.localStorage.getItem(
      STORAGE_KEY,
    );

    if (!value) {
      return emptySelection;
    }

    const parsed = JSON.parse(
      value,
    ) as Partial<TenantSelection>;

    return {
      tenantId:
        typeof parsed.tenantId === "string"
          ? parsed.tenantId
          : null,
      workspaceId:
        typeof parsed.workspaceId === "string"
          ? parsed.workspaceId
          : null,
    };
  } catch {
    return emptySelection;
  }
}

export function writeTenantSelection(
  selection: TenantSelection,
): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(selection),
  );
}

export function clearTenantSelection(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
}

import type {
  TenantSelection,
} from "./types";

const STORAGE_KEY = "aigo.customer.tenant";

const emptySelection: TenantSelection = {
  tenantId: null,
  workspaceId: null,
  tenantName: null,
  workspaceName: null,
};

type StoredTenantSelection =
  TenantSelection & {
    ownerUserId?: string | null;
  };

export function readTenantSelection(): TenantSelection {
  if (typeof window === "undefined") {
    return emptySelection;
  }

  try {
    const value =
      window.localStorage.getItem(STORAGE_KEY);

    if (!value) {
      return emptySelection;
    }

    const parsed = JSON.parse(
      value,
    ) as Partial<StoredTenantSelection>;

    return {
      tenantId:
        typeof parsed.tenantId === "string"
          ? parsed.tenantId
          : null,
      workspaceId:
        typeof parsed.workspaceId === "string"
          ? parsed.workspaceId
          : null,
      tenantName:
        typeof parsed.tenantName === "string"
          ? parsed.tenantName
          : null,
      workspaceName:
        typeof parsed.workspaceName === "string"
          ? parsed.workspaceName
          : null,
    };
  } catch {
    return emptySelection;
  }
}

export function readTenantSelectionOwner():
  string | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value =
      window.localStorage.getItem(STORAGE_KEY);

    if (!value) {
      return null;
    }

    const parsed = JSON.parse(
      value,
    ) as Partial<StoredTenantSelection>;

    return typeof parsed.ownerUserId === "string"
      ? parsed.ownerUserId
      : null;
  } catch {
    return null;
  }
}

export function writeTenantSelection(
  selection: TenantSelection,
  ownerUserId: string | null,
): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...selection,
      ownerUserId,
    }),
  );
}

export function clearTenantSelection(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
}

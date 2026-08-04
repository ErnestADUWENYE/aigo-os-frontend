import { apiRequest } from "@/lib/api/client";
import { AigoApiError } from "@/lib/api/errors";

export type HealthState =
  | "healthy"
  | "degraded"
  | "offline"
  | "checking";

type BackendHealthRecord = {
  id?: string;
  component?: string;
  status?: string;
  message?: string;
  detail?: string;
  version?: string;
  created_at?: string;
  checked_at?: string;
};

type BackendHealthResponse =
  | BackendHealthRecord[]
  | {
      items?: BackendHealthRecord[];
      data?: BackendHealthRecord[];
      results?: BackendHealthRecord[];
    };

export type PlatformHealth = {
  checkedAt: string;

  frontend: {
    state: HealthState;
    detail: string;
  };

  backend: {
    state: HealthState;
    detail: string;
    version?: string;
    requestId?: string;
  };

  database: {
    state: HealthState;
    detail: string;
  };
};

function normalizeState(
  value?: string,
): HealthState {
  const status = value?.toLowerCase().trim();

  if (
    status === "healthy" ||
    status === "ok" ||
    status === "up" ||
    status === "operational" ||
    status === "available"
  ) {
    return "healthy";
  }

  if (
    status === "degraded" ||
    status === "warning" ||
    status === "partial"
  ) {
    return "degraded";
  }

  if (
    status === "offline" ||
    status === "down" ||
    status === "failed" ||
    status === "unhealthy" ||
    status === "error"
  ) {
    return "offline";
  }

  return "checking";
}

function recordsFromResponse(
  response: BackendHealthResponse,
): BackendHealthRecord[] {
  if (Array.isArray(response)) {
    return response;
  }

  return (
    response.items ??
    response.data ??
    response.results ??
    []
  );
}

function findComponent(
  records: BackendHealthRecord[],
  names: string[],
): BackendHealthRecord | undefined {
  const normalizedNames = names.map((name) =>
    name.toLowerCase(),
  );

  return records.find((record) => {
    const component =
      record.component?.toLowerCase() ?? "";

    return normalizedNames.some((name) =>
      component.includes(name),
    );
  });
}

function recordDetail(
  record: BackendHealthRecord | undefined,
  fallback: string,
): string {
  return (
    record?.detail ??
    record?.message ??
    fallback
  );
}

export async function getPlatformHealth(): Promise<PlatformHealth> {
  const checkedAt = new Date().toISOString();

  try {
    const response =
      await apiRequest<BackendHealthResponse>(
        "/observability/health",
        {
          cache: "no-store",
        },
      );

    const records = recordsFromResponse(response);

    const apiRecord = findComponent(
      records,
      [
        "api",
        "backend",
        "application",
        "service",
      ],
    );

    const databaseRecord = findComponent(
      records,
      [
        "database",
        "db",
        "postgres",
        "supabase",
      ],
    );

    const backendState =
      apiRecord
        ? normalizeState(apiRecord.status)
        : "healthy";

    const databaseState =
      databaseRecord
        ? normalizeState(databaseRecord.status)
        : records.length > 0
          ? "healthy"
          : "checking";

    return {
      checkedAt,

      frontend: {
        state: "healthy",
        detail: "AIGO-OS frontend is running.",
      },

      backend: {
        state: backendState,
        detail: recordDetail(
          apiRecord,
          records.length > 0
            ? "AIGO-OS API responded successfully."
            : "AIGO-OS API is reachable.",
        ),
        version: apiRecord?.version,
      },

      database: {
        state: databaseState,
        detail: recordDetail(
          databaseRecord,
          records.length > 0
            ? "Database health is reported through the backend."
            : "Backend responded; no database health record is currently available.",
        ),
      },
    };
  } catch (error) {
    if (error instanceof AigoApiError) {
      return {
        checkedAt,

        frontend: {
          state: "healthy",
          detail: "AIGO-OS frontend is running.",
        },

        backend: {
          state: "offline",
          detail: error.message,
          requestId: error.requestId,
        },

        database: {
          state: "checking",
          detail:
            "Database state cannot be determined while the backend API is unavailable.",
        },
      };
    }

    return {
      checkedAt,

      frontend: {
        state: "healthy",
        detail: "AIGO-OS frontend is running.",
      },

      backend: {
        state: "offline",
        detail:
          "Unable to reach the AIGO-OS backend API.",
      },

      database: {
        state: "checking",
        detail:
          "Database state cannot be determined while the backend API is unavailable.",
      },
    };
  }
}

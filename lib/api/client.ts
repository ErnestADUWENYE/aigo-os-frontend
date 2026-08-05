import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";

const apiUrl =
  process.env.NEXT_PUBLIC_AIGO_API_URL ??
  "http://localhost:8000";

export type ApiContext = {
  accessToken?: string | null;
  tenantId?: string | null;
  workspaceId?: string | null;
};

let currentContext: ApiContext = {};

export function setApiContext(context: ApiContext): void {
  currentContext = context;
}

function attachRequestContext(
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  config.headers.set(
    "X-Request-ID",
    crypto.randomUUID(),
  );

  if (currentContext.accessToken) {
    config.headers.set(
      "Authorization",
      `Bearer ${currentContext.accessToken}`,
    );
  }

  if (currentContext.tenantId) {
    config.headers.set(
      "X-Tenant-ID",
      currentContext.tenantId,
    );
  }

  if (currentContext.workspaceId) {
    config.headers.set(
      "X-Workspace-ID",
      currentContext.workspaceId,
    );
  }

  return config;
}

export const apiClient: AxiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 15_000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(attachRequestContext);

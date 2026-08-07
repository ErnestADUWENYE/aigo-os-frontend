import axios, {
  type AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";

const apiUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  process.env.NEXT_PUBLIC_AIGO_API_URL ??
  "http://localhost:8000";

export type ApiContext = {
  accessToken?: string | null;
  tenantId?: string | null;
  workspaceId?: string | null;
};

type ApiSessionHandlers = {
  refreshAccessToken: () => Promise<string | null>;
  clearTenant: () => void;
};

type RetriableRequestConfig =
  InternalAxiosRequestConfig & {
    _aigoRetried?: boolean;
  };

let currentContext: ApiContext = {};
let sessionHandlers: ApiSessionHandlers | null = null;

export function setApiContext(
  context: ApiContext,
): void {
  currentContext = context;
}

export function setApiSessionHandlers(
  handlers: ApiSessionHandlers | null,
): void {
  sessionHandlers = handlers;
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
      "X-Organization-ID",
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

export const apiClient: AxiosInstance =
  axios.create({
    baseURL: apiUrl,
    timeout: 15_000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

apiClient.interceptors.request.use(
  attachRequestContext,
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const status = error.response?.status;
    const request =
      error.config as RetriableRequestConfig | undefined;

    if (
      status === 401 &&
      request &&
      !request._aigoRetried &&
      sessionHandlers
    ) {
      request._aigoRetried = true;

      const token =
        await sessionHandlers.refreshAccessToken();

      if (token) {
        currentContext = {
          ...currentContext,
          accessToken: token,
        };

        request.headers.set(
          "Authorization",
          `Bearer ${token}`,
        );

        return apiClient.request(request);
      }
    }

    if (typeof window !== "undefined") {
      if (status === 401) {
        sessionHandlers?.clearTenant();
        setApiContext({});

        if (
          window.location.pathname !==
            "/session-expired" &&
          window.location.pathname !== "/sign-in"
        ) {
          window.location.assign(
            "/session-expired",
          );
        }
      }

      if (
        status === 403 &&
        window.location.pathname !== "/forbidden"
      ) {
        window.location.assign("/forbidden");
      }
    }

    return Promise.reject(error);
  },
);

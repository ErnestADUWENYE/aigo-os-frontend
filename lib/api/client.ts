import {
  AigoApiError,
  type ApiErrorPayload,
} from "@/lib/api/errors";
import { publicEnvironment } from "@/lib/config/environment";

type AccessTokenProvider =
  () => Promise<string | null> | string | null;

type ApiRequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  accessToken?: string | null;
  timeoutMs?: number;
};

let accessTokenProvider: AccessTokenProvider | null = null;

export function configureAccessTokenProvider(
  provider: AccessTokenProvider,
): void {
  accessTokenProvider = provider;
}

async function resolveAccessToken(
  explicitToken?: string | null,
): Promise<string | null> {
  if (explicitToken !== undefined) {
    return explicitToken;
  }

  if (!accessTokenProvider) {
    return null;
  }

  return accessTokenProvider();
}

async function parseErrorPayload(
  response: Response,
): Promise<ApiErrorPayload | undefined> {
  const contentType =
    response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return undefined;
  }

  try {
    return (await response.json()) as ApiErrorPayload;
  } catch {
    return undefined;
  }
}

export async function apiRequest<T>(
  path: string,
  options: ApiRequestOptions = {},
): Promise<T> {
  const {
    accessToken: explicitToken,
    body,
    headers,
    timeoutMs = 30_000,
    ...requestInit
  } = options;

  const token = await resolveAccessToken(explicitToken);
  const requestHeaders = new Headers(headers);

  requestHeaders.set("Accept", "application/json");

  if (body !== undefined) {
    requestHeaders.set("Content-Type", "application/json");
  }

  if (token) {
    requestHeaders.set(
      "Authorization",
      `Bearer ${token}`,
    );
  }

  const normalizedPath =
    path.startsWith("/") ? path : `/${path}`;

  const response = await fetch(
    `${publicEnvironment.apiBaseUrl}${normalizedPath}`,
    {
      ...requestInit,
      signal:
        requestInit.signal ??
        AbortSignal.timeout(timeoutMs),
      headers: requestHeaders,
      body:
        body === undefined
          ? undefined
          : JSON.stringify(body),
    },
  );

  if (!response.ok) {
    const payload = await parseErrorPayload(response);

    const requestId =
      response.headers.get("x-request-id") ??
      payload?.request_id;

    throw new AigoApiError({
      status: response.status,
      requestId: requestId ?? undefined,
      payload,
      message:
        payload?.detail ??
        payload?.message ??
        payload?.error ??
        `AIGO API request failed with status ${response.status}`,
    });
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

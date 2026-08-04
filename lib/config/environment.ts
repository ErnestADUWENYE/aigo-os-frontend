export const APP_ENVIRONMENTS = [
  "local",
  "demo",
  "production",
] as const;

export type AppEnvironment =
  (typeof APP_ENVIRONMENTS)[number];

function requirePublicValue(
  name: string,
  value: string | undefined,
): string {
  if (!value?.trim()) {
    throw new Error(
      `Missing required public environment variable: ${name}`,
    );
  }

  return value.trim();
}

function resolveEnvironment(
  value: string | undefined,
): AppEnvironment {
  const environment = value?.trim().toLowerCase() ?? "local";

  if (
    !APP_ENVIRONMENTS.includes(
      environment as AppEnvironment,
    )
  ) {
    throw new Error(
      `Unsupported AIGO environment: ${environment}`,
    );
  }

  return environment as AppEnvironment;
}

const environment = resolveEnvironment(
  process.env.NEXT_PUBLIC_AIGO_ENV,
);

const apiBaseUrl = requirePublicValue(
  "NEXT_PUBLIC_AIGO_API_URL",
  process.env.NEXT_PUBLIC_AIGO_API_URL,
);

if (
  environment === "production" &&
  !apiBaseUrl.startsWith("https://")
) {
  throw new Error(
    "Production API connections must use HTTPS.",
  );
}

export const publicEnvironment = {
  name: environment,
  apiBaseUrl: apiBaseUrl.replace(/\/$/, ""),
  appVersion:
    process.env.NEXT_PUBLIC_AIGO_VERSION?.trim() ||
    "0.1.0-dev",
  isLocal: environment === "local",
  isDemo: environment === "demo",
  isProduction: environment === "production",
} as const;

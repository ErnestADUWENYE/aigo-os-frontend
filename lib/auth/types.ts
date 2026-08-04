export type AuthStatus =
  | "loading"
  | "authenticated"
  | "unauthenticated";

export type AigoUser = {
  id: string;
  displayName: string;
  email: string;
};

export type AuthSession = {
  status: AuthStatus;
  user: AigoUser | null;
};

export const anonymousSession: AuthSession = {
  status: "unauthenticated",
  user: null,
};

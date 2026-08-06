"use client";

import { useAuth } from "@clerk/nextjs";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type AuthenticationState = {
  userId: string | null;
  sessionId: string | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoaded: boolean;
  refreshAccessToken: () => Promise<string | null>;
};

const defaultState: AuthenticationState = {
  userId: null,
  sessionId: null,
  accessToken: null,
  isAuthenticated: false,
  isLoaded: false,
  refreshAccessToken: async () => null,
};

const AuthenticationContext =
  createContext<AuthenticationState>(defaultState);

export function AuthenticationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const {
    getToken,
    isLoaded,
    isSignedIn,
    sessionId,
    userId,
  } = useAuth();

  const [accessToken, setAccessToken] = useState<
    string | null
  >(null);

  const refreshAccessToken = useCallback(async () => {
    if (!isLoaded || !isSignedIn) {
      setAccessToken(null);
      return null;
    }

    try {
      const token = await getToken();

      setAccessToken(token);

      return token;
    } catch {
      setAccessToken(null);
      return null;
    }
  }, [getToken, isLoaded, isSignedIn]);

  useEffect(() => {
    let cancelled = false;
    let interval: number | undefined;

    async function synchronizeToken() {
      let token: string | null = null;

      if (isLoaded && isSignedIn) {
        try {
          token = await getToken();
        } catch {
          token = null;
        }
      } else {
        await Promise.resolve();
      }

      if (!cancelled) {
        setAccessToken(token);
      }
    }

    void synchronizeToken();

    if (isLoaded && isSignedIn) {
      interval = window.setInterval(() => {
        void synchronizeToken();
      }, 50_000);
    }

    return () => {
      cancelled = true;

      if (interval !== undefined) {
        window.clearInterval(interval);
      }
    };
  }, [
    getToken,
    isLoaded,
    isSignedIn,
    sessionId,
    userId,
  ]);

  const value = useMemo<AuthenticationState>(
    () => ({
      userId: userId ?? null,
      sessionId: sessionId ?? null,
      accessToken,
      isAuthenticated: Boolean(isSignedIn),
      isLoaded,
      refreshAccessToken,
    }),
    [
      accessToken,
      isLoaded,
      isSignedIn,
      refreshAccessToken,
      sessionId,
      userId,
    ],
  );

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication(): AuthenticationState {
  return useContext(AuthenticationContext);
}

"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
} from "react";

export type AuthenticationState = {
  userId: string | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoaded: boolean;
};

const defaultState: AuthenticationState = {
  userId: null,
  accessToken: null,
  isAuthenticated: false,
  isLoaded: true,
};

const AuthenticationContext =
  createContext<AuthenticationState>(defaultState);

export function AuthenticationProvider({
  children,
  value = defaultState,
}: {
  children: ReactNode;
  value?: AuthenticationState;
}) {
  const contextValue = useMemo(
    () => value,
    [value],
  );

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication(): AuthenticationState {
  return useContext(AuthenticationContext);
}

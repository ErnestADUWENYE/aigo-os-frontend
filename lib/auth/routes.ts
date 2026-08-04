export type RouteAccess =
  | "public"
  | "authenticated"
  | "customer"
  | "staff";

export type RouteDefinition = {
  path: string;
  access: RouteAccess;
};

export const routes = {
  home: {
    path: "/",
    access: "authenticated",
  },

  status: {
    path: "/status",
    access: "public",
  },

  signIn: {
    path: "/sign-in",
    access: "public",
  },

  unauthorized: {
    path: "/unauthorized",
    access: "public",
  },

  forbidden: {
    path: "/forbidden",
    access: "public",
  },
} satisfies Record<string, RouteDefinition>;

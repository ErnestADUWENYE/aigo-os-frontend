import {
  clerkMiddleware,
} from "@clerk/nextjs/server";


export default clerkMiddleware(
  async (auth) => {
    await auth.protect();
  }
);


export const config = {
  matcher: [
    "/admin/:path*",
    "/console/:path*",
    "/select-organization/:path*",
    "/select-workspace/:path*",
    "/create-organization/:path*",
  ],
};

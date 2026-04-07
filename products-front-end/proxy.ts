import { NextRequest } from "next/server";
import { AUTHENTICATION_COOKIE } from "@/utils/constants";

const PUBLIC_ROUTES = ["/auth"];

export function proxy(request: NextRequest) {
  const authCookie = request.cookies.get(AUTHENTICATION_COOKIE)?.value;

  if (
    !authCookie &&
    !PUBLIC_ROUTES.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    return Response.redirect(new URL("/auth?view=login", request.url));
  } else if (
    authCookie &&
    PUBLIC_ROUTES.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    return Response.redirect(new URL("/comments", request.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"],
};

import { NextRequest } from "next/server";

const PUBLIC_ROUTES = ['/auth']

export function proxy(request: NextRequest) {
  const authCookie = request.cookies.get('Authentication')?.value;

  if (!authCookie && !PUBLIC_ROUTES.some(route => request.nextUrl.pathname.startsWith(route))) {
    return Response.redirect(new URL('/auth?view=login', request.url));
  }
}

export const config = {
  matcher: ['/((?!_next/static|favicon.ico).*)'],
}
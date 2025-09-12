import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value; 
  const { pathname } = request.nextUrl;

  const protectedRoutes = [
    "/sign-in",
    "/sign-up",
    "/create-profile",
    "/forgot-password",
    "/verification",
    "/cart"
  ];


  if (token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/sign-in",
    "/sign-up",
    // "/create-profile",
    "/forgot-password",
    // "/verification",
    // "/cart"
  ],
};

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const ProtectedRoutes = [
    "/myreservation",
    "/checkout",
    "/admin"
];

export async function middleware(request: NextRequest) {
    const session = await auth();
    const isLoggedIn = !!session?.user;
    const role = session?.user.role;
    const { pathname } = request.nextUrl;

    // jika user tidak login dan berusahan mengakses ProtectedRoutes
    if (!isLoggedIn && ProtectedRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL("/signin", request.url))
    }

    // jika user loggin dan bukan admin dan berusaha mengakses halaman admin
    if (isLoggedIn && role !== "admin" && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    // jika user loggin dan berusaha mengakses halaman signin
    if (isLoggedIn && pathname.startsWith("/signin")) {
        return NextResponse.redirect(new URL("/", request.url))
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        {
            source:
                '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },

        {
            source:
                '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
            has: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },

        {
            source:
                '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
            has: [{ type: 'header', key: 'x-present' }],
            missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }],
        },
    ],
}
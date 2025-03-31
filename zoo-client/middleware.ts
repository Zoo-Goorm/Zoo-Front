import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/insight-notes')) {
    const token = request.cookies.get('Authorization');

    if (!token) {
      return NextResponse.redirect(new URL('/none-member', request.url));
    }
  }

  if (pathname.startsWith('/sessions')) {
    const token = request.cookies.get('Authorization');

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (pathname.startsWith('/mypage')) {
    const token = request.cookies.get('Authorization');

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/insight-notes/:path*', '/mypage/:path*'],
};

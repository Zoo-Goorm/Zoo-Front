import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get('Authorization');

  // if (
  //   pathname.startsWith('/insight-notes') ||
  //   pathname.startsWith('/session-apply') ||
  //   pathname.startsWith('/sessions') ||
  //   pathname.startsWith('/mypage')
  // ) {
  //   if (!token) {
  //     return NextResponse.redirect(new URL('/login', request.url));
  //   }
  // }

  // return NextResponse.next();
}

export const config = {
  matcher: [
    '/insight-notes/:path*',
    '/session-apply/:path*',
    '/sessions/:path*',
    '/mypage/:path*',
  ],
};

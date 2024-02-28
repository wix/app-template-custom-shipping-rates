import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const headers = request.headers;
  if (request.nextUrl.searchParams.get('accessToken')) {
    headers.set('Authorization', request.nextUrl.searchParams.get('accessToken')!);
  }
  return NextResponse.next({
    headers,
  });
}

export const config = {
  matcher: [
    {
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      // otherwise server actions do not work
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'next-action' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};

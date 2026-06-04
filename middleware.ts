import { NextResponse, type NextRequest } from 'next/server';
import {
  createAccessCookieValue,
  getAccessCookieName,
  internalAccessConfigured,
} from '@/lib/internal-access';

const protectedPrefixes = ['/thuky', '/thu-nghiem'];

function isProtectedPath(pathname: string) {
  return protectedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  if (!internalAccessConfigured()) {
    return new NextResponse('Khu nội bộ chưa được cấu hình mã truy cập.', { status: 503 });
  }

  const cookieValue = request.cookies.get(getAccessCookieName())?.value;
  const expected = await createAccessCookieValue();

  if (cookieValue && cookieValue === expected) {
    const response = NextResponse.next();
    response.headers.set('x-robots-tag', 'noindex, nofollow');
    return response;
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = '/noi-bo';
  loginUrl.searchParams.set('next', `${pathname}${search}`);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/thuky/:path*', '/thu-nghiem/:path*'],
};

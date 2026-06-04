import { NextRequest, NextResponse } from 'next/server';
import { getAccessCookieName } from '@/lib/internal-access';

export async function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL('/noi-bo', request.url));
  const isSecure = request.nextUrl.protocol === 'https:';
  response.cookies.set({
    name: getAccessCookieName(),
    value: '',
    httpOnly: true,
    sameSite: 'lax',
    secure: isSecure,
    path: '/',
    expires: new Date(0),
  });

  return response;
}

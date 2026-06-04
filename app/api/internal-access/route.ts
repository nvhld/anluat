import { NextRequest, NextResponse } from 'next/server';
import {
  createAccessCookieValue,
  getAccessCookieName,
  internalAccessConfigured,
  isValidAccessCode,
} from '@/lib/internal-access';

function normalizeNextPath(nextPath: unknown) {
  if (typeof nextPath !== 'string' || !nextPath.startsWith('/')) {
    return '/thuky';
  }

  return nextPath;
}

function createCookieResponse(request: NextRequest, response: NextResponse) {
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

async function readAccessPayload(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    const payload = await request.json().catch(() => null);
    return {
      code: typeof payload?.code === 'string' ? payload.code : '',
      nextPath: normalizeNextPath(payload?.next),
      mode: 'json' as const,
    };
  }

  const formData = await request.formData().catch(() => null);
  return {
    code: typeof formData?.get('code') === 'string' ? String(formData.get('code')) : '',
    nextPath: normalizeNextPath(formData?.get('next')),
    mode: 'form' as const,
  };
}

export async function POST(request: NextRequest) {
  const { code, nextPath, mode } = await readAccessPayload(request);

  if (!internalAccessConfigured()) {
    if (mode === 'form') {
      const redirectUrl = new URL('/noi-bo', request.url);
      redirectUrl.searchParams.set('error', 'unavailable');
      redirectUrl.searchParams.set('next', nextPath);
      return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.json({ error: 'Khu nội bộ chưa được cấu hình mã truy cập trên môi trường này.' }, { status: 503 });
  }

  if (!(await isValidAccessCode(code))) {
    if (mode === 'form') {
      const redirectUrl = new URL('/noi-bo', request.url);
      redirectUrl.searchParams.set('error', 'invalid');
      redirectUrl.searchParams.set('next', nextPath);
      return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.json({ error: 'Mã truy cập không hợp lệ.' }, { status: 401 });
  }

  const response =
    mode === 'form' ? NextResponse.redirect(new URL(nextPath, request.url)) : NextResponse.json({ next: nextPath });
  const isSecure = request.nextUrl.protocol === 'https:';
  response.cookies.set({
    name: getAccessCookieName(),
    value: await createAccessCookieValue(),
    httpOnly: true,
    sameSite: 'lax',
    secure: isSecure,
    path: '/',
    maxAge: 60 * 60 * 8,
  });

  return response;
}

export async function DELETE(request: NextRequest) {
  return createCookieResponse(request, NextResponse.json({ ok: true }));
}

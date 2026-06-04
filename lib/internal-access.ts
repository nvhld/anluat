const ACCESS_COOKIE_NAME = 'anluat_internal_access';
const ACCESS_COOKIE_SALT = 'anluat-internal-review-v1';

function getAccessCode() {
  return process.env.INTERNAL_REVIEW_CODE || '';
}

async function digestValue(value: string) {
  const buffer = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(`${ACCESS_COOKIE_SALT}:${value}`)
  );

  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export async function createAccessCookieValue() {
  const code = getAccessCode();
  if (!code) {
    return '';
  }

  return digestValue(code);
}

export async function isValidAccessCode(code: string) {
  if (!code) {
    return false;
  }

  const expected = await createAccessCookieValue();
  if (!expected) {
    return false;
  }

  const actual = await digestValue(code);
  return actual === expected;
}

export function getAccessCookieName() {
  return ACCESS_COOKIE_NAME;
}

export function internalAccessConfigured() {
  return Boolean(getAccessCode());
}

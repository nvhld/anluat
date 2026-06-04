type InternalLoginFormProps = {
  errorCode?: string;
  nextPath?: string;
};

function getErrorMessage(errorCode?: string) {
  if (errorCode === 'invalid') {
    return 'Mã truy cập không hợp lệ.';
  }

  if (errorCode === 'unavailable') {
    return 'Khu nội bộ chưa được cấu hình mã truy cập trên môi trường này.';
  }

  return null;
}

export default function InternalLoginForm({
  errorCode,
  nextPath = '/thuky',
}: InternalLoginFormProps) {
  const error = getErrorMessage(errorCode);

  return (
    <form action="/api/internal-access" method="post" className="rounded-[2rem] border border-border-subtle bg-surface p-8 shadow-sm">
      <div className="space-y-4">
        <label className="block text-sm font-bold text-text-primary" htmlFor="internal-review-code">
          Mã truy cập nội bộ
        </label>
        <input
          id="internal-review-code"
          name="code"
          type="password"
          required
          autoComplete="off"
          placeholder="Nhập mã review nội bộ"
          className="w-full rounded-2xl border border-border-medium bg-white px-4 py-4 text-base outline-none transition-colors focus:border-brand-primary"
        />
        <input name="next" type="hidden" value={nextPath} />
      </div>

      {error ? (
        <p className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-6 w-full rounded-2xl bg-brand-primary px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-primary-hover"
      >
        Vào khu nội bộ
      </button>
    </form>
  );
}

import type { Metadata } from 'next';
import { KeyRound } from 'lucide-react';
import InternalLoginForm from '@/components/InternalLoginForm';

export const metadata: Metadata = {
  title: 'Đăng nhập khu nội bộ',
  robots: {
    index: false,
    follow: false,
  },
};

type InternalLoginPageProps = {
  searchParams?: Promise<{
    error?: string | string[];
    next?: string | string[];
  }>;
};

function getSingleSearchParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function InternalLoginPage({ searchParams }: InternalLoginPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const errorCode = getSingleSearchParam(resolvedSearchParams?.error);
  const nextPath = getSingleSearchParam(resolvedSearchParams?.next) || '/thuky';

  return (
    <main className="min-h-screen bg-canvas text-text-primary">
      <div className="mx-auto grid min-h-screen max-w-5xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">
            <KeyRound size={15} className="text-accent-gold" />
            Truy cập nội bộ An Luật
          </div>
          <div className="space-y-4">
            <h1 className="font-heading text-5xl font-black leading-tight text-brand-primary md:text-6xl">
              Khu review nội bộ cho founder và cộng sự.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
              Tại đây, đội An Luật có thể vào xem các bề mặt AI, intake và dashboard đang trong giai đoạn thử nghiệm, góp ý trực tiếp trước khi quyết định phần nào đủ điều kiện đưa vào vận hành thật.
            </p>
          </div>
          <div className="rounded-[2rem] border border-amber-200 bg-amber-50/80 p-6 text-sm leading-relaxed text-amber-900">
            Khu này được tách khỏi website public. Dandatto Studio đang hoàn thiện dần backend, bảo mật dữ liệu, phân quyền và chuẩn vận hành cho từng mô-đun.
          </div>
        </section>

        <InternalLoginForm errorCode={errorCode} nextPath={nextPath} />
      </div>
    </main>
  );
}

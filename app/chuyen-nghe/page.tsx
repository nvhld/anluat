import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, PhoneCall } from 'lucide-react';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Chuyện nghề',
  description: 'Không gian chia sẻ góc nhìn nghề nghiệp và kiến thức pháp lý từ An Luật.',
  alternates: { canonical: '/chuyen-nghe' },
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-canvas text-text-primary">
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-8 sm:px-6 md:py-14">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-brand-primary">
          <ArrowLeft size={16} />
          Về trang chủ
        </Link>

        <section className="rounded-[2.5rem] border border-border-subtle bg-surface p-8 text-center shadow-sm md:p-14">
          <BookOpen size={34} className="mx-auto text-accent-gold" />
          <span className="mt-6 block text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Chuyện nghề</span>
          <h1 className="mt-4 font-heading text-4xl font-black text-brand-primary md:text-6xl">Nội dung đang được chuẩn hóa.</h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-text-secondary">
            An Luật đang rà soát và biên tập thư viện bài viết trước khi công bố trên website mới. Nội dung sẽ ưu tiên tính chính xác, khả năng áp dụng và sự rõ ràng cho người đọc.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="inline-flex items-center justify-center rounded-2xl border border-border-medium px-6 py-4 text-sm font-bold text-brand-primary">
              Xem thông tin An Luật
            </Link>
            <a href={site.phone.primary.href} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-primary px-6 py-4 text-sm font-bold text-white">
              <PhoneCall size={16} />
              Liên hệ trực tiếp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

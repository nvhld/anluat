import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import PublicFooter from '@/components/PublicFooter';
import PublicHeader from '@/components/PublicHeader';
import { insightArticles } from '@/lib/public-content';

export const metadata: Metadata = {
  title: 'Góc chia sẻ',
  description: 'Không gian tổng hợp các chủ đề An Luật đang ưu tiên chia sẻ công khai trên website mới.',
  alternates: { canonical: '/goc-chia-se' },
};

export default function InsightsHubPage() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <PublicHeader />
      <main>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-brand-primary">
            <ArrowLeft size={16} />
            Về trang chủ
          </Link>

          <section className="mt-8 rounded-[2.5rem] border border-border-subtle bg-surface p-8 shadow-sm md:p-12">
            <BookOpen size={34} className="text-accent-gold" />
            <span className="mt-6 block text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Góc chia sẻ</span>
            <h1 className="mt-4 font-heading text-4xl font-black text-brand-primary md:text-6xl">
              Góc nhìn nghề nghiệp và những chủ đề An Luật đang ưu tiên nói rõ.
            </h1>
            <p className="mt-6 max-w-3xl leading-relaxed text-text-secondary">
              Thư viện nội dung đầy đủ vẫn đang được biên tập lại. Trong giai đoạn này, website ưu tiên đưa lên những chủ đề giúp người đọc hiểu đúng vấn đề, đúng phạm vi dịch vụ và đúng cách bắt đầu liên hệ với An Luật.
            </p>
          </section>

          <section className="mt-12 grid gap-5 md:grid-cols-2">
            {insightArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="rounded-3xl border border-border-subtle bg-white p-7 transition-transform hover:-translate-y-0.5"
              >
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent-gold">{article.category}</span>
                <h2 className="mt-4 font-heading text-2xl font-bold text-brand-primary">{article.title}</h2>
                <p className="mt-3 leading-relaxed text-text-secondary">{article.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-primary">
                  Xem chủ đề này
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </section>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}

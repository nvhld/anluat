import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import PublicFooter from '@/components/PublicFooter';
import PublicHeader from '@/components/PublicHeader';
import { insightArticles } from '@/lib/public-content';

export const metadata: Metadata = {
  title: 'Chuyện nghề',
  description: 'Không gian chia sẻ góc nhìn nghề nghiệp và kiến thức pháp lý từ An Luật.',
  alternates: { canonical: '/chuyen-nghe' },
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <PublicHeader />
      <main>
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-8 sm:px-6 md:py-14">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-brand-primary">
          <ArrowLeft size={16} />
          Về trang chủ
        </Link>

        <section className="rounded-[2.5rem] border border-border-subtle bg-surface p-8 shadow-sm md:p-14">
          <BookOpen size={34} className="text-accent-gold" />
          <span className="mt-6 block text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Chuyện nghề</span>
          <h1 className="mt-4 font-heading text-4xl font-black text-brand-primary md:text-6xl">Những chủ đề An Luật đang ưu tiên nói cho rõ.</h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-text-secondary">
            Trong khi thư viện nội dung đầy đủ đang được biên tập lại, An Luật ưu tiên chia sẻ các chủ đề giúp người đọc hiểu đúng vấn đề, đúng phạm vi dịch vụ và đúng cách bắt đầu.
          </p>
          <div className="mt-8 grid gap-4">
            {insightArticles.slice(0, 3).map((article) => (
              <Link key={article.href} href={article.href} className="rounded-2xl border border-border-subtle bg-white p-5 transition-colors hover:bg-stone-50">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent-gold">{article.category}</span>
                <h2 className="mt-2 font-bold text-brand-primary">{article.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{article.summary}</p>
              </Link>
            ))}
          </div>
          <Link href="/goc-chia-se" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-primary">
            Xem đầy đủ Góc chia sẻ
            <ArrowRight size={15} />
          </Link>
        </section>
      </div>
      </main>
      <PublicFooter />
    </div>
  );
}

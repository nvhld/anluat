import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react';
import type { PracticePageContent } from '@/lib/public-content';
import { site } from '@/lib/site';
import PublicFooter from '@/components/PublicFooter';
import PublicHeader from '@/components/PublicHeader';

type PracticeAreaPageProps = {
  content: PracticePageContent;
};

export default function PracticeAreaPage({ content }: PracticeAreaPageProps) {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <PublicHeader />
      <main>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-brand-primary">
            <ArrowLeft size={16} />
            Về trang chủ
          </Link>

          <section className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">
                {content.eyebrow}
              </span>
              <h1 className="font-heading text-4xl font-black leading-tight text-brand-primary md:text-6xl">
                {content.title}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">{content.summary}</p>
              <p className="max-w-3xl leading-relaxed text-text-secondary">{content.intro}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={content.primaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-primary px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-primary-hover"
                >
                  {content.primaryCtaLabel}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={content.secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border-medium bg-white px-6 py-4 text-sm font-bold text-brand-primary transition-colors hover:bg-stone-50"
                >
                  {content.secondaryCtaLabel}
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-border-subtle bg-surface p-7 shadow-sm">
              <ShieldCheck size={26} className="text-accent-gold" />
              <h2 className="mt-5 font-heading text-2xl font-bold text-brand-primary">Cách An Luật hỗ trợ</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-text-secondary">
                {content.supportScope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-border-subtle bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-gold">Liên hệ nhanh</p>
                <a
                  href={site.phone.primary.href}
                  className="mt-3 inline-flex items-center gap-2 text-base font-bold text-brand-primary"
                >
                  <PhoneCall size={16} />
                  {site.phone.primary.display}
                </a>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  Thư ký An Luật sẽ giúp ghi nhận nhu cầu ban đầu và hướng dẫn bước tiếp theo phù hợp.
                </p>
              </div>
            </aside>
          </section>

          <section className="mt-14 grid gap-6 md:grid-cols-2">
            {content.commonSituations.map((item) => (
              <article key={item} className="rounded-3xl border border-border-subtle bg-white p-6">
                <p className="text-sm leading-relaxed text-text-secondary">{item}</p>
              </article>
            ))}
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-border-subtle bg-surface p-8">
              <h2 className="font-heading text-3xl font-black text-brand-primary">Điểm An Luật giữ rất kỹ</h2>
              <ul className="mt-6 space-y-4">
                {content.strengths.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-brand-primary p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">
                {content.checklistTitle}
              </p>
              <ul className="mt-6 space-y-4">
                {content.checklistItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] border border-border-subtle bg-white p-8 md:p-10">
            <h2 className="font-heading text-3xl font-black text-brand-primary">Câu hỏi thường gặp</h2>
            <div className="mt-6 space-y-5">
              {content.faq.map((item) => (
                <article key={item.question} className="rounded-2xl border border-border-subtle bg-surface p-5">
                  <h3 className="font-bold text-brand-primary">{item.question}</h3>
                  <p className="mt-2 leading-relaxed text-text-secondary">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          {content.relatedLinks?.length ? (
            <section className="mt-14">
              <h2 className="font-heading text-3xl font-black text-brand-primary">Xem thêm</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {content.relatedLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between rounded-3xl border border-border-subtle bg-white px-6 py-5 font-bold text-brand-primary transition-colors hover:bg-surface"
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}

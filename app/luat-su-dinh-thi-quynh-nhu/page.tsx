import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, PhoneCall } from 'lucide-react';
import PublicFooter from '@/components/PublicFooter';
import PublicHeader from '@/components/PublicHeader';
import { founderProfile } from '@/lib/public-content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Luật sư Đinh Thị Quỳnh Như',
  description:
    'Trang giới thiệu Luật sư Đinh Thị Quỳnh Như, luật sư sáng lập An Luật và gương mặt của 1 GIỜ GẶP NHƯ.',
  alternates: { canonical: '/luat-su-dinh-thi-quynh-nhu' },
};

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <PublicHeader />
      <main>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-brand-primary">
            <ArrowLeft size={16} />
            Về trang chủ
          </Link>

          <section className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Luật sư sáng lập</span>
              <h1 className="font-heading text-5xl font-black leading-tight text-brand-primary md:text-6xl">
                {site.founder.name}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
                Gương mặt tin cậy đứng sau An Luật và là người được gắn với trải nghiệm 1 GIỜ GẶP NHƯ: một buổi trao đổi riêng để khách hàng hiểu đúng vấn đề và chuẩn bị đúng bước tiếp theo.
              </p>
              <div className="flex flex-wrap gap-3">
                {founderProfile.roleChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border-medium bg-white px-4 py-2 text-sm font-bold text-brand-primary"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/1-gio-gap-nhu"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-primary px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-primary-hover"
                >
                  Tìm hiểu 1 GIỜ GẶP NHƯ
                </Link>
                <a
                  href={site.phone.primary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border-medium bg-white px-6 py-4 text-sm font-bold text-brand-primary transition-colors hover:bg-stone-50"
                >
                  <PhoneCall size={16} />
                  Gọi An Luật
                </a>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-border-subtle bg-surface p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-brand-primary">Mảng đồng hành chính</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-text-secondary">
                {founderProfile.focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-border-subtle bg-white p-8">
              <h2 className="font-heading text-3xl font-black text-brand-primary">Cách làm việc</h2>
              <ul className="mt-6 space-y-4">
                {founderProfile.workingStyle.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-brand-primary p-8 text-white">
              <h2 className="font-heading text-3xl font-black">Những nền tảng tạo niềm tin</h2>
              <ul className="mt-6 space-y-4">
                {founderProfile.proofPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}

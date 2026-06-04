import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import PublicFooter from '@/components/PublicFooter';
import PublicHeader from '@/components/PublicHeader';
import { oneHourWithNhuContent } from '@/lib/public-content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: '1 GIỜ GẶP NHƯ',
  description:
    'Buổi tư vấn riêng để bạn kể đúng chuyện, hiểu đúng vấn đề và biết bước tiếp theo nên làm gì với An Luật.',
  alternates: { canonical: '/1-gio-gap-nhu' },
};

export default function OneHourWithNhuPage() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <PublicHeader />
      <main>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-brand-primary">
            <ArrowLeft size={16} />
            Về trang chủ
          </Link>

          <section className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Sản phẩm chuyển đổi chính</span>
              <h1 className="font-heading text-5xl font-black leading-tight text-brand-primary md:text-7xl">
                1 GIỜ GẶP NHƯ
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
                Một buổi tư vấn riêng để bạn kể đúng chuyện, hiểu đúng vấn đề và biết mình nên làm gì tiếp theo.
              </p>
              <div className="flex flex-wrap gap-3">
                {oneHourWithNhuContent.outcomeChips.map((chip) => (
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
                  href="/lien-he"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-primary px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-primary-hover"
                >
                  Gửi thông tin để An Luật gọi lại
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={site.phone.primary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border-medium bg-white px-6 py-4 text-sm font-bold text-brand-primary transition-colors hover:bg-stone-50"
                >
                  <PhoneCall size={16} />
                  Tôi muốn thư ký gọi trước
                </a>
              </div>
              <p className="text-sm leading-relaxed text-text-muted">
                Phí tư vấn được xác nhận sau khi An Luật xem sơ bộ nội dung vụ việc. Website chưa hiển thị giá công khai và chưa xử lý thanh toán online.
              </p>
            </div>

            <aside className="rounded-[2rem] border border-border-subtle bg-surface p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-brand-primary">
                Khi bạn đang rối, điều đầu tiên cần không phải là nhiều thông tin hơn.
              </h2>
              <p className="mt-4 leading-relaxed text-text-secondary">
                Điều bạn cần là một người đủ kinh nghiệm để giúp sắp xếp lại câu chuyện, nhận diện đúng vấn đề pháp lý và chọn bước đi an toàn.
              </p>
              <div className="mt-6 rounded-2xl border border-border-subtle bg-white p-5">
                <p className="text-sm font-bold text-brand-primary">Phù hợp nếu bạn đang cần:</p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-secondary">
                  {oneHourWithNhuContent.suitableFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </section>

          <section className="mt-14 rounded-[2rem] border border-border-subtle bg-white p-8 md:p-10">
            <h2 className="font-heading text-3xl font-black text-brand-primary">Buổi tư vấn diễn ra như thế nào?</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {oneHourWithNhuContent.howItWorks.map((step) => (
                <article key={step.title} className="rounded-3xl border border-border-subtle bg-surface p-6">
                  <h3 className="font-bold text-brand-primary">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-text-secondary">{step.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] bg-brand-primary p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Phiếu chuẩn bị chung</p>
              <ul className="mt-6 space-y-4">
                {oneHourWithNhuContent.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-border-subtle bg-surface p-8">
              <h2 className="font-heading text-3xl font-black text-brand-primary">Buổi này không nhằm mục đích</h2>
              <ul className="mt-6 space-y-4">
                {oneHourWithNhuContent.notFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
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

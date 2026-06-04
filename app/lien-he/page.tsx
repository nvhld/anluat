import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, PhoneCall } from 'lucide-react';
import PublicFooter from '@/components/PublicFooter';
import PublicHeader from '@/components/PublicHeader';
import { contactFlow } from '@/lib/public-content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Liên hệ',
  description:
    'Hotline, văn phòng và cách An Luật tiếp nhận nhu cầu ban đầu của cá nhân và doanh nghiệp.',
  alternates: { canonical: '/lien-he' },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <PublicHeader />
      <main>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-brand-primary">
            <ArrowLeft size={16} />
            Về trang chủ
          </Link>

          <section className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Liên hệ với An Luật</span>
              <h1 className="font-heading text-5xl font-black leading-tight text-brand-primary md:text-6xl">
                Bắt đầu bằng một cuộc gọi đủ ngắn, nhưng đúng trọng tâm.
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
                An Luật ưu tiên tiếp nhận qua hotline để thư ký ghi nhận nhóm vấn đề, mức độ khẩn cấp và hướng dẫn phần chuẩn bị cần thiết trước khi đi sâu hơn.
              </p>
              <div className="grid gap-3 sm:max-w-xl">
                <a
                  href={site.phone.primary.href}
                  className="flex items-center justify-between rounded-2xl bg-brand-primary px-6 py-5 font-bold text-white transition-colors hover:bg-brand-primary-hover"
                >
                  <span>Hotline 1: {site.phone.primary.display}</span>
                  <PhoneCall size={18} />
                </a>
                <a
                  href={site.phone.secondary.href}
                  className="flex items-center justify-between rounded-2xl border border-border-medium bg-white px-6 py-5 font-bold text-brand-primary transition-colors hover:bg-stone-50"
                >
                  <span>Hotline 2: {site.phone.secondary.display}</span>
                  <PhoneCall size={18} />
                </a>
              </div>
              <p className="text-sm leading-relaxed text-text-muted">
                Ở bước đầu, bạn chỉ cần chia sẻ phần thông tin tối thiểu để An Luật hiểu nhu cầu liên hệ. Quan hệ luật sư - khách hàng chỉ hình thành sau khi có xác nhận tiếp nhận phù hợp.
              </p>
            </div>

            <aside className="rounded-[2rem] border border-border-subtle bg-surface p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-brand-primary">Văn phòng</h2>
              <div className="mt-5 space-y-5">
                {site.offices.map((office) => (
                  <article key={office.name} className="rounded-2xl border border-border-subtle bg-white p-5">
                    <h3 className="font-bold text-brand-primary">{office.name}</h3>
                    <p className="mt-2 leading-relaxed text-text-secondary">{office.description}</p>
                  </article>
                ))}
              </div>
            </aside>
          </section>

          <section className="mt-14 rounded-[2rem] border border-border-subtle bg-white p-8 md:p-10">
            <h2 className="font-heading text-3xl font-black text-brand-primary">An Luật thường tiếp nhận như thế nào?</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {contactFlow.map((step) => (
                <article key={step.title} className="rounded-3xl border border-border-subtle bg-surface p-6">
                  <h3 className="font-bold text-brand-primary">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-text-secondary">{step.body}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}

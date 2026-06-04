import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, PhoneCall, Scale, ShieldCheck } from 'lucide-react';
import PublicFooter from '@/components/PublicFooter';
import PublicHeader from '@/components/PublicHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Về An Luật',
  description: 'Tìm hiểu quá trình hình thành, phạm vi dịch vụ và nguyên tắc làm việc của Công ty Luật TNHH MTV An Luật.',
  alternates: { canonical: '/ve-an-luat' },
};

const services = [
  'Tư vấn pháp lý cho cá nhân và doanh nghiệp',
  'Soạn thảo, rà soát hợp đồng và hồ sơ nội bộ',
  'Tư vấn lao động, nhân sự và tuân thủ pháp luật',
  'Giải quyết tranh chấp, tranh tụng và thu hồi nợ',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <PublicHeader />
      <main>
      <div className="mx-auto max-w-5xl space-y-12 px-4 py-8 sm:px-6 md:py-14">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-brand-primary">
          <ArrowLeft size={16} />
          Về trang chủ
        </Link>

        <section className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Về chúng tôi</span>
            <h1 className="font-heading text-5xl font-black leading-tight text-brand-primary md:text-6xl">An Luật</h1>
            <p className="text-lg leading-relaxed text-text-secondary">
              {site.legalName} được thành lập năm 2006 bởi Luật sư Đinh Thị Quỳnh Như. An Luật cung cấp dịch vụ pháp lý cho cá nhân và doanh nghiệp, với định hướng tiếp nhận cởi mở, tư vấn rõ ràng và xử lý tận tâm.
            </p>
            <p className="leading-relaxed text-text-secondary">
              Từ năm 2020, An Luật mở rộng hoạt động với chi nhánh tại Bà Rịa - Vũng Tàu, đồng thời duy trì hoạt động tại TP. Hồ Chí Minh.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/luat-su-dinh-thi-quynh-nhu" className="text-sm font-bold text-brand-primary">
                Hồ sơ Luật sư Quỳnh Như
              </Link>
              <Link href="/1-gio-gap-nhu" className="text-sm font-bold text-brand-primary">
                Tìm hiểu 1 GIỜ GẶP NHƯ
              </Link>
              <Link href="/dao-tao" className="text-sm font-bold text-brand-primary">
                Xem mảng đào tạo
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-border-subtle bg-surface p-8 lg:col-span-5">
            <Scale size={28} className="text-accent-gold" />
            <h2 className="mt-5 font-heading text-2xl font-bold text-brand-primary">Thông tin liên hệ</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{site.address}</p>
            <div className="mt-6 grid gap-3">
              <a href={site.phone.primary.href} className="flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-bold text-white">
                <PhoneCall size={16} />
                {site.phone.primary.display}
              </a>
              <a href={site.phone.secondary.href} className="flex items-center gap-2 rounded-xl border border-border-medium px-5 py-3 text-sm font-bold text-brand-primary">
                <PhoneCall size={16} />
                {site.phone.secondary.display}
              </a>
            </div>
          </aside>
        </section>

        <section className="grid gap-8 border-t border-border-subtle pt-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-black text-brand-primary">Phạm vi dịch vụ</h2>
            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-brand-primary p-8 text-white">
            <ShieldCheck size={28} className="text-accent-gold" />
            <h2 className="mt-5 font-heading text-3xl font-bold">Nguyên tắc hành nghề</h2>
            <p className="mt-4 leading-relaxed text-white/75">
              An Luật trao đổi rõ phạm vi công việc, đánh giá khách quan các rủi ro và bảo mật thông tin theo chuẩn mực nghề nghiệp. Việc tiếp nhận một vụ việc chỉ được xác nhận sau khi có trao đổi trực tiếp và kiểm tra xung đột lợi ích.
            </p>
          </div>
        </section>
      </div>
      </main>
      <PublicFooter />
    </div>
  );
}

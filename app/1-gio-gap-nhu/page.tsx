import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import PublicFooter from '@/components/PublicFooter';
import PublicHeader from '@/components/PublicHeader';
import { oneHourWithNhuContent } from '@/lib/public-content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: '1 GIỜ GẶP NHƯ',
  description:
    'Một buổi tư vấn riêng để bạn kể đúng chuyện, hiểu đúng vấn đề và biết bước tiếp theo nên làm gì với An Luật.',
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

          <section className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <div className="space-y-6 rounded-[2.5rem] border border-border-subtle bg-white p-7 shadow-sm md:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Sản phẩm chuyển đổi chính</span>
              <h1 className="font-heading text-5xl font-black leading-tight text-brand-primary md:text-7xl">1 GIỜ GẶP NHƯ</h1>
              <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
                Một buổi tư vấn riêng để bạn kể đúng chuyện, hiểu đúng vấn đề và biết mình nên làm gì tiếp theo.
              </p>

              <div className="flex flex-wrap gap-3">
                {oneHourWithNhuContent.outcomeChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border-medium bg-surface px-4 py-2 text-sm font-bold text-brand-primary"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#gui-thong-tin"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-primary px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-primary-hover"
                >
                  Gửi thông tin vụ việc
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
                Phí tư vấn được xác nhận sau khi An Luật xem sơ bộ nội dung vụ việc. Website không hiển thị giá công
                khai và chưa xử lý thanh toán online cho buổi này.
              </p>
            </div>

            <aside className="overflow-hidden rounded-[2.5rem] border border-border-subtle bg-brand-primary p-7 text-white shadow-sm md:p-10">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white/10 text-accent-gold">
                <Sparkles size={34} />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Authority block</p>
              <h2 className="mt-3 font-heading text-3xl font-black leading-tight md:text-4xl">
                Một buổi để sắp xếp lại câu chuyện trước khi bạn đi xa hơn với một quyết định lớn.
              </h2>
              <p className="mt-4 leading-relaxed text-white/78">
                {site.founder.title} {site.founder.name} và đội ngũ An Luật dùng buổi này để giúp bạn nhìn rõ vấn đề,
                không để bạn bắt đầu bằng một mớ thông tin nhiều hơn nữa.
              </p>

              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/8 p-5">
                <p className="text-sm font-bold text-white">Phù hợp nếu bạn đang cần:</p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/78">
                  {oneHourWithNhuContent.suitableFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </section>

          <section className="mt-14 grid gap-5 lg:grid-cols-3">
            {oneHourWithNhuContent.suitabilityCards.map((card) => (
              <article key={card.title} className="rounded-[2rem] border border-border-subtle bg-white p-6">
                <h2 className="font-heading text-2xl font-bold text-brand-primary">{card.title}</h2>
                <p className="mt-3 leading-relaxed text-text-secondary">{card.body}</p>
              </article>
            ))}
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-border-subtle bg-surface p-8">
              <h2 className="font-heading text-3xl font-black text-brand-primary">
                Khi bạn đang rối, điều đầu tiên cần không phải là nhiều thông tin hơn.
              </h2>
              <p className="mt-4 leading-relaxed text-text-secondary">
                Điều bạn cần là một người đủ kinh nghiệm để giúp sắp xếp lại câu chuyện, nhận diện đúng vấn đề pháp lý
                và chọn bước đi an toàn hơn.
              </p>

              <div className="mt-6 grid gap-3">
                {oneHourWithNhuContent.trustNotes.map((item) => (
                  <div key={item} className="rounded-2xl border border-border-subtle bg-white px-4 py-4">
                    <p className="text-sm font-bold text-brand-primary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-brand-primary p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Sau buổi gặp</p>
              <h2 className="mt-4 font-heading text-3xl font-black">Bạn sẽ rõ hơn về...</h2>
              <ul className="mt-6 space-y-4">
                {oneHourWithNhuContent.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] border border-border-subtle bg-white p-8 md:p-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Quy trình</p>
              <h2 className="font-heading text-3xl font-black text-brand-primary">Buổi này diễn ra như thế nào?</h2>
              <p className="leading-relaxed text-text-secondary">
                Chúng tôi giữ quy trình gọn để bạn không phải tự xoay với quá nhiều bước từ đầu.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {oneHourWithNhuContent.howItWorks.map((step, index) => (
                <article key={step.title} className="rounded-[1.75rem] border border-border-subtle bg-surface p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Bước {index + 1}</p>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-brand-primary">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-text-secondary">{step.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-border-subtle bg-white p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Phiếu chuẩn bị chung</p>
              <ul className="mt-6 space-y-4">
                {oneHourWithNhuContent.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
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

          <section className="mt-14 rounded-[2rem] border border-border-subtle bg-white p-8 md:p-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Chuẩn bị theo nhóm vấn đề</p>
              <h2 className="font-heading text-3xl font-black text-brand-primary">Bạn không cần chuẩn bị mọi thứ. Chỉ cần đúng nhóm.</h2>
              <p className="leading-relaxed text-text-secondary">
                Những gợi ý dưới đây chỉ để buổi gặp bắt đầu đúng trọng tâm hơn. Nếu thiếu tài liệu, An Luật sẽ giúp bạn
                xác định phần nào cần trước, phần nào có thể bổ sung sau.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {oneHourWithNhuContent.preparationGroups.map((group) => (
                <article key={group.title} className="rounded-[1.75rem] border border-border-subtle bg-surface p-6">
                  <h3 className="font-heading text-2xl font-bold text-brand-primary">{group.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-text-secondary">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            id="gui-thong-tin"
            className="mt-14 rounded-[2.5rem] border border-border-subtle bg-brand-primary p-8 text-white md:p-10"
          >
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Bước tiếp theo</p>
              <h2 className="font-heading text-4xl font-black leading-tight">Nếu buổi này hợp với bạn, hãy mở bước tiếp theo thật gọn.</h2>
              <p className="leading-relaxed text-white/78">
                Bạn có thể để thư ký gọi lại trước, hoặc gọi trực tiếp nếu việc đang gấp. Chúng tôi giữ bước đầu đủ ngắn
                để bạn không phải “điền hết mọi thứ” trước khi được hướng dẫn.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[1.75rem] bg-white p-6 text-brand-primary">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Lối vào khuyến nghị</p>
                <h3 className="mt-3 font-heading text-2xl font-bold">Để An Luật gọi lại cho tôi</h3>
                <p className="mt-3 leading-relaxed text-text-secondary">
                  Phù hợp khi bạn muốn kể sơ bộ trước, rồi để thư ký xác nhận lịch, mức độ phù hợp và giấy tờ nên chuẩn bị.
                </p>
                <Link
                  href="/lien-he"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-primary transition-colors hover:text-brand-secondary"
                >
                  Mở bước tiếp theo
                  <ArrowRight size={15} />
                </Link>
              </article>

              <article className="rounded-[1.75rem] border border-white/12 bg-white/8 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Nếu việc đang gấp</p>
                <h3 className="mt-3 font-heading text-2xl font-bold">Gọi thư ký An Luật ngay</h3>
                <p className="mt-3 leading-relaxed text-white/78">
                  Thích hợp khi bạn đang có hạn phản hồi, lịch làm việc, lịch tòa hoặc một tín hiệu cần giữ đúng nhịp tiếp nhận.
                </p>
                <a href={site.phone.primary.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                  <PhoneCall size={15} />
                  {site.phone.primary.display}
                </a>
              </article>
            </div>
          </section>
        </div>
      </main>

      <div className="sticky bottom-0 z-40 border-t border-border-subtle bg-canvas/95 px-4 py-3 backdrop-blur md:hidden">
        <Link
          href="#gui-thong-tin"
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-primary px-5 py-3 text-sm font-bold text-white"
        >
          Gửi thông tin vụ việc
          <ArrowRight size={15} />
        </Link>
      </div>

      <PublicFooter />
    </div>
  );
}

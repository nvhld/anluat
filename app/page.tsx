import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Gavel,
  GraduationCap,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import LegalSafetyMap from '@/components/LegalSafetyMap';
import PublicFooter from '@/components/PublicFooter';
import PublicHeader from '@/components/PublicHeader';
import { founderTimeline, homeTrustHighlights, intakeDoors, insightArticles } from '@/lib/public-content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Phòng khám pháp lý cho cá nhân và doanh nghiệp',
  description:
    'An Luật giúp cá nhân và doanh nghiệp chọn đúng cửa tiếp nhận pháp lý, nhìn rõ vấn đề và mở đúng bước tiếp theo.',
  alternates: { canonical: '/' },
};

const doorIcons = [Users, BriefcaseBusiness, Building2, Gavel, GraduationCap];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary selection:bg-accent-gold selection:text-brand-primary">
      <PublicHeader />

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">
              <ShieldCheck size={15} className="text-accent-gold" />
              Legal triage từ năm 2006
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl font-heading text-5xl font-black leading-[1.02] tracking-tight text-brand-primary sm:text-6xl md:text-7xl">
                Bạn không cần biết tên đúng của vấn đề pháp lý ngay từ đầu.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
                Bạn chỉ cần chọn nhóm tình huống gần nhất với mình. An Luật sẽ giúp mở đúng cửa, giữ câu chuyện đủ kín
                và dẫn bạn đến bước tiếp theo phù hợp hơn.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Cá nhân', 'Người lao động', 'Founder', 'HR', 'Doanh nghiệp'].map((chip) => (
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
                href="/#nam-cua-tiep-nhan"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-primary px-7 py-4 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-primary-hover hover:shadow-md"
              >
                Chọn nhóm vấn đề
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/1-gio-gap-nhu"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border-medium bg-white px-7 py-4 text-sm font-bold text-brand-primary transition-colors hover:bg-stone-50"
              >
                Mở 1 GIỜ GẶP NHƯ
              </Link>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-text-muted">
              Nếu bạn đang ở một tình huống nhạy cảm, chưa cần kể hết mọi chi tiết ngay trên web. Trước tiên, hãy chọn
              đúng cửa gần nhất với mình.
            </p>
          </div>

          <aside className="relative overflow-hidden rounded-[2.75rem] border border-border-subtle bg-surface p-8 shadow-sm md:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent-gold/12 blur-3xl" />
            <div className="relative">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-brand-primary text-accent-gold">
                <Sparkles size={34} />
              </div>

              <h2 className="mt-7 font-heading text-3xl font-black leading-tight text-brand-primary md:text-4xl">
                Một website luật không nên bắt người dùng tự phân loại mọi thứ một mình.
              </h2>
              <p className="mt-4 leading-relaxed text-text-secondary">
                An Luật được dựng lại như một phòng khám pháp lý: tiếp nhận cởi mở, phân loại nhanh, rồi mới đi sâu đúng
                người, đúng hồ sơ, đúng bước.
              </p>

              <div className="mt-7 grid gap-3">
                {homeTrustHighlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-border-subtle bg-white px-4 py-4">
                    <p className="text-sm font-bold text-brand-primary">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[1.75rem] border border-border-subtle bg-brand-primary p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Liên hệ nhanh</p>
                <a href={site.phone.primary.href} className="mt-3 inline-flex items-center gap-2 text-lg font-bold">
                  <PhoneCall size={17} />
                  {site.phone.primary.display}
                </a>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Thư ký An Luật có thể ghi nhận nhóm vấn đề và mở đúng lối tiếp nhận nếu việc của bạn đang khá gấp.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section id="nam-cua-tiep-nhan" className="border-y border-border-subtle bg-white/70">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">5 cửa tiếp nhận</span>
              <h2 className="font-heading text-3xl font-black text-brand-primary md:text-5xl">
                Thay vì lần mò qua menu, hãy bắt đầu từ cửa gần nhất với câu chuyện của bạn.
              </h2>
              <p className="leading-relaxed text-text-secondary">
                Mỗi cửa dưới đây là một lối vào. Bạn không cần chắc 100% mình đang ở đúng nhóm; chỉ cần chọn nhóm gần
                nhất để được đi tiếp dễ hơn.
              </p>
            </div>

            <div className="mt-10 grid gap-5 xl:grid-cols-5">
              {intakeDoors.map((door, index) => {
                const Icon = doorIcons[index];

                return (
                  <article key={door.title} className="rounded-[2rem] border border-border-subtle bg-surface p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm">
                      <Icon size={22} />
                    </div>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">{door.audience}</p>
                    <h3 className="mt-3 font-heading text-2xl font-bold text-brand-primary">{door.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{door.description}</p>
                    <Link
                      href={door.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-primary transition-colors hover:text-brand-secondary"
                    >
                      {door.primaryLabel}
                      <ArrowRight size={15} />
                    </Link>
                    <p className="mt-2 text-xs leading-relaxed text-text-muted">{door.secondaryLabel}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <LegalSafetyMap />
        </section>

        <section className="border-y border-border-subtle bg-surface/60">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] bg-brand-primary p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">1 GIỜ GẶP NHƯ</p>
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight">
                Khi bạn cần một buổi định hướng riêng trước khi đưa ra quyết định lớn.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/78">
                Đây là sản phẩm chuyển đổi chính của An Luật: một buổi tư vấn riêng để kể đúng chuyện, hiểu đúng vấn đề
                và biết bước tiếp theo nên làm gì.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/1-gio-gap-nhu"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-brand-primary transition-colors hover:bg-stone-100"
                >
                  Tìm hiểu 1 GIỜ GẶP NHƯ
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/lien-he"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  Để An Luật gọi lại
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border-subtle bg-white p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Dấu mốc tin cậy</p>
              <div className="mt-6 space-y-5">
                {founderTimeline.map((item) => (
                  <div key={item.label} className="grid gap-2 border-l border-border-medium pl-5">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-secondary">{item.label}</p>
                    <p className="leading-relaxed text-text-secondary">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Góc chia sẻ</span>
              <h2 className="font-heading text-3xl font-black text-brand-primary md:text-4xl">
                Một vài điểm đọc nhanh để bạn bớt rối trước khi đi sâu.
              </h2>
              <p className="leading-relaxed text-text-secondary">
                Chúng tôi giữ phần này gọn: ít bài hơn, nhưng mỗi bài phải giúp người đọc nhìn rõ một nút thắt thật.
              </p>
            </div>

            <Link href="/goc-chia-se" className="text-sm font-bold text-brand-primary">
              Xem toàn bộ góc chia sẻ
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {insightArticles.slice(0, 3).map((article) => (
              <article key={article.href} className="rounded-[2rem] border border-border-subtle bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">{article.category}</p>
                <h3 className="mt-3 font-heading text-2xl font-bold leading-snug text-brand-primary">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{article.summary}</p>
                <Link
                  href={article.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-primary transition-colors hover:text-brand-secondary"
                >
                  Đọc tiếp
                  <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}

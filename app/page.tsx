import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Flower,
  Gavel,
  Landmark,
  PhoneCall,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { site } from '@/lib/site';

const practices = [
  {
    title: 'Cá nhân & gia đình',
    description: 'Tư vấn và giải quyết các vấn đề dân sự, hôn nhân gia đình, thừa kế và tài sản.',
    icon: Users,
    color: 'bg-amber-50 border-amber-100 text-amber-800',
  },
  {
    title: 'Lao động & nhân sự',
    description: 'Hỗ trợ người lao động và doanh nghiệp trong quan hệ lao động, kỷ luật và tranh chấp.',
    icon: BriefcaseBusiness,
    color: 'bg-emerald-50 border-emerald-100 text-emerald-800',
  },
  {
    title: 'Doanh nghiệp & hợp đồng',
    description: 'Tư vấn thường xuyên, rà soát hợp đồng, quản trị nội bộ và tuân thủ pháp luật.',
    icon: Building2,
    color: 'bg-sky-50 border-sky-100 text-sky-800',
  },
  {
    title: 'Tranh tụng & thu hồi nợ',
    description: 'Đánh giá hồ sơ, thương lượng và bảo vệ quyền lợi hợp pháp trong quá trình tố tụng.',
    icon: Gavel,
    color: 'bg-rose-50 border-rose-100 text-rose-800',
  },
];

const principles = [
  'Lắng nghe kỹ trước khi đề xuất hướng xử lý.',
  'Phân tích rõ quyền lợi, giới hạn và rủi ro pháp lý.',
  'Minh bạch về phạm vi công việc và chi phí.',
  'Bảo mật thông tin theo chuẩn mực nghề nghiệp.',
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary selection:bg-accent-gold selection:text-brand-primary">
      <header className="sticky top-0 z-50 border-b border-border-subtle bg-canvas/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="An Luật - Trang chủ">
            <span className="rounded-xl bg-brand-primary p-2 text-accent-gold">
              <Flower size={20} />
            </span>
            <span>
              <strong className="block font-heading text-lg font-black leading-none text-brand-primary">An Luật</strong>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary">
                Chọn đúng hướng pháp lý
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-bold text-text-secondary md:flex" aria-label="Điều hướng chính">
            <a href="#linh-vuc" className="transition-colors hover:text-brand-primary">Lĩnh vực</a>
            <a href="#an-luat" className="transition-colors hover:text-brand-primary">Về An Luật</a>
            <a href="#lien-he" className="transition-colors hover:text-brand-primary">Liên hệ</a>
          </nav>

          <a
            href={site.phone.primary.href}
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-primary-hover sm:text-sm"
          >
            <PhoneCall size={15} />
            <span className="hidden sm:inline">Gọi An Luật</span>
            <span className="sm:hidden">Gọi ngay</span>
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:items-center">
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">
              <ShieldCheck size={15} className="text-accent-gold" />
              Hoạt động từ năm 2006
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl font-heading text-5xl font-black leading-[1.02] tracking-tight text-brand-primary sm:text-6xl md:text-7xl">
                Thấu hiểu để bảo vệ.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
                An Luật đồng hành cùng cá nhân và doanh nghiệp để nhìn rõ vấn đề, đánh giá rủi ro và chọn hướng xử lý pháp lý phù hợp.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phone.primary.href}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-primary px-7 py-4 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-primary-hover hover:shadow-md"
              >
                <PhoneCall size={18} />
                Gọi {site.phone.primary.display}
              </a>
              <a
                href="#linh-vuc"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border-medium bg-white px-7 py-4 text-sm font-bold text-brand-primary transition-colors hover:bg-stone-50"
              >
                Xem lĩnh vực hỗ trợ
                <ArrowRight size={16} />
              </a>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-text-muted">
              Website hiện không thu thập nội dung vụ việc trực tuyến. Khi liên hệ lần đầu, bạn chỉ cần chia sẻ thông tin tối thiểu cần thiết để được hướng dẫn bước tiếp theo.
            </p>
          </div>

          <div className="relative lg:col-span-5">
            <div className="rounded-[2.5rem] border border-border-subtle bg-surface p-8 shadow-sm md:p-10">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary text-accent-gold">
                <Scale size={30} />
              </div>
              <p className="font-heading text-2xl font-bold leading-snug text-brand-primary md:text-3xl">
                Một cuộc trao đổi đúng trọng tâm có thể giúp bạn tránh nhiều quyết định vội vàng.
              </p>
              <div className="mt-8 border-t border-border-subtle pt-6">
                <p className="text-sm font-bold text-text-primary">{site.legalName}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{site.address}</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 -z-10 h-full w-full rounded-[2.5rem] border border-accent-gold/30 bg-accent-gold/10" />
          </div>
        </section>

        <section id="linh-vuc" className="border-y border-border-subtle bg-white/60">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <div className="mb-10 max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Lĩnh vực trọng tâm</span>
              <h2 className="font-heading text-3xl font-black text-brand-primary md:text-4xl">
                Hỗ trợ pháp lý cho cá nhân và doanh nghiệp
              </h2>
              <p className="leading-relaxed text-text-secondary">
                Phạm vi cụ thể và luật sư phụ trách được xác nhận sau khi An Luật xem xét thông tin sơ bộ và kiểm tra xung đột lợi ích.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {practices.map((practice) => (
                <article key={practice.title} className={`rounded-3xl border p-7 md:p-8 ${practice.color}`}>
                  <practice.icon size={24} />
                  <h3 className="mt-6 font-heading text-2xl font-bold text-brand-primary">{practice.title}</h3>
                  <p className="mt-3 leading-relaxed text-text-secondary">{practice.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="an-luat" className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Về An Luật</span>
            <h2 className="font-heading text-3xl font-black leading-tight text-brand-primary md:text-5xl">
              Cởi mở khi tiếp nhận, rõ ràng khi tư vấn.
            </h2>
            <p className="leading-relaxed text-text-secondary">
              Được thành lập bởi Luật sư Đinh Thị Quỳnh Như, An Luật cung cấp dịch vụ pháp lý cho cá nhân và doanh nghiệp, đồng thời có chi nhánh tại Bà Rịa - Vũng Tàu từ năm 2020.
            </p>
            <Link
              href="/ve-an-luat"
              className="inline-flex items-center gap-2 border-b-2 border-accent-gold pb-1 text-sm font-bold text-brand-primary"
            >
              Tìm hiểu thêm về An Luật
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="rounded-[2rem] border border-border-subtle bg-surface p-8 lg:col-span-7 md:p-10">
            <div className="mb-7 flex items-center gap-3 text-brand-primary">
              <Landmark size={24} className="text-accent-gold" />
              <h3 className="font-heading text-2xl font-bold">Nguyên tắc làm việc</h3>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <li key={principle} className="flex items-start gap-3 rounded-2xl border border-border-subtle bg-white p-5 text-sm leading-relaxed text-text-secondary">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="lien-he" className="bg-brand-primary text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Liên hệ trực tiếp</span>
              <h2 className="font-heading text-3xl font-black md:text-5xl">Bắt đầu bằng một cuộc gọi ngắn.</h2>
              <p className="max-w-2xl leading-relaxed text-white/75">
                Thư ký An Luật sẽ ghi nhận nhu cầu liên hệ, hướng dẫn thông tin cần chuẩn bị và xác nhận cách làm việc phù hợp.
              </p>
            </div>

            <div className="grid gap-3 lg:col-span-5">
              <a
                href={site.phone.primary.href}
                className="flex items-center justify-between rounded-2xl bg-white px-6 py-5 font-bold text-brand-primary transition-transform hover:scale-[1.01]"
              >
                <span>Hotline 1: {site.phone.primary.display}</span>
                <PhoneCall size={18} />
              </a>
              <a
                href={site.phone.secondary.href}
                className="flex items-center justify-between rounded-2xl border border-white/20 px-6 py-5 font-bold text-white transition-colors hover:bg-white/10"
              >
                <span>Hotline 2: {site.phone.secondary.display}</span>
                <PhoneCall size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-subtle bg-canvas">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-text-secondary sm:px-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-2">
            <p className="font-bold text-brand-primary">{site.legalName}</p>
            <p>{site.address}</p>
            <p className="text-xs leading-relaxed text-text-muted">
              Nội dung trên website chỉ cung cấp thông tin chung và không thay thế tư vấn pháp lý cho một vụ việc cụ thể.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs font-bold uppercase tracking-wider">
            <Link href="/ve-an-luat" className="hover:text-brand-primary">Về An Luật</Link>
            <Link href="/chuyen-nghe" className="hover:text-brand-primary">Chuyện nghề</Link>
            <Link href="/quyen-rieng-tu" className="hover:text-brand-primary">Quyền riêng tư</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

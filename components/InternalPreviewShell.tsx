import Link from 'next/link';
import { FlaskConical, LockKeyhole, WandSparkles } from 'lucide-react';

type InternalPreviewShellProps = {
  title: string;
  eyebrow: string;
  description: string;
  children: React.ReactNode;
};

const navItems = [
  { href: '/thuky', label: 'Thư ký' },
  { href: '/thu-nghiem/intake', label: 'Intake' },
  { href: '/thu-nghiem/ai', label: 'AI' },
];

export default function InternalPreviewShell({
  title,
  eyebrow,
  description,
  children,
}: InternalPreviewShellProps) {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <header className="border-b border-border-subtle bg-stone-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/75">
                <FlaskConical size={14} className="text-accent-gold" />
                Khu thử nghiệm nội bộ
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">{eyebrow}</p>
                <h1 className="mt-2 font-heading text-3xl font-black md:text-4xl">{title}</h1>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-white/70">{description}</p>
            </div>

            <nav className="flex flex-wrap gap-2" aria-label="Điều hướng nội bộ">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white/85 transition-colors hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/api/internal-access/logout"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white/85 transition-colors hover:bg-white/10"
              >
                <LockKeyhole size={14} />
                Đăng xuất
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <section className="mb-8 rounded-[2rem] border border-amber-200 bg-amber-50/80 p-6">
          <div className="flex items-start gap-3">
            <WandSparkles size={20} className="mt-0.5 shrink-0 text-amber-700" />
            <div className="space-y-2 text-sm leading-relaxed text-amber-900">
              <p className="font-bold">Bản review nội bộ do Dandatto Studio hoàn thiện theo giai đoạn.</p>
              <p>
                Mục tiêu của khu này là giúp Luật sư Quỳnh Như và cộng sự trải nghiệm, góp ý và rà soát logic trước khi quyết định phần nào đủ điều kiện đưa vào vận hành thực tế.
              </p>
            </div>
          </div>
        </section>

        {children}
      </main>
    </div>
  );
}

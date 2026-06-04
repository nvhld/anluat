import Link from 'next/link';
import { Flower, PhoneCall } from 'lucide-react';
import { mainNavigation } from '@/lib/public-content';
import { site } from '@/lib/site';

export default function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="An Luật - Trang chủ">
          <span className="rounded-xl bg-brand-primary p-2 text-accent-gold">
            <Flower size={20} />
          </span>
          <span>
            <strong className="block font-heading text-lg font-black leading-none text-brand-primary">
              {site.name}
            </strong>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-text-secondary">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-bold text-text-secondary xl:flex" aria-label="Điều hướng chính">
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-brand-primary">
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.google.com"
            className="rounded-full border border-border-medium px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-text-muted transition-colors hover:border-brand-secondary hover:text-brand-primary"
          >
            Thoát nhanh
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.google.com"
            className="hidden rounded-full border border-border-medium px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted transition-colors hover:border-brand-secondary hover:text-brand-primary md:inline-flex"
          >
            Thoát nhanh
          </a>
          <a
            href={site.phone.primary.href}
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-primary-hover sm:text-sm"
          >
            <PhoneCall size={15} />
            <span className="hidden sm:inline">Gọi An Luật</span>
            <span className="sm:hidden">Gọi ngay</span>
          </a>
        </div>
      </div>
    </header>
  );
}

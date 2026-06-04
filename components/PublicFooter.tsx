import Link from 'next/link';
import { footerLinks } from '@/lib/public-content';
import { site } from '@/lib/site';

export default function PublicFooter() {
  return (
    <footer className="border-t border-border-subtle bg-canvas">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-text-secondary sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-2">
          <p className="font-bold text-brand-primary">{site.legalName}</p>
          <p>{site.address}</p>
          <p className="text-xs leading-relaxed text-text-muted">
            Nội dung trên website chỉ cung cấp thông tin chung và không thay thế tư vấn pháp lý cho một vụ việc cụ thể. Việc tiếp nhận vụ việc cần được xác nhận riêng bởi An Luật.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-xs font-bold uppercase tracking-wider">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-primary">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

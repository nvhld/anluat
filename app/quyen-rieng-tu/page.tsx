import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quyền riêng tư',
  description: 'Thông tin về cách website An Luật bảo vệ quyền riêng tư của người truy cập.',
  alternates: { canonical: '/quyen-rieng-tu' },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-canvas text-text-primary">
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 md:py-14">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-brand-primary">
          <ArrowLeft size={16} />
          Về trang chủ
        </Link>

        <header className="space-y-4 border-b border-border-subtle pb-8">
          <ShieldCheck size={30} className="text-accent-gold" />
          <h1 className="font-heading text-4xl font-black text-brand-primary md:text-5xl">Quyền riêng tư</h1>
          <p className="leading-relaxed text-text-secondary">Cập nhật ngày 4 tháng 6 năm 2026.</p>
        </header>

        <section className="space-y-4 leading-relaxed text-text-secondary">
          <h2 className="font-heading text-2xl font-bold text-brand-primary">Phạm vi hiện tại</h2>
          <p>
            Phiên bản website này chỉ cung cấp thông tin giới thiệu và kênh gọi điện trực tiếp. Website không có biểu mẫu tiếp nhận vụ việc, không yêu cầu tải tài liệu và không lưu nội dung vụ việc trong trình duyệt.
          </p>
        </section>

        <section className="space-y-4 leading-relaxed text-text-secondary">
          <h2 className="font-heading text-2xl font-bold text-brand-primary">Thông tin kỹ thuật</h2>
          <p>
            Nhà cung cấp hạ tầng có thể xử lý nhật ký kỹ thuật cơ bản cần thiết để vận hành, bảo mật và phòng chống lạm dụng. An Luật không sử dụng website này để thu thập nội dung tư vấn pháp lý hoặc dữ liệu nhạy cảm.
          </p>
        </section>

        <section className="space-y-4 leading-relaxed text-text-secondary">
          <h2 className="font-heading text-2xl font-bold text-brand-primary">Khi liên hệ</h2>
          <p>
            Khi gọi điện, bạn nên chỉ chia sẻ thông tin tối thiểu cần thiết để được hướng dẫn bước tiếp theo. Quan hệ luật sư - khách hàng không tự động hình thành chỉ từ việc truy cập website hoặc thực hiện cuộc gọi ban đầu.
          </p>
        </section>
      </article>
    </main>
  );
}

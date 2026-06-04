import type { Metadata } from 'next';
import InternalDashboardPreview from '@/components/InternalDashboardPreview';
import InternalPreviewShell from '@/components/InternalPreviewShell';

export const metadata: Metadata = {
  title: 'Thư ký nội bộ',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SecretaryDashboardPage() {
  return (
    <InternalPreviewShell
      eyebrow="Dashboard nội bộ"
      title="Không gian thư ký và founder review"
      description="Màn này dành cho Luật sư Quỳnh Như và cộng sự xem logic hàng đợi, vai trò phân công và cách một lead được trình bày trước khi nối với backend thật."
    >
      <InternalDashboardPreview />
    </InternalPreviewShell>
  );
}

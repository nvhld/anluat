import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/doanh-nghiep/so-huu-tri-tue');

export const metadata: Metadata = {
  title: 'Sở hữu trí tuệ',
  description:
    'An Luật hỗ trợ doanh nghiệp xác lập, rà soát và bảo vệ quyền sở hữu trí tuệ đối với thương hiệu, nhãn hiệu và các tài sản vô hình khác.',
  alternates: { canonical: '/doanh-nghiep/so-huu-tri-tue' },
};

export default function IntellectualPropertyPage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

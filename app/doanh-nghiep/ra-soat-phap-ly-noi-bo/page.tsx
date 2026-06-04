import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/doanh-nghiep/ra-soat-phap-ly-noi-bo');

export const metadata: Metadata = {
  title: 'Rà soát pháp lý nội bộ',
  description:
    'Dịch vụ rà soát pháp lý nội bộ giúp doanh nghiệp nhìn rõ lỗ hổng ở mảng nội bộ, lao động và giao dịch trước khi sự cố xảy ra.',
  alternates: { canonical: '/doanh-nghiep/ra-soat-phap-ly-noi-bo' },
};

export default function LegalHealthPracticePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

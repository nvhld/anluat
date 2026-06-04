import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/doanh-nghiep/ma-dau-tu');

export const metadata: Metadata = {
  title: 'M&A / đầu tư',
  description:
    'An Luật hỗ trợ rà soát tình trạng pháp lý và đánh giá rủi ro trong các giao dịch mua bán, sáp nhập, chuyển nhượng và đầu tư.',
  alternates: { canonical: '/doanh-nghiep/ma-dau-tu' },
};

export default function MnaAndInvestmentPage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

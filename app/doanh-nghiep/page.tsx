import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/doanh-nghiep');

export const metadata: Metadata = {
  title: 'Doanh nghiệp',
  description:
    'Tư vấn pháp lý cho doanh nghiệp đang vận hành: hợp đồng, lao động - nhân sự, cổ đông, nội bộ và rà soát rủi ro pháp lý.',
  alternates: { canonical: '/doanh-nghiep' },
};

export default function BusinessPracticePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

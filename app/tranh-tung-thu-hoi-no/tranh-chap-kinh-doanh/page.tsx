import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/tranh-tung-thu-hoi-no/tranh-chap-kinh-doanh');

export const metadata: Metadata = {
  title: 'Tranh chấp kinh doanh',
  description:
    'An Luật hỗ trợ đánh giá hồ sơ, chiến lược và các bước xử lý trong tranh chấp kinh doanh thương mại.',
  alternates: { canonical: '/tranh-tung-thu-hoi-no/tranh-chap-kinh-doanh' },
};

export default function BusinessDisputePracticePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

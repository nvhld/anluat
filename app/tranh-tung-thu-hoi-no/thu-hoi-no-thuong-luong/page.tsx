import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/tranh-tung-thu-hoi-no/thu-hoi-no-thuong-luong');

export const metadata: Metadata = {
  title: 'Thu hồi nợ / thương lượng',
  description:
    'An Luật hỗ trợ đánh giá chứng cứ, thương lượng và xây chiến lược thu hồi nợ đúng luật cho cá nhân và doanh nghiệp.',
  alternates: { canonical: '/tranh-tung-thu-hoi-no/thu-hoi-no-thuong-luong' },
};

export default function DebtRecoveryPracticePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

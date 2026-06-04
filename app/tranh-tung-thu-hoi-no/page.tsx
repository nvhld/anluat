import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/tranh-tung-thu-hoi-no');

export const metadata: Metadata = {
  title: 'Tranh tụng & Thu hồi nợ',
  description:
    'An Luật hỗ trợ thương lượng, thu hồi nợ, tranh chấp kinh doanh thương mại và quá trình tranh tụng bằng hướng xử lý đúng luật.',
  alternates: { canonical: '/tranh-tung-thu-hoi-no' },
};

export default function DisputesPracticePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

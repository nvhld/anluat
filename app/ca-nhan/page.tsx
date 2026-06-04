import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/ca-nhan');

export const metadata: Metadata = {
  title: 'Cá nhân',
  description:
    'An Luật hỗ trợ khách hàng cá nhân ở các vấn đề gia đình, tài sản, thừa kế, tranh chấp dân sự và công nợ bằng cách tiếp cận rõ ràng, kín kẽ và bình tĩnh.',
  alternates: { canonical: '/ca-nhan' },
};

export default function PersonalIndexPage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

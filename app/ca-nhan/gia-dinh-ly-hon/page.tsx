import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/ca-nhan/gia-dinh-ly-hon');

export const metadata: Metadata = {
  title: 'Gia đình, ly hôn, tài sản và thừa kế',
  description:
    'An Luật hỗ trợ các vấn đề hôn nhân gia đình, ly hôn, quyền nuôi con, tài sản và thừa kế bằng cách tiếp cận rõ ràng và bình tĩnh.',
  alternates: { canonical: '/ca-nhan/gia-dinh-ly-hon' },
};

export default function FamilyPracticePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

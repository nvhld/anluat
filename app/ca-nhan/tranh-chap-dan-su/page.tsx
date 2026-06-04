import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/ca-nhan/tranh-chap-dan-su');

export const metadata: Metadata = {
  title: 'Tranh chấp dân sự',
  description:
    'An Luật hỗ trợ đánh giá tranh chấp dân sự, rà soát hồ sơ và định hướng bước xử lý phù hợp trước khi vụ việc đi quá xa.',
  alternates: { canonical: '/ca-nhan/tranh-chap-dan-su' },
};

export default function CivilDisputePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

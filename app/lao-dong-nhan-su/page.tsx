import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/lao-dong-nhan-su');

export const metadata: Metadata = {
  title: 'Lao động & Nhân sự',
  description:
    'An Luật hỗ trợ các vấn đề lao động, nhân sự, hợp đồng lao động, kỷ luật, tái cấu trúc và tranh chấp liên quan.',
  alternates: { canonical: '/lao-dong-nhan-su' },
};

export default function LaborPracticePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

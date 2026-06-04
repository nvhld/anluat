import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/lao-dong-nhan-su/nguoi-lao-dong');

export const metadata: Metadata = {
  title: 'Dành cho người lao động',
  description:
    'An Luật hỗ trợ người lao động hiểu rõ quyền lợi, nghĩa vụ và các bước cần chuẩn bị trong những tình huống lao động nhạy cảm.',
  alternates: { canonical: '/lao-dong-nhan-su/nguoi-lao-dong' },
};

export default function EmployeePracticePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

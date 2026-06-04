import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/lao-dong-nhan-su/doanh-nghiep-hr');

export const metadata: Metadata = {
  title: 'Dành cho doanh nghiệp / HR',
  description:
    'An Luật hỗ trợ doanh nghiệp và HR xử lý nhân sự đúng luật, chuẩn hóa quy trình và giảm rủi ro lao động trước khi tranh chấp bùng lên.',
  alternates: { canonical: '/lao-dong-nhan-su/doanh-nghiep-hr' },
};

export default function EmployerHrPracticePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

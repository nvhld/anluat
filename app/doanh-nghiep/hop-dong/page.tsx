import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/doanh-nghiep/hop-dong');

export const metadata: Metadata = {
  title: 'Hợp đồng',
  description:
    'An Luật hỗ trợ soạn thảo và rà soát hợp đồng để các bên hiểu đúng giao dịch, giảm rủi ro và tránh tranh chấp không cần thiết.',
  alternates: { canonical: '/doanh-nghiep/hop-dong' },
};

export default function ContractPracticePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

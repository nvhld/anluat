import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/doanh-nghiep/quy-che-noi-bo');

export const metadata: Metadata = {
  title: 'Quy chế nội bộ',
  description:
    'An Luật hỗ trợ doanh nghiệp xây dựng và rà soát quy chế nội bộ, cơ chế phân quyền, phê duyệt và tuân thủ để vận hành trên nền pháp lý rõ ràng hơn.',
  alternates: { canonical: '/doanh-nghiep/quy-che-noi-bo' },
};

export default function InternalPoliciesPage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/tranh-tung-thu-hoi-no/tranh-chap-lao-dong');

export const metadata: Metadata = {
  title: 'Tranh chấp lao động',
  description:
    'An Luật hỗ trợ doanh nghiệp, HR và người lao động đánh giá hồ sơ, quy trình và rủi ro trong các tranh chấp lao động đã căng thẳng.',
  alternates: { canonical: '/tranh-tung-thu-hoi-no/tranh-chap-lao-dong' },
};

export default function LaborDisputePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

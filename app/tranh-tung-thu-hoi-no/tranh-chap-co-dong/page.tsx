import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/tranh-tung-thu-hoi-no/tranh-chap-co-dong');

export const metadata: Metadata = {
  title: 'Tranh chấp cổ đông',
  description:
    'An Luật hỗ trợ đánh giá hồ sơ và định hướng xử lý các tranh chấp cổ đông, thành viên góp vốn và mâu thuẫn sáng lập ảnh hưởng tới vận hành doanh nghiệp.',
  alternates: { canonical: '/tranh-tung-thu-hoi-no/tranh-chap-co-dong' },
};

export default function ShareholderDisputePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

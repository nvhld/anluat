import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/doanh-nghiep/gop-von-co-dong');

export const metadata: Metadata = {
  title: 'Góp vốn / cổ đông',
  description:
    'An Luật hỗ trợ làm rõ điều lệ, góp vốn, quyền cổ đông và các mâu thuẫn nội bộ doanh nghiệp trước khi chúng leo thang thành tranh chấp.',
  alternates: { canonical: '/doanh-nghiep/gop-von-co-dong' },
};

export default function CapitalAndShareholderPage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

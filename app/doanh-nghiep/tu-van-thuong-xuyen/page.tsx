import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/doanh-nghiep/tu-van-thuong-xuyen');

export const metadata: Metadata = {
  title: 'Tư vấn pháp lý thường xuyên',
  description:
    'Dịch vụ tư vấn pháp lý thường xuyên cho doanh nghiệp để chủ động ngăn ngừa và loại bỏ rủi ro trong quá trình kinh doanh.',
  alternates: { canonical: '/doanh-nghiep/tu-van-thuong-xuyen' },
};

export default function RetainerPracticePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

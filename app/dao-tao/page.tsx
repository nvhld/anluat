import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/dao-tao');

export const metadata: Metadata = {
  title: 'Đào tạo',
  description:
    'An Luật thiết kế các chương trình đào tạo pháp lý nội bộ, workshop và chương trình cho hiệp hội hoặc khu công nghiệp theo nhu cầu thực tế.',
  alternates: { canonical: '/dao-tao' },
};

export default function TrainingIndexPage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

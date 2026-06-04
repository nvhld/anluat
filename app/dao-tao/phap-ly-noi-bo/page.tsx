import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/dao-tao/phap-ly-noi-bo');

export const metadata: Metadata = {
  title: 'Đào tạo pháp lý nội bộ',
  description:
    'An Luật xây chương trình đào tạo pháp lý nội bộ cho HR, quản lý, sales và vận hành để đội ngũ làm việc chắc tay hơn trong thực tế.',
  alternates: { canonical: '/dao-tao/phap-ly-noi-bo' },
};

export default function InternalLegalTrainingPage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

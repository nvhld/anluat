import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/dao-tao/workshop-hoi-thao');

export const metadata: Metadata = {
  title: 'Workshop / hội thảo',
  description:
    'An Luật đồng hành cùng doanh nghiệp và đối tác trong các workshop, hội thảo pháp lý có cấu trúc rõ, ngôn ngữ dễ hiểu và bám sát thực tế.',
  alternates: { canonical: '/dao-tao/workshop-hoi-thao' },
};

export default function WorkshopSeminarPage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

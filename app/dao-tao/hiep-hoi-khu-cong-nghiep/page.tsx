import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/dao-tao/hiep-hoi-khu-cong-nghiep');

export const metadata: Metadata = {
  title: 'Hiệp hội / khu công nghiệp',
  description:
    'An Luật thiết kế chương trình chia sẻ pháp lý cho hiệp hội doanh nghiệp, khu công nghiệp và cộng đồng hội viên theo ngữ cảnh thực tế.',
  alternates: { canonical: '/dao-tao/hiep-hoi-khu-cong-nghiep' },
};

export default function AssociationIndustrialProgramPage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

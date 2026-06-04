import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/ca-nhan/tai-san-thua-ke');

export const metadata: Metadata = {
  title: 'Tài sản & thừa kế',
  description:
    'An Luật hỗ trợ làm rõ tài sản chung riêng, di chúc, di sản thừa kế và tranh chấp tài sản gia đình bằng cách tiếp cận rõ hồ sơ và đúng bối cảnh.',
  alternates: { canonical: '/ca-nhan/tai-san-thua-ke' },
};

export default function PersonalAssetsInheritancePage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

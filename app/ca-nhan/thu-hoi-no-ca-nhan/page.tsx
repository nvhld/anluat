import type { Metadata } from 'next';
import PracticeAreaPage from '@/components/PracticeAreaPage';
import { practicePages } from '@/lib/public-content';

const content = practicePages.find((page) => page.href === '/ca-nhan/thu-hoi-no-ca-nhan');

export const metadata: Metadata = {
  title: 'Thu hồi nợ cá nhân',
  description:
    'An Luật hỗ trợ thu hồi nợ cá nhân đúng luật, giữ chứng cứ và định hướng cách thương lượng hoặc chuẩn bị hồ sơ phù hợp.',
  alternates: { canonical: '/ca-nhan/thu-hoi-no-ca-nhan' },
};

export default function PersonalDebtRecoveryPage() {
  if (!content) {
    return null;
  }

  return <PracticeAreaPage content={content} />;
}

import type { Metadata } from 'next';
import InternalIntakePreview from '@/components/InternalIntakePreview';
import InternalPreviewShell from '@/components/InternalPreviewShell';

export const metadata: Metadata = {
  title: 'Intake thử nghiệm',
  robots: {
    index: false,
    follow: false,
  },
};

export default function IntakePreviewPage() {
  return (
    <InternalPreviewShell
      eyebrow="Intake preview"
      title="Luồng tiếp nhận thử nghiệm"
      description="Mục tiêu của màn này là để founder review thứ tự câu hỏi, mức độ dễ hiểu của CTA và cảm giác người dùng khi bắt đầu chia sẻ vấn đề với An Luật."
    >
      <InternalIntakePreview />
    </InternalPreviewShell>
  );
}

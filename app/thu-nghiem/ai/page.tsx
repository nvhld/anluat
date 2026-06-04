import type { Metadata } from 'next';
import InternalAiPreview from '@/components/InternalAiPreview';
import InternalPreviewShell from '@/components/InternalPreviewShell';

export const metadata: Metadata = {
  title: 'AI thử nghiệm',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AiPreviewPage() {
  return (
    <InternalPreviewShell
      eyebrow="AI preview"
      title="Trợ lý AI thử nghiệm cho review nội bộ"
      description="Màn này để founder và cộng sự chốt kỳ vọng đầu ra: AI nên nhìn ra điều gì, nói ở mức nào, và phải dừng ở đâu trước khi can thiệp tới hồ sơ khách thật."
    >
      <InternalAiPreview />
    </InternalPreviewShell>
  );
}

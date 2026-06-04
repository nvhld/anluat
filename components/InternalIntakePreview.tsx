'use client';

import { useState } from 'react';
import { CheckCircle2, ChevronRight, ClipboardList, PhoneCall, ShieldAlert } from 'lucide-react';
import { getAreaLabel, legalAreas, type LegalArea } from '@/lib/internal-preview-data';

type PreviewPacket = {
  legalArea: LegalArea;
  urgency: string;
  contact: string;
  summary: string;
};

const urgencyOptions = [
  { value: 'within_24h', label: 'Cần xử lý trong 24 giờ' },
  { value: 'this_week', label: 'Cần xử lý trong tuần này' },
  { value: 'flexible', label: 'Có thể hẹn theo lịch phù hợp' },
];

const contactOptions = [
  { value: 'phone_first', label: 'Gọi điện trước' },
  { value: 'zalo_or_email', label: 'Nhắn tin hoặc email trước' },
  { value: 'assistant_screening', label: 'Để thư ký gọi sàng lọc trước' },
];

const checklistMap: Record<LegalArea, string[]> = {
  family_assets_inheritance: [
    'Tóm tắt mốc thời gian của mâu thuẫn chính.',
    'Giấy tờ hôn nhân, con cái, tài sản hoặc di chúc đang có.',
    'Các dấu hiệu khẩn cấp cần luật sư biết ngay trong cuộc gọi đầu tiên.',
  ],
  labor_hr: [
    'Hợp đồng lao động và phụ lục nếu có.',
    'Quyết định chấm dứt, email, tin nhắn hoặc biên bản làm việc.',
    'Mục tiêu của khách: thương lượng, nhận bồi thường hay chuẩn bị khởi kiện.',
  ],
  business_operations: [
    'Hợp đồng, điều lệ hoặc thỏa thuận cổ đông đang gây tranh chấp.',
    'Bối cảnh vận hành hiện tại và quyết định cần chốt.',
    'Ai là người đại diện làm việc với An Luật ở vòng đầu.',
  ],
  disputes_debt_litigation: [
    'Biên bản đối chiếu công nợ, thư yêu cầu thanh toán hoặc tin nhắn liên quan.',
    'Giá trị nghĩa vụ và mốc thời gian trễ hạn.',
    'Tình trạng thương lượng hiện tại và rủi ro leo thang.',
  ],
  legal_health_training: [
    'Nội dung muốn rà soát: hợp đồng, lao động, quản trị hay tuân thủ.',
    'Quy mô doanh nghiệp và nhóm phụ trách nội bộ.',
    'Mục tiêu đầu ra mong muốn sau buổi làm việc đầu tiên.',
  ],
};

export default function InternalIntakePreview() {
  const [packet, setPacket] = useState<PreviewPacket>({
    legalArea: 'family_assets_inheritance',
    urgency: 'this_week',
    contact: 'assistant_screening',
    summary: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const checklist = checklistMap[packet.legalArea];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-border-subtle bg-surface p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <ClipboardList size={22} className="text-accent-gold" />
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-primary">Intake thử nghiệm</h2>
            <p className="text-sm text-text-secondary">Bản này để review cấu trúc hỏi, mức độ rõ ràng và cảm giác điền thông tin.</p>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-bold text-text-primary">Nhóm vấn đề</label>
            <select
              value={packet.legalArea}
              onChange={(event) => setPacket((current) => ({ ...current, legalArea: event.target.value as LegalArea }))}
              className="w-full rounded-2xl border border-border-medium bg-white px-4 py-4 text-sm outline-none focus:border-brand-primary"
            >
              {legalAreas.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-text-primary">Mức độ khẩn cấp</label>
            <div className="grid gap-3">
              {urgencyOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPacket((current) => ({ ...current, urgency: option.value }))}
                  className={`rounded-2xl border px-4 py-4 text-left text-sm font-bold transition-colors ${
                    packet.urgency === option.value
                      ? 'border-brand-primary bg-stone-50 text-brand-primary'
                      : 'border-border-subtle bg-white text-text-secondary hover:border-border-medium'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-text-primary">Cách An Luật nên liên hệ</label>
            <div className="grid gap-3">
              {contactOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPacket((current) => ({ ...current, contact: option.value }))}
                  className={`rounded-2xl border px-4 py-4 text-left text-sm font-bold transition-colors ${
                    packet.contact === option.value
                      ? 'border-brand-primary bg-stone-50 text-brand-primary'
                      : 'border-border-subtle bg-white text-text-secondary hover:border-border-medium'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-text-primary">Tóm tắt bối cảnh</label>
            <textarea
              value={packet.summary}
              onChange={(event) => setPacket((current) => ({ ...current, summary: event.target.value }))}
              rows={6}
              placeholder="Mô tả ngắn để founder review cách người dùng sẽ chia sẻ vấn đề ở bản full."
              className="w-full rounded-2xl border border-border-medium bg-white px-4 py-4 text-sm outline-none focus:border-brand-primary"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand-primary px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-primary-hover"
        >
          Tạo packet review
          <ChevronRight size={16} />
        </button>
      </form>

      <aside className="space-y-6">
        <section className="rounded-[2rem] border border-border-subtle bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldAlert size={22} className="text-amber-700" />
            <h2 className="font-heading text-2xl font-bold text-brand-primary">Ghi chú nội bộ</h2>
          </div>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-text-secondary">
            <li>Luồng này hiện chỉ là bản review trải nghiệm, chưa ghi dữ liệu vào backend vận hành.</li>
            <li>Founder có thể dùng màn này để góp ý số câu hỏi, thứ tự câu hỏi và ngôn ngữ CTA.</li>
            <li>Bước tiếp theo sau review là nối vào backend thật với phân quyền và nhật ký đầy đủ.</li>
          </ul>
        </section>

        <section className="rounded-[2rem] border border-border-subtle bg-surface p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={22} className="text-brand-secondary" />
            <h2 className="font-heading text-2xl font-bold text-brand-primary">Packet xem trước</h2>
          </div>
          <div className="mt-6 space-y-4 text-sm text-text-secondary">
            <p><strong className="text-text-primary">Nhóm vấn đề:</strong> {getAreaLabel(packet.legalArea)}</p>
            <p><strong className="text-text-primary">Khẩn cấp:</strong> {urgencyOptions.find((item) => item.value === packet.urgency)?.label}</p>
            <p><strong className="text-text-primary">Liên hệ:</strong> {contactOptions.find((item) => item.value === packet.contact)?.label}</p>
            <p><strong className="text-text-primary">Checklist đề xuất:</strong></p>
            <ul className="space-y-2">
              {checklist.map((item) => (
                <li key={item} className="rounded-2xl bg-white px-4 py-3">{item}</li>
              ))}
            </ul>
            {submitted ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4">
                <p className="font-bold text-emerald-900">Packet review đã được dựng xong.</p>
                <p className="mt-1 text-emerald-800">
                  Nếu muốn mô phỏng cảm giác production hơn, bước kế tiếp là nối màn này với dashboard nội bộ và luồng secretary review.
                </p>
              </div>
            ) : null}
          </div>

          <a
            href="tel:+84902426422"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-medium px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-primary"
          >
            <PhoneCall size={14} />
            Hotline nội dung thật vẫn giữ nguyên
          </a>
        </section>
      </aside>
    </div>
  );
}

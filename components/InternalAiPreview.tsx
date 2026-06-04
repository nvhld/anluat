'use client';

import { useMemo, useState } from 'react';
import { Bot, FileSearch, Sparkles } from 'lucide-react';
import { getAreaLabel, legalAreas, type LegalArea } from '@/lib/internal-preview-data';

const legalHints: Record<LegalArea, string[]> = {
  family_assets_inheritance: ['Luật Hôn nhân và Gia đình', 'Bộ luật Dân sự', 'Chứng cứ về tài sản và dòng thời gian'],
  labor_hr: ['Bộ luật Lao động', 'Nội quy lao động', 'Thông báo và biên bản làm việc'],
  business_operations: ['Luật Doanh nghiệp', 'Điều lệ', 'Hợp đồng và thỏa thuận giữa các bên'],
  disputes_debt_litigation: ['Bộ luật Dân sự', 'Hợp đồng gốc', 'Biên bản đối chiếu công nợ'],
  legal_health_training: ['Luật Doanh nghiệp', 'Luật Lao động', 'Tuân thủ nội bộ và hồ sơ quản trị'],
};

function deriveRiskSignals(summary: string, area: LegalArea) {
  const text = summary.toLowerCase();
  const signals = [];

  if (text.includes('khẩn') || text.includes('24 giờ') || text.includes('ngay')) {
    signals.push('Có dấu hiệu cần callback sớm hoặc ưu tiên phản hồi.');
  }
  if (text.includes('con') || text.includes('tài sản') || area === 'family_assets_inheritance') {
    signals.push('Cần bóc tách quyền lợi cốt lõi và thứ tự chứng cứ trước khi tư vấn sâu.');
  }
  if (text.includes('hợp đồng') || text.includes('điều lệ') || text.includes('cổ đông')) {
    signals.push('Cần rà nhanh văn bản nền để tránh founder và cộng sự tranh luận trên dữ liệu thiếu.');
  }
  if (signals.length === 0) {
    signals.push('Cần thu thêm dữ kiện về thời gian, chủ thể liên quan và hồ sơ đang có.');
  }

  return signals;
}

export default function InternalAiPreview() {
  const [area, setArea] = useState<LegalArea>('family_assets_inheritance');
  const [summary, setSummary] = useState(
    'Khách đang muốn hiểu trước rủi ro pháp lý, xác định giấy tờ cần chuẩn bị và liệu nên gặp luật sư ngay hay qua thư ký trước.'
  );

  const analysis = useMemo(() => {
    const signals = deriveRiskSignals(summary, area);

    return {
      awareness: signals,
      grounds: legalHints[area],
      nextSteps: [
        'Xác định mục tiêu đầu tiên của khách: tư vấn, thương lượng hay chuẩn bị tranh tụng.',
        'Liệt kê 3 loại giấy tờ bắt buộc phải hỏi trong vòng gọi đầu.',
        'Gắn lead vào đúng hàng đợi để founder/cộng sự review mức độ ưu tiên.',
      ],
    };
  }, [area, summary]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="rounded-[2rem] border border-border-subtle bg-surface p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <Bot size={22} className="text-accent-gold" />
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-primary">AI review preview</h2>
            <p className="text-sm text-text-secondary">
              Bản này mô phỏng cách AI có thể hỗ trợ founder review luận điểm, chứ chưa được dùng trên hồ sơ khách thật.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-bold text-text-primary">Nhóm vấn đề</label>
            <select
              value={area}
              onChange={(event) => setArea(event.target.value as LegalArea)}
              className="w-full rounded-2xl border border-border-medium bg-white px-4 py-4 text-sm outline-none focus:border-brand-primary"
            >
              {legalAreas.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-text-primary">Bối cảnh đầu vào</label>
            <textarea
              rows={9}
              value={summary}
              onChange={(event) => setSummary(event.target.value)}
              className="w-full rounded-2xl border border-border-medium bg-white px-4 py-4 text-sm outline-none focus:border-brand-primary"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <article className="rounded-[2rem] border border-border-subtle bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <Sparkles size={22} className="text-brand-secondary" />
            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-primary">Đầu ra để founder review</h2>
              <p className="text-sm text-text-secondary">{getAreaLabel(area)}</p>
            </div>
          </div>

          <div className="mt-6 space-y-5 text-sm leading-relaxed text-text-secondary">
            <div>
              <p className="font-bold text-text-primary">1. Điểm trọng yếu cần nhận thức</p>
              <ul className="mt-3 space-y-2">
                {analysis.awareness.map((item) => (
                  <li key={item} className="rounded-2xl bg-stone-50 px-4 py-3">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-text-primary">2. Căn cứ gợi ý AI nên nhắc đến</p>
              <ul className="mt-3 space-y-2">
                {analysis.grounds.map((item) => (
                  <li key={item} className="rounded-2xl bg-stone-50 px-4 py-3">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-text-primary">3. Bộ chỉ dẫn hành động</p>
              <ul className="mt-3 space-y-2">
                {analysis.nextSteps.map((item) => (
                  <li key={item} className="rounded-2xl bg-stone-50 px-4 py-3">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <FileSearch size={20} className="text-amber-700" />
            <h3 className="font-heading text-xl font-bold text-amber-900">Ghi chú trước khi bật AI thật</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-amber-900">
            <li>Chỉ đưa AI vào vận hành khi có quyết định rõ về dữ liệu nào được gửi đi và ai chịu trách nhiệm duyệt đầu ra.</li>
            <li>Founder có thể dùng màn này để chốt style trả lời mong muốn trước khi nối lại model thật.</li>
            <li>Dandatto Studio cần khóa PII, logs và quyền truy cập trước khi AI được mở cho case thật.</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

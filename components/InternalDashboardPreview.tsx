'use client';

import { useMemo, useState } from 'react';
import { Activity, CheckCircle2, Clock3, ShieldAlert, Users2 } from 'lucide-react';
import { dashboardNotes, getAreaLabel, sampleLeads, type LeadStatus } from '@/lib/internal-preview-data';

const statusLabels: Record<LeadStatus, string> = {
  new: 'Mới',
  secretary_review: 'Thư ký rà soát',
  lawyer_review: 'Luật sư rà soát',
  urgent: 'Ưu tiên khẩn',
  converted: 'Đã chuyển vụ việc',
};

export default function InternalDashboardPreview() {
  const [selectedStatus, setSelectedStatus] = useState<LeadStatus | 'all'>('all');
  const [selectedLeadId, setSelectedLeadId] = useState(sampleLeads[0]?.id || '');

  const filtered = useMemo(() => {
    if (selectedStatus === 'all') {
      return sampleLeads;
    }

    return sampleLeads.filter((lead) => lead.status === selectedStatus);
  }, [selectedStatus]);

  const selectedLead = filtered.find((lead) => lead.id === selectedLeadId) || filtered[0] || sampleLeads[0];

  const counters = [
    {
      key: 'all' as const,
      label: 'Tất cả',
      icon: Users2,
      count: sampleLeads.length,
    },
    {
      key: 'urgent' as const,
      label: 'Khẩn',
      icon: ShieldAlert,
      count: sampleLeads.filter((lead) => lead.status === 'urgent').length,
    },
    {
      key: 'secretary_review' as const,
      label: 'Thư ký',
      icon: Clock3,
      count: sampleLeads.filter((lead) => lead.status === 'secretary_review').length,
    },
    {
      key: 'lawyer_review' as const,
      label: 'Luật sư',
      icon: Activity,
      count: sampleLeads.filter((lead) => lead.status === 'lawyer_review').length,
    },
    {
      key: 'converted' as const,
      label: 'Đã nhận',
      icon: CheckCircle2,
      count: sampleLeads.filter((lead) => lead.status === 'converted').length,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-5">
        {counters.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setSelectedStatus(item.key)}
            className={`rounded-[1.75rem] border p-5 text-left shadow-sm transition-colors ${
              selectedStatus === item.key
                ? 'border-brand-primary bg-brand-primary text-white'
                : 'border-border-subtle bg-white text-text-primary hover:bg-stone-50'
            }`}
          >
            <item.icon size={18} className={selectedStatus === item.key ? 'text-accent-gold' : 'text-brand-secondary'} />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em]">{item.label}</p>
            <p className="mt-2 font-heading text-3xl font-black">{item.count}</p>
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="rounded-[2rem] border border-border-subtle bg-surface p-6 shadow-sm">
          <h2 className="font-heading text-2xl font-bold text-brand-primary">Hàng đợi review</h2>
          <div className="mt-5 space-y-3">
            {filtered.map((lead) => (
              <button
                key={lead.id}
                type="button"
                onClick={() => setSelectedLeadId(lead.id)}
                className={`w-full rounded-2xl border p-4 text-left transition-colors ${
                  selectedLead?.id === lead.id
                    ? 'border-brand-primary bg-white'
                    : 'border-border-subtle bg-white/70 hover:bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-text-primary">{lead.fullName}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-text-muted">{lead.id}</p>
                  </div>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-text-secondary">
                    {statusLabels[lead.status]}
                  </span>
                </div>
                <p className="mt-3 text-sm text-text-secondary">{getAreaLabel(lead.legalArea)}</p>
                <p className="mt-2 text-xs text-text-muted">Cập nhật {lead.updatedAt}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-border-subtle bg-white p-8 shadow-sm">
          {selectedLead ? (
            <div className="space-y-6">
              <div className="border-b border-border-subtle pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Lead review nội bộ</p>
                <h2 className="mt-2 font-heading text-3xl font-black text-brand-primary">{selectedLead.fullName}</h2>
                <p className="mt-2 text-sm text-text-secondary">{getAreaLabel(selectedLead.legalArea)}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">Trạng thái</p>
                  <p className="mt-2 text-sm font-bold text-text-primary">{statusLabels[selectedLead.status]}</p>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">Người phụ trách</p>
                  <p className="mt-2 text-sm font-bold text-text-primary">{selectedLead.owner}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-border-subtle bg-surface p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">Tóm tắt mô phỏng</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{selectedLead.summary}</p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
                <p className="text-sm font-bold text-amber-900">Những gì founder và cộng sự nên review trong màn này</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-amber-900">
                  {dashboardNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p className="text-sm text-text-secondary">Chưa có lead nào trong trạng thái đã chọn.</p>
          )}
        </section>
      </div>
    </div>
  );
}

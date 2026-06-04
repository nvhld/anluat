export type LegalArea =
  | 'family_assets_inheritance'
  | 'labor_hr'
  | 'business_operations'
  | 'disputes_debt_litigation'
  | 'legal_health_training';

export type LeadStatus = 'new' | 'secretary_review' | 'lawyer_review' | 'urgent' | 'converted';

export type LeadRecord = {
  id: string;
  fullName: string;
  legalArea: LegalArea;
  urgency: 'within_24h' | 'this_week' | 'flexible';
  summary: string;
  status: LeadStatus;
  owner: string;
  updatedAt: string;
};

export const legalAreas: Array<{ value: LegalArea; label: string; helper: string }> = [
  {
    value: 'family_assets_inheritance',
    label: 'Gia đình, tài sản, thừa kế',
    helper: 'Ly hôn, quyền nuôi con, chia tài sản, di chúc, thừa kế.',
  },
  {
    value: 'labor_hr',
    label: 'Lao động và nhân sự',
    helper: 'Sa thải, kỷ luật, hợp đồng lao động, tranh chấp với người sử dụng lao động.',
  },
  {
    value: 'business_operations',
    label: 'Doanh nghiệp và hợp đồng',
    helper: 'Rà soát giao dịch, cấu trúc cổ đông, tuân thủ, tranh chấp thương mại.',
  },
  {
    value: 'disputes_debt_litigation',
    label: 'Tranh tụng và thu hồi nợ',
    helper: 'Đòi nợ, thương lượng, hồ sơ khởi kiện, bảo toàn chứng cứ.',
  },
  {
    value: 'legal_health_training',
    label: 'Khám sức khỏe pháp lý doanh nghiệp',
    helper: 'Rà soát hệ thống lao động, hợp đồng, nội quy, tuân thủ.',
  },
];

export const sampleLeads: LeadRecord[] = [
  {
    id: 'AL-260604-01',
    fullName: 'Khách hàng A',
    legalArea: 'family_assets_inheritance',
    urgency: 'within_24h',
    summary: 'Cần xác định hướng xử lý ly hôn, quyền nuôi con và biện pháp an toàn khi mâu thuẫn leo thang.',
    status: 'urgent',
    owner: 'Thư ký trực',
    updatedAt: '2026-06-04 14:10',
  },
  {
    id: 'AL-260604-02',
    fullName: 'Khách hàng B',
    legalArea: 'labor_hr',
    urgency: 'this_week',
    summary: 'Bị chấm dứt hợp đồng lao động, cần rà soát hồ sơ và xác định yêu cầu bồi thường.',
    status: 'secretary_review',
    owner: 'Cộng sự lao động',
    updatedAt: '2026-06-04 13:45',
  },
  {
    id: 'AL-260604-03',
    fullName: 'Doanh nghiệp C',
    legalArea: 'business_operations',
    urgency: 'flexible',
    summary: 'Mâu thuẫn cổ đông sáng lập, cần xem điều lệ và thỏa thuận góp vốn.',
    status: 'lawyer_review',
    owner: 'Luật sư Như',
    updatedAt: '2026-06-04 12:30',
  },
  {
    id: 'AL-260604-04',
    fullName: 'Doanh nghiệp D',
    legalArea: 'disputes_debt_litigation',
    urgency: 'this_week',
    summary: 'Khoản công nợ quá hạn kéo dài, đã có đối chiếu công nợ và thư yêu cầu thanh toán.',
    status: 'new',
    owner: 'Chưa phân công',
    updatedAt: '2026-06-04 11:55',
  },
];

export const dashboardNotes = [
  'Bản này dành cho founder và cộng sự review luồng vận hành, không dùng để ghi nhận dữ liệu khách thật.',
  'Mọi lead hiển thị hiện tại là dữ liệu minh họa nội bộ để test giao diện và hành vi.',
  'Dandatto Studio đang hoàn thiện lớp backend, phân quyền và nhật ký vận hành trước khi cho phép chạy thực tế.',
];

export function getAreaLabel(area: LegalArea) {
  return legalAreas.find((item) => item.value === area)?.label || area;
}

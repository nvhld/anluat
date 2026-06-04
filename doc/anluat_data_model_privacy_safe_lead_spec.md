# Data Model & Privacy-Safe Lead Spec

## AnLuật.com — Lead, Intake, Privacy & Data Governance

```yaml id="i6z4jd"
document_id: anluat_data_model_privacy_safe_lead_spec
version: 1.0
status: draft_for_review
language: vi-VN
project: Website mới An Luật
primary_domain: anluat.com
spec_type: Data Model / Privacy / Lead Governance
primary_conversion_asset: 1 GIỜ GẶP NHƯ
machine_readable: true
last_updated: 2026-06-02
```

---

## 1. Mục tiêu tài liệu

Tài liệu này định nghĩa cách AnLuật.com thu thập, lưu trữ, phân loại, xử lý và bảo vệ dữ liệu lead/vụ việc.

Mục tiêu:

```yaml id="0axp1j"
goals:
  - Lưu đủ dữ liệu để thư ký và luật sư xử lý lead.
  - Không đưa dữ liệu nhạy cảm vào analytics.
  - Tách dữ liệu vận hành, dữ liệu nhạy cảm và dữ liệu đo lường.
  - Hỗ trợ auto-booking, payment, Agent2UI và human review.
  - Có audit log cho các hành động quan trọng.
  - Có chính sách retention/xóa dữ liệu rõ ràng.
  - Sẵn sàng cho yêu cầu bảo vệ dữ liệu cá nhân.
```

Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 có hiệu lực từ ngày 01/01/2026; Nghị định 356/2025/NĐ-CP cũng có hiệu lực từ 01/01/2026 và quy định chi tiết một số điều, biện pháp thi hành Luật Bảo vệ dữ liệu cá nhân. ([THƯ VIỆN PHÁP LUẬT][1])

---

## 2. Nguyên tắc dữ liệu

```yaml id="aa4g3c"
data_principles:
  - id: data_minimization
    name: Thu thập tối thiểu
    rule: Chỉ hỏi dữ liệu cần cho phân loại, liên hệ, đặt lịch và xử lý vụ việc.

  - id: purpose_limitation
    name: Đúng mục đích
    rule: Dữ liệu intake chỉ dùng cho tiếp nhận, tư vấn, đặt lịch, thanh toán, chăm sóc khách hàng và nghĩa vụ pháp lý liên quan.

  - id: separation_of_concerns
    name: Tách vùng dữ liệu
    rule: Public content, operational data, sensitive case data và analytics phải nằm ở các vùng riêng.

  - id: no_pii_in_analytics
    name: Không PII trong analytics
    rule: Analytics chỉ nhận enum/taxonomy/event, không nhận tên, số điện thoại, email, nội dung vụ việc.

  - id: human_review_for_sensitive_cases
    name: Human review cho vụ nhạy cảm
    rule: Agent2UI chỉ phân luồng và gợi ý UI, không đưa tư vấn pháp lý cuối cùng.

  - id: audit_critical_actions
    name: Ghi log hành động quan trọng
    rule: Xem hồ sơ, sửa trạng thái, xác nhận lịch, thanh toán, xuất dữ liệu, xóa dữ liệu đều cần audit log.
```

---

## 3. Phân loại dữ liệu

```yaml id="toz5if"
data_classification:
  public_content:
    sensitivity: low
    storage: Sanity
    examples:
      - bài viết
      - FAQ
      - nội dung dịch vụ
      - hồ sơ luật sư công khai
      - video insight công khai

  operational_lead_data:
    sensitivity: medium
    storage: Supabase Postgres
    examples:
      - lead_id
      - legal_area
      - urgency
      - current_stage
      - selected_slot
      - lead_status
      - booking_status
      - payment_status

  personal_contact_data:
    sensitivity: high
    storage: Supabase Postgres, restricted table
    examples:
      - họ tên
      - số điện thoại
      - email
      - zalo
      - preferred_callback_time

  sensitive_case_data:
    sensitivity: very_high
    storage: Supabase restricted table / storage
    examples:
      - tóm tắt vụ việc
      - thông tin bạo hành
      - tranh chấp tài sản
      - thông tin con cái
      - tài liệu upload
      - voice note
      - timeline vụ việc

  payment_metadata:
    sensitivity: medium_high
    storage: Supabase Postgres
    examples:
      - order_code
      - amount
      - payment_status
      - payos_payment_link_id
      - webhook_status
    forbidden:
      - nội dung vụ việc trong description
      - tên vụ việc nhạy cảm trong addInfo

  analytics_safe_data:
    sensitivity: low_medium
    storage: analytics_provider_tbd
    examples:
      - event_name
      - legal_area enum
      - urgency enum
      - device_type
      - score_band
      - source_page
```

---

## 4. Source of Truth

```yaml id="u77r6h"
source_of_truth:
  public_content:
    system: Sanity
    owner: content_team

  lead_operational_state:
    system: Supabase Postgres
    owner: operations_team

  contact_data:
    system: Supabase Postgres
    owner: operations_team
    access: restricted

  sensitive_case_data:
    system: Supabase Postgres / Supabase Storage
    owner: assigned_lawyer_or_authorized_staff
    access: highly_restricted

  payment_status:
    primary: payOS
    mirror: Supabase Postgres
    update_rule: only_after_verified_webhook_or_verified_status_check

  booking_status:
    pre_confirmation: Supabase booking_intents
    post_confirmation: Cal.com + Supabase mirror

  analytics:
    system: privacy_safe_analytics_provider_tbd
    rule: manual_events_only_no_pii
```

---

## 5. Core entities

```yaml id="32u8pe"
core_entities:
  - leads
  - lead_contact_details
  - lead_sensitive_details
  - consent_records
  - agent_sessions
  - booking_intents
  - cal_bookings
  - payment_events
  - uploaded_documents
  - analytics_events_safe
  - audit_logs
  - data_subject_requests
```

---

# 6. Database schema

## 6.1 `leads`

Bảng trung tâm, chỉ lưu taxonomy và trạng thái. Không lưu text nhạy cảm ở đây. Vâng, cuối cùng database cũng biết giữ mồm giữ miệng.

```sql id="c1jmay"
create table leads (
  id uuid primary key default gen_random_uuid(),

  legal_area text not null,
  issue_type text,
  user_role text,
  urgency text,
  current_stage text,

  preferred_lawyer text,
  consultation_mode text,
  lead_source text,
  source_page text,
  device_type text,

  lead_status text not null default 'new',
  routing_mode text not null default 'agent2ui',
  requires_human_review boolean default false,

  assigned_team text,
  assigned_user_id uuid,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

Allowed values:

```yaml id="8m3nkp"
lead_enums:
  legal_area:
    - family_assets_inheritance
    - labor_hr
    - business_operations
    - disputes_debt_litigation
    - legal_health_training
    - other

  urgency:
    - within_24h
    - this_week
    - flexible

  lead_status:
    - new
    - agent_recommended
    - payment_pending
    - booking_confirmed
    - secretary_review_required
    - contacted
    - consultation_completed
    - converted_to_case
    - closed_unqualified
    - deleted
```

---

## 6.2 `lead_contact_details`

Tách riêng contact PII khỏi bảng `leads`.

```sql id="33ots0"
create table lead_contact_details (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,

  full_name text,
  phone text,
  email text,
  zalo text,
  preferred_callback_time text,
  preferred_contact_channel text,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

Access:

```yaml id="0cx85x"
lead_contact_access:
  read:
    - secretary
    - assigned_lawyer
    - admin
  write:
    - system
    - secretary
    - admin
  forbidden:
    - analytics
    - public_frontend_after_submission
    - content_editor
```

---

## 6.3 `lead_sensitive_details`

Dành cho tóm tắt vụ việc, ghi chú, thông tin nhạy cảm. Bảng này bị khóa chặt hơn.

```sql id="g1ngph"
create table lead_sensitive_details (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,

  case_summary text,
  internal_notes text,
  safety_flags jsonb,
  conflict_check_notes text,
  child_related boolean default false,
  domestic_violence_related boolean default false,
  financial_sensitive boolean default false,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

Rules:

```yaml id="w3xz6y"
sensitive_details_rules:
  - Không gửi sang analytics.
  - Không dùng làm payment description.
  - Không log nguyên văn trong edge function logs.
  - Không đưa vào Agent2UI output nếu không cần.
  - Chỉ assigned lawyer / authorized staff được xem.
```

---

## 6.4 `consent_records`

Luật/Nghị định hiện hành nhấn mạnh quyền của chủ thể dữ liệu và nghĩa vụ bảo vệ dữ liệu; do đó website cần lưu bằng chứng đồng ý/ghi nhận mục đích xử lý, thay vì “người ta bấm nút chắc là đồng ý” — một lập luận pháp lý mong manh như bánh tráng gặp mưa. ([THƯ VIỆN PHÁP LUẬT][1])

```sql id="nbjq3n"
create table consent_records (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id) on delete cascade,

  consent_type text not null,
  consent_version text not null,
  consent_text_snapshot text not null,
  granted boolean not null,
  granted_at timestamptz default now(),

  ip_hash text,
  user_agent_hash text,
  source_page text
);
```

Consent types:

```yaml id="prx9wx"
consent_types:
  - privacy_notice_acknowledged
  - intake_processing_consent
  - callback_consent
  - payment_processing_consent
  - document_upload_consent
  - marketing_consent_optional
```

---

## 6.5 `agent_sessions`

Lưu trạng thái phân luồng của Agent2UI, không lưu nội dung nhạy cảm nguyên văn.

```sql id="036zz5"
create table agent_sessions (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id) on delete set null,

  session_state jsonb not null,
  recommendation jsonb,
  confidence text,
  requires_human_review boolean default false,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

Allowed `session_state`:

```yaml id="slbnbn"
agent_session_state_allowed:
  allowed:
    - legal_area
    - issue_type
    - urgency
    - current_stage
    - user_role
    - preferred_lawyer
    - consultation_mode
  forbidden:
    - full_name
    - phone
    - email
    - free_text_case_summary
    - uploaded_file_content
```

---

## 6.6 `booking_intents`

Dùng cho slot lock, payment pending và trạng thái trước khi tạo booking Cal.com.

```sql id="hyzdp4"
create table booking_intents (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id),

  order_code bigint unique,
  event_type_id text,
  selected_slot_start timestamptz,
  selected_slot_end timestamptz,
  slot_lock_expires_at timestamptz,

  amount integer,
  currency text default 'VND',

  payment_status text default 'created',
  booking_status text default 'slot_selected',

  payos_payment_link_id text,
  payos_checkout_url text,
  cal_booking_uid text,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

---

## 6.7 `payment_events`

```sql id="pp73si"
create table payment_events (
  id uuid primary key default gen_random_uuid(),
  booking_intent_id uuid references booking_intents(id),
  lead_id uuid references leads(id),

  provider text default 'payOS',
  order_code bigint not null,
  amount integer,
  event_status text,
  verified boolean default false,

  raw_event jsonb,
  processed_at timestamptz,
  received_at timestamptz default now()
);
```

Rules:

```yaml id="bwkdkn"
payment_event_rules:
  - raw_event được lưu để audit nhưng không được chứa case summary.
  - order_code là khóa đối soát.
  - amount phải khớp booking_intent.
  - webhook phải idempotent.
```

---

## 6.8 `cal_bookings`

```sql id="tpbipy"
create table cal_bookings (
  id uuid primary key default gen_random_uuid(),
  booking_intent_id uuid references booking_intents(id),
  lead_id uuid references leads(id),

  cal_booking_uid text unique,
  event_type_id text,
  booking_status text,
  start_time timestamptz,
  end_time timestamptz,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

---

## 6.9 `uploaded_documents`

Không lưu file name nhạy cảm vào analytics. File gốc phải nằm ở restricted storage bucket.

```sql id="d9xv1b"
create table uploaded_documents (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id) on delete cascade,

  storage_bucket text not null,
  storage_path text not null,
  original_filename_encrypted text,
  mime_type text,
  file_size_bytes integer,

  uploaded_by text default 'client',
  document_category text,
  sensitivity_level text default 'very_high',

  created_at timestamptz default now(),
  deleted_at timestamptz
);
```

Rules:

```yaml id="3p64a7"
uploaded_document_rules:
  - Storage bucket phải private.
  - Không expose public URL.
  - Signed URL phải ngắn hạn.
  - Không gửi original filename sang analytics.
  - Nếu chưa cần tài liệu, ưu tiên không yêu cầu upload ở bước đầu.
```

---

## 6.10 `analytics_events_safe`

Có thể lưu mirror event an toàn trong Supabase để đối soát funnel nội bộ.

```sql id="by7o2j"
create table analytics_events_safe (
  id uuid primary key default gen_random_uuid(),

  event_name text not null,
  lead_id uuid,
  anonymous_session_id text,

  legal_area text,
  urgency text,
  current_stage text,
  device_type text,
  source_page text,
  score_band text,

  properties jsonb,
  created_at timestamptz default now()
);
```

Forbidden:

```yaml id="8bvnzg"
analytics_forbidden_fields:
  - full_name
  - phone
  - email
  - zalo
  - case_summary
  - internal_notes
  - uploaded_file_name
  - payment_description
  - voice_note_transcript
```

---

## 6.11 `audit_logs`

```sql id="8r47w0"
create table audit_logs (
  id uuid primary key default gen_random_uuid(),

  actor_id uuid,
  actor_role text,
  action text not null,
  entity_type text not null,
  entity_id uuid,

  metadata jsonb,
  ip_hash text,
  user_agent_hash text,

  created_at timestamptz default now()
);
```

Audit actions:

```yaml id="epxw8o"
audit_actions:
  - lead_created
  - lead_viewed
  - contact_viewed
  - sensitive_details_viewed
  - lead_status_changed
  - payment_webhook_received
  - payment_verified
  - cal_booking_created
  - document_uploaded
  - document_viewed
  - document_deleted
  - data_exported
  - data_deleted
  - consent_recorded
```

---

## 6.12 `data_subject_requests`

```sql id="0u3sve"
create table data_subject_requests (
  id uuid primary key default gen_random_uuid(),

  lead_id uuid references leads(id),
  request_type text not null,
  request_status text default 'new',

  requester_name text,
  requester_contact text,
  verification_status text default 'pending',

  notes text,
  received_at timestamptz default now(),
  resolved_at timestamptz
);
```

Request types:

```yaml id="23hskq"
data_subject_request_types:
  - access
  - correction
  - deletion
  - consent_withdrawal
  - restriction
  - copy_export
  - complaint
```

---

# 7. Privacy-safe analytics

## 7.1 Event whitelist

```yaml id="5fruiu"
analytics_event_whitelist:
  - event: intake_door_card_clicked
    allowed_properties:
      - card_id
      - source_page
      - device_type

  - event: zero_typing_step_completed
    allowed_properties:
      - step_id
      - selected_option
      - legal_area
      - device_type

  - event: agent_recommendation_rendered
    allowed_properties:
      - recommended_service_id
      - legal_area
      - urgency
      - confidence
      - requires_human_review

  - event: legal_health_score_completed
    allowed_properties:
      - score_band
      - legal_area
      - device_type

  - event: booking_slot_selected
    allowed_properties:
      - event_type_id
      - legal_area
      - urgency
      - device_type

  - event: payment_qr_viewed
    allowed_properties:
      - booking_mode
      - amount_band
      - device_type

  - event: payment_success_webhook_received
    allowed_properties:
      - booking_mode
      - amount_band

  - event: cal_booking_created
    allowed_properties:
      - event_type_id
      - booking_mode

  - event: intake_form_submitted
    allowed_properties:
      - legal_area
      - urgency
      - current_stage
      - preferred_lawyer
      - consultation_mode
      - device_type
```

---

## 7.2 Analytics hard rules

```yaml id="t99afg"
analytics_hard_rules:
  session_replay:
    enabled: false
    applies_to:
      - toàn bộ intake flow
      - payment flow
      - booking flow
      - family pages
      - contact forms
      - document upload
      - legal health score

  autocapture:
    enabled: false_on_sensitive_pages

  manual_events_only: true

  pii_payload_allowed: false

  free_text_payload_allowed: false
```

---

# 8. Access control model

```yaml id="ldqrad"
roles:
  public_user:
    can:
      - submit_intake
      - view_own_confirmation_screen
    cannot:
      - read_lead_after_submission
      - list_any_data

  secretary:
    can:
      - view_lead_taxonomy
      - view_contact_details
      - update_lead_status
      - schedule_callback
    limited:
      - sensitive_details_only_if_assigned_or_authorized

  lawyer:
    can:
      - view_assigned_leads
      - view_sensitive_details_for_assigned_leads
      - add_internal_notes
    cannot:
      - view_unassigned_sensitive_cases_by_default

  admin:
    can:
      - manage_users
      - assign_leads
      - view_audit_logs
      - manage_retention
    warning:
      - admin_access_must_be_audited

  content_editor:
    can:
      - manage_sanity_content
    cannot:
      - access_leads
      - access_payment_events
      - access_sensitive_details

  system:
    can:
      - process_webhooks
      - create_booking_intents
      - update_payment_status
      - create_cal_bookings
```

---

# 9. Row Level Security policy draft

```yaml id="63y55n"
rls_policy_intent:
  leads:
    secretary: read_all_non_sensitive
    lawyer: read_assigned
    admin: read_all
    public: insert_only

  lead_contact_details:
    secretary: read_if_authorized
    lawyer: read_if_assigned
    admin: read_all
    public: insert_only_through_edge_function

  lead_sensitive_details:
    secretary: read_if_authorized
    lawyer: read_if_assigned
    admin: read_with_audit
    public: no_direct_access

  uploaded_documents:
    lawyer: signed_url_if_assigned
    secretary: signed_url_if_authorized
    admin: signed_url_with_audit
    public: upload_only_via_signed_policy

  payment_events:
    admin: read
    system: write
    secretary: read_summary
    public: no_access

  audit_logs:
    admin: read
    system: write
    others: no_access
```

---

# 10. Retention policy draft

Chính sách retention dưới đây là **khuyến nghị kỹ thuật ban đầu**, cần An Luật rà soát pháp lý/nội bộ trước khi áp dụng chính thức. Đừng để kỹ sư tự quyết thời hạn lưu hồ sơ pháp lý; đó là cách biến database thành di chúc tập thể.

```yaml id="3is1go"
retention_policy_draft:
  unqualified_leads:
    retention: 90_days
    action: anonymize_or_delete

  leads_no_response:
    retention: 180_days
    action: anonymize_contact_and_delete_sensitive_summary

  paid_consultation_leads:
    retention: 3_years_or_policy_defined
    action: archive_restricted

  converted_cases:
    retention: follow_law_firm_record_policy
    action: case_management_system_or_restricted_archive

  uploaded_documents_not_converted:
    retention: 30_to_90_days_after_last_contact
    action: delete_from_storage

  payment_events:
    retention: according_to_accounting_and_tax_policy
    action: keep_payment_metadata_not_case_details

  analytics_events_safe:
    retention: 12_to_24_months
    action: aggregate_then_delete_raw_events

  audit_logs:
    retention: 3_years_or_security_policy_defined
    action: restricted_archive
```

---

# 11. Consent UX requirements

```yaml id="q69b5z"
consent_ux:
  before_intake_submit:
    required:
      - privacy_notice_acknowledgement
      - consent_to_process_intake_for_callback
    optional:
      - marketing_consent

  before_payment:
    required:
      - consent_to_share_payment_metadata_with_payos
      - acknowledgement_payment_description_contains_no_case_details

  before_document_upload:
    required:
      - document_upload_sensitivity_notice
      - consent_to_store_uploaded_documents_temporarily

  copy_rules:
    - Nói rõ An Luật dùng thông tin để phân loại vụ việc và liên hệ lại.
    - Nói rõ không nên gửi tài liệu quá nhạy cảm nếu chưa được hướng dẫn.
    - Nói rõ có thể yêu cầu chỉnh sửa/xóa/rút đồng ý theo chính sách.
```

Suggested copy:

> Bằng việc gửi thông tin, bạn đồng ý để An Luật xử lý nội dung này nhằm phân loại vụ việc, liên hệ lại, xác nhận lịch tư vấn và chuẩn bị hồ sơ cần thiết. Vui lòng chưa gửi tài liệu quá nhạy cảm nếu chưa được hướng dẫn.

---

# 12. Edge Function data handling rules

```yaml id="muoepe"
edge_function_data_rules:
  submit_intake:
    can_receive:
      - taxonomy
      - contact_info
      - optional_case_summary
    must:
      - validate_input
      - separate_contact_and_sensitive_details
      - create_consent_record
      - avoid_logging_request_body

  agent2ui_recommend:
    can_receive:
      - taxonomy_only
    must_not_receive:
      - full_name
      - phone
      - email
      - raw_case_summary

  create_payos_payment_link:
    can_receive:
      - booking_intent_id
      - order_code
      - amount
    must_not_receive:
      - case_summary
      - sensitive_issue_label
      - child_or_violence_details

  payos_webhook:
    must:
      - verify_signature
      - verify_amount
      - verify_order_code
      - store_event
      - update_status_idempotently

  create_cal_booking:
    can_receive:
      - booking_intent_id
    must:
      - recheck_payment_success
      - recheck_slot_validity
      - avoid_duplicate_booking
```

---

# 13. Agent2UI privacy constraints

```yaml id="xey17e"
agent2ui_privacy_constraints:
  input_allowed:
    - legal_area
    - issue_type
    - urgency
    - current_stage
    - user_role
    - preferred_lawyer
    - consultation_mode

  input_forbidden:
    - full_name
    - phone
    - email
    - zalo
    - case_summary_raw
    - document_content
    - voice_note_raw

  output_allowed:
    - recommendation_component
    - reason_summary_generic
    - checklist
    - next_action
    - safety_notice
    - requires_human_review

  output_forbidden:
    - final_legal_advice
    - prediction_of_case_outcome
    - display_of_sensitive_user_text
```

---

# 14. Payment privacy rules

```yaml id="gsrbzh"
payment_privacy_rules:
  payos_description:
    format: "ANLUAT {order_code}"
    allowed:
      - order_code
      - generic_service_name
    forbidden:
      - ly_hon
      - bao_hanh
      - tranh_chap_tai_san
      - ten_khach_hang
      - noi_dung_vu_viec

  payment_item_name:
    allowed: "1 GIO GAP NHU"
    forbidden:
      - issue_type_sensitive
      - case_summary

  webhook_storage:
    raw_event_allowed: true
    sensitive_case_data_allowed: false
```

---

# 15. Data breach / incident requirements

Luật Bảo vệ dữ liệu cá nhân 2025 có quy định về thông báo vi phạm dữ liệu trong trường hợp vi phạm có thể gây tổn hại đến các quyền/lợi ích quan trọng, với mốc thông báo chậm nhất 72 giờ trong một số trường hợp. Vì vậy hệ thống cần có log, audit, phân loại sự cố và kênh escalation, không phải đợi “có chuyện rồi tính”, chiến lược cổ truyền của thảm họa. ([THƯ VIỆN PHÁP LUẬT][1])

```yaml id="6vcdx4"
incident_requirements:
  detect:
    - suspicious_access
    - failed_webhook_signature_spikes
    - abnormal_export
    - unauthorized_document_access

  log:
    - actor
    - action
    - affected_entity
    - timestamp
    - ip_hash
    - user_agent_hash

  respond:
    - revoke_access
    - rotate_keys
    - identify_affected_records
    - notify_internal_privacy_owner
    - prepare_required_notification_if_applicable

  notification_sla:
    draft: within_72_hours_if_legally_required
    requires_legal_review: true
```

---

# 16. Machine-readable summary

```json id="3sqgeo"
{
  "document_id": "anluat_data_model_privacy_safe_lead_spec",
  "version": "1.0",
  "status": "draft_for_review",
  "primary_database": "Supabase Postgres",
  "public_content_source": "Sanity",
  "analytics_mode": "privacy_safe_manual_events",
  "session_replay": "disabled",
  "pii_in_analytics": false,
  "free_text_in_analytics": false,
  "core_tables": [
    "leads",
    "lead_contact_details",
    "lead_sensitive_details",
    "consent_records",
    "agent_sessions",
    "booking_intents",
    "payment_events",
    "cal_bookings",
    "uploaded_documents",
    "analytics_events_safe",
    "audit_logs",
    "data_subject_requests"
  ],
  "data_classification": {
    "public_content": "Sanity",
    "operational_lead_data": "Supabase leads",
    "personal_contact_data": "Supabase restricted table",
    "sensitive_case_data": "Supabase restricted table/storage",
    "payment_metadata": "Supabase payment_events",
    "analytics_safe_data": "analytics provider / Supabase mirror"
  },
  "critical_rules": [
    "Do not store sensitive case details in Sanity",
    "Do not send PII/free text to analytics",
    "Do not enable session replay on intake/payment/legal pages",
    "Separate lead taxonomy from contact PII and sensitive case details",
    "Use consent_records for privacy notice and processing consent",
    "Use audit_logs for sensitive access and important state changes",
    "Use private storage and short-lived signed URLs for documents",
    "Do not put case details in payOS description or item name",
    "Agent2UI receives taxonomy, not raw sensitive text"
  ]
}
```

---

# 17. Acceptance criteria

```yaml id="mjwf0w"
acceptance_criteria:
  - id: separated_tables
    requirement: Contact PII and sensitive case details are stored outside the main leads table.

  - id: no_pii_analytics
    requirement: Analytics event payloads contain no name, phone, email, Zalo, case summary, document name or raw text.

  - id: session_replay_disabled
    requirement: Session replay is disabled on intake, payment, booking, contact and family pages.

  - id: consent_recorded
    requirement: Every intake submission creates a consent_records row with consent text snapshot and version.

  - id: audit_sensitive_access
    requirement: Viewing sensitive details or uploaded documents creates audit log entries.

  - id: private_document_storage
    requirement: Uploaded documents are stored in private buckets and accessed only via short-lived signed URLs.

  - id: payment_description_safe
    requirement: payOS payment description contains only generic service/orderCode, no case detail.

  - id: agent_privacy_boundary
    requirement: Agent2UI receives taxonomy fields only and does not receive raw PII or raw case summary.

  - id: retention_policy_configurable
    requirement: Lead/document retention is configurable by data category and status.

  - id: data_subject_request_table
    requirement: System has table/process to record access, correction, deletion, withdrawal or export requests.
```

---

## 18. Final decision

Kiến trúc dữ liệu của AnLuật.com phải theo hướng:

> **Lead taxonomy ở một nơi, thông tin liên hệ ở một nơi, nội dung vụ việc nhạy cảm ở một nơi khác, analytics ở một vùng hoàn toàn không có PII.**

Đây là thiết kế hơi phiền hơn kiểu “nhét hết vào một bảng leads rồi cầu nguyện”, nhưng cầu nguyện không phải là control bảo mật. Website luật cần đủ thông minh để chuyển đổi, nhưng cũng đủ kín miệng để khách hàng có thể tin tưởng gửi thông tin thật.

Tài liệu tiếp theo nên là **Agent2UI Technical Contract** — định nghĩa chính xác input/output giữa frontend, Supabase và agent renderer.

[1]: https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Law-91-2025-QH15-Personal-Data-Protection-665440.aspx?utm_source=chatgpt.com "Luật Bảo vệ dữ liệu cá nhân năm 2025 số 91/2025/QH15"

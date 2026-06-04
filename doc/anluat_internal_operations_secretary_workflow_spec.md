# Internal Operations / Secretary Workflow Spec

## AnLuật.com — Lead Handling, Secretary Review & Real-World Operations

```yaml id="doc-meta"
document_id: anluat_internal_operations_secretary_workflow_spec
version: 1.0
status: draft_for_review
language: vi-VN
project: Website mới An Luật
primary_domain: anluat.com
spec_type: Internal Operations / Secretary Workflow / Lead Governance
primary_conversion_asset: 1 GIỜ GẶP NHƯ
machine_readable: true
last_updated: 2026-06-02
depends_on:
  - anluat_web_new_product_ux_spec
  - anluat_payment_scheduling_orchestration_spec
  - anluat_data_model_privacy_safe_lead_spec
  - anluat_agent2ui_technical_contract
  - anluat_cms_content_model_ai_ready_seo_schema_spec
```

---

## 1. Mục tiêu tài liệu

Tài liệu này định nghĩa quy trình vận hành nội bộ sau khi website AnLuật.com tạo lead, booking intent, payment event hoặc case cần thư ký/lawyer review.

Mục tiêu:

```yaml id="goals"
goals:
  - Đảm bảo lead từ website được xử lý nhanh, đúng người, đúng mức độ khẩn cấp.
  - Tách rõ lead auto-book, lead cần thư ký xác nhận và lead cần luật sư review.
  - Định nghĩa SLA gọi lại, số lần gọi, kịch bản xử lý no-response.
  - Chuẩn hóa conflict check, payment resolution, đổi lịch, hủy lịch, no-show.
  - Bảo vệ dữ liệu nhạy cảm trong quá trình vận hành.
  - Tạo quy trình đủ rõ để dashboard/CRM nội bộ triển khai được.
  - Đảm bảo website thông minh không đổ việc vào một cái hố vận hành tối tăm.
```

---

# 2. Operating Principles

```yaml id="operating-principles"
operating_principles:
  - id: speed_with_care
    name: Nhanh nhưng không hấp tấp
    rule: Lead khẩn cấp phải được xử lý nhanh, nhưng không bỏ qua conflict check và bảo mật.

  - id: human_review_where_needed
    name: Con người review khi cần
    rule: Agent2UI chỉ phân luồng; vụ phức tạp, nhạy cảm, doanh nghiệp lớn hoặc có khả năng conflict phải qua người thật.

  - id: no_sensitive_data_over_public_channels
    name: Không trao đổi dữ liệu nhạy cảm qua kênh không phù hợp
    rule: Zalo/SMS chỉ dùng để hẹn lịch hoặc nhắc gọi, không gửi nội dung vụ việc chi tiết.

  - id: one_source_of_truth
    name: Một nguồn sự thật vận hành
    rule: Supabase/CRM nội bộ là nơi lưu trạng thái lead, không dùng ghi chú rời rạc trong chat cá nhân.

  - id: audit_important_actions
    name: Hành động quan trọng phải có audit
    rule: Xem thông tin nhạy cảm, đổi trạng thái, xử lý payment, tạo/hủy lịch đều phải log.

  - id: client_anxiety_reduction
    name: Giảm lo âu của khách
    rule: Mọi thông báo sau submit phải nói rõ bước tiếp theo, ai liên hệ, cần chuẩn bị gì.

  - id: operational_simplicity
    name: Quy trình đủ đơn giản để làm thật
    rule: Không tạo workflow 18 bước chỉ để gọi lại một người. Con người đã khổ, thư ký cũng là con người, nghe nói vậy.
```

---

# 3. Roles & Permissions

```yaml id="roles"
roles:
  public_user:
    description: Người dùng website / khách tiềm năng.
    can:
      - submit_intake
      - choose_slot_if_eligible
      - pay_via_payos
      - view_confirmation_and_preparation_sheet
    cannot:
      - view_internal_status
      - access_lead_after_submission

  secretary:
    description: Người tiếp nhận, gọi lại, xác nhận lịch, xử lý lead.
    can:
      - view_lead_queue
      - view_contact_details
      - view_limited_case_summary_if_authorized
      - update_lead_status
      - assign_to_lawyer_or_team
      - create_or_adjust_booking
      - mark_callback_attempts
      - escalate_payment_issue
    cannot:
      - access all sensitive case documents by default
      - delete audit logs
      - override payment success without authorization

  lawyer:
    description: Luật sư xử lý tư vấn hoặc review vụ việc.
    can:
      - view_assigned_leads
      - view_sensitive_details_for_assigned_leads
      - add_review_notes
      - mark_conflict_check_result
      - approve_or_reject_consultation_scope
      - convert_lead_to_case
    cannot:
      - view unrelated sensitive leads by default

  admin_ops:
    description: Quản trị vận hành.
    can:
      - manage users
      - manage queues
      - view audit logs
      - handle payment exceptions
      - configure SLA
      - export operational reports
    must:
      - be audited on sensitive access

  system:
    description: Backend automation.
    can:
      - create lead
      - create booking_intent
      - process payOS webhook
      - create Cal.com booking
      - send notifications
      - expire payment intents
    cannot:
      - invent legal advice
      - bypass payment verification
```

---

# 4. Lead Types

```yaml id="lead-types"
lead_types:
  auto_book_eligible:
    description: Lead đủ điều kiện chọn slot và thanh toán để chốt lịch.
    examples:
      - 1 GIỜ GẶP NHƯ cho vụ cá nhân định hướng nhanh
      - lao động cá nhân không quá phức tạp
      - hôn nhân/gia đình không gắn safety flag nghiêm trọng
    default_owner: system_then_secretary_monitoring

  secretary_review_required:
    description: Lead cần thư ký gọi lại trước khi đặt lịch.
    examples:
      - thông tin chưa đủ
      - khách chưa chọn slot
      - khách muốn thư ký gọi trước
      - payment lỗi hoặc booking lỗi
    default_owner: secretary

  lawyer_review_required:
    description: Lead cần luật sư xem sơ bộ trước khi nhận tư vấn.
    examples:
      - vụ việc phức tạp
      - tranh tụng lớn
      - doanh nghiệp lớn
      - khả năng conflict of interest
      - dữ liệu nhạy cảm cao
    default_owner: assigned_lawyer_or_team_lead

  urgent_sensitive:
    description: Lead khẩn cấp hoặc có yếu tố an toàn cá nhân.
    examples:
      - bạo lực gia đình
      - kiểm soát/đe dọa
      - cần xử lý trong 24 giờ
    default_owner: senior_secretary_or_assigned_lawyer
    special_handling: true

  b2b_diagnostic:
    description: Lead doanh nghiệp cần Legal Health Score / rà soát pháp lý.
    examples:
      - CEO/HR đăng ký kiểm tra sức khỏe pháp lý
      - doanh nghiệp cần đào tạo nội bộ
      - doanh nghiệp cần tư vấn thường xuyên
    default_owner: business_development_or_secretary
```

---

# 5. Lead Status Model

```yaml id="lead-status-model"
lead_statuses:
  new:
    description: Lead vừa được tạo.

  agent_recommended:
    description: Agent2UI đã gợi ý next step.

  auto_book_candidate:
    description: Lead có thể auto-book nếu chọn slot và thanh toán.

  payment_pending:
    description: Đã tạo payment link, đang chờ thanh toán.

  payment_success:
    description: payOS đã xác nhận thanh toán.

  booking_confirmed:
    description: Cal.com booking đã được tạo/chốt.

  secretary_review_required:
    description: Cần thư ký gọi lại.

  lawyer_review_required:
    description: Cần luật sư review trước.

  conflict_check_pending:
    description: Đang kiểm tra xung đột lợi ích.

  conflict_cleared:
    description: Không phát hiện conflict theo thông tin hiện có.

  conflict_found:
    description: Có conflict hoặc nguy cơ conflict.

  callback_attempted:
    description: Đã gọi ít nhất một lần.

  contacted:
    description: Đã liên hệ được khách.

  no_response:
    description: Không liên hệ được sau số lần quy định.

  consultation_completed:
    description: Buổi tư vấn đã diễn ra.

  converted_to_case:
    description: Lead chuyển thành hồ sơ/vụ việc chính thức.

  closed_unqualified:
    description: Lead không phù hợp hoặc ngoài phạm vi.

  cancelled:
    description: Khách hủy hoặc An Luật hủy.

  refund_or_reschedule_required:
    description: Cần xử lý hoàn tiền hoặc đổi lịch.

  deleted_or_anonymized:
    description: Dữ liệu đã xóa/ẩn danh theo chính sách.
```

---

# 6. Queue Model

```yaml id="queue-model"
queues:
  urgent_queue:
    description: Lead khẩn cấp hoặc có safety flag.
    priority: highest
    owner: senior_secretary
    sla: urgent

  payment_resolution_queue:
    description: Thanh toán thành công nhưng booking lỗi, thanh toán trễ, mismatch amount/orderCode.
    priority: high
    owner: admin_ops

  secretary_review_queue:
    description: Lead cần thư ký gọi lại.
    priority: normal
    owner: secretary

  lawyer_review_queue:
    description: Lead cần luật sư xem sơ bộ.
    priority: high
    owner: assigned_lawyer_or_team

  b2b_queue:
    description: Lead doanh nghiệp, Legal Health Score, đào tạo, tư vấn thường xuyên.
    priority: normal_high
    owner: b2b_secretary_or_business_team

  no_response_queue:
    description: Lead đã gọi nhiều lần chưa liên hệ được.
    priority: low
    owner: secretary

  post_consultation_queue:
    description: Theo dõi sau tư vấn, chuyển thành hồ sơ hoặc đóng lead.
    priority: normal
    owner: secretary_or_assigned_lawyer
```

---

# 7. SLA Rules

```yaml id="sla-rules"
sla_rules:
  urgent:
    applies_to:
      - urgency == within_24h
      - domestic_violence_possible
      - safety_flag == true
      - payment_success_but_booking_failed
    first_response_target: "within_30_minutes_business_hours"
    fallback_target: "within_2_hours"
    escalation_after: "30_minutes_without_owner"

  high:
    applies_to:
      - lawyer_review_required
      - b2b_high_value
      - conflict_check_pending
      - payment_resolution_required
    first_response_target: "same_business_day"
    escalation_after: "4_business_hours"

  normal:
    applies_to:
      - secretary_review_required
      - standard_callback
      - flexible_urgency
    first_response_target: "within_1_business_day"
    escalation_after: "1_business_day"

  low:
    applies_to:
      - no_response_followup
      - content_inquiry
      - non_urgent_question
    first_response_target: "within_2_business_days"
```

Business hours draft:

```yaml id="business-hours"
business_hours:
  timezone: Asia/Ho_Chi_Minh
  weekdays: "08:30-17:30"
  saturday: optional_configurable
  sunday: closed
  after_hours_behavior:
    urgent: show_emergency_notice_and_capture_lead
    normal: schedule_next_business_day_callback
```

Lưu ý: SLA này là bản vận hành ban đầu, cần An Luật chốt theo năng lực nhân sự thật. Đừng hứa “30 phút gọi lại” nếu sau đó thư ký đang đi ăn bún bò và hệ thống tự biến thành máy tạo thất vọng.

---

# 8. Workflow A — Auto-book Eligible Flow

```yaml id="workflow-auto-book"
workflow_auto_book:
  trigger:
    - Agent2UI decision.booking_mode == auto_book_candidate
    - recommended_service_id == one_hour_with_nhu
    - no_sensitive_human_review_flag

  steps:
    - step: A1
      name: show_slot_selector
      actor: system
      output: available_slots

    - step: A2
      name: user_selects_slot
      actor: public_user
      output: selected_slot

    - step: A3
      name: create_booking_intent
      actor: system
      status: payment_pending
      output: booking_intent_id

    - step: A4
      name: create_payos_payment_link
      actor: system
      output: checkout_url_or_qr

    - step: A5
      name: user_pays
      actor: public_user
      status: payment_pending

    - step: A6
      name: payos_webhook_verified
      actor: system
      status: payment_success

    - step: A7
      name: create_cal_booking
      actor: system
      preconditions:
        - payment_success_verified
        - slot_still_valid
        - no_duplicate_booking

    - step: A8
      name: show_confirmation_and_preparation_sheet
      actor: system
      status: booking_confirmed

    - step: A9
      name: secretary_monitoring
      actor: secretary
      purpose: monitor exceptions only
```

Exception handling:

```yaml id="auto-book-exceptions"
auto_book_exceptions:
  payment_timeout:
    action:
      - mark payment_expired
      - release_slot_lock
      - show_choose_again_message

  payment_success_after_slot_expired:
    action:
      - mark refund_or_reschedule_required
      - notify payment_resolution_queue
      - secretary contacts client

  cal_booking_failed_after_payment:
    action:
      - mark refund_or_reschedule_required
      - notify payment_resolution_queue urgent
      - secretary contacts client

  amount_mismatch:
    action:
      - do_not_confirm_booking
      - mark manual_payment_review
      - notify admin_ops
```

---

# 9. Workflow B — Secretary Review Flow

```yaml id="workflow-secretary-review"
workflow_secretary_review:
  trigger:
    - Agent2UI decision.booking_mode == secretary_review
    - user selected "thư ký gọi trước"
    - incomplete contact
    - payment/booking exception
    - case requires more info

  steps:
    - step: B1
      name: lead_enters_secretary_review_queue
      actor: system
      status: secretary_review_required

    - step: B2
      name: secretary_reviews_taxonomy_and_contact
      actor: secretary
      audit_required: true

    - step: B3
      name: secretary_checks_required_fields
      actor: secretary
      outcomes:
        - sufficient_info
        - needs_more_info
        - wrong_service
        - urgent_escalation

    - step: B4
      name: first_callback_attempt
      actor: secretary
      status: callback_attempted

    - step: B5
      name: contact_result_recorded
      actor: secretary
      outcomes:
        - contacted
        - no_answer
        - wrong_number
        - client_not_ready
        - needs_lawyer_review

    - step: B6
      name: next_action
      actor: secretary
      outcomes:
        - schedule_consultation
        - send_preparation_checklist
        - escalate_to_lawyer
        - close_unqualified
```

---

# 10. Workflow C — Lawyer Review Flow

```yaml id="workflow-lawyer-review"
workflow_lawyer_review:
  trigger:
    - requires_human_review == true
    - conflict_check_needed
    - complex_business_case
    - sensitive_case
    - high_value_b2b
    - court_or_authority_stage

  steps:
    - step: C1
      name: lead_enters_lawyer_review_queue
      actor: system
      status: lawyer_review_required

    - step: C2
      name: secretary_assigns_lawyer_or_team
      actor: secretary
      required:
        - legal_area
        - issue_type
        - urgency

    - step: C3
      name: lawyer_reviews_summary
      actor: assigned_lawyer
      audit_required: true

    - step: C4
      name: conflict_check
      actor: assigned_lawyer_or_authorized_staff
      output:
        - conflict_cleared
        - conflict_found
        - more_info_needed

    - step: C5
      name: scope_decision
      actor: assigned_lawyer
      outcomes:
        - accept_for_consultation
        - require_secretary_callback
        - decline_due_to_conflict
        - decline_out_of_scope
        - propose_custom_engagement

    - step: C6
      name: secretary_executes_next_step
      actor: secretary
```

---

# 11. Conflict Check Workflow

```yaml id="conflict-check"
conflict_check_workflow:
  purpose: Tránh nhận vụ việc có xung đột lợi ích hoặc rủi ro đạo đức nghề nghiệp.

  trigger_cases:
    - business_dispute
    - shareholder_dispute
    - litigation
    - debt_recovery
    - family_case_with_identified_counterparty
    - client_mentions_company_or_opposing_party

  minimum_fields:
    - client_name_if_available
    - opposing_party_name_if_available
    - company_name_if_available
    - related_entities_if_available
    - legal_area
    - issue_type

  statuses:
    - not_required
    - pending
    - cleared
    - found
    - insufficient_info

  rules:
    - If conflict_found, do not auto-book.
    - If insufficient_info, secretary requests more information.
    - Conflict notes are restricted and audited.
    - Do not disclose confidential reason to public user unnecessarily.
```

Conflict decision copy:

```yaml id="conflict-copy"
conflict_client_copy:
  decline_generic: >
    Sau khi kiểm tra sơ bộ, An Luật rất tiếc chưa thể tiếp nhận vụ việc này.
    Cảm ơn bạn đã tin tưởng liên hệ.

  need_more_info: >
    An Luật cần thêm một số thông tin để kiểm tra khả năng tiếp nhận vụ việc.
    Thư ký sẽ liên hệ để xác nhận.
```

---

# 12. Payment Resolution Workflow

```yaml id="payment-resolution"
payment_resolution_workflow:
  trigger:
    - payment_success_after_slot_expired
    - cal_booking_failed_after_payment
    - amount_mismatch
    - duplicate_webhook
    - customer_claims_paid_but_system_pending
    - payos_webhook_invalid_or_delayed

  owner: admin_ops
  backup_owner: senior_secretary

  steps:
    - step: P1
      name: review_booking_intent
      actor: admin_ops
      required:
        - order_code
        - amount
        - payment_status
        - selected_slot
        - webhook_verified

    - step: P2
      name: verify_payment_status
      actor: admin_ops
      sources:
        - payOS dashboard/API
        - Supabase payment_events
        - bank statement if needed

    - step: P3
      name: determine_resolution
      outcomes:
        - create_booking_now
        - offer_reschedule
        - refund_required
        - manual_accounting_review

    - step: P4
      name: notify_client
      actor: secretary
      channel:
        - phone
        - zalo
        - email

    - step: P5
      name: update_status_and_audit
      actor: admin_ops
```

Rules:

```yaml id="payment-resolution-rules"
payment_resolution_rules:
  - Never mark payment_success from frontend alone.
  - Never create confirmed booking if payment not verified.
  - If client paid and slot unavailable, prioritize reschedule or refund policy.
  - Keep payment notes generic; do not include sensitive case content.
```

---

# 13. Reschedule / Cancellation / No-show

## 13.1 Reschedule

```yaml id="reschedule-workflow"
reschedule_workflow:
  allowed_by:
    - client_request
    - lawyer_unavailable
    - payment_resolution
    - admin_ops

  rules:
    - Reschedule must update Cal.com and Supabase mirror.
    - Reschedule reason must be logged.
    - Client must receive updated confirmation.
    - Preparation checklist remains accessible.

  statuses:
    - reschedule_requested
    - rescheduled
    - reschedule_rejected
```

## 13.2 Cancellation

```yaml id="cancellation-workflow"
cancellation_workflow:
  triggers:
    - client_cancelled
    - conflict_found_after_booking
    - payment_invalid
    - internal_unavailability

  rules:
    - Cancellation must be mirrored in Cal.com and Supabase.
    - If payment exists, refund/resolution policy applies.
    - Cancellation reason is internal; public message should be concise.
```

## 13.3 No-show

```yaml id="no-show-workflow"
no_show_workflow:
  definition: Client does not attend scheduled consultation and cannot be reached during grace period.
  grace_period_minutes: 10
  steps:
    - mark no_show_pending
    - secretary attempts contact
    - if no response, mark no_show
    - apply reschedule/refund policy according to business rules
  data_required:
    - booking_uid
    - contact_attempts
    - notes
```

---

# 14. Callback Attempt Policy

```yaml id="callback-policy"
callback_policy:
  max_attempts: 3
  attempt_schedule:
    urgent:
      - immediately
      - after_30_minutes
      - after_2_hours
    normal:
      - same_business_day
      - next_business_day
      - after_2_business_days

  channels:
    preferred_order:
      - selected_contact_channel
      - phone
      - zalo
      - email

  after_max_attempts:
    status: no_response
    action:
      - send_final_message_if_contact_available
      - schedule_auto_close_after_retention_window
```

Call attempt record:

```yaml id="callback-record"
callback_attempt_record:
  fields:
    - lead_id
    - attempt_number
    - channel
    - outcome
    - timestamp
    - secretary_id
    - next_action
  outcomes:
    - answered
    - no_answer
    - busy
    - wrong_number
    - asked_to_call_later
    - unreachable
    - converted_to_booking
```

---

# 15. Secretary Scripts

## 15.1 First callback — general

```yaml id="script-general"
secretary_script_general:
  purpose: Xác nhận thông tin, không tư vấn pháp lý sâu.
  script: >
    Chào anh/chị, em gọi từ An Luật. An Luật đã nhận thông tin anh/chị gửi trên website.
    Em xin phép xác nhận nhanh nhóm vấn đề, hình thức tư vấn mong muốn và khung giờ phù hợp
    để sắp xếp luật sư hỗ trợ đúng hơn.
  must_not:
    - give_final_legal_advice
    - promise_outcome
    - discuss_sensitive_details_if_client_not_in_safe_context
```

## 15.2 Family/sensitive lead

```yaml id="script-sensitive"
secretary_script_sensitive:
  safety_first_question: >
    Hiện tại anh/chị có đang ở nơi thuận tiện và riêng tư để trao đổi không ạ?
  if_not_safe:
    response: >
      Dạ, vậy em sẽ không hỏi chi tiết lúc này. Anh/chị có thể chọn khung giờ khác
      hoặc nhắn lại khi thuận tiện. An Luật ưu tiên sự an toàn và riêng tư của anh/chị.
  must_not:
    - read back sensitive case summary loudly
    - mention divorce/domestic violence if not confirmed safe
    - send sensitive details via Zalo/SMS
```

## 15.3 Payment/booking issue

```yaml id="script-payment"
secretary_script_payment_issue:
  script: >
    An Luật đã ghi nhận thông tin thanh toán/lịch của anh/chị.
    Hiện hệ thống cần xác nhận lại khung giờ để đảm bảo không bị trùng lịch.
    Em sẽ hỗ trợ anh/chị đổi sang khung giờ phù hợp hoặc chuyển bộ phận phụ trách xử lý theo chính sách.
```

## 15.4 Conflict decline

```yaml id="script-conflict"
secretary_script_conflict_decline:
  script: >
    Sau khi kiểm tra sơ bộ khả năng tiếp nhận, An Luật rất tiếc chưa thể hỗ trợ vụ việc này.
    Cảm ơn anh/chị đã tin tưởng liên hệ.
  must_not:
    - disclose confidential conflict details
    - mention opposing party relationship unnecessarily
```

---

# 16. Notification Model

```yaml id="notification-model"
notifications:
  lead_created:
    recipients:
      - assigned_queue
    channels:
      - internal_dashboard
      - email_optional
      - zalo_internal_optional
    payload_safe:
      - lead_id
      - legal_area
      - urgency
      - status
    payload_forbidden:
      - case_summary
      - phone
      - email in public channels

  urgent_lead_created:
    recipients:
      - senior_secretary
      - assigned_lawyer_if_configured
    channels:
      - internal_dashboard
      - urgent_internal_alert
    sla: urgent

  payment_success:
    recipients:
      - system
      - secretary_monitoring
    channels:
      - dashboard
    action: create_cal_booking

  payment_exception:
    recipients:
      - admin_ops
      - senior_secretary
    channels:
      - dashboard
      - urgent_internal_alert

  booking_confirmed:
    recipients:
      - client
      - secretary
      - assigned_lawyer
    channels:
      - email
      - calendar_invite
      - optional_zalo_short_notice
```

Client notification safety:

```yaml id="client-notification-safety"
client_notification_safety:
  allowed:
    - appointment time
    - generic service name
    - preparation checklist link
    - contact channel
  forbidden:
    - detailed case summary
    - sensitive issue labels in subject line
    - domestic violence references in SMS/Zalo
```

---

# 17. Internal Dashboard Requirements

```yaml id="dashboard-requirements"
internal_dashboard:
  views:
    - queue_overview
    - urgent_queue
    - secretary_review_queue
    - lawyer_review_queue
    - payment_resolution_queue
    - booking_calendar_monitor
    - no_response_queue
    - converted_cases

  lead_card_fields:
    visible_by_default:
      - lead_id
      - legal_area
      - issue_type
      - urgency
      - lead_status
      - created_at
      - assigned_owner
      - sla_remaining
    hidden_until_click_authorized:
      - contact_details
      - case_summary
      - uploaded_documents

  actions:
    - assign_owner
    - mark_callback_attempt
    - update_status
    - request_lawyer_review
    - mark_conflict_status
    - create_or_update_booking
    - open_payment_resolution
    - close_lead
    - convert_to_case

  required_features:
    - SLA badges
    - audit trail panel
    - privacy warning before viewing sensitive details
    - quick filters by legal_area/status/urgency
    - search by lead_id/order_code/phone with permission
```

---

# 18. Data Handling During Operations

```yaml id="data-handling"
data_handling_operations:
  view_sensitive_details:
    requires:
      - authorized_role
      - assigned_or_admin
      - audit_log
    ui_warning: true

  download_document:
    requires:
      - signed_url
      - short_expiry
      - audit_log
    forbidden:
      - public_url
      - forwarding_to_personal_email

  call_notes:
    allowed:
      - factual_summary
      - callback_result
      - next_action
    forbidden:
      - unnecessary sensitive detail
      - subjective judgment
      - insulting client notes
```

Vâng, ghi chú nội bộ cũng phải tử tế. Không phải vì máy đọc được là con người được phép viết như goblin.

---

# 19. Operational State Transitions

```yaml id="state-transitions"
allowed_state_transitions:
  new:
    - agent_recommended
    - secretary_review_required
    - lawyer_review_required
    - closed_unqualified

  agent_recommended:
    - auto_book_candidate
    - secretary_review_required
    - lawyer_review_required

  auto_book_candidate:
    - payment_pending
    - secretary_review_required
    - cancelled

  payment_pending:
    - payment_success
    - payment_expired
    - refund_or_reschedule_required

  payment_success:
    - booking_confirmed
    - refund_or_reschedule_required

  secretary_review_required:
    - callback_attempted
    - lawyer_review_required
    - contacted
    - closed_unqualified

  callback_attempted:
    - contacted
    - no_response
    - secretary_review_required

  lawyer_review_required:
    - conflict_check_pending
    - secretary_review_required
    - auto_book_candidate
    - closed_unqualified

  conflict_check_pending:
    - conflict_cleared
    - conflict_found
    - secretary_review_required

  conflict_cleared:
    - auto_book_candidate
    - booking_confirmed
    - contacted

  conflict_found:
    - closed_unqualified
    - cancelled

  booking_confirmed:
    - consultation_completed
    - cancelled
    - refund_or_reschedule_required

  consultation_completed:
    - converted_to_case
    - closed_unqualified

  no_response:
    - contacted
    - closed_unqualified

  refund_or_reschedule_required:
    - booking_confirmed
    - cancelled
```

Invalid transitions:

```yaml id="invalid-transitions"
invalid_transitions:
  - from: payment_pending
    to: booking_confirmed
    unless: payment_success_verified
  - from: conflict_found
    to: booking_confirmed
  - from: new
    to: converted_to_case
  - from: payment_expired
    to: booking_confirmed
    unless: manual_resolution_completed
```

---

# 20. KPIs & Operational Metrics

```yaml id="ops-metrics"
operational_metrics:
  speed:
    - average_time_to_first_callback
    - urgent_lead_sla_hit_rate
    - payment_resolution_time
    - lawyer_review_turnaround_time

  quality:
    - lead_contact_success_rate
    - qualified_lead_rate
    - conversion_to_consultation_rate
    - consultation_to_case_rate

  reliability:
    - payment_exception_rate
    - cal_booking_failure_rate
    - duplicate_booking_rate
    - late_payment_resolution_rate

  privacy:
    - sensitive_access_count
    - unauthorized_access_attempts
    - audit_log_completeness
    - pii_analytics_incident_count

  workload:
    - leads_per_secretary_per_day
    - queue_age_by_status
    - no_response_rate
    - manual_review_rate
```

Targets draft:

```yaml id="ops-targets"
operational_targets_draft:
  urgent_first_callback: ">= 90% within SLA"
  normal_first_callback: ">= 85% within 1 business day"
  payment_exception_resolution: ">= 90% same business day"
  duplicate_booking_rate: "0%"
  pii_analytics_incident_count: "0"
```

---

# 21. Automation Rules

```yaml id="automation-rules"
automation_rules:
  auto_assign_urgent:
    if:
      - urgency == within_24h
    then:
      - assign_queue: urgent_queue
      - notify: senior_secretary

  auto_assign_payment_exception:
    if:
      - status == refund_or_reschedule_required
    then:
      - assign_queue: payment_resolution_queue
      - notify: admin_ops

  auto_expire_payment_pending:
    if:
      - payment_pending_duration > configured_payment_window
    then:
      - mark: payment_expired
      - release_slot_lock

  auto_mark_no_response:
    if:
      - callback_attempts >= 3
      - no_successful_contact
    then:
      - mark: no_response

  auto_close_unqualified_no_response:
    if:
      - status == no_response
      - age > retention_policy.no_response_close_window
    then:
      - mark: closed_unqualified
```

---

# 22. Audit Requirements

```yaml id="audit-requirements"
audit_requirements:
  must_log:
    - lead_created
    - lead_assigned
    - contact_details_viewed
    - sensitive_details_viewed
    - document_viewed
    - callback_attempt_recorded
    - lead_status_changed
    - conflict_status_changed
    - payment_exception_opened
    - payment_exception_resolved
    - cal_booking_created
    - cal_booking_cancelled
    - refund_or_reschedule_marked
    - lead_converted_to_case
    - lead_deleted_or_anonymized

  audit_fields:
    - actor_id
    - actor_role
    - action
    - entity_type
    - entity_id
    - previous_state
    - new_state
    - metadata
    - timestamp
```

---

# 23. Privacy Guardrails in Operations

```yaml id="privacy-guardrails"
privacy_guardrails:
  channels:
    phone:
      allowed: sensitive_discussion_if_client_confirms_safe_context
    zalo:
      allowed: scheduling_short_messages
      forbidden: detailed_case_discussion
    email:
      allowed: confirmation_and_preparation_checklist
      caution: avoid_sensitive_subject_line
    internal_dashboard:
      allowed: sensitive_data_with_access_control_and_audit

  subject_line_rules:
    avoid:
      - "ly hôn"
      - "bạo hành"
      - "tranh chấp tài sản"
      - "thu hồi nợ"
    prefer:
      - "Thông tin lịch tư vấn An Luật"
      - "Xác nhận thông tin từ An Luật"

  internal_note_rules:
    - Keep factual.
    - Avoid unnecessary sensitive details.
    - Do not copy full client messages unless needed.
    - Do not include judgmental language.
```

---

# 24. Secretary Review Checklist

```yaml id="secretary-checklist"
secretary_review_checklist:
  before_call:
    - Check legal_area and urgency.
    - Check preferred contact channel.
    - Check safety flag.
    - Check if payment or booking issue exists.
    - Check whether lawyer review is required.

  during_call:
    - Confirm client is in a private/safe context if sensitive.
    - Confirm basic issue category.
    - Confirm desired consultation mode.
    - Confirm preferred time.
    - Do not give legal advice beyond approved script.
    - Do not promise outcome.

  after_call:
    - Record callback outcome.
    - Update lead_status.
    - Assign lawyer/team if needed.
    - Send preparation checklist if appropriate.
    - Create booking or request review.
```

---

# 25. Lawyer Review Checklist

```yaml id="lawyer-review-checklist"
lawyer_review_checklist:
  before_accepting:
    - Review legal_area and issue_type.
    - Check conflict risk.
    - Check whether An Luật can assist.
    - Determine if 1-hour consultation is appropriate.
    - Determine if custom engagement is needed.

  possible_decisions:
    - accept_for_one_hour_consultation
    - request_more_info
    - secretary_callback_first
    - custom_quote_required
    - decline_due_to_conflict
    - decline_out_of_scope

  output_required:
    - decision
    - reason_code
    - next_action
    - notes_for_secretary
```

---

# 26. Standard Reason Codes

```yaml id="reason-codes"
reason_codes:
  intake:
    - insufficient_information
    - wrong_service_area
    - urgent_sensitive_case
    - suitable_for_one_hour
    - custom_quote_required

  conflict:
    - conflict_cleared
    - conflict_found_existing_client
    - conflict_found_related_party
    - conflict_insufficient_info

  payment:
    - payment_success
    - payment_timeout
    - payment_late_after_slot_expired
    - amount_mismatch
    - webhook_delay
    - cal_booking_failed

  closure:
    - no_response_after_three_attempts
    - client_cancelled
    - out_of_scope
    - conflict_decline
    - converted_to_case
```

---

# 27. Client-Facing Status Messages

```yaml id="client-status-messages"
client_status_messages:
  intake_received:
    vi: "An Luật đã nhận thông tin. Chúng tôi sẽ xem sơ bộ và phản hồi theo luồng phù hợp."

  secretary_review:
    vi: "Vụ việc này cần An Luật xác nhận thêm. Thư ký sẽ liên hệ để hẹn lịch, phí tư vấn và hồ sơ cần chuẩn bị."

  lawyer_review:
    vi: "Thông tin của bạn đã được chuyển để luật sư xem sơ bộ trước khi xác nhận hướng tư vấn."

  payment_pending:
    vi: "Khung giờ đã được giữ tạm. Vui lòng hoàn tất thanh toán để chốt lịch."

  booking_confirmed:
    vi: "Lịch tư vấn đã được xác nhận. An Luật sẽ gửi thông tin buổi gặp và phiếu chuẩn bị."

  payment_exception:
    vi: "Thanh toán đã được ghi nhận nhưng khung giờ cần xác nhận lại. Thư ký An Luật sẽ liên hệ để hỗ trợ."

  no_response_final:
    vi: "An Luật đã cố gắng liên hệ nhưng chưa kết nối được. Bạn có thể gửi lại thông tin khi thuận tiện."
```

---

# 28. Machine-readable Summary

```json id="machine-summary"
{
  "document_id": "anluat_internal_operations_secretary_workflow_spec",
  "version": "1.0",
  "status": "draft_for_review",
  "roles": [
    "public_user",
    "secretary",
    "lawyer",
    "admin_ops",
    "system"
  ],
  "lead_types": [
    "auto_book_eligible",
    "secretary_review_required",
    "lawyer_review_required",
    "urgent_sensitive",
    "b2b_diagnostic"
  ],
  "queues": [
    "urgent_queue",
    "payment_resolution_queue",
    "secretary_review_queue",
    "lawyer_review_queue",
    "b2b_queue",
    "no_response_queue",
    "post_consultation_queue"
  ],
  "core_workflows": [
    "auto_book_flow",
    "secretary_review_flow",
    "lawyer_review_flow",
    "conflict_check_workflow",
    "payment_resolution_workflow",
    "reschedule_workflow",
    "cancellation_workflow",
    "no_show_workflow"
  ],
  "critical_rules": [
    "Do not confirm booking before verified payment success",
    "Sensitive or conflict-risk cases require human review",
    "Secretary must not give final legal advice",
    "Sensitive discussion requires client-safe context",
    "Zalo/SMS must not contain detailed sensitive case content",
    "Payment exceptions go to payment_resolution_queue",
    "Viewing sensitive data requires audit log",
    "No duplicate booking creation",
    "Conflict_found cannot transition to booking_confirmed"
  ],
  "sla": {
    "urgent": "within_30_minutes_business_hours_target",
    "normal": "within_1_business_day_target",
    "payment_exception": "same_business_day_target"
  }
}
```

---

# 29. Acceptance Criteria

```yaml id="acceptance-criteria"
acceptance_criteria:
  - id: AC001_queues_exist
    requirement: Internal dashboard supports urgent, secretary review, lawyer review, payment resolution and no-response queues.

  - id: AC002_sla_visible
    requirement: Each lead shows SLA priority and remaining time.

  - id: AC003_callback_attempts_logged
    requirement: Every callback attempt records channel, outcome, timestamp and actor.

  - id: AC004_conflict_check_supported
    requirement: System supports conflict_check_pending, conflict_cleared and conflict_found statuses.

  - id: AC005_payment_exception_queue
    requirement: Payment success after expired slot or Cal.com failure creates payment resolution task.

  - id: AC006_sensitive_access_audited
    requirement: Viewing contact details, sensitive details or documents creates audit log.

  - id: AC007_secretary_script_boundary
    requirement: Secretary workflow includes scripts that avoid final legal advice and sensitive disclosure.

  - id: AC008_no_sensitive_public_messages
    requirement: Client-facing SMS/Zalo/email subjects do not expose sensitive issue labels.

  - id: AC009_valid_state_transitions
    requirement: System prevents invalid transitions such as payment_pending to booking_confirmed without verified payment.

  - id: AC010_no_response_policy
    requirement: System supports max callback attempts and no_response closure policy.

  - id: AC011_reschedule_cancel_supported
    requirement: Reschedule, cancellation and no-show flows update both Supabase and Cal.com mirror.

  - id: AC012_operational_metrics
    requirement: Dashboard can report SLA hit rate, contact success, payment exception rate and conversion rate.
```

---

# 30. Final Decision

Vận hành nội bộ của AnLuật.com phải theo mô hình:

> **Lead được phân luồng tự động, nhưng hành động nhạy cảm được con người kiểm soát. Auto-book chỉ dành cho case đủ điều kiện và đã thanh toán. Case phức tạp, nhạy cảm hoặc có rủi ro conflict phải vào secretary/lawyer review. Mọi dữ liệu nhạy cảm phải có phân quyền, audit và quy tắc liên hệ an toàn.**

Đây là lớp nối giữa website thông minh và đội ngũ thật. Không có lớp này, mọi thứ trước đó chỉ là một cái phễu đẹp đẽ đổ lead vào khoảng không — nghe thì thơ, làm thì thảm họa.

Tài liệu cuối cùng nên viết trước roadmap là:

# **QA, Test Plan & Acceptance Matrix**

Sau đó mới viết roadmap. Vì roadmap không có test plan là một lời hứa mơ hồ mặc áo sơ mi.

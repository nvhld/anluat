# Payment & Scheduling Orchestration Spec

## AnLuật.com — payOS + Cal.com + Supabase

```yaml
document_id: anluat_payment_scheduling_orchestration_spec
version: 1.0
status: draft
language: vi-VN
project: Website mới An Luật
primary_flow: 1 GIỜ GẶP NHƯ
module_scope: MVP-B_gated_payment_auto_book_module
inclusion_rule: include_in_MVP_only_if_Sprint_0_POC_passes
stack:
  scheduling: Cal.com
  payment: payOS / VietQR dynamic payment link
  backend: Supabase Edge Functions
  database: Supabase Postgres
  frontend: Astro + Agent2UI
online_payment: gated_true_only_for_auto_bookable_flows_after_POC
secretary_review: true_for_complex_flows
default_mvp_without_this_module: MVP-A_secretary_callback
```

---

## 1. Mục tiêu

Tài liệu này định nghĩa luồng **đặt lịch + thanh toán + đối soát tự động** cho website An Luật dưới dạng **MVP-B gated module**. MVP mặc định là MVP-A: secretary callback, không auto-book/payment.

Payment/auto-book chỉ được đưa vào MVP nếu Sprint 0 POC pass và PO chốt MVP-B.

Mục tiêu chính:

```yaml
goals:
  - Kiểm chứng khả năng đưa payment/auto-book vào MVP-B sau Sprint 0 POC.
  - Cho khách hàng cá nhân/khủng hoảng có cảm giác chốt lịch ngay.
  - Dùng thanh toán VietQR động như bộ lọc tự nhiên.
  - Tự động đối soát thanh toán bằng payOS webhook.
  - Chốt lịch trên Cal.com sau khi thanh toán thành công.
  - Giữ luồng thư ký xác nhận cho vụ việc doanh nghiệp/phức tạp.
```

---

## 1.1 Sprint 0 POC Gate

```yaml
sprint_0_poc_gate:
  required_before_timeline_commit: true
  outputs:
    - poc_report
    - risks_after_poc
    - mvp_a_or_b_recommendation
    - revised_timeline

  payos_must_pass:
    - create_payment_link
    - verify_webhook
    - reject_invalid_signature
    - idempotent_duplicate_webhook
    - amount_mismatch_no_booking

  calcom_must_pass:
    - fetch_availability
    - create_booking_after_payment_success
    - handle_slot_unavailable
    - no_duplicate_booking

  decision_after_poc:
    pass: PO may include MVP-B payment/auto-book module.
    fail: Launch MVP-A with secretary callback and move payment/auto-book to post-MVP backlog.
```

---

## 2. Kiến trúc tổng quan

```yaml
architecture:
  frontend:
    framework: Astro
    dynamic_ui: React Islands / Agent2UI
    payment_ui: payOS checkout/payment link or embedded QR view
    scheduling_ui: Cal.com slots rendered after intake eligibility

  backend:
    runtime: Supabase Edge Functions
    database: Supabase Postgres
    payment_sdk: "@payos/node"
    fallback_payment_api: payOS HTTP API

  scheduling:
    provider: Cal.com
    mode:
      - auto_book_for_eligible_one_hour_cases
      - secretary_review_for_complex_cases

  payment:
    provider: payOS
    method: VietQR dynamic payment link
    reconciliation: payOS webhook
```

---

## 3. Hybrid Booking Model

Không phải mọi vụ việc đều auto-book.

```yaml
booking_modes:
  auto_book:
    applies_to:
      - 1 GIỜ GẶP NHƯ
      - vụ việc cá nhân đủ điều kiện
      - vụ việc cần tư vấn định hướng nhanh
      - slot đã được Luật sư Như block sẵn
    requires:
      - intake_completed
      - slot_selected
      - payment_success
    final_status: confirmed

  secretary_review:
    applies_to:
      - doanh nghiệp lớn
      - tranh chấp phức tạp
      - vụ việc có nguy cơ conflict of interest
      - M&A / đầu tư / tranh tụng lớn
      - hồ sơ cần báo giá riêng
    requires:
      - intake_completed
      - secretary_callback
    final_status: pending_human_review
```

---

## 4. Flow chính: Auto-book + payOS

```yaml
auto_book_flow:
  step_1:
    name: Agent2UI Intake
    description: Người dùng trả lời các câu hỏi zero-typing.

  step_2:
    name: Eligibility Check
    description: Backend xác định vụ việc có đủ điều kiện auto-book hay không.

  step_3:
    name: Slot Selection
    description: Hiển thị các slot Cal.com đã cấu hình cho 1 GIỜ GẶP NHƯ.

  step_4:
    name: Create Internal Booking Intent
    description: Tạo booking intent trong Supabase với status payment_pending.

  step_5:
    name: Create payOS Payment Link
    description: Backend tạo payment link / VietQR động qua payOS.

  step_6:
    name: Customer Pays
    description: Khách thanh toán bằng app ngân hàng qua VietQR.

  step_7:
    name: payOS Webhook
    description: payOS gửi webhook về Supabase Edge Function.

  step_8:
    name: Verify Webhook
    description: Backend verify signature và đối chiếu orderCode.

  step_9:
    name: Confirm Cal.com Booking
    description: Sau khi payment success, hệ thống tạo/chốt booking trên Cal.com.

  step_10:
    name: Confirmation UI
    description: Website hiển thị xác nhận lịch và Phiếu chuẩn bị 1 giờ gặp Như.
```

---

## 5. Trạng thái booking/payment

```yaml
booking_statuses:
  - intake_started
  - intake_completed
  - eligible_for_auto_book
  - slot_selected
  - payment_pending
  - payment_success
  - booking_confirmed
  - payment_failed
  - payment_expired
  - secretary_review_required
  - cancelled
```

```yaml
payment_statuses:
  - created
  - pending
  - paid
  - cancelled
  - expired
  - failed
  - manually_reviewed
```

---

## 6. Database schema đề xuất

### 6.1 `booking_intents`

```sql
create table booking_intents (
  id uuid primary key default gen_random_uuid(),
  order_code bigint unique not null,
  legal_area text not null,
  issue_type text,
  urgency text,
  preferred_lawyer text,
  consultation_mode text,
  customer_name text,
  customer_phone text,
  customer_email text,
  customer_zalo text,
  selected_slot_start timestamptz,
  selected_slot_end timestamptz,
  cal_event_type_id text,
  cal_booking_uid text,
  payment_link_id text,
  payment_checkout_url text,
  amount integer,
  currency text default 'VND',
  status text not null default 'payment_pending',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

### 6.2 `payment_events`

```sql
create table payment_events (
  id uuid primary key default gen_random_uuid(),
  booking_intent_id uuid references booking_intents(id),
  order_code bigint not null,
  provider text default 'payos',
  raw_event jsonb,
  verified boolean default false,
  event_status text,
  received_at timestamptz default now()
);
```

### 6.3 `booking_audit_logs`

```sql
create table booking_audit_logs (
  id uuid primary key default gen_random_uuid(),
  booking_intent_id uuid references booking_intents(id),
  action text not null,
  actor text not null,
  metadata jsonb,
  created_at timestamptz default now()
);
```

---

## 7. payOS integration

### 7.1 Tạo payment link

Backend tạo payment link sau khi khách chọn slot.

```yaml
payos_create_payment_link:
  function_name: create-payment-link
  runtime: Supabase Edge Function
  sdk: "@payos/node"
  input:
    - booking_intent_id
    - order_code
    - amount
    - customer_summary_without_sensitive_text
  output:
    - payment_link_id
    - checkout_url
    - qr_code_url_or_payment_page
```

Payload logic:

```js
const paymentData = {
  orderCode,
  amount,
  description: `ANLUAT ${orderCode}`,
  items: [
    {
      name: "1 GIO GAP NHU",
      quantity: 1,
      price: amount
    }
  ],
  cancelUrl,
  returnUrl
};
```

Lưu ý: `description` nên ngắn, không chứa nội dung vụ việc. Đừng nhét “ly hôn/bạo hành/tranh chấp tài sản” vào mô tả chuyển khoản. Đó là cách biến sao kê ngân hàng thành nhật ký đau thương, rất không nên.

---

### 7.2 Webhook payOS

```yaml
payos_webhook:
  function_name: payos-webhook
  method: POST
  responsibilities:
    - receive_webhook
    - verify_signature
    - store_raw_event
    - check_order_code
    - update_payment_status
    - trigger_cal_booking_confirmation
```

Rule bắt buộc:

```yaml
payos_webhook_rules:
  - Không xử lý webhook nếu verify signature fail.
  - Không update booking nếu orderCode không tồn tại.
  - Không confirm booking nếu amount không khớp.
  - Không lưu nội dung nhạy cảm vào payment event.
  - Webhook phải idempotent.
```

Idempotency:

```yaml
idempotency:
  key: order_code + event_status
  behavior:
    - Nếu payment_success đã xử lý, bỏ qua webhook lặp.
    - Nếu booking đã confirmed, không tạo booking Cal.com lần hai.
```

---

## 8. Cal.com integration

### 8.1 Event Types

```yaml
cal_event_types:
  - id: one_hour_with_nhu_auto
    name: 1 GIỜ GẶP NHƯ - Auto-book
    mode: auto_accept_after_payment
    duration: 60
    owner: lawyer_nhu
    availability: pre_blocked_slots_only

  - id: one_hour_with_nhu_review
    name: 1 GIỜ GẶP NHƯ - Cần xác nhận
    mode: secretary_review
    duration: 60
    owner: lawyer_nhu_or_team

  - id: business_consultation_review
    name: Tư vấn doanh nghiệp - Cần xác nhận
    mode: secretary_review
    duration: custom
    owner: business_legal_team
```

---

### 8.2 Booking confirmation

Có 2 cách triển khai. Tôi đề xuất **Option B**.

#### Option A — Tạo Cal.com booking trước, chờ payment

```yaml
option_a:
  description: Tạo booking ngay khi chọn slot, sau đó hủy nếu không thanh toán.
  risk:
    - giữ slot ảo
    - khách không thanh toán gây block lịch
    - cần job dọn booking expired
  recommendation: not_preferred
```

#### Option B — Giữ slot nội bộ, chỉ tạo Cal.com booking sau payment success

```yaml
option_b:
  description: Lưu slot selected trong Supabase, tạo Cal.com booking sau khi payOS báo paid.
  benefit:
    - tránh block lịch rác
    - Cal.com chỉ chứa booking thật
    - payment là bộ lọc tự nhiên
  risk:
    - slot có thể bị người khác lấy nếu không có cơ chế lock tốt
  mitigation:
    - chỉ hiển thị slot buffer
    - lock slot nội bộ trong thời gian ngắn
    - re-check availability trước khi create booking
  recommendation: preferred
```

---

## 9. Slot locking

```yaml
slot_locking:
  lock_duration_minutes: 10
  lock_owner: booking_intent_id
  lock_status:
    - active
    - released
    - converted_to_booking
    - expired
```

Flow:

```yaml
slot_lock_flow:
  - User chọn slot.
  - Supabase tạo booking_intent với selected_slot và status payment_pending.
  - Slot bị lock nội bộ trong 10 phút.
  - payOS payment link được tạo.
  - Nếu paid trong 10 phút: tạo Cal.com booking.
  - Nếu hết hạn: release slot và mark payment_expired.
```

Nếu thanh toán đến muộn sau khi slot hết hạn:

```yaml
late_payment_handling:
  condition: payment_success_after_slot_expired
  action:
    - mark payment_success_needs_manual_resolution
    - notify_secretary
    - do_not_auto_create_booking
    - offer_reschedule_or_refund_process
```

Đây là phần phải có. Không thì một ngày đẹp trời khách thanh toán trễ, slot bay mất, và ta phát minh ra một loại đau khổ mới có tên “VietQR race condition”.

---

## 10. Supabase Edge Functions

```yaml
edge_functions:
  - name: create-booking-intent
    purpose: Tạo intent sau intake và slot selection.

  - name: create-payos-payment-link
    purpose: Gọi payOS để tạo payment link / QR động.

  - name: payos-webhook
    purpose: Nhận webhook, verify, cập nhật payment, trigger Cal.com.

  - name: create-cal-booking
    purpose: Tạo booking trên Cal.com sau payment success.

  - name: expire-payment-intents
    purpose: Cron/job dọn các payment_pending quá hạn.

  - name: secretary-review-notify
    purpose: Gửi thông báo cho thư ký với case cần review.
```

---

## 11. Security rules

```yaml
security_rules:
  secrets:
    - PAYOS_CLIENT_ID
    - PAYOS_API_KEY
    - PAYOS_CHECKSUM_KEY
    - CAL_API_KEY
    - SUPABASE_SERVICE_ROLE_KEY

  storage:
    - Không expose service role key ra frontend.
    - Không lưu secret trong client bundle.
    - Không log webhook raw chứa dữ liệu nhạy cảm quá mức.

  webhook:
    - Verify payOS signature.
    - Verify amount.
    - Verify orderCode.
    - Idempotent processing.
    - Rate limit webhook endpoint nếu cần.

  privacy:
    - Payment description không chứa nội dung vụ việc.
    - Analytics không nhận PII.
    - Không bật session replay trên payment/intake flow.
```

---

## 12. Frontend UI states

```yaml
payment_ui_states:
  - state: slot_selected
    message: Bạn đã chọn khung giờ. Vui lòng hoàn tất thanh toán để chốt lịch.

  - state: payment_pending
    message: Đang chờ xác nhận thanh toán từ ngân hàng.

  - state: payment_success
    message: An Luật đã nhận thanh toán. Đang chốt lịch.

  - state: booking_confirmed
    message: Lịch tư vấn đã được xác nhận.

  - state: payment_expired
    message: Mã thanh toán đã hết hạn. Vui lòng chọn lại khung giờ.

  - state: manual_resolution_required
    message: Thanh toán đã được ghi nhận nhưng khung giờ cần xác nhận lại. Thư ký An Luật sẽ liên hệ.
```

---

## 13. Copy UI đề xuất

### Sau khi chọn slot

> Khung giờ này sẽ được giữ tạm trong vài phút.
> Vui lòng hoàn tất thanh toán qua VietQR để chốt lịch.

### Khi hiển thị QR

> Quét mã bằng ứng dụng ngân hàng.
> Nội dung chuyển khoản đã được tạo tự động để An Luật đối soát chính xác.

### Sau payment success

> An Luật đã ghi nhận thanh toán.
> Lịch tư vấn của bạn đang được xác nhận trên hệ thống.

### Booking confirmed

> Lịch tư vấn đã được xác nhận.
> An Luật sẽ gửi thông tin buổi gặp và Phiếu chuẩn bị để bạn không phải bắt đầu từ con số 0.

---

## 14. Analytics events

Không gửi PII. Không gửi nội dung vụ việc.

```yaml
payment_analytics_events:
  - event: booking_slot_selected
    properties:
      - event_type_id
      - legal_area
      - urgency
      - device_type

  - event: payment_link_created
    properties:
      - amount_band
      - legal_area
      - booking_mode

  - event: payment_qr_viewed
    properties:
      - booking_mode
      - device_type

  - event: payment_success_webhook_received
    properties:
      - booking_mode
      - amount_band

  - event: cal_booking_created
    properties:
      - event_type_id
      - booking_mode

  - event: payment_expired
    properties:
      - booking_mode
      - legal_area

  - event: manual_resolution_required
    properties:
      - reason
      - booking_mode
```

---

## 15. Error handling

```yaml
error_handling:
  payos_create_failed:
    user_message: Hiện chưa tạo được mã thanh toán. Vui lòng thử lại hoặc để An Luật gọi lại.
    internal_action: notify_admin

  payos_webhook_invalid_signature:
    user_message: none
    internal_action: reject_and_log_security_event

  cal_booking_create_failed:
    user_message: Thanh toán đã được ghi nhận. Thư ký An Luật sẽ xác nhận lịch trong thời gian sớm nhất.
    internal_action: notify_secretary_urgent

  slot_conflict_after_payment:
    user_message: Thanh toán đã được ghi nhận nhưng khung giờ cần xác nhận lại. An Luật sẽ liên hệ để đổi lịch phù hợp.
    internal_action: manual_resolution_queue

  payment_late_after_expiry:
    user_message: Thanh toán đã được ghi nhận sau thời gian giữ chỗ. An Luật sẽ liên hệ để xác nhận lịch mới.
    internal_action: manual_resolution_queue
```

---

## 16. Decision record

```yaml
architecture_decision:
  id: ADR-PAYMENT-SCHEDULING-001
  title: Use payOS + Cal.com + Supabase for gated hybrid booking/payment orchestration
  status: accepted_as_MVP_B_gated_module
  decision:
    - Dùng Cal.com làm scheduling engine nếu MVP-B được bật.
    - Dùng payOS làm payment/VietQR dynamic payment link provider nếu MVP-B được bật.
    - Dùng Supabase Edge Functions làm orchestration backend nếu Sprint 0 POC pass.
    - Dùng Supabase Postgres làm source of truth cho booking/payment intent nếu MVP-B được bật.
    - MVP mặc định vẫn là MVP-A secretary callback.
    - Auto-book chỉ áp dụng cho các event type đủ điều kiện.
    - Vụ việc phức tạp chuyển sang secretary review.

  rationale:
    - payOS phù hợp thị trường Việt Nam và VietQR.
    - Cal.com phù hợp quản lý availability và booking.
    - Supabase phù hợp webhook, database và server-side functions.
    - Hybrid model cân bằng giữa cảm giác chốt lịch ngay và kiểm soát rủi ro vận hành.

  consequences:
    positive:
      - Giảm drop-off ở nhóm khách hàng khủng hoảng.
      - Thanh toán trở thành bộ lọc lead tự nhiên.
      - Đối soát tự động, giảm việc thủ công cho thư ký.
      - Vẫn giữ được human review cho case phức tạp.
    negative:
      - Cần xử lý race condition slot/payment.
      - Cần xây state machine cẩn thận.
      - Cần test kỹ webhook và idempotency.
      - Timeline không được cam kết trước Sprint 0 POC.
```

---

## 17. Machine-readable summary

```json
{
  "document_id": "anluat_payment_scheduling_orchestration_spec",
  "version": "1.0",
  "status": "draft",
  "module_scope": "MVP-B_gated_payment_auto_book_module",
  "default_mvp": "MVP-A_secretary_callback",
  "inclusion_rule": "include only if Sprint 0 POC passes and PO approves MVP-B",
  "stack": {
    "scheduling": "Cal.com",
    "payment": "payOS",
    "backend": "Supabase Edge Functions",
    "database": "Supabase Postgres",
    "frontend": "Astro + Agent2UI"
  },
  "booking_model": "hybrid",
  "auto_book_applies_to": [
    "1 GIỜ GẶP NHƯ",
    "eligible personal crisis flows",
    "pre-blocked lawyer availability"
  ],
  "secretary_review_applies_to": [
    "complex business cases",
    "large disputes",
    "conflict-check needed cases",
    "custom pricing cases"
  ],
  "payment_flow": [
    "intake_completed",
    "eligibility_check",
    "slot_selected",
    "booking_intent_created",
    "payos_payment_link_created",
    "customer_payment",
    "payos_webhook_verified",
    "cal_booking_created",
    "confirmation_displayed"
  ],
  "critical_rules": [
    "do_not_include_in_MVP_without_Sprint_0_POC_pass",
    "verify_payos_webhook_signature",
    "do_not_confirm_booking_before_payment_success",
    "do_not_put_sensitive_case_content_in_payment_description",
    "make_webhook_processing_idempotent",
    "handle_late_payment_and_slot_conflict",
    "disable_session_replay_on_intake_and_payment"
  ]
}
```

---

## 18. Kết luận

**Chốt: đồng ý với payOS + Cal.com như MVP-B gated module.** Đây là kiến trúc hợp lý cho nhóm auto-book đủ điều kiện, nhưng không phải MVP mặc định.

MVP mặc định vẫn là **MVP-A secretary callback**. Chỉ đưa payment/auto-book vào MVP nếu Sprint 0 POC pass: payOS payment link, verified webhook, Cal.com booking after payment success, no duplicate booking và payment resolution queue. Khi triển khai, bắt buộc dùng mô hình **booking intent trước, payment success rồi mới confirm booking**.

[1]: https://payos.vn/docs/sdks/back-end/node/?utm_source=chatgpt.com "NodeJS SDK"
[2]: https://supabase.com/docs/guides/functions?utm_source=chatgpt.com "Edge Functions | Supabase Docs"
[3]: https://cal.com/docs/api-reference/v2/bookings/create-a-booking?utm_source=chatgpt.com "Create a booking - Cal.com Docs"

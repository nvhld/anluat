# Tech Stack & System Architecture ADR

## AnLuật.com — Website mới

```yaml
document_id: anluat_tech_stack_system_architecture_adr
version: 1.0
status: draft_for_review
language: vi-VN
project: Website mới An Luật
primary_domain: anluat.com
spec_type: Architecture Decision Record / System Architecture
primary_conversion_asset: 1 GIỜ GẶP NHƯ
machine_readable: true
last_updated: 2026-06-02
```

---

## 1. Mục tiêu tài liệu

Tài liệu này chốt kiến trúc kỹ thuật tổng thể cho website mới An Luật, bao gồm frontend, CMS, backend, database, Agent2UI, payment, scheduling, analytics, bảo mật và deployment.

Mục tiêu là tạo một nền tảng:

```yaml
architecture_goals:
  - Tốc độ cao cho content/SEO.
  - UI tương tác vừa đủ cho Agent2UI và zero-typing intake.
  - Thanh toán và đặt lịch tự động cho luồng đủ điều kiện.
  - Human review cho vụ việc phức tạp.
  - Dữ liệu lead nhạy cảm được lưu tách biệt khỏi analytics.
  - Không phụ thuộc vào WordPress hoặc form builder truyền thống.
  - Dễ mở rộng sang CRM, dashboard nội bộ và automation sau này.
```

---

## 2. Quyết định kiến trúc chính

```yaml
architecture_decision_summary:
  frontend:
    framework: Astro
    interactive_layer: React Islands
    deployment: Cloudflare Workers / Cloudflare Pages
  cms:
    provider: Sanity
    role: structured_content_source
  database:
    provider: Supabase Postgres
    role: operational_source_of_truth
  backend:
    provider: Supabase Edge Functions
    role: payment_scheduling_agent_orchestration
  scheduling:
    provider: Cal.com
    role: availability_and_booking_engine
  payment:
    provider: payOS
    method: VietQR dynamic payment link
  agent2ui:
    architecture: schema_driven_ui_renderer
    llm_provider: pluggable
  analytics:
    mode: privacy_safe_manual_events
    session_replay: disabled_on_sensitive_pages
```

---

## 3. Tại sao chọn stack này?

### 3.1 Frontend: Astro + React Islands

**Chọn:** Astro làm framework chính, React chỉ dùng cho các đảo tương tác như Agent2UI, intake drawer, bottom sheet, Legal Health Score.

**Lý do:** AnLuật.com là website content-heavy, SEO-heavy, conversion-heavy, không phải app SaaS dashboard toàn màn hình. Astro phù hợp vì tối ưu cho website content-driven và dùng Islands Architecture để chỉ hydrate phần tương tác cần thiết, thay vì ship cả đống JavaScript xuống trình duyệt như đang phát quà không ai xin. ([Astro][1])

```yaml
frontend_decision:
  framework: Astro
  ui_islands: React
  use_cases:
    - Editorial landing pages
    - Service pages
    - FAQ / AI-ready content
    - Agent2UI intake
    - Legal Health Score
    - Payment / booking UI
  avoid:
    - Full SPA architecture
    - WordPress theme stack
    - Heavy client-side rendering for content pages
```

---

### 3.2 Hosting: Cloudflare Workers / Pages

**Chọn:** Cloudflare cho frontend hosting và edge delivery.

**Lý do:** Astro có hướng dẫn deploy trên Cloudflare Workers và adapter `@astrojs/cloudflare` cho on-demand routes, server islands, actions và sessions. Với site tĩnh thuần, Astro cũng có thể deploy không cần adapter. ([Cloudflare Docs][2])

```yaml
deployment_decision:
  frontend_hosting: Cloudflare
  preferred_mode:
    phase_1: Cloudflare Pages for static/mostly-static site
    phase_2: Cloudflare Workers with astrojs_cloudflare_adapter if server features needed
  rationale:
    - Global edge delivery
    - Good fit for Astro
    - Fast static assets
    - Can support server-side Astro features later
```

---

### 3.3 CMS: Sanity

**Chọn:** Sanity làm structured CMS.

**Lý do:** Website cần content có cấu trúc: dịch vụ, FAQ, luật sư, video, khách hàng tiêu biểu, mapping từ khóa đời thường → vấn đề pháp lý, preparation checklist. Sanity có tích hợp chính thức với Astro, cho phép dùng Sanity Client trong Astro và có thể embed Studio vào route Astro. ([Sanity.io][3])

```yaml
cms_decision:
  provider: Sanity
  role: content_source_of_truth
  content_types:
    - service_page
    - attorney_profile
    - faq
    - video_insight
    - client_proof
    - legal_term_mapping
    - preparation_checklist
    - landing_page_copy
  not_for:
    - payment_state
    - lead_database
    - booking_state
    - sensitive_case_content
```

---

### 3.4 Backend + Database: Supabase

**Chọn:** Supabase Postgres làm operational source of truth. Supabase Edge Functions làm backend orchestration.

**Lý do:** Supabase Edge Functions là TypeScript server-side functions phân tán ở edge, dùng tốt cho webhook và tích hợp bên thứ ba; Supabase cũng hỗ trợ npm packages/Node APIs trong Edge Functions, nhưng mỗi package tích hợp quan trọng vẫn cần POC trước khi đưa production, đặc biệt với SDK thanh toán. ([Supabase][4])

```yaml
supabase_decision:
  database: Supabase Postgres
  backend_runtime: Supabase Edge Functions
  responsibilities:
    - lead_intake_storage
    - booking_intent_state
    - payment_webhook_processing
    - Cal.com booking orchestration
    - Agent2UI session state
    - audit logs
    - privacy-safe event mirror
  not_for:
    - public content CMS
    - frontend hosting
```

---

### 3.5 Payment: payOS

**Chọn:** payOS cho VietQR dynamic payment link.

**Lý do:** payOS Node SDK hỗ trợ tạo payment link và xác minh webhook bằng `webhooks.verify()`. Đây là fit tốt cho luồng VietQR động: amount + orderCode + description đối soát. ([payOS - Cổng thanh toán đa kênh][5])

```yaml
payment_decision:
  provider: payOS
  sdk: "@payos/node"
  method: VietQR dynamic payment link
  responsibilities:
    - create_payment_link
    - generate_checkout_url_or_qr
    - receive_webhook
    - verify_webhook
    - update_payment_status
  critical_rules:
    - verify_webhook_signature
    - no_sensitive_case_content_in_payment_description
    - idempotent_webhook_processing
    - amount_must_match_booking_intent
```

---

### 3.6 Scheduling: Cal.com

**Chọn:** Cal.com làm scheduling engine.

**Lý do:** Cal.com API v2 có endpoint tạo booking, hỗ trợ event types và webhooks để nghe các trigger như booking scheduled. ([cal.com][6])

```yaml
scheduling_decision:
  provider: Cal.com
  role: availability_and_booking_engine
  booking_modes:
    - auto_book_after_payment_for_eligible_cases
    - secretary_review_for_complex_cases
  event_types:
    - one_hour_with_nhu_auto
    - one_hour_with_nhu_review
    - business_consultation_review
```

---

## 4. System Context

```yaml
system_context:
  actors:
    - website_visitor
    - potential_client
    - secretary
    - lawyer_nhu
    - an_luat_admin
    - content_editor
    - agent_service
    - payment_provider_payos
    - scheduling_provider_calcom

  external_systems:
    - Sanity
    - Supabase
    - payOS
    - Cal.com
    - Cloudflare
    - email_service_tbd
    - zalo_notification_tbd
    - analytics_provider_tbd
```

---

## 5. High-Level Architecture

```yaml
high_level_architecture:
  browser:
    receives:
      - Astro-rendered HTML
      - CSS design tokens
      - minimal JavaScript
      - React islands only where interactive
    sends:
      - zero_typing_intake_choices
      - contact_info
      - payment_actions
      - analytics_events_without_pii

  cloudflare:
    serves:
      - static_assets
      - astro_pages
      - optional_edge_rendered_routes
    does_not_store:
      - sensitive_lead_data
      - payment_secrets

  sanity:
    stores:
      - public_content
      - service_pages
      - faqs
      - attorney_profiles
      - client_proofs
      - content_blocks

  supabase:
    stores:
      - leads
      - booking_intents
      - payment_events
      - cal_booking_refs
      - agent_sessions
      - audit_logs
    runs:
      - edge_functions
      - webhook_handlers
      - orchestration_logic

  payos:
    handles:
      - payment_link_creation
      - vietqr_payment
      - payment_webhook

  calcom:
    handles:
      - event_types
      - availability
      - booking_creation
      - booking_webhooks

  agent2ui_service:
    receives:
      - structured_intake_state
    returns:
      - ui_component_schema
      - recommendation
      - checklist
      - next_action
```

---

## 6. Source of Truth

```yaml
source_of_truth:
  public_content:
    system: Sanity
    examples:
      - service page copy
      - FAQ
      - attorney bio
      - video metadata
      - client proof
      - plain-language mapping

  operational_data:
    system: Supabase Postgres
    examples:
      - lead
      - booking intent
      - payment event
      - Cal.com booking UID
      - agent session
      - audit log

  payment_status:
    primary_system: payOS
    mirrored_to: Supabase Postgres
    rule: Supabase status updates only after verified payOS webhook or verified API check.

  booking_status:
    primary_system: Cal.com after confirmed booking
    pre_confirmation_source: Supabase booking_intents
    rule: Cal.com booking is created only after payment success for auto-book flows.

  analytics:
    system: analytics_provider_tbd
    source: manual privacy-safe events
    forbidden:
      - user_text
      - phone
      - email
      - case_summary
      - uploaded_file_names
```

---

## 7. Runtime Architecture

### 7.1 Public content flow

```yaml
public_content_flow:
  - Content editor updates Sanity.
  - Astro fetches content from Sanity.
  - Site builds static or semi-static pages.
  - Cloudflare serves pages globally.
  - FAQ and schema-ready blocks are rendered as HTML.
```

### 7.2 Intake flow

```yaml
intake_flow:
  - User lands on Astro page.
  - User selects intake door via UI cards.
  - React island opens bottom sheet or side drawer.
  - User completes zero-typing guided intake.
  - Frontend sends structured intake payload to Supabase Edge Function.
  - Supabase stores lead/intake state.
  - Agent2UI returns recommendation component schema.
  - UI renders recommended next action.
```

### 7.3 Auto-book + payment flow

```yaml
auto_book_payment_flow:
  - User is eligible for auto-book.
  - User selects Cal.com slot shown through frontend.
  - Supabase creates booking_intent with payment_pending.
  - Supabase creates payOS payment link.
  - User pays via VietQR.
  - payOS sends webhook to Supabase Edge Function.
  - Supabase verifies webhook.
  - Supabase confirms amount/orderCode.
  - Supabase creates Cal.com booking.
  - Supabase updates booking_intent to booking_confirmed.
  - User sees confirmation and preparation checklist.
```

### 7.4 Secretary review flow

```yaml
secretary_review_flow:
  - User completes intake.
  - Agent2UI marks requires_human_review true.
  - Supabase stores lead status secretary_review_required.
  - Secretary receives notification.
  - Secretary calls client.
  - Secretary may create Cal.com booking manually or via internal admin.
```

---

## 8. Component Architecture

```yaml
frontend_components:
  layout:
    - GoldenSplitLayout
    - ScreenPodContainer
    - DesktopSideDrawer
    - MobileBottomSheet
    - StickyMobileCTA

  intake:
    - IntakeDoorCard
    - ZeroTypingQuestionSheet
    - ChipSelector
    - SegmentedControl
    - ContactMethodSelector

  agent2ui:
    - AgentRecommendationPanel
    - RecommendedServiceCard
    - ReasonSummary
    - NextStepCTA
    - PreparationChecklist

  payment_booking:
    - SlotSelector
    - PaymentQRCodePanel
    - PaymentStatusPanel
    - BookingConfirmationPanel

  content:
    - EditorialHero
    - AttorneyVideoCard
    - TrustProofStrip
    - FAQAccordion
    - PlainLanguageMappingCard
```

---

## 9. API / Edge Function Boundaries

```yaml
edge_functions:
  - name: submit-intake
    owner: Supabase
    input: structured_intake_payload
    output: lead_id, recommendation_request_id
    pii: true
    auth: public_with_rate_limit

  - name: agent2ui-recommend
    owner: Supabase
    input: non_sensitive_intake_state
    output: ui_component_schema
    pii: false_or_minimized
    auth: internal

  - name: create-booking-intent
    owner: Supabase
    input: lead_id, slot, event_type_id
    output: booking_intent_id
    pii: limited
    auth: public_with_token

  - name: create-payos-payment-link
    owner: Supabase
    input: booking_intent_id
    output: checkout_url, payment_link_id
    pii: limited
    auth: internal_or_signed_public

  - name: payos-webhook
    owner: Supabase
    input: payOS_webhook_payload
    output: 200_or_400
    pii: payment_metadata_only
    auth: webhook_signature_verification

  - name: create-cal-booking
    owner: Supabase
    input: booking_intent_id
    output: cal_booking_uid
    pii: limited
    auth: internal_only

  - name: expire-booking-intents
    owner: Supabase
    input: scheduled_job
    output: expired_records
    pii: no_public
    auth: service_role_only
```

---

## 10. Data Classification

```yaml
data_classification:
  public:
    examples:
      - service content
      - FAQ
      - attorney bio
      - client logos if approved
      - general legal insights
    storage: Sanity

  operational_sensitive:
    examples:
      - name
      - phone
      - email
      - legal_area
      - urgency
      - selected_slot
      - payment_status
    storage: Supabase

  highly_sensitive:
    examples:
      - case_summary
      - family violence details
      - uploaded_documents_future_not_MVP_A
      - dispute details
      - financial/tax/private documents
    storage: Supabase_with_restricted_access
    rules:
      - no_analytics
      - no_session_replay
      - no_payment_description
      - strict_access_control

  analytics_safe:
    examples:
      - event_name
      - legal_area_taxonomy
      - urgency_taxonomy
      - device_type
      - source_page
    storage: analytics_provider_tbd
```

---

## 11. Privacy & Analytics Rules

```yaml
privacy_analytics_rules:
  session_replay:
    default: disabled
    mvp_rule: disabled_site_wide
    especially_disabled_on:
      - intake
      - payment
      - booking
      - family_pages
      - legal_health_score
      - contact_forms

  event_tracking:
    mode: manual_only
    allowed_payload:
      - taxonomy
      - enum
      - boolean
      - numeric_score_band
      - device_type
      - page_path

  forbidden_payload:
    - full_name
    - phone
    - email
    - zalo
    - free_text_summary
    - uploaded_file_name
    - payment_order_description_with_sensitive_content
```

---

## 12. Security Architecture

```yaml
security_architecture:
  secrets:
    stored_in:
      - Supabase secrets
      - Cloudflare environment variables
    never_exposed_to:
      - browser
      - Sanity public dataset
      - analytics

  webhook_security:
    payos:
      - verify_signature_with_payos_sdk
      - verify_order_code
      - verify_amount
      - idempotent_processing
    calcom:
      - verify_known_webhook_source_if_available
      - store_event
      - no_duplicate_booking_state_transition

  frontend_security:
    - no_service_role_key_in_client
    - no_payment_api_key_in_client
    - no_agent_provider_key_in_client
    - sanitize_agent_generated_ui_schema
    - strict_component_allowlist_for_agent2ui

  access_control:
    public:
      - content pages
      - intake submission
    internal:
      - lead dashboard
      - payment event viewer
      - booking resolution queue
    restricted:
      - highly_sensitive_case_summary
      - uploaded_documents_future_not_MVP_A
```

---

## 13. Quick Exit Architecture

Quick Exit không thuộc React. Đây là rule cứng, không phải gợi ý trang trí.

```yaml
quick_exit_architecture:
  implementation: vanilla_javascript_inline
  placement: Astro_root_layout
  load_order: before_react_islands
  event_listener: pointerdown_capture_phase
  behavior:
    - direct_dom_replacement
    - document_title_change
    - history_replace
    - neutral_redirect_optional
  forbidden:
    - React state
    - React lifecycle
    - delayed hydration
    - network_dependency
```

---

## 14. Agent2UI Architecture

```yaml
agent2ui_architecture:
  pattern: schema_driven_renderer
  agent_role:
    - classify_intake_state
    - recommend_next_step
    - generate_preparation_checklist
    - determine_human_review_requirement
  agent_forbidden:
    - final_legal_advice_without_human_review
    - freeform_html_generation
    - unbounded_component_generation
    - analytics_payload_with_pii

  renderer:
    location: frontend_react_island
    allowed_components:
      - AgentRecommendationPanel
      - RecommendedServiceCard
      - PreparationChecklist
      - LegalHealthScorePrompt
      - SafetyNotice
      - NextStepCTA

  contract:
    input: structured_state_json
    output: component_schema_json
```

Example:

```json
{
  "component": "AgentRecommendationPanel",
  "recommended_service_id": "one_hour_with_nhu",
  "title": "Bạn có thể phù hợp với 1 GIỜ GẶP NHƯ",
  "reason": "Vụ việc cần định hướng riêng trước khi chuẩn bị hồ sơ.",
  "confidence": "medium",
  "requires_human_review": false,
  "next_action": {
    "label": "Chọn khung giờ phù hợp",
    "action": "show_slot_selector"
  }
}
```

---

## 15. Deployment Environments

```yaml
environments:
  local:
    purpose: development
    services:
      - Astro dev server
      - Supabase local
      - Sanity dev dataset
      - payOS sandbox_or_test_channel_if_available
      - Cal.com test event types

  staging:
    purpose: QA and stakeholder review
    domain: staging.anluat.com
    services:
      - Cloudflare staging deployment
      - Supabase staging project
      - Sanity staging dataset
      - payOS test/sandbox or low-value test
      - Cal.com staging/test event types

  production:
    purpose: public website
    domain: anluat.com
    services:
      - Cloudflare production
      - Supabase production
      - Sanity production dataset
      - payOS production channel
      - Cal.com production event types
```

---

## 16. CI/CD

```yaml
ci_cd:
  repository: git_provider_tbd
  branches:
    main: production
    staging: staging
    feature: preview
  checks:
    - typecheck
    - lint
    - build
    - unit_tests_for_agent2ui_schema
    - edge_function_tests
    - no_secret_scan
  deployment:
    frontend: Cloudflare
    backend_functions: Supabase CLI
    cms_schema: Sanity CLI
```

---

## 17. Observability

```yaml
observability:
  frontend:
    - core_web_vitals
    - client_error_tracking_tbd
    - conversion_events_without_pii

  backend:
    - edge_function_logs
    - webhook_success_rate
    - webhook_failure_rate
    - payment_to_booking_latency
    - Cal.com booking_create_failures
    - expired_booking_intents

  business:
    - intake_completion_rate
    - auto_book_conversion_rate
    - payment_success_rate
    - secretary_review_queue_size
    - consultation_booking_rate
```

---

## 18. ADR: Accepted Decisions

```yaml
accepted_decisions:
  - id: ADR-001
    title: Use Astro as primary frontend framework
    status: accepted
    rationale: Content-heavy, SEO-heavy, fast loading, supports islands for interactive UI.

  - id: ADR-002
    title: Use React only for interactive islands
    status: accepted
    rationale: Agent2UI and zero-typing intake need stateful UI, but content pages should not become full SPA.

  - id: ADR-003
    title: Use Sanity as CMS
    status: accepted
    rationale: Structured content, Astro integration, AI-ready content model.

  - id: ADR-004
    title: Use Supabase as operational backend/database
    status: accepted
    rationale: Postgres source of truth, Edge Functions for webhooks and orchestration.

  - id: ADR-005
    title: Use payOS for VietQR dynamic payment
    status: accepted
    rationale: Vietnamese payment behavior, dynamic QR, webhook verification.

  - id: ADR-006
    title: Use Cal.com for scheduling
    status: accepted
    rationale: Event types, availability, booking API, webhook support.

  - id: ADR-007
    title: Use privacy-safe manual analytics only
    status: accepted
    rationale: Legal data is sensitive; no session replay or PII payload.

  - id: ADR-008
    title: Implement Quick Exit outside React
    status: accepted
    rationale: Must work immediately, independent of hydration/state/lifecycle.
```

---

## 19. Rejected Alternatives

```yaml
rejected_alternatives:
  - option: WordPress
    rejected_reason:
      - Heavier attack surface
      - Harder Agent2UI integration
      - Less suitable for zero-typing custom intake
      - Often encourages brochureware structure

  - option: Full Next.js app
    rejected_reason:
      - More JS/runtime than needed for content-heavy site
      - Can work, but heavier default mental model
      - Astro better fits editorial + islands architecture

  - option: Tally as main intake
    rejected_reason:
      - Good for prototype or secondary forms
      - Not enough for Agent2UI, slot locking, dynamic recommendation and payment orchestration

  - option: Cal.com native payment only
    rejected_reason:
      - Does not solve VietQR/payOS orchestration as cleanly
      - Payment needs local behavior and auto-reconciliation

  - option: Chatbot-first UX
    rejected_reason:
      - Too much text
      - Harder to control legal risk
      - Worse than schema-driven UI for this use case

  - option: Session replay analytics
    rejected_reason:
      - High privacy risk
      - Sensitive legal intake content
      - Not necessary for conversion optimization
```

---

## 20. Key Risks

```yaml
risks:
  - id: payos_edge_compatibility
    risk: "@payos/node may have compatibility issues inside Supabase Edge Functions depending on Node/Deno APIs used."
    mitigation:
      - Run POC before final implementation.
      - Fallback to direct payOS HTTP API if needed.

  - id: slot_payment_race_condition
    risk: User pays after slot expires or slot becomes unavailable.
    mitigation:
      - Internal slot lock.
      - Short payment window.
      - Recheck availability before Cal.com booking.
      - Manual resolution queue.

  - id: agent_overreach
    risk: Agent gives legal advice instead of UI recommendation.
    mitigation:
      - Component allowlist.
      - No final legal advice.
      - Human review flag.

  - id: privacy_leak_to_analytics
    risk: PII or case summary accidentally sent to analytics.
    mitigation:
      - Event whitelist.
      - Payload blacklist.
      - Tests for analytics payload.
      - Disable session replay.

  - id: content_model_overcomplexity
    risk: CMS schema becomes too complex for editors.
    mitigation:
      - Start with core content types.
      - Add advanced fields only after editorial workflow is stable.
```

---

## 21. MVP Scope

```yaml
mvp_scope:
  strategy: MVP-A_core_by_default_MVP-B_payment_gated
  timeline_commitment_rule: only_after_Sprint_0_POC

  frontend:
    - Astro setup
    - GoldenSplitLayout
    - Homepage command center
    - 1 GIỜ GẶP NHƯ landing page
    - ZeroTypingQuestionSheet
    - MobileBottomSheet
    - DesktopSideDrawer

  cms:
    - service_page schema
    - faq schema
    - attorney_profile schema
    - client_proof schema

  backend:
    - submit-intake
    - deterministic-agent2ui-router
    - secretary-review-queue

  database:
    - leads
    - audit_logs
    - agent_sessions

  integrations:
    - Sanity content fetch

  safety:
    - privacy-safe analytics
    - Quick Exit vanilla JS
    - session replay disabled site-wide

  mvp_b_gated_payment_module:
    include_only_if_sprint_0_poc_passes: true
    backend:
      - create-booking-intent
      - create-payos-payment-link
      - payos-webhook
      - create-cal-booking
    database:
      - booking_intents
      - payment_events
      - cal_bookings
    integrations:
      - payOS payment link
      - Cal.com booking creation
    acceptance:
      - create_payment_link
      - verify_webhook
      - reject_invalid_signature
      - idempotent_duplicate_webhook
      - amount_mismatch_no_booking
      - fetch_calcom_availability
      - create_booking_after_payment_success
      - no_duplicate_booking
```

---

## 22. MVP Acceptance Criteria

```yaml
mvp_acceptance_criteria:
  - id: astro_pages_fast
    requirement: Core pages render as static or near-static Astro pages with minimal JavaScript.

  - id: agent2ui_renderer_working
    requirement: User intake choices can render at least one AgentRecommendationPanel.

  - id: zero_typing_intake_working
    requirement: User can complete core intake choices without typing, except contact info.

  - id: payos_payment_link_created_if_mvp_b
    requirement: If MVP-B is enabled, backend can create payOS payment link from booking_intent.

  - id: payos_webhook_verified_if_mvp_b
    requirement: If MVP-B is enabled, payOS webhook is verified before payment status updates.

  - id: cal_booking_after_payment_if_mvp_b
    requirement: If MVP-B is enabled, Cal.com booking is created only after payment_success.

  - id: sensitive_data_not_in_analytics
    requirement: Analytics events contain no free text, phone, email, name, file name or case summary.

  - id: quick_exit_not_react
    requirement: Quick Exit is inline vanilla JS in Astro root layout and works before React hydration.

  - id: cms_content_rendered
    requirement: Service pages and FAQ can render from Sanity content.

  - id: mobile_no_scroll_first_action
    requirement: Mobile homepage first action is available within first viewport.
```

---

## 23. Machine-readable architecture summary

```json
{
  "document_id": "anluat_tech_stack_system_architecture_adr",
  "version": "1.0",
  "status": "draft_for_review",
  "mvp_strategy": "MVP-A core by default; MVP-B payment/auto-book only after Sprint 0 POC pass",
  "timeline_commitment_rule": "commit timeline only after Sprint 0 POC report",
  "architecture": {
    "frontend": {
      "framework": "Astro",
      "interactive_layer": "React Islands",
      "hosting": "Cloudflare",
      "pattern": "content_first_with_selective_hydration"
    },
    "cms": {
      "provider": "Sanity",
      "role": "public_structured_content_source"
    },
    "database": {
      "provider": "Supabase Postgres",
      "role": "operational_source_of_truth"
    },
    "backend": {
      "provider": "Supabase Edge Functions",
      "role": "orchestration_for_intake_agent_and_optional_payment_booking"
    },
    "payment": {
      "provider": "payOS",
      "method": "VietQR dynamic payment link",
      "webhook_verification": true,
      "mvp_inclusion": "MVP-B gated"
    },
    "scheduling": {
      "provider": "Cal.com",
      "mode": "secretary_review_by_default_auto_book_if_MVP_B_enabled"
    },
    "agent2ui": {
      "pattern": "schema_driven_ui_renderer",
      "llm_provider": "none_for_MVP_rule_router_first",
      "component_allowlist_required": true
    },
    "analytics": {
      "mode": "manual_privacy_safe_events",
      "session_replay": "disabled_site_wide_for_MVP",
      "pii_allowed": false
    }
  },
  "source_of_truth": {
    "public_content": "Sanity",
    "operational_data": "Supabase Postgres",
    "payment_status": "payOS mirrored to Supabase if MVP-B enabled",
    "booking_status": "Cal.com after confirmation if MVP-B enabled; Supabase secretary queue by default"
  },
  "critical_rules": [
    "Do not store sensitive case data in Sanity",
    "Do not send PII or free text to analytics",
    "Disable session replay site-wide for MVP",
    "Do not create confirmed Cal.com booking before payment success if MVP-B enabled",
    "Verify payOS webhook before updating payment status if MVP-B enabled",
    "Implement Quick Exit in vanilla JavaScript outside React",
    "Render Agent2UI only through component allowlist"
  ],
  "mvp_components": [
    "Astro homepage",
    "1 GIỜ GẶP NHƯ landing page",
    "ZeroTypingQuestionSheet",
    "AgentRecommendationPanel",
    "SecretaryReviewPanel",
    "PreparationChecklist",
    "Quick Exit vanilla JS",
    "Sanity content schemas",
    "Supabase lead tables"
  ],
  "mvp_b_gated_components": [
    "payOS payment link",
    "payOS webhook",
    "Cal.com booking creation",
    "payment_resolution_queue"
  ]
}
```

---

## 24. Final Decision

Kiến trúc được đề xuất là:

> **Astro + React Islands cho frontend, Sanity cho public content, Supabase cho operational backend/database, payOS cho VietQR payment orchestration, Cal.com cho scheduling, Cloudflare cho delivery, và Agent2UI theo schema-driven renderer.**

Đây là stack cân bằng nhất cho AnLuật.com vì nó không biến website thành app nặng nề, nhưng vẫn đủ sức xử lý intake thông minh, thanh toán, đặt lịch, dữ liệu nhạy cảm và nội dung AI-ready.

Tài liệu tiếp theo nên là **Data Model & Privacy-Safe Lead Spec**. Đây là phần sẽ định nghĩa bảng dữ liệu, trường nào được lưu, trường nào bị cấm vào analytics, retention, quyền truy cập và audit log. Nói cách khác: chỗ ta ngăn hệ thống trở thành cái thùng rác chứa bí mật pháp lý của thiên hạ.

[1]: https://astro.build/?utm_source=chatgpt.com "Astro"
[2]: https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/?utm_source=chatgpt.com "Astro · Cloudflare Workers docs"
[3]: https://www.sanity.io/plugins/sanity-astro?utm_source=chatgpt.com "The official Sanity integration for Astro | Sanity.io plugin"
[4]: https://supabase.com/docs/guides/functions?utm_source=chatgpt.com "Edge Functions | Supabase Docs"
[5]: https://payos.vn/docs/sdks/back-end/node/?utm_source=chatgpt.com "NodeJS SDK"
[6]: https://cal.com/docs/api-reference/v2/bookings/create-a-booking?utm_source=chatgpt.com "Create a booking - Cal.com Docs"

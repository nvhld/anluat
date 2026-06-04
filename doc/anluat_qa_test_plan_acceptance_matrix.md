# QA, Test Plan & Acceptance Matrix

## AnLuật.com — Quality Assurance, Test Strategy & Release Gate

```yaml id="doc-meta"
document_id: anluat_qa_test_plan_acceptance_matrix
version: 1.0
status: draft_for_review
language: vi-VN
project: Website mới An Luật
primary_domain: anluat.com
spec_type: QA / Test Plan / Acceptance Matrix / Release Gate
machine_readable: true
last_updated: 2026-06-02
depends_on:
  - anluat_web_new_product_ux_spec
  - anluat_ui_direction_agent2ui_spec
  - anluat_tech_stack_system_architecture_adr
  - anluat_payment_scheduling_orchestration_spec
  - anluat_data_model_privacy_safe_lead_spec
  - anluat_agent2ui_technical_contract
  - anluat_design_system_tokens_component_spec
  - anluat_cms_content_model_ai_ready_seo_schema_spec
  - anluat_internal_operations_secretary_workflow_spec
```

---

## 1. Mục tiêu tài liệu

Tài liệu này định nghĩa chiến lược kiểm thử, acceptance criteria và release gate cho AnLuật.com.

Mục tiêu:

```yaml id="goals"
goals:
  - Đảm bảo UX/UI hoạt động đúng trên desktop và mobile.
  - Đảm bảo Agent2UI chỉ render component hợp lệ.
  - Đảm bảo payment/booking không tạo lịch sai hoặc duplicate.
  - Đảm bảo dữ liệu nhạy cảm không rò rỉ sang analytics, CMS, logs hoặc UI.
  - Đảm bảo Quick Exit hoạt động độc lập React và đủ nhanh.
  - Đảm bảo CMS content render đúng, SEO/AI-readable đúng.
  - Đảm bảo vận hành nội bộ có queue, SLA, audit và state transition hợp lệ.
  - Tạo release gate rõ ràng trước khi launch MVP.
```

Nói ngắn: đây là tài liệu ngăn dự án biến thành “chạy được trên máy em”, câu thần chú mở cổng địa ngục của mọi hệ thống phần mềm.

---

# 2. QA Philosophy

```yaml id="qa-philosophy"
qa_philosophy:
  - id: risk_based_testing
    name: Test theo rủi ro
    rule: Ưu tiên các luồng có dữ liệu nhạy cảm, payment, booking, quick exit, agent output.

  - id: privacy_by_test
    name: Privacy phải được test, không chỉ hứa
    rule: Mọi analytics/log/session phải được kiểm tra không chứa PII/free text.

  - id: deterministic_release_gate
    name: Release gate phải định lượng
    rule: Không launch dựa trên cảm giác “ổn rồi đó”.

  - id: human_machine_acceptance
    name: Người và máy đều kiểm được
    rule: Mỗi acceptance criterion có ID, requirement, method và pass/fail rõ.

  - id: mobile_equal_first_class
    name: Mobile là first-class
    rule: Mobile không phải kiểm thử sau cùng trong lúc mọi người đã mệt và giả vờ vẫn tỉnh.

  - id: fail_safe
    name: Lỗi phải rơi về trạng thái an toàn
    rule: Agent lỗi → secretary review; payment lỗi → manual resolution; schema lỗi → fallback safe UI.
```

---

# 3. Scope

```yaml id="scope"
qa_scope:
  in_scope:
    - frontend_responsive_ui
    - design_system_tokens
    - zero_typing_intake
    - agent2ui_schema_validation
    - payment_payos_flow
    - calcom_booking_flow
    - slot_locking_and_expiry
    - privacy_safe_analytics
    - no_session_replay_zones
    - quick_exit
    - cms_content_rendering
    - structured_data_json_ld
    - internal_operations_workflow
    - accessibility
    - performance
    - security_baseline
    - deployment_smoke_tests

  out_of_scope_for_mvp:
    - full_case_management_system
    - advanced CRM automation
    - AI legal advice generation
    - multi-language full rollout
    - native mobile app
    - full accounting/refund automation
```

---

# 4. Test Environments

```yaml id="test-environments"
test_environments:
  local:
    purpose: Developer testing
    services:
      - Astro dev server
      - Supabase local or staging
      - Sanity dev dataset
      - mocked payOS
      - mocked Cal.com

  staging:
    purpose: QA, stakeholder review, integration testing
    domain: staging.anluat.com
    services:
      - Cloudflare staging
      - Supabase staging
      - Sanity staging dataset
      - payOS test/sandbox or controlled low-value transaction
      - Cal.com staging/test event types
    data_policy:
      - no real sensitive client data
      - use synthetic data only

  production:
    purpose: Live public website
    domain: anluat.com
    services:
      - Cloudflare production
      - Supabase production
      - Sanity production
      - payOS production
      - Cal.com production
    testing_allowed:
      - smoke tests
      - monitoring
      - synthetic non-sensitive transaction only if approved
```

---

# 5. Test Data Policy

```yaml id="test-data-policy"
test_data_policy:
  allowed:
    - synthetic names
    - synthetic phone numbers
    - synthetic case summaries
    - test payment order codes
    - dummy uploaded documents
    - fake company names

  forbidden:
    - real family violence details
    - real divorce/tài sản/con cái data
    - real client documents
    - real phone/email without consent
    - real payment info outside approved test

  synthetic_sensitive_examples:
    family_case_summary: "Tình huống giả lập về quyền nuôi con, không phải dữ liệu thật."
    business_dispute_summary: "Tình huống giả lập về tranh chấp hợp đồng."
```

---

# 6. Test Types

```yaml id="test-types"
test_types:
  static_analysis:
    tools:
      - TypeScript typecheck
      - ESLint
      - secret scanning
      - schema validation

  unit_tests:
    scope:
      - pure functions
      - routing rules
      - score calculation
      - schema validators
      - state transitions

  component_tests:
    scope:
      - React islands
      - bottom sheet
      - side drawer
      - intake components
      - Agent2UI renderer

  integration_tests:
    scope:
      - Supabase Edge Functions
      - payOS webhook verification
      - Cal.com booking creation
      - Sanity content queries

  e2e_tests:
    scope:
      - homepage to intake
      - auto-book payment flow
      - secretary review flow
      - mobile decision stack

  privacy_tests:
    scope:
      - analytics payload
      - logs
      - no session replay
      - no PII in agent request

  security_tests:
    scope:
      - prompt injection
      - webhook spoofing
      - forbidden component injection
      - auth/access control

  accessibility_tests:
    scope:
      - keyboard
      - screen reader labels
      - contrast
      - focus trap
      - reduced motion

  performance_tests:
    scope:
      - Core Web Vitals
      - JavaScript budget
      - mobile first action
      - Agent2UI response time
```

---

# 7. Severity & Priority

```yaml id="severity-priority"
severity_levels:
  S0_blocker:
    definition: Không được launch.
    examples:
      - PII leak to analytics
      - payment marked success without verified webhook
      - confirmed booking without payment
      - Quick Exit not working
      - Agent renders arbitrary HTML/script

  S1_critical:
    definition: Launch only if fixed or formally waived by owner.
    examples:
      - mobile intake broken
      - Cal.com booking duplicate
      - inaccessible payment state
      - CMS published page missing critical content
      - dashboard cannot view urgent queue

  S2_major:
    definition: Should fix before launch; may defer with mitigation.
    examples:
      - visual mismatch
      - non-critical FAQ schema issue
      - minor performance regression
      - analytics event missing optional property

  S3_minor:
    definition: Can launch with backlog.
    examples:
      - copy polish
      - hover animation issue
      - non-critical spacing mismatch
```

---

# 8. Release Gate Summary

```yaml id="release-gate-summary"
release_gates:
  gate_1_design_system:
    must_pass:
      - token_alignment
      - responsive_layout
      - component_accessibility_baseline

  gate_2_core_flow:
    must_pass:
      - zero_typing_intake
      - agent2ui_recommendation
      - secretary_review_fallback

  gate_3_payment_booking:
    must_pass:
      - payOS_payment_link
      - verified_webhook_only
      - Cal.com_booking_after_payment
      - duplicate_booking_prevention

  gate_4_privacy_security:
    must_pass:
      - no_pii_analytics
      - no_session_replay_sensitive
      - quick_exit_vanilla
      - webhook_signature_verification

  gate_5_content_seo:
    must_pass:
      - Sanity_published_content_validation
      - JSON_LD_valid
      - redirect_map
      - FAQ_visible_matches_schema

  gate_6_operations:
    must_pass:
      - lead_queues
      - callback_attempt_logging
      - SLA_visibility
      - audit_sensitive_access
```

---

# 9. Acceptance Matrix

## 9.1 UX/UI & Responsive

```yaml id="acceptance-ui"
acceptance_matrix_ui:
  - id: UI-001
    requirement: Desktop homepage uses 61.8/38.2 golden split.
    method: visual_review + automated_layout_snapshot
    severity: S2_major
    pass_criteria: Primary/secondary panels approximate golden split at >=1200px.

  - id: UI-002
    requirement: Mobile homepage first action visible without scroll.
    method: e2e_mobile_viewport_390x844
    severity: S1_critical
    pass_criteria: User can start intake from first viewport.

  - id: UI-003
    requirement: Mobile intake uses bottom sheet with one question per screen.
    method: component_test + e2e
    severity: S1_critical
    pass_criteria: No multi-question clutter on mobile.

  - id: UI-004
    requirement: Desktop intake uses side drawer or split panel, not long scroll form.
    method: e2e_desktop
    severity: S2_major
    pass_criteria: Intake opens without scrolling to footer.

  - id: UI-005
    requirement: Core intake requires no typing before contact step.
    method: e2e
    severity: S1_critical
    pass_criteria: Steps 1-4 completed by tap/click only.

  - id: UI-006
    requirement: Touch targets on mobile are at least 55px.
    method: automated_accessibility + visual_inspection
    severity: S2_major
    pass_criteria: Buttons/chips/cards meet min touch size.
```

---

## 9.2 Design System

```yaml id="acceptance-design-system"
acceptance_matrix_design_system:
  - id: DS-001
    requirement: Tokens exist in Figma and code with matching names.
    method: design_dev_review
    severity: S2_major
    pass_criteria: color/typography/spacing/layout/radius/motion tokens aligned.

  - id: DS-002
    requirement: Fibonacci spacing scale used consistently.
    method: visual_review + code_review
    severity: S3_minor
    pass_criteria: No arbitrary spacing in core components without documented exception.

  - id: DS-003
    requirement: Component names align between Figma and code.
    method: component_inventory_review
    severity: S2_major
    pass_criteria: Core components share naming convention.

  - id: DS-004
    requirement: Agent-renderable components have props contracts.
    method: schema_review
    severity: S1_critical
    pass_criteria: All Agent2UI allowlist components have defined prop schema.
```

---

## 9.3 Agent2UI

```yaml id="acceptance-agent2ui"
acceptance_matrix_agent2ui:
  - id: A2UI-001
    requirement: Every Agent2UI response validates against JSON Schema.
    method: unit_test + integration_test
    severity: S0_blocker
    pass_criteria: Invalid schema rejected before frontend rendering.

  - id: A2UI-002
    requirement: Renderer rejects unknown component types.
    method: unit_test
    severity: S0_blocker
    pass_criteria: RawHTML/ScriptBlock/unknown component falls back safely.

  - id: A2UI-003
    requirement: Renderer rejects unknown or forbidden actions.
    method: unit_test
    severity: S0_blocker
    pass_criteria: confirm_booking/direct_payment action cannot be agent-triggered.

  - id: A2UI-004
    requirement: Agent request contains no PII by default.
    method: integration_test + payload_inspection
    severity: S0_blocker
    pass_criteria: phone/email/name/zalo absent from agent request.

  - id: A2UI-005
    requirement: Sensitive family/domestic violence flag renders SafetyNotice or human review.
    method: routing_unit_test
    severity: S1_critical
    pass_criteria: domestic_violence_or_control never auto-books directly.

  - id: A2UI-006
    requirement: Agent output does not contain legal outcome prediction.
    method: policy_test + text_scan
    severity: S1_critical
    pass_criteria: Forbidden phrases rejected.
```

---

## 9.4 Privacy & Analytics

```yaml id="acceptance-privacy"
acceptance_matrix_privacy:
  - id: PRIV-001
    requirement: No PII in analytics events.
    method: automated_event_payload_test
    severity: S0_blocker
    pass_criteria: No name/phone/email/zalo/free text/file name in analytics payload.

  - id: PRIV-002
    requirement: Session replay disabled on sensitive flows.
    method: configuration_review + runtime_check
    severity: S0_blocker
    pass_criteria: Intake/payment/booking/family/contact pages excluded.

  - id: PRIV-003
    requirement: Case summary not logged in Edge Function logs.
    method: log_inspection_test
    severity: S0_blocker
    pass_criteria: Logs contain trace_id/status only, not request body.

  - id: PRIV-004
    requirement: payOS description contains no case details.
    method: integration_test
    severity: S0_blocker
    pass_criteria: Description format is generic, e.g. ANLUAT {order_code}.

  - id: PRIV-005
    requirement: Sensitive detail access creates audit log.
    method: integration_test
    severity: S1_critical
    pass_criteria: contact/sensitive/document view creates audit entry.

  - id: PRIV-006
    requirement: Uploaded documents are private.
    method: storage_access_test
    severity: S0_blocker
    pass_criteria: Public URL cannot access document; signed URL expires.
```

---

## 9.5 Payment & Booking

```yaml id="acceptance-payment-booking"
acceptance_matrix_payment_booking:
  - id: PAY-001
    requirement: payOS payment link can be created from booking_intent.
    method: integration_test
    severity: S1_critical
    pass_criteria: checkout_url/payment_link_id stored in Supabase.

  - id: PAY-002
    requirement: payOS webhook signature verified before status update.
    method: webhook_test
    severity: S0_blocker
    pass_criteria: Invalid signature rejected, no payment_status update.

  - id: PAY-003
    requirement: Amount mismatch does not confirm booking.
    method: webhook_test
    severity: S0_blocker
    pass_criteria: amount_mismatch creates payment_resolution task.

  - id: PAY-004
    requirement: Cal.com booking created only after verified payment success.
    method: integration_test
    severity: S0_blocker
    pass_criteria: payment_pending cannot transition to booking_confirmed.

  - id: PAY-005
    requirement: Duplicate webhook does not create duplicate booking.
    method: idempotency_test
    severity: S0_blocker
    pass_criteria: Same order_code processed once.

  - id: PAY-006
    requirement: Expired payment releases slot lock.
    method: scheduled_job_test
    severity: S1_critical
    pass_criteria: payment_pending past expiry becomes payment_expired and slot released.

  - id: PAY-007
    requirement: Late payment after slot expiry creates manual resolution.
    method: integration_test
    severity: S1_critical
    pass_criteria: refund_or_reschedule_required task created.

  - id: PAY-008
    requirement: Cal.com booking failure after payment creates urgent resolution queue item.
    method: simulated_api_failure_test
    severity: S1_critical
    pass_criteria: Client not shown false confirmed state.
```

---

## 9.6 Quick Exit

```yaml id="acceptance-quick-exit"
acceptance_matrix_quick_exit:
  - id: QE-001
    requirement: Quick Exit implemented in vanilla JS, not React lifecycle.
    method: code_review
    severity: S0_blocker
    pass_criteria: Inline/root layout script handles pointerdown capture.

  - id: QE-002
    requirement: Quick Exit works before React hydration.
    method: e2e_network_throttled_test
    severity: S0_blocker
    pass_criteria: Button works with JS bundle blocked/delayed.

  - id: QE-003
    requirement: Quick Exit replaces DOM and history state quickly.
    method: performance_test
    severity: S1_critical
    pass_criteria: DOM replacement begins within 100ms target.

  - id: QE-004
    requirement: Quick Exit copy does not promise absolute privacy.
    method: content_review
    severity: S2_major
    pass_criteria: Copy says hides screen, not erase all traces.
```

---

## 9.7 CMS & SEO

```yaml id="acceptance-cms-seo"
acceptance_matrix_cms_seo:
  - id: CMS-001
    requirement: Sanity stores only public content.
    method: schema_review
    severity: S0_blocker
    pass_criteria: No lead/case/payment/booking fields in Sanity schemas.

  - id: CMS-002
    requirement: Published service page requires plainLanguageSummary.
    method: build_validation
    severity: S1_critical
    pass_criteria: Build fails or publish blocked if missing.

  - id: CMS-003
    requirement: FAQ JSON-LD only emitted for visible, human-reviewed FAQ.
    method: build_test + page_inspection
    severity: S1_critical
    pass_criteria: eligibleForFaqSchema=true and humanReviewed=true required.

  - id: CMS-004
    requirement: Structured data matches visible content.
    method: manual_review + automated_snapshot
    severity: S1_critical
    pass_criteria: JSON-LD question/answer/service text visible on page.

  - id: CMS-005
    requirement: Client proof not rendered without publicationPermission.
    method: unit_test + content_review
    severity: S1_critical
    pass_criteria: permission=false excludes proof.

  - id: CMS-006
    requirement: Old URLs redirect to new routes.
    method: redirect_test
    severity: S2_major
    pass_criteria: Key old URLs return 301/302 to mapped path.
```

---

## 9.8 Operations

```yaml id="acceptance-operations"
acceptance_matrix_operations:
  - id: OPS-001
    requirement: Lead queue supports urgent, secretary review, lawyer review, payment resolution.
    method: dashboard_test
    severity: S1_critical
    pass_criteria: Each queue visible and filterable.

  - id: OPS-002
    requirement: Callback attempts are logged.
    method: integration_test
    severity: S1_critical
    pass_criteria: attempt_number/channel/outcome/actor/timestamp recorded.

  - id: OPS-003
    requirement: SLA badge visible per lead.
    method: dashboard_test
    severity: S2_major
    pass_criteria: Lead card shows SLA priority and remaining time.

  - id: OPS-004
    requirement: Conflict_found cannot transition to booking_confirmed.
    method: state_machine_test
    severity: S0_blocker
    pass_criteria: Invalid transition rejected.

  - id: OPS-005
    requirement: Payment exception enters resolution queue.
    method: integration_test
    severity: S1_critical
    pass_criteria: payment exception creates task with owner.

  - id: OPS-006
    requirement: Sensitive discussion scripts available.
    method: content_review
    severity: S2_major
    pass_criteria: Secretary script avoids legal advice and unsafe disclosure.
```

---

## 9.9 Accessibility

```yaml id="acceptance-accessibility"
acceptance_matrix_accessibility:
  - id: A11Y-001
    requirement: All interactive elements keyboard accessible.
    method: automated_a11y + manual_keyboard_test
    severity: S1_critical
    pass_criteria: No keyboard trap except intended modal focus trap.

  - id: A11Y-002
    requirement: Drawer/bottom sheet has role/dialog and focus trap.
    method: component_test
    severity: S1_critical
    pass_criteria: Focus stays inside while open and returns after close.

  - id: A11Y-003
    requirement: Color contrast meets WCAG AA baseline.
    method: automated_a11y
    severity: S2_major
    pass_criteria: No critical contrast failure.

  - id: A11Y-004
    requirement: Reduced motion respected.
    method: browser_setting_test
    severity: S2_major
    pass_criteria: Animations minimized when prefers-reduced-motion.

  - id: A11Y-005
    requirement: Error messages are readable and associated with fields.
    method: form_test
    severity: S2_major
    pass_criteria: Screen reader can identify field error.
```

---

## 9.10 Performance

```yaml id="acceptance-performance"
acceptance_matrix_performance:
  - id: PERF-001
    requirement: Homepage initial JS within target budget.
    method: bundle_analysis
    severity: S2_major
    pass_criteria: Initial JS <= target budget or documented exception.

  - id: PERF-002
    requirement: Agent2UI components lazy-load after intent.
    method: bundle_analysis + e2e
    severity: S2_major
    pass_criteria: Agent UI JS not loaded before needed.

  - id: PERF-003
    requirement: Payment components load only after slot selection.
    method: bundle_analysis
    severity: S3_minor
    pass_criteria: Payment QR component not in initial bundle.

  - id: PERF-004
    requirement: Core Web Vitals pass target on staging.
    method: Lighthouse/WebPageTest/manual lab
    severity: S2_major
    pass_criteria:
      LCP_mobile: "<= 3.0s target"
      CLS: "<= 0.1"
      INP: "<= 200ms target"

  - id: PERF-005
    requirement: Quick Exit independent of bundle load.
    method: throttled_network_test
    severity: S0_blocker
    pass_criteria: Works even if React islands fail.
```

---

# 10. E2E Test Scenarios

## 10.1 Scenario: Mobile user submits 1 GIỜ GẶP NHƯ lead

```yaml id="e2e-mobile-one-hour"
e2e_scenario:
  id: E2E-001
  name: Mobile one-hour intake
  device: mobile_390x844
  steps:
    - open homepage
    - tap "Bắt đầu bằng 3 câu hỏi"
    - select family_assets_inheritance
    - select has_documents
    - select this_week
    - select lawyer_nhu
    - enter phone
    - submit
  expected:
    - no typing before contact step
    - AgentRecommendationPanel rendered
    - no PII in analytics
    - lead saved in Supabase
```

---

## 10.2 Scenario: Auto-book + payOS + Cal.com happy path

```yaml id="e2e-autobook-payment"
e2e_scenario:
  id: E2E-002
  name: Auto-book payment success
  steps:
    - complete eligible intake
    - choose available slot
    - create booking_intent
    - create payOS payment link
    - simulate verified payOS webhook paid
    - create Cal.com booking
    - show booking confirmation
  expected:
    - booking_status == booking_confirmed
    - payment_status == paid
    - cal_booking_uid exists
    - no duplicate booking
    - preparation checklist visible
```

---

## 10.3 Scenario: payOS webhook spoofing

```yaml id="e2e-webhook-spoof"
e2e_scenario:
  id: E2E-003
  name: Invalid payOS webhook rejected
  steps:
    - create booking_intent
    - send fake webhook with invalid signature
  expected:
    - payment_status unchanged
    - payment_event stored as verified=false or rejected
    - no Cal.com booking created
    - security event logged
```

---

## 10.4 Scenario: Domestic violence safety flow

```yaml id="e2e-safety"
e2e_scenario:
  id: E2E-004
  name: Sensitive family safety flow
  steps:
    - select family_assets_inheritance
    - select domestic_violence_or_control
    - select within_24h
  expected:
    - SafetyNotice rendered
    - quick_exit visible
    - lead routed to urgent_queue
    - requires_human_review == true
    - no auto-book direct confirmation
```

---

## 10.5 Scenario: CMS service page render

```yaml id="e2e-cms-service"
e2e_scenario:
  id: E2E-005
  name: Service page renders Sanity content and JSON-LD
  steps:
    - publish service_page in Sanity staging
    - build Astro page
    - open page
    - inspect HTML
  expected:
    - plainLanguageSummary visible
    - FAQ visible if included
    - JSON-LD valid
    - BreadcrumbList present
    - no lead/private data present
```

---

# 11. Automated Test Suite Proposal

```yaml id="automated-test-suite"
automated_test_suite:
  unit:
    framework: vitest_or_equivalent
    tests:
      - routing_rules
      - agent2ui_schema_validation
      - legal_health_score_calculation
      - state_transition_validation
      - analytics_payload_sanitizer

  component:
    framework: playwright_component_or_testing_library
    tests:
      - ZeroTypingQuestionSheet
      - AgentRecommendationPanel
      - SafetyNotice
      - MobileBottomSheet
      - DesktopSideDrawer

  e2e:
    framework: Playwright
    tests:
      - mobile_intake
      - desktop_intake
      - secretary_review
      - payment_booking_happy_path
      - payment_exception
      - quick_exit

  integration:
    framework: vitest + supabase_test_client
    tests:
      - submit_intake_edge_function
      - payos_webhook_verification
      - cal_booking_creation
      - sanity_query_contract

  security_privacy:
    tests:
      - no_pii_analytics_payload
      - no_case_summary_logs
      - forbidden_agent_component
      - webhook_invalid_signature
      - private_storage_access
```

---

# 12. Manual QA Checklist

```yaml id="manual-qa-checklist"
manual_qa_checklist:
  devices:
    - iPhone Safari
    - Android Chrome
    - iPad/tablet
    - desktop Chrome
    - desktop Safari
    - desktop Edge

  core_checks:
    - homepage first action visible
    - intake flow feels under 60 seconds
    - no unexpected keyboard before contact step
    - bottom sheet usable with thumb
    - side drawer focus and close behavior works
    - payment messages understandable
    - confirmation page clear
    - preparation checklist useful
    - sensitive copy not alarming or overpromising
    - old URL redirect works
```

---

# 13. Production Smoke Tests

```yaml id="production-smoke-tests"
production_smoke_tests:
  after_deploy:
    - homepage_loads
    - one_hour_page_loads
    - intake_open_smoke
    - submit_synthetic_lead
    - secretary_queue_receives_lead
    - no_pii_in_analytics_synthetic_check
    - quick_exit_works
    - structured_data_present
    - sitemap_accessible
    - robots_txt_accessible

  payment_smoke:
    mode: controlled_test_only
    requires_approval: true
    tests:
      - create_test_payment_link
      - verify_webhook_in_staging_or_low_value_prod
      - no_real_sensitive_data
```

---

# 14. Defect Triage Rules

```yaml id="defect-triage"
defect_triage:
  S0_blocker:
    action: stop_release
    owner: tech_lead
    required: fix_and_retest

  S1_critical:
    action: fix_before_release_or_formal_waiver
    owner: relevant_team
    waiver_requires:
      - product_owner
      - tech_lead
      - privacy_owner_if_data_related

  S2_major:
    action: fix_if_possible_before_release
    owner: relevant_team
    may_defer_with:
      - mitigation
      - backlog_ticket
      - owner

  S3_minor:
    action: backlog
    owner: relevant_team
```

---

# 15. QA Entry & Exit Criteria

## 15.1 Entry criteria

```yaml id="qa-entry"
qa_entry_criteria:
  - Feature branch deployed to staging.
  - Test data seeded.
  - Sanity staging content available.
  - Supabase staging schema migrated.
  - payOS and Cal.com test configuration ready.
  - Analytics debug mode available.
  - Component inventory complete.
```

## 15.2 Exit criteria

```yaml id="qa-exit"
qa_exit_criteria:
  - All S0 fixed and retested.
  - No unresolved S1 unless formally waived.
  - Core E2E flows pass.
  - Privacy tests pass.
  - Payment/booking tests pass.
  - Quick Exit tests pass.
  - Accessibility baseline passes.
  - Production smoke plan approved.
```

---

# 16. Machine-readable Summary

```json id="machine-summary"
{
  "document_id": "anluat_qa_test_plan_acceptance_matrix",
  "version": "1.0",
  "status": "draft_for_review",
  "test_strategy": {
    "approach": "risk_based",
    "release_gates": [
      "design_system",
      "core_flow",
      "payment_booking",
      "privacy_security",
      "content_seo",
      "operations"
    ],
    "test_types": [
      "static_analysis",
      "unit_tests",
      "component_tests",
      "integration_tests",
      "e2e_tests",
      "privacy_tests",
      "security_tests",
      "accessibility_tests",
      "performance_tests"
    ]
  },
  "blocker_conditions": [
    "PII leak to analytics",
    "Session replay enabled on sensitive pages",
    "Payment marked success without verified webhook",
    "Booking confirmed before payment success",
    "Duplicate Cal.com booking",
    "Quick Exit not working",
    "Agent renders arbitrary HTML/script",
    "Sensitive document publicly accessible"
  ],
  "core_e2e_scenarios": [
    "mobile_one_hour_intake",
    "auto_book_payment_success",
    "invalid_payos_webhook_rejected",
    "domestic_violence_safety_flow",
    "cms_service_page_render"
  ],
  "acceptance_categories": [
    "UX_UI",
    "DesignSystem",
    "Agent2UI",
    "PrivacyAnalytics",
    "PaymentBooking",
    "QuickExit",
    "CMS_SEO",
    "Operations",
    "Accessibility",
    "Performance"
  ],
  "exit_criteria": [
    "all_S0_fixed",
    "no_unwaived_S1",
    "core_e2e_pass",
    "privacy_tests_pass",
    "payment_booking_tests_pass",
    "quick_exit_tests_pass",
    "accessibility_baseline_pass",
    "production_smoke_plan_approved"
  ]
}
```

---

# 17. Final Decision

AnLuật.com chỉ được launch MVP khi vượt qua các release gate sau:

> **UI hoạt động trên desktop/mobile, Agent2UI không vượt rào schema, payment/booking không tạo lịch sai, dữ liệu nhạy cảm không rò rỉ, Quick Exit hoạt động độc lập React, CMS render đúng structured data, và vận hành nội bộ có queue/SLA/audit.**

Nếu một trong các blocker như **PII leak**, **booking confirmed trước payment**, **Quick Exit lỗi**, hoặc **agent render script** xuất hiện, **dừng release**. Không “thôi launch rồi sửa”, vì đó là câu nói cuối cùng trước khi dashboard bắt đầu cháy.

---

# 18. Sau tài liệu này

Bây giờ đã đủ nền để viết:

# **Implementation Roadmap & MVP Backlog**

Roadmap tiếp theo sẽ nên gồm:

```yaml id="next-roadmap"
roadmap_sections:
  - phase_0_foundation
  - phase_1_design_system_and_cms
  - phase_2_core_frontend_and_intake
  - phase_3_agent2ui_and_data_backend
  - phase_4_payment_booking
  - phase_5_operations_dashboard
  - phase_6_qa_hardening_and_launch
  - mvp_backlog
  - sprint_plan
  - dependencies
  - risk_register
  - release_criteria
```

Giờ mới viết roadmap là hợp lý. Trước đó mà viết thì chỉ là lịch trình của hy vọng, và hy vọng thì không có unit test.

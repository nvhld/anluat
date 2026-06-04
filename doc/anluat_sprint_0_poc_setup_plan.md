# Sprint 0 POC Setup Plan

```yaml
document_id: anluat_sprint_0_poc_setup_plan
version: 1.0
status: active_plan
language: vi-VN
project: Website moi AnLuat.com
last_updated: 2026-06-03
scope_lane: sprint_0_poc
default_mvp: MVP-A
mvp_b_rule: enable_only_if_poc_pass_and_PO_approval
timeline_commitment_rule: only_after_sprint_0_poc_report
```

## 1. Objective

Sprint 0 khong phai de build feature. Sprint 0 dung de kiem chung cac gia dinh rui ro lon nhat truoc khi commit timeline va truoc khi bat dau scaffold repo implementation.

```yaml
objective:
  primary:
    - Prove or reject critical technical assumptions.
    - Separate MVP-A blockers from MVP-B gated payment risks.
    - Produce a single Sprint 0 report that supports PO scope decision.
  outputs:
    - Updated pass_fail_matrix
    - Evidence per S0 task
    - Risk list after POC
    - Fallback decision per failed POC
    - Final recommendation: MVP-A_only or MVP-A_plus_MVP-B
```

## 2. Sprint 0 Scope

```yaml
sprint_0_scope:
  included_tasks:
    - S0-001
    - S0-002
    - S0-003
    - S0-004
    - S0-005
    - S0-006
    - S0-007
    - S0-008
    - S0-009
    - S0-010
    - S0-011
    - S0-012

  excluded_tasks:
    - repo_scaffold_creation
    - app_code_implementation
    - timeline_estimation
    - production_feature_enablement
    - LLM_in_product
    - official_document_upload

  guardrails:
    - MVP-A remains default throughout Sprint 0.
    - MVP-B payment_auto_book stays disabled until Sprint 0 pass and PO approval.
    - Payment UI is not rendered during MVP-A planning.
    - Session replay remains disabled site-wide.
```

## 3. S0-001 To S0-012 Owner Matrix

```yaml
owner_matrix:
  - id: S0-001
    title: payOS create payment link POC
    owner: payment_booking_agent
    reviewer: qa_privacy_agent
    lane: mvp_b_gate

  - id: S0-002
    title: payOS verified webhook POC
    owner: payment_booking_agent
    reviewer: qa_privacy_agent
    lane: mvp_b_gate

  - id: S0-003
    title: payOS duplicate webhook idempotency POC
    owner: payment_booking_agent
    reviewer: qa_privacy_agent
    lane: mvp_b_gate

  - id: S0-004
    title: Cal.com availability POC
    owner: payment_booking_agent
    reviewer: qa_privacy_agent
    lane: mvp_b_gate

  - id: S0-005
    title: Cal.com booking after payment success POC
    owner: payment_booking_agent
    reviewer: qa_privacy_agent
    lane: mvp_b_gate

  - id: S0-006
    title: Supabase RLS public insert-only POC
    owner: backend_privacy_agent
    reviewer: qa_privacy_agent
    lane: mvp_a_blocker

  - id: S0-007
    title: Supabase audit for sensitive access POC
    owner: backend_privacy_agent
    reviewer: qa_privacy_agent
    lane: mvp_a_blocker

  - id: S0-008
    title: Quick Exit pre-hydration POC
    owner: frontend_agent
    reviewer: qa_privacy_agent
    lane: mvp_a_blocker

  - id: S0-009
    title: Agent2UI renderer rejection POC
    owner: frontend_agent
    reviewer:
      - backend_privacy_agent
      - qa_privacy_agent
    lane: mvp_a_blocker

  - id: S0-010
    title: Privacy analytics sanitizer POC
    owner: qa_privacy_agent
    reviewer:
      - frontend_agent
      - backend_privacy_agent
    lane: mvp_a_blocker

  - id: S0-011
    title: Sanity to Astro content render POC
    owner: cms_seo_agent
    reviewer:
      - frontend_agent
      - qa_privacy_agent
    lane: mvp_a_blocker

  - id: S0-012
    title: Sprint 0 POC report
    owner: lead_integrator
    reviewer:
      - product_scope_agent
      - qa_privacy_agent
    lane: integration_decision
```

## 4. Execution Order

Execution order toi uu o day uu tien cac blocker cua MVP-A truoc, sau do moi lai cac POC gate cho MVP-B. Ly do rat don gian: neu RLS, Quick Exit, Agent2UI safety, privacy analytics hoac Sanity core render fail thi khong can ban tiep ve auto-booking.

```yaml
execution_order:
  wave_1_foundations:
    - S0-006
    - S0-007
    - S0-008
    - S0-009
    - S0-010
    - S0-011

  wave_2_payment_booking:
    - S0-001
    - S0-002
    - S0-003
    - S0-004
    - S0-005

  wave_3_integration_decision:
    - S0-012
```

## 5. Dependencies Giua Cac POC

```yaml
dependencies:
  S0-006: []
  S0-007:
    - S0-006
  S0-008: []
  S0-009:
    - S0-008_optional_for_ui_shell_shape
  S0-010:
    - S0-006_for_data_boundary_validation
    - S0-009_for_agent2ui_event_shape
  S0-011: []
  S0-001: []
  S0-002:
    - S0-001
  S0-003:
    - S0-002
  S0-004: []
  S0-005:
    - S0-002
    - S0-004
  S0-012:
    - S0-001
    - S0-002
    - S0-003
    - S0-004
    - S0-005
    - S0-006
    - S0-007
    - S0-008
    - S0-009
    - S0-010
    - S0-011
```

## 6. Required Fixtures And Test Data

```yaml
required_fixtures:
  general_rule:
    - synthetic_data_only
    - no_real_client_or_real_sensitive_case_content

  supabase:
    - public_insert_payload_valid
    - public_read_attempt_invalid
    - sensitive_access_event_fixture
    - audit_event_fixture

  quick_exit:
    - neutral_page_target
    - family_page_fixture
    - pre_hydration_dom_fixture

  agent2ui:
    - valid_taxonomy_only_request
    - unknown_component_response
    - unknown_action_response
    - raw_html_script_response
    - safe_fallback_response

  analytics:
    - allowed_event_fixture
    - forbidden_keys_fixture
    - pii_pattern_fixture
    - free_text_fixture

  sanity_astro:
    - published_service_page_fixture
    - faq_human_reviewed_true_fixture
    - faq_human_reviewed_false_fixture
    - forbidden_sensitive_schema_fixture

  payos:
    - synthetic_order_code
    - backend_owned_amount
    - valid_signature_fixture
    - invalid_signature_fixture
    - duplicate_webhook_fixture
    - amount_mismatch_fixture

  calcom:
    - availability_response_fixture
    - slot_unavailable_fixture
    - booking_success_fixture
    - duplicate_booking_fixture
```

## 7. Evidence Required Per POC

```yaml
evidence_required:
  S0-001:
    - request_shape
    - response_shape
    - payment_description_sample_without_case_detail
    - evidence_link_in_poc_report

  S0-002:
    - verification_logic_notes
    - invalid_signature_rejection_evidence
    - amount_and_order_code_check_evidence
    - evidence_link_in_poc_report

  S0-003:
    - duplicate_webhook_fixture
    - idempotency_result
    - no_duplicate_state_transition_evidence

  S0-004:
    - availability_fetch_result
    - frontend_safe_slot_shape
    - no_secret_exposed_evidence

  S0-005:
    - booking_after_verified_payment_only_evidence
    - slot_unavailable_handling_evidence
    - no_duplicate_booking_evidence

  S0-006:
    - public_insert_success
    - public_read_denied
    - service_role_only_sensitive_read_evidence
    - policy_notes

  S0-007:
    - sensitive_access_audit_event
    - actor_role_recorded
    - entity_id_recorded

  S0-008:
    - pre_hydration_execution_evidence
    - pointerdown_capture_evidence
    - direct_dom_replacement_evidence
    - history_replace_evidence

  S0-009:
    - unknown_component_rejected
    - unknown_action_rejected
    - raw_html_script_rejected
    - fallback_secretary_review_evidence

  S0-010:
    - analytics_payload_before_after_sanitization
    - no_pii_keys
    - no_case_summary_logs
    - no_session_replay_config_evidence

  S0-011:
    - service_page_render_evidence
    - faq_json_ld_visibility_rule_evidence
    - sanity_public_content_only_evidence

  S0-012:
    - completed_pass_fail_matrix
    - risks_after_poc
    - fallback_decisions
    - final_scope_recommendation
```

## 8. Pass Fail Criteria

```yaml
pass_fail_criteria:
  pass:
    - every_task_meets_all_declared_acceptance_items
    - evidence_is_recorded_in_poc_report
    - reviewer_signoff_exists_for_high_risk_tasks

  fail:
    - any_required_acceptance_item_missing
    - evidence_missing_for_task
    - privacy_or_security_assertion_not_proven
    - webhook_or_booking_state_transition_not_deterministic
```

## 9. MVP-A Blocker Vs MVP-B Gate Distinction

```yaml
scope_distinction:
  mvp_a_blockers:
    - S0-006
    - S0-007
    - S0-008
    - S0-009
    - S0-010
    - S0-011

  mvp_b_only_gates:
    - S0-001
    - S0-002
    - S0-003
    - S0-004
    - S0-005

  integration_decision:
    - S0-012
```

Rule:
Neu `S0-006` toi `S0-011` fail thi block MVP-A cho toi khi sua xong.
Neu `S0-001` toi `S0-005` fail thi khong block MVP-A; defer MVP-B payment auto-book sang post-MVP.

## 10. Fallback Rules

```yaml
fallback_rules:
  if_supabase_rls_or_audit_fails:
    - block_MVP_A
    - fix_policies_before_scaffold_commitment

  if_quick_exit_fails:
    - block_MVP_A
    - do_not_continue_frontend_shell_as_launch_candidate

  if_agent2ui_safety_fails:
    - block_MVP_A
    - fallback_static_secretary_review_allowed_only_as_temporary_test_shape

  if_privacy_analytics_fails:
    - block_MVP_A
    - disable_analytics_until_fixed

  if_sanity_astro_core_render_fails:
    - block_MVP_A
    - temporary_static_content_allowed_for_debug_only
    - do_not_treat_MVP_A_as_ready

  if_payos_fails:
    - keep_MVP_A
    - move_MVP_B_to_post_MVP
    - do_not_waive_failed_payment_poc_into_production

  if_calcom_fails:
    - keep_MVP_A
    - move_MVP_B_to_post_MVP
    - use_secretary_callback_manual_booking_after_launch_if_needed
```

## 11. Report Update Protocol For `anluat_sprint_0_poc_report.md`

```yaml
report_update_protocol:
  general:
    - update_report_same_day_as_poc_result
    - no_task_may_be_marked_passed_without_evidence
    - lead_integrator_owns_consistency

  per_task:
    - S0-001_updates: poc_matrix.payos.create_payment_link
    - S0-002_updates: poc_matrix.payos.verify_webhook and reject_invalid_signature
    - S0-003_updates: poc_matrix.payos.idempotent_duplicate_webhook
    - S0-004_updates: poc_matrix.calcom.fetch_availability
    - S0-005_updates: poc_matrix.calcom.create_booking_after_payment_success, handle_slot_unavailable, no_duplicate_booking
    - S0-006_updates: poc_matrix.supabase.public_insert_only, no_public_read, service_role_only_sensitive_read
    - S0-007_updates: poc_matrix.supabase.sensitive_access_audited
    - S0-008_updates: poc_matrix.quick_exit.works_before_react_hydration, pointerdown_capture, direct_dom_replacement, history_replace
    - S0-009_updates: poc_matrix.agent2ui.reject_unknown_component, reject_unknown_action, reject_raw_html_script, fallback_secretary_review
    - S0-010_updates: poc_matrix.privacy.no_name_phone_email_zalo_in_analytics, no_case_summary_in_logs, no_session_replay
    - S0-011_updates: poc_matrix.cms.sanity_to_astro_render, faq_schema_visible_human_reviewed, sanity_public_content_only
    - S0-012_updates: sprint_0_summary, risks_after_poc, fallback_decision, final_recommendation
```

## 12. Final Decision Protocol

```yaml
final_decision_protocol:
  step_1:
    - ensure_S0_001_to_S0_011_are_all_updated_in_report

  step_2:
    - classify_failures_into_MVP_A_blocker_or_MVP_B_gate

  step_3:
    - if_any_MVP_A_blocker_failed:
      - recommendation: MVP_A_blocked_until_fixed
      - timeline_commitment_ready: false

  step_4:
    - if_MVP_A_blockers_pass_and_any_MVP_B_gate_failed:
      - recommendation: MVP_A_only
      - move_MVP_B_to_post_MVP
      - timeline_commitment_ready: true_for_MVP_A_only_after_PO_review

  step_5:
    - if_MVP_A_blockers_pass_and_all_MVP_B_gates_pass:
      - recommendation: MVP_A_plus_MVP_B_gated
      - timeline_commitment_ready: true_after_PO_review

  step_6:
    - PO_reviews_report_and_approves_scope

  hard_rules:
    - failed_payment_or_booking_poc_cannot_be_waived_into_production_auto_book
    - no_timeline_commit_before_report_review
```

## 13. Open Questions Can PO Dev Quyet Dinh Truoc Khi Scaffold Repo

```yaml
open_questions:
  - id: OQ-001
    question: Trong Sprint 0, payOS se duoc POC bang SDK truoc hay HTTP API truoc?
    owner: payment_booking_agent

  - id: OQ-002
    question: Cal.com POC se dung sandbox/test event type nao va availability window nao?
    owner: payment_booking_agent

  - id: OQ-003
    question: Muc schema reduced cho Sanity da du chua, hay can them intake microcopy editable?
    owner: cms_seo_agent

  - id: OQ-004
    question: Agent2UI POC co can fixture cho static fallback copy bang tieng Viet ngay tu dau khong?
    owner:
      - frontend_agent
      - backend_privacy_agent

  - id: OQ-005
    question: Khi scaffold repo, monorepo package manager mac dinh se la pnpm dung theo scaffold manifest, co can exception nao khong?
    owner: lead_integrator

  - id: OQ-006
    question: Cho Sprint 0 co can mot sandbox analytics provider cu the hay chi can local payload sanitizer va synthetic mirror?
    owner:
      - qa_privacy_agent
      - backend_privacy_agent

  - id: OQ-007
    question: Neu MVP-B fail, payment_resolution_queue se duoc giu lai o backlog hay scaffold toi thieu de tai su dung sau MVP?
    owner:
      - product_scope_agent
      - payment_booking_agent
```

## Machine-Readable Summary

```json
{
  "document_id": "anluat_sprint_0_poc_setup_plan",
  "scope": "Sprint 0 POC only",
  "default_mvp": "MVP-A",
  "mvp_b_rule": "Enable only if Sprint 0 POC passes and PO approves",
  "mvp_a_blockers": ["S0-006", "S0-007", "S0-008", "S0-009", "S0-010", "S0-011"],
  "mvp_b_gates": ["S0-001", "S0-002", "S0-003", "S0-004", "S0-005"],
  "decision_task": "S0-012",
  "timeline_commitment_rule": "Only after Sprint 0 POC report"
}
```

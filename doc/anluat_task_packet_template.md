# Task Packet Template

```yaml
document_id: anluat_task_packet_template
version: 1.0
status: template
language: vi-VN
last_updated: 2026-06-03
```

## 1. Generic Task Packet

```yaml
task_packet:
  id:
  title:
  mvp_lane: MVP-A # MVP-A | Sprint-0-POC | MVP-B-gated | Post-MVP
  priority:
  source_docs:
    - AGENTS.md
    - doc/anluat_project_harness.md
  user_story:
  acceptance_ids:
  inputs_allowed:
  forbidden_scope:
  dependencies:
  output_artifact:
  files_or_surfaces_owned:
  test_evidence_required:
  owner_agent:
  reviewer_agent:
  status: not_started
  next_step_recommendation:
  suggested_model:
  suggested_reasoning:
```

## 2. Agent2UI Task Packet

```yaml
agent2ui_task_packet:
  id:
  mvp_lane: MVP-A
  input_mode: taxonomy_only
  allowed_fields:
    - legal_area
    - issue_type
    - current_stage
    - urgency
    - user_role
    - preferred_lawyer
    - consultation_mode
  forbidden_fields:
    - full_name
    - phone
    - email
    - zalo
    - case_summary_raw
    - uploaded_document_content
    - payment_order_code
  allowed_components:
    mvp_a:
      - AgentRecommendationPanel
      - RecommendedServiceCard
      - PreparationChecklist
      - LegalHealthScorePrompt
      - SafetyNotice
      - SecretaryReviewPanel
    mvp_b_if_enabled:
      - SlotSelectorPrompt
      - PaymentRequiredPanel
  fallback: SecretaryReviewPanel
  payment_components_require:
    - ENABLE_PAYMENT_BOOKING == true
    - Sprint_0_POC_passed
    - PO_approval
  must_test:
    - reject_unknown_component
    - reject_unknown_action
    - reject_raw_html_script
    - no_PII_in_analytics_event
```

## 3. Payment POC Task Packet

```yaml
payment_poc_task_packet:
  id:
  mvp_lane: Sprint-0-POC
  status: not_started
  activation_rule: before_timeline_commit_only
  forbidden_scope:
    - do_not_enable_MVP_B_without_PO_approval
    - do_not_mark_paid_from_frontend
    - do_not_create_Cal_booking_before_verified_payment_success
  must_test:
    - create_payment_link
    - verify_webhook
    - reject_invalid_signature
    - idempotent_duplicate_webhook
    - amount_mismatch_no_booking
    - fetch_availability
    - create_booking_after_payment_success
    - handle_slot_unavailable
    - no_duplicate_booking
  output_artifact:
    - doc/anluat_sprint_0_poc_report.md
```

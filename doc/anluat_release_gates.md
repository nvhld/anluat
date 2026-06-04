# An Luat Release Gates

```yaml
document_id: anluat_release_gates
version: 1.0
status: active
language: vi-VN
last_updated: 2026-06-03
```

## 1. Gate Policy

```yaml
release_gate_policy:
  default_mvp: MVP-A
  mvp_b_inclusion: only_after_Sprint_0_POC_pass_and_PO_approval
  timeline_commitment: only_after_Sprint_0_POC_report
  s0_policy: no_launch
  s1_policy: fix_or_formal_waiver
  waiver_log: doc/anluat_waivers.md
```

## 2. MVP-A Gate

```yaml
mvp_a_gate:
  required_checks:
    build_quality:
      - typecheck_passes_when_app_exists
      - lint_passes_when_app_exists
      - unit_tests_pass
      - integration_tests_pass
      - e2e_smoke_pass
      - production_build_pass

    product_ux:
      - homepage_has_5_intake_doors
      - mobile_first_action_visible_without_scroll
      - one_hour_with_nhu_page_live
      - no_public_price
      - zero_typing_until_contact_step
      - document_possession_flag_only_no_upload

    frontend_safety:
      - quick_exit_inline_vanilla_js
      - quick_exit_works_before_react_hydration
      - pointerdown_capture_phase
      - direct_dom_replacement
      - no_horizontal_overflow_320px

    agent2ui:
      - deterministic_router_only_no_LLM
      - request_schema_validated
      - response_schema_validated
      - unknown_component_rejected
      - unknown_action_rejected
      - raw_html_script_rejected
      - fallback_secretary_review

    data_privacy:
      - public_insert_only
      - no_public_read
      - contact_pii_separated
      - sensitive_details_separated
      - sensitive_access_audited
      - no_request_body_logs_for_intake

    analytics:
      - manual_events_only
      - no_name_phone_email_zalo
      - no_case_summary
      - no_free_text
      - session_replay_disabled_site_wide

    cms:
      - sanity_public_content_only
      - reduced_mvp_schema
      - faq_schema_only_visible_and_human_reviewed
      - client_proof_requires_publication_permission
      - old_url_redirects_for_high_value_pages

    ops:
      - secretary_review_queue_live
      - minimal_ops_dashboard_live
      - callback_attempt_logging
      - urgent_or_complex_leads_visible_to_ops
```

## 3. MVP-B Gated POC Gate

```yaml
mvp_b_poc_gate:
  must_not_block_mvp_a_unless_PO_selects_MVP_B: true
  failed_payment_or_booking_poc_cannot_be_waived_into_production_auto_book: true
  required_before_mvp_b:
    - Sprint_0_POC_report_complete
    - PO_approval_for_MVP_B

  payos:
    - create_payment_link
    - backend_owned_amount
    - description_has_no_case_details
    - verify_webhook_signature
    - reject_invalid_signature
    - verify_order_code
    - verify_amount
    - amount_mismatch_no_booking
    - duplicate_webhook_idempotent

  calcom:
    - fetch_availability
    - no_Cal_secret_exposed
    - create_booking_after_verified_payment_success
    - handle_slot_unavailable
    - no_duplicate_booking

  exception_handling:
    - late_payment_no_auto_confirm_stale_slot
    - booking_failure_after_payment_routes_payment_resolution
    - slot_conflict_routes_payment_resolution
```

## 4. S0 Launch Blockers

```yaml
s0_launch_blockers:
  mvp_a:
    - PII_leak_to_analytics
    - free_text_or_case_summary_in_analytics
    - session_replay_enabled_during_MVP
    - quick_exit_not_working
    - quick_exit_depends_on_React
    - public_read_access_to_lead_contact_or_sensitive_data
    - missing_audit_for_sensitive_access
    - Agent2UI_can_render_raw_html_or_script
    - Agent2UI_unknown_component_or_action_not_rejected
    - Sanity_contains_lead_case_payment_booking_or_sensitive_data
    - urgent_queue_missing

  mvp_b_if_enabled:
    - payOS_webhook_updates_state_without_verified_signature
    - payment_amount_or_order_code_not_verified
    - Cal_booking_created_before_verified_payment_success
    - duplicate_webhook_creates_duplicate_booking
    - amount_mismatch_creates_booking
    - payment_exception_has_no_resolution_queue
```

## 5. S1 Critical Findings

```yaml
s1_critical_findings:
  examples:
    - mobile_first_action_requires_scroll
    - intake_abandonment_due_to_blocking_UI_bug
    - secretary_queue_filter_broken
    - FAQ_JSON_LD_does_not_match_visible_content
    - analytics_core_event_missing_for_required_funnel_step
    - payment_status_UI_misleading_if_MVP_B

  policy:
    - fix_before_launch_or_record_formal_waiver
    - waiver_requires_owner_expiry_mitigation_PO_approval
```

## 6. Evidence Format

```yaml
gate_evidence:
  required_fields:
    - check_id
    - status
    - owner
    - evidence
    - date
    - blocker_status
    - linked_task_id
```

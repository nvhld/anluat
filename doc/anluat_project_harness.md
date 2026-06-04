# An Luat Project Harness

```yaml
document_id: anluat_project_harness
version: 1.1
status: active_execution_harness
language: vi-VN
project: Website mới An Luật
last_updated: 2026-06-04
purpose: >
  Thiết lập harness vận hành, kiểm thử, multi-agent coordination và release gates
  cho triage rebuild phase, MVP-A core và MVP-B gated payment/auto-book module.
```

## 1. Harness North Star

Harness này không phải thêm giấy tờ cho đẹp. Nó là bộ dây an toàn để nhiều agent/dev cùng làm nhanh mà không đá nhau, không làm phình MVP, và không làm rò dữ liệu nhạy cảm.

```yaml
harness_goals:
  - Giữ hướng product là legal triage system, không trôi về brochure site.
  - Bắt buộc screen-first và Less Is More ở các màn hình chuyển đổi chính.
  - Giữ MVP-A là mặc định.
  - Chặn MVP-B trước Sprint 0 POC.
  - Chặn timeline trước Sprint 0 POC report.
  - Cho phép multi-agent chạy song song bằng ownership rõ ràng.
  - Giảm token bằng role cards và task-scoped context.
  - Biến mọi rủi ro lớn thành acceptance gate có thể kiểm chứng.
  - Ghi mọi S1 waiver vào một log có owner, expiry và mitigation.
```

## 2. Execution Modes

```yaml
execution_modes:
  phase_2_triage_rebuild:
    goal: Rebuild public UX thành homepage command center, 1 GIỜ GẶP NHƯ landing, Legal Safety Map và Legal Health Score.
    default: true
    operating_rules:
      - triage_system_first
      - screen_first
      - less_is_more
      - public_polished_private_experimental

  sprint_0_poc:
    goal: Prove or reject risky integration assumptions before final timeline.
    output:
      - poc_report
      - pass_fail_matrix
      - fallback_plan
      - mvp_a_or_b_recommendation
      - revised_timeline

  mvp_a_build:
    goal: Build core website, intake, lead storage, secretary queue and privacy-safe analytics.
    default: true

  mvp_b_build:
    goal: Add payOS + Cal.com auto-book only after POC pass.
    default: false
    requires:
      - sprint_0_poc_pass
      - PO_approval

  post_mvp:
    goal: LLM refinement, document upload, advanced CRM, payment/scheduling expansion and deeper operational automations.
```

## 3. Sprint 0 POC Harness

```yaml
sprint_0_poc_harness:
  duration_policy: before_final_timeline_commit
  pass_rule:
    mvp_a_safety_pocs:
      fail_behavior: block_MVP_A_until_fixed
      includes:
        - supabase
        - quick_exit
        - agent2ui
        - privacy_analytics
        - sanity_to_astro_core_render
    mvp_b_payment_pocs:
      fail_behavior: move_MVP_B_to_post_mvp
      includes:
        - payos
        - calcom
  report_required: true
  report_template: doc/anluat_sprint_0_poc_report.md

  payos:
    owner: payment_booking_agent
    must_pass:
      - create_payment_link
      - verify_webhook
      - reject_invalid_signature
      - idempotent_duplicate_webhook
      - amount_mismatch_no_booking
    fallback_if_fail:
      - use_payos_http_api_instead_of_sdk
      - move_auto_payment_to_post_mvp
      - launch_mvp_a_secretary_callback

  calcom:
    owner: payment_booking_agent
    must_pass:
      - fetch_availability
      - create_booking_after_payment_success
      - handle_slot_unavailable
      - no_duplicate_booking
    fallback_if_fail:
      - manual_secretary_booking
      - no_auto_book_in_mvp

  supabase:
    owner: backend_privacy_agent
    must_pass:
      - public_insert_only
      - no_public_read
      - sensitive_access_audited
    fallback_if_fail:
      - delay_launch_until_rls_audit_fixed

  quick_exit:
    owner: frontend_agent
    must_pass:
      - works_before_react_hydration
      - pointerdown_capture
      - direct_dom_replacement
    fallback_if_fail:
      - block_launch

  agent2ui:
    owner: frontend_agent
    reviewer:
      - backend_privacy_agent
      - qa_privacy_agent
    must_pass:
      - reject_unknown_component
      - reject_unknown_action
      - reject_raw_html_script
      - fallback_secretary_review
    fallback_if_fail:
      - disable_agent2ui_dynamic_response
      - use_static_secretary_review_panel

  privacy_analytics:
    owner: qa_privacy_agent
    must_pass:
      - no_name_phone_email_zalo_in_analytics
      - no_case_summary_in_logs
      - no_session_replay
    fallback_if_fail:
      - disable_analytics_until_sanitizer_passes

  sanity_to_astro_core_render:
    owner: cms_seo_agent
    must_pass:
      - service_page_renders
      - faq_schema_only_visible_and_human_reviewed
      - sanity_public_content_only
    fallback_if_fail:
      - use_static_content_for_MVP_A_then_fix_CMS
      - disable_FAQ_JSON_LD_until_fixed
```

## 4. Release Gates

```yaml
release_gates:
  gate_0_scope:
    pass:
      - Task classified as MVP-A, Sprint 0 POC, MVP-B gated or post-MVP.
      - No accidental MVP expansion.

  gate_1_architecture:
    pass:
      - Source of truth is clear.
      - Component/API/data contract documented.
      - Privacy impact considered.

  gate_2_implementation:
    pass:
      - Typecheck/lint planned once app exists.
      - Tests or acceptance checks tied to changed surface.
      - Sensitive logs avoided.

  gate_3_privacy_security:
    pass:
      - No PII/free text analytics.
      - Session replay disabled site-wide for MVP.
      - Sensitive access audited.
      - Agent2UI allowlist enforced.

  gate_4_launch:
    pass:
      - S0 blockers = 0.
      - Unwaived S1 critical = 0.
      - Quick Exit verified.
      - MVP-B checks pass if MVP-B enabled.
      - Waiver log reviewed.
```

## 5. Quality Harness By Surface

```yaml
quality_harness:
  frontend:
    checks:
      - first_action_visible_mobile
      - no_horizontal_overflow_320px
      - quick_exit_pre_hydration
      - react_islands_only_for_interactive_surfaces
      - no_payment_state_from_frontend_if_MVP_B

  backend:
    checks:
      - input_validation
      - service_role_not_exposed
      - no_request_body_logs_for_intake
      - rls_public_insert_only
      - audit_sensitive_access

  cms:
    checks:
      - Sanity_public_content_only
      - FAQ_schema_visible_and_human_reviewed
      - client_proof_publication_permission
      - reduced_MVP_schema

  agent2ui:
    checks:
      - request_schema_validation
      - response_schema_validation
      - component_allowlist
      - action_allowlist
      - fallback_secretary_review
      - no_LLM_for_MVP

  analytics:
    checks:
      - manual_events_only
      - payload_whitelist
      - no_PII
      - no_free_text
      - no_session_replay

  payment_booking_if_MVP_B:
    checks:
      - webhook_signature_verified
      - amount_and_order_code_verified
      - idempotent_webhook
      - booking_after_payment_success_only
      - no_duplicate_booking
      - payment_resolution_queue
```

## 6. Context Loading Map

```yaml
context_loading_map:
  all_agents_start_with:
    - AGENTS.md
    - doc/anluat_project_harness.md
    - matching_role_card

  product_or_scope:
    load:
      - doc/anluat_implementation_roadmap_mvp_backlog.md
      - doc/anluat_web_new_product_ux_spec.md
      - doc/anluat_content_copy_decision_tree_spec.md

  frontend:
    load:
      - doc/anluat_visual_tokens_asset_brief.md
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_ui_direction_agent2ui_spec.md
      - doc/anluat_design_system_tokens_component_spec.md
      - doc/anluat_agent2ui_technical_contract.md

  backend_privacy:
    load:
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_data_model_privacy_safe_lead_spec.md
      - doc/anluat_agent2ui_technical_contract.md

  payment_booking:
    load:
      - doc/Payment & Scheduling Orchestration Spec.md
      - doc/anluat_data_model_privacy_safe_lead_spec.md

  cms_seo:
    load:
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_cms_content_model_ai_ready_seo_schema_spec.md
      - doc/anluat_knowledge_base.md

  qa:
    load:
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_qa_test_plan_acceptance_matrix.md
      - doc/anluat_project_harness.md
      - doc/anluat_release_gates.md

  task_assignment:
    load:
      - doc/anluat_task_packet_template.md

  scaffold_planning:
    load:
      - doc/anluat_repo_scaffold_manifest.md
```

## 7. Required Status Format

```yaml
agent_status_report:
  fields:
    - status
    - scope_classification
    - files_changed
    - acceptance_checks_done
    - blockers
    - risk_delta
    - next_action
    - recommended_next_step
    - suggested_model
    - suggested_reasoning
```

Example:

```text
Status: in_progress
Scope: MVP-A
Files changed: src/components/intake/ZeroTypingQuestionSheet.tsx
Checks: schema fixture passes, no PII analytics event emitted
Blockers: none
Risk delta: Quick Exit unaffected
Next: wire submit-intake contract
```

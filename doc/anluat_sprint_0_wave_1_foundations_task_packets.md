# Sprint 0 Wave 1 Foundations Task Packets

```yaml
document_id: anluat_sprint_0_wave_1_foundations_task_packets
version: 1.0
status: active_packet_set
language: vi-VN
last_updated: 2026-06-03
scope_lane: Sprint-0-POC
wave_id: wave_1_foundations
included_tasks:
  - S0-006
  - S0-007
  - S0-008
  - S0-009
  - S0-010
  - S0-011
blocker_type_summary:
  mvp_a_blocker:
    - S0-006
    - S0-007
    - S0-008
    - S0-009
    - S0-010
    - S0-011
  mvp_b_gate: []
guardrails:
  - no_repo_scaffold
  - no_app_code
  - no_timeline_estimate
  - no_scope_expansion
  - no_LLM_in_MVP
  - no_payment_UI_in_wave_1
```

## Wave Summary

Wave nay chi gom cac POC block MVP-A. Muc tieu khong phai build feature, ma la chung minh cac boundary ky thuat quan trong: Supabase data boundary, sensitive audit, Quick Exit truoc hydration, Agent2UI allowlist safety, privacy-safe analytics, va Sanity -> Astro core render.

## Task Packets

### S0-006

```yaml
task_packet:
  task_id: S0-006
  title: Supabase RLS public insert-only POC
  mvp_lane: Sprint-0-POC
  priority: P0_blocker
  blocker_type: mvp_a_blocker
  owner: backend_privacy_agent
  reviewer: qa_privacy_agent
  status: not_started
  objective: >
    Prove that the public intake boundary can write only the allowed synthetic intake payload,
    cannot read lead/contact/sensitive records, and that sensitive reads remain restricted to
    trusted service-role paths only.
  source_docs:
    - AGENTS.md
    - doc/anluat_project_harness.md
    - doc/anluat_live_tasks.md
    - doc/anluat_release_gates.md
    - doc/anluat_sprint_0_poc_setup_plan.md
    - doc/anluat_sprint_0_poc_report.md
    - doc/anluat_data_model_privacy_safe_lead_spec.md
    - doc/agent_roles/backend_privacy_agent.md
    - doc/agent_roles/qa_privacy_agent.md
  required_context:
    - Supabase data is split across lead taxonomy, contact PII, sensitive case details, analytics, and audit.
    - Public access must be insert-only for intake-safe payload shape.
    - No public read is allowed for lead/contact/sensitive tables.
    - Service role reads must remain backend-only and never exposed to client paths.
  inputs:
    - public_insert_payload_valid
    - public_read_attempt_invalid
    - synthetic_service_role_read_check
    - rls_policy_intent_from_data_model_spec
  expected_outputs:
    - RLS boundary decision record for public, authenticated internal, and service-role access.
    - Evidence bundle showing anonymous insert success for allowed payload only.
    - Evidence bundle showing anonymous/public read denial for lead/contact/sensitive data.
    - Evidence bundle showing service-role-only sensitive read path remains restricted to trusted backend context.
  acceptance_criteria:
    - public_insert_only
    - no_public_read
    - service_role_only_sensitive_read
  evidence_required:
    - policy_matrix_with_actor_vs_table_vs_action
    - synthetic_insert_request_and_result_for_allowed_payload
    - synthetic_public_read_attempt_and_denial_result
    - synthetic_service_role_sensitive_read_result_with_non_exposure_note
    - explicit_note_that_no_request_body_or_case_summary_is_logged_for_this_POC
  dependencies: []
  forbidden_scope:
    - no_repo_scaffold
    - no_production_schema_commitment
    - no_real_client_data
    - no_frontend_feature_build
  fallback_if_fail:
    - block_MVP_A_until_fixed
    - revise_RLS_policy_design_before_scaffold
    - do_not_continue_with_prod_shaped_intake_boundary
  output_artifact:
    - doc/anluat_sprint_0_poc_report.md
    - pass_fail_evidence_bundle_for_S0_006
  files_or_surfaces_owned:
    - Supabase policy design notes
    - data-boundary evidence for intake-safe tables
  report_update_target:
    - poc_matrix.supabase.public_insert_only
    - poc_matrix.supabase.no_public_read
    - poc_matrix.supabase.service_role_only_sensitive_read
  recommended_next_step: >
    If passed, continue immediately to S0-007 using the same synthetic boundary setup.
    If failed, write the exact broken actor/table/action path and stop MVP-A progression.
  suggested_model: GPT-5.4
  suggested_reasoning: High
```

### S0-007

```yaml
task_packet:
  task_id: S0-007
  title: Supabase audit for sensitive access POC
  mvp_lane: Sprint-0-POC
  priority: P0_blocker
  blocker_type: mvp_a_blocker
  owner: backend_privacy_agent
  reviewer: qa_privacy_agent
  status: not_started
  objective: >
    Prove that any sensitive access path produces an audit record with enough detail for later
    review, including actor role, entity identifier, action type, and timestamped traceability.
  source_docs:
    - AGENTS.md
    - doc/anluat_project_harness.md
    - doc/anluat_live_tasks.md
    - doc/anluat_release_gates.md
    - doc/anluat_sprint_0_poc_setup_plan.md
    - doc/anluat_sprint_0_poc_report.md
    - doc/anluat_data_model_privacy_safe_lead_spec.md
    - doc/agent_roles/backend_privacy_agent.md
    - doc/agent_roles/qa_privacy_agent.md
  required_context:
    - Sensitive access must be auditable, not just authorized.
    - Audit records must cover view or state-change actions touching sensitive data.
    - Audit evidence must be reviewer-readable without exposing raw sensitive case content.
  inputs:
    - sensitive_access_event_fixture
    - audit_event_fixture
    - synthetic_actor_roles
    - synthetic_entity_ids
  expected_outputs:
    - Audit event contract for sensitive access actions.
    - Evidence showing an audited sensitive access event is written.
    - Evidence showing actor_role and entity_id are present and queryable in audit output.
  acceptance_criteria:
    - sensitive_access_audited
    - actor_role_recorded
    - entity_id_recorded
  evidence_required:
    - synthetic_sensitive_access_execution_record
    - resulting_audit_log_record_or_structured_dump
    - actor_role_field_presence
    - entity_id_field_presence
    - note_confirming_no_raw_case_summary_is_written_into_audit_payload
  dependencies:
    - S0-006
  forbidden_scope:
    - no_real_case_access
    - no_prod_ops_dashboard_work
    - no_non_sensitive_audit_scope_expansion
  fallback_if_fail:
    - block_MVP_A_until_fixed
    - freeze_sensitive_view_design_until_audit_contract_is_correct
  output_artifact:
    - doc/anluat_sprint_0_poc_report.md
    - pass_fail_evidence_bundle_for_S0_007
  files_or_surfaces_owned:
    - audit contract notes
    - sensitive access evidence
  report_update_target:
    - poc_matrix.supabase.sensitive_access_audited
  recommended_next_step: >
    If passed, hand the validated boundary assumptions to S0-010 for log/privacy checks.
    If failed, log the missing audit field or missing emission path as a release blocker.
  suggested_model: GPT-5.4
  suggested_reasoning: High
```

### S0-008

```yaml
task_packet:
  task_id: S0-008
  title: Quick Exit pre-hydration POC
  mvp_lane: Sprint-0-POC
  priority: P0_blocker
  blocker_type: mvp_a_blocker
  owner: frontend_agent
  reviewer: qa_privacy_agent
  status: not_started
  objective: >
    Prove that Quick Exit works independently of React, runs before hydration, captures the
    first pointerdown interaction, replaces the DOM with a neutral surface, and updates
    history state fast enough to avoid exposing the sensitive page.
  source_docs:
    - AGENTS.md
    - doc/anluat_project_harness.md
    - doc/anluat_live_tasks.md
    - doc/anluat_release_gates.md
    - doc/anluat_sprint_0_poc_setup_plan.md
    - doc/anluat_sprint_0_poc_report.md
    - doc/anluat_ui_direction_agent2ui_spec.md
    - doc/anluat_web_new_product_ux_spec.md
    - doc/anluat_qa_test_plan_acceptance_matrix.md
    - doc/anluat_content_copy_decision_tree_spec.md
    - doc/anluat_visual_tokens_asset_brief.md
    - doc/agent_roles/frontend_agent.md
    - doc/agent_roles/qa_privacy_agent.md
  required_context:
    - Quick Exit must be inline vanilla JS in the Astro root layout.
    - It must not depend on React lifecycle or bundle load.
    - Sensitive copy must not promise absolute privacy or impossible guarantees.
    - The neutral page replacement must be immediate and history-safe.
  inputs:
    - neutral_page_target
    - family_page_fixture
    - pre_hydration_dom_fixture
    - synthetic_quick_exit_copy_fixture
  expected_outputs:
    - Pre-hydration execution proof for Quick Exit entrypoint.
    - Pointerdown capture proof from root layout script.
    - Direct DOM replacement proof to neutral content.
    - History replace proof so back navigation does not re-expose the sensitive surface immediately.
  acceptance_criteria:
    - works_before_react_hydration
    - pointerdown_capture
    - direct_dom_replacement
    - history_replace
  evidence_required:
    - execution_trace_showing_trigger_before_hydration
    - event_capture_evidence_for_pointerdown
    - before_after_DOM_snapshot_or_equivalent_structured_record
    - history_state_replacement_evidence
    - copy_review_note_confirming_no_absolute_privacy_claim
  dependencies: []
  forbidden_scope:
    - no_React_implementation
    - no_bundle_dependent_solution
    - no_session_replay_test_enablement
    - no_payment_UI_or_booking_flow_work
  fallback_if_fail:
    - block_MVP_A_until_fixed
    - do_not_continue_frontend_shell_as_launch_candidate
  output_artifact:
    - doc/anluat_sprint_0_poc_report.md
    - pass_fail_evidence_bundle_for_S0_008
  files_or_surfaces_owned:
    - Quick Exit behavior notes
    - root-layout interaction evidence
  report_update_target:
    - poc_matrix.quick_exit.works_before_react_hydration
    - poc_matrix.quick_exit.pointerdown_capture
    - poc_matrix.quick_exit.direct_dom_replacement
    - poc_matrix.quick_exit.history_replace
  recommended_next_step: >
    If passed, reuse the validated shell assumptions in S0-009 for renderer-safety fixtures.
    If failed, isolate whether the fault is timing, event capture, or DOM replacement and keep MVP-A blocked.
  suggested_model: GPT-5.4
  suggested_reasoning: High
```

### S0-009

```yaml
task_packet:
  task_id: S0-009
  title: Agent2UI renderer rejection POC
  mvp_lane: Sprint-0-POC
  priority: P0_blocker
  blocker_type: mvp_a_blocker
  owner: frontend_agent
  reviewer:
    - backend_privacy_agent
    - qa_privacy_agent
  status: not_started
  objective: >
    Prove that the frontend renderer accepts only allowlisted, schema-valid Agent2UI output,
    rejects unknown component and action types, rejects raw HTML or script-like payloads, and
    falls back deterministically to SecretaryReviewPanel-safe behavior.
  source_docs:
    - AGENTS.md
    - doc/anluat_project_harness.md
    - doc/anluat_live_tasks.md
    - doc/anluat_release_gates.md
    - doc/anluat_sprint_0_poc_setup_plan.md
    - doc/anluat_sprint_0_poc_report.md
    - doc/anluat_task_packet_template.md
    - doc/anluat_agent2ui_technical_contract.md
    - doc/anluat_ui_direction_agent2ui_spec.md
    - doc/anluat_content_copy_decision_tree_spec.md
    - doc/anluat_qa_test_plan_acceptance_matrix.md
    - doc/agent_roles/frontend_agent.md
    - doc/agent_roles/backend_privacy_agent.md
    - doc/agent_roles/qa_privacy_agent.md
  required_context:
    - MVP Agent2UI is deterministic rule-router plus schema/component/action allowlist.
    - Renderer may not execute HTML, JS, CSS, iframe, script, or arbitrary embeds.
    - Unknown output must fail closed to a safe secretary-review fallback.
    - Payment components remain forbidden in MVP-A.
  inputs:
    - valid_taxonomy_only_request
    - unknown_component_response
    - unknown_action_response
    - raw_html_script_response
    - safe_fallback_response
  expected_outputs:
    - Allowlist decision matrix for components and actions in MVP-A.
    - Evidence showing unknown component rejection.
    - Evidence showing unknown action rejection.
    - Evidence showing raw HTML or script payload rejection.
    - Evidence showing SecretaryReviewPanel-safe fallback is used.
  acceptance_criteria:
    - reject_unknown_component
    - reject_unknown_action
    - reject_raw_html_script
    - fallback_secretary_review
  evidence_required:
    - schema_validation_result_for_valid_and_invalid_payloads
    - unknown_component_rejection_record
    - unknown_action_rejection_record
    - raw_html_or_script_rejection_record
    - safe_fallback_render_decision_record
    - note_confirming_payment_components_are_not_renderable_in_MVP_A
  dependencies:
    - S0-008_optional_for_ui_shell_shape
  forbidden_scope:
    - no_LLM_output_path
    - no_payment_component_render
    - no_free_text_or_PII_in_agent_request
    - no_backend_booking_or_payment_state_mutation
  fallback_if_fail:
    - block_MVP_A_until_fixed
    - debug_only_static_secretary_review_fallback
    - do_not_treat_renderer_as_launch_ready
  output_artifact:
    - doc/anluat_sprint_0_poc_report.md
    - pass_fail_evidence_bundle_for_S0_009
  files_or_surfaces_owned:
    - Agent2UI renderer safety notes
    - allowlist and fallback evidence
  report_update_target:
    - poc_matrix.agent2ui.reject_unknown_component
    - poc_matrix.agent2ui.reject_unknown_action
    - poc_matrix.agent2ui.reject_raw_html_script
    - poc_matrix.agent2ui.fallback_secretary_review
  recommended_next_step: >
    If passed, hand the validated event and payload shape to S0-010 for analytics and log-boundary checks.
    If failed, record the exact offending component or action path and keep MVP-A blocked.
  suggested_model: GPT-5.4
  suggested_reasoning: High
```

### S0-010

```yaml
task_packet:
  task_id: S0-010
  title: Privacy analytics sanitizer POC
  mvp_lane: Sprint-0-POC
  priority: P0_blocker
  blocker_type: mvp_a_blocker
  owner: qa_privacy_agent
  reviewer:
    - frontend_agent
    - backend_privacy_agent
  status: not_started
  objective: >
    Prove that analytics events remain manual and privacy-safe, that no name/phone/email/Zalo
    or free-text/case-summary fields enter analytics or logs, and that session replay stays disabled
    across the MVP surface.
  source_docs:
    - AGENTS.md
    - doc/anluat_project_harness.md
    - doc/anluat_live_tasks.md
    - doc/anluat_release_gates.md
    - doc/anluat_sprint_0_poc_setup_plan.md
    - doc/anluat_sprint_0_poc_report.md
    - doc/anluat_data_model_privacy_safe_lead_spec.md
    - doc/anluat_content_copy_decision_tree_spec.md
    - doc/anluat_agent2ui_technical_contract.md
    - doc/anluat_qa_test_plan_acceptance_matrix.md
    - doc/agent_roles/qa_privacy_agent.md
    - doc/agent_roles/frontend_agent.md
    - doc/agent_roles/backend_privacy_agent.md
  required_context:
    - Analytics may contain enums, taxonomy, and whitelisted event metadata only.
    - Logs must not contain raw case summary or sensitive case detail.
    - Session replay is disabled site-wide in MVP, including sensitive family/intake surfaces.
    - Agent2UI request shape must remain free of raw PII and raw case summary.
  inputs:
    - allowed_event_fixture
    - forbidden_keys_fixture
    - pii_pattern_fixture
    - free_text_fixture
    - synthetic_log_search_fixture
    - synthetic_session_replay_config_fixture
  expected_outputs:
    - Sanitizer allowlist or rejection matrix for analytics payloads.
    - Evidence showing forbidden PII keys and free text are removed or blocked.
    - Evidence showing Edge/log surfaces do not contain raw case summary.
    - Evidence showing session replay is disabled on MVP surfaces.
  acceptance_criteria:
    - no_name_phone_email_zalo_in_analytics
    - no_case_summary_in_logs
    - no_session_replay
  evidence_required:
    - before_after_analytics_payload_records
    - forbidden_field_detection_results
    - log_scan_result_for_case_summary_absence
    - session_replay_disabled_configuration_evidence
    - note_confirming_no_PII_or_free_text_in_agent_request_fixture
  dependencies:
    - S0-006_for_data_boundary_validation
    - S0-009_for_agent2ui_event_shape
  forbidden_scope:
    - no_real_provider_enablement_required
    - no_session_replay_for_debugging
    - no_case_summary_logging_for_test_convenience
  fallback_if_fail:
    - block_MVP_A_until_fixed
    - disable_analytics_until_sanitizer_passes
    - block_sensitive_flows_if_logs_are_not_clean
  output_artifact:
    - doc/anluat_sprint_0_poc_report.md
    - pass_fail_evidence_bundle_for_S0_010
  files_or_surfaces_owned:
    - privacy analytics evidence
    - log-boundary evidence
  report_update_target:
    - poc_matrix.privacy.no_name_phone_email_zalo_in_analytics
    - poc_matrix.privacy.no_case_summary_in_logs
    - poc_matrix.privacy.no_session_replay
  recommended_next_step: >
    If passed, freeze the analytics boundary and proceed to S0-011 or S0-012 integration reporting.
    If failed, identify whether the leak is payload shape, log transport, or provider config and keep MVP-A blocked.
  suggested_model: GPT-5.4
  suggested_reasoning: High
```

### S0-011

```yaml
task_packet:
  task_id: S0-011
  title: Sanity to Astro content render POC
  mvp_lane: Sprint-0-POC
  priority: P0_blocker
  blocker_type: mvp_a_blocker
  owner: cms_seo_agent
  reviewer:
    - frontend_agent
    - qa_privacy_agent
  status: not_started
  objective: >
    Prove that core public content can flow from Sanity into Astro service pages safely, that FAQ
    JSON-LD is emitted only when visible and human-reviewed, and that Sanity remains limited to public
    content rather than lead, case, payment, or booking data.
  source_docs:
    - AGENTS.md
    - doc/anluat_project_harness.md
    - doc/anluat_live_tasks.md
    - doc/anluat_release_gates.md
    - doc/anluat_sprint_0_poc_setup_plan.md
    - doc/anluat_sprint_0_poc_report.md
    - doc/anluat_content_copy_decision_tree_spec.md
    - doc/anluat_visual_tokens_asset_brief.md
    - doc/anluat_cms_content_model_ai_ready_seo_schema_spec.md
    - doc/anluat_qa_test_plan_acceptance_matrix.md
    - doc/agent_roles/cms_seo_agent.md
    - doc/agent_roles/frontend_agent.md
    - doc/agent_roles/qa_privacy_agent.md
  required_context:
    - Sanity is source of truth for public content only.
    - Service pages need structured public content that Astro can render.
    - FAQ schema is optional and only allowed when content is visible and humanReviewed=true.
    - Client proof and similar public artifacts require explicit publication permission.
  inputs:
    - published_service_page_fixture
    - faq_human_reviewed_true_fixture
    - faq_human_reviewed_false_fixture
    - forbidden_sensitive_schema_fixture
    - synthetic_client_proof_permission_fixture
  expected_outputs:
    - Core service-page render proof from Sanity-shaped content.
    - Eligibility proof for visible and human-reviewed FAQ JSON-LD only.
    - Boundary proof that unsafe content types or operational data do not belong in Sanity public model.
  acceptance_criteria:
    - service_page_renders
    - FAQ_schema_only_visible_and_human_reviewed
    - Sanity_public_content_only
  evidence_required:
    - service_page_render_record_or_snapshot
    - FAQ_JSON_LD_present_when_visible_and_humanReviewed_true
    - FAQ_JSON_LD_absent_when_not_visible_or_not_humanReviewed
    - schema_boundary_note_showing_no_lead_case_payment_booking_data_in_public_content_model
    - client_proof_permission_check_note_if_fixture_used
  dependencies: []
  forbidden_scope:
    - no_full_CMS_build
    - no_private_operational_data_in_Sanity
    - no_hidden_FAQ_markup
    - no_payment_or_booking_content_enablement
  fallback_if_fail:
    - block_MVP_A_until_fixed
    - use_static_content_for_debug_only
    - disable_FAQ_JSON_LD_until_eligibility_rules_are_correct
  output_artifact:
    - doc/anluat_sprint_0_poc_report.md
    - pass_fail_evidence_bundle_for_S0_011
  files_or_surfaces_owned:
    - public content render evidence
    - FAQ schema eligibility evidence
  report_update_target:
    - poc_matrix.cms.sanity_to_astro_render
    - poc_matrix.cms.faq_schema_visible_human_reviewed
    - poc_matrix.cms.sanity_public_content_only
  recommended_next_step: >
    If passed, mark content rendering assumptions ready for scaffold planning.
    If failed, isolate whether the fault is content model shape, render contract, or schema eligibility logic and keep MVP-A blocked.
  suggested_model: GPT-5.4
  suggested_reasoning: High
```

## Open Issues

```yaml
open_issues:
  - id: OI-001
    severity: medium
    issue: doc/anluat_content_copy_decision_tree_spec.md still names cms_content_agent, but current topology uses cms_seo_agent.
    impact: Content delegation can drift if future packets quote the older role name.
    action: Normalize role naming in the content spec before content implementation packets are generated.

  - id: OI-002
    severity: medium
    issue: doc/anluat_visual_tokens_asset_brief.md contains negative letter_spacing values, which conflicts with the higher-priority UI rule used in this environment.
    impact: Frontend implementation may follow an invalid typography token source unless clarified.
    action: PO/design/frontend should decide whether to revise the visual brief or document an exception before visual implementation packets.
```

## Machine-Readable Summary

```json
{
  "wave_id": "wave_1_foundations",
  "task_packets_created": ["S0-006", "S0-007", "S0-008", "S0-009", "S0-010", "S0-011"],
  "mvp_a_blockers": ["S0-006", "S0-007", "S0-008", "S0-009", "S0-010", "S0-011"],
  "mvp_b_gates_in_wave": [],
  "report_targets_added_or_confirmed": [
    "poc_matrix.supabase.public_insert_only",
    "poc_matrix.supabase.no_public_read",
    "poc_matrix.supabase.service_role_only_sensitive_read",
    "poc_matrix.supabase.sensitive_access_audited",
    "poc_matrix.quick_exit.works_before_react_hydration",
    "poc_matrix.quick_exit.pointerdown_capture",
    "poc_matrix.quick_exit.direct_dom_replacement",
    "poc_matrix.quick_exit.history_replace",
    "poc_matrix.agent2ui.reject_unknown_component",
    "poc_matrix.agent2ui.reject_unknown_action",
    "poc_matrix.agent2ui.reject_raw_html_script",
    "poc_matrix.agent2ui.fallback_secretary_review",
    "poc_matrix.privacy.no_name_phone_email_zalo_in_analytics",
    "poc_matrix.privacy.no_case_summary_in_logs",
    "poc_matrix.privacy.no_session_replay",
    "poc_matrix.cms.sanity_to_astro_render",
    "poc_matrix.cms.faq_schema_visible_human_reviewed",
    "poc_matrix.cms.sanity_public_content_only"
  ],
  "recommended_next_step": "Generate owner-ready task packets or execution checklists for each specialist agent and begin Wave 1 evidence collection in the defined order."
}
```

# An Luat Live Task Board

```yaml
document_id: anluat_live_tasks
version: 1.1
status: active_task_ledger
language: vi-VN
last_updated: 2026-06-04
```

## 1. Board Rules

```yaml
task_board_rules:
  status_values:
    - not_started
    - in_progress
    - blocked
    - ready_for_review
    - passed
    - failed
    - deferred

  scope_values:
    - phase_2_triage_rebuild
    - sprint_0_poc
    - mvp_a
    - mvp_b_gated
    - post_mvp

  priority_values:
    - P0_blocker
    - P1_must
    - P2_should
    - P3_later

  update_rule:
    - Every active task needs one owner.
    - Every POC task needs pass/fail evidence.
    - Every failed POC needs fallback and MVP recommendation impact.
    - Every next action should carry a suggested model and reasoning level when possible.
    - Every UX-facing task should state one primary user decision for that screen.
    - Less Is More applies: prefer fewer CTAs, fewer competing blocks and less duplicate copy per screen.
```

## 2. Sprint 0 POC Tasks

```yaml
sprint_0_tasks:
  - id: S0-001
    title: payOS create payment link POC
    scope: sprint_0_poc
    owner: payment_booking_agent
    priority: P0_blocker
    status: not_started
    acceptance:
      - create_payment_link
      - store_payment_link_id_or_checkout_url
      - payment_description_has_no_case_details
    evidence_report_path: poc_matrix.payos.create_payment_link
    fallback:
      - use_payos_http_api
      - defer_MVP_B

  - id: S0-002
    title: payOS verified webhook POC
    scope: sprint_0_poc
    owner: payment_booking_agent
    priority: P0_blocker
    status: not_started
    acceptance:
      - verify_webhook
      - reject_invalid_signature
      - verify_order_code
      - verify_amount
      - amount_mismatch_no_booking
    evidence_report_path:
      - poc_matrix.payos.verify_webhook
      - poc_matrix.payos.reject_invalid_signature
    fallback:
      - defer_MVP_B
      - manual_payment_resolution

  - id: S0-003
    title: payOS duplicate webhook idempotency POC
    scope: sprint_0_poc
    owner: payment_booking_agent
    priority: P0_blocker
    status: not_started
    acceptance:
      - duplicate_webhook_does_not_double_update
      - duplicate_webhook_does_not_create_duplicate_booking
    evidence_report_path: poc_matrix.payos.idempotent_duplicate_webhook

  - id: S0-004
    title: Cal.com availability POC
    scope: sprint_0_poc
    owner: payment_booking_agent
    priority: P0_blocker
    status: not_started
    acceptance:
      - fetch_availability
      - no_Cal_secret_exposed
      - slot_shape_defined_for_frontend
    evidence_report_path: poc_matrix.calcom.fetch_availability

  - id: S0-005
    title: Cal.com booking after payment success POC
    scope: sprint_0_poc
    owner: payment_booking_agent
    priority: P0_blocker
    status: not_started
    acceptance:
      - create_booking_after_payment_success
      - handle_slot_unavailable
      - no_duplicate_booking
    evidence_report_path:
      - poc_matrix.calcom.create_booking_after_payment_success
      - poc_matrix.calcom.handle_slot_unavailable
      - poc_matrix.calcom.no_duplicate_booking

  - id: S0-006
    title: Supabase RLS public insert-only POC
    scope: sprint_0_poc
    owner: backend_privacy_agent
    reviewer: qa_privacy_agent
    priority: P0_blocker
    status: passed
    task_packet_source: doc/anluat_sprint_0_wave_1_foundations_task_packets.md#s0-006
    execution_checklist_source: doc/anluat_sprint_0_wave_1_execution_checklist.md#s0-006
    reference_docs:
      - doc/anluat_data_model_privacy_safe_lead_spec.md
    acceptance:
      - public_insert_only
      - no_public_read
      - service_role_only_sensitive_read
    evidence_report_path:
      - poc_matrix.supabase.public_insert_only
      - poc_matrix.supabase.no_public_read
      - poc_matrix.supabase.service_role_only_sensitive_read

  - id: S0-007
    title: Supabase audit for sensitive access POC
    scope: sprint_0_poc
    owner: backend_privacy_agent
    reviewer: qa_privacy_agent
    priority: P0_blocker
    status: passed
    task_packet_source: doc/anluat_sprint_0_wave_1_foundations_task_packets.md#s0-007
    execution_checklist_source: doc/anluat_sprint_0_wave_1_execution_checklist.md#s0-007
    reference_docs:
      - doc/anluat_data_model_privacy_safe_lead_spec.md
    acceptance:
      - sensitive_access_audited
      - actor_role_recorded
      - entity_id_recorded
    evidence_report_path: poc_matrix.supabase.sensitive_access_audited

  - id: S0-008
    title: Quick Exit pre-hydration POC
    scope: sprint_0_poc
    owner: frontend_agent
    reviewer: qa_privacy_agent
    priority: P0_blocker
    status: passed
    task_packet_source: doc/anluat_sprint_0_wave_1_foundations_task_packets.md#s0-008
    execution_checklist_source: doc/anluat_sprint_0_wave_1_execution_checklist.md#s0-008
    reference_docs:
      - doc/anluat_ui_direction_agent2ui_spec.md
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_visual_tokens_asset_brief.md
    acceptance:
      - works_before_react_hydration
      - pointerdown_capture
      - direct_dom_replacement
      - history_replace
    evidence_report_path:
      - poc_matrix.quick_exit.works_before_react_hydration
      - poc_matrix.quick_exit.pointerdown_capture
      - poc_matrix.quick_exit.direct_dom_replacement
      - poc_matrix.quick_exit.history_replace

  - id: S0-009
    title: Agent2UI renderer rejection POC
    scope: sprint_0_poc
    owner: frontend_agent
    reviewer:
      - backend_privacy_agent
      - qa_privacy_agent
    priority: P0_blocker
    status: passed
    task_packet_source: doc/anluat_sprint_0_wave_1_foundations_task_packets.md#s0-009
    execution_checklist_source: doc/anluat_sprint_0_wave_1_execution_checklist.md#s0-009
    reference_docs:
      - doc/anluat_agent2ui_technical_contract.md
      - doc/anluat_ui_direction_agent2ui_spec.md
      - doc/anluat_content_copy_decision_tree_spec.md
    acceptance:
      - reject_unknown_component
      - reject_unknown_action
      - reject_raw_html_script
      - fallback_secretary_review
    evidence_report_path:
      - poc_matrix.agent2ui.reject_unknown_component
      - poc_matrix.agent2ui.reject_unknown_action
      - poc_matrix.agent2ui.reject_raw_html_script
      - poc_matrix.agent2ui.fallback_secretary_review

  - id: S0-010
    title: Privacy analytics sanitizer POC
    scope: sprint_0_poc
    owner: qa_privacy_agent
    reviewer:
      - frontend_agent
      - backend_privacy_agent
    priority: P0_blocker
    status: passed
    task_packet_source: doc/anluat_sprint_0_wave_1_foundations_task_packets.md#s0-010
    execution_checklist_source: doc/anluat_sprint_0_wave_1_execution_checklist.md#s0-010
    reference_docs:
      - doc/anluat_data_model_privacy_safe_lead_spec.md
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_agent2ui_technical_contract.md
    acceptance:
      - no_name_phone_email_zalo_in_analytics
      - no_case_summary_in_logs
      - no_session_replay
    evidence_report_path:
      - poc_matrix.privacy.no_name_phone_email_zalo_in_analytics
      - poc_matrix.privacy.no_case_summary_in_logs
      - poc_matrix.privacy.no_session_replay

  - id: S0-011
    title: Sanity to Astro content render POC
    scope: sprint_0_poc
    owner: cms_seo_agent
    priority: P0_blocker
    status: passed
    task_packet_source: doc/anluat_sprint_0_wave_1_foundations_task_packets.md#s0-011
    execution_checklist_source: doc/anluat_sprint_0_wave_1_execution_checklist.md#s0-011
    reviewer:
      - frontend_agent
      - qa_privacy_agent
    reference_docs:
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_cms_content_model_ai_ready_seo_schema_spec.md
    acceptance:
      - service_page_renders
      - FAQ_schema_only_visible_and_human_reviewed
      - Sanity_public_content_only
    evidence_report_path:
      - poc_matrix.cms.sanity_to_astro_render
      - poc_matrix.cms.faq_schema_visible_human_reviewed
      - poc_matrix.cms.sanity_public_content_only

  - id: S0-012
    title: Sprint 0 POC report
    scope: sprint_0_poc
    owner: lead_integrator
    priority: P0_blocker
    status: in_progress
    acceptance:
      - pass_fail_matrix_complete
      - risks_after_poc_listed
      - fallback_for_failed_items
      - mvp_a_or_b_recommendation
      - revised_timeline
    evidence_report_path:
      - sprint_0_summary
      - risks_after_poc
      - fallback_decision
      - final_recommendation
```

## 2.1 Harness Setup Tasks

```yaml
harness_setup_tasks:
  - id: H-001
    title: Create root agent instruction file
    scope: mvp_a
    owner: lead_integrator
    priority: P1_must
    status: passed
    output:
      - AGENTS.md

  - id: H-002
    title: Create project harness
    scope: mvp_a
    owner: lead_integrator
    priority: P1_must
    status: passed
    output:
      - doc/anluat_project_harness.md

  - id: H-003
    title: Create multi-agent operating model and role cards
    scope: mvp_a
    owner: lead_integrator
    priority: P1_must
    status: passed
    output:
      - doc/anluat_multi_agent_operating_model.md
      - doc/agent_roles/

  - id: H-004
    title: Create live task board
    scope: mvp_a
    owner: lead_integrator
    priority: P1_must
    status: passed
    output:
      - doc/anluat_live_tasks.md

  - id: H-005
    title: Create release gate and waiver templates
    scope: mvp_a
    owner: lead_integrator
    priority: P1_must
    status: passed
    output:
      - doc/anluat_release_gates.md
      - doc/anluat_waivers.md

  - id: H-006
    title: Create Sprint 0 POC report template
    scope: sprint_0_poc
    owner: lead_integrator
    priority: P0_blocker
    status: passed
    output:
      - doc/anluat_sprint_0_poc_report.md

  - id: H-007
    title: Create repo scaffold manifest
    scope: mvp_a
    owner: lead_integrator
    priority: P2_should
    status: passed
    output:
      - doc/anluat_repo_scaffold_manifest.md

  - id: H-008
    title: Create task packet template
    scope: mvp_a
    owner: lead_integrator
    priority: P1_must
    status: passed
    output:
      - doc/anluat_task_packet_template.md
```

## 3. MVP-A Build Tasks

```yaml
mvp_a_tasks:
  - id: A-001
    title: Initialize Astro shell and routing
    owner: frontend_agent
    priority: P1_must
    status: passed
    reference_docs:
      - doc/anluat_visual_tokens_asset_brief.md
      - doc/anluat_design_system_tokens_component_spec.md
    acceptance:
      - home_route_renders
      - base_layout_uses_tokens
      - static_build_works

  - id: A-002
    title: Implement homepage 5 intake doors
    owner: frontend_agent
    priority: P1_must
    status: passed
    reference_docs:
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_visual_tokens_asset_brief.md
    acceptance:
      - five_doors_visible
      - mobile_first_action_visible
      - privacy_safe_click_event_only

  - id: A-003
    title: Build 1 GIO GAP NHU landing page
    owner: frontend_agent
    priority: P1_must
    status: passed
    reference_docs:
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_visual_tokens_asset_brief.md
    acceptance:
      - no_public_price
      - CTA_opens_intake
      - first_action_above_fold

  - id: A-004
    title: Implement zero-typing intake flow
    owner: frontend_agent
    priority: P1_must
    status: not_started
    reference_docs:
      - doc/anluat_content_copy_decision_tree_spec.md
    acceptance:
      - no_typing_before_contact
      - branch_by_legal_area
      - document_possession_flag_only
      - no_document_upload

  - id: A-005
    title: Implement submit-intake Edge Function
    owner: backend_privacy_agent
    priority: P1_must
    status: not_started
    acceptance:
      - validates_payload
      - separates_contact_and_sensitive_data
      - creates_consent_record
      - does_not_log_request_body

  - id: A-006
    title: Implement deterministic Agent2UI router
    owner: backend_privacy_agent
    priority: P1_must
    status: not_started
    reference_docs:
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_agent2ui_technical_contract.md
    acceptance:
      - routes_family_child_custody
      - routes_domestic_violence_to_safety_notice
      - routes_complex_cases_to_secretary_review
      - no_LLM

  - id: A-007
    title: Implement Agent2UI allowlist renderer
    owner: frontend_agent
    priority: P1_must
    status: not_started
    acceptance:
      - response_schema_validated
      - unknown_component_rejected
      - unknown_action_rejected
      - safe_fallback_rendered

  - id: A-008
    title: Implement secretary review queue
    owner: backend_privacy_agent
    priority: P1_must
    status: not_started
    acceptance:
      - queue_by_status_urgency_legal_area
      - contact_view_requires_auth
      - sensitive_view_audited

  - id: A-009
    title: Implement minimal operations dashboard
    owner: frontend_agent
    priority: P1_must
    status: not_started
    acceptance:
      - lead_queue_visible
      - lead_detail_privacy_gating
      - callback_attempt_logging

  - id: A-010
    title: Implement preparation checklist
    owner: cms_seo_agent
    priority: P1_must
    status: not_started
    reference_docs:
      - doc/anluat_content_copy_decision_tree_spec.md
    acceptance:
      - family_labor_business_dispute_checklists
      - no_user_text_echo
      - agentSafe_content_only

  - id: A-011
    title: Implement privacy-safe analytics
    owner:
      - frontend_agent
      - backend_privacy_agent
    reviewer: qa_privacy_agent
    priority: P1_must
    status: not_started
    acceptance:
      - manual_events_only
      - no_PII
      - no_free_text
      - session_replay_disabled_site_wide

  - id: A-012
    title: Implement reduced Sanity schema
    owner: cms_seo_agent
    priority: P1_must
    status: not_started
    reference_docs:
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_cms_content_model_ai_ready_seo_schema_spec.md
    acceptance:
      - service_page
      - landing_page
      - service_package
      - faq_item_and_group
      - attorney_profile
      - preparation_checklist
      - client_proof_permission

  - id: A-013
    title: Implement old URL redirects
    owner: cms_seo_agent
    priority: P2_should
    status: not_started
    acceptance:
      - high_value_old_urls_mapped
      - redirect_status_defined

  - id: A-014
    title: Define intake door source in shared code config
    owner:
      - backend_privacy_agent
      - frontend_agent
    priority: P1_must
    status: passed
    reference_docs:
      - doc/anluat_content_copy_decision_tree_spec.md
    acceptance:
      - intake_door_source_is_packages_contracts_or_shared_code_config
      - reduced_Sanity_schema_preserved
      - post_MVP_option_to_move_microcopy_to_Sanity_documented
```

## 4. MVP-B Gated Tasks

```yaml
mvp_b_gated_tasks:
  inclusion_requires:
    - S0-001_passed
    - S0-002_passed
    - S0-003_passed
    - S0-004_passed
    - S0-005_passed
    - PO_approval

  tasks:
    - id: B-001
      title: Implement booking intent and slot lock
      owner: payment_booking_agent
      priority: P1_must_if_MVP_B
      status: deferred
      acceptance:
        - booking_intent_created
        - slot_lock_expires
        - duplicate_slot_lock_handled

    - id: B-002
      title: Implement payOS payment link function
      owner: payment_booking_agent
      priority: P1_must_if_MVP_B
      status: deferred
      acceptance:
        - payment_link_created
        - checkout_url_stored
        - description_has_no_case_details

    - id: B-003
      title: Implement payOS webhook processor
      owner: payment_booking_agent
      priority: P1_must_if_MVP_B
      status: deferred
      acceptance:
        - signature_verified
        - amount_verified
        - order_code_verified
        - duplicate_webhook_idempotent

    - id: B-004
      title: Implement Cal.com booking creation
      owner: payment_booking_agent
      priority: P1_must_if_MVP_B
      status: deferred
      acceptance:
        - only_after_verified_payment_success
        - recheck_slot
        - no_duplicate_booking

    - id: B-005
      title: Implement payment resolution queue
      owner: backend_privacy_agent
      priority: P1_must_if_MVP_B
      status: deferred
      acceptance:
        - late_payment_routes_to_resolution
        - booking_failure_after_payment_routes_urgent
        - amount_mismatch_does_not_book
```

## 5. Deferred Post-MVP Tasks

```yaml
post_mvp_deferred:
  - id: D-001
    title: Full Legal Health Score
    status: deferred

  - id: D-002
    title: Full Legal Safety Map
    status: deferred

  - id: D-003
    title: Official document upload
    status: deferred

  - id: D-004
    title: LLM-assisted Agent2UI refinement
    status: deferred

  - id: D-005
    title: Advanced CRM and operations dashboard
    status: deferred

  - id: D-006
    title: Full Sanity schema set
    status: deferred
```

## 6. Current Immediate Next Actions

```yaml
next_actions:
  - id: NEXT-001
    owner: lead_integrator
    action: Incorporate review refinements into harness, gates and task packets.
    status: passed

  - id: NEXT-002
    owner: lead_integrator
    action: After approval, start Sprint 0 POC setup plan and assign owners.
    status: passed
    suggested_model: GPT-5.4
    suggested_reasoning: High

  - id: NEXT-004
    owner: lead_integrator
    action: Start Sprint 0 wave 1 execution checklist and keep scaffold blocked until all MVP-A blockers are resolved.
    status: passed
    suggested_model: GPT-5.4
    suggested_reasoning: High

  - id: NEXT-005
    owner: lead_integrator
    action: Normalize the production scaffold to manifest structure, rerun S0-006 to S0-011, and preserve the Wave 1 regression harness.
    status: passed
    suggested_model: GPT-5.4
    suggested_reasoning: High

  - id: NEXT-006
    owner: lead_integrator
    action: Prepare reviewed production scaffold handoff before opening MVP-A implementation backlog.
    status: passed
    suggested_model: GPT-5.4
    suggested_reasoning: High

  - id: NEXT-007
    owner: lead_integrator
    action: Create the implementation kickoff packet for the first approved MVP-A backlog slice on top of the reviewed scaffold.
    status: passed
    output:
      - doc/anluat_mvp_a_implementation_kickoff_packet.md
    suggested_model: GPT-5.4
    suggested_reasoning: High

  - id: NEXT-008
    owner: lead_integrator
    action: After packet approval, start MVP-A slice 1 implementation for shell, shared intake doors, homepage skeleton, and 1 GIO GAP NHU landing skeleton.
    status: ready_for_review
    note: implementation_complete_commit_held_pending_visual_rescue_review
    suggested_model: GPT-5.4
    suggested_reasoning: High

  - id: NEXT-008A
    owner: lead_integrator
    action: Rescue the public-facing visual quality of MVP-A slice 1 before allowing the implementation commit.
    status: passed
    output:
      - apps/web/src/layouts/RootLayout.astro
      - apps/web/src/styles/tokens.css
      - apps/web/src/pages/index.astro
      - apps/web/src/pages/1-gio-gap-nhu.astro
      - apps/web/src/pages/bat-dau.astro
      - tests/poc/output/home-desktop.png
      - tests/poc/output/home-mobile.png
      - tests/poc/output/one-hour-desktop.png
      - tests/poc/output/intake-shell-desktop.png
    suggested_model: GPT-5.4
    suggested_reasoning: High

  - id: NEXT-009
    owner: lead_integrator
    action: Prepare the next MVP-A packet for zero-typing intake shell, submit-intake backend, and privacy-safe analytics wiring.
    status: not_started
    suggested_model: GPT-5.4
    suggested_reasoning: High

  - id: NEXT-010
    owner: lead_integrator
    action: Write a complete homepage design packet for Dandatto Studio handoff.
    status: passed
    output:
      - doc/anluat_homepage_design_packet_for_dandatto_studio.md
    suggested_model: GPT-5.4
    suggested_reasoning: High

  - id: NEXT-003
    owner: lead_integrator
    action: Do not commit final build timeline before Sprint 0 POC report.
    status: active_rule
    suggested_model: GPT-5.4
    suggested_reasoning: High
```

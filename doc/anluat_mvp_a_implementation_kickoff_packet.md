# MVP-A Implementation Kickoff Packet

```yaml
document_id: anluat_mvp_a_implementation_kickoff_packet
version: 1.0
status: ready_for_review
language: vi-VN
last_updated: 2026-06-03
scope_lane: MVP-A
packet_id: NEXT-007
packet_type: implementation_kickoff
branch_context: poc/wave-1-foundations-surface
package_manager: pnpm
```

## 1. Objective

Packet này chốt backlog slice MVP-A đầu tiên để bắt đầu implementation trên scaffold đã review, nhưng chưa mở sang intake đầy đủ, payment, booking, LLM, upload, hay ops dashboard.

```yaml
objective:
  primary_goal:
    - production_ready_astro_shell_in_apps_web
    - design_tokens_base_wired_into_shell
    - homepage_skeleton_with_5_intake_doors_from_shared_code_config
    - one_hour_with_nhu_landing_skeleton
    - keep_quick_exit_inline_vanilla_js_as_non_negotiable
  success_definition:
    - slice_can_ship_foundational_ui_shell_without_scope_expansion
    - pnpm_run_test_poc_wave_1_remains_green
    - no_payment_ui_no_llm_no_document_upload_added
```

## 2. Confirmed Baseline Từ Sprint 0 Wave 1

```yaml
confirmed_baseline:
  sprint_0_status:
    S0-006: pass
    S0-007: pass
    S0-008: pass
    S0-009: pass
    S0-010: pass
    S0-011: pass
  normalization_status: pass
  branch: poc/wave-1-foundations-surface
  commits:
    - b5e28d1
    - f85b046
    - 132f0d4
  locked_rules:
    - MVP-A_is_default
    - MVP-B_payment_booking_remains_gated
    - Quick_Exit_stays_inline_vanilla_js_before_hydration
    - no_PII_or_free_text_in_analytics
    - session_replay_disabled_site_wide
    - Agent2UI_stays_deterministic_allowlist_only
    - Sanity_public_content_only
    - pnpm_run_test_poc_wave_1_is_regression_gate
  current_repo_shape:
    - apps/web
    - packages/contracts
    - supabase
    - sanity
    - tests/poc
```

## 3. Scope MVP-A Implementation Slice Đầu Tiên

Slice này chỉ mở phần shell và entry surfaces đầu tiên.

```yaml
implementation_slice_1:
  includes:
    - A-001_production_ready_astro_shell_and_routing
    - A-014_shared_intake_door_source_in_shared_code_config
    - A-002_homepage_5_intake_doors_skeleton
    - A-003_one_hour_with_nhu_landing_skeleton
  embedded_deliverables_inside_slice:
    - base_design_tokens_from_visual_tokens_brief
    - root_layout_preserves_quick_exit
    - homepage_and_landing_use_content_copy_spec
    - no_public_price_on_landing
    - no_typing_form_on_homepage
  defer_inside_this_slice:
    - full_zero_typing_intake_logic
    - submit_intake_edge_function
    - deterministic_agent2ui_router_runtime
    - allowlist_renderer_ui
    - secretary_queue_and_ops_dashboard
    - reduced_sanity_schema_expansion_beyond_current_poc_need
```

## 4. Out Of Scope

```yaml
out_of_scope:
  - no_payos
  - no_calcom
  - no_payment_ui
  - no_llm
  - no_document_upload
  - no_full_intake_flow
  - no_submit_intake_backend
  - no_secretary_queue_ui
  - no_ops_dashboard
  - no_remote_attach
  - no_push
  - no_scope_change_to_MVP_B
```

## 5. Task List Đề Xuất

```yaml
slice_task_list:
  - task_id: A-001
    title: Production-ready Astro shell and routing in apps/web
    classification: mvp_a_blocker
    note: >
      Includes base layout hardening, route cleanup, token wiring baseline, and preserving
      the Sprint 0 Quick Exit safety surface.

  - task_id: A-014
    title: Define 5 intake doors in shared code/config
    classification: mvp_a_blocker
    note: >
      Door definitions must live in shared code/config, not in Sanity, and must be consumable
      by homepage and later intake flow.

  - task_id: A-002
    title: Homepage skeleton with 5 intake doors
    classification: mvp_a_blocker
    note: >
      This is the first user-facing command-center shell, not the final intake implementation.

  - task_id: A-003
    title: 1 GIO GAP NHU landing skeleton
    classification: mvp_a_blocker
    note: >
      CTA may open an intake entry shell or approved placeholder route, but must not imply
      payment or full intake completion in this slice.

  - task_id: A-012
    title: Reduced Sanity schema expansion
    classification: defer
    note: >
      Defer unless the homepage or landing skeleton cannot proceed with code-based copy plus
      current mockable content boundary.

  - task_id: A-004
    title: Full zero-typing intake flow
    classification: defer

  - task_id: A-005
    title: submit-intake Edge Function
    classification: defer

  - task_id: A-006
    title: Deterministic Agent2UI router runtime
    classification: defer

  - task_id: A-007
    title: Agent2UI allowlist renderer UI
    classification: defer
```

## 6. Owner / Reviewer Cho Từng Task

```yaml
owner_reviewer_matrix:
  - task_id: A-001
    owner: frontend_agent
    reviewer:
      - qa_privacy_agent
      - lead_integrator

  - task_id: A-014
    owner:
      - backend_privacy_agent
      - frontend_agent
    reviewer:
      - lead_integrator

  - task_id: A-002
    owner: frontend_agent
    reviewer:
      - product_scope_agent
      - qa_privacy_agent

  - task_id: A-003
    owner: frontend_agent
    reviewer:
      - product_scope_agent
      - qa_privacy_agent

  - task_id: A-012
    owner: cms_seo_agent
    reviewer:
      - frontend_agent
      - lead_integrator
    status_default: deferred
```

## 7. Required Reference Docs

```yaml
required_reference_docs:
  core:
    - AGENTS.md
    - doc/anluat_project_harness.md
    - doc/anluat_live_tasks.md
    - doc/anluat_implementation_roadmap_mvp_backlog.md
    - doc/anluat_release_gates.md
    - doc/anluat_repo_scaffold_manifest.md
    - doc/anluat_sprint_0_poc_report.md
  task_specific:
    A-001:
      - doc/anluat_visual_tokens_asset_brief.md
      - doc/anluat_design_system_tokens_component_spec.md
      - doc/anluat_repo_scaffold_manifest.md
    A-014:
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_agent2ui_technical_contract.md
    A-002:
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_visual_tokens_asset_brief.md
    A-003:
      - doc/anluat_content_copy_decision_tree_spec.md
      - doc/anluat_visual_tokens_asset_brief.md
```

## 8. Dependencies

```yaml
dependencies:
  hard:
    - S0-006_to_S0-011_passed
    - S0-NORM_passed
    - pnpm_policy_locked
  task_level:
    A-001:
      depends_on:
        - S0-NORM_reviewed_scaffold
    A-014:
      depends_on:
        - packages_contracts_available
        - content_copy_decision_tree_confirmed
    A-002:
      depends_on:
        - A-001
        - A-014
    A-003:
      depends_on:
        - A-001
        - content_copy_decision_tree_confirmed
  soft:
    - optional_reduced_sanity_schema_if_copy_moves_out_of_code_earlier_than_expected
```

## 9. Acceptance Criteria

```yaml
acceptance_criteria:
  A-001:
    - apps_web_builds_via_pnpm
    - base_layout_or_root_layout_preserves_inline_quick_exit
    - homepage_route_and_1_gio_gap_nhu_route_render
    - visual_tokens_base_wired_without_arbitrary_palette_drift
    - no_payment_ui_or_llm_hooks_added

  A-014:
    - five_intake_doors_live_in_shared_code_config_not_sanity
    - door_config_matches_copy_spec_labels_helper_cta_and_default_route
    - door_config_contains_no_PII_no_free_text_fields
    - homepage_consumes_shared_config_without_local_duplication

  A-002:
    - five_doors_visible_on_homepage
    - first_mobile_action_visible_without_scroll
    - door_cards_use_visual_tokens_base
    - only_privacy_safe_manual_click_events_defined
    - no_typing_form_on_homepage

  A-003:
    - no_public_price_visible
    - first_action_above_fold
    - copy_comes_from_approved_content_spec
    - CTA_opens_intake_entry_shell_or_approved_placeholder
    - no_payment_or_booking_copy_present
```

## 10. Evidence Required

```yaml
evidence_required:
  shared_gate:
    - pnpm_run_test_poc_wave_1_output
    - pnpm_filter_anluat_web_build_output
    - git_diff_or_changed_file_list
  A-001:
    - apps_web_build_log
    - file_paths_for_layout_routes_tokens
    - proof_quick_exit_still_in_root_layout_html
  A-014:
    - shared_config_file_path
    - sample_config_excerpt_for_5_doors
    - proof_no_sanity_dependency_for_intake_door_source
  A-002:
    - mobile_and_desktop_screenshots
    - list_of_5_rendered_doors
    - analytics_event_payload_shape_showing_no_pii
  A-003:
    - landing_page_screenshots
    - proof_no_public_price
    - CTA_target_reference
```

## 11. Regression Tests Phải Giữ Chạy

```yaml
regression_gates:
  mandatory_before_closing_any_task_in_this_slice:
    - pnpm run test:poc:wave-1
    - pnpm run build:web
  must_remain_true:
    - quick_exit_inline_vanilla_js
    - no_public_read_sensitive_data
    - audited_sensitive_access
    - agent2ui_boundary_rejects_unknown_component_action_and_script
    - analytics_sanitizer_stays_clean
    - sanity_to_astro_mockable_render_boundary_stays_green
```

## 12. Risk / Open Issues

```yaml
risk_open_issues:
  - id: KI-001
    severity: medium
    issue: Manifest plans `apps/web/src/layouts/RootLayout.astro`, while the normalized scaffold currently uses `BaseLayout.astro`.
    handling: decide_naming_before_feature_code_do_not_silent_rename_mid_slice

  - id: KI-002
    severity: medium
    issue: Manifest plans `packages/design-system`, but current reviewed scaffold only has `packages/contracts`.
    handling: >
      Slice 1 should keep design tokens base in `apps/web` unless the team explicitly approves a
      minimal `packages/design-system` addition. Do not expand package topology silently.

  - id: KI-003
    severity: medium
    issue: A-003 acceptance says CTA opens intake, while this slice intentionally avoids full intake logic.
    handling: >
      Interpret the CTA as opening an intake entry shell or approved placeholder route only.
      Full branching intake belongs to A-004.

  - id: KI-004
    severity: low
    issue: `pnpm install` warns about ignored build scripts on fresh machines.
    handling: document_bootstrap_expectation_before_multi_machine_onboarding

  - id: KI-005
    severity: low
    issue: Remote is intentionally not attached yet.
    handling: keep_local_only_until_PO_or_repo_owner_opens_remote_workflow
```

## 13. Recommended Execution Order

```yaml
recommended_execution_order:
  phase_1_foundation:
    - A-001
    - A-014
  phase_2_user_facing_skeleton:
    - A-002
    - A-003
  phase_3_gate_and_review:
    - rerun_pnpm_run_test_poc_wave_1
    - rerun_pnpm_run_build_web
    - capture_mobile_desktop_screenshots
    - review_against_release_gates_and_copy_rules
  rationale:
    - shell_and_shared_config_must_exist_before_homepage_and_landing_consume_them
    - homepage_and_landing_can_move_without_opening_full_intake_backend
    - regression_must_hold_before_any_next_slice_is_authorized
```

## 14. Suggested Next Packet Boundary

```yaml
next_packet_boundary_after_slice_1_if_approved_and_completed:
  likely_scope:
    - A-004_zero_typing_intake_flow
    - A-005_submit_intake_edge_function
    - A-011_privacy_safe_analytics_wiring
  explicit_non_goal:
    - MVP-B_payment_or_booking
```

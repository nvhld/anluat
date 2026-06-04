# Multi-Agent Operating Model

```yaml
document_id: anluat_multi_agent_operating_model
version: 1.0
status: active
language: vi-VN
last_updated: 2026-06-03
```

## 1. Operating Principle

Nhiều agent chỉ nhanh hơn một agent khi ownership rõ, context nhỏ, và handoff sắc. Nếu không, nó chỉ là cuộc họp đông người nhưng ai cũng cầm bàn phím.

```yaml
multi_agent_principles:
  - One lead agent owns integration and final decisions.
  - Each worker owns a disjoint surface or file set.
  - Explorers answer bounded questions; they do not rewrite scope.
  - Review agents validate against gates, not personal preference.
  - No agent reads all docs unless explicitly assigned architecture review.
```

## 2. Agent Topology

```yaml
agent_topology:
  lead_integrator:
    role_card: doc/agent_roles/lead_integrator.md
    owns:
      - final_scope_classification
      - merge_order
      - cross_agent_conflicts
      - final_response

  product_scope_agent:
    role_card: doc/agent_roles/product_scope_agent.md
    owns:
      - MVP-A_vs_MVP-B_classification
      - client_decision_log
      - backlog_priority

  frontend_agent:
    role_card: doc/agent_roles/frontend_agent.md
    owns:
      - Astro_pages
      - React_islands
      - Quick_Exit
      - Agent2UI_renderer

  backend_privacy_agent:
    role_card: doc/agent_roles/backend_privacy_agent.md
    owns:
      - Supabase_schema
      - RLS
      - audit_logs
      - submit_intake
      - privacy_safe_analytics_backend

  cms_seo_agent:
    role_card: doc/agent_roles/cms_seo_agent.md
    owns:
      - Sanity_MVP_schema
      - content_seed
      - JSON_LD
      - redirects

  payment_booking_agent:
    role_card: doc/agent_roles/payment_booking_agent.md
    owns:
      - Sprint_0_payOS_POC
      - Sprint_0_Calcom_POC
      - MVP_B_only_payment_booking

  qa_privacy_agent:
    role_card: doc/agent_roles/qa_privacy_agent.md
    owns:
      - release_gates
      - POC_acceptance
      - privacy_tests
      - blocker_matrix
```

## 3. When To Spawn Agents

```yaml
spawn_rules:
  spawn_when:
    - task_has_disjoint_surface
    - result_can_arrive_in_parallel
    - output_is_concrete
    - ownership_is_clear

  do_not_spawn_when:
    - immediate_next_step_depends_on_it
    - task_requires_single_integrated_judgment
    - prompt_would_require_loading_all_docs_for_small_answer
    - write_scope_overlaps_existing_worker
```

## 4. Token-Saving Protocol

```yaml
token_policy:
  default_context:
    - AGENTS.md
    - doc/anluat_project_harness.md
    - one_role_card
    - one_or_two_task_specific_docs

  forbidden_default:
    - reading_all_doc_files
    - re-summarizing_full_specs
    - duplicating_explorer_work
    - asking_every_agent_to_make_a_plan

  handoff_format:
    max_lines: 20
    must_include:
      - decision
      - changed_files_or_none
      - acceptance_result
      - blocker_or_none
      - next_owner
  task_packet_template: doc/anluat_task_packet_template.md
```

## 5. Handoff Contracts

```yaml
handoff_contracts:
  product_to_frontend:
    includes:
      - user_flow
      - page_or_component_scope
      - must_not_expand
      - acceptance_copy

  frontend_to_backend:
    includes:
      - request_payload
      - response_payload
      - validation_rules
      - privacy_constraints

  backend_to_qa:
    includes:
      - state_machine
      - fixtures
      - expected_rejections
      - audit_events

  cms_to_frontend:
    includes:
      - query_shape
      - fallback_content
      - publish_rules
      - schema_visibility_constraints

  payment_to_ops:
    includes:
      - exception_status
      - resolution_owner
      - client_message_state
      - audit_event
```

## 6. Review Cadence

```yaml
review_cadence:
  daily_or_session_start:
    - Read live task board.
    - Confirm active blockers.
    - Assign one owner per active task.

  after_each_poc:
    - Update pass/fail.
    - Record fallback.
    - Update MVP-A or MVP-B recommendation.

  before_build_commitment:
    - Sprint 0 report complete.
    - PO chooses MVP-A or MVP-B.
    - Timeline revised.

  before_launch:
    - S0 blockers zero.
    - Unwaived S1 critical zero.
    - Privacy/security gates pass.
    - Waiver log reviewed.
```

## 7. Conflict Resolution

```yaml
conflict_resolution:
  scope_conflict:
    winner: latest_PO_decision_and_roadmap

  docs_conflict:
    winner_order:
      - AGENTS.md
      - doc/anluat_project_harness.md
      - doc/anluat_release_gates.md
      - doc/anluat_implementation_roadmap_mvp_backlog.md
      - task_specific_spec

  implementation_conflict:
    rule: lead_integrator_decides_after_reading_changed_files

  payment_scope_conflict:
    rule: MVP-A by default; MVP-B only after Sprint 0 POC pass and PO approval
```

# Sprint 0 Wave 1 Execution Checklist

```yaml
document_id: anluat_sprint_0_wave_1_execution_checklist
version: 1.0
status: passed
language: vi-VN
last_updated: 2026-06-03
wave_id: wave_1_foundations
scope_lane: Sprint-0-POC
all_tasks_are: mvp_a_blocker
production_scaffold_rule: normalized_wave_1_regression_must_pass_before_any_mvp_a_backlog_work
```

## Objective

Wave 1 chi xac minh cac blocker cua MVP-A. Khong mo payOS, Cal.com, payment UI, hay scaffold production app trong wave nay.

## Phase Order

```yaml
execution_phases:
  phase_1_parallel:
    status: passed
    tasks:
      - S0-006
      - S0-008
      - S0-011

  phase_2_after_S0_006:
    status: passed
    dependency: S0-006_boundary_clear
    tasks:
      - S0-007

  phase_3_frontend_security:
    status: passed
    tasks:
      - S0-009

  phase_4_after_S0_006_and_S0_009:
    status: passed
    tasks:
      - S0-010
```

## Task Execution Checklist

```yaml
wave_1_execution_checklist:
  - task_id: S0-006
    status: passed
    owner: backend_privacy_agent
    reviewer: qa_privacy_agent
    checklist:
      - confirm synthetic fixtures only
      - record actor_table_action policy matrix
      - prove public insert allowed for intake-safe shape only
      - prove public read denied for lead_contact_sensitive surfaces
      - prove service_role_only_sensitive_read remains backend-only
      - update poc report paths before closing task

  - task_id: S0-008
    status: passed
    owner: frontend_agent
    reviewer: qa_privacy_agent
    checklist:
      - prove inline vanilla JS path
      - prove works before React hydration
      - prove pointerdown capture
      - prove direct DOM replacement
      - prove history replace behavior
      - confirm no absolute privacy claim in copy
      - update poc report paths before closing task

  - task_id: S0-011
    status: passed
    owner: cms_seo_agent
    reviewer:
      - frontend_agent
      - qa_privacy_agent
    checklist:
      - prove service page renders from Sanity-shaped public content
      - prove FAQ JSON-LD only when visible and humanReviewed
      - prove Sanity public content boundary
      - confirm no lead_case_payment_booking data enters public CMS model
      - update poc report paths before closing task

  - task_id: S0-007
    status: passed
    owner: backend_privacy_agent
    reviewer: qa_privacy_agent
    checklist:
      - reuse S0-006 trusted boundary assumptions
      - prove sensitive access audited
      - prove actor_role recorded
      - prove entity_id recorded
      - update poc report path before closing task

  - task_id: S0-009
    status: passed
    owner: frontend_agent
    reviewer:
      - backend_privacy_agent
      - qa_privacy_agent
    checklist:
      - prove schema validation on valid and invalid payloads
      - prove unknown component rejected
      - prove unknown action rejected
      - prove raw HTML or script rejected
      - prove secretary review fallback
      - confirm no payment component render path in MVP-A
      - update poc report paths before closing task

  - task_id: S0-010
    status: passed
    owner: qa_privacy_agent
    reviewer:
      - frontend_agent
      - backend_privacy_agent
    checklist:
      - prove analytics whitelist or sanitizer boundary
      - prove no name_phone_email_zalo in analytics
      - prove no case summary in logs
      - prove no session replay
      - confirm no PII in Agent2UI request fixture
      - update poc report paths before closing task
```

## Evidence Discipline

```yaml
evidence_rules:
  - no_evidence_entry_may_say_tested_manually_looks_ok
  - every_evidence_entry_must_name_fixture_or_check_used
  - every_evidence_entry_must_land_in_doc_anluat_sprint_0_poc_report_md
  - failed_task_must_record_exact_broken_boundary_or_missing_assertion
  - do_not_mark_wave_complete_until_each_task_is_passed_or_failed
```

## Exit Rule

```yaml
wave_1_exit_rule:
  required_report:
    - pass_fail_per_task_S0_006_to_S0_011
    - evidence_path_per_task
    - remaining_blockers
    - scaffold_repo_readiness_decision
    - recommended_next_step
  success_condition:
    - all_wave_1_tasks_passed
  if_any_fail:
    - keep_scaffold_blocked
    - fix_or_formal_decision_required_before_production_path

  current_result:
    status: passed
    meaning: all_S0_006_to_S0_011_passed_for_wave_1_poc_surface_and_again_after_S0_NORM_path_normalization
```

## Open Issues

```yaml
open_issues:
  - id: OI-003
    issue: Root-level Astro scaffold mismatch was resolved during S0-NORM by moving the POC shell into `apps/web`.
    action: closed_in_S0_NORM

  - id: OI-004
    issue: Local git repository and branch `poc/wave-1-foundations-surface` now exist. Remote attachment remains intentionally out of scope in this phase.
    action: closed_for_S0_NORM_remote_still_pending_by_decision
```

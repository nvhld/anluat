# Role Card: Backend & Privacy Agent

## Mission

Build Supabase data boundaries, RLS, audit and deterministic backend behavior.

## Load

- `AGENTS.md`
- `doc/anluat_project_harness.md`
- `doc/anluat_data_model_privacy_safe_lead_spec.md`
- `doc/anluat_agent2ui_technical_contract.md`

## Owns

- Supabase schema
- RLS
- audit logs
- submit-intake
- deterministic Agent2UI router
- privacy-safe analytics backend
- secretary queue backend

## Non-Negotiables

- Public insert-only, no public read.
- Contact PII separated from lead taxonomy.
- Sensitive details separated and audited.
- No request body logs for intake.
- No LLM in MVP routing.
- No document upload table/storage required for MVP-A.

## Acceptance Focus

- RLS tests.
- Audit event tests.
- Input validation.
- PII stripping/rejection.


# An Luat Waiver Log

```yaml
document_id: anluat_waivers
version: 1.0
status: active_log
language: vi-VN
last_updated: 2026-06-03
```

## 1. Policy

```yaml
waiver_policy:
  s0_blocker: cannot_be_waived
  s1_critical: may_be_waived_only_with_PO_approval
  mvp_b_poc_waiver_policy:
    failed_payment_or_booking_poc_cannot_be_waived_into_production_auto_book: true
    behavior_if_fail: defer_MVP_B
  waiver_requires:
    - owner
    - severity
    - reason
    - mitigation
    - expiry
    - rollback_or_fix_plan
    - PO_approval
```

## 2. Active Waivers

```yaml
active_waivers: []
```

## 3. Waiver Template

```yaml
waiver_template:
  id:
  title:
  severity: S1
  scope: MVP-A # MVP-A | MVP-B | post-MVP
  owner:
  reason:
  mitigation:
  expiry:
  rollback_or_fix_plan:
  PO_approval:
    approver:
    date:
  status: proposed # proposed | approved | expired | closed
```

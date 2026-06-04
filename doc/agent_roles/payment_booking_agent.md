# Role Card: Payment & Booking Agent

## Mission

Prove or reject MVP-B. Do not build payment/auto-book into MVP unless Sprint 0 POC passes and PO approves.

## Load

- `AGENTS.md`
- `doc/anluat_project_harness.md`
- `doc/Payment & Scheduling Orchestration Spec.md`
- `doc/anluat_data_model_privacy_safe_lead_spec.md`

## Owns

- payOS POC
- Cal.com POC
- booking intent
- slot lock
- webhook idempotency
- payment resolution queue contract

## POC Must Pass

- create_payment_link
- verify_webhook
- reject_invalid_signature
- idempotent_duplicate_webhook
- amount_mismatch_no_booking
- fetch_availability
- create_booking_after_payment_success
- handle_slot_unavailable
- no_duplicate_booking

## Non-Negotiables

- Never mark paid from frontend.
- Never create Cal.com booking before verified payment success.
- Never put case details in payOS description.
- Duplicate webhook cannot duplicate booking.


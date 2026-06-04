# Repo Scaffold Manifest

```yaml
document_id: anluat_repo_scaffold_manifest
version: 1.0
status: planned
language: vi-VN
last_updated: 2026-06-03
```

## 1. Purpose

Repo hiện tại là documentation-first. File này định nghĩa scaffold nên tạo khi bắt đầu implementation để tránh app code mọc tự phát.

## 2. Planned Structure

```yaml
repo_scaffold:
  root:
    - package.json
    - pnpm-workspace.yaml
    - tsconfig.base.json
    - playwright.config.ts
    - .env.example
    - AGENTS.md

  apps:
    web:
      framework: Astro
      interactive_layer: React Islands
      planned_paths:
        - apps/web/src/layouts/RootLayout.astro
        - apps/web/src/pages/index.astro
        - apps/web/src/pages/1-gio-gap-nhu.astro
        - apps/web/src/components/intake/
        - apps/web/src/components/agent2ui/
        - apps/web/src/components/quick-exit/
        - apps/web/src/styles/tokens.css

  packages:
    contracts:
      purpose: Shared schemas, enums, state machines and validation fixtures.
      planned_paths:
        - packages/contracts/src/agent2ui.ts
        - packages/contracts/src/intake.ts
        - packages/contracts/src/analytics.ts
        - packages/contracts/src/payment-booking.ts
      mvp_note: intake door definitions should live in shared code/config for MVP-A, not Sanity

    design_system:
      purpose: Design tokens and reusable UI primitives.
      planned_paths:
        - packages/design-system/src/tokens/
        - packages/design-system/src/components/

    test_fixtures:
      purpose: Synthetic-only fixtures for PII/privacy/payment tests.
      planned_paths:
        - packages/test-fixtures/src/privacy.ts
        - packages/test-fixtures/src/agent2ui.ts
        - packages/test-fixtures/src/payment.ts

  supabase:
    planned_paths:
      - supabase/migrations/
      - supabase/functions/submit-intake/
      - supabase/functions/agent2ui-recommend/
      - supabase/functions/create-payment-link/
      - supabase/functions/payos-webhook/
      - supabase/functions/create-cal-booking/
    note: Payment functions are MVP-B gated.

  sanity:
    planned_paths:
      - sanity/schemaTypes/
      - sanity/structure/
      - sanity/seed/
    mvp_rule: reduced_public_content_schema_only

  tests:
    planned_paths:
      - tests/unit/
      - tests/integration/
      - tests/e2e/
      - tests/privacy/
      - tests/poc/
```

## 3. Planned Scripts

```yaml
package_scripts:
  build: Build production app.
  typecheck: Run TypeScript checks.
  lint: Run lint checks.
  test: Run all non-POC tests.
  test:unit: Run unit tests.
  test:integration: Run integration tests.
  test:e2e: Run Playwright e2e.
  test:privacy: Run privacy and analytics payload tests.
  test:poc: Run Sprint 0 POC tests.
  gate:mvp-a: Run MVP-A release gate checks.
  gate:mvp-b-poc: Run MVP-B gated POC checks.
```

## 4. Feature Flags

```yaml
feature_flags:
  ENABLE_PAYMENT_BOOKING:
    default: false
    purpose: Enables MVP-B payment/auto-booking only after Sprint 0 POC pass.

  ENABLE_DOCUMENT_UPLOAD:
    default: false
    purpose: Must remain false in MVP-A.

  ENABLE_LLM_AGENT:
    default: false
    purpose: Must remain false in MVP.

  ENABLE_SESSION_REPLAY:
    default: false
    purpose: Must remain false site-wide in MVP.
```

## 5. CI Gate Shape

```yaml
ci_gate_shape:
  mvp_a:
    - pnpm typecheck
    - pnpm lint
    - pnpm test
    - pnpm test:privacy
    - pnpm test:e2e
    - pnpm build

  mvp_b_poc:
    - pnpm test:poc
    - verify_poc_report_updated

  launch:
    - gate:mvp-a
    - gate:mvp-b-poc_if_enabled
    - verify_no_active_S0
    - verify_no_unwaived_S1
```

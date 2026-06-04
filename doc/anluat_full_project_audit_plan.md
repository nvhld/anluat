# Kế hoạch kiểm toán toàn bộ dự án AnLuật.com

```yaml
document_id: anluat_full_project_audit_plan
version: 1.0
status: ready_for_review
language: vi-VN
created_at: 2026-06-04
audit_type: full_project_risk_based_audit
audit_scope:
  - documentation
  - source_code
  - architecture
  - privacy_security
  - product_correctness
  - ux_accessibility_performance
  - content_seo
  - operations
  - quality_release_readiness
```

## 1. Mục tiêu

Kiểm toán dự án theo nguyên tắc **bằng chứng trước, kết luận sau**, nhằm trả lời bốn câu hỏi:

1. Dự án thực tế đang là gì, so với những gì tài liệu tuyên bố?
2. Các ranh giới an toàn, privacy và release gate có thực sự được thực thi không?
3. Những chức năng hiện có có đúng yêu cầu, đúng state machine và đủ khả năng vận hành không?
4. Cần sửa gì, theo thứ tự nào, để đạt MVP-A có thể phát hành?

Kết quả cuối cùng phải đủ rõ để Product Owner quyết định:

- giữ hay thay đổi kiến trúc hiện tại;
- chặn, sửa hoặc chấp nhận từng rủi ro;
- xác định trạng thái thật của MVP-A;
- xác định điều kiện cần đạt trước khi mở MVP-B hoặc production launch.

## 2. Cơ sở đã khảo sát

### 2.1 Tài liệu

- Đã đọc toàn bộ `34` file Markdown trong `doc/`.
- Đã kiểm tra file nhị phân `doc/.DS_Store`; file này chỉ là metadata Finder, không chứa yêu cầu dự án.
- Tổng tài liệu khoảng `23.504` dòng, bao phủ product, UX/UI, architecture, data/privacy, Agent2UI, CMS/SEO, payment, operations, QA, backlog, release gates và task ledger.

### 2.2 Workspace thực tế

- Workspace hiện tại không phải Git repository.
- Source tree hiện tại là Next.js App Router ở root, không phải Astro monorepo như tài liệu mô tả.
- Có `25` file ngoài `doc/`, khoảng `3.437` dòng source/config.
- Không thấy `AGENTS.md`, `pnpm-workspace.yaml`, `apps/web`, `packages/contracts`, `supabase`, `sanity`, hoặc `tests`.
- Không thấy lockfile.
- Không thấy test suite hoặc CI config.

### 2.3 Sai lệch cần ưu tiên xác minh

Các mục dưới đây là **tín hiệu tiền kiểm toán**, chưa phải báo cáo finding cuối cùng:

- Tài liệu ghi Astro + Supabase + Sanity; code hiện tại là Next.js + client-side state.
- Tài liệu ghi không dùng LLM trong MVP; code có endpoint Gemini nhận `fullName` và `caseSummary`.
- Tài liệu cấm lưu PII/case summary trong browser; code đang dùng `localStorage`.
- Tài liệu yêu cầu Quick Exit inline vanilla JS trước hydration; code hiện là React client component.
- Tài liệu ghi các POC và nhiều task đã `passed`; workspace hiện tại không có các file evidence/test được liệt kê.
- Tài liệu dùng domain chính `anluat.com`; code metadata/canonical đang dùng `anluat.vn`.
- Tài liệu defer Legal Health Score, Legal Safety Map và advanced operations; code hiện đã đưa các surface này vào ứng dụng.
- Code có dashboard quản trị trong public client surface nhưng chưa thấy authentication/authorization.

## 3. Nguyên tắc kiểm toán

```yaml
audit_principles:
  - source_code_and_runtime_are_primary_evidence
  - documentation_claims_require_reproducible_evidence
  - every_finding_must_map_to_requirement_or_risk
  - sensitive_flows_receive_100_percent_coverage
  - no_pass_status_without_reproduction
  - distinguish_prototype_behavior_from_production_behavior
  - do_not_expand_MVP_scope_during_audit
  - prioritize_S0_containment_before_polish
```

Vì codebase nhỏ, audit sẽ review tĩnh **100% source/config**, **100% route/API**, và **100% flow nhạy cảm**. Không dùng phương pháp sampling cho code.

## 4. Mô hình mức độ nghiêm trọng

| Mức | Ý nghĩa | Quy tắc |
|---|---|---|
| `S0 Blocker` | Có thể gây rò dữ liệu, truy cập trái phép, tư vấn pháp lý không kiểm soát, hoặc vi phạm release gate cứng | Chặn release; không waiver |
| `S1 Critical` | Sai chức năng trọng yếu, sai trạng thái, mất dữ liệu, hoặc rủi ro vận hành nghiêm trọng | Sửa trước release hoặc waiver chính thức |
| `S2 Major` | Ảnh hưởng đáng kể đến UX, accessibility, SEO, maintainability hoặc khả năng vận hành | Có owner và kế hoạch sửa |
| `S3 Minor` | Chất lượng, consistency hoặc polish | Backlog có kiểm soát |

Mỗi finding phải có:

```yaml
finding_record:
  - id
  - title
  - severity
  - affected_surface
  - violated_requirement
  - evidence
  - reproduction_steps
  - impact
  - root_cause
  - recommended_fix
  - owner
  - status
  - verification_result
```

## 5. Phương pháp khoa học

Audit kết hợp các phương pháp sau:

- **Requirements Traceability:** ánh xạ release gate, non-negotiable và acceptance ID sang code, test và evidence.
- **Architecture Reconciliation:** so sánh kiến trúc tuyên bố với kiến trúc thực tế.
- **Threat Modeling:** lập data-flow diagram và dùng STRIDE/LINDDUN cho các luồng nhạy cảm.
- **State-Machine Verification:** kiểm tra intake, Agent2UI, operations và payment-gate bằng transition hợp lệ/bất hợp lệ.
- **Static Review:** review 100% source/config/dependency.
- **Dynamic Verification:** chạy build, lint, route/API, browser, accessibility, performance và privacy checks.
- **Adversarial Testing:** thử payload độc hại, bypass UI, prompt injection, unauthorized access và data leakage.
- **Evidence Reproduction:** mọi trạng thái `passed` phải tái lập được từ workspace hiện tại.

## 6. Thứ tự thực hiện tối ưu

### Wave 0 — Truth Baseline và Freeze

**Mục tiêu:** xác định trạng thái thật trước khi đánh giá đúng/sai.

Thực hiện:

- Lập inventory đầy đủ source, config, asset, route, API, dependency và environment variable.
- Ghi checksum/baseline để phân biệt finding với thay đổi phát sinh trong lúc audit.
- Xác định đây là prototype, MVP-A candidate hay production candidate.
- Đối chiếu task ledger, POC report và scaffold manifest với file thực tế.
- Xác định source of truth cho kiến trúc: Next.js hiện tại hay Astro target.
- Xác định feature flags thực tế và những surface đang public.

Đầu ra:

- `audit/00_inventory.md`
- `audit/01_document_reality_reconciliation.md`
- `audit/02_decision_log_required.md`

Gate hoàn thành:

- Không còn trạng thái `passed` nào được dùng làm tiền đề nếu chưa có evidence tái lập.
- PO xác nhận kiến trúc và phạm vi cần audit.

### Wave 1 — S0 Triage và Privacy/Security Containment

**Mục tiêu:** tìm và cô lập rủi ro có thể gây hại ngay lập tức.

Kiểm tra 100%:

- PII, case summary, audit log và sensitive state trong browser storage.
- Public access tới operations/admin dashboard.
- Authentication, authorization, role boundary và sensitive-view audit.
- Gemini/LLM data flow, consent, prompt injection, output safety và legal-advice boundary.
- API input validation, rate limit, abuse prevention, error leakage và logging.
- Quick Exit trước hydration, history behavior, latency và copy không hứa tuyệt đối.
- Secrets/env exposure, dependency risk, XSS, injection, CSRF và security headers.
- Structured data có thông tin giả/placeholder hoặc claim không được xác minh.

Đầu ra:

- `audit/03_s0_s1_findings_register.md`
- `audit/04_data_flow_and_threat_model.md`
- `audit/05_privacy_security_test_evidence/`

Gate hoàn thành:

- Tất cả S0 được ghi nhận với reproduction rõ ràng.
- Có quyết định containment trước khi tiếp tục đánh giá launch readiness.

### Wave 2 — Requirements Traceability và Functional Correctness

**Mục tiêu:** đo mức độ thực thi thật của MVP-A.

Thực hiện:

- Tạo ma trận từ từng release gate/acceptance ID sang implementation và test.
- Kiểm tra 5 intake doors và nguồn cấu hình dùng chung.
- Kiểm tra zero-typing đến bước contact, consent, validation và submit behavior.
- Kiểm tra deterministic routing, SafetyNotice, urgent queue và conflict handling.
- Kiểm tra Agent2UI contract, component/action allowlist và safe fallback.
- Kiểm tra operations queue, callback attempts, SLA, state transition và audit semantics.
- Kiểm tra feature-gate: LLM, upload, payment, booking, Legal Health Score, Legal Safety Map.
- Kiểm tra error, empty, retry, duplicate, stale và offline states.

Đầu ra:

- `audit/06_requirements_traceability_matrix.csv`
- `audit/07_functional_state_machine_report.md`
- `audit/08_scope_drift_report.md`

Gate hoàn thành:

- Mỗi MVP-A requirement có trạng thái `implemented`, `partial`, `missing`, `unsafe`, hoặc `not_applicable`.
- Không có chức năng deferred nào được coi là hoàn thành MVP-A mặc định.

### Wave 3 — Architecture, Build và Supply Chain

**Mục tiêu:** xác minh khả năng build, triển khai, bảo trì và tái lập.

Thực hiện:

- Chạy clean install, typecheck, lint và production build.
- Kiểm tra dependency compatibility, vulnerability, license và package provenance.
- Xác minh package manager, lockfile, Node version và reproducible build.
- Review Next.js client/server boundary, route exposure và bundle composition.
- Review config, environment separation, deployment target và secret lifecycle.
- Kiểm tra CI/CD, preview/staging/prod gates, rollback và observability.
- So sánh kiến trúc hiện tại với ADR; đề xuất giữ Next.js hoặc migration có căn cứ.

Đầu ra:

- `audit/09_build_dependency_architecture_report.md`
- `audit/10_deployment_and_operability_gaps.md`

Gate hoàn thành:

- Có một lệnh chuẩn tái lập được build và test.
- Kiến trúc mục tiêu được PO chấp thuận.

### Wave 4 — UX, Accessibility, Performance, Content và SEO

**Mục tiêu:** đánh giá chất lượng public-facing sau khi rủi ro nền tảng đã rõ.

Thực hiện:

- Browser test desktop/mobile, tối thiểu ở `320px`, `390px`, tablet và desktop.
- Kiểm tra first action above fold, overflow, keyboard, focus, dialog/sheet semantics và reduced motion.
- Kiểm tra form usability, copy nhạy cảm, crisis flow và Quick Exit trên thiết bị thật/mô phỏng.
- Chạy accessibility scanner và manual keyboard/screen-reader smoke.
- Chạy bundle/performance/Core Web Vitals baseline.
- Audit metadata, canonical, robots, sitemap, JSON-LD, fake links, placeholder và redirect.
- Đối chiếu public claims với knowledge base và nguồn được legal/content owner phê duyệt.
- Kiểm tra nội dung cấm: cam kết kết quả, tuyệt đối bảo mật, claim không có bằng chứng.

Đầu ra:

- `audit/11_ux_accessibility_performance_report.md`
- `audit/12_content_seo_claims_report.md`
- screenshot và browser evidence

Gate hoàn thành:

- Không còn S0/S1 UX-safety.
- Structured data chỉ chứa dữ liệu đã xác minh và hiển thị công khai.

### Wave 5 — Test Harness, Remediation Verification và Release Decision

**Mục tiêu:** biến finding thành gate có thể duy trì.

Thực hiện:

- Tạo test tối thiểu cho mọi S0/S1 đã phát hiện.
- Bổ sung unit, integration, E2E, privacy và security regression tests.
- Retest độc lập sau remediation.
- Đóng finding chỉ khi reproduction cũ không còn và regression test pass.
- Lập residual-risk register và waiver log.
- Đưa ra launch recommendation.

Đầu ra:

- `audit/13_regression_test_plan.md`
- `audit/14_retest_report.md`
- `audit/15_final_release_readiness_report.md`
- release recommendation: `blocked`, `MVP-A_ready_with_conditions`, hoặc `MVP-A_ready`

## 7. Workstream chi tiết

| Workstream | Trọng tâm | Coverage |
|---|---|---|
| Documentation & Governance | trạng thái tài liệu, mâu thuẫn, evidence, scope, waiver | 100% tài liệu |
| Architecture & Build | framework, boundaries, dependency, env, CI/CD, reproducibility | 100% config/dependency |
| Privacy & Security | PII, storage, auth, API, LLM, logs, consent, incident | 100% sensitive flow |
| Product & Functional | intake, routing, Agent2UI, queues, state transitions | 100% route/flow |
| Operations | dashboard, SLA, callback, conflict, audit semantics | 100% operations surface |
| UX & Accessibility | mobile, keyboard, focus, copy, safety UX | core browsers/viewports |
| Performance | bundle, hydration, CWV, Quick Exit latency | all public routes |
| Content & SEO | claims, JSON-LD, canonical, sitemap, redirects | all public routes |
| Payment/Booking | chỉ kiểm tra gate và absence; full audit nếu được bật | conditional |
| QA & Release | test gaps, regression, evidence, launch gate | all S0/S1 |

## 8. Ma trận kiểm tra ưu tiên

### P0 — Làm ngay

- Document-to-reality reconciliation.
- PII/case summary trong browser và LLM flow.
- Public operations dashboard và quyền truy cập.
- Quick Exit compliance.
- Không LLM trong MVP-A.
- Bằng chứng cho các task/POC đang ghi `passed`.
- Fake/placeholder public metadata và structured data.

### P1 — Sau khi P0 rõ

- Intake validation/consent/state machine.
- Agent2UI allowlist/fallback.
- Operations state transitions và audit integrity.
- Build/dependency/reproducibility.
- Accessibility và privacy regression.

### P2 — Sau P1

- Visual consistency, performance optimization, content migration, SEO depth.
- Post-MVP tools và enhancements.

## 9. Test matrix dự kiến

```yaml
test_matrix:
  static:
    - typecheck
    - lint
    - dependency_audit
    - secret_scan
    - source_review
  unit:
    - routing_rules
    - state_transitions
    - analytics_sanitizer
    - agent2ui_validation
  integration:
    - intake_api
    - authz
    - sensitive_access_audit
    - llm_boundary_if_retained
  e2e:
    - public_home_to_intake
    - domestic_violence_safety_flow
    - unauthorized_admin_access
    - quick_exit_pre_hydration
    - operations_workflow
  non_functional:
    - accessibility
    - performance
    - responsive
    - seo_structured_data
    - privacy_log_inspection
```

## 10. Bằng chứng và tiêu chuẩn đóng finding

Một finding chỉ được đóng khi có đủ:

- code/config sửa đúng nguyên nhân gốc;
- test tái hiện lỗi cũ;
- test regression pass;
- bằng chứng runtime hoặc build;
- tài liệu/traceability được cập nhật;
- reviewer độc lập xác nhận với S0/S1.

Không chấp nhận:

- “đã xem thủ công, có vẻ ổn”;
- chỉ sửa UI nhưng không sửa boundary;
- chỉ ẩn dashboard nhưng dữ liệu vẫn public;
- chỉ đổi copy nhưng flow vẫn vi phạm privacy;
- đánh dấu `passed` mà không có lệnh và evidence tái lập.

## 11. Phân công đề xuất

```yaml
audit_roles:
  lead_auditor:
    owns:
      - truth_baseline
      - integration
      - severity
      - final_report
  privacy_security_reviewer:
    owns:
      - data_flow
      - authz
      - llm_boundary
      - incident_readiness
  frontend_ux_reviewer:
    owns:
      - quick_exit
      - accessibility
      - responsive
      - performance
  product_operations_reviewer:
    owns:
      - scope
      - workflow
      - queue
      - SLA
  content_legal_owner:
    owns:
      - public_claims
      - legal_copy
      - structured_data_truth
```

## 12. Effort và khả năng chạy song song

Critical path đề xuất:

1. Wave 0 bắt buộc chạy trước.
2. Wave 1 bắt buộc hoàn tất triage trước khi đánh giá launch readiness.
3. Wave 2 và Wave 3 có thể chạy song song sau Wave 0.
4. Wave 4 có thể chạy song song với phần cuối Wave 2/3, nhưng finding UX không được che khuất S0.
5. Wave 5 chỉ bắt đầu sau khi remediation được phê duyệt.

Ước lượng kỹ thuật cho codebase hiện tại:

| Hạng mục | Effort dự kiến |
|---|---:|
| Wave 0 | 0,5 ngày audit |
| Wave 1 | 1,0–1,5 ngày audit |
| Wave 2 | 1,0–1,5 ngày audit |
| Wave 3 | 0,5–1,0 ngày audit |
| Wave 4 | 1,0–1,5 ngày audit |
| Wave 5 và final report | 1,0–1,5 ngày audit |

Tổng critical path kỹ thuật dự kiến: **5–8 ngày audit**, chưa gồm thời gian sửa code và legal/content sign-off.

## 13. Quyết định cần PO xác nhận trước khi bắt đầu audit thực thi

1. Kiến trúc authoritative là Next.js hiện tại hay Astro/Supabase/Sanity theo ADR?
2. Workspace hiện tại là prototype demo hay ứng viên MVP-A?
3. LLM/Gemini có bị tắt hoàn toàn trong MVP-A theo release gate không?
4. Operations dashboard có được phép xuất hiện trong public app không?
5. Domain canonical chính thức là `anluat.com` hay `anluat.vn`?
6. Các task/POC `passed` trong tài liệu có evidence ở repository khác không?
7. Legal Health Score, Legal Safety Map và operations dashboard thuộc MVP-A hay post-MVP?

## 14. Điều kiện bắt đầu

Audit có thể bắt đầu ngay sau khi kế hoạch này được duyệt. Nếu các quyết định ở mục 13 chưa được trả lời, audit vẫn tiến hành theo nguyên tắc bảo thủ:

- coi workspace hiện tại là ứng viên MVP-A;
- coi release gates trong `doc/anluat_release_gates.md` là chuẩn cao nhất;
- coi LLM, public admin, browser-stored PII và Quick Exit phụ thuộc React là rủi ro S0 cho đến khi có bằng chứng ngược lại;
- không audit full payment/booking khi module chưa tồn tại hoặc chưa được bật.


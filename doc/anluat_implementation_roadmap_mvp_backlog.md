# Implementation Roadmap & MVP Backlog

## AnLuật.com — Detailed Build Plan, References, Requirements & Release Gates

```yaml id="doc-meta"
document_id: anluat_implementation_roadmap_mvp_backlog
version: 1.0
status: draft_for_review
language: vi-VN
project: Website mới An Luật
primary_domain: anluat.com
spec_type: Implementation Roadmap / MVP Backlog / Delivery Plan
machine_readable: true
last_updated: 2026-06-02
```

---

## 1. Mục tiêu tài liệu

Tài liệu này chuyển toàn bộ chiến lược UX/UI/Tech/Data/Agent2UI/Payment/CMS/Ops/QA đã chốt thành roadmap triển khai chi tiết.

Mục tiêu là để:

```yaml id="roadmap-goals"
goals:
  - Chia dự án thành phase, epic, task và release gate rõ ràng.
  - Gắn từng task với tài liệu tham chiếu cụ thể.
  - Định nghĩa owner, dependency, output và acceptance criteria.
  - Giảm tranh cãi khi triển khai bằng cách khóa yêu cầu ngay từ đầu.
  - Tách MVP bắt buộc khỏi backlog nâng cao.
  - Đảm bảo mọi hạng mục đều có Definition of Done.
```

Nói cách khác: đây là bản đồ đường đi. Không có nó, team sẽ “linh hoạt”, mà trong dự án web, “linh hoạt” thường nghĩa là thứ gì đó cháy âm ỉ sau lưng mọi người.

---

# 2. Reference Index

## 2.1 Tài liệu nội bộ đã chốt

```yaml id="reference-documents"
reference_documents:
  REF_PRODUCT_UX:
    document_id: anluat_web_new_product_ux_spec
    purpose: Product strategy, UX model, 5 legal intake doors, service packages.

  REF_UI_DIRECTION:
    document_id: anluat_ui_direction_agent2ui_spec
    purpose: UI direction, golden ratio, mobile decision stack, Agent2UI UI behavior.

  REF_PAYMENT:
    document_id: anluat_payment_scheduling_orchestration_spec
    purpose: payOS + Cal.com + Supabase orchestration.

  REF_ARCHITECTURE:
    document_id: anluat_tech_stack_system_architecture_adr
    purpose: Tech stack, source of truth, system boundaries.

  REF_DATA_PRIVACY:
    document_id: anluat_data_model_privacy_safe_lead_spec
    purpose: Database schema, privacy, PII, sensitive data, audit.

  REF_AGENT2UI:
    document_id: anluat_agent2ui_technical_contract
    purpose: Agent2UI schema contract, component allowlist, validation, routing.

  REF_DESIGN_SYSTEM:
    document_id: anluat_design_system_tokens_component_spec
    purpose: Tokens, components, responsive rules, component contracts.

  REF_CMS_SEO:
    document_id: anluat_cms_content_model_ai_ready_seo_schema_spec
    purpose: Sanity schemas, structured data, AI-ready SEO, redirect map.

  REF_OPERATIONS:
    document_id: anluat_internal_operations_secretary_workflow_spec
    purpose: Secretary workflow, queues, SLA, conflict check, payment exceptions.

  REF_QA:
    document_id: anluat_qa_test_plan_acceptance_matrix
    purpose: Test plan, acceptance matrix, release gates.
```

## 2.2 File / nguồn nội dung tham chiếu

```yaml id="source-files"
source_files:
  SRC_ANLUAT_KB:
    description: Knowledge base website cũ An Luật, dịch vụ, nội dung, URL migration.
    citation: turn4file0

  SRC_UI_TRENDS:
    description: Tài liệu xu hướng UX/UI law firm hiện đại, editorial layout, trust-centered design, intelligent intake, AI-ready.
    citation: turn6file0
```

Website mới phải tránh lỗi brochureware của website cũ, đồng thời tái sử dụng đúng các tài sản mạnh như lịch sử An Luật, mảng lao động, hợp đồng, tranh tụng, thu hồi nợ, đào tạo và rà soát pháp lý nội bộ. 
UI mới phải bám các xu hướng trust-centered design, editorial layout, intelligent intake, AI-ready và humanized photography/video thay vì template công ty luật cũ. 

---

# 3. Non-Negotiable Requirements

Các yêu cầu này **không được thương lượng** trong MVP. Nếu ai muốn bỏ, người đó phải ký tên bằng máu kỹ thuật. Đùa thôi. Nhưng gần như vậy.

```yaml id="non-negotiables"
non_negotiable_requirements:
  UX:
    - Homepage phải có 5 cửa tiếp nhận pháp lý.
    - Người dùng mobile phải bắt đầu intake trong first viewport, không cần scroll.
    - Core intake phải zero-typing cho đến bước contact.
    - 1 GIỜ GẶP NHƯ là primary conversion asset.
    - Vụ phức tạp phải vào secretary/lawyer review.

  UI:
    - Desktop core layouts dùng golden split 61.8/38.2.
    - Mobile dùng decision stack + bottom sheet.
    - Không dùng form dài kiểu truyền thống.
    - Không dùng stock legal clichés: búa tòa, cán cân, bắt tay vô hồn.

  Agent2UI:
    - Agent chỉ trả schema, không trả HTML/JS.
    - Renderer chỉ render component trong allowlist.
    - Agent không nhận PII hoặc raw case summary mặc định.
    - Agent không đưa tư vấn pháp lý cuối cùng.

  PaymentBooking:
    - Payment/auto-book không thuộc MVP-A mặc định.
    - Payment/auto-book chỉ vào MVP nếu Sprint 0 POC pass và PO chốt MVP-B.
    - Cal.com booking chỉ confirmed sau payment_success đã verify.
    - payOS webhook phải verify signature trước khi cập nhật trạng thái.
    - Payment description không chứa nội dung vụ việc.
    - Duplicate webhook không được tạo duplicate booking.
    - Late payment / booking failure phải vào payment_resolution_queue.

  Privacy:
    - Không PII trong analytics.
    - Session replay tắt toàn site trong MVP.
    - Sensitive data không lưu trong Sanity.
    - Xem sensitive details phải có audit log.

  QuickExit:
    - Quick Exit phải là vanilla JS inline ở Astro root layout.
    - Không phụ thuộc React hydration/lifecycle.
    - Phải hoạt động trước khi React load.

  CMS:
    - Sanity chỉ lưu public content.
    - FAQ schema chỉ emit nếu FAQ visible + humanReviewed.
    - Client proof chỉ render nếu publicationPermission=true.
    - Old URLs phải có redirect map.

  QA:
    - Không launch nếu còn S0 blocker.
    - Không launch nếu S1 critical chưa fix hoặc chưa được waiver chính thức.
```

---

# 4. Delivery Model

```yaml id="delivery-model"
delivery_model:
  approach: phased_delivery_with_release_gates
  roadmap_style: sequence_based_not_calendar_based
  timeline_commitment_rule: only_after_sprint_0_poc
  artifacts:
    - design_files
    - code_repository
    - Sanity schemas
    - Supabase migrations
    - Edge Functions
    - QA reports
    - Sprint 0 POC report
    - deployment checklist
  release_strategy:
    - internal_alpha
    - staging_beta
    - production_mvp
    - post_launch_iteration
```

Không dùng roadmap kiểu “tuần 3 làm hết backend, tuần 4 launch”. Câu đó nghe mạnh mẽ, nhưng thật ra là tiếng còi tàu Titanic.

---

# 4.1 MVP Strategy & Sprint 0 POC Gate

MVP mặc định là **MVP-A**. Payment/auto-book là **MVP-B gated module**, chỉ đưa vào MVP nếu Sprint 0 POC pass.

```yaml id="mvp-strategy"
roadmap_revision:
  mvp_strategy: MVP-A_core_plus_MVP-B_gated_payment_module
  timeline_commitment: only_after_sprint_0_poc

  mvp_a_core:
    - homepage_5_intake_doors
    - one_hour_with_nhu_landing
    - zero_typing_intake
    - supabase_lead_storage
    - secretary_review_queue
    - preparation_checklist
    - quick_exit_vanilla_js
    - sanity_core_pages
    - privacy_safe_manual_analytics

  mvp_b_gated_payment_module:
    include_only_if_sprint_0_poc_passes: true
    scope:
      - payos_payment_link
      - verified_payos_webhook
      - calcom_booking_after_payment_success
      - no_duplicate_booking
      - payment_resolution_queue

  reduce_mvp:
    - no_LLM
    - no_full_Legal_Health_Score
    - no_full_Legal_Safety_Map
    - no_document_upload
    - minimal_ops_dashboard
    - reduced_Sanity_schema_for_MVP

  pricing_rule:
    public_price_visibility: hidden
    auto_book_amount_source: backend_after_agent2ui_eligibility
    complex_case_pricing: secretary_or_lawyer_review

  analytics_rule:
    session_replay: disabled_site_wide_for_MVP
    tracking_mode: manual_events_only
    pii_or_free_text_in_analytics: false
```

```yaml id="sprint-0-poc"
sprint_0_poc:
  duration_policy: before_final_timeline_commit
  outputs:
    - poc_report
    - risks_after_poc
    - mvp_a_or_b_recommendation
    - revised_timeline

poc_acceptance:
  payos:
    must_pass:
      - create_payment_link
      - verify_webhook
      - reject_invalid_signature
      - idempotent_duplicate_webhook
      - amount_mismatch_no_booking

  calcom:
    must_pass:
      - fetch_availability
      - create_booking_after_payment_success
      - handle_slot_unavailable
      - no_duplicate_booking

  quick_exit:
    must_pass:
      - works_before_react_hydration
      - pointerdown_capture
      - direct_dom_replacement

  agent2ui:
    must_pass:
      - reject_unknown_component
      - reject_unknown_action
      - reject_raw_html_script
      - fallback_secretary_review

  privacy:
    must_pass:
      - no_name_phone_email_zalo_in_analytics
      - no_case_summary_in_logs
      - no_session_replay

  supabase:
    must_pass:
      - public_insert_only
      - no_public_read
      - sensitive_access_audited
```

---

# 5. Team Roles

```yaml id="team-roles"
team_roles:
  PO:
    label: Product Owner / Project Owner
    responsibilities:
      - approve scope
      - approve copy direction
      - decide tradeoffs
      - accept release gate

  UX_UI:
    label: UX/UI Designer
    responsibilities:
      - Figma design system
      - responsive screens
      - prototypes
      - design QA

  FE:
    label: Frontend Developer
    responsibilities:
      - Astro pages
      - React islands
      - Agent2UI renderer
      - responsive UI
      - accessibility

  BE:
    label: Backend Developer
    responsibilities:
      - Supabase schema
      - Edge Functions
      - payOS integration
      - Cal.com integration
      - API contracts

  CMS:
    label: CMS / Content Engineer
    responsibilities:
      - Sanity schemas
      - GROQ queries
      - content preview
      - structured data generation

  CONTENT:
    label: Content / Editorial Team
    responsibilities:
      - service page copy
      - FAQ
      - attorney profile
      - migration from old website
      - review workflow

  OPS:
    label: Secretary / Operations Lead
    responsibilities:
      - lead queues
      - callback workflow
      - SLA
      - payment resolution
      - conflict check process

  LEGAL_REVIEW:
    label: Lawyer / Legal Reviewer
    responsibilities:
      - review legal content
      - review FAQ
      - approve sensitive copy
      - conflict workflow policy

  QA:
    label: QA Engineer
    responsibilities:
      - test plan execution
      - e2e tests
      - privacy tests
      - release report

  PRIVACY_SECURITY:
    label: Privacy / Security Owner
    responsibilities:
      - data handling review
      - analytics review
      - incident readiness
      - access control review
```

---

# 6. RACI Matrix

```yaml id="raci"
raci:
  design_system:
    responsible: UX_UI
    accountable: PO
    consulted:
      - FE
    informed:
      - CONTENT

  frontend_core:
    responsible: FE
    accountable: PO
    consulted:
      - UX_UI
      - QA
    informed:
      - OPS

  cms_schema:
    responsible: CMS
    accountable: PO
    consulted:
      - CONTENT
      - FE
      - LEGAL_REVIEW
    informed:
      - QA

  data_model:
    responsible: BE
    accountable: PRIVACY_SECURITY
    consulted:
      - OPS
      - FE
    informed:
      - PO

  agent2ui:
    responsible:
      - FE
      - BE
    accountable: PO
    consulted:
      - PRIVACY_SECURITY
      - LEGAL_REVIEW
      - QA
    informed:
      - OPS

  payment_booking:
    responsible: BE
    accountable: PO
    consulted:
      - OPS
      - QA
      - PRIVACY_SECURITY
    informed:
      - FE

  operations_dashboard:
    responsible:
      - BE
      - FE
      - OPS
    accountable: OPS
    consulted:
      - PRIVACY_SECURITY
      - QA
    informed:
      - PO

  qa_release:
    responsible: QA
    accountable: PO
    consulted:
      - FE
      - BE
      - PRIVACY_SECURITY
      - OPS
    informed:
      - CONTENT
```

---

# 7. Roadmap Overview

```yaml id="roadmap-overview"
roadmap_phases:
  - phase_id: S0
    name: Mandatory POC Gate
    goal: Kiểm chứng payOS, Cal.com, Supabase RLS/audit, Quick Exit, Agent2UI renderer, privacy analytics và Sanity-Astro trước khi cam kết timeline.

  - phase_id: P0
    name: Project Foundation & Governance
    goal: Khóa scope, repo, environment, ownership, delivery rules.

  - phase_id: P1
    name: Design System & UI Foundation
    goal: Xây tokens, Figma library, component contracts, responsive patterns.

  - phase_id: P2
    name: CMS, Content Model & Migration Foundation
    goal: Xây Sanity schema, content model, old URL migration, AI-ready SEO.

  - phase_id: P3
    name: Core Frontend Experience
    goal: Xây Astro shell, homepage command center, 1 GIỜ GẶP NHƯ landing, core service templates.

  - phase_id: P4
    name: Data Backend & Privacy Foundation
    goal: Supabase schema, RLS, Edge Function skeleton, audit, privacy-safe analytics.

  - phase_id: P5
    name: Zero-Typing Intake & Agent2UI
    goal: Intake UI, routing, schema validation, AgentRecommendationPanel, fallback.

  - phase_id: P6
    name: Payment & Scheduling Orchestration - MVP-B Gated
    goal: Chỉ triển khai payOS/Cal.com cho MVP nếu Sprint 0 POC pass và PO chốt MVP-B.

  - phase_id: P7
    name: Internal Operations Workflow
    goal: Minimal lead queue, secretary review, privacy gating, audit và payment resolution nếu MVP-B được bật.

  - phase_id: P8
    name: QA Hardening, Security, Privacy & Launch
    goal: Full test execution, release gates, staging beta, production MVP.

  - phase_id: P9
    name: Post-Launch Optimization
    goal: Measure, refine, content growth, conversion optimization, operational tuning.
```

---

# 8. Phase P0 — Project Foundation & Governance

## 8.1 Objective

Khóa nền quản trị dự án: repo, environments, owners, scope, conventions. Đây là phần nhàm chán nhưng bỏ qua thì sau này mọi người sẽ tranh cãi folder tên `components` hay `ui`, một bi kịch nhỏ nhưng dai.

```yaml id="P0"
phase:
  id: P0
  name: Project Foundation & Governance
  complexity: M
  references:
    - REF_ARCHITECTURE
    - REF_QA
```

## 8.2 Epics & Tasks

```yaml id="P0-tasks"
tasks:
  - id: P0-E1-T1
    epic: Project setup
    title: Create monorepo/repository structure
    owner: FE
    dependencies: []
    output:
      - git repository
      - branch strategy
      - folder conventions
    acceptance:
      - main/staging/feature branch strategy documented
      - src/components, src/tokens, src/schemas, supabase, sanity directories exist

  - id: P0-E1-T2
    epic: Environment setup
    title: Define local/staging/production environments
    owner: BE
    dependencies:
      - P0-E1-T1
    output:
      - env matrix
      - secret naming convention
      - staging domain plan
    acceptance:
      - local/staging/prod env names documented
      - no production secret used in local by default

  - id: P0-E1-T3
    epic: Governance
    title: Confirm owners and approval workflow
    owner: PO
    dependencies: []
    output:
      - RACI confirmation
      - approval matrix
    acceptance:
      - owners assigned for UX/UI, FE, BE, CMS, OPS, QA, Privacy

  - id: P0-E1-T4
    epic: QA foundation
    title: Create QA checklist and test case tracking structure
    owner: QA
    dependencies:
      - P0-E1-T1
    output:
      - test case IDs
      - release gate checklist
    acceptance:
      - QA matrix from REF_QA imported into issue tracker
```

## 8.3 Exit Criteria

```yaml id="P0-exit"
phase_exit_criteria:
  - Repository exists.
  - Environments defined.
  - Owners confirmed.
  - QA acceptance matrix imported.
  - No unresolved scope ambiguity for MVP core.
```

---

# 9. Phase P1 — Design System & UI Foundation

## 9.1 Objective

Tạo design system đủ để Dandatto Studio vẽ và dev dựng cùng một ngôn ngữ.

```yaml id="P1"
phase:
  id: P1
  name: Design System & UI Foundation
  complexity: L
  references:
    - REF_UI_DIRECTION
    - REF_DESIGN_SYSTEM
    - SRC_UI_TRENDS
```

## 9.2 Epics & Tasks

```yaml id="P1-tasks"
tasks:
  - id: P1-E1-T1
    epic: Design tokens
    title: Build Figma variables for color, typography, spacing, radius, shadow, motion
    owner: UX_UI
    references:
      - REF_DESIGN_SYSTEM
    output:
      - Figma token library
    acceptance:
      - Tokens match REF_DESIGN_SYSTEM names
      - Fibonacci spacing scale exists
      - Golden ratio layout variables exist

  - id: P1-E1-T2
    epic: Code tokens
    title: Implement CSS custom properties for design tokens
    owner: FE
    dependencies:
      - P1-E1-T1
    output:
      - src/tokens/colors.css
      - src/tokens/typography.css
      - src/tokens/spacing.css
      - src/tokens/layout.css
      - src/tokens/motion.css
    acceptance:
      - Token names align with Figma
      - No arbitrary color usage in core components

  - id: P1-E2-T1
    epic: Layout components
    title: Design and implement GoldenSplitLayout
    owner:
      - UX_UI
      - FE
    output:
      - Figma component
      - Astro/CSS component
    acceptance:
      - Desktop approximates 61.8/38.2
      - Mobile collapses safely
      - No horizontal overflow at 320px

  - id: P1-E2-T2
    epic: Layout components
    title: Design and implement MobileBottomSheet
    owner:
      - UX_UI
      - FE
    dependencies:
      - P1-E1-T2
    output:
      - React component
      - focus management
      - reduced motion support
    acceptance:
      - One question per screen supported
      - Touch target >=55px
      - Focus trap works

  - id: P1-E2-T3
    epic: Layout components
    title: Design and implement DesktopSideDrawer
    owner:
      - UX_UI
      - FE
    dependencies:
      - P1-E1-T2
    output:
      - React component
    acceptance:
      - Focus trap works
      - Escape closes drawer
      - Width follows 38.2vw / documented constraints

  - id: P1-E3-T1
    epic: Core UI components
    title: Design and implement IntakeDoorCard
    owner:
      - UX_UI
      - FE
    output:
      - Figma variants
      - React component
    acceptance:
      - 5 intake door variants exist
      - Selected/focus/disabled states exist
      - Emits only privacy-safe analytics

  - id: P1-E3-T2
    epic: Core UI components
    title: Design Agent2UI component allowlist
    owner: UX_UI
    references:
      - REF_AGENT2UI
      - REF_DESIGN_SYSTEM
    output:
      - Figma components for AgentRecommendationPanel, SafetyNotice, PreparationChecklist, SecretaryReviewPanel
    acceptance:
      - All allowlisted components have variants and states
      - No component supports raw HTML
```

## 9.3 Exit Criteria

```yaml id="P1-exit"
phase_exit_criteria:
  - Figma token library complete.
  - Code tokens implemented.
  - GoldenSplitLayout, MobileBottomSheet, DesktopSideDrawer implemented.
  - IntakeDoorCard implemented.
  - Agent2UI visual components designed.
  - Design QA passes DS-001 to DS-004 from REF_QA.
```

---

# 10. Phase P2 — CMS, Content Model & Migration Foundation

## 10.1 Objective

Tạo Sanity schema, migration map, structured content và SEO foundations.

```yaml id="P2"
phase:
  id: P2
  name: CMS, Content Model & Migration Foundation
  complexity: L
  references:
    - REF_CMS_SEO
    - SRC_ANLUAT_KB
```

## 10.2 Epics & Tasks

```yaml id="P2-tasks"
tasks:
  - id: P2-E1-T1
    epic: Sanity setup
    title: Initialize Sanity Studio and datasets
    owner: CMS
    output:
      - Sanity project
      - dev/staging/prod datasets
    acceptance:
      - Studio can run locally
      - dataset separation documented

  - id: P2-E1-T2
    epic: Core schemas
    title: Implement service_page, service_package, landing_page schemas
    owner: CMS
    references:
      - REF_CMS_SEO
    dependencies:
      - P2-E1-T1
    output:
      - schema files
    acceptance:
      - service_page has legalArea, plainLanguageSummary, commonSituations, whatAnLuatDoes
      - package supports priceVisibility/paymentMode/bookingMode
      - validation blocks publish without required summary

  - id: P2-E1-T3
    epic: Core schemas
    title: Implement MVP attorney_profile, faq_item, faq_group, preparation_checklist
    owner: CMS
    dependencies:
      - P2-E1-T1
    output:
      - schema files
    acceptance:
      - FAQ has humanReviewed and eligibleForFaqSchema
      - preparation_checklist has agentSafe flag
      - legal_term_mapping deferred unless needed for MVP service routing

  - id: P2-E1-T4
    epic: Trust/content schemas
    title: Implement minimal client_proof, office_location, global_site_settings
    owner: CMS
    mvp_scope: reduced_sanity_schema
    deferred:
      - media_mention
      - training_event
      - testimonial_optional
      - seo_schema_profile
    dependencies:
      - P2-E1-T1
    output:
      - schema files
    acceptance:
      - client_proof requires publicationPermission
      - office_location supports LocalBusiness data
      - global settings singleton exists

  - id: P2-E2-T1
    epic: Migration
    title: Map old An Luật URLs to new routes
    owner:
      - CMS
      - CONTENT
    references:
      - REF_CMS_SEO
      - SRC_ANLUAT_KB
    output:
      - redirect_rule entries
      - migration spreadsheet
    acceptance:
      - Key old URLs mapped
      - Redirect status defined
      - No high-value old page left unmapped

  - id: P2-E2-T2
    epic: Content seeding
    title: Seed MVP content
    owner: CONTENT
    dependencies:
      - P2-E1-T2
      - P2-E1-T3
    output:
      - Homepage copy
      - 1 GIỜ GẶP NHƯ copy
      - 5 intake door copy
      - Core service pages
      - FAQ drafts
    acceptance:
      - All MVP pages have plainLanguageSummary
      - FAQ marked review until legal review

  - id: P2-E3-T1
    epic: Structured data
    title: Implement JSON-LD generation utilities
    owner:
      - CMS
      - FE
    dependencies:
      - P2-E1-T2
    output:
      - LegalService JSON-LD
      - FAQPage JSON-LD
      - BreadcrumbList JSON-LD
      - Person/Attorney JSON-LD
    acceptance:
      - JSON-LD matches visible content
      - FAQ emits only when visible + humanReviewed
```

## 10.3 MVP Content List

```yaml id="mvp-content-list"
mvp_content_required:
  landing_pages:
    - home
    - 1-gio-gap-nhu

  service_pages:
    - /ca-nhan/gia-dinh-ly-hon
    - /lao-dong-nhan-su
    - /doanh-nghiep
    - /tranh-tung-thu-hoi-no
    - /doanh-nghiep/ra-soat-phap-ly-noi-bo

  profile_pages:
    - /luat-su-dinh-thi-quynh-nhu
    - /ve-an-luat
    - /lien-he

  data_content:
    - 5 intake_door records
    - 6 service_package records
    - preparation checklists for family/labor/business/dispute
    - at least 12 FAQ items
    - key client_proof entries with permission
    - office_location entries
```

## 10.4 Exit Criteria

```yaml id="P2-exit"
phase_exit_criteria:
  - Sanity Studio ready.
  - Core schemas implemented.
  - MVP content seeded.
  - Old URL migration map exists.
  - JSON-LD generator implemented or stubbed.
  - CMS acceptance CMS-001 to CMS-006 ready for QA.
```

---

# 11. Phase P3 — Core Frontend Experience

## 11.1 Objective

Xây frontend shell, homepage command center, 1 GIỜ GẶP NHƯ, service templates, content rendering.

```yaml id="P3"
phase:
  id: P3
  name: Core Frontend Experience
  complexity: XL
  references:
    - REF_PRODUCT_UX
    - REF_UI_DIRECTION
    - REF_DESIGN_SYSTEM
    - REF_CMS_SEO
```

## 11.2 Epics & Tasks

```yaml id="P3-tasks"
tasks:
  - id: P3-E1-T1
    epic: Astro foundation
    title: Initialize Astro app and routing
    owner: FE
    dependencies:
      - P0-E1-T1
      - P1-E1-T2
    output:
      - Astro project structure
      - base layouts
    acceptance:
      - Home route renders
      - Layout imports tokens
      - Static build works

  - id: P3-E1-T2
    epic: Global layout
    title: Implement global header, footer, mobile menu, SEO base
    owner: FE
    dependencies:
      - P3-E1-T1
    output:
      - CompactHeader
      - footer
      - base metadata
    acceptance:
      - Header responsive
      - Mobile menu accessible
      - Footer uses Sanity global settings

  - id: P3-E1-T3
    epic: Quick Exit
    title: Implement Quick Exit vanilla JS in root layout
    owner: FE
    references:
      - REF_UI_DIRECTION
      - REF_QA
    dependencies:
      - P3-E1-T1
    output:
      - inline root layout script
      - visual button component
    acceptance:
      - Works before React hydration
      - Uses pointerdown capture
      - Replaces DOM/history quickly
      - Not managed by React lifecycle

  - id: P3-E2-T1
    epic: Homepage
    title: Build Editorial Legal Command Center homepage
    owner:
      - FE
      - UX_UI
    dependencies:
      - P1-E2-T1
      - P1-E3-T1
      - P2-E2-T2
    output:
      - homepage first fold
      - 5 intake cards
      - mobile decision stack
    acceptance:
      - Desktop golden split
      - Mobile first action visible without scroll
      - 5 intake cards render from Sanity/intake config

  - id: P3-E2-T2
    epic: 1 GIỜ GẶP NHƯ
    title: Build 1 GIỜ GẶP NHƯ landing page
    owner:
      - FE
      - UX_UI
      - CONTENT
    dependencies:
      - P3-E1-T1
      - P2-E2-T2
    output:
      - landing page
      - CTA to intake
      - trust box
    acceptance:
      - No public price displayed unless config changes
      - CTA opens intake drawer/sheet
      - First action above fold

  - id: P3-E3-T1
    epic: Service template
    title: Build compressed editorial service page template
    owner: FE
    dependencies:
      - P2-E1-T2
      - P2-E3-T1
    output:
      - service_page route
      - FAQ block
      - related CTA
    acceptance:
      - Renders service page from Sanity
      - FAQ visible and accessible
      - JSON-LD generated

  - id: P3-E3-T2
    epic: Profile pages
    title: Build attorney profile, about, contact pages
    owner: FE
    dependencies:
      - P2-E1-T4
    output:
      - /luat-su-dinh-thi-quynh-nhu
      - /ve-an-luat
      - /lien-he
    acceptance:
      - Attorney page has structured data
      - Contact page has office data
      - About page uses old An Luật proof content appropriately

  - id: P3-E4-T1
    epic: Redirects
    title: Implement old URL redirects
    owner: FE
    dependencies:
      - P2-E2-T1
    output:
      - redirect config
    acceptance:
      - Key old URLs redirect to new mapped paths
```

## 11.3 Exit Criteria

```yaml id="P3-exit"
phase_exit_criteria:
  - Homepage functional on desktop/mobile.
  - 1 GIỜ GẶP NHƯ page functional.
  - Core service pages render from Sanity.
  - Quick Exit implemented and smoke-tested.
  - JSON-LD basic output exists.
  - Redirects implemented.
```

---

# 12. Phase P4 — Data Backend & Privacy Foundation

## 12.1 Objective

Tạo Supabase schema, data boundaries, Edge Function skeleton, audit, privacy-safe analytics.

```yaml id="P4"
phase:
  id: P4
  name: Data Backend & Privacy Foundation
  complexity: XL
  references:
    - REF_ARCHITECTURE
    - REF_DATA_PRIVACY
    - REF_QA
```

## 12.2 Epics & Tasks

```yaml id="P4-tasks"
tasks:
  - id: P4-E1-T1
    epic: Database schema
    title: Implement Supabase migrations for core tables
    owner: BE
    references:
      - REF_DATA_PRIVACY
    output:
      - leads
      - lead_contact_details
      - lead_sensitive_details
      - consent_records
      - agent_sessions
      - audit_logs
    acceptance:
      - Contact PII separated from leads
      - Sensitive details separated
      - Audit table exists

  - id: P4-E1-T2
    epic: Payment/booking schema
    title: Implement booking/payment tables for MVP-B
    owner: BE
    inclusion_rule: required_only_if_MVP_B_enabled
    dependencies:
      - P4-E1-T1
    output:
      - booking_intents
      - payment_events
      - cal_bookings
    acceptance:
      - order_code unique
      - payment/booking states supported
      - no document upload table/storage required for MVP-A

  - id: P4-E2-T1
    epic: Access control
    title: Implement RLS and service role boundaries
    owner:
      - BE
      - PRIVACY_SECURITY
    dependencies:
      - P4-E1-T1
    output:
      - RLS policies
      - service role function rules
    acceptance:
      - Public cannot read leads
      - Sensitive details require authorized access
      - Audit works for sensitive access

  - id: P4-E3-T1
    epic: Edge functions
    title: Implement submit-intake Edge Function
    owner: BE
    dependencies:
      - P4-E1-T1
    output:
      - submit-intake function
    acceptance:
      - Validates input
      - Separates contact/sensitive data
      - Creates consent record
      - Does not log request body

  - id: P4-E3-T2
    epic: Analytics
    title: Implement privacy-safe analytics event layer
    owner:
      - FE
      - BE
      - PRIVACY_SECURITY
    dependencies:
      - P4-E1-T1
    output:
      - event whitelist
      - sanitizer
      - analytics_events_safe mirror optional
    acceptance:
      - No PII/free text in event payload
      - Session replay excluded from sensitive zones
```

## 12.3 Exit Criteria

```yaml id="P4-exit"
phase_exit_criteria:
  - Supabase schema migrated.
  - RLS baseline implemented.
  - submit-intake works.
  - Consent record created on intake.
  - Audit log works.
  - Privacy-safe analytics sanitizer works.
```

---

# 13. Phase P5 — Zero-Typing Intake & Agent2UI

## 13.1 Objective

Xây guided intake và Agent2UI recommendation layer.

```yaml id="P5"
phase:
  id: P5
  name: Zero-Typing Intake & Agent2UI
  complexity: XL
  references:
    - REF_AGENT2UI
    - REF_DESIGN_SYSTEM
    - REF_DATA_PRIVACY
    - REF_PRODUCT_UX
```

## 13.2 Epics & Tasks

```yaml id="P5-tasks"
tasks:
  - id: P5-E1-T1
    epic: Intake UI
    title: Implement ZeroTypingQuestionSheet
    owner: FE
    dependencies:
      - P1-E2-T2
      - P4-E3-T1
    output:
      - React component
      - step engine
    acceptance:
      - Steps 1-4 zero typing
      - Mobile bottom sheet one question per screen
      - State persists during flow

  - id: P5-E1-T2
    epic: Intake UI
    title: Implement contact and document-possession context steps
    owner: FE
    dependencies:
      - P5-E1-T1
    output:
      - ContactMethodSelector
      - has_related_documents flag
      - optional generic context note if approved
    acceptance:
      - Contact input only appears at correct step
      - Optional context not required
      - No official document upload in MVP
      - User can indicate they have related documents

  - id: P5-E2-T1
    epic: Rule router
    title: Implement deterministic routing engine
    owner: BE
    references:
      - REF_AGENT2UI
    dependencies:
      - P4-E1-T1
    output:
      - routing rules
      - reason codes
      - policy flags
    acceptance:
      - family/child custody routes correctly
      - domestic violence routes to SafetyNotice/human review
      - B2B legal health routes correctly
      - conflict-risk cases route to review

  - id: P5-E2-T2
    epic: Agent2UI contract
    title: Implement Agent2UI response schema validation
    owner:
      - FE
      - BE
    dependencies:
      - P5-E2-T1
    output:
      - JSON schema
      - validator backend
      - validator frontend
    acceptance:
      - Unknown component rejected
      - Unknown action rejected
      - Invalid schema falls back safely

  - id: P5-E2-T3
    epic: Agent2UI renderer
    title: Implement AgentRenderer component
    owner: FE
    dependencies:
      - P1-E3-T2
      - P5-E2-T2
    output:
      - Renderer with component allowlist
    acceptance:
      - Renders AgentRecommendationPanel
      - Renders SafetyNotice
      - Renders SecretaryReviewPanel fallback
      - No raw HTML supported

  - id: P5-E3-T1
    epic: Preparation sheet
    title: Implement PreparationChecklist rendering after submit
    owner:
      - FE
      - CMS
    dependencies:
      - P2-E1-T3
      - P5-E2-T3
    output:
      - checklist mapping
    acceptance:
      - family/labor/business/dispute checklists render
      - No user text echoed
      - Can be sent/downloaded later as backlog
```

## 13.3 Exit Criteria

```yaml id="P5-exit"
phase_exit_criteria:
  - Intake can be completed from homepage and 1 GIỜ GẶP NHƯ page.
  - Agent2UI recommendation renders.
  - SafetyNotice works.
  - SecretaryReview fallback works.
  - No PII sent to agent.
  - Analytics safe events emitted.
```

---

# 14. Phase P6 — Payment & Scheduling Orchestration (MVP-B Gated)

## 14.1 Objective

Tích hợp payOS + Cal.com theo hybrid auto-book/review model **chỉ khi Sprint 0 POC pass**. Nếu POC fail hoặc PO chốt MVP-A, P6 chuyển sang backlog sau MVP và launch mặc định đi theo secretary callback.

```yaml id="P6"
phase:
  id: P6
  name: Payment & Scheduling Orchestration - MVP-B Gated
  complexity: XL
  inclusion_rule: include_in_mvp_only_if_sprint_0_poc_passes
  fallback_if_not_included: secretary_callback_and_manual_booking
  references:
    - REF_PAYMENT
    - REF_ARCHITECTURE
    - REF_DATA_PRIVACY
    - REF_QA
```

## 14.2 Epics & Tasks

```yaml id="P6-tasks"
tasks:
  - id: P6-E1-T1
    epic: Cal.com setup
    title: Configure Cal.com event types
    owner:
      - BE
      - OPS
    output:
      - one_hour_with_nhu_auto
      - one_hour_with_nhu_review
      - business_consultation_review
    acceptance:
      - Event types configured
      - Availability block model documented
      - Test event types available in staging

  - id: P6-E1-T2
    epic: Availability
    title: Implement backend availability fetch
    owner: BE
    dependencies:
      - P6-E1-T1
    output:
      - get-availability function
    acceptance:
      - Frontend receives safe slot list
      - No Cal.com secret exposed

  - id: P6-E2-T1
    epic: Booking intent
    title: Implement create-booking-intent
    owner: BE
    dependencies:
      - P4-E1-T2
      - P6-E1-T2
    output:
      - Edge Function
      - slot lock
    acceptance:
      - Creates payment_pending booking intent
      - Slot lock expires
      - Duplicate slot lock handled

  - id: P6-E2-T2
    epic: payOS
    title: Implement create-payos-payment-link
    owner: BE
    dependencies:
      - P6-E2-T1
    output:
      - payment link function
    acceptance:
      - Creates payment link
      - Stores checkout URL
      - Description contains no case details

  - id: P6-E2-T3
    epic: payOS webhook
    title: Implement payos-webhook
    owner: BE
    dependencies:
      - P6-E2-T2
    output:
      - webhook function
    acceptance:
      - Signature verified
      - Amount/orderCode verified
      - Idempotent duplicate processing
      - Invalid webhook rejected

  - id: P6-E3-T1
    epic: Cal.com booking
    title: Implement create-cal-booking after payment success
    owner: BE
    dependencies:
      - P6-E2-T3
    output:
      - create-cal-booking function
    acceptance:
      - Only runs after verified payment_success
      - Rechecks slot
      - Does not duplicate booking

  - id: P6-E3-T2
    epic: Payment UI
    title: Implement SlotSelector, PaymentQRCodePanel, PaymentStatusPanel
    owner: FE
    dependencies:
      - P6-E2-T1
      - P6-E2-T2
    output:
      - booking/payment UI
    acceptance:
      - Shows payment pending/success/expired states
      - Does not mark paid from frontend alone
      - Shows privacy-safe payment copy

  - id: P6-E4-T1
    epic: Exceptions
    title: Implement payment exception handling
    owner:
      - BE
      - OPS
    dependencies:
      - P6-E3-T1
    output:
      - payment_resolution_queue trigger
    acceptance:
      - late payment routes to manual resolution
      - booking failure after payment routes urgent
      - amount mismatch does not book
```

## 14.3 Exit Criteria

```yaml id="P6-exit"
phase_exit_criteria:
  - Sprint 0 POC pass documented.
  - PO explicitly approves MVP-B inclusion.
  - Auto-book happy path works on staging.
  - Invalid webhook rejected.
  - Duplicate webhook idempotent.
  - Payment success creates Cal.com booking.
  - Booking not created before payment.
  - Payment exceptions enter queue.
```

---

# 15. Phase P7 — Internal Operations Workflow

## 15.1 Objective

Xây ops flow tối thiểu cho MVP-A: lead queue, callback, secretary review, privacy gating và audit. Payment resolution chỉ bắt buộc nếu MVP-B được bật.

```yaml id="P7"
phase:
  id: P7
  name: Internal Operations Workflow
  complexity: L
  mvp_a_scope: minimal_ops_dashboard
  mvp_b_addon:
    - payment_resolution_queue
    - reschedule_or_refund_status
  references:
    - REF_OPERATIONS
    - REF_DATA_PRIVACY
    - REF_PAYMENT
```

## 15.2 Epics & Tasks

```yaml id="P7-tasks"
tasks:
  - id: P7-E1-T1
    epic: Operations dashboard
    title: Build lead queue overview
    owner:
      - FE
      - BE
      - OPS
    dependencies:
      - P4-E1-T1
    output:
      - urgent_queue
      - secretary_review_queue
      - lawyer_review_queue
      - payment_resolution_queue
    acceptance:
      - Queues visible
      - Filter by status/legal_area/urgency
      - SLA badge visible

  - id: P7-E1-T2
    epic: Lead detail
    title: Build lead detail view with privacy gating
    owner:
      - FE
      - BE
    dependencies:
      - P7-E1-T1
    output:
      - lead detail page
      - contact detail panel
      - sensitive detail panel
    acceptance:
      - Sensitive access audited
      - Unauthorized users cannot view sensitive details
      - Privacy warning shown before sensitive view

  - id: P7-E2-T1
    epic: Callback workflow
    title: Implement callback attempt logging
    owner:
      - FE
      - BE
      - OPS
    dependencies:
      - P7-E1-T2
    output:
      - callback attempt form
    acceptance:
      - attempt number/channel/outcome/actor/timestamp recorded
      - no_response policy supported

  - id: P7-E2-T2
    epic: Review workflow
    title: Implement secretary/lawyer review state transitions
    owner:
      - BE
      - OPS
    dependencies:
      - P7-E1-T2
    output:
      - transition rules
      - reason codes
    acceptance:
      - conflict_found cannot book
      - lawyer_review_required works
      - secretary can escalate

  - id: P7-E3-T1
    epic: Payment resolution
    title: Build payment resolution queue actions
    owner:
      - FE
      - BE
      - OPS
    inclusion_rule: required_only_if_MVP_B_enabled
    dependencies:
      - P6-E4-T1
    output:
      - payment exception detail
      - reschedule/refund-required status
    acceptance:
      - payment exception owner visible
      - manual resolution action logged
      - client message status available

  - id: P7-E4-T1
    epic: Scripts & templates
    title: Add secretary scripts and client-facing status messages
    owner:
      - OPS
      - CONTENT
      - LEGAL_REVIEW
    references:
      - REF_OPERATIONS
    output:
      - scripts in dashboard or internal docs
    acceptance:
      - Sensitive script confirms safe context
      - Payment script available
      - Conflict decline script available
```

## 15.3 Exit Criteria

```yaml id="P7-exit"
phase_exit_criteria:
  - Internal queues exist.
  - Lead detail privacy gating works.
  - Callback attempts logged.
  - State transitions enforced.
  - Payment resolution queue works if MVP-B is enabled.
  - Basic scripts approved.
```

---

# 16. Phase P8 — QA Hardening, Security, Privacy & Launch

## 16.1 Objective

Thực thi test plan, sửa blockers, staging beta, production MVP.

```yaml id="P8"
phase:
  id: P8
  name: QA Hardening, Security, Privacy & Launch
  complexity: XL
  references:
    - REF_QA
    - all_previous_specs
```

## 16.2 Epics & Tasks

```yaml id="P8-tasks"
tasks:
  - id: P8-E1-T1
    epic: Automated tests
    title: Implement unit/component/integration/e2e tests
    owner: QA
    dependencies:
      - P5-E2-T3
      - P6-E3-T1_if_MVP_B_enabled
      - P7-E1-T1
    output:
      - test suite
    acceptance:
      - Agent2UI schema tests pass
      - Payment webhook tests pass if MVP-B enabled
      - Core e2e flows pass

  - id: P8-E1-T2
    epic: Privacy tests
    title: Verify no PII analytics and no session replay site-wide
    owner:
      - QA
      - PRIVACY_SECURITY
    dependencies:
      - P4-E3-T2
    output:
      - privacy test report
    acceptance:
      - PRIV-001 to PRIV-006 pass
      - No PII/free text in event payload

  - id: P8-E1-T3
    epic: Security tests
    title: Test Agent2UI injection, MVP-B webhook spoofing and future private storage
    owner:
      - QA
      - PRIVACY_SECURITY
    dependencies:
      - P6-E2-T3_if_MVP_B_enabled
      - P5-E2-T2
    output:
      - security test report
    acceptance:
      - Invalid payOS webhook rejected if MVP-B enabled
      - Agent raw HTML rejected
      - Documents private if document upload is later enabled

  - id: P8-E2-T1
    epic: Accessibility
    title: Run accessibility baseline
    owner:
      - QA
      - FE
    output:
      - a11y report
    acceptance:
      - Keyboard flow works
      - Drawer/bottom sheet focus trap works
      - Contrast AA baseline passes

  - id: P8-E2-T2
    epic: Performance
    title: Run performance and bundle checks
    owner:
      - QA
      - FE
    output:
      - performance report
    acceptance:
      - Core Web Vitals targets reasonable
      - Agent bundle lazy-loaded
      - Payment bundle lazy-loaded if MVP-B enabled
      - Quick Exit independent of React

  - id: P8-E3-T1
    epic: Content/legal review
    title: Final review of copy, FAQ, structured data, old redirects
    owner:
      - CONTENT
      - LEGAL_REVIEW
      - CMS
    dependencies:
      - P2-E2-T2
      - P3-E3-T1
    output:
      - content approval report
    acceptance:
      - FAQ humanReviewed
      - No forbidden claims
      - JSON-LD matches visible content
      - Redirects verified

  - id: P8-E4-T1
    epic: Staging beta
    title: Run end-to-end staging beta
    owner: PO
    dependencies:
      - P8-E1-T1
      - P8-E1-T2
      - P8-E1-T3
    output:
      - staging beta signoff
    acceptance:
      - No S0 blockers
      - No unwaived S1 critical
      - Ops can process synthetic leads

  - id: P8-E5-T1
    epic: Production launch
    title: Deploy production MVP and run smoke tests
    owner:
      - FE
      - BE
      - QA
      - PO
    dependencies:
      - P8-E4-T1
    output:
      - production deployment
      - smoke test report
    acceptance:
      - Homepage loads
      - Intake opens
      - Synthetic lead reaches queue
      - Quick Exit works
      - Structured data present
```

## 16.3 Launch Blockers

```yaml id="launch-blockers"
launch_blockers:
  - PII leak to analytics
  - Session replay enabled during MVP
  - Quick Exit not working
  - payOS webhook signature not verified if MVP-B enabled
  - Booking confirmed before payment success if MVP-B enabled
  - Duplicate Cal.com booking possible if MVP-B enabled
  - Agent can render raw HTML/script
  - Sensitive documents publicly accessible if document upload is later enabled
  - Urgent queue not visible to operations
  - No audit log for sensitive data access
```

---

# 17. Phase P9 — Post-Launch Optimization

## 17.1 Objective

Đo lường, tối ưu, mở rộng nội dung, giảm friction, cải thiện ops.

```yaml id="P9"
phase:
  id: P9
  name: Post-Launch Optimization
  complexity: ongoing
  references:
    - REF_QA
    - REF_OPERATIONS
    - REF_CMS_SEO
```

## 17.2 Backlog

```yaml id="P9-backlog"
post_launch_backlog:
  - id: P9-B1
    title: Improve Agent2UI routing with labeled production data
    owner:
      - BE
      - OPS
    requires:
      - privacy-safe labels only

  - id: P9-B2
    title: Expand Legal Health Score into downloadable report
    owner:
      - FE
      - CONTENT
      - BE

  - id: P9-B3
    title: Add PDF/email delivery for Preparation Checklist
    owner:
      - FE
      - BE

  - id: P9-B4
    title: Add richer internal CRM views
    owner:
      - FE
      - BE
      - OPS

  - id: P9-B5
    title: Expand SEO content clusters
    owner:
      - CONTENT
      - CMS

  - id: P9-B6
    title: Add media kit download and press profile
    owner:
      - CONTENT
      - FE

  - id: P9-B7
    title: Add A/B tests for intake card wording
    owner:
      - PO
      - FE
      - QA
    privacy_note: no session replay, no PII
```

---

# 18. MVP Backlog by Epic

## 18.1 Epic: Design System

```yaml id="backlog-design"
mvp_backlog_design_system:
  - id: DS-001
    title: Token library in Figma
    priority: P0_must
    references:
      - REF_DESIGN_SYSTEM

  - id: DS-002
    title: CSS token implementation
    priority: P0_must
    references:
      - REF_DESIGN_SYSTEM

  - id: DS-003
    title: Core responsive layouts
    priority: P0_must

  - id: DS-004
    title: Component states and variants
    priority: P1_should
```

## 18.2 Epic: CMS & Content

```yaml id="backlog-cms"
mvp_backlog_cms:
  - id: CMS-001
    title: Sanity schemas for service pages and packages
    priority: P0_must

  - id: CMS-002
    title: Sanity schemas for FAQ, checklist, attorney profile
    priority: P0_must

  - id: CMS-003
    title: MVP content seed
    priority: P0_must

  - id: CMS-004
    title: Redirect rules for old URLs
    priority: P0_must

  - id: CMS-005
    title: Structured data generators
    priority: P1_should
```

## 18.3 Epic: Frontend

```yaml id="backlog-frontend"
mvp_backlog_frontend:
  - id: FE-001
    title: Astro shell and routing
    priority: P0_must

  - id: FE-002
    title: Homepage command center
    priority: P0_must

  - id: FE-003
    title: 1 GIỜ GẶP NHƯ landing
    priority: P0_must

  - id: FE-004
    title: Service page template
    priority: P0_must

  - id: FE-005
    title: Mobile bottom sheet
    priority: P0_must

  - id: FE-006
    title: Desktop side drawer
    priority: P0_must

  - id: FE-007
    title: Quick Exit vanilla JS
    priority: P0_must
```

## 18.4 Epic: Backend/Data

```yaml id="backlog-backend"
mvp_backlog_backend:
  - id: BE-001
    title: Supabase schema and migrations
    priority: P0_must

  - id: BE-002
    title: RLS baseline and access control
    priority: P0_must

  - id: BE-003
    title: submit-intake Edge Function
    priority: P0_must

  - id: BE-004
    title: audit logging
    priority: P0_must

  - id: BE-005
    title: privacy-safe analytics sanitizer
    priority: P0_must
```

## 18.5 Epic: Agent2UI

```yaml id="backlog-agent2ui"
mvp_backlog_agent2ui:
  - id: A2UI-001
    title: Deterministic routing engine
    priority: P0_must

  - id: A2UI-002
    title: JSON Schema validation
    priority: P0_must

  - id: A2UI-003
    title: AgentRenderer allowlist
    priority: P0_must

  - id: A2UI-004
    title: RecommendationPanel/SafetyNotice/SecretaryReviewPanel
    priority: P0_must

  - id: A2UI-005
    title: PreparationChecklist
    priority: P1_should
```

## 18.6 Epic: Payment & Booking

```yaml id="backlog-payment"
mvp_backlog_payment_booking:
  - id: PAY-001
    title: Cal.com event type setup
    priority: P0_must_if_MVP_B

  - id: PAY-002
    title: booking_intent and slot lock
    priority: P0_must_if_MVP_B

  - id: PAY-003
    title: payOS payment link creation
    priority: P0_must_if_MVP_B

  - id: PAY-004
    title: payOS webhook verification
    priority: P0_must_if_MVP_B

  - id: PAY-005
    title: Cal.com booking after payment success
    priority: P0_must_if_MVP_B

  - id: PAY-006
    title: Payment exception handling
    priority: P0_must_if_MVP_B

  - id: PAY-007
    title: Payment QR/status UI
    priority: P0_must_if_MVP_B
```

## 18.7 Epic: Operations

```yaml id="backlog-ops"
mvp_backlog_operations:
  - id: OPS-001
    title: Lead queue overview
    priority: P0_must

  - id: OPS-002
    title: Lead detail view with privacy gating
    priority: P0_must

  - id: OPS-003
    title: Callback attempt logging
    priority: P0_must

  - id: OPS-004
    title: Payment resolution queue
    priority: P0_must_if_MVP_B

  - id: OPS-005
    title: Conflict check status
    priority: P1_should

  - id: OPS-006
    title: Scripts and templates
    priority: P1_should
```

## 18.8 Epic: QA & Launch

```yaml id="backlog-qa"
mvp_backlog_qa:
  - id: QA-001
    title: Agent2UI schema tests
    priority: P0_must

  - id: QA-002
    title: Payment webhook tests
    priority: P0_must

  - id: QA-003
    title: No PII analytics tests
    priority: P0_must

  - id: QA-004
    title: Quick Exit tests
    priority: P0_must

  - id: QA-005
    title: Core e2e tests
    priority: P0_must

  - id: QA-006
    title: Accessibility baseline
    priority: P1_should

  - id: QA-007
    title: Performance baseline
    priority: P1_should
```

---

# 19. Dependency Graph

```yaml id="dependency-graph"
dependency_graph:
  P0:
    unlocks:
      - P1
      - P2
      - P4

  P1:
    unlocks:
      - P3
      - P5

  P2:
    unlocks:
      - P3
      - P8_content_review

  P3:
    depends_on:
      - P1
      - P2
    unlocks:
      - P5_frontend_integration
      - P8_ui_qa

  P4:
    depends_on:
      - P0
    unlocks:
      - P5
      - P6
      - P7

  P5:
    depends_on:
      - P1
      - P3
      - P4
    unlocks:
      - P6_eligible_flow
      - P8_agent_tests

  P6:
    depends_on:
      - P4
      - P5
    unlocks:
      - P7_payment_resolution
      - P8_payment_tests

  P7:
    depends_on:
      - P4
      - P6
    unlocks:
      - P8_ops_qa

  P8:
    depends_on:
      - P3
      - P5
      - P6
      - P7
```

---

# 20. Risk Register

```yaml id="risk-register"
risk_register:
  - id: RISK-001
    title: payOS SDK compatibility with Supabase Edge Functions
    likelihood: medium
    impact: high
    owner: BE
    mitigation:
      - POC early in P6
      - fallback to payOS HTTP API
    reference:
      - REF_PAYMENT

  - id: RISK-002
    title: Cal.com slot race condition after payment
    likelihood: medium
    impact: high
    owner: BE
    mitigation:
      - internal slot lock
      - recheck availability before create booking
      - payment_resolution_queue
    reference:
      - REF_PAYMENT

  - id: RISK-003
    title: PII leak to analytics
    likelihood: medium
    impact: critical
    owner: PRIVACY_SECURITY
    mitigation:
      - event whitelist
      - payload sanitizer
      - tests PRIV-001
    reference:
      - REF_DATA_PRIVACY
      - REF_QA

  - id: RISK-004
    title: Agent2UI unsafe output
    likelihood: medium
    impact: critical
    owner:
      - FE
      - BE
    mitigation:
      - JSON Schema validation
      - component allowlist
      - forbidden action rejection
    reference:
      - REF_AGENT2UI

  - id: RISK-005
    title: Operations overwhelmed by low-quality leads
    likelihood: medium
    impact: medium_high
    owner: OPS
    mitigation:
      - zero-typing taxonomy
      - secretary review queues
      - lead status model
    reference:
      - REF_OPERATIONS

  - id: RISK-006
    title: CMS content becomes inconsistent with structured data
    likelihood: medium
    impact: medium
    owner:
      - CMS
      - CONTENT
    mitigation:
      - build-time validation
      - visible FAQ rule
      - humanReviewed gate
    reference:
      - REF_CMS_SEO

  - id: RISK-007
    title: Quick Exit delayed by React
    likelihood: low
    impact: critical
    owner: FE
    mitigation:
      - vanilla JS inline in root layout
      - test before hydration
    reference:
      - REF_QA
      - REF_UI_DIRECTION
```

---

# 21. Definition of Done

## 21.1 General DoD

```yaml id="general-dod"
definition_of_done_general:
  - Code merged to staging branch.
  - Typecheck passes.
  - Lint passes.
  - Relevant tests pass.
  - Acceptance criteria met.
  - No S0 blocker introduced.
  - Documentation updated if contract changed.
  - Privacy/security reviewed if touching sensitive flow.
```

## 21.2 Frontend DoD

```yaml id="frontend-dod"
definition_of_done_frontend:
  - Responsive behavior verified on desktop/mobile.
  - Accessibility baseline checked.
  - No arbitrary token values in core components.
  - No PII emitted in analytics.
  - Component states implemented.
  - Error/fallback states implemented.
```

## 21.3 Backend DoD

```yaml id="backend-dod"
definition_of_done_backend:
  - Input validation implemented.
  - Secrets not exposed.
  - Edge Function logs do not include sensitive body.
  - Database migration committed.
  - RLS considered.
  - Idempotency implemented for webhooks.
  - Audit logs added for sensitive actions.
```

## 21.4 CMS DoD

```yaml id="cms-dod"
definition_of_done_cms:
  - Schema validation exists.
  - Preview works or is stubbed.
  - No sensitive fields in Sanity.
  - Content can be queried by Astro.
  - Structured data fields available.
  - Editor helper text written in Vietnamese.
```

## 21.5 Agent2UI DoD

```yaml id="agent2ui-dod"
definition_of_done_agent2ui:
  - Request schema validated.
  - Response schema validated.
  - Component allowlist enforced.
  - Forbidden actions rejected.
  - PII stripped or rejected.
  - Safe fallback implemented.
  - Unit tests cover routing rules.
```

## 21.6 Payment/Booking DoD

```yaml id="payment-dod"
definition_of_done_payment_booking:
  - Payment link created from booking_intent.
  - Webhook signature verified.
  - Amount and order_code verified.
  - Duplicate webhook idempotent.
  - Booking only confirmed after payment_success.
  - Exception states route to payment_resolution_queue.
```

---

# 22. MVP Release Criteria

```yaml id="mvp-release-criteria"
mvp_release_criteria:
  must_have:
    - Homepage command center live.
    - 1 GIỜ GẶP NHƯ live.
    - Core intake zero-typing live.
    - Agent2UI recommendation and fallback live.
    - Supabase lead storage live.
    - Secretary review queue live.
    - Minimal operations dashboard live.
    - Preparation checklist after submit live.
    - Privacy-safe analytics live.
    - Session replay disabled site-wide.
    - Quick Exit live.
    - Core CMS pages live.
    - Old URL redirects live.
    - QA S0 blockers = 0.
    - QA unwaived S1 critical = 0.

  mvp_b_gated_must_have_if_enabled:
    - Sprint 0 POC pass report.
    - PO approval to include MVP-B.
    - payOS payment link + webhook verification live for auto-book flow.
    - Cal.com booking after verified payment success live.
    - No duplicate booking on duplicate webhook.
    - Payment resolution queue live.

  should_have:
    - FAQ structured data.
    - Basic operations dashboard metrics.
    - Content review workflow.

  may_defer:
    - Full Legal Health Score.
    - Full Legal Safety Map.
    - Official document upload.
    - PDF checklist export.
    - Advanced CRM.
    - Email automation richness.
    - A/B testing.
    - LLM or advanced AI refinement.
    - Multi-language support.
```

---

# 23. Production Launch Checklist

```yaml id="production-launch-checklist"
production_launch_checklist:
  infrastructure:
    - DNS configured
    - SSL active
    - Cloudflare production deployment ready
    - Supabase production migrated
    - Sanity production dataset populated
    - Environment secrets configured

  content:
    - Homepage approved
    - 1 GIỜ GẶP NHƯ approved
    - Core service pages approved
    - Attorney profile approved
    - About/contact approved
    - FAQ reviewed
    - Client proof permission verified
    - Redirects tested

  integrations:
    - payOS production credentials configured if MVP-B enabled
    - payOS webhook endpoint configured if MVP-B enabled
    - Cal.com production event types configured if MVP-B enabled
    - Booking happy path tested if MVP-B enabled
    - Payment exception tested or simulated if MVP-B enabled

  privacy:
    - Analytics event whitelist active
    - Session replay disabled site-wide
    - Privacy notice visible
    - Consent records created
    - Sensitive data audit enabled

  safety:
    - Quick Exit tested
    - SafetyNotice tested
    - Sensitive scripts approved

  operations:
    - Secretary access ready
    - Lead queues ready
    - Callback workflow ready
    - Payment resolution owner assigned if MVP-B enabled
    - Escalation rules ready

  QA:
    - S0 blockers zero
    - S1 critical zero or waived
    - E2E core flows pass
    - Production smoke plan ready
```

---

# 24. Machine-Readable Summary

```json id="machine-summary"
{
  "document_id": "anluat_implementation_roadmap_mvp_backlog",
  "version": "1.0",
  "status": "draft_for_review",
  "mvp_strategy": "MVP-A core by default; MVP-B payment/auto-book only if Sprint 0 POC passes",
  "timeline_commitment_rule": "Timeline only committed after Sprint 0 POC report",
  "phases": [
    "S0_Mandatory_POC_Gate",
    "P0_Project_Foundation_Governance",
    "P1_Design_System_UI_Foundation",
    "P2_CMS_Content_Model_Migration",
    "P3_Core_Frontend_Experience",
    "P4_Data_Backend_Privacy_Foundation",
    "P5_Zero_Typing_Intake_Agent2UI",
    "P6_Payment_Scheduling_Orchestration",
    "P7_Internal_Operations_Workflow",
    "P8_QA_Hardening_Launch",
    "P9_Post_Launch_Optimization"
  ],
  "must_have_release_items": [
    "homepage_command_center",
    "one_hour_with_nhu_landing",
    "zero_typing_intake",
    "agent2ui_recommendation_and_fallback",
    "supabase_lead_storage",
    "privacy_safe_analytics",
    "secretary_review_queue",
    "minimal_ops_dashboard",
    "preparation_checklist",
    "quick_exit_vanilla_js",
    "core_cms_pages",
    "old_url_redirects",
    "qa_s0_zero",
    "qa_unwaived_s1_zero"
  ],
  "mvp_b_gated_items": [
    "payos_payment_link_webhook_verification",
    "calcom_booking_after_payment_success",
    "no_duplicate_booking",
    "payment_resolution_queue"
  ],
  "deferred_from_mvp_a": [
    "LLM",
    "full_Legal_Health_Score",
    "full_Legal_Safety_Map",
    "official_document_upload",
    "full_ops_dashboard",
    "full_Sanity_schema_set"
  ],
  "critical_dependencies": {
    "P3": ["P1", "P2"],
    "P5": ["P1", "P3", "P4"],
    "P6": ["S0_POC_PASS", "P4", "P5"],
    "P7": ["P4", "P6_if_MVP_B"],
    "P8": ["P3", "P5", "P7", "P6_if_MVP_B"]
  },
  "non_negotiables": [
    "no_pii_in_analytics",
    "no_session_replay_site_wide_for_MVP",
    "quick_exit_outside_react",
    "payos_webhook_signature_verification_if_MVP_B",
    "calcom_booking_only_after_payment_success_if_MVP_B",
    "agent2ui_component_allowlist",
    "sanity_public_content_only",
    "faq_schema_visible_and_reviewed",
    "sensitive_access_audited"
  ],
  "launch_blockers": [
    "PII leak to analytics",
    "session replay enabled during MVP",
    "quick exit not working",
    "booking confirmed before payment if MVP-B enabled",
    "payOS webhook not verified if MVP-B enabled",
    "duplicate booking possible if MVP-B enabled",
    "agent renders raw script/html",
    "sensitive document public access if document upload is later enabled",
    "urgent queue missing",
    "audit missing for sensitive access"
  ]
}
```

---

# 25. Final Decision

Roadmap tối ưu cho AnLuật.com là triển khai theo thứ tự:

> **Foundation → Design System → CMS → Core Frontend → Data/Privacy → Agent2UI → Payment/Booking → Operations → QA/Launch.**

Không đảo thứ tự này trừ khi có lý do cực rõ. Đặc biệt:

* Không làm payment trước khi data model và state machine xong.
* Không làm Agent2UI trước khi component allowlist xong.
* Không làm content migration trước khi CMS schema xong.
* Không launch trước khi ops queue và payment resolution queue hoạt động.
* Không ai được nói “cái đó để sau sửa” với Quick Exit, PII analytics, webhook verification, hoặc duplicate booking. Đó không phải technical debt. Đó là hố tử thần có giao diện người dùng.

Bản roadmap này đủ chi tiết để chuyển thành issue tracker/Jira/Linear/Notion. Và vâng, nếu team vẫn cãi nhau sau tài liệu này, vấn đề không còn là tài liệu nữa. Vấn đề là con người, thứ tôi rất tiếc là vẫn nằm ngoài phạm vi debug.

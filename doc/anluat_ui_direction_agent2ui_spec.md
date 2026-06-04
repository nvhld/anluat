---
document_id: anluat_ui_direction_agent2ui_spec
version: 1.0
status: draft
language: vi-VN
project: Website mới An Luật
primary_domain: anluat.com
spec_type: UI Direction / Responsive Design / Agent2UI Interface
primary_conversion_asset: 1 GIỜ GẶP NHƯ
last_updated: 2026-06-01
audience:
  - founder
  - product_owner
  - dandatto_studio
  - frontend_developer
  - backend_developer
  - ai_agent_engineer
  - content_team
  - automation_agent
machine_readable: true
---

# UI Direction Specification: AnLuật.com

## 0. Mục đích tài liệu

Tài liệu này chuyển hóa định hướng UX của website mới An Luật thành hệ thống UI cụ thể, có thể dùng cho Dandatto Studio, developer và agent/máy đọc được.

Trọng tâm của tài liệu là:

1. UI tối ưu đồng thời cho desktop và mobile.
2. Hạn chế tối đa scroll.
3. Thiết kế theo tỷ lệ vàng / golden ratio.
4. Form gần như zero-typing.
5. Áp dụng Agent2UI: agent không chỉ chat, mà sinh ra giao diện tương ứng theo ngữ cảnh.
6. Giữ tinh thần editorial, trust-centered, AI-ready và humanized law firm design.

---

## 1. UI North Star

```yaml
ui_north_star: >
  AnLuật.com là một Editorial Legal Command Center vận hành bằng Agent2UI:
  desktop dùng split layout theo tỷ lệ vàng 61.8/38.2,
  mobile dùng decision stack và bottom sheet,
  mỗi màn hình chỉ phục vụ một quyết định,
  form chuyển thành zero-typing guided intake,
  agent sinh recommendation panel, checklist, score meter và next-step UI theo ngữ cảnh.
```

---

## 2. Core UI Philosophy

```yaml
ui_philosophy:
  - id: one_screen_one_decision
    name: Một màn hình, một quyết định
    description: >
      Mỗi viewport chỉ nên yêu cầu người dùng thực hiện một hành động chính:
      chọn vấn đề, chọn mức độ khẩn cấp, xác nhận luồng, hoặc để lại thông tin.

  - id: editorial_trust
    name: Editorial Trust-Centered Design
    description: >
      UI cần tạo cảm giác bình tĩnh, sang trọng, có chiều sâu, giống một layout tạp chí cao cấp,
      không phải template công ty luật cũ.

  - id: golden_ratio_layout
    name: Golden Ratio Layout
    description: >
      Các bố cục chính dùng tỷ lệ 61.8/38.2, spacing Fibonacci và hierarchy typography theo tỷ lệ vàng.

  - id: zero_typing_intake
    name: Zero-Typing Intake
    description: >
      Người dùng chủ yếu tap/chọn/swipe. Typing chỉ xuất hiện ở bước cuối cho số điện thoại hoặc ghi chú tùy chọn.

  - id: agent_to_ui
    name: Agent2UI, không phải chatbot
    description: >
      Agent không chỉ trả lời bằng chữ. Agent render UI phù hợp: cards, checklist, score meter, recommendation panel, next-step CTA.

  - id: desktop_mobile_parallel
    name: Desktop và mobile thiết kế song song
    description: >
      Mobile không phải desktop thu nhỏ. Desktop dùng split panels; mobile dùng decision stack và bottom sheet.

  - id: ai_ready_interface
    name: AI-ready interface
    description: >
      Giao diện và HTML phải hỗ trợ schema, FAQ, content blocks rõ ràng để AI/search engines đọc được.
```

---

## 3. Design Direction Summary

```yaml
design_direction:
  name: Editorial Legal Command Center
  short_description: >
    Một giao diện luật cao cấp, ít scroll, dẫn đường bằng câu hỏi, xử lý intake bằng Agent2UI,
    dùng hình ảnh thật và typography lớn để xây niềm tin.
  avoid:
    - brochureware law firm website
    - stock photos of handshake / gavel / court columns
    - oversized dropdown menus
    - long scroll pages with repeated CTA
    - generic contact forms
    - chatbot bubble as primary intake
  prefer:
    - editorial split layout
    - high-quality real photography / micro-video
    - large typography
    - reduced color palette
    - side drawer on desktop
    - bottom sheet on mobile
    - card/chip-based questions
    - agent-generated UI panels
```

---

## 4. Golden Ratio Design System

### 4.1 Core ratio tokens

```yaml
golden_ratio_tokens:
  phi: 1.618
  inverse_phi: 0.618
  primary_area_percent: 61.8
  secondary_area_percent: 38.2
```

### 4.2 Layout tokens

```yaml
layout_tokens:
  desktop_split:
    primary_area: 61.8%
    secondary_area: 38.2%
    usage:
      - hero
      - intake result panel
      - legal health score
      - service pages
      - attorney profile

  modal_split:
    content_area: 61.8%
    action_area: 38.2%
    usage:
      - desktop side drawer
      - confirmation panel
      - agent recommendation panel

  card_ratio:
    default: 1.618
    portrait: 0.618
    square_allowed: false

  content_width:
    max_desktop: 1180px
    reading_width: 680px
    compact_width: 420px
    mobile_safe_width: calc(100vw - 34px)
```

### 4.3 Spacing tokens: Fibonacci scale

```yaml
spacing_scale:
  xxs: 3px
  xs: 5px
  sm: 8px
  md: 13px
  lg: 21px
  xl: 34px
  xxl: 55px
  xxxl: 89px
  xxxxl: 144px
```

### 4.4 Typography scale

```yaml
typography_scale:
  hero_desktop:
    min: 56px
    preferred: 6vw
    max: 89px
    css: clamp(56px, 6vw, 89px)
  hero_mobile:
    min: 34px
    preferred: 11vw
    max: 55px
    css: clamp(34px, 11vw, 55px)
  h1: 55px
  h2: 34px
  h3: 21px
  body: 16px-18px
  small: 13px
  line_height_body: 1.618
  line_height_heading: 1.05-1.15
```

---

## 5. Responsive Strategy

Không dùng tư duy “desktop rồi co lại cho mobile”. Mỗi context có layout và interaction riêng.

```yaml
responsive_contexts:
  desktop:
    width: 1200px+
    layout: split_panels_editorial
    primary_ratio: 61.8/38.2
    interaction:
      - click
      - keyboard
      - hover_optional
    intake_pattern: right_side_drawer
    scroll_policy: max_2_major_scrolls_per_page

  tablet:
    width: 768px-1199px
    layout: stacked_split_hybrid
    primary_ratio: adaptive_61.8/38.2
    interaction:
      - tap
      - swipe_optional
    intake_pattern: centered_modal
    scroll_policy: moderate

  mobile:
    width: 320px-767px
    layout: single_decision_screen
    primary_ratio: vertical_decision_stack
    interaction:
      - tap
      - swipe
      - thumb_first
    intake_pattern: bottom_sheet
    scroll_policy: avoid_page_scroll_use_internal_steps
```

---

## 6. Scroll Minimization Model

Website dùng mô hình screen pods thay vì trang dài.

```yaml
screen_pods:
  - id: pod_1_intent
    name: Intent Capture
    goal: Người dùng chọn vấn đề pháp lý chính
    max_height: 100svh
    primary_component:
      - EditorialHero
      - IntakeDoorCards

  - id: pod_2_recommendation
    name: Agent Recommendation
    goal: Hệ thống gợi ý luồng phù hợp
    display:
      desktop: side_panel
      mobile: bottom_sheet
    primary_component:
      - AgentRecommendationPanel

  - id: pod_3_micro_intake
    name: Micro Intake
    goal: Thu lead gần như không cần gõ
    display:
      desktop: side_drawer
      mobile: bottom_sheet_steps
    primary_component:
      - ZeroTypingQuestionSheet

  - id: pod_4_trust
    name: Trust Proof
    goal: Chứng minh năng lực An Luật mà không kéo dài trang
    display: compact_editorial_strip
    primary_component:
      - TrustProofStrip
      - AttorneyVideoCard
      - ClientProofMiniGrid

  - id: pod_5_next_steps
    name: Next Steps
    goal: Sau submit, hiển thị phiếu chuẩn bị và kỳ vọng thư ký gọi lại
    display:
      desktop: confirmation_panel
      mobile: full_screen_confirmation
    primary_component:
      - PreparationChecklist
```

---

## 7. Homepage UI Specification

```yaml
page_home_ui:
  path: /
  ui_pattern: editorial_command_center
  page_goal: Chọn vấn đề, nhận gợi ý, bắt đầu intake
  scroll_target: first_action_within_first_viewport
  primary_cta: Gửi thông tin vụ việc
  secondary_cta: Tìm hiểu 1 GIỜ GẶP NHƯ
```

### 7.1 Desktop hero

```yaml
home_desktop_hero:
  viewport_height: 100svh
  layout:
    type: golden_split
    left_panel: 61.8%
    right_panel: 38.2%

  left_panel:
    component: EditorialTrustPanel
    content:
      headline: Bạn đang gặp vấn đề pháp lý nào? Kể An Luật nghe từ chỗ bạn đang rối nhất.
      subheadline: An Luật giúp bạn xác định đúng vấn đề, đúng hướng xử lý và đúng người đồng hành.
      primary_cta: Gửi thông tin vụ việc
      secondary_cta: Tìm hiểu 1 GIỜ GẶP NHƯ
    media:
      type: real_photo_or_micro_video
      subject: Luật sư Đinh Thị Quỳnh Như hoặc không gian An Luật
      avoid: stock_photo

  right_panel:
    component: IntakeDoorCardStack
    cards:
      - family_assets_inheritance
      - labor_hr
      - business_operations
      - disputes_debt_litigation
      - legal_health_training
    interaction:
      on_click: open_agent_recommendation_panel
```

### 7.2 Mobile hero

```yaml
home_mobile_hero:
  viewport_height: 100svh
  layout:
    type: decision_stack
    top: compact_brand_bar
    middle: headline_and_micro_video
    bottom: swipeable_intake_cards

  compact_brand_bar:
    includes:
      - logo
      - quick_call_icon
      - menu_icon

  headline:
    text: Bạn đang gặp vấn đề pháp lý nào?
    max_lines: 2

  micro_video:
    ratio: 9/16_or_8/13
    autoplay: muted
    duration: 5-7s
    fallback: portrait_image

  intake_cards:
    type: horizontal_swipe_cards
    visible_cards: 1.15
    interaction:
      - swipe
      - tap

  sticky_cta:
    label: Bắt đầu bằng 3 câu hỏi
    position: bottom_thumb_zone
    action: open_bottom_sheet
```

---

## 8. Five Intake Door UI

```yaml
intake_door_cards:
  component: IntakeDoorCard
  visual_style:
    card_ratio: 1.618
    border_radius: 21px
    icon_style: line_art_minimal
    typography: large_label_short_body
  cards:
    - id: family_assets_inheritance
      label: Gia đình, tài sản, thừa kế
      user_sentence: Tôi đang rối chuyện gia đình, tài sản hoặc thừa kế
      icon: line_flower_home
      accent: warm_beige

    - id: labor_hr
      label: Lao động & nhân sự
      user_sentence: Tôi đang gặp vấn đề về nghỉ việc, sa thải, nhân sự
      icon: line_people_path
      accent: muted_green

    - id: business_operations
      label: Doanh nghiệp đang vận hành
      user_sentence: Doanh nghiệp tôi cần giảm rủi ro pháp lý
      icon: line_building_leaf
      accent: deep_green

    - id: disputes_debt_litigation
      label: Tranh chấp, kiện tụng, thu hồi nợ
      user_sentence: Tôi cần xử lý tranh chấp hoặc thu hồi nợ
      icon: line_path_knot
      accent: earth_red

    - id: legal_health_training
      label: Kiểm tra sức khỏe pháp lý doanh nghiệp
      user_sentence: Doanh nghiệp tôi cần kiểm tra sức khỏe pháp lý
      icon: line_pulse_document
      accent: sun_gold
```

---

## 9. Zero-Typing Intake UI

Form không được hiển thị như form truyền thống. Nó phải là guided intake.

```yaml
zero_typing_intake:
  component: ZeroTypingQuestionSheet
  typing_fields_required_target: 0-1
  target_completion_time: under_60_seconds
  input_methods:
    - tap
    - chips
    - segmented_buttons
    - swipe_cards
    - autofill
    - optional_voice_note
    - optional_file_upload
  hard_avoid:
    - long_textarea_as_required_first_step
    - generic_contact_form
    - dropdown_overuse
    - asking_for_price_or_payment
```

### 9.1 Intake steps

```yaml
zero_typing_steps:
  - step: 1
    id: legal_area
    question: Bạn đang rối chuyện gì?
    input_type: choice_cards
    options:
      - family_assets_inheritance
      - labor_hr
      - business_operations
      - disputes_debt_litigation
      - legal_health_training
    typing_required: false

  - step: 2
    id: current_stage
    question: Việc này đang ở giai đoạn nào?
    input_type: chips
    options:
      - new_issue
      - has_documents
      - negotiating
      - court_or_authority
      - prevention
      - not_sure
    labels:
      new_issue: Mới phát sinh
      has_documents: Đã có giấy tờ
      negotiating: Đang thương lượng
      court_or_authority: Đã ra tòa / cơ quan chức năng
      prevention: Cần phòng ngừa trước
      not_sure: Chưa rõ
    typing_required: false

  - step: 3
    id: urgency
    question: Mức độ khẩn cấp?
    input_type: large_segmented_buttons
    options:
      - within_24h
      - this_week
      - flexible
    labels:
      within_24h: Trong 24 giờ
      this_week: Trong tuần này
      flexible: Có thể sắp xếp sau
    typing_required: false

  - step: 4
    id: preferred_lawyer
    question: Bạn muốn gặp ai?
    input_type: segmented_control
    options:
      - lawyer_nhu
      - suitable_lawyer
      - not_sure
    labels:
      lawyer_nhu: Luật sư Như
      suitable_lawyer: Luật sư phù hợp của An Luật
      not_sure: Chưa rõ
    typing_required: false

  - step: 5
    id: contact_method
    question: An Luật liên hệ lại bằng cách nào?
    input_type: contact_choice
    options:
      - phone
      - zalo
      - email
      - secretary_call_first
    labels:
      phone: Gọi điện
      zalo: Zalo
      email: Email
      secretary_call_first: Tôi muốn thư ký gọi trước
    typing_required: phone_or_email_only

  - step: 6
    id: optional_context
    question: Bạn có muốn nói thêm không?
    input_type: optional_context_selector
    options:
      - secretary_ask_more
      - voice_note
      - type_few_lines
      - upload_document
    labels:
      secretary_ask_more: Tôi muốn thư ký hỏi thêm qua điện thoại
      voice_note: Tôi muốn ghi âm ngắn
      type_few_lines: Tôi muốn gõ vài dòng
      upload_document: Tôi muốn gửi tài liệu
    typing_required: false_unless_user_selects_type_few_lines
```

### 9.2 Component schema example

```json
{
  "component": "ZeroTypingQuestionSheet",
  "question_id": "urgency",
  "title": "Mức độ khẩn cấp?",
  "input_type": "choice_cards",
  "options": [
    { "id": "within_24h", "label": "Trong 24 giờ" },
    { "id": "this_week", "label": "Trong tuần này" },
    { "id": "flexible", "label": "Có thể sắp xếp sau" }
  ],
  "typing_required": false,
  "next_behavior": "auto_advance_after_selection"
}
```

---

## 10. Agent2UI Specification

Agent2UI không phải chatbot nổi ở góc màn hình. Agent2UI là cơ chế để agent sinh UI phù hợp theo state của người dùng.

```yaml
agent2ui_definition:
  name: Agent2UI
  description: >
    Agent nhận dữ liệu ngữ cảnh từ lựa chọn của người dùng,
    sau đó render component UI phù hợp: recommendation panel, checklist,
    score meter, warning note, hoặc next-step CTA.
  avoid:
    - chatbot_bubble_as_primary_interface
    - long_agent_text_response
    - legal_advice_final_answer_without_human_review
  prefer:
    - structured_recommendation
    - concise_reason
    - next_action
    - checklist
    - human_callback
```

### 10.1 Agent2UI states

```yaml
agent2ui_flow:
  - state: intent_capture
    input:
      - legal_area
      - current_stage
      - urgency
    output_components:
      - IntakeDoorCards
      - UrgencyChips
      - RoleSelector

  - state: route_recommendation
    input:
      - legal_area
      - current_stage
      - urgency
      - user_role_optional
    output_components:
      - AgentRecommendationPanel
      - RecommendedServiceCard
      - ReasonSummary
      - NextStepCTA

  - state: micro_intake
    input:
      - recommended_service
      - preferred_lawyer
      - contact_method
    output_components:
      - BranchQuestions
      - ContactMethodSelector
      - OptionalVoiceSummary
      - OptionalFileUpload

  - state: preparation_sheet
    input:
      - legal_area
      - issue_type
      - current_stage
    output_components:
      - PreparationChecklist
      - DocumentsToPrepare
      - CallbackExpectation
      - SafetyNoteIfNeeded
```

### 10.2 Agent output schema

```json
{
  "agent_output_type": "ui_recommendation",
  "recommended_component": "AgentRecommendationPanel",
  "title": "Bạn có thể phù hợp với 1 GIỜ GẶP NHƯ",
  "reason": "Vụ việc cần định hướng riêng trước khi chuẩn bị hồ sơ.",
  "confidence": "medium",
  "recommended_service_id": "one_hour_with_nhu",
  "next_action": {
    "label": "Để An Luật gọi lại cho tôi",
    "action": "continue_intake"
  },
  "preparation_preview": [
    "Giấy tờ liên quan",
    "Timeline ngắn sự việc",
    "Thông tin các bên liên quan"
  ],
  "requires_human_review": true
}
```

### 10.3 Example: Family / child custody

```yaml
agent2ui_example_family:
  user_choices:
    legal_area: family_assets_inheritance
    issue_type: child_custody
    urgency: this_week
    preferred_lawyer: lawyer_nhu
  render:
    component: AgentRecommendationPanel
    title: Bạn có thể phù hợp với 1 GIỜ GẶP NHƯ
    reason: Vụ việc liên quan con cái và cần định hướng riêng trước khi chuẩn bị hồ sơ.
    next_action:
      label: Để An Luật gọi lại cho tôi
      action: continue_intake
    preparation_preview:
      - Giấy khai sinh của con
      - Giấy đăng ký kết hôn nếu có
      - Thông tin về người trực tiếp chăm sóc con
      - Tài liệu về thu nhập và nơi ở nếu có
```

### 10.4 Example: Business legal health

```yaml
agent2ui_example_business_health:
  user_choices:
    legal_area: legal_health_training
    current_stage: prevention
    user_role: business_owner
  render:
    component: LegalHealthScorePrompt
    title: Doanh nghiệp nên bắt đầu bằng Điểm an toàn pháp lý
    reason: Vấn đề thuộc nhóm phòng ngừa rủi ro, nên cần rà soát trước khi tư vấn sâu.
    next_action:
      label: Làm bài kiểm tra 8 câu
      action: start_legal_health_score
```

---

## 11. Bản đồ an toàn pháp lý UI

```yaml
legal_safety_map_ui:
  component: LegalSafetyMap
  purpose: Giúp người dùng tự phân loại vấn đề trong 3 câu hỏi.
  placement:
    - homepage
    - service_pages
    - intake_modal
```

### 11.1 Desktop UI

```yaml
legal_safety_map_desktop:
  layout:
    type: golden_split
    left_context: 38.2%
    right_question_area: 61.8%
  left_context:
    includes:
      - short_explanation
      - attorney_or_office_visual
      - trust_note
  right_question_area:
    includes:
      - question_card
      - answer_chips
      - progress_indicator
  result_behavior:
    display: slide_in_result_panel
    no_page_reload: true
```

### 11.2 Mobile UI

```yaml
legal_safety_map_mobile:
  layout: bottom_sheet_stepper
  question_display: one_question_per_screen
  option_height_min: 55px
  progress: 1/3_to_3/3
  allow_back: true
  keyboard_required: false
  result_behavior: full_screen_recommendation_card
```

---

## 12. Legal Health Score UI

```yaml
legal_health_score_ui:
  component: LegalHealthScore
  target_audience:
    - CEO
    - founder
    - HR
    - legal_manager
    - business_owner
  purpose: Tạo lead B2B bằng quiz 8 câu, gần như zero-typing.
```

### 12.1 Desktop UI

```yaml
legal_health_score_desktop:
  layout:
    type: golden_split
    left_question_stack: 61.8%
    right_live_score_meter: 38.2%
  left_question_stack:
    display: question_cards
    input: yes_no_not_sure
  right_live_score_meter:
    display:
      - live_score_number
      - score_band
      - risk_summary
      - primary_cta
  completion_cta:
    label: Đăng ký Khám sức khỏe pháp lý doanh nghiệp
    action: open_business_intake
```

### 12.2 Mobile UI

```yaml
legal_health_score_mobile:
  layout: one_question_card_per_screen
  input: segmented_yes_no_not_sure
  score_display: compact_bottom_score_bar
  progress_indicator: question_count_1_to_8
  completion_screen:
    includes:
      - score
      - band
      - short_explanation
      - cta
```

### 12.3 Score bands UI

```yaml
legal_health_score_bands:
  - range: 0-39
    label: Rủi ro cao
    color_token: risk_high_earth_red
    cta: Đăng ký Khám sức khỏe pháp lý doanh nghiệp

  - range: 40-69
    label: Cần củng cố
    color_token: risk_medium_sun_gold
    cta: Gửi thông tin để An Luật tư vấn

  - range: 70-100
    label: Tương đối an toàn
    color_token: risk_low_muted_green
    cta: Đặt lịch rà soát định kỳ
```

---

## 13. 1 GIỜ GẶP NHƯ UI

```yaml
one_hour_with_nhu_ui:
  path: /1-gio-gap-nhu
  ui_pattern: compact_editorial_conversion_page
  scroll_policy: first_action_without_scroll
  price_visibility: hidden
  payment: disabled
```

### 13.1 Desktop first fold

```yaml
one_hour_desktop_first_fold:
  layout:
    type: golden_split
    left_content: 61.8%
    right_media: 38.2%
  left_content:
    h1: 1 GIỜ GẶP NHƯ
    subheadline: Một buổi tư vấn riêng để bạn kể đúng chuyện, hiểu đúng vấn đề và biết mình nên làm gì tiếp theo.
    outcome_chips:
      - Rõ vấn đề
      - Rõ hồ sơ
      - Rõ bước tiếp theo
    primary_cta: Gửi thông tin vụ việc
  right_media:
    type: portrait_photo_or_micro_video
    trust_box: Phí tư vấn được báo sau khi An Luật xem sơ bộ nội dung vụ việc.
  cta_behavior:
    desktop: open_right_side_intake_drawer
    mobile: open_bottom_sheet
```

### 13.2 Mobile first fold

```yaml
one_hour_mobile_first_fold:
  layout: full_screen_conversion_stack
  order:
    - compact_brand_bar
    - portrait_visual
    - h1
    - subheadline
    - outcome_chips
    - sticky_cta
  sticky_cta:
    label: Gửi thông tin vụ việc
    action: open_bottom_sheet
```

---

## 14. Service Page UI Template

Các trang dịch vụ dùng template compressed editorial để giảm scroll.

```yaml
service_page_template:
  name: Compressed Editorial Service Page
  scroll_policy: max_3_folds
  fold_1:
    components:
      - ServiceHero
      - PlainLanguageProblem
      - PrimaryCTA
      - TrustNote
  fold_2:
    components:
      - WhatThisMeans
      - CommonSituations
      - WhatAnLuatDoes
  fold_3:
    components:
      - RelatedPackageCard
      - FAQAccordion
      - IntakeCTA
```

### 14.1 Desktop service page

```yaml
service_page_desktop:
  layout:
    type: golden_split
    main_content: 61.8%
    sticky_side_panel: 38.2%
  sticky_side_panel:
    includes:
      - related_service_package
      - primary_cta
      - preparation_preview
      - contact_shortcut
```

### 14.2 Mobile service page

```yaml
service_page_mobile:
  layout: stacked_accordion
  components:
    - hero
    - quick_summary
    - accordion_common_situations
    - accordion_what_an_luat_does
    - sticky_bottom_cta
  avoid:
    - long_unbroken_text
    - deep_dropdowns
```

---

## 15. AI-ready UI Structure

Mỗi trang cần hiển thị và render HTML có cấu trúc rõ để search engine và AI có thể đọc.

```yaml
ai_ready_ui:
  schema_markup:
    - LegalService
    - LocalBusiness
    - Attorney
    - FAQPage
    - BreadcrumbList
  visible_blocks:
    - plain_language_summary
    - who_this_is_for
    - common_questions
    - required_documents
    - next_steps
  llm_summary_block:
    enabled: true
    placement: near_top_or_structured_metadata
    length: 80-120_words
  rendering_requirement:
    faq_content: server_rendered_or_static_html
    critical_content: not_hidden_behind_client_only_js
```

---

## 16. Visual System

```yaml
visual_system:
  mood: >
    Một phòng khách ấm áp, có nắng, có hoa cúc tana,
    nhưng vẫn đủ uy tín của một hãng luật xử lý doanh nghiệp lớn.
  avoid_mood:
    - văn phòng công tố lạnh lẽo
    - template law firm xanh đen quá cũ
    - stock photo bắt tay
    - ảnh búa tòa / cán cân công lý lạm dụng

  color_palette:
    background: trắng ngà / kem nhạt
    trust_primary: xanh rêu đậm hoặc xanh lục trầm
    text_primary: gần đen / xanh than mềm
    accent: vàng nắng nhạt
    secondary: nâu đất / be
    risk_soft: đỏ đất
    avoid:
      - đỏ tươi
      - xanh đen lạnh quá mức
      - xám công nghiệp nặng

  photography:
    primary: ảnh thật Luật sư Quỳnh Như
    secondary: văn phòng, đội ngũ, khoảnh khắc làm việc thật
    video: micro-video 5-7 giây, muted, không gây xao nhãng
    avoid: stock_photo

  illustration:
    style: line_art_minimal
    motifs:
      - hoa cúc tana
      - đường cong mềm
      - tài liệu / lối đi / điểm tựa
    avoid:
      - gavel
      - scales_of_justice_overuse
      - courthouse_columns
```

---

## 17. Component Inventory

```yaml
core_components:
  layout:
    - GoldenSplitLayout
    - ScreenPodContainer
    - DesktopSideDrawer
    - MobileBottomSheet
    - StickyMobileCTA

  homepage:
    - EditorialHero
    - EditorialTrustPanel
    - IntakeDoorCard
    - IntakeDoorCardStack
    - AttorneyVideoCard
    - TrustProofStrip

  intake:
    - ZeroTypingQuestionSheet
    - ChoiceCardGroup
    - ChipSelector
    - SegmentedControl
    - ContactMethodSelector
    - OptionalVoiceNoteInput
    - OptionalFileUpload

  agent2ui:
    - AgentRecommendationPanel
    - RecommendedServiceCard
    - ReasonSummary
    - NextStepCTA
    - PreparationChecklist
    - SafetyNotice

  tools:
    - LegalSafetyMap
    - LegalHealthScore
    - LegalHealthScoreMeter
    - ScoreBandResult

  content:
    - ServiceOutcomeChips
    - FAQAccordion
    - PlainLanguageMappingCard
    - RelatedPackageCard
    - ClientProofMiniGrid
```

---

## 18. Accessibility Requirements

```yaml
accessibility:
  button_min_height_mobile: 55px
  color_contrast: WCAG_AA_minimum
  keyboard_navigation: required_desktop
  focus_states: visible
  reduced_motion: supported
  aria_labels:
    - bottom_sheet
    - side_drawer
    - score_meter
    - stepper
    - quick_exit
  form_errors:
    style: inline_clear_human_language
  avoid:
    - hover_only_actions
    - tiny_text
    - low_contrast_gold_on_white
    - motion_required_to_understand_state
```

---

## 19. Performance Requirements

```yaml
performance:
  first_view_interactive: fast
  image_strategy:
    - responsive_images
    - modern_formats
    - lazy_load_below_fold
  video_strategy:
    - muted_micro_video
    - compressed
    - poster_fallback
    - no_autoplay_with_sound
  javascript_strategy:
    - critical_ui_minimal
    - agent2ui_lazy_loaded_after_intent
    - forms_lightweight
  mobile_priority: high
```

---

## 20. Analytics Events for UI

```yaml
ui_analytics_events:
  - event: hero_primary_cta_clicked
    properties:
      - page_path
      - device_type
      - viewport_context

  - event: intake_door_card_clicked
    properties:
      - card_id
      - card_position
      - device_type

  - event: agent_recommendation_rendered
    properties:
      - recommended_service_id
      - legal_area
      - urgency
      - confidence

  - event: zero_typing_step_completed
    properties:
      - step_id
      - selected_option
      - device_type

  - event: intake_bottom_sheet_opened
    properties:
      - entry_point
      - device_type

  - event: intake_side_drawer_opened
    properties:
      - entry_point
      - device_type

  - event: legal_health_score_started
    properties:
      - source_page
      - device_type

  - event: legal_health_score_completed
    properties:
      - score
      - score_band
      - device_type

  - event: preparation_checklist_viewed
    properties:
      - legal_area
      - checklist_type

  - event: quick_exit_clicked
    properties:
      - page_path
      - device_type
```

---

## 21. UI Acceptance Criteria

```yaml
ui_acceptance_criteria:
  - id: desktop_golden_split
    requirement: Desktop hero and core conversion screens use 61.8/38.2 split layout.

  - id: mobile_decision_stack
    requirement: Mobile first viewport shows headline, visual, intake card/CTA without requiring scroll.

  - id: scroll_minimized
    requirement: Core conversion path from homepage to intake submit can be completed without long page scroll.

  - id: zero_typing_primary_flow
    requirement: User can complete core intake choices with tap/chips/cards; typing only required for contact info.

  - id: agent_renders_ui
    requirement: After initial choices, system renders structured recommendation panel, not just text response.

  - id: legal_health_score_ui
    requirement: Legal Health Score has desktop live score meter and mobile one-question-per-screen UI.

  - id: one_hour_no_payment
    requirement: 1 GIỜ GẶP NHƯ UI does not show public price or online payment step.

  - id: ai_ready_html
    requirement: Service pages contain server-rendered/static HTML FAQ and schema-ready content blocks.

  - id: no_stock_legal_cliches
    requirement: Visual system avoids generic gavel, scales, courthouse, handshake stock imagery.

  - id: quick_exit_mobile_accessible
    requirement: Sensitive family pages include accessible quick exit button visible in mobile thumb zone.
```

---

## 22. Recommended Build Order

```yaml
ui_build_order:
  phase_1:
    name: Core Command Center
    components:
      - GoldenSplitLayout
      - EditorialHero
      - IntakeDoorCardStack
      - DesktopSideDrawer
      - MobileBottomSheet
      - ZeroTypingQuestionSheet

  phase_2:
    name: Agent2UI Intake
    components:
      - AgentRecommendationPanel
      - RecommendedServiceCard
      - ReasonSummary
      - PreparationChecklist
      - SafetyNotice

  phase_3:
    name: B2B Intelligence Tools
    components:
      - LegalHealthScore
      - LegalHealthScoreMeter
      - LegalSafetyMap

  phase_4:
    name: Service Page System
    components:
      - CompressedEditorialServicePage
      - FAQAccordion
      - PlainLanguageMappingCard
      - RelatedPackageCard

  phase_5:
    name: Polish & AI-ready
    components:
      - SchemaMarkupIntegration
      - MicroVideoOptimization
      - AnalyticsEvents
      - AccessibilityReview
```

---

## 23. Machine-readable summary

```json
{
  "project": "AnLuật.com UI Direction",
  "ui_strategy": "Editorial Legal Command Center + Agent2UI",
  "desktop_layout": "golden_split_61_8_38_2",
  "mobile_layout": "decision_stack_with_bottom_sheet",
  "scroll_policy": "minimize_scroll_screen_pods",
  "form_strategy": "zero_typing_guided_intake",
  "agent_strategy": "agent_renders_structured_ui_components",
  "primary_components": [
    "EditorialHero",
    "GoldenSplitLayout",
    "IntakeDoorCardStack",
    "ZeroTypingQuestionSheet",
    "AgentRecommendationPanel",
    "LegalSafetyMap",
    "LegalHealthScore",
    "PreparationChecklist",
    "DesktopSideDrawer",
    "MobileBottomSheet"
  ],
  "primary_conversion_asset": "1 GIỜ GẶP NHƯ",
  "price_visibility": "hidden",
  "online_payment": false,
  "must_have_ui_requirements": [
    "Desktop 61.8/38.2 golden split",
    "Mobile first viewport no-scroll decision stack",
    "Zero-typing core intake flow",
    "Agent-generated recommendation UI",
    "Legal Health Score live score meter",
    "Bản đồ an toàn pháp lý",
    "Phiếu chuẩn bị sau submit",
    "AI-ready FAQ and schema structure"
  ]
}
```

---

## 24. Final UI Decision

AnLuật.com mới không nên là website luật có form liên hệ đẹp hơn. Nó phải là một giao diện tiếp nhận pháp lý thông minh.

Trên desktop, website dùng bố cục editorial split theo tỷ lệ vàng để tạo cảm giác cao cấp, bình tĩnh và có kiểm soát. Trên mobile, website dùng decision stack và bottom sheet để người dùng có thể chọn vấn đề, nhận gợi ý và gửi thông tin mà gần như không cần cuộn hay gõ.

Agent2UI là lớp khác biệt chính: agent không đóng vai chatbot nói nhiều, mà đóng vai bộ dựng giao diện theo ngữ cảnh. Khi người dùng chọn vấn đề, agent render ra khuyến nghị, checklist, điểm rủi ro, hoặc bước tiếp theo.

Nếu triển khai đúng, UI của An Luật sẽ ngắn hơn, thông minh hơn, ít gõ hơn, ít cuộn hơn và tạo cảm giác An Luật hiểu khách trước khi khách phải trình bày dài dòng.

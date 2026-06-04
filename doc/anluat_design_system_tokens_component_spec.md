# Design System Tokens & Component Spec

## AnLuật.com — Golden Ratio UI System

```yaml
document_id: anluat_design_system_tokens_component_spec
version: 1.0
status: draft_for_review
language: vi-VN
project: Website mới An Luật
primary_domain: anluat.com
spec_type: Design System / UI Tokens / Component Contract
primary_conversion_asset: 1 GIỜ GẶP NHƯ
machine_readable: true
last_updated: 2026-06-02
depends_on:
  - anluat_web_new_product_ux_spec
  - anluat_ui_direction_agent2ui_spec
  - anluat_agent2ui_technical_contract
```

---

## 1. Mục tiêu tài liệu

Tài liệu này chuẩn hóa hệ thống thiết kế giao diện cho AnLuật.com, bao gồm design tokens, layout rules, component contracts, responsive behavior, accessibility và acceptance criteria.

Mục tiêu:

```yaml
goals:
  - Biến UX thành UI cụ thể, nhất quán, đo được.
  - Đảm bảo desktop và mobile được thiết kế song song.
  - Áp dụng golden ratio 61.8/38.2 trong các layout chính.
  - Giảm scroll bằng screen pods, side drawer và bottom sheet.
  - Chuẩn hóa zero-typing intake components.
  - Chuẩn hóa Agent2UI-rendered components.
  - Tạo nền tảng dùng chung cho Figma, code và agent renderer.
```

Nói ngắn gọn: tài liệu này là cái dây cương để Dandatto Studio không phi nước đại vào cánh đồng “em thấy đẹp”, còn dev không tự phát minh 12 loại spacing như một nền văn minh cổ đại bị thất lạc.

---

# 2. Design System Principles

```yaml
design_system_principles:
  - id: golden_ratio_first
    name: Golden Ratio First
    rule: Layout chính dùng 61.8/38.2 hoặc biến thể gần nhất theo thiết bị.

  - id: one_screen_one_decision
    name: Một màn hình, một quyết định
    rule: Mỗi viewport chỉ nên yêu cầu người dùng chọn một hành động chính.

  - id: low_typing_high_guidance
    name: Ít gõ, nhiều dẫn đường
    rule: Intake dùng card, chip, segmented control, swipe, bottom sheet; typing chỉ ở contact hoặc optional note.

  - id: editorial_calm
    name: Editorial Calm
    rule: Giao diện phải có khoảng thở, chữ lớn, màu tiết chế, không dùng visual pháp lý sáo mòn.

  - id: mobile_is_not_shrunken_desktop
    name: Mobile không phải desktop thu nhỏ
    rule: Mobile dùng decision stack và bottom sheet, không ép layout 2 cột xuống 1 cột một cách máy móc.

  - id: safe_by_default
    name: Safe by Default
    rule: Các component liên quan dữ liệu nhạy cảm phải tránh session replay, tránh echo text người dùng, có trạng thái an toàn.

  - id: schema_renderable
    name: Schema Renderable
    rule: Component phải có props contract rõ để Agent2UI có thể render bằng schema.
```

---

# 3. Token Architecture

Design tokens chia thành 7 nhóm:

```yaml
token_groups:
  - color
  - typography
  - spacing
  - layout
  - radius
  - shadow
  - motion
  - z_index
  - interaction
```

Token phải dùng được trong:

```yaml
token_consumers:
  - Figma variables
  - CSS custom properties
  - Tailwind theme optional
  - React component props
  - Agent2UI schema renderer
```

---

# 4. Color Tokens

## 4.1 Brand color philosophy

UI của An Luật cần cân bằng hai tầng:

```yaml
brand_color_goals:
  emotional_layer:
    - ấm
    - nhân văn
    - có nắng
    - có chất đời sống của Luật sư Như

  authority_layer:
    - vững
    - trầm
    - đáng tin
    - phù hợp doanh nghiệp
```

Không dùng xanh đen lạnh quá, đỏ tươi, vàng kim bóng bẩy, ảnh búa tòa/cán cân quá đà. Trang luật không cần trông như sảnh khách sạn của một vị thần phán xét.

---

## 4.2 Core palette

```yaml
color_tokens:
  background:
    canvas: "#FBF7EF"
    surface: "#FFFDF8"
    surface_muted: "#F3EBDD"
    surface_elevated: "#FFFFFF"

  text:
    primary: "#1F2522"
    secondary: "#4D5650"
    muted: "#7A827B"
    inverse: "#FFFFFF"

  brand:
    trust_green_900: "#18352B"
    trust_green_800: "#25483A"
    trust_green_700: "#2F5C49"
    garden_green_500: "#6E8B62"

  accent:
    sun_gold_500: "#D8A94A"
    sun_gold_300: "#EACB82"
    tana_white: "#FFF9EA"
    earth_brown_500: "#8A6547"

  semantic:
    success: "#4F7A57"
    warning: "#C68A2E"
    danger: "#9B463F"
    info: "#476A7C"

  border:
    subtle: "#E8DDCB"
    medium: "#D8C9B3"
    strong: "#B59E7B"

  overlay:
    dark_scrim: "rgba(31, 37, 34, 0.48)"
    light_scrim: "rgba(255, 253, 248, 0.78)"
```

---

## 4.3 Usage rules

```yaml
color_usage_rules:
  primary_cta:
    background: brand.trust_green_900
    text: text.inverse
    hover: brand.trust_green_800

  secondary_cta:
    background: transparent
    text: brand.trust_green_900
    border: border.medium

  sensitive_warning:
    background: "#FFF3EA"
    border: semantic.danger
    text: text.primary

  legal_health_high_risk:
    background: "#F8E5DF"
    accent: semantic.danger

  legal_health_medium_risk:
    background: "#FFF2D8"
    accent: semantic.warning

  legal_health_low_risk:
    background: "#E9F1E7"
    accent: semantic.success
```

---

## 4.4 CSS variables

```css
:root {
  --color-canvas: #FBF7EF;
  --color-surface: #FFFDF8;
  --color-surface-muted: #F3EBDD;
  --color-text-primary: #1F2522;
  --color-text-secondary: #4D5650;
  --color-text-muted: #7A827B;

  --color-brand-900: #18352B;
  --color-brand-800: #25483A;
  --color-brand-700: #2F5C49;

  --color-accent-gold: #D8A94A;
  --color-accent-gold-soft: #EACB82;
  --color-earth-brown: #8A6547;

  --color-success: #4F7A57;
  --color-warning: #C68A2E;
  --color-danger: #9B463F;

  --color-border-subtle: #E8DDCB;
  --color-border-medium: #D8C9B3;
}
```

---

# 5. Typography Tokens

## 5.1 Typeface direction

```yaml
typography_direction:
  heading:
    style: editorial_serif_or_elegant_sans
    usage: hero, page title, editorial statements
    mood: sang, bình tĩnh, có chiều sâu

  body:
    style: highly_readable_sans
    usage: body copy, FAQ, form labels, legal explanation
    mood: rõ ràng, dễ đọc, không lạnh

  ui:
    style: compact_sans
    usage: button, chip, nav, system message
```

Font cụ thể có thể chốt sau theo license, nhưng hệ thống phải hỗ trợ:

```yaml
font_requirements:
  - Vietnamese diacritics excellent support
  - multiple weights
  - good rendering on mobile
  - legal/professional tone
  - no decorative unreadable serif
```

---

## 5.2 Typography scale

Dùng tỷ lệ vàng và Fibonacci gần đúng.

```yaml
typography_tokens:
  display_xl:
    size_desktop: "clamp(56px, 6vw, 89px)"
    size_mobile: "clamp(34px, 11vw, 55px)"
    line_height: 1.05
    letter_spacing: "-0.03em"

  h1:
    size_desktop: "55px"
    size_mobile: "34px"
    line_height: 1.08
    letter_spacing: "-0.025em"

  h2:
    size_desktop: "34px"
    size_mobile: "28px"
    line_height: 1.15
    letter_spacing: "-0.015em"

  h3:
    size_desktop: "21px"
    size_mobile: "21px"
    line_height: 1.25
    letter_spacing: "-0.005em"

  body_lg:
    size: "18px"
    line_height: 1.618

  body:
    size: "16px"
    line_height: 1.618

  small:
    size: "13px"
    line_height: 1.45

  micro:
    size: "11px"
    line_height: 1.35
```

---

## 5.3 CSS variables

```css
:root {
  --font-heading: "Editorial Heading", ui-serif, Georgia, serif;
  --font-body: "Inter", "Be Vietnam Pro", system-ui, sans-serif;
  --font-ui: "Inter", "Be Vietnam Pro", system-ui, sans-serif;

  --text-display-xl: clamp(56px, 6vw, 89px);
  --text-display-mobile: clamp(34px, 11vw, 55px);
  --text-h1: 55px;
  --text-h2: 34px;
  --text-h3: 21px;
  --text-body-lg: 18px;
  --text-body: 16px;
  --text-small: 13px;

  --line-heading: 1.08;
  --line-body: 1.618;
}
```

---

# 6. Spacing Tokens

## 6.1 Fibonacci spacing scale

```yaml
spacing_tokens:
  space_3: "3px"
  space_5: "5px"
  space_8: "8px"
  space_13: "13px"
  space_21: "21px"
  space_34: "34px"
  space_55: "55px"
  space_89: "89px"
  space_144: "144px"
```

## 6.2 Usage rules

```yaml
spacing_usage:
  inline_gap_small: space_8
  inline_gap_default: space_13
  card_padding_mobile: space_21
  card_padding_desktop: space_34
  section_gap_compact: space_55
  section_gap_editorial: space_89
  hero_outer_padding_desktop: space_55
  hero_outer_padding_mobile: space_21
```

## 6.3 CSS variables

```css
:root {
  --space-3: 3px;
  --space-5: 5px;
  --space-8: 8px;
  --space-13: 13px;
  --space-21: 21px;
  --space-34: 34px;
  --space-55: 55px;
  --space-89: 89px;
  --space-144: 144px;
}
```

---

# 7. Layout Tokens

## 7.1 Golden split

```yaml
layout_tokens:
  golden_split:
    primary: "61.8%"
    secondary: "38.2%"
    ratio: 1.618

  reverse_golden_split:
    primary: "38.2%"
    secondary: "61.8%"

  max_content_width:
    desktop: "1180px"
    wide: "1440px"
    reading: "680px"
    compact: "420px"

  viewport_pod:
    min_height_desktop: "100svh"
    min_height_mobile: "100svh"

  mobile_safe_padding:
    inline: "21px"
    bottom_with_sticky_cta: "89px"
```

---

## 7.2 Layout classes

```css
.golden-split {
  display: grid;
  grid-template-columns: minmax(0, 1.618fr) minmax(320px, 1fr);
  gap: var(--space-34);
}

.golden-split-reverse {
  display: grid;
  grid-template-columns: minmax(320px, 1fr) minmax(0, 1.618fr);
  gap: var(--space-34);
}

.screen-pod {
  min-height: 100svh;
  padding: var(--space-55);
}

@media (max-width: 767px) {
  .golden-split,
  .golden-split-reverse {
    display: block;
  }

  .screen-pod {
    min-height: 100svh;
    padding: var(--space-21);
  }
}
```

---

# 8. Radius, Shadow, Border Tokens

## 8.1 Radius

```yaml
radius_tokens:
  radius_5: "5px"
  radius_8: "8px"
  radius_13: "13px"
  radius_21: "21px"
  radius_34: "34px"
  radius_pill: "999px"
```

Usage:

```yaml
radius_usage:
  chips: radius_pill
  buttons: radius_13
  cards: radius_21
  modals: radius_34
  bottom_sheet_top: radius_34
```

## 8.2 Shadows

```yaml
shadow_tokens:
  shadow_soft:
    value: "0 8px 34px rgba(31, 37, 34, 0.08)"
  shadow_card:
    value: "0 13px 55px rgba(31, 37, 34, 0.10)"
  shadow_drawer:
    value: "0 21px 89px rgba(31, 37, 34, 0.18)"
```

## 8.3 Border

```yaml
border_tokens:
  hairline: "1px solid var(--color-border-subtle)"
  standard: "1px solid var(--color-border-medium)"
  focus: "2px solid var(--color-accent-gold)"
```

---

# 9. Motion Tokens

Motion phải nhẹ, bình tĩnh, không làm web luật biến thành ứng dụng thiền bị tăng động.

```yaml
motion_tokens:
  duration_fast: "120ms"
  duration_base: "210ms"
  duration_slow: "340ms"
  duration_drawer: "340ms"

  easing_standard: "cubic-bezier(0.2, 0.8, 0.2, 1)"
  easing_enter: "cubic-bezier(0.16, 1, 0.3, 1)"
  easing_exit: "cubic-bezier(0.7, 0, 0.84, 0)"
```

Rules:

```yaml
motion_rules:
  - Respect prefers-reduced-motion.
  - Bottom sheet and side drawer may animate.
  - Quick Exit must not depend on animation.
  - Agent recommendation may fade/slide softly.
  - No parallax on legal-sensitive pages.
```

CSS:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

# 10. Z-index Tokens

```yaml
z_index_tokens:
  base: 0
  sticky_header: 100
  sticky_cta: 200
  side_drawer: 500
  bottom_sheet: 600
  modal: 700
  quick_exit: 900
  emergency_overlay: 1000
```

Rule:

```yaml
z_index_rules:
  - QuickExitButton must always be above standard UI.
  - Emergency overlay must override all React-rendered UI.
  - BottomSheet must be above StickyMobileCTA.
```

---

# 11. Breakpoints & Responsive Contexts

```yaml
breakpoints:
  mobile:
    min: 320
    max: 767
  tablet:
    min: 768
    max: 1199
  desktop:
    min: 1200
  wide:
    min: 1440
```

Responsive behavior:

```yaml
responsive_rules:
  desktop:
    layout: golden_split
    intake_surface: side_drawer
    max_scroll: low
    primary_interaction: click

  tablet:
    layout: hybrid_stacked_split
    intake_surface: centered_modal
    primary_interaction: tap

  mobile:
    layout: decision_stack
    intake_surface: bottom_sheet
    primary_interaction: thumb_tap
    first_action_without_scroll: true
```

---

# 12. Component System Overview

```yaml
component_categories:
  layout:
    - GoldenSplitLayout
    - ScreenPodContainer
    - DesktopSideDrawer
    - MobileBottomSheet
    - StickyMobileCTA

  navigation:
    - CompactHeader
    - MobileMenuSheet
    - BreadcrumbTrail

  intake:
    - IntakeDoorCard
    - IntakeDoorCardStack
    - ZeroTypingQuestionSheet
    - ChoiceCardGroup
    - ChipSelector
    - SegmentedControl
    - ContactMethodSelector

  agent2ui:
    - AgentRecommendationPanel
    - RecommendedServiceCard
    - SafetyNotice
    - PreparationChecklist
    - SecretaryReviewPanel
    - SlotSelectorPrompt
    - PaymentRequiredPanel

  conversion:
    - SlotSelector
    - PaymentQRCodePanel
    - PaymentStatusPanel
    - BookingConfirmationPanel

  content:
    - EditorialHero
    - AttorneyVideoCard
    - TrustProofStrip
    - ClientProofMiniGrid
    - FAQAccordion
    - PlainLanguageMappingCard

  tools:
    - LegalHealthScore
    - LegalHealthScoreMeter
    - LegalSafetyMap
```

---

# 13. Layout Components

## 13.1 `GoldenSplitLayout`

```yaml
component:
  name: GoldenSplitLayout
  category: layout
  purpose: Render desktop 61.8/38.2 split layout.
  agent_renderable: false
```

Props:

```yaml
GoldenSplitLayout_props:
  required:
    - primary
    - secondary
  optional:
    - reverse
    - gap
    - verticalAlign
    - minHeight
  defaults:
    reverse: false
    gap: space_34
    verticalAlign: center
    minHeight: 100svh
```

Behavior:

```yaml
GoldenSplitLayout_behavior:
  desktop:
    display: grid
    columns: 1.618fr 1fr
  mobile:
    display: block
    order: primary_then_secondary
```

Acceptance:

```yaml
GoldenSplitLayout_acceptance:
  - Desktop width >= 1200px uses 61.8/38.2 visual split.
  - Mobile collapses without horizontal overflow.
  - Content remains readable at 320px width.
```

---

## 13.2 `DesktopSideDrawer`

```yaml
component:
  name: DesktopSideDrawer
  category: layout
  purpose: Hiển thị intake, Agent2UI recommendation, payment hoặc booking trên desktop.
  agent_renderable: false
```

Props:

```yaml
DesktopSideDrawer_props:
  required:
    - isOpen
    - title
    - children
  optional:
    - width
    - closeBehavior
    - lockBodyScroll
  defaults:
    width: "38.2vw"
    minWidth: "420px"
    maxWidth: "560px"
    closeBehavior: overlay_click_or_escape
    lockBodyScroll: true
```

Rules:

```yaml
DesktopSideDrawer_rules:
  - Must trap focus when open.
  - Must restore focus after close.
  - Must not contain session replay-sensitive text in analytics.
```

---

## 13.3 `MobileBottomSheet`

```yaml
component:
  name: MobileBottomSheet
  category: layout
  purpose: Primary mobile intake and Agent2UI surface.
  agent_renderable: false
```

Props:

```yaml
MobileBottomSheet_props:
  required:
    - isOpen
    - children
  optional:
    - snapPoints
    - initialSnap
    - showHandle
    - closeOnBackdrop
  defaults:
    snapPoints:
      - 0.62
      - 0.9
    initialSnap: 0.9
    showHandle: true
    closeOnBackdrop: false
```

Behavior:

```yaml
MobileBottomSheet_behavior:
  - One question per screen for intake.
  - Minimum touch target 55px.
  - Bottom CTA fixed inside sheet.
  - Progress visible for multi-step flows.
```

---

# 14. Intake Components

## 14.1 `IntakeDoorCard`

```yaml
component:
  name: IntakeDoorCard
  category: intake
  purpose: Cho người dùng chọn một trong 5 cửa tiếp nhận pháp lý.
  agent_renderable: false
```

Props:

```yaml
IntakeDoorCard_props:
  required:
    - id
    - label
    - userSentence
    - icon
  optional:
    - accent
    - description
    - badge
    - isSelected
```

Schema:

```json
{
  "component": "IntakeDoorCard",
  "props": {
    "id": "family_assets_inheritance",
    "label": "Gia đình, tài sản, thừa kế",
    "userSentence": "Tôi đang rối chuyện gia đình, tài sản hoặc thừa kế",
    "icon": "line_flower_home",
    "accent": "warm_beige"
  }
}
```

Visual rules:

```yaml
IntakeDoorCard_visual:
  aspect_ratio: 1.618
  padding_desktop: space_21
  padding_mobile: space_21
  border_radius: radius_21
  border: border.hairline
  hover:
    desktop: subtle_lift
  selected:
    border: focus
    background: surface_elevated
```

---

## 14.2 `ZeroTypingQuestionSheet`

```yaml
component:
  name: ZeroTypingQuestionSheet
  category: intake
  purpose: Render từng câu hỏi intake bằng tap/chips/cards thay vì typing.
  agent_renderable: false
```

Props:

```yaml
ZeroTypingQuestionSheet_props:
  required:
    - stepId
    - title
    - inputType
    - options
  optional:
    - subtitle
    - progress
    - allowBack
    - autoAdvance
    - helperText
```

Allowed input types:

```yaml
zero_typing_input_types:
  - choice_cards
  - chips
  - segmented_buttons
  - contact_choice
  - optional_context_selector
  - file_upload_optional
  - voice_note_optional
```

Example:

```json
{
  "component": "ZeroTypingQuestionSheet",
  "props": {
    "stepId": "urgency",
    "title": "Mức độ khẩn cấp?",
    "inputType": "segmented_buttons",
    "options": [
      { "id": "within_24h", "label": "Trong 24 giờ" },
      { "id": "this_week", "label": "Trong tuần này" },
      { "id": "flexible", "label": "Có thể sắp xếp sau" }
    ],
    "autoAdvance": true,
    "progress": {
      "current": 3,
      "total": 6
    }
  }
}
```

Acceptance:

```yaml
ZeroTypingQuestionSheet_acceptance:
  - Core path requires no typing before contact step.
  - Mobile touch targets are at least 55px tall.
  - Keyboard does not open until contact step.
  - User can go back one step.
  - State persists if drawer/sheet temporarily closes.
```

---

# 15. Agent2UI Components

## 15.1 `AgentRecommendationPanel`

```yaml
component:
  name: AgentRecommendationPanel
  category: agent2ui
  purpose: Render recommendation returned by Agent2UI.
  agent_renderable: true
```

Props:

```yaml
AgentRecommendationPanel_props:
  required:
    - title
    - reason
    - recommendedServiceLabel
    - nextAction
  optional:
    - preparationPreview
    - trustNote
    - safetyNote
    - confidence
```

Constraints:

```yaml
AgentRecommendationPanel_constraints:
  title_max_length: 90
  reason_max_length: 220
  preparation_preview_max_items: 5
  forbidden_language:
    - cam kết thắng
    - chắc chắn thắng
    - đảm bảo kết quả
    - xóa sạch dấu vết
```

Example:

```json
{
  "component_type": "AgentRecommendationPanel",
  "component_id": "rec_001",
  "props": {
    "title": "Bạn có thể phù hợp với 1 GIỜ GẶP NHƯ",
    "reason": "Vụ việc cần được định hướng riêng trước khi chuẩn bị hồ sơ.",
    "recommendedServiceLabel": "1 GIỜ GẶP NHƯ",
    "preparationPreview": [
      "Giấy tờ liên quan",
      "Timeline ngắn sự việc",
      "Thông tin các bên liên quan"
    ],
    "nextAction": {
      "label": "Chọn khung giờ phù hợp",
      "actionType": "show_slot_selector"
    }
  }
}
```

---

## 15.2 `SafetyNotice`

```yaml
component:
  name: SafetyNotice
  category: agent2ui
  purpose: Hiển thị cảnh báo an toàn cho người dùng trong vụ việc nhạy cảm.
  agent_renderable: true
```

Props:

```yaml
SafetyNotice_props:
  required:
    - title
    - body
    - primaryAction
  optional:
    - secondaryAction
    - disclaimer
```

Default copy:

```yaml
SafetyNotice_default:
  title: "Ưu tiên an toàn của bạn trước"
  body: >
    Nếu bạn đang không an toàn, hãy ưu tiên rời khỏi tình huống nguy hiểm
    và liên hệ người thân hoặc cơ quan chức năng phù hợp.
  disclaimer: >
    Nút Thoát nhanh giúp ẩn nhanh màn hình này, nhưng không thay thế việc
    xóa lịch sử trình duyệt hoặc dùng thiết bị an toàn.
```

Rules:

```yaml
SafetyNotice_rules:
  - Must include Quick Exit action when rendered on sensitive family pages.
  - Must not promise absolute safety.
  - Must not display user-submitted sensitive text.
```

---

## 15.3 `PreparationChecklist`

```yaml
component:
  name: PreparationChecklist
  category: agent2ui
  purpose: Hiển thị phiếu chuẩn bị sau submit hoặc trước buổi tư vấn.
  agent_renderable: true
```

Props:

```yaml
PreparationChecklist_props:
  required:
    - title
    - checklist
    - callbackExpectation
  optional:
    - downloadAction
    - sendEmailAction
    - warningNote
```

Example:

```json
{
  "component_type": "PreparationChecklist",
  "props": {
    "title": "Phiếu chuẩn bị cho vụ việc gia đình / tài sản",
    "checklist": [
      "Giấy đăng ký kết hôn nếu có",
      "Giấy khai sinh của con nếu có tranh chấp nuôi con",
      "Giấy tờ về tài sản chung / riêng",
      "Timeline ngắn các sự kiện quan trọng"
    ],
    "callbackExpectation": "Thư ký An Luật sẽ liên hệ để xác nhận lịch, phí tư vấn và hồ sơ cần chuẩn bị."
  }
}
```

---

## 15.4 `SecretaryReviewPanel`

```yaml
component:
  name: SecretaryReviewPanel
  category: agent2ui
  purpose: Thông báo vụ việc cần thư ký gọi lại thay vì auto-book.
  agent_renderable: true
```

Usage:

```yaml
SecretaryReviewPanel_usage:
  when:
    - conflict_check_needed
    - complex_business_case
    - domestic_violence_possible
    - payment_or_booking_error
    - invalid_agent_output_fallback
```

Default copy:

```yaml
SecretaryReviewPanel_copy:
  title: "Vụ việc này cần An Luật xem kỹ hơn"
  body: >
    An Luật đã nhận thông tin sơ bộ. Thư ký sẽ liên hệ để xác nhận lịch,
    phí tư vấn và hồ sơ cần chuẩn bị.
  primary_cta: "Để An Luật gọi lại cho tôi"
```

---

# 16. Conversion Components

## 16.1 `SlotSelector`

```yaml
component:
  name: SlotSelector
  category: conversion
  purpose: Hiển thị slot Cal.com đủ điều kiện sau Agent2UI recommendation.
  agent_renderable: false
```

Rules:

```yaml
SlotSelector_rules:
  - Only show for auto_book_candidate.
  - Must fetch availability from backend, not directly expose secrets.
  - Must create booking_intent before payment.
  - Must show slot lock duration if payment required.
```

Props:

```yaml
SlotSelector_props:
  required:
    - eventTypeId
    - availableSlots
    - timezone
  optional:
    - selectedSlot
    - lockDurationMinutes
    - onSlotSelect
```

---

## 16.2 `PaymentQRCodePanel`

```yaml
component:
  name: PaymentQRCodePanel
  category: conversion
  purpose: Hiển thị payOS payment link / QR sau khi chọn slot.
  agent_renderable: false
```

Rules:

```yaml
PaymentQRCodePanel_rules:
  - Payment description must not show case details.
  - Must show payment timeout.
  - Must poll or wait for webhook status via backend.
  - Must not mark paid from frontend alone.
```

UI copy:

```yaml
PaymentQRCodePanel_copy:
  title: "Hoàn tất thanh toán để chốt lịch"
  body: "Quét mã bằng ứng dụng ngân hàng. Nội dung chuyển khoản đã được tạo tự động để An Luật đối soát chính xác."
  privacy_note: "Nội dung thanh toán không chứa chi tiết vụ việc của bạn."
```

---

## 16.3 `PaymentStatusPanel`

```yaml
component:
  name: PaymentStatusPanel
  category: conversion
  purpose: Hiển thị trạng thái payment/booking.
  agent_renderable: false
```

States:

```yaml
PaymentStatusPanel_states:
  payment_pending:
    label: "Đang chờ xác nhận thanh toán"
    tone: info

  payment_success:
    label: "An Luật đã ghi nhận thanh toán"
    tone: success

  booking_confirmed:
    label: "Lịch tư vấn đã được xác nhận"
    tone: success

  payment_expired:
    label: "Mã thanh toán đã hết hạn"
    tone: warning

  manual_resolution_required:
    label: "Cần xác nhận lại khung giờ"
    tone: warning
```

---

# 17. Tool Components

## 17.1 `LegalHealthScore`

```yaml
component:
  name: LegalHealthScore
  category: tool
  purpose: Quiz B2B 8 câu để tạo Điểm an toàn pháp lý doanh nghiệp.
  agent_renderable: false
```

Desktop layout:

```yaml
LegalHealthScore_desktop:
  layout: golden_split
  left: question_stack_61_8
  right: live_score_meter_38_2
```

Mobile layout:

```yaml
LegalHealthScore_mobile:
  layout: one_question_per_screen
  score_display: compact_bottom_score_bar
```

Score bands:

```yaml
LegalHealthScore_bands:
  high_risk:
    range: "0-39"
    label: "Rủi ro cao"
    color: semantic.danger

  medium_risk:
    range: "40-69"
    label: "Cần củng cố"
    color: semantic.warning

  low_risk:
    range: "70-100"
    label: "Tương đối an toàn"
    color: semantic.success
```

---

## 17.2 `LegalSafetyMap`

```yaml
component:
  name: LegalSafetyMap
  category: tool
  purpose: Bản đồ an toàn pháp lý 3 câu hỏi.
  agent_renderable: false
```

Questions:

```yaml
LegalSafetyMap_questions:
  - id: user_role
    label: "Bạn là ai?"
  - id: main_worry
    label: "Bạn đang lo nhất điều gì?"
  - id: current_stage
    label: "Việc này đang ở giai đoạn nào?"
```

Output:

```yaml
LegalSafetyMap_output:
  - recommended_service_id
  - reason_summary
  - next_action
```

---

# 18. Content Components

## 18.1 `EditorialHero`

```yaml
component:
  name: EditorialHero
  category: content
  purpose: Hero layout cho homepage và landing page chính.
```

Variants:

```yaml
EditorialHero_variants:
  home_command_center:
    layout: golden_split
    media: real_photo_or_micro_video
    right_panel: intake_cards

  one_hour_landing:
    layout: golden_split
    media: attorney_portrait
    right_panel: trust_box

  service_page:
    layout: compressed_editorial
    media: optional
```

---

## 18.2 `FAQAccordion`

```yaml
component:
  name: FAQAccordion
  category: content
  purpose: FAQ visible + AI-readable.
```

Rules:

```yaml
FAQAccordion_rules:
  - Content must be server-rendered/static HTML.
  - Question must be visible in DOM.
  - Answer must be accessible without client-only JS.
  - Suitable for FAQPage schema.
```

---

## 18.3 `PlainLanguageMappingCard`

```yaml
component:
  name: PlainLanguageMappingCard
  category: content
  purpose: Map từ ngôn ngữ đời thường sang vấn đề pháp lý.
```

Example:

```json
{
  "userPhrase": "Hùn mà không hạp",
  "legalCategory": "Tranh chấp góp vốn / cổ đông / thành viên công ty",
  "path": "/doanh-nghiep/gop-von-co-dong"
}
```

---

# 19. Accessibility Requirements

```yaml
accessibility_requirements:
  touch_target:
    mobile_min_height: "55px"
    mobile_min_width: "55px"

  keyboard:
    all_interactive_components_keyboard_accessible: true
    focus_trap_for_drawer_modal: true
    escape_closes_drawer_modal: true

  contrast:
    minimum: WCAG_AA
    avoid_low_contrast_gold_on_cream: true

  screen_reader:
    buttons_have_aria_label: true
    progress_has_aria_live_optional: true
    bottom_sheet_has_role_dialog: true
    side_drawer_has_role_dialog: true

  motion:
    respects_prefers_reduced_motion: true

  errors:
    inline_error_message: true
    error_message_plain_language: true
```

---

# 20. Privacy & Safety UI Rules

```yaml
privacy_safety_ui_rules:
  no_session_replay_zones:
    - ZeroTypingQuestionSheet
    - ContactMethodSelector
    - OptionalContextSelector
    - PaymentQRCodePanel
    - DocumentUpload
    - SafetyNotice
    - MobileBottomSheet_when_intake

  no_echo_sensitive_text:
    applies_to:
      - AgentRecommendationPanel
      - PreparationChecklist
      - SecretaryReviewPanel
      - Analytics events

  quick_exit:
    component_visual_may_be_react: true
    behavior_must_be_vanilla_js: true
    z_index: emergency_overlay
```

---

# 21. Component State Model

All components must define states.

```yaml
standard_component_states:
  - default
  - hover
  - focus
  - active
  - selected
  - disabled
  - loading
  - error
  - success
```

Example for `IntakeDoorCard`:

```yaml
IntakeDoorCard_states:
  default:
    border: border.subtle
    background: surface

  hover:
    desktop_only: true
    transform: translateY(-2px)
    shadow: shadow_soft

  focus:
    outline: focus

  selected:
    border: focus
    background: surface_elevated

  disabled:
    opacity: 0.5
    pointer_events: none
```

---

# 22. Agent2UI Render Safety

```yaml
agent2ui_render_safety:
  renderer_must:
    - validate_schema
    - reject_unknown_component
    - reject_unknown_action
    - sanitize_string_props
    - cap_array_lengths
    - cap_text_lengths
    - fallback_on_error

  renderer_must_not:
    - render_raw_html
    - render_script
    - eval_code
    - render_external_iframe
    - execute_agent_action_directly
```

Fallback:

```yaml
agent2ui_fallback:
  component: SecretaryReviewPanel
  message: "An Luật đã nhận thông tin. Thư ký sẽ liên hệ để xác nhận hướng xử lý phù hợp."
```

---

# 23. Figma Library Structure

```yaml
figma_library:
  pages:
    - 00_Cover
    - 01_Foundations
    - 02_Tokens
    - 03_Layout
    - 04_Intake_Components
    - 05_Agent2UI_Components
    - 06_Conversion_Components
    - 07_Content_Components
    - 08_Mobile_Patterns
    - 09_Desktop_Patterns
    - 10_Prototypes

  component_naming:
    pattern: "Category / Component / Variant / State"
    examples:
      - "Intake / DoorCard / Family / Default"
      - "Agent2UI / RecommendationPanel / Default / Success"
      - "Conversion / PaymentQRCodePanel / Pending"
      - "Layout / MobileBottomSheet / Intake"
```

---

# 24. Code Package Structure

```yaml
code_structure:
  src:
    components:
      layout:
        - GoldenSplitLayout.astro
        - DesktopSideDrawer.tsx
        - MobileBottomSheet.tsx
      intake:
        - IntakeDoorCard.tsx
        - ZeroTypingQuestionSheet.tsx
        - ChipSelector.tsx
        - SegmentedControl.tsx
      agent2ui:
        - AgentRenderer.tsx
        - AgentRecommendationPanel.tsx
        - SafetyNotice.tsx
        - PreparationChecklist.tsx
        - SecretaryReviewPanel.tsx
      conversion:
        - SlotSelector.tsx
        - PaymentQRCodePanel.tsx
        - PaymentStatusPanel.tsx
      content:
        - EditorialHero.astro
        - FAQAccordion.astro
        - PlainLanguageMappingCard.astro
    tokens:
      - colors.css
      - typography.css
      - spacing.css
      - layout.css
      - motion.css
    schemas:
      - agent2ui-response.schema.json
      - zero-typing-question.schema.json
```

---

# 25. Analytics Events per Component

```yaml
component_analytics:
  IntakeDoorCard:
    event: intake_door_card_clicked
    properties:
      - card_id
      - device_type
      - source_page

  ZeroTypingQuestionSheet:
    event: zero_typing_step_completed
    properties:
      - step_id
      - selected_option
      - legal_area
      - device_type

  AgentRecommendationPanel:
    event: agent_recommendation_rendered
    properties:
      - recommended_service_id
      - confidence
      - requires_human_review
      - legal_area

  LegalHealthScore:
    event: legal_health_score_completed
    properties:
      - score_band
      - device_type

  PaymentQRCodePanel:
    event: payment_qr_viewed
    properties:
      - booking_mode
      - amount_band
      - device_type
```

Hard rule:

```yaml
analytics_component_rule:
  no_component_may_emit:
    - name
    - phone
    - email
    - zalo
    - case_summary
    - document_name
    - user_free_text
```

---

# 26. Performance Requirements

```yaml
performance_requirements:
  frontend:
    critical_css: inline_or_preloaded
    non_critical_js: deferred
    react_islands: only_for_interactive_components
    images: responsive_modern_formats
    video: compressed_muted_micro_video

  budgets:
    initial_js_homepage: "< 120kb gzip target"
    lcp_desktop: "< 2.5s target"
    lcp_mobile: "< 3.0s target"
    cls: "< 0.1"
    inp: "< 200ms target"

  component_rules:
    - FAQAccordion should work without heavy JS.
    - Agent2UI components lazy-load after intent.
    - Payment components load only after slot selection.
    - LegalHealthScore loads only when started.
```

---

# 27. QA Checklist

```yaml
qa_checklist:
  visual:
    - Golden split visually correct on desktop.
    - Mobile first viewport has primary action without scroll.
    - Cards maintain readable spacing at 320px.
    - Bottom sheet does not cover required CTA.

  interaction:
    - Intake can complete with tap only until contact step.
    - Back button works inside intake steps.
    - Drawer focus trap works.
    - Escape closes desktop drawer.
    - Payment states render correctly.

  accessibility:
    - Keyboard navigation passes.
    - Focus states visible.
    - Screen reader labels exist.
    - Reduced motion respected.

  privacy:
    - No PII emitted in analytics.
    - Session replay disabled in no-session zones.
    - Agent components do not echo sensitive text.

  agent2ui:
    - Unknown component rejected.
    - Unknown action rejected.
    - Invalid schema falls back safely.
```

---

# 28. Acceptance Criteria

```yaml
acceptance_criteria:
  - id: AC001_tokens_available
    requirement: Color, typography, spacing, layout, radius, shadow and motion tokens exist in both Figma and code.

  - id: AC002_golden_split
    requirement: Core desktop layouts use 61.8/38.2 split or documented variant.

  - id: AC003_mobile_decision_stack
    requirement: Mobile homepage first action is visible without scroll.

  - id: AC004_zero_typing_core
    requirement: Core intake steps require no typing before contact information.

  - id: AC005_bottom_sheet
    requirement: Mobile intake uses bottom sheet with one question per screen.

  - id: AC006_side_drawer
    requirement: Desktop intake uses side drawer or split panel, not long scroll form.

  - id: AC007_agent_component_allowlist
    requirement: Agent2UI renderer only renders components in allowlist.

  - id: AC008_no_raw_html
    requirement: No Agent2UI component accepts raw HTML/JS.

  - id: AC009_accessibility
    requirement: Components meet WCAG AA baseline and touch target requirements.

  - id: AC010_privacy
    requirement: Intake/payment/sensitive components emit no PII and are excluded from session replay.

  - id: AC011_performance
    requirement: Interactive components are lazy-loaded and do not bloat static content pages.

  - id: AC012_figma_code_alignment
    requirement: Component names and token names align between Figma and code.
```

---

# 29. Machine-readable summary

```json
{
  "document_id": "anluat_design_system_tokens_component_spec",
  "version": "1.0",
  "status": "draft_for_review",
  "design_system": {
    "principles": [
      "golden_ratio_first",
      "one_screen_one_decision",
      "low_typing_high_guidance",
      "editorial_calm",
      "mobile_is_not_shrunken_desktop",
      "safe_by_default",
      "schema_renderable"
    ],
    "token_groups": [
      "color",
      "typography",
      "spacing",
      "layout",
      "radius",
      "shadow",
      "motion",
      "z_index",
      "interaction"
    ],
    "golden_ratio": {
      "primary": "61.8%",
      "secondary": "38.2%",
      "ratio": 1.618
    },
    "spacing_scale": [3, 5, 8, 13, 21, 34, 55, 89, 144],
    "core_components": [
      "GoldenSplitLayout",
      "DesktopSideDrawer",
      "MobileBottomSheet",
      "IntakeDoorCard",
      "ZeroTypingQuestionSheet",
      "AgentRecommendationPanel",
      "SafetyNotice",
      "PreparationChecklist",
      "SecretaryReviewPanel",
      "SlotSelector",
      "PaymentQRCodePanel",
      "LegalHealthScore",
      "LegalSafetyMap",
      "FAQAccordion"
    ],
    "privacy_rules": {
      "no_session_replay_zones": [
        "ZeroTypingQuestionSheet",
        "ContactMethodSelector",
        "PaymentQRCodePanel",
        "DocumentUpload",
        "SafetyNotice",
        "MobileBottomSheet_when_intake"
      ],
      "no_pii_in_analytics": true,
      "no_sensitive_text_echo": true
    },
    "agent2ui_rules": {
      "allowlist_rendering": true,
      "raw_html_allowed": false,
      "unknown_component_fallback": "SecretaryReviewPanel"
    }
  }
}
```

---

# 30. Final decision

Design system của AnLuật.com phải được triển khai như một **Golden Ratio Agent2UI Design System**:

> Desktop dùng bố cục editorial 61.8/38.2; mobile dùng decision stack và bottom sheet; form chuyển thành zero-typing guided intake; Agent2UI chỉ render component trong allowlist; toàn bộ token/component phải đồng bộ giữa Figma và code.

Đây là tài liệu khóa “ngôn ngữ giao diện” của dự án. Sau tài liệu này, bước khoa học tiếp theo là:

# **CMS Content Model & AI-Ready SEO Schema Spec**

Vì giờ ta đã biết UI hiển thị thế nào. Tiếp theo phải định nghĩa **nội dung được lưu ra sao, Sanity schema gồm gì, FAQ/LegalService/Attorney/Breadcrumb markup thế nào, và nội dung nào phục vụ người đọc lẫn AI/search engine**.

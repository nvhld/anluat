document_id: anluat_visual_tokens_asset_brief
version: 1.0
status: draft_for_review
language: vi-VN
project: Website mới An Luật
primary_domain: anluat.com
spec_type: Visual Tokens / Typography / Asset Brief
machine_readable: true
scope:
  - MVP-A
  - future MVP-B compatible
last_updated: 2026-06-03
---

# AnLuật.com — Visual Tokens & Asset Brief

## 1. Purpose

Tài liệu này chốt visual foundation cho AnLuật.com:

- Màu sắc Hex
- Typography
- Spacing/Fibonacci scale
- Golden ratio layout tokens
- Radius, shadow, motion
- Icon style
- Photography/micro-video brief
- Forbidden visuals
- Asset requirements for Dandatto Studio/dev

---

## 2. Visual Direction

```yaml
visual_direction:
  name: "Editorial Legal Calm"
  mood:
    - bình tĩnh
    - sang vừa đủ
    - nhân văn
    - đáng tin
    - ấm áp
    - không template luật cũ

  avoid:
    - ảnh búa tòa
    - cán cân công lý lạm dụng
    - cột đá tòa án
    - bắt tay stock photo
    - xanh đen lạnh quá mức
    - đỏ tươi gây hoảng
    - vàng kim bóng bẩy
3. Final Color Tokens
color_tokens:
  background:
    canvas:
      name: "Canvas Cream"
      hex: "#FBF7EF"
      usage: "Nền tổng thể"

    surface:
      name: "Soft Ivory Surface"
      hex: "#FFFDF8"
      usage: "Card, panel, drawer, page content"

    surface_muted:
      name: "Warm Muted Surface"
      hex: "#F3EBDD"
      usage: "Section phụ, subtle background"

    surface_elevated:
      name: "Elevated White"
      hex: "#FFFFFF"
      usage: "Modal, drawer, elevated card"

  text:
    primary:
      name: "Soft Charcoal"
      hex: "#1F2522"
      usage: "Heading, body chính"

    secondary:
      name: "Muted Green Gray"
      hex: "#4D5650"
      usage: "Subheadline, helper text"

    muted:
      name: "Quiet Gray"
      hex: "#7A827B"
      usage: "Microcopy, metadata"

    inverse:
      name: "White"
      hex: "#FFFFFF"
      usage: "Text trên nền brand"

  brand:
    primary:
      name: "An Luật Deep Green"
      hex: "#18352B"
      usage: "Primary CTA, header emphasis, key brand areas"

    primary_hover:
      name: "An Luật Green Hover"
      hex: "#25483A"
      usage: "Hover primary CTA"

    secondary:
      name: "Editorial Green"
      hex: "#2F5C49"
      usage: "Secondary brand accents, icons"

    soft_green:
      name: "Garden Green"
      hex: "#6E8B62"
      usage: "Soft highlights, Legal Health low-risk"

  accent:
    gold:
      name: "Warm Sun Gold"
      hex: "#D8A94A"
      usage: "Focus ring, subtle highlight, premium accent"

    gold_soft:
      name: "Soft Sun Gold"
      hex: "#EACB82"
      usage: "Background accent, hover subtle"

    tana_white:
      name: "Tana White"
      hex: "#FFF9EA"
      usage: "Flower motif, soft highlight"

    earth_brown:
      name: "Earth Brown"
      hex: "#8A6547"
      usage: "Editorial accent, footer details"

  semantic:
    success:
      name: "Safe Green"
      hex: "#4F7A57"

    warning:
      name: "Amber Warning"
      hex: "#C68A2E"

    danger:
      name: "Earth Red"
      hex: "#9B463F"

    info:
      name: "Muted Blue"
      hex: "#476A7C"

  border:
    subtle:
      name: "Subtle Warm Border"
      hex: "#E8DDCB"

    medium:
      name: "Medium Warm Border"
      hex: "#D8C9B3"

    strong:
      name: "Strong Warm Border"
      hex: "#B59E7B"
4. CSS Variables
:root {
  --color-canvas: #FBF7EF;
  --color-surface: #FFFDF8;
  --color-surface-muted: #F3EBDD;
  --color-surface-elevated: #FFFFFF;

  --color-text-primary: #1F2522;
  --color-text-secondary: #4D5650;
  --color-text-muted: #7A827B;
  --color-text-inverse: #FFFFFF;

  --color-brand-primary: #18352B;
  --color-brand-primary-hover: #25483A;
  --color-brand-secondary: #2F5C49;
  --color-brand-soft: #6E8B62;

  --color-accent-gold: #D8A94A;
  --color-accent-gold-soft: #EACB82;
  --color-accent-tana-white: #FFF9EA;
  --color-accent-earth-brown: #8A6547;

  --color-success: #4F7A57;
  --color-warning: #C68A2E;
  --color-danger: #9B463F;
  --color-info: #476A7C;

  --color-border-subtle: #E8DDCB;
  --color-border-medium: #D8C9B3;
  --color-border-strong: #B59E7B;
}
5. Typography
5.1 Recommended Font Stack
typography:
  recommended:
    heading:
      font: "Lora"
      fallback: "Georgia, serif"
      reason: "Editorial, mềm, có chiều sâu, hỗ trợ tiếng Việt tốt."
      usage:
        - hero headline
        - H1
        - H2 editorial sections

    body:
      font: "Be Vietnam Pro"
      fallback: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
      reason: "Rõ ràng, hiện đại, tối ưu tiếng Việt."
      usage:
        - body copy
        - FAQ
        - service content
        - checklist

    ui:
      font: "Be Vietnam Pro"
      fallback: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
      reason: "Đọc tốt trên mobile, hợp button/chip/form."
      usage:
        - buttons
        - chips
        - labels
        - navigation
5.2 Alternative Font Stack
typography_alternative:
  modern_clean:
    heading: "Be Vietnam Pro"
    body: "Be Vietnam Pro"
    ui: "Be Vietnam Pro"
    mood: "Hiện đại, doanh nghiệp, ít editorial hơn."

  note: "Chỉ dùng alternative nếu Dandatto Studio thấy Lora quá mềm hoặc không hợp brand final."
5.3 Type Scale
type_scale:
  display_xl:
    desktop: "clamp(56px, 6vw, 89px)"
    mobile: "clamp(34px, 11vw, 55px)"
    line_height: 1.05
    letter_spacing: "0"
    exception_requires_design_approval: "Negative tracking may be used for a special hero only after explicit design approval."

  h1:
    desktop: "55px"
    mobile: "34px"
    line_height: 1.08
    letter_spacing: "0"

  h2:
    desktop: "34px"
    mobile: "28px"
    line_height: 1.15
    letter_spacing: "0"

  h3:
    desktop: "21px"
    mobile: "21px"
    line_height: 1.25

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
5.4 CSS Variables
:root {
  --font-heading: "Lora", Georgia, serif;
  --font-body: "Be Vietnam Pro", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-ui: "Be Vietnam Pro", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  --text-display-xl: clamp(56px, 6vw, 89px);
  --text-display-mobile: clamp(34px, 11vw, 55px);
  --text-h1: 55px;
  --text-h2: 34px;
  --text-h3: 21px;
  --text-body-lg: 18px;
  --text-body: 16px;
  --text-small: 13px;
  --text-micro: 11px;

  --line-heading: 1.08;
  --line-body: 1.618;
}
6. Spacing Tokens
spacing_tokens:
  scale: "Fibonacci"
  values:
    space_3: "3px"
    space_5: "5px"
    space_8: "8px"
    space_13: "13px"
    space_21: "21px"
    space_34: "34px"
    space_55: "55px"
    space_89: "89px"
    space_144: "144px"

  usage:
    inline_gap_small: "8px"
    inline_gap_default: "13px"
    card_padding_mobile: "21px"
    card_padding_desktop: "34px"
    section_gap_compact: "55px"
    section_gap_editorial: "89px"
    hero_padding_desktop: "55px"
    hero_padding_mobile: "21px"
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
7. Layout Tokens
layout_tokens:
  golden_split:
    primary: "61.8%"
    secondary: "38.2%"
    ratio: 1.618

  max_width:
    desktop: "1180px"
    wide: "1440px"
    reading: "680px"
    compact: "420px"

  mobile:
    safe_inline_padding: "21px"
    sticky_cta_bottom_space: "89px"
    first_action_without_scroll: true
:root {
  --ratio-golden: 1.618;
  --layout-primary: 61.8%;
  --layout-secondary: 38.2%;
  --max-width-desktop: 1180px;
  --max-width-wide: 1440px;
  --max-width-reading: 680px;
  --max-width-compact: 420px;
}
8. Radius, Shadow, Border
radius_tokens:
  radius_5: "5px"
  radius_8: "8px"
  radius_13: "13px"
  radius_21: "21px"
  radius_34: "34px"
  radius_pill: "999px"

radius_usage:
  chips: "radius_pill"
  buttons: "radius_13"
  cards: "radius_21"
  modals: "radius_34"
  bottom_sheet_top: "radius_34"
shadow_tokens:
  soft: "0 8px 34px rgba(31, 37, 34, 0.08)"
  card: "0 13px 55px rgba(31, 37, 34, 0.10)"
  drawer: "0 21px 89px rgba(31, 37, 34, 0.18)"
border_tokens:
  subtle: "1px solid #E8DDCB"
  medium: "1px solid #D8C9B3"
  focus: "2px solid #D8A94A"
9. Motion Tokens
motion_tokens:
  duration_fast: "120ms"
  duration_base: "210ms"
  duration_slow: "340ms"
  duration_drawer: "340ms"

  easing_standard: "cubic-bezier(0.2, 0.8, 0.2, 1)"
  easing_enter: "cubic-bezier(0.16, 1, 0.3, 1)"
  easing_exit: "cubic-bezier(0.7, 0, 0.84, 0)"
motion_rules:
  - respect_prefers_reduced_motion: true
  - no_parallax_on_sensitive_pages: true
  - quick_exit_must_not_depend_on_animation: true
  - drawer_and_bottom_sheet_may_animate: true
10. Z-Index Tokens
z_index_tokens:
  base: 0
  sticky_header: 100
  sticky_cta: 200
  side_drawer: 500
  bottom_sheet: 600
  modal: 700
  quick_exit: 900
  emergency_overlay: 1000
11. Icon Style
icon_style:
  style: "minimal line art"
  stroke_width: "1.5px to 2px"
  corner: "rounded"
  fill: "none"
  mood: "calm, human, not legal cliché"

  allowed_motifs:
    - flower/home for family
    - people/path for labor
    - building/leaf for business
    - knot/path for disputes
    - pulse/document for legal health
    - document/checklist
    - calendar
    - phone
    - shield/safety

  forbidden_motifs:
    - gavel
    - scales of justice as primary motif
    - courthouse columns
    - aggressive warning triangle overuse
12. Photography Brief
photography_brief:
  primary_subject:
    - Luật sư Đinh Thị Quỳnh Như
    - An Luật office
    - real working moments
    - calm consultation setting

  style:
    - natural light
    - warm tone
    - editorial portrait
    - clean background
    - not overly corporate
    - not luxury cliché

  shot_list_mvp:
    - portrait_lawyer_nhu_vertical
    - portrait_lawyer_nhu_horizontal
    - office_context_wide
    - consultation_table_detail
    - document_review_detail
    - team_working_soft

  avoid:
    - stock handshake
    - courtroom stock
    - fake dramatic lawyer pose
    - harsh blue office lighting
    - over-edited corporate glamour
13. Micro-Video Brief
micro_video_brief:
  usage:
    - homepage hero
    - 1_GIO_GAP_NHU landing hero
    - attorney profile

  duration: "5-7 seconds"
  format:
    desktop: "16:9 or 4:3 crop"
    mobile: "9:16 or 8:13 portrait crop"

  rules:
    - muted autoplay only
    - no sound
    - compressed
    - poster fallback required
    - no distracting motion
    - no sensitive client scenes

  concepts:
    - lawyer_nhu looking at notes then camera
    - quiet office moment
    - hand reviewing document
    - warm consultation table with no client face visible
14. Logo Usage
logo_usage:
  preferred:
    - full logo on desktop header
    - compact mark on mobile
    - dark green on cream background
    - white logo only on deep green background

  clear_space:
    min: "height_of_logo_mark"

  avoid:
    - stretching
    - drop shadow
    - placing on busy photo
    - using gold logo on low contrast background
15. Component Visual Mapping
component_visual_mapping:
  primary_cta:
    background: "#18352B"
    text: "#FFFFFF"
    hover: "#25483A"
    radius: "13px"

  secondary_cta:
    background: "transparent"
    text: "#18352B"
    border: "#D8C9B3"
    radius: "13px"

  intake_card:
    background: "#FFFDF8"
    border: "#E8DDCB"
    radius: "21px"
    shadow_hover: "0 8px 34px rgba(31, 37, 34, 0.08)"

  side_drawer:
    background: "#FFFDF8"
    shadow: "0 21px 89px rgba(31, 37, 34, 0.18)"
    radius: "34px left side optional"

  bottom_sheet:
    background: "#FFFDF8"
    radius_top: "34px"
    scrim: "rgba(31, 37, 34, 0.48)"

  safety_notice:
    background: "#FFF3EA"
    border: "#9B463F"
    text: "#1F2522"

  legal_health_high_risk:
    background: "#F8E5DF"
    accent: "#9B463F"

  legal_health_medium_risk:
    background: "#FFF2D8"
    accent: "#C68A2E"

  legal_health_low_risk:
    background: "#E9F1E7"
    accent: "#4F7A57"
16. Asset Requirements
asset_requirements_mvp:
  required:
    - logo_svg_dark
    - logo_svg_white
    - favicon
    - lawyer_nhu_portrait_vertical
    - lawyer_nhu_portrait_horizontal
    - office_or_consultation_photo
    - 5 line icons for intake doors
    - social preview image
    - poster image for micro-video if video available

  optional:
    - micro_video_homepage
    - micro_video_one_hour
    - team_photo
    - client_logo_assets_with_permission
    - flower/tana illustration motif
17. File Naming Convention
asset_file_naming:
  logo:
    - anluat-logo-dark.svg
    - anluat-logo-white.svg
    - anluat-mark.svg

  photography:
    - lawyer-nhu-portrait-vertical.webp
    - lawyer-nhu-portrait-horizontal.webp
    - anluat-office-wide.webp
    - anluat-consultation-detail.webp

  video:
    - lawyer-nhu-hero-loop-mobile.mp4
    - lawyer-nhu-hero-loop-desktop.mp4
    - lawyer-nhu-hero-poster.webp

  icons:
    - icon-family-home.svg
    - icon-labor-people.svg
    - icon-business-building.svg
    - icon-dispute-knot.svg
    - icon-legal-health-pulse.svg
18. Accessibility Rules
accessibility_rules:
  contrast:
    - primary text on canvas must pass WCAG AA
    - gold text on cream should be avoided
    - danger state must not rely on color alone

  typography:
    - body text minimum 16px
    - mobile buttons minimum 55px height
    - line-height for body around 1.618

  motion:
    - support prefers-reduced-motion
    - do not require animation to understand state

  imagery:
    - all meaningful images need alt text
    - decorative flower motifs should be aria-hidden
19. Machine-Readable Summary
{
  "document_id": "anluat_visual_tokens_asset_brief",
  "version": "1.0",
  "visual_direction": "Editorial Legal Calm",
  "primary_brand_color": "#18352B",
  "background_canvas": "#FBF7EF",
  "surface": "#FFFDF8",
  "text_primary": "#1F2522",
  "accent_gold": "#D8A94A",
  "heading_font": "Lora",
  "body_font": "Be Vietnam Pro",
  "ui_font": "Be Vietnam Pro",
  "spacing_scale": [3, 5, 8, 13, 21, 34, 55, 89, 144],
  "golden_ratio_layout": {
    "primary": "61.8%",
    "secondary": "38.2%",
    "ratio": 1.618
  },
  "forbidden_visuals": [
    "gavel",
    "overused scales of justice",
    "courthouse columns",
    "stock handshake",
    "cold corporate blue"
  ],
  "required_assets_mvp": [
    "logo_svg_dark",
    "logo_svg_white",
    "favicon",
    "lawyer_nhu_portrait_vertical",
    "lawyer_nhu_portrait_horizontal",
    "office_or_consultation_photo",
    "5_intake_line_icons",
    "social_preview_image"
  ]
}

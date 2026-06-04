# Homepage Design Packet For Dandatto Studio

```yaml
document_id: anluat_homepage_design_packet_for_dandatto_studio
version: 1.0
status: ready_for_handoff
language: vi-VN
last_updated: 2026-06-04
scope_lane: MVP-A
target_surface: homepage
intended_receivers:
  - Dandatto_Studio
```

## 1. Objective

Tài liệu này là brief thiết kế hoàn chỉnh cho homepage AnLuật.com. Mục tiêu là tạo một homepage public-facing đạt chuẩn MVP, đủ mạnh để làm first impression, đủ rõ để bắt đầu intake, nhưng không rơi vào kiểu brochure law firm cũ, demo skeleton, hay dashboard nội bộ.

```yaml
objective:
  homepage_must_do:
    - explain_what_An_Luat_does_within_first_view
    - show_5_legal_intake_doors_clearly
    - make_one_hour_with_nhu_feel_like_primary_conversion_asset
    - feel_editorial_human_and_trustworthy
    - work_equally_well_on_mobile_and_desktop
  homepage_must_not_do:
    - look_like_admin_tool
    - look_like_dev_skeleton
    - look_like_old_school_law_firm_template
    - force_long_form_filling
    - expose_payment_or_booking_ui
```

## 2. Confirmed Constraints

```yaml
confirmed_constraints:
  scope:
    - MVP-A_only
    - no_payment_UI
    - no_payOS
    - no_Cal_com
    - no_document_upload
    - no_LLM
  product:
    - homepage_with_5_intake_doors_is_mandatory
    - one_hour_with_nhu_is_primary_conversion_asset
    - zero_typing_intake_exists_later_but_homepage_should_not_fake_full_intake
    - price_is_hidden
  safety:
    - Quick_Exit_must_exist
    - Quick_Exit_copy_is_Thoat_nhanh
    - no_PII_in_analytics
    - no_session_replay
  technical:
    - current_frontend_stack_is_Astro
    - current_visual_tokens_live_in_apps_web_not_packages_design_system
```

## 3. Audience and User State

```yaml
primary_audiences:
  - people_in_family_assets_inheritance_distress
  - employees_or_HR_with_labor_issues
  - business_owners_needing_legal_risk_guidance
  - people_in_dispute_debt_litigation_context
  - businesses_needing_legal_health_check

user_state:
  emotional:
    - confused
    - urgent_but_not_always_ready_to_write
    - cautious_about_privacy
    - wants_reassurance_without_empty_promises
  practical:
    - wants_to_know_where_to_start
    - wants_to_know_if_An_Luat_can_handle_the_issue
    - wants_to_know_what_happens_after_submit
```

## 4. Homepage Job To Be Done

```yaml
homepage_jtbd:
  within_5_seconds:
    - user_understands_An_Luat_is_a_legal_triage_system_not_just_service_brochure
    - user_sees_clear_path_to_start
  within_first_view:
    - primary_human_message_is_visible
    - 1_GIO_GAP_NHU_is_visible_or_immediately_obvious
    - first_action_visible_without_scroll_on_mobile
  before_first_scroll:
    - user_can_choose_between_intake_doors_or_1_GIO_GAP_NHU
```

## 5. Design Direction

```yaml
design_direction:
  name: Editorial_Legal_Calm
  keywords:
    - calm
    - premium_but_not_flashy
    - human
    - editorial
    - trustworthy
    - modern
  avoid:
    - gavels
    - scales_of_justice_as_cliche
    - columns
    - handshake_stock_photos
    - generic_corporate_hero
    - dashboard_panels
    - demo_labels
    - obvious_placeholder_blocks
  visual_feel:
    - cream_canvas
    - soft_ivory_surfaces
    - restrained_shadows
    - strong_typographic_hierarchy
    - real_breathing_room
```

## 6. Visual Tokens To Respect

```yaml
visual_tokens:
  background_canvas: "#FBF7EF"
  primary_surface: "#FFFDF8"
  surface_muted: "#F3EBDD"
  text_primary: "#1F2522"
  text_secondary: "#4D5650"
  brand_primary: "#18352B"
  brand_primary_hover: "#25483A"
  brand_secondary: "#2F5C49"
  accent_gold: "#D8A94A"
  border_subtle: "#E8DDCB"
  heading_font: "Lora"
  body_font: "Be Vietnam Pro"
  card_radius_max: 8px
```

## 7. Required Information Architecture

```yaml
homepage_information_architecture:
  section_01:
    id: top_nav
    purpose: orientation_and_fast_escape
    required_elements:
      - brand
      - anchor_to_5_intake_doors
      - link_to_1_GIO_GAP_NHU
      - quick_exit

  section_02:
    id: hero
    purpose: explain_starting_point_and_reduce_anxiety
    required_elements:
      - editorial_headline
      - calming_subheadline
      - primary_CTA_to_choose_problem_group
      - secondary_CTA_to_open_1_GIO_GAP_NHU
      - support_chip_row
      - side_panel_or_supporting_message

  section_03:
    id: intake_doors
    purpose: show_5_clear_paths
    required_elements:
      - five_cards
      - one_card_per_legal_door
      - short_sentence
      - helper_text
      - CTA

  section_04:
    id: trust_transition
    purpose: explain_how_An_Luat_receives_information
    required_elements:
      - short_heading
      - one_paragraph_process_clarity

  optional_section_05:
    id: bridge_to_1_GIO_GAP_NHU
    purpose: reinforce_private_consultation_path
    rule: use_only_if_it_strengthens_homepage_not_if_it_repeats_hero
```

## 8. Content To Use

Use content below as the approved baseline. Designer may suggest micro-adjustments for line length, but should not rewrite meaning without review.

```yaml
homepage_content:
  brand:
    name: "An Luật"
    descriptor: "Chọn đúng hướng pháp lý"

  nav:
    links:
      - "5 cửa tiếp nhận"
      - "1 GIỜ GẶP NHƯ"
      - "Thoát nhanh"

  hero:
    eyebrow: "An Luật đồng hành từ bước đầu"
    headline: "Khi mọi thứ đang rối, bạn cần một nơi giúp mình bắt đầu bình tĩnh và đúng hướng."
    subheadline: >
      Chọn nhóm vấn đề gần nhất với điều bạn đang lo, nhận hướng tiếp cận phù hợp,
      và bắt đầu bằng thông tin sơ bộ thay vì một biểu mẫu dài.
    chips:
      - "Rõ vấn đề"
      - "Rõ bước tiếp theo"
      - "Rõ người sẽ liên hệ"
    primary_cta: "Chọn nhóm vấn đề"
    secondary_cta: "Mở 1 GIỜ GẶP NHƯ"
    trust_note: >
      Nếu bạn muốn nói chuyện riêng trước, 1 GIỜ GẶP NHƯ là lối vào phù hợp để chuẩn bị kỹ hơn trước khi gặp luật sư.

  side_panel:
    eyebrow: "Điểm bắt đầu gợi ý"
    title: "Bạn chưa cần kể hết mọi thứ ngay lập tức."
    body: >
      Chỉ cần bắt đầu từ nhóm vấn đề, mức độ khẩn cấp và cách An Luật nên liên hệ lại.
      Phần còn lại sẽ được hướng dẫn từng bước.
    support_title: "Lối vào nhanh"
    support_body: >
      Phù hợp nếu bạn cần người giúp sắp lại câu chuyện trước khi quyết định bước pháp lý tiếp theo.
    cta_primary: "Gửi thông tin vụ việc"
    cta_secondary: "Tìm hiểu 1 GIỜ GẶP NHƯ"

  intake_doors_intro:
    eyebrow: "5 cửa tiếp nhận"
    title: "Chọn nhóm gần nhất với điều đang làm bạn rối."
    body: >
      Mỗi lựa chọn dưới đây giúp An Luật hiểu bối cảnh ban đầu, để hướng bạn vào cách xử lý phù hợp
      và tránh phải kể lại từ đầu nhiều lần.

  trust_transition:
    eyebrow: "Cách An Luật tiếp nhận"
    title: "Thông tin ban đầu được dùng để sắp hướng xử lý, không phải để ép bạn điền một form dài."
    body: >
      Nếu vụ việc cần rà soát kỹ hơn, thư ký hoặc luật sư sẽ gọi lại để xác nhận hướng phù hợp trước khi đi tiếp.
```

## 9. Five Intake Door Cards

```yaml
intake_door_cards:
  - id: family_assets_inheritance
    short_label: "Gia đình"
    title: "Gia đình, tài sản, thừa kế"
    sentence: "Tôi đang rối chuyện gia đình, con cái, tài sản hoặc thừa kế."
    helper: "Ly hôn, quyền nuôi con, chia tài sản, thừa kế, tài sản chung/riêng."
    cta: "Chọn nhóm này"
    accent_token: "warm_beige"

  - id: labor_hr
    short_label: "Lao động"
    title: "Lao động & nhân sự"
    sentence: "Tôi gặp vấn đề về nghỉ việc, sa thải, lương, kỷ luật hoặc nhân sự."
    helper: "Người lao động, công ty, HR, hợp đồng lao động, kỷ luật, chấm dứt."
    cta: "Chọn nhóm này"
    accent_token: "muted_green"

  - id: business_operations
    short_label: "Doanh nghiệp"
    title: "Doanh nghiệp đang vận hành"
    sentence: "Doanh nghiệp tôi cần xử lý hợp đồng, nội bộ, nhân sự hoặc rủi ro pháp lý."
    helper: "Hợp đồng, góp vốn, cổ đông, nhân sự, quy trình nội bộ, pháp lý thường xuyên."
    cta: "Chọn nhóm này"
    accent_token: "deep_green"

  - id: disputes_debt_litigation
    short_label: "Tranh chấp"
    title: "Tranh chấp, kiện tụng, thu hồi nợ"
    sentence: "Tôi cần xử lý tranh chấp, công nợ hoặc vụ việc đã căng thẳng."
    helper: "Đòi nợ, thương lượng, khởi kiện, tranh chấp hợp đồng, tranh chấp kinh doanh."
    cta: "Chọn nhóm này"
    accent_token: "earth_red"

  - id: legal_health_training
    short_label: "Sức khỏe pháp lý"
    title: "Kiểm tra sức khỏe pháp lý doanh nghiệp"
    sentence: "Tôi muốn biết doanh nghiệp đang hở rủi ro pháp lý ở đâu."
    helper: "Rà soát hợp đồng, lao động, cổ đông, công nợ, giấy phép, quy trình pháp lý."
    cta: "Bắt đầu kiểm tra"
    accent_token: "sun_gold"
```

## 10. Layout Guidance

```yaml
layout_guidance:
  desktop:
    hero:
      layout: golden_split
      left: editorial_message
      right: supportive_panel
      ratio: "61.8 / 38.2"
    door_grid:
      preferred: "2 columns + final row single emphasis card if needed"
      alternative: "3 + 2 only if composition stays balanced"
    spacing:
      section_gap: 55px_to_89px
      inner_panel_gap: 21px_to_34px

  mobile:
    rule: mobile_is_not_shrunk_desktop
    top_priority:
      - first_action_visible_without_scroll
      - hero_readable_without_overpowering_viewport
      - CTA_stack_not_inline
      - 5_door_entry_visible_early
    door_grid: single_column
    nav: compact_stack_or_single_line_wrap
```

## 11. Component Direction

```yaml
component_direction:
  nav:
    mood: quiet_editorial
    quick_exit: pill_button_not_scary_not_aggressive

  hero:
    headline: strong_editorial_H1
    subheadline: calm_human_copy
    chips: soft_supporting_tags_not_status_badges
    CTAs:
      primary: dark_green_filled
      secondary: light_surface_with_outline

  intake_door_card:
    must_feel:
      - trustworthy
      - easy_to_scan
      - not_like_product_pricing_card
    structure:
      - short_label
      - title
      - user_sentence
      - helper_copy
      - CTA

  trust_transition:
    style: quiet_band_or_soft_panel
    goal: process_clarity_without_legal_jargon
```

## 12. Interaction Guidance

```yaml
interaction_guidance:
  homepage_primary_action:
    desktop: choose_problem_group
    mobile: choose_problem_group

  secondary_action:
    desktop: open_1_GIO_GAP_NHU
    mobile: open_1_GIO_GAP_NHU

  quick_exit:
    label: "Thoát nhanh"
    placement: visible_but_not_primary_conversion
    style: subtle_pill

  not_allowed:
    - fake_chatbot_bubble_as_primary_entry
    - fake_full_form_fields_if_not_implemented
    - payment_buttons
    - booking_calendar
```

## 13. Mobile-Specific Design Notes

```yaml
mobile_design_notes:
  first_view:
    must_show:
      - brand
      - hero_headline
      - one_primary_CTA
      - one_secondary_CTA_or_clear_path_to_it
    should_not_show:
      - long_intro_wall
      - too_many_nav_items_competing_with_CTA

  typography:
    hero_should_be_large_but_not_break_lines_into_noise
    body_should_not_look_like_dense_article

  spacing:
    preserve_breathing_room_between_hero_and_cards
    do_not_pack_cards_tightly

  cards:
    full_width
    consistent_padding
    CTA_easy_to_tap
```

## 14. Visual Do / Don't

```yaml
visual_do:
  - use_real_whitespace
  - let_typography_do_the_work
  - use_soft_warm_surfaces
  - make_primary_CTA_clearly_dominant
  - make_cards_feel_like_editorial_entry_points
  - keep_icons_subtle_or_omit_them_if_not_needed

visual_dont:
  - do_not_use_gavel_or_scales
  - do_not_use_admin_dashboard_panels
  - do_not_use_marketing_gradient_hero
  - do_not_show_technical_labels
  - do_not_show_placeholder_lorem_or_demo_copy
  - do_not_make_everything_the_same_tone_of_green
```

## 15. Deliverables Requested From Dandatto Studio

```yaml
required_deliverables:
  - homepage_desktop_frame
  - homepage_mobile_frame
  - hero_component_states
  - intake_door_card_component
  - nav_with_quick_exit
  - CTA_styles_primary_secondary
  - notes_for_spacing_and_responsive_behavior
  - optional_alternate_homepage_variant_if_stronger

preferred_format:
  - figma_file_or_equivalent
  - exportable_images_for_desktop_and_mobile
  - short_rationale_for_key_layout_choices
```

## 16. Acceptance Checklist For Design Review

```yaml
design_acceptance_checklist:
  - homepage_looks_like_modern_law_firm_editorial_not_dev_skeleton
  - first_view_explains_starting_point_clearly
  - 5_intake_doors_are_clear_and_scannable
  - 1_GIO_GAP_NHU_is_visibly_primary_conversion_asset
  - Quick_Exit_is_present_but_not_visually_noisy
  - mobile_first_action_visible_without_scroll
  - hierarchy_is_clear_on_both_desktop_and_mobile
  - no_payment_or_booking_UI
  - no_fake_full_intake_form
  - no_stock_legal_cliche
```

## 17. Open Questions For Dandatto Studio To Resolve Visually

```yaml
design_questions:
  - Should the fifth intake door sit in a solo emphasized row or remain in an even grid?
  - Should the supportive panel in the hero contain miniature process steps or stay minimal?
  - Should the trust transition be a full-width soft band or a compact framed panel?
  - Does the homepage need a small real-photo strip later, or is typography-led trust enough for MVP?
```

## 18. Handoff Prompt For Dandatto Studio

Use this prompt as the direct starting brief:

```text
Design the homepage for AnLuật.com as a calm, premium, editorial Vietnamese law-firm website.

Goals:
- Public-facing homepage, not admin, not dev skeleton, not generic corporate legal template.
- Show 5 legal intake doors clearly.
- Make “1 GIỜ GẶP NHƯ” feel like the primary conversion asset.
- Preserve a subtle “Thoát nhanh” action in the top navigation.
- Mobile-first action must be visible without scroll.

Visual direction:
- Editorial Legal Calm
- Background #FBF7EF
- Surface #FFFDF8
- Primary brand #18352B
- Accent gold #D8A94A
- Heading font: Lora
- Body/UI font: Be Vietnam Pro
- Soft warm borders, refined spacing, strong typography, no legal clichés.

Required sections:
1. top nav with brand, “5 cửa tiếp nhận”, “1 GIỜ GẶP NHƯ”, and “Thoát nhanh”
2. hero with headline, subheadline, support chips, primary CTA “Chọn nhóm vấn đề”, secondary CTA “Mở 1 GIỜ GẶP NHƯ”
3. supportive side panel explaining the user does not need to tell everything immediately
4. five intake door cards with the provided Vietnamese labels and helper text
5. a short trust/process clarity section explaining that initial information is used to guide the next step, not force a long form

Do not include:
- payment UI
- booking calendar
- fake full intake form
- chatbot bubble as primary entry
- stock gavel / scales / handshake visuals
- dev-facing labels or placeholder language

Need output:
- homepage desktop design
- homepage mobile design
- component direction for hero, cards, and CTA hierarchy
```

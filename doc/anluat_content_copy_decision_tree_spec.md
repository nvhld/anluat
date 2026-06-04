document_id: anluat_content_copy_decision_tree_spec
version: 1.0
status: draft_for_review
language: vi-VN
project: Website mới An Luật
primary_domain: anluat.com
spec_type: Content Copy / Decision Tree / Intake Copy / Checklist
machine_readable: true
scope:
  - MVP-A
  - MVP-B gated copy placeholders
last_updated: 2026-06-03
---

# AnLuật.com — Content Copy & Decision Tree Spec

## 1. Purpose

Tài liệu này chốt nội dung hiển thị và dữ liệu cấu trúc cho các luồng chính của AnLuật.com:

- 5 Intake Doors
- Zero-typing intake questions
- Agent2UI routing copy
- Bản đồ an toàn pháp lý
- Legal Health Score
- Phiếu chuẩn bị “1 GIỜ GẶP NHƯ”
- Landing page “1 GIỜ GẶP NHƯ”
- Safety / secretary review / payment copy

Tài liệu này dùng cho:
- frontend_agent
- backend_privacy_agent
- cms_seo_agent
- lead_integrator
- qa_privacy_agent
- Dandatto Studio
- content/legal reviewer

---

## 2. Global Content Rules

```yaml
content_rules:
  tone:
    - rõ ràng
    - bình tĩnh
    - nhân văn
    - không dọa nạt
    - không hứa kết quả
    - không dùng thuật ngữ pháp lý nếu không cần

  forbidden_claims:
    - "cam kết thắng"
    - "chắc chắn thắng"
    - "đảm bảo kết quả"
    - "xóa sạch dấu vết"
    - "bảo mật tuyệt đối"
    - "tư vấn miễn phí" unless approved
    - "giá cố định" unless explicitly configured

  privacy_rules:
    - không echo nội dung vụ việc người dùng đã nhập
    - không đưa tình tiết nhạy cảm vào payment description
    - không đưa PII vào analytics
    - không dùng subject/email/Zalo chứa cụm nhạy cảm như "ly hôn", "bạo hành", "tranh chấp tài sản"
3. Five Intake Doors
intake_doors:
  - id: family_assets_inheritance
    label: "Gia đình, tài sản, thừa kế"
    short_label: "Gia đình"
    user_sentence: "Tôi đang rối chuyện gia đình, con cái, tài sản hoặc thừa kế."
    helper_text: "Ly hôn, quyền nuôi con, chia tài sản, thừa kế, tài sản chung/riêng."
    cta: "Chọn nhóm này"
    icon: "line_flower_home"
    accent_token: "warm_beige"
    default_route: "agent2ui_intake"
    mvp_a_enabled: true

  - id: labor_hr
    label: "Lao động & nhân sự"
    short_label: "Lao động"
    user_sentence: "Tôi gặp vấn đề về nghỉ việc, sa thải, lương, kỷ luật hoặc nhân sự."
    helper_text: "Người lao động, công ty, HR, hợp đồng lao động, kỷ luật, chấm dứt."
    cta: "Chọn nhóm này"
    icon: "line_people_path"
    accent_token: "muted_green"
    default_route: "agent2ui_intake"
    mvp_a_enabled: true

  - id: business_operations
    label: "Doanh nghiệp đang vận hành"
    short_label: "Doanh nghiệp"
    user_sentence: "Doanh nghiệp tôi cần xử lý hợp đồng, nội bộ, nhân sự hoặc rủi ro pháp lý."
    helper_text: "Hợp đồng, góp vốn, cổ đông, nhân sự, quy trình nội bộ, pháp lý thường xuyên."
    cta: "Chọn nhóm này"
    icon: "line_building_leaf"
    accent_token: "deep_green"
    default_route: "agent2ui_intake"
    mvp_a_enabled: true

  - id: disputes_debt_litigation
    label: "Tranh chấp, kiện tụng, thu hồi nợ"
    short_label: "Tranh chấp"
    user_sentence: "Tôi cần xử lý tranh chấp, công nợ hoặc vụ việc đã căng thẳng."
    helper_text: "Đòi nợ, thương lượng, khởi kiện, tranh chấp hợp đồng, tranh chấp kinh doanh."
    cta: "Chọn nhóm này"
    icon: "line_path_knot"
    accent_token: "earth_red"
    default_route: "agent2ui_intake"
    mvp_a_enabled: true

  - id: legal_health_training
    label: "Kiểm tra sức khỏe pháp lý doanh nghiệp"
    short_label: "Sức khỏe pháp lý"
    user_sentence: "Tôi muốn biết doanh nghiệp đang hở rủi ro pháp lý ở đâu."
    helper_text: "Rà soát hợp đồng, lao động, cổ đông, công nợ, giấy phép, quy trình pháp lý."
    cta: "Bắt đầu kiểm tra"
    icon: "line_pulse_document"
    accent_token: "sun_gold"
    default_route: "legal_health_score"
    mvp_a_enabled: true
4. Zero-Typing Intake Questions
zero_typing_questions:
  - id: legal_area
    step: 1
    question: "Bạn đang rối chuyện gì?"
    helper_text: "Chọn nhóm gần nhất. Nếu chưa chắc, cứ chọn điều khiến bạn lo nhất."
    input_type: "choice_cards"
    options_source: "intake_doors"
    typing_required: false
    analytics_event: "zero_typing_step_completed"

  - id: current_stage
    step: 2
    question: "Việc này đang ở giai đoạn nào?"
    helper_text: "Không cần chọn quá chính xác. An Luật sẽ hỏi thêm nếu cần."
    input_type: "chips"
    typing_required: false
    options:
      - id: new_issue
        label: "Mới phát sinh"
      - id: has_documents
        label: "Đã có giấy tờ"
      - id: negotiating
        label: "Đang thương lượng"
      - id: court_or_authority
        label: "Đã ra tòa / cơ quan chức năng"
      - id: prevention
        label: "Cần phòng ngừa trước"
      - id: not_sure
        label: "Chưa rõ"

  - id: urgency
    step: 3
    question: "Mức độ khẩn cấp?"
    helper_text: "Chọn theo thời điểm bạn cần được định hướng."
    input_type: "segmented_buttons"
    typing_required: false
    options:
      - id: within_24h
        label: "Trong 24 giờ"
      - id: this_week
        label: "Trong tuần này"
      - id: flexible
        label: "Có thể sắp xếp sau"

  - id: preferred_lawyer
    step: 4
    question: "Bạn muốn gặp ai?"
    helper_text: "Nếu chưa rõ, An Luật sẽ phân người phù hợp."
    input_type: "segmented_control"
    typing_required: false
    options:
      - id: lawyer_nhu
        label: "Luật sư Như"
      - id: suitable_lawyer
        label: "Luật sư phù hợp của An Luật"
      - id: not_sure
        label: "Chưa rõ"

  - id: contact_method
    step: 5
    question: "An Luật liên hệ lại bằng cách nào?"
    helper_text: "Thông tin này chỉ dùng để An Luật liên hệ về vụ việc bạn gửi."
    input_type: "contact_choice"
    typing_required: "phone_or_email_only"
    options:
      - id: phone
        label: "Gọi điện"
      - id: zalo
        label: "Zalo"
      - id: email
        label: "Email"
      - id: secretary_call_first
        label: "Tôi muốn thư ký gọi trước"

  - id: optional_context
    step: 6
    question: "Bạn có muốn nói thêm không?"
    helper_text: "Không bắt buộc. Bạn có thể để thư ký hỏi thêm qua điện thoại."
    input_type: "optional_context_selector"
    typing_required: false
    options:
      - id: secretary_ask_more
        label: "Tôi muốn thư ký hỏi thêm"
      - id: type_few_lines
        label: "Tôi muốn gõ vài dòng"
      - id: has_documents
        label: "Tôi có tài liệu liên quan"
5. MVP-A Routing Rules
routing_rules:
  - id: R_FAMILY_CHILD
    if:
      legal_area: family_assets_inheritance
      issue_type_any:
        - child_custody
        - divorce
        - asset_division
    then:
      component: AgentRecommendationPanel
      recommended_service_id: one_hour_with_nhu
      booking_mode: secretary_review
      requires_human_review: false
      reason_codes:
        - personal_case
        - needs_private_consultation

  - id: R_FAMILY_SAFETY
    if:
      legal_area: family_assets_inheritance
      issue_type_any:
        - domestic_violence_or_control
        - unsafe_context
    then:
      component: SafetyNotice
      recommended_service_id: secretary_review
      booking_mode: secretary_review
      requires_human_review: true
      policy_flags:
        - sensitive_family_case
        - domestic_violence_possible
        - human_review_required

  - id: R_LABOR_EMPLOYEE
    if:
      legal_area: labor_hr
      user_role_any:
        - employee
        - not_sure
    then:
      component: AgentRecommendationPanel
      recommended_service_id: one_hour_with_nhu
      booking_mode: secretary_review
      requires_human_review: false

  - id: R_BUSINESS_GENERAL
    if:
      legal_area: business_operations
    then:
      component: SecretaryReviewPanel
      recommended_service_id: secretary_review
      booking_mode: secretary_review
      requires_human_review: true
      reason_codes:
        - business_case_needs_scope_review

  - id: R_DISPUTE_COURT
    if:
      legal_area: disputes_debt_litigation
      current_stage_any:
        - court_or_authority
        - negotiating
    then:
      component: SecretaryReviewPanel
      recommended_service_id: secretary_review
      booking_mode: secretary_review
      requires_human_review: true
      policy_flags:
        - conflict_check_needed
        - human_review_required

  - id: R_LEGAL_HEALTH
    if:
      legal_area: legal_health_training
    then:
      component: LegalHealthScorePrompt
      recommended_service_id: business_legal_health_check
      booking_mode: secretary_review
      requires_human_review: true
6. Legal Safety Map
legal_safety_map:
  purpose: "Giúp người dùng tự định vị vấn đề trong 3 câu hỏi trước khi gửi thông tin."

  questions:
    - id: user_role
      question: "Bạn đang đứng ở vai nào?"
      options:
        - id: individual
          label: "Cá nhân / gia đình"
        - id: employee
          label: "Người lao động"
        - id: business_owner
          label: "Chủ doanh nghiệp / quản lý"
        - id: hr
          label: "HR / nhân sự"
        - id: creditor
          label: "Người cần thu hồi tiền"
        - id: not_sure
          label: "Chưa rõ"

    - id: main_worry
      question: "Điều bạn lo nhất lúc này là gì?"
      options:
        - id: losing_rights
          label: "Sợ mất quyền lợi"
        - id: documents
          label: "Không biết giấy tờ đã đủ chưa"
        - id: deadline
          label: "Có thời hạn gấp"
        - id: negotiation_failed
          label: "Thương lượng không xong"
        - id: court_or_authority
          label: "Đã liên quan tòa/cơ quan chức năng"
        - id: prevention
          label: "Muốn phòng ngừa trước"

    - id: next_need
      question: "Bạn cần gì nhất sau khi nói chuyện với luật sư?"
      options:
        - id: understand_issue
          label: "Hiểu đúng vấn đề"
        - id: prepare_documents
          label: "Biết cần chuẩn bị gì"
        - id: choose_strategy
          label: "Biết nên làm bước nào tiếp theo"
        - id: draft_or_review
          label: "Cần rà soát/soạn văn bản"
        - id: representation
          label: "Cần người đại diện/xử lý sâu"
7. Legal Health Score Questions
legal_health_score:
  purpose: "Chấm điểm sơ bộ mức an toàn pháp lý của doanh nghiệp."
  input_options:
    - id: yes
      label: "Có"
      score: 10
    - id: no
      label: "Chưa"
      score: 0
    - id: not_sure
      label: "Không rõ"
      score: 4

  questions:
    - id: contracts
      group: contracts
      question: "Doanh nghiệp có mẫu hợp đồng chuẩn và được rà soát định kỳ không?"
      risk_if_no: "Hợp đồng dễ thiếu điều khoản bảo vệ khi có tranh chấp."

    - id: labor
      group: labor
      question: "Hồ sơ lao động, nội quy, lương thưởng, kỷ luật đã được chuẩn hóa chưa?"
      risk_if_no: "Rủi ro khi chấm dứt hợp đồng, xử lý kỷ luật hoặc tranh chấp lao động."

    - id: corporate
      group: corporate
      question: "Hồ sơ góp vốn, cổ đông/thành viên, người đại diện có rõ ràng không?"
      risk_if_no: "Rủi ro tranh chấp nội bộ, quyền ký kết và quyền kiểm soát doanh nghiệp."

    - id: tax_accounting
      group: tax_accounting
      question: "Quy trình hóa đơn, chứng từ, thuế có được kiểm soát pháp lý không?"
      risk_if_no: "Rủi ro khi bị kiểm tra, truy thu hoặc tranh chấp nghĩa vụ thanh toán."

    - id: debt
      group: debt
      question: "Doanh nghiệp có quy trình xử lý công nợ và chứng cứ giao dịch không?"
      risk_if_no: "Khó thu hồi nợ hoặc chứng minh nghĩa vụ thanh toán."

    - id: ip
      group: intellectual_property
      question: "Nhãn hiệu, tài sản trí tuệ, nội dung thương hiệu đã được bảo vệ chưa?"
      risk_if_no: "Rủi ro bị sao chép, tranh chấp thương hiệu hoặc mất quyền khai thác."

    - id: compliance
      group: compliance
      question: "Doanh nghiệp có giấy phép/chứng nhận cần thiết cho ngành nghề không?"
      risk_if_no: "Rủi ro bị xử phạt, tạm dừng hoạt động hoặc mất điều kiện kinh doanh."

    - id: dispute_readiness
      group: dispute_readiness
      question: "Khi có tranh chấp, doanh nghiệp có sẵn hồ sơ chứng minh không?"
      risk_if_no: "Dễ yếu thế khi thương lượng, khiếu nại hoặc khởi kiện."
legal_health_score_bands:
  - id: high_risk
    range: "0-39"
    label: "Rủi ro cao"
    copy: "Doanh nghiệp có nhiều điểm cần rà soát sớm để tránh rủi ro vận hành và tranh chấp."

  - id: medium_risk
    range: "40-69"
    label: "Cần củng cố"
    copy: "Doanh nghiệp đã có một số nền tảng, nhưng vẫn còn các vùng rủi ro nên được kiểm tra."

  - id: low_risk
    range: "70-100"
    label: "Tương đối an toàn"
    copy: "Doanh nghiệp có nền tảng pháp lý khá tốt, nhưng vẫn nên rà soát định kỳ khi có thay đổi."
8. “1 GIỜ GẶP NHƯ” Landing Page Copy
one_hour_with_nhu_landing:
  hero:
    headline: "1 GIỜ GẶP NHƯ"
    subheadline: "Một buổi tư vấn riêng để bạn kể đúng chuyện, hiểu đúng vấn đề và biết mình nên làm gì tiếp theo."
    outcome_chips:
      - "Rõ vấn đề"
      - "Rõ hồ sơ"
      - "Rõ bước tiếp theo"
    primary_cta: "Gửi thông tin vụ việc"
    secondary_cta: "Tôi muốn thư ký gọi trước"
    trust_note: "Phí tư vấn được xác nhận sau khi An Luật xem sơ bộ nội dung vụ việc."

  why:
    title: "Khi bạn đang rối, điều đầu tiên cần không phải là nhiều thông tin hơn."
    body: "Điều bạn cần là một người đủ kinh nghiệm để giúp bạn sắp xếp lại câu chuyện, nhận diện đúng vấn đề pháp lý và chọn bước đi an toàn."

  suitable_for:
    title: "Phù hợp nếu bạn đang cần"
    bullets:
      - "Hiểu vấn đề của mình thuộc nhóm pháp lý nào."
      - "Biết nên chuẩn bị giấy tờ gì."
      - "Biết nên thương lượng, chờ thêm, gửi văn bản hay khởi kiện."
      - "Có định hướng riêng trước khi đưa ra quyết định lớn."

  how_it_works:
    title: "Buổi tư vấn diễn ra như thế nào?"
    steps:
      - title: "Bạn gửi thông tin sơ bộ"
        body: "Chỉ cần chọn nhóm vấn đề, mức độ khẩn cấp và cách An Luật liên hệ lại."
      - title: "An Luật xem và xác nhận hướng phù hợp"
        body: "Vụ việc đơn giản có thể được xếp lịch nhanh. Vụ việc phức tạp sẽ được thư ký hoặc luật sư xác nhận thêm."
      - title: "Bạn chuẩn bị theo phiếu gợi ý"
        body: "An Luật gửi checklist để bạn không phải bắt đầu buổi tư vấn từ con số 0."
      - title: "Bạn gặp luật sư"
        body: "Mục tiêu của buổi gặp là giúp bạn rõ vấn đề, rõ hồ sơ và rõ bước tiếp theo."

  not_for:
    title: "Buổi này không nhằm mục đích"
    bullets:
      - "Cam kết kết quả vụ việc."
      - "Thay thế toàn bộ quá trình đại diện hoặc tranh tụng."
      - "Xử lý hồ sơ phức tạp mà chưa có bước rà soát riêng."
9. Preparation Checklist — “1 GIỜ GẶP NHƯ”
preparation_checklists:
  general:
    title: "Phiếu chuẩn bị chung"
    items:
      - "Tóm tắt sự việc theo mốc thời gian."
      - "Danh sách các bên liên quan."
      - "Các giấy tờ, tin nhắn, email, hợp đồng hoặc chứng cứ đang có."
      - "Điều bạn muốn đạt được sau buổi tư vấn."
      - "Những thời hạn gấp nếu có: lịch tòa, hạn phản hồi, hạn thanh toán, hạn ký."

  family_assets_inheritance:
    title: "Phiếu chuẩn bị — Gia đình, tài sản, thừa kế"
    items:
      - "Giấy đăng ký kết hôn hoặc giấy tờ liên quan tình trạng hôn nhân nếu có."
      - "Giấy khai sinh của con nếu có vấn đề về quyền nuôi con, cấp dưỡng, chăm sóc."
      - "Thông tin tài sản chung/riêng: nhà đất, xe, tài khoản, khoản vay, góp vốn."
      - "Các tin nhắn, email, biên bản, giấy tờ thể hiện thỏa thuận hoặc mâu thuẫn."
      - "Mốc thời gian chính: kết hôn, phát sinh tài sản, mâu thuẫn, ly thân, sự kiện quan trọng."

  labor_hr:
    title: "Phiếu chuẩn bị — Lao động & nhân sự"
    items:
      - "Hợp đồng lao động, phụ lục hợp đồng nếu có."
      - "Quyết định nghỉ việc, kỷ luật, sa thải hoặc thông báo từ công ty nếu có."
      - "Bảng lương, bảng chấm công, thông tin bảo hiểm nếu liên quan."
      - "Tin nhắn, email, biên bản họp hoặc trao đổi với công ty/người lao động."
      - "Mốc thời gian: ngày bắt đầu làm việc, sự kiện tranh chấp, ngày nhận thông báo."

  business_operations:
    title: "Phiếu chuẩn bị — Doanh nghiệp đang vận hành"
    items:
      - "Thông tin doanh nghiệp và người đại diện."
      - "Hợp đồng, phụ lục, báo giá, biên bản làm việc hoặc hồ sơ giao dịch."
      - "Tài liệu nội bộ liên quan: điều lệ, quy chế, thỏa thuận cổ đông/thành viên nếu có."
      - "Mục tiêu xử lý: phòng ngừa, thương lượng, rà soát, thu hồi, tái cấu trúc hay tranh chấp."
      - "Các thời hạn quan trọng: hạn ký, hạn thanh toán, hạn phản hồi, lịch họp."

  disputes_debt_litigation:
    title: "Phiếu chuẩn bị — Tranh chấp, kiện tụng, thu hồi nợ"
    items:
      - "Hợp đồng, đơn đặt hàng, biên bản giao nhận, hóa đơn, chứng từ thanh toán."
      - "Tin nhắn, email hoặc văn bản yêu cầu thanh toán/thực hiện nghĩa vụ."
      - "Thông tin bên còn lại: cá nhân, công ty, người đại diện, địa chỉ nếu có."
      - "Tình trạng hiện tại: đang thương lượng, đã gửi văn bản, đã nộp hồ sơ, đã có lịch làm việc."
      - "Số tiền, nghĩa vụ hoặc quyền lợi đang tranh chấp."

  legal_health_training:
    title: "Phiếu chuẩn bị — Kiểm tra sức khỏe pháp lý doanh nghiệp"
    items:
      - "Danh sách hợp đồng mẫu doanh nghiệp đang dùng."
      - "Hồ sơ lao động, nội quy, quy chế lương thưởng nếu có."
      - "Hồ sơ công ty: điều lệ, góp vốn, cổ đông/thành viên, người đại diện."
      - "Thông tin về công nợ, khách hàng, nhà cung cấp hoặc tranh chấp đang tồn tại."
      - "Các giấy phép/chứng nhận cần thiết cho ngành nghề kinh doanh."
10. Agent2UI Copy
agent2ui_copy:
  recommendation_one_hour:
    title: "Bạn có thể phù hợp với 1 GIỜ GẶP NHƯ"
    reason: "Vụ việc cần được định hướng riêng trước khi chuẩn bị hồ sơ hoặc chọn bước xử lý tiếp theo."
    next_action_label: "Để An Luật gọi lại cho tôi"

  recommendation_secretary_review:
    title: "Vụ việc này cần An Luật xem kỹ hơn"
    reason: "Thông tin sơ bộ cho thấy cần xác nhận thêm trước khi xếp lịch hoặc báo phí tư vấn."
    next_action_label: "Tôi muốn thư ký gọi lại"

  legal_health_prompt:
    title: "Doanh nghiệp nên bắt đầu bằng Điểm an toàn pháp lý"
    reason: "Vấn đề thuộc nhóm phòng ngừa rủi ro, nên rà soát tổng quan trước khi tư vấn sâu."
    next_action_label: "Làm bài kiểm tra 8 câu"

  safety_notice:
    title: "Ưu tiên an toàn của bạn trước"
    body: "Nếu bạn đang không an toàn, hãy ưu tiên rời khỏi tình huống nguy hiểm và liên hệ người thân hoặc cơ quan chức năng phù hợp."
    disclaimer: "Nút Thoát nhanh giúp ẩn nhanh màn hình này, nhưng không thay thế việc xóa lịch sử trình duyệt hoặc dùng thiết bị an toàn."
    primary_action: "Thoát nhanh"
    secondary_action: "Để An Luật gọi lại khi thuận tiện"
11. Secretary Review Copy
secretary_review_copy:
  submitted_state:
    title: "An Luật đã nhận thông tin"
    body: "Thư ký An Luật sẽ xem sơ bộ và liên hệ lại để xác nhận hướng xử lý phù hợp."
    next_step: "Bạn có thể chuẩn bị trước các giấy tờ theo phiếu gợi ý bên dưới."

  needs_more_info:
    title: "Cần xác nhận thêm thông tin"
    body: "Một số vụ việc cần được hỏi thêm trước khi xếp lịch hoặc chuyển luật sư phù hợp."

  no_auto_book:
    title: "Vụ việc này chưa phù hợp để đặt lịch tự động"
    body: "An Luật sẽ liên hệ để xác nhận phạm vi tư vấn, người phụ trách và thông tin cần chuẩn bị."
12. MVP-B Payment Copy
payment_copy:
  enabled_only_if: "ENABLE_PAYMENT_BOOKING == true"

  slot_selected:
    title: "Giữ tạm khung giờ này"
    body: "Vui lòng hoàn tất thanh toán trong thời gian hiển thị để chốt lịch tư vấn."

  payment_qr:
    title: "Hoàn tất thanh toán để chốt lịch"
    body: "Quét mã bằng ứng dụng ngân hàng. Nội dung chuyển khoản đã được tạo tự động để An Luật đối soát chính xác."
    privacy_note: "Nội dung thanh toán không chứa chi tiết vụ việc của bạn."

  payment_pending:
    title: "Đang chờ xác nhận thanh toán"
    body: "Hệ thống đang kiểm tra thanh toán từ ngân hàng."

  payment_success:
    title: "An Luật đã ghi nhận thanh toán"
    body: "Hệ thống đang xác nhận lịch tư vấn."

  booking_confirmed:
    title: "Lịch tư vấn đã được xác nhận"
    body: "An Luật sẽ gửi thông tin buổi gặp và phiếu chuẩn bị."

  payment_expired:
    title: "Mã thanh toán đã hết hạn"
    body: "Khung giờ này không còn được giữ. Vui lòng chọn lại khung giờ phù hợp."

  manual_resolution_required:
    title: "Cần xác nhận lại khung giờ"
    body: "Thanh toán đã được ghi nhận nhưng khung giờ cần kiểm tra lại. Thư ký An Luật sẽ liên hệ để hỗ trợ."
13. Machine-Readable Summary
{
  "document_id": "anluat_content_copy_decision_tree_spec",
  "version": "1.0",
  "mvp_a_default": true,
  "mvp_b_payment_copy_gated": true,
  "intake_doors": [
    "family_assets_inheritance",
    "labor_hr",
    "business_operations",
    "disputes_debt_litigation",
    "legal_health_training"
  ],
  "zero_typing_steps": [
    "legal_area",
    "current_stage",
    "urgency",
    "preferred_lawyer",
    "contact_method",
    "optional_context"
  ],
  "must_not_include": [
    "legal outcome guarantees",
    "PII in analytics",
    "case details in payment copy",
    "raw case echo in Agent2UI"
  ],
  "primary_conversion_asset": "one_hour_with_nhu"
}

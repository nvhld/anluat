---
document_id: anluat_web_new_product_ux_spec
version: 1.0
status: draft
language: vi-VN
project: Website mới An Luật
primary_brand: An Luật
primary_conversion_asset: 1 GIỜ GẶP NHƯ
last_updated: 2026-06-01
audience:
  - founder
  - product_owner
  - dandatto_studio
  - frontend_developer
  - backend_developer
  - content_team
  - automation_agent
machine_readable: true
---

# Product / UX Specification: Website mới An Luật

## 0. Mục đích tài liệu

Tài liệu này chuyển hóa định hướng chiến lược website mới của An Luật thành một bản đặc tả có thể dùng cho đội thiết kế, đội phát triển, đội nội dung và các tác nhân tự động hóa.

Website mới không được xây như một brochure doanh nghiệp hoặc danh mục dịch vụ pháp lý truyền thống. Website mới phải vận hành như một hệ thống tiếp nhận và chẩn đoán sơ bộ vấn đề pháp lý, giúp khách hàng tự nhận diện tình trạng của mình, gửi thông tin đúng luồng và được An Luật gọi lại để xác nhận hướng xử lý.

---

## 1. North Star

```yaml
north_star: >
  Website An Luật giúp khách hàng nhìn rõ vấn đề pháp lý của mình trong vài phút,
  rồi kết nối họ với đúng luật sư, đúng quy trình và đúng mức độ khẩn cấp.
```

## 2. Định vị trải nghiệm

```yaml
experience_model: legal_triage_system
concept_name: Phòng khám pháp lý An Luật
concept_description: >
  Người dùng không cần biết tên dịch vụ pháp lý. Người dùng chỉ cần mô tả triệu chứng,
  bối cảnh và mức độ khẩn cấp. Website phân luồng, gợi ý hướng tiếp nhận phù hợp,
  sau đó thu lead để thư ký An Luật gọi lại.
```

Website mới cần trả lời 4 câu hỏi trong vòng vài giây đầu tiên:

1. Tôi đang gặp vấn đề gì?
2. An Luật có xử lý được vấn đề đó không?
3. Tôi nên bắt đầu từ đâu?
4. Tôi gửi thông tin xong thì chuyện gì xảy ra tiếp theo?

---

## 3. Nguyên tắc thiết kế

```yaml
design_principles:
  - id: user_first_not_service_first
    name: Người dùng trước, dịch vụ sau
    description: >
      Không ép người dùng chọn danh mục pháp lý chuyên môn. Hỏi họ đang rối chuyện gì.

  - id: triage_before_booking
    name: Lọc vụ việc trước khi xếp lịch
    description: >
      Vì giá tư vấn ẩn và phụ thuộc vụ việc, website phải thu thông tin sơ bộ trước.

  - id: human_trust_plus_corporate_credibility
    name: Chất người của Luật sư Như + uy tín tổ chức An Luật
    description: >
      Không làm website thuần personal brand. Không làm website thuần công ty luật lạnh lẽo.

  - id: plain_language
    name: Nói tiếng người trước, nói tiếng luật sau
    description: >
      Dùng cách diễn đạt đời thường để dẫn vào thuật ngữ pháp lý.

  - id: lead_quality_over_lead_quantity
    name: Lead chất lượng hơn lead số lượng
    description: >
      Form phải phân loại đủ tốt để thư ký không bị ngập trong lead rác.

  - id: safety_for_sensitive_users
    name: An toàn cho nhóm nhạy cảm
    description: >
      Nhóm hôn nhân, gia đình, bạo lực, kiểm soát cần trải nghiệm riêng tư và có nút thoát nhanh.
```

---

## 4. Chiến lược thương hiệu

### 4.1 Hai lớp thương hiệu

```yaml
brand_layers:
  - id: an_luat_institution
    label: An Luật
    role: Nền tảng uy tín tổ chức
    target_audience:
      - doanh nghiệp
      - đối tác
      - báo chí
      - trường đại học
      - hiệp hội doanh nghiệp
    tone:
      - chuyên nghiệp
      - rõ ràng
      - vững chắc
      - bảo mật

  - id: lawyer_quynh_nhu
    label: Luật sư Đinh Thị Quỳnh Như
    role: Gương mặt niềm tin và chuyển đổi
    target_audience:
      - khách cá nhân
      - người theo dõi mạng xã hội
      - người cần định hướng nhanh
      - khách hàng hôn nhân gia đình
    tone:
      - gần gũi
      - ấm áp
      - sắc sảo
      - nhân văn
```

### 4.2 Sản phẩm chuyển đổi chính

```yaml
primary_conversion_product:
  id: one_hour_with_nhu
  public_name: 1 GIỜ GẶP NHƯ
  formal_name: 1 Giờ Gặp Luật Sư
  price_visibility: hidden
  online_payment: false
  payment_note: Không thanh toán online ở giai đoạn đầu
  booking_model: soft_booking
  flow: form_submission_then_secretary_callback
  promise: >
    Một giờ để khách hàng kể đúng chuyện, hiểu đúng vấn đề và biết bước tiếp theo nên làm gì.
```

---

## 5. Mô hình tiếp nhận chính: 5 cửa pháp lý

Homepage không chỉ có 3 nhóm khách. Website mới cần 5 cửa tiếp nhận để phản ánh đúng năng lực thật của An Luật.

```yaml
legal_intake_doors:
  - id: family_assets_inheritance
    label: Gia đình, tài sản, thừa kế
    user_sentence: Tôi đang rối chuyện gia đình, tài sản hoặc thừa kế
    includes:
      - ly hôn
      - quyền nuôi con
      - tài sản chung riêng
      - thừa kế
      - tranh chấp dân sự
      - truy nhận cha cho con
    primary_cta: Gửi thông tin chuyện gia đình

  - id: labor_hr
    label: Lao động & nhân sự
    user_sentence: Tôi đang gặp vấn đề về nghỉ việc, sa thải, nhân sự
    includes:
      - chấm dứt hợp đồng lao động
      - sa thải
      - kỷ luật lao động
      - nợ lương
      - bảo hiểm xã hội
      - tái cấu trúc nhân sự
      - nội quy lao động
    primary_cta: Gửi thông tin vấn đề lao động

  - id: business_operations
    label: Doanh nghiệp đang vận hành
    user_sentence: Doanh nghiệp tôi cần giảm rủi ro pháp lý
    includes:
      - tư vấn pháp lý thường xuyên
      - hợp đồng
      - góp vốn
      - cổ đông
      - sở hữu trí tuệ
      - mua bán sáp nhập
      - quy chế nội bộ
    primary_cta: Gửi yêu cầu tư vấn doanh nghiệp

  - id: disputes_debt_litigation
    label: Tranh chấp, kiện tụng, thu hồi nợ
    user_sentence: Tôi cần xử lý tranh chấp hoặc thu hồi nợ
    includes:
      - thương lượng nợ
      - thu hồi nợ
      - tranh chấp kinh doanh thương mại
      - tranh chấp lao động
      - tranh chấp cổ đông
      - tranh tụng tại tòa
      - thi hành án
    primary_cta: Gửi thông tin tranh chấp

  - id: legal_health_training
    label: Kiểm tra sức khỏe pháp lý doanh nghiệp
    user_sentence: Doanh nghiệp tôi cần kiểm tra sức khỏe pháp lý
    includes:
      - rà soát pháp lý nội bộ
      - rà soát quan hệ lao động
      - rà soát hợp đồng giao dịch
      - đào tạo pháp lý nội bộ
      - xây dựng quy chế
      - tuân thủ pháp luật
    primary_cta: Đăng ký chẩn đoán pháp lý doanh nghiệp
```

---

## 6. Bộ sản phẩm đóng gói

Thay vì liệt kê hàng chục dịch vụ ngang hàng, website cần đóng gói dịch vụ thành các sản phẩm dễ hiểu.

```yaml
service_packages:
  - id: one_hour_with_nhu
    name: 1 GIỜ GẶP NHƯ
    type: consultation
    audience:
      - cá nhân
      - chủ doanh nghiệp
      - founder
      - HR
    description: >
      Buổi tư vấn riêng để xác định vấn đề pháp lý chính, rủi ro, tài liệu cần chuẩn bị và bước tiếp theo.
    price_visibility: hidden
    cta: Gửi thông tin để đăng ký 1 GIỜ GẶP NHƯ

  - id: business_legal_health_check
    name: Khám sức khỏe pháp lý doanh nghiệp
    type: diagnostic
    audience:
      - CEO
      - founder
      - HRD
      - legal_manager
    description: >
      Rà soát các vùng rủi ro pháp lý trong doanh nghiệp: nội bộ, lao động nhân sự, hợp đồng và giao dịch đối tác.
    cta: Đăng ký chẩn đoán pháp lý doanh nghiệp

  - id: contract_without_future_conflict
    name: Hợp đồng không cãi nhau về sau
    type: contract_review_drafting
    audience:
      - doanh nghiệp
      - founder
      - bộ phận kinh doanh
      - bộ phận pháp chế
    description: >
      Soạn thảo hoặc rà soát hợp đồng dựa trên giao dịch thật, ngành nghề thật và cách hiểu thống nhất giữa các bên.
    key_message: Hợp đồng tốt không phải là hợp đồng dài. Hợp đồng tốt là hợp đồng các bên hiểu giống nhau trước khi ký.
    cta: Gửi hợp đồng cần rà soát

  - id: hr_discipline_restructure
    name: Kỷ luật & tái cấu trúc nhân sự đúng luật
    type: labor_hr_advisory
    audience:
      - CEO
      - HR
      - doanh nghiệp sản xuất
      - doanh nghiệp trong khu công nghiệp
    description: >
      Hỗ trợ doanh nghiệp xử lý kỷ luật, chấm dứt hợp đồng, tái cấu trúc nhân sự và xây dựng quy trình lao động phù hợp pháp luật.
    cta: Tôi cần xử lý vấn đề nhân sự

  - id: legal_debt_recovery
    name: Thu hồi nợ đúng luật, giữ đường lui kinh doanh
    type: debt_recovery_dispute
    audience:
      - doanh nghiệp
      - cá nhân
      - chủ nợ
    description: >
      Đại diện thương lượng, khởi kiện và hỗ trợ thi hành án khi cần, nhằm thu hồi nợ đúng luật và hạn chế biện pháp rủi ro.
    cta: Gửi thông tin khoản nợ

  - id: internal_legal_training
    name: Đào tạo pháp lý cho đội ngũ không chuyên luật
    type: training
    audience:
      - doanh nghiệp
      - phòng nhân sự
      - phòng kinh doanh
      - phòng vận hành
      - hiệp hội
    description: >
      Chương trình đào tạo pháp lý được thiết kế theo phòng ban, cấp bậc, vị trí và tình huống thực tế của doanh nghiệp.
    cta: Đăng ký chương trình đào tạo
```

---

## 7. Sitemap đề xuất

```yaml
sitemap:
  - id: home
    path: /
    title: Trang chủ
    purpose: Phân luồng vấn đề, xây niềm tin, dẫn vào form hoặc 1 GIỜ GẶP NHƯ

  - id: one_hour_with_nhu
    path: /1-gio-gap-nhu
    title: 1 GIỜ GẶP NHƯ
    purpose: Landing page chuyển đổi chính

  - id: personal
    path: /ca-nhan
    title: Cá nhân
    children:
      - path: /ca-nhan/gia-dinh-ly-hon
        title: Gia đình & ly hôn
      - path: /ca-nhan/tai-san-thua-ke
        title: Tài sản & thừa kế
      - path: /ca-nhan/tranh-chap-dan-su
        title: Tranh chấp dân sự
      - path: /ca-nhan/thu-hoi-no-ca-nhan
        title: Thu hồi nợ cá nhân

  - id: labor_hr
    path: /lao-dong-nhan-su
    title: Lao động & Nhân sự
    children:
      - path: /lao-dong-nhan-su/nguoi-lao-dong
        title: Dành cho người lao động
      - path: /lao-dong-nhan-su/doanh-nghiep-hr
        title: Dành cho doanh nghiệp / HR

  - id: business
    path: /doanh-nghiep
    title: Doanh nghiệp
    children:
      - path: /doanh-nghiep/tu-van-thuong-xuyen
        title: Tư vấn thường xuyên
      - path: /doanh-nghiep/hop-dong
        title: Hợp đồng
      - path: /doanh-nghiep/gop-von-co-dong
        title: Góp vốn / cổ đông
      - path: /doanh-nghiep/ra-soat-phap-ly-noi-bo
        title: Rà soát pháp lý nội bộ
      - path: /doanh-nghiep/quy-che-noi-bo
        title: Quy chế nội bộ
      - path: /doanh-nghiep/so-huu-tri-tue
        title: Sở hữu trí tuệ
      - path: /doanh-nghiep/ma-dau-tu
        title: M&A / đầu tư

  - id: disputes_debt
    path: /tranh-tung-thu-hoi-no
    title: Tranh tụng & Thu hồi nợ
    children:
      - path: /tranh-tung-thu-hoi-no/tranh-chap-kinh-doanh
        title: Tranh chấp kinh doanh
      - path: /tranh-tung-thu-hoi-no/tranh-chap-lao-dong
        title: Tranh chấp lao động
      - path: /tranh-tung-thu-hoi-no/tranh-chap-co-dong
        title: Tranh chấp cổ đông
      - path: /tranh-tung-thu-hoi-no/thu-hoi-no-thuong-luong
        title: Thu hồi nợ / thương lượng

  - id: training
    path: /dao-tao
    title: Đào tạo
    children:
      - path: /dao-tao/phap-ly-noi-bo
        title: Đào tạo pháp lý nội bộ
      - path: /dao-tao/workshop-hoi-thao
        title: Workshop / hội thảo
      - path: /dao-tao/hiep-hoi-khu-cong-nghiep
        title: Chương trình cho hiệp hội / khu công nghiệp

  - id: lawyer_quynh_nhu
    path: /luat-su-dinh-thi-quynh-nhu
    title: Luật sư Đinh Thị Quỳnh Như
    purpose: Personal brand, media kit, trust-building

  - id: about
    path: /ve-an-luat
    title: Về An Luật
    purpose: Corporate credibility, profile, clients, offices

  - id: insights
    path: /goc-chia-se
    title: Góc chia sẻ
    purpose: Video, FAQ, legal insights, SEO

  - id: contact
    path: /lien-he
    title: Liên hệ
    purpose: Hotline, office, map, quick form
```

---

## 8. Navigation

Menu chính phải gọn. Không hiển thị toàn bộ sitemap cấp 2 trong menu đầu trang.

```yaml
main_navigation:
  - label: 1 GIỜ GẶP NHƯ
    path: /1-gio-gap-nhu
    priority: high
  - label: Cá nhân
    path: /ca-nhan
  - label: Lao động & Nhân sự
    path: /lao-dong-nhan-su
  - label: Doanh nghiệp
    path: /doanh-nghiep
  - label: Tranh tụng & Thu hồi nợ
    path: /tranh-tung-thu-hoi-no
  - label: Luật sư Quỳnh Như
    path: /luat-su-dinh-thi-quynh-nhu
  - label: Về An Luật
    path: /ve-an-luat

primary_nav_cta:
  label: Gửi thông tin vụ việc
  path: /1-gio-gap-nhu#intake-form
```

---

## 9. Homepage specification

```yaml
page_home:
  path: /
  page_goal: Phân luồng vấn đề và dẫn người dùng vào đúng form / landing page
  primary_cta: Gửi thông tin vụ việc
  secondary_cta: Tìm hiểu 1 GIỜ GẶP NHƯ
```

### 9.1 Hero

```yaml
home_hero:
  headline: Bạn đang gặp vấn đề pháp lý nào? Kể An Luật nghe từ chỗ bạn đang rối nhất.
  subheadline: >
    Từ một buổi 1 GIỜ GẶP NHƯ đến tư vấn doanh nghiệp thường xuyên,
    An Luật giúp bạn xác định đúng vấn đề, đúng hướng xử lý và đúng người đồng hành.
  primary_cta:
    label: Gửi thông tin vụ việc
    action: scroll_to_intake_or_open_modal
  secondary_cta:
    label: Tìm hiểu 1 GIỜ GẶP NHƯ
    path: /1-gio-gap-nhu
```

### 9.2 Five-door intake cards

```yaml
home_intake_cards:
  component_id: intake_door_grid
  layout:
    desktop: 5_card_grid_or_3_2_grid
    mobile: stacked_cards
  cards:
    - ref: family_assets_inheritance
    - ref: labor_hr
    - ref: business_operations
    - ref: disputes_debt_litigation
    - ref: legal_health_training
```

### 9.3 Brand proof block

```yaml
home_brand_proof:
  headline: Từ năm 2006, An Luật chọn cách làm vừa đủ sâu.
  body: >
    An Luật không theo đuổi hình ảnh một hãng luật thật lớn để gây choáng.
    Điều An Luật theo đuổi là sự cởi mở khi tiếp nhận, am hiểu khi tư vấn,
    nỗ lực khi xử lý và đồng hành sau mỗi vụ việc.
  proof_points:
    - Từ năm 2006
    - Có chi nhánh Bà Rịa - Vũng Tàu từ năm 2020
    - Kinh nghiệm với cá nhân và doanh nghiệp
    - Mạnh về lao động, hợp đồng, tranh tụng, thu hồi nợ, đào tạo pháp lý
```

### 9.4 1 GIỜ GẶP NHƯ block

```yaml
home_one_hour_block:
  headline: Một giờ để nhìn rõ vấn đề và biết bước tiếp theo.
  body: >
    1 GIỜ GẶP NHƯ là buổi tư vấn riêng với Luật sư Đinh Thị Quỳnh Như,
    phù hợp khi bạn đang rối và cần được nghe đúng trọng tâm.
  note: Phí tư vấn được báo sau khi An Luật xem sơ bộ nội dung vụ việc.
  cta:
    label: Đăng ký 1 GIỜ GẶP NHƯ
    path: /1-gio-gap-nhu
```

### 9.5 Business products block

```yaml
home_business_products:
  headline: Dành cho doanh nghiệp
  products:
    - ref: business_legal_health_check
    - ref: internal_legal_training
    - ref: contract_without_future_conflict
    - ref: hr_discipline_restructure
```

### 9.6 Personal products block

```yaml
home_personal_products:
  headline: Dành cho cá nhân
  products:
    - name: Gia đình, con cái, tài sản
      path: /ca-nhan/gia-dinh-ly-hon
    - name: Tài sản & thừa kế
      path: /ca-nhan/tai-san-thua-ke
    - name: Tranh chấp dân sự / thu hồi nợ
      path: /tranh-tung-thu-hoi-no
```

---

## 10. Landing page: 1 GIỜ GẶP NHƯ

```yaml
page_one_hour_with_nhu:
  path: /1-gio-gap-nhu
  page_goal: Thu lead chất lượng cho buổi tư vấn riêng
  price_visibility: hidden
  payment_enabled: false
  booking_type: secretary_callback
```

### 10.1 Hero

```yaml
one_hour_hero:
  headline: 1 GIỜ GẶP NHƯ
  subheadline: >
    Một buổi tư vấn riêng để bạn kể đúng chuyện, hiểu đúng vấn đề
    và biết mình nên làm gì tiếp theo.
  primary_cta:
    label: Gửi thông tin vụ việc
    action: scroll_to_form
  helper_text: >
    An Luật sẽ xem sơ bộ và thư ký sẽ gọi lại để xác nhận lịch,
    phí tư vấn và hồ sơ cần chuẩn bị.
```

### 10.2 Suitability section

```yaml
one_hour_suitable_for:
  headline: Buổi tư vấn này phù hợp khi...
  cards:
    - title: Bạn đang rối chuyện gia đình
      body: Ly hôn, con cái, tài sản, thừa kế.
    - title: Bạn đang gặp vấn đề lao động
      body: Nghỉ việc, sa thải, nợ lương, tranh chấp hợp đồng.
    - title: Bạn cần quyết định pháp lý cho doanh nghiệp
      body: Góp vốn, hợp đồng, nhân sự, dữ liệu, tranh chấp.
```

### 10.3 Outcome section

```yaml
one_hour_outcomes:
  headline: Sau buổi tư vấn, bạn sẽ rõ hơn về...
  outcomes:
    - Vấn đề pháp lý chính của mình
    - Hồ sơ và tài liệu cần chuẩn bị
    - Các hướng xử lý khả thi
    - Rủi ro của từng hướng
    - Bước tiếp theo nếu muốn An Luật đồng hành
  disclaimer: Không cam kết kết quả ngoài tầm kiểm soát pháp lý.
```

### 10.4 Process section

```yaml
one_hour_process:
  steps:
    - step: 1
      title: Gửi thông tin vụ việc
      description: Bạn tóm tắt ngắn gọn tình huống.
    - step: 2
      title: An Luật phân loại
      description: Đội ngũ xem sơ bộ để xác định nhóm vấn đề.
    - step: 3
      title: Thư ký gọi lại
      description: Xác nhận lịch, phí tư vấn, hình thức gặp và tài liệu cần chuẩn bị.
    - step: 4
      title: Gặp luật sư
      description: Trao đổi riêng tư, đúng trọng tâm, có định hướng xử lý.
```

---

## 11. Interactive tool: Bản đồ an toàn pháp lý

```yaml
interactive_tool_legal_map:
  id: legal_safety_map
  name: Bản đồ an toàn pháp lý
  placement:
    - homepage
    - floating_cta_optional
    - intake_pages
  purpose: >
    Giúp người dùng tự phân loại vấn đề bằng ngôn ngữ đời thường,
    sau đó gợi ý sản phẩm / luồng tiếp nhận phù hợp.
```

### 11.1 Questions

```yaml
legal_map_questions:
  - id: user_role
    question: Bạn là ai?
    type: single_choice
    options:
      - id: individual
        label: Cá nhân
      - id: employee
        label: Người lao động
      - id: business_owner
        label: Chủ doanh nghiệp / Founder
      - id: hr
        label: HR / Quản lý nhân sự
      - id: accountant
        label: Kế toán / Tài chính
      - id: other
        label: Khác

  - id: main_worry
    question: Bạn đang lo nhất điều gì?
    type: single_choice
    options:
      - id: family
        label: Gia đình / con cái / tài sản
      - id: contract
        label: Hợp đồng
      - id: labor
        label: Nghỉ việc / sa thải / nhân sự
      - id: debt
        label: Nợ / thu hồi tiền
      - id: shareholder
        label: Góp vốn / cổ đông
      - id: litigation
        label: Kiện tụng / tranh chấp
      - id: data
        label: Dữ liệu / tuân thủ
      - id: internal_risk
        label: Rủi ro pháp lý nội bộ

  - id: current_stage
    question: Việc này đang ở giai đoạn nào?
    type: single_choice
    options:
      - id: new_issue
        label: Mới phát sinh
      - id: has_documents
        label: Đã có giấy tờ / hợp đồng
      - id: negotiating
        label: Đang thương lượng
      - id: court
        label: Đã ra tòa / chuẩn bị ra tòa
      - id: prevention
        label: Cần phòng ngừa trước
```

### 11.2 Recommendation logic

```yaml
legal_map_recommendations:
  - condition:
      main_worry: family
    recommend:
      - one_hour_with_nhu
      - family_assets_inheritance

  - condition:
      main_worry: labor
      user_role: employee
    recommend:
      - labor_hr_employee_flow
      - one_hour_with_nhu

  - condition:
      main_worry: labor
      user_role_any:
        - business_owner
        - hr
    recommend:
      - hr_discipline_restructure
      - business_legal_health_check

  - condition:
      main_worry: contract
    recommend:
      - contract_without_future_conflict
      - business_operations

  - condition:
      main_worry: debt
    recommend:
      - legal_debt_recovery
      - disputes_debt_litigation

  - condition:
      main_worry: internal_risk
    recommend:
      - business_legal_health_check
      - internal_legal_training

  - condition:
      current_stage: court
    recommend:
      - disputes_debt_litigation
      - one_hour_with_nhu
```

---

## 12. Interactive tool: Legal Health Score

```yaml
interactive_tool_legal_health_score:
  id: legal_health_score
  name: Legal Health Score
  vietnamese_name: Điểm an toàn pháp lý doanh nghiệp
  target_audience:
    - CEO
    - founder
    - HRD
    - legal_manager
    - business_owner
  placement:
    - /doanh-nghiep
    - /doanh-nghiep/ra-soat-phap-ly-noi-bo
    - homepage_business_block
  purpose: >
    Tạo lead B2B bằng cách giúp doanh nghiệp tự đánh giá rủi ro pháp lý sơ bộ.
```

### 12.1 Questions

```yaml
legal_health_score_questions:
  - id: standard_contracts
    question: Doanh nghiệp đã có bộ hợp đồng chuẩn chưa?
    type: single_choice
    options:
      - yes
      - no
      - not_sure

  - id: labor_rules_updated
    question: Nội quy lao động / quy trình nhân sự đã được cập nhật chưa?
    type: single_choice
    options:
      - yes
      - no
      - not_sure

  - id: discipline_termination_process
    question: Doanh nghiệp có quy trình xử lý kỷ luật hoặc chấm dứt hợp đồng lao động không?
    type: single_choice
    options:
      - yes
      - no
      - not_sure

  - id: contract_signing_authority
    question: Có phân quyền ký hợp đồng và phê duyệt giao dịch không?
    type: single_choice
    options:
      - yes
      - no
      - not_sure

  - id: data_confidentiality
    question: Có quy chế bảo mật dữ liệu khách hàng, nhân sự hoặc đối tác không?
    type: single_choice
    options:
      - yes
      - no
      - not_sure

  - id: overdue_debt
    question: Doanh nghiệp có khoản nợ quá hạn hoặc tranh chấp thanh toán chưa xử lý không?
    type: single_choice
    options:
      - yes
      - no
      - not_sure

  - id: intellectual_property
    question: Có tài sản trí tuệ, thương hiệu, nhãn hiệu hoặc nội dung cần đăng ký/bảo vệ không?
    type: single_choice
    options:
      - yes
      - no
      - not_sure

  - id: last_legal_review
    question: Lần gần nhất doanh nghiệp rà soát pháp lý là khi nào?
    type: single_choice
    options:
      - under_6_months
      - six_to_twelve_months
      - over_12_months
      - never
      - not_sure
```

### 12.2 Scoring

```yaml
legal_health_score_scoring:
  scoring_method: additive
  max_score: 100
  rules:
    yes_positive: 12
    no_negative: 0
    not_sure: 4
    special:
      last_legal_review:
        under_6_months: 16
        six_to_twelve_months: 10
        over_12_months: 4
        never: 0
        not_sure: 2
  bands:
    - range: 0-39
      label: Rủi ro cao
      message: Doanh nghiệp nên rà soát pháp lý sớm để tránh xử lý sự cố khi đã muộn.
      cta: Đăng ký Khám sức khỏe pháp lý doanh nghiệp
    - range: 40-69
      label: Cần củng cố
      message: Doanh nghiệp đã có một số nền tảng, nhưng còn vùng rủi ro cần kiểm tra.
      cta: Gửi thông tin để An Luật tư vấn
    - range: 70-100
      label: Tương đối an toàn
      message: Doanh nghiệp có nền tảng tốt, nên duy trì rà soát định kỳ để kiểm soát rủi ro.
      cta: Đặt lịch rà soát định kỳ
```

---

## 13. Intake form specification

Form phải ngắn, chia bước, có logic rẽ nhánh. Không hiển thị một biểu mẫu dài ngay từ đầu.

```yaml
intake_form:
  id: anluat_main_intake
  name: Form tiếp nhận vụ việc An Luật
  placement:
    - /1-gio-gap-nhu
    - homepage_modal
    - relevant_landing_pages
  submission_destination:
    - email_secretary
    - crm_or_spreadsheet
    - optional_zalo_notification
  payment_required: false
  price_visible: false
  after_submit_action: show_preparation_sheet
```

### 13.1 Base fields

```yaml
intake_form_fields:
  - id: legal_area
    label: Bạn đang cần hỗ trợ về việc gì?
    type: single_choice
    required: true
    options:
      - family
      - labor
      - business
      - dispute_debt
      - legal_health_training
      - other

  - id: urgency
    label: Mức độ khẩn cấp?
    type: single_choice
    required: true
    options:
      - within_24h
      - this_week
      - flexible

  - id: current_stage
    label: Tình huống hiện tại đang ở giai đoạn nào?
    type: single_choice
    required: true
    options:
      - new_issue
      - has_documents
      - negotiating
      - court_or_authority
      - need_prevention
      - not_sure

  - id: summary
    label: Tóm tắt vụ việc trong 3–5 dòng
    type: textarea
    required: true
    max_length: 1200

  - id: preferred_lawyer
    label: Bạn muốn gặp ai?
    type: single_choice
    required: true
    options:
      - lawyer_nhu
      - suitable_lawyer
      - not_sure

  - id: consultation_mode
    label: Bạn muốn tư vấn theo hình thức nào?
    type: single_choice
    required: true
    options:
      - in_person
      - online
      - phone_first
      - not_sure

  - id: full_name
    label: Họ tên
    type: text
    required: true

  - id: phone
    label: Số điện thoại
    type: tel
    required: true

  - id: contact_channel
    label: Zalo hoặc email
    type: text
    required: false

  - id: preferred_callback_time
    label: Khung giờ tiện nghe máy
    type: text
    required: false

  - id: document_upload
    label: Tài liệu liên quan nếu có
    type: file
    required: false
    helper_text: Chỉ gửi tài liệu thật sự cần thiết ở bước đầu. Không gửi tài liệu quá nhạy cảm nếu chưa được hướng dẫn.
```

### 13.2 Branch fields: Family

```yaml
branch_family:
  trigger:
    legal_area: family
  fields:
    - id: family_primary_concern
      label: Bạn đang quan tâm nhất đến điều gì?
      type: multi_choice
      options:
        - divorce
        - child_custody
        - shared_assets
        - inheritance
        - domestic_violence_or_control
        - other
  safety_notice_condition:
    field: family_primary_concern
    contains: domestic_violence_or_control
  safety_notice: >
    Nếu bạn đang không an toàn, hãy ưu tiên rời khỏi tình huống nguy hiểm và liên hệ người thân/cơ quan chức năng.
    Nút Thoát nhanh có thể giúp ẩn màn hình này, nhưng không thay thế các biện pháp bảo vệ an toàn.
```

### 13.3 Branch fields: Labor

```yaml
branch_labor:
  trigger:
    legal_area: labor
  fields:
    - id: labor_user_role
      label: Bạn là ai?
      type: single_choice
      options:
        - employee
        - employer_hr
    - id: labor_employee_issue
      label: Bạn đang gặp vấn đề gì?
      type: multi_choice
      show_if:
        labor_user_role: employee
      options:
        - termination
        - unpaid_salary
        - discipline_dismissal
        - social_insurance
        - contract_dispute
        - other
    - id: labor_company_issue
      label: Doanh nghiệp cần hỗ trợ gì?
      type: multi_choice
      show_if:
        labor_user_role: employer_hr
      options:
        - discipline_process
        - termination_process
        - restructuring
        - internal_labor_rules
        - legal_training
        - other
```

### 13.4 Branch fields: Business

```yaml
branch_business:
  trigger:
    legal_area: business
  fields:
    - id: company_size
      label: Quy mô doanh nghiệp
      type: single_choice
      options:
        - under_10
        - 10_50
        - 50_200
        - over_200
        - not_disclosed
    - id: business_issue
      label: Vấn đề chính của doanh nghiệp
      type: multi_choice
      options:
        - contract
        - shareholder_capital
        - labor_hr
        - data_compliance
        - debt_dispute
        - internal_legal_review
        - intellectual_property
        - ma_investment
        - other
```

### 13.5 Branch fields: Dispute / debt

```yaml
branch_dispute_debt:
  trigger:
    legal_area: dispute_debt
  fields:
    - id: dispute_type
      label: Loại tranh chấp
      type: single_choice
      options:
        - debt_collection
        - business_dispute
        - labor_dispute
        - shareholder_dispute
        - civil_dispute
        - court_case
        - other
    - id: dispute_stage
      label: Giai đoạn xử lý
      type: single_choice
      options:
        - not_contacted_other_party
        - negotiating
        - demand_letter_sent
        - lawsuit_preparing
        - lawsuit_filed
        - judgment_enforcement
        - not_sure
```

---

## 14. Post-submit experience: Phiếu chuẩn bị 1 giờ gặp Như

Sau khi gửi form, không chỉ hiện “Cảm ơn”. Website cần sinh một phiếu chuẩn bị dựa theo loại vụ việc.

```yaml
post_submit_preparation_sheet:
  id: preparation_sheet
  name: Phiếu chuẩn bị 1 giờ gặp Như
  purpose: >
    Giúp khách hàng biết cần chuẩn bị gì trước khi thư ký gọi lại hoặc trước buổi tư vấn.
  display_after_form_submit: true
  send_to_email_if_available: true
```

### 14.1 Family checklist

```yaml
preparation_family:
  title: Phiếu chuẩn bị cho vụ việc gia đình / tài sản
  checklist:
    - Giấy đăng ký kết hôn nếu có
    - Giấy khai sinh của con nếu có tranh chấp nuôi con
    - Giấy tờ về tài sản chung / riêng
    - Thông tin thu nhập, điều kiện chăm sóc con
    - Tin nhắn, email, tài liệu liên quan nếu có
    - Timeline ngắn các sự kiện quan trọng
```

### 14.2 Labor checklist

```yaml
preparation_labor:
  title: Phiếu chuẩn bị cho vụ việc lao động
  checklist:
    - Hợp đồng lao động
    - Quyết định nghỉ việc / kỷ luật / sa thải nếu có
    - Bảng lương hoặc sao kê lương
    - Email, tin nhắn, biên bản làm việc liên quan
    - Thông tin bảo hiểm xã hội nếu có
    - Timeline ngắn các sự kiện quan trọng
```

### 14.3 Business checklist

```yaml
preparation_business:
  title: Phiếu chuẩn bị cho vụ việc doanh nghiệp
  checklist:
    - Hợp đồng, văn bản, email liên quan
    - Giấy chứng nhận đăng ký doanh nghiệp nếu cần
    - Điều lệ, quy chế, nội quy liên quan nếu có
    - Timeline sự việc
    - Mục tiêu mong muốn sau buổi tư vấn
    - Các bên liên quan trong vụ việc
```

### 14.4 Debt / dispute checklist

```yaml
preparation_dispute_debt:
  title: Phiếu chuẩn bị cho tranh chấp / thu hồi nợ
  checklist:
    - Hợp đồng hoặc thỏa thuận gốc
    - Chứng từ thanh toán / công nợ
    - Biên bản đối chiếu công nợ nếu có
    - Tin nhắn, email, thư yêu cầu thanh toán
    - Thông tin bên nợ / bên tranh chấp
    - Tình trạng thương lượng hoặc khởi kiện hiện tại
```

---

## 15. Plain-language SEO module

Website cần tạo module nội dung chuyển đổi từ ngôn ngữ đời thường sang vấn đề pháp lý.

```yaml
plain_language_legal_terms:
  module_name: Bạn đang gọi vấn đề này bằng cách nào?
  purpose: SEO + user education + conversion
  mappings:
    - user_phrase: Hùn mà không hạp
      legal_category: Tranh chấp góp vốn / cổ đông / thành viên công ty
      suggested_path: /doanh-nghiep/gop-von-co-dong

    - user_phrase: Bị công ty cho nghỉ ngang
      legal_category: Chấm dứt hợp đồng lao động / sa thải / kỷ luật lao động
      suggested_path: /lao-dong-nhan-su/nguoi-lao-dong

    - user_phrase: Người ta nợ tiền không trả
      legal_category: Thu hồi nợ / thương lượng / khởi kiện
      suggested_path: /tranh-tung-thu-hoi-no/thu-hoi-no-thuong-luong

    - user_phrase: Sợ ký hợp đồng bị gài
      legal_category: Rà soát hợp đồng
      suggested_path: /doanh-nghiep/hop-dong

    - user_phrase: Ly hôn nhưng sợ mất con
      legal_category: Quyền nuôi con / hôn nhân gia đình
      suggested_path: /ca-nhan/gia-dinh-ly-hon

    - user_phrase: Công ty càng lớn càng rối
      legal_category: Rà soát pháp lý nội bộ / quy chế / nhân sự
      suggested_path: /doanh-nghiep/ra-soat-phap-ly-noi-bo
```

---

## 16. Safety UX

```yaml
safety_ux:
  quick_exit:
    enabled_on:
      - /ca-nhan/gia-dinh-ly-hon
      - /ca-nhan/tai-san-thua-ke
      - /1-gio-gap-nhu when legal_area == family
    button_label: Thoát nhanh
    helper_text: >
      Tính năng này giúp ẩn nhanh nội dung đang xem, nhưng không thay thế việc xóa lịch sử trình duyệt hoặc dùng thiết bị an toàn.
    behavior:
      - replace_page_content_immediately
      - change_document_title
      - redirect_or_replace_history_to_neutral_page
    compliance_note: >
      Không hứa xóa sạch mọi dấu vết. Tránh claim tuyệt đối về bảo mật.
```

---

## 17. Voice & copy rules

```yaml
voice_rules:
  global:
    - Rõ ràng
    - Ấm nhưng không sến
    - Chuyên nghiệp nhưng không lạnh
    - Dùng ngôn ngữ đời thường trước thuật ngữ pháp lý

  lawyer_nhu_pages:
    allowed:
      - Như
      - gần gũi
      - kể chuyện
      - chất Nam Bộ nhẹ
    avoid:
      - lạm dụng khẩu ngữ
      - biến trang luật thành blog cá nhân quá đà

  corporate_pages:
    allowed:
      - An Luật
      - Luật sư Quỳnh Như
      - quy trình
      - năng lực
      - bảo mật
    avoid:
      - quá nhiều câu cảm xúc
      - đùa quá mức
```

### 17.1 CTA library

```yaml
cta_library:
  preferred:
    - Gửi thông tin vụ việc
    - Đăng ký 1 GIỜ GẶP NHƯ
    - Để An Luật gọi lại cho tôi
    - Tôi cần tư vấn chuyện gia đình
    - Tôi cần tư vấn lao động
    - Tôi cần tư vấn doanh nghiệp
    - Đăng ký chẩn đoán pháp lý doanh nghiệp
    - Tải hồ sơ năng lực

  avoid:
    - Liên hệ chúng tôi
    - Xem thêm
    - Gửi
    - Submit
    - Tư vấn ngay!!!
```

---

## 18. Visual direction

```yaml
visual_direction:
  mood: Một phòng khách ấm áp, có nắng, có hoa cúc tana, nhưng vẫn đủ uy tín của một hãng luật.
  avoid_mood: Văn phòng công tố lạnh lẽo, template công ty luật xanh đen, ảnh cán cân công lý quá lạm dụng.
  colors:
    background: trắng ngà / kem nhạt
    trust: xanh rêu đậm hoặc xanh lục trầm
    accent: vàng nắng nhạt
    secondary: nâu đất / be
    warning_soft: đỏ đất
    avoid:
      - đỏ tươi
      - xanh đen quá lạnh
      - xám công nghiệp quá nặng
  typography:
    heading: serif mềm hoặc sans-serif sang
    body: sans-serif dễ đọc
    min_body_size_px: 16
    line_height: 1.6-1.8
  imagery:
    lawyer_nhu: ánh sáng tự nhiên, thân thiện, vẫn có uy
    team: chuyên nghiệp, không pose khoanh tay quá lạnh
    graphics: line art hoa cúc tana, đường cong mềm
```

---

## 19. Analytics & tracking events

```yaml
analytics_events:
  - event: intake_card_clicked
    properties:
      - card_id
      - page_path
      - device_type

  - event: one_hour_cta_clicked
    properties:
      - source_section
      - page_path
      - device_type

  - event: legal_map_started
    properties:
      - page_path

  - event: legal_map_completed
    properties:
      - user_role
      - main_worry
      - current_stage
      - recommendation_ids

  - event: legal_health_score_started
    properties:
      - page_path

  - event: legal_health_score_completed
    properties:
      - score
      - band
      - company_size_optional

  - event: intake_form_started
    properties:
      - entry_point
      - legal_area

  - event: intake_form_step_completed
    properties:
      - form_id
      - step_id

  - event: intake_form_submitted
    properties:
      - legal_area
      - urgency
      - preferred_lawyer
      - consultation_mode
      - source_page

  - event: preparation_sheet_viewed
    properties:
      - legal_area
      - checklist_type

  - event: quick_exit_clicked
    properties:
      - page_path
      - device_type
```

---

## 20. Success metrics

```yaml
success_metrics:
  acquisition:
    - organic_sessions
    - social_referral_sessions
    - direct_sessions

  engagement:
    - intake_card_click_rate
    - legal_map_completion_rate
    - legal_health_score_completion_rate
    - one_hour_page_scroll_depth

  conversion:
    - intake_form_completion_rate
    - one_hour_lead_rate
    - qualified_lead_rate
    - callback_success_rate
    - consultation_booking_rate

  operational:
    - average_time_to_callback
    - percentage_of_leads_with_sufficient_context
    - lead_distribution_by_legal_area
    - secretary_rework_rate
```

---

## 21. Implementation roadmap

```yaml
roadmap:
  phase_1_mvp:
    duration: month_1
    goal: Có lead sạch và phễu 1 GIỜ GẶP NHƯ vận hành được
    scope:
      - Trang chủ mới
      - Landing page 1 GIỜ GẶP NHƯ
      - Form tiếp nhận vụ việc
      - Trang cảm ơn + Phiếu chuẩn bị
      - Email / CRM / spreadsheet notification
      - Hotline / Zalo sticky CTA
      - Quick Exit cho trang gia đình

  phase_2_core_pages:
    duration: month_2
    goal: Hoàn thiện các trụ cột dịch vụ chính
    scope:
      - Cá nhân & Gia đình
      - Lao động & Nhân sự
      - Doanh nghiệp
      - Tranh tụng & Thu hồi nợ
      - Luật sư Quỳnh Như
      - Về An Luật

  phase_3_growth_tools:
    duration: month_3
    goal: Tăng lead B2B và organic traffic
    scope:
      - Bản đồ an toàn pháp lý
      - Legal Health Score
      - Module từ khóa đời thường sang đường pháp lý
      - 9 bài / video FAQ đầu tiên
      - Media kit
      - Hồ sơ năng lực tải về
      - Dashboard tracking cơ bản
```

---

## 22. MVP acceptance criteria

```yaml
mvp_acceptance_criteria:
  - id: home_triage_visible
    requirement: Trang chủ hiển thị 5 cửa tiếp nhận trong màn hình đầu hoặc ngay sau hero.

  - id: one_hour_flow_no_payment
    requirement: Luồng 1 GIỜ GẶP NHƯ không yêu cầu thanh toán online và không hiển thị giá công khai.

  - id: form_branching
    requirement: Form có rẽ nhánh theo ít nhất 4 nhóm: family, labor, business, dispute_debt.

  - id: secretary_callback_copy
    requirement: Sau khi gửi form, người dùng thấy rõ thư ký sẽ gọi lại để xác nhận lịch, phí và hồ sơ.

  - id: preparation_sheet
    requirement: Sau submit, hệ thống hiển thị checklist chuẩn bị tương ứng nhóm vụ việc.

  - id: quick_exit_family
    requirement: Trang gia đình có nút Thoát nhanh và không claim xóa sạch dấu vết.

  - id: analytics_core_events
    requirement: Tracking tối thiểu: intake_card_clicked, one_hour_cta_clicked, intake_form_started, intake_form_submitted.
```

---

## 23. Content backlog ưu tiên

```yaml
content_backlog:
  family:
    - Con có cần ra tòa khi cha mẹ ly hôn không?
    - Ngoại tình có làm mất quyền nuôi con không?
    - Ly hôn nhưng sợ mất con: nên chuẩn bị gì trước?

  labor:
    - Bị công ty cho nghỉ ngang thì làm gì đầu tiên?
    - Bị nợ lương, nên thương lượng hay khởi kiện?
    - Doanh nghiệp muốn sa thải đúng luật cần chuẩn bị gì?

  business:
    - Hùn mà không hạp: thỏa thuận góp vốn cần có gì?
    - Hợp đồng tốt không phải hợp đồng dài
    - Khi nào doanh nghiệp cần rà soát pháp lý nội bộ?

  debt_dispute:
    - Nợ khó đòi: thương lượng, khởi kiện hay thi hành án?
    - Thu hồi nợ đúng luật để tránh rủi ro ngược
    - Tranh chấp kinh doanh: cần chuẩn bị hồ sơ gì?

  legal_health:
    - Kiểm tra sức khỏe pháp lý doanh nghiệp là gì?
    - 3 vùng rủi ro pháp lý nội bộ thường bị bỏ quên
    - Vì sao công ty càng lớn càng cần quy chế rõ?
```

---

## 24. Risks & constraints

```yaml
risks:
  - id: over_personal_branding
    risk: Website quá tập trung vào Luật sư Như, làm yếu năng lực tổ chức An Luật.
    mitigation: Giữ các landing page B2B, hồ sơ năng lực, khách hàng tiêu biểu và dịch vụ đội ngũ.

  - id: service_catalog_bloat
    risk: Website quay lại mô hình liệt kê quá nhiều dịch vụ như web cũ.
    mitigation: Gom dịch vụ thành 5 cửa tiếp nhận và 6 gói sản phẩm.

  - id: low_quality_leads
    risk: Form quá ngắn tạo nhiều lead thiếu thông tin.
    mitigation: Dùng form rẽ nhánh và trường tóm tắt bắt buộc.

  - id: form_abandonment
    risk: Form quá dài khiến người dùng bỏ ngang.
    mitigation: Chia form thành nhiều bước, hiển thị progress, chỉ hỏi thêm theo nhánh.

  - id: unsafe_privacy_claims
    risk: Claim quá mức về Quick Exit hoặc bảo mật.
    mitigation: Dùng copy thận trọng, không hứa xóa sạch dấu vết.
```

---

## 25. Machine-readable summary

```json
{
  "project": "Website mới An Luật",
  "strategy": "legal_triage_system",
  "primary_conversion_product": "1 GIỜ GẶP NHƯ",
  "price_visibility": "hidden",
  "online_payment": false,
  "lead_model": "form_submission_then_secretary_callback",
  "primary_intake_doors": [
    "family_assets_inheritance",
    "labor_hr",
    "business_operations",
    "disputes_debt_litigation",
    "legal_health_training"
  ],
  "core_interactive_tools": [
    "legal_safety_map",
    "legal_health_score",
    "preparation_sheet"
  ],
  "core_pages_mvp": [
    "/",
    "/1-gio-gap-nhu",
    "/ca-nhan/gia-dinh-ly-hon",
    "/lao-dong-nhan-su",
    "/doanh-nghiep",
    "/ve-an-luat",
    "/luat-su-dinh-thi-quynh-nhu"
  ],
  "mvp_must_have": [
    "5-door homepage triage",
    "1 GIỜ GẶP NHƯ landing page",
    "branched intake form",
    "secretary callback flow",
    "preparation checklist after submit",
    "quick exit for sensitive family pages",
    "core analytics events"
  ]
}
```

---

## 26. Final decision

Website mới của An Luật phải bỏ mô hình liệt kê dịch vụ và chuyển sang mô hình chẩn đoán pháp lý.

“1 GIỜ GẶP NHƯ” là sản phẩm chuyển đổi chính, nhưng không được biến toàn bộ website thành landing page cá nhân. Website cần đồng thời thể hiện năng lực tổ chức của An Luật trong tư vấn thường xuyên, hợp đồng, lao động nhân sự, tranh tụng, thu hồi nợ, rà soát pháp lý nội bộ và đào tạo pháp lý.

Ba ý tưởng cần ưu tiên để tạo khác biệt:

1. Bản đồ an toàn pháp lý.
2. Legal Health Score cho doanh nghiệp.
3. Phiếu chuẩn bị 1 giờ gặp Như sau khi gửi form.

Nếu triển khai đúng, website mới sẽ không chỉ đẹp hơn website cũ. Nó sẽ trở thành một hệ thống tiếp nhận vụ việc có khả năng phân loại, giáo dục, tạo niềm tin và tăng chất lượng lead cho An Luật.

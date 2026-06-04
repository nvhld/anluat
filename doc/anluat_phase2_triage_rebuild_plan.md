# An Luật Phase 2 Triage Rebuild Plan

## 1. Mục tiêu

Từ thời điểm này, `anluat.com` không còn được phát triển như một website dịch vụ nhiều trang theo kiểu brochure. Sản phẩm phải quay lại đúng định nghĩa gốc:

- `legal triage system`
- `phòng khám pháp lý`
- `intent-first, pain-point-first, insight-first`

Website public vẫn phải thể hiện được năng lực của An Luật, nhưng lớp trải nghiệm chính phải giúp người dùng:

1. nhận diện đúng nhóm vấn đề
2. chọn lối vào phù hợp
3. gửi tín hiệu tối thiểu để An Luật tiếp nhận
4. hiểu bước tiếp theo mà không bị ngợp

---

## 2. Điều gì thay đổi so với hướng vừa làm

Batch public pages vừa qua tạo được một `content foundation` đủ tốt, nhưng founder feedback và phản hồi từ human dev đều cho thấy rõ:

- hiện tại vẫn là `content brochure + hotline-first`
- homepage chưa là `command center`
- `1 GIỜ GẶP NHƯ` chưa là landing page chuyển đổi đủ mạnh
- thiếu lớp `decision UI` và `zero-typing intake`
- thiếu visual trust proof
- SEO mới dừng ở mức nền kỹ thuật, chưa phải chiến lược intent-based

Vì vậy, từ đây ưu tiên không còn là mở thêm nhiều trang public nữa. Ưu tiên chuyển sang:

1. reset homepage
2. reset `1 GIỜ GẶP NHƯ`
3. khôi phục intake/triage/Legal Health Score như repo mẫu
4. giữ `/thuky` và `/thu-nghiem/*` làm lớp internal preview có gate

---

## 3. Nguyên tắc làm việc mới

### 3.1 Triage System First

Mọi quyết định về sitemap, CTA, component và flow phải trả lời câu hỏi:

`Người dùng đang rối gì, và website giúp họ đi đúng cửa nhanh đến đâu?`

Nếu một khối nội dung chỉ “nói về dịch vụ” nhưng không giúp phân luồng, tạo tin cậy hoặc đẩy bước tiếp theo, khối đó không được ưu tiên.

### 3.2 Screen-First

Không trải nội dung theo kiểu viết thêm trang rồi hy vọng UX tự tốt lên.

Trình tự đúng:

1. chốt mục tiêu của màn hình
2. chốt quyết định chính mà người dùng phải đưa ra trên màn hình đó
3. chốt block layout
4. mới code component

### 3.3 Less Is More

Nguyên tắc này được đưa vào quy trình làm việc chính thức.

Áp dụng cụ thể:

- ít CTA cạnh tranh nhau trên một màn hình
- ít text hơn, nhưng trúng hơn
- ít nhánh điều hướng hơn trong first fold
- ít component “cho đủ” hơn, nhiều component có vai trò rõ hơn
- ít lời hứa chung chung hơn, nhiều bằng chứng tin cậy hơn
- ít page trùng vai hơn, nhiều route có nhiệm vụ rõ hơn

Checklist thực thi:

- Mỗi section chỉ phục vụ `1 nhiệm vụ chính`
- Mỗi first fold chỉ có `1 CTA chính` và tối đa `1 CTA phụ`
- Không để người dùng đọc 3 đoạn dài mới biết phải bấm gì
- Không nhân đôi cùng một nội dung ở homepage, page hub và page con
- Không dùng ảnh trang trí nếu không tăng trust, clarity hoặc hierarchy

### 3.4 Public Polished, Private Experimental

- public site phải chỉn chu và đủ tin cậy
- AI/intake/dashboard có thể mở cho founder và cộng sự review
- các route nội bộ vẫn đi qua auth gate
- không dùng disclaimer “đang thử nghiệm” để biện minh cho flow public chưa sẵn sàng

### 3.5 Privacy by Design

Khôi phục tính năng intake/AI không có nghĩa quay lại lưu PII bừa bãi hoặc làm giả luồng tiếp nhận.

Mọi bước khôi phục phải tuân thủ:

- dữ liệu tối thiểu
- consent rõ ràng
- không lưu localStorage với thông tin vụ việc nhạy cảm
- không public dashboard nội bộ

---

## 4. Product model sau reset

### 4.1 Public layer

`anluat.com` phải là nơi người dùng thấy:

- homepage command center
- 5 cửa tiếp nhận pháp lý
- `1 GIỜ GẶP NHƯ` là sản phẩm chuyển đổi chính
- hub page và service page dạng compressed editorial
- trust system của An Luật và Luật sư Quỳnh Như
- Legal Health Score cho doanh nghiệp

### 4.2 Internal preview layer

Giữ các route:

- `/noi-bo`
- `/thuky`
- `/thu-nghiem/intake`
- `/thu-nghiem/ai`

Nhưng chuyển vai trò từ “preview rời rạc” sang `review environment` cho founder và cộng sự:

- review luồng secretary
- review recommendation logic
- review bản nháp AI/intake
- review trạng thái tính năng trước khi promote ra public

---

## 5. Các màn hình ưu tiên bắt buộc

## 5.1 Homepage Command Center

### Mục tiêu

Homepage phải giúp người dùng tự nói được:

`Tôi thuộc nhóm nào, tôi nên bắt đầu ở đâu, và An Luật sẽ tiếp nhận tôi như thế nào.`

### Bắt buộc phải có

1. top nav gọn, không nhồi quá nhiều mục
2. hero split theo tinh thần Dandatto
3. `5 cửa tiếp nhận` trong first screen hoặc ngay sau hero
4. CTA chính: `Chọn nhóm vấn đề`
5. CTA phụ: `Mở 1 GIỜ GẶP NHƯ`
6. trust block ngắn
7. quick exit nếu cần
8. visual proof đủ mạnh để không còn cảm giác wall-of-text

### Không được làm

- biến hero thành một đoạn giới thiệu thương hiệu chung chung
- đẩy người dùng vào đọc taxonomy dịch vụ trước khi hiểu mình nên đi đâu
- nhồi cùng lúc hotline, nhiều CTA, nhiều card insight và nhiều đoạn giới thiệu vào first fold

### Batch code dự kiến

- refactor [app/page.tsx](/Users/nguyenvietcuong/Documents/anluat.com/app/page.tsx)
- thêm component riêng cho:
  - `HomepageHero`
  - `IntakeDoorGrid`
  - `TrustProofStrip`
  - `LegalSafetyMapEntry`
  - `AudienceRoutePanel`
- chuẩn hóa content source trong [lib/public-content.ts](/Users/nguyenvietcuong/Documents/anluat.com/lib/public-content.ts)

## 5.2 Bản đồ an toàn pháp lý

### Vai trò

Đây là lớp `decision UI` cho người chưa sẵn sàng điền form dài.

### Hành vi mong muốn

Người dùng trả lời 3 câu hỏi dạng chọn nhanh:

1. bạn là ai
2. bạn đang lo nhất điều gì
3. việc đang ở giai đoạn nào

Kết quả trả về:

- gợi ý cửa phù hợp
- gợi ý `1 GIỜ GẶP NHƯ` hoặc secretary review
- microcopy giải thích ngắn vì sao

### Trạng thái release

- public, nếu flow đủ gọn và ổn định
- có thể mở từ homepage dưới dạng drawer trên desktop và bottom sheet trên mobile

### Batch code dự kiến

- thêm component React island cho `LegalSafetyMap`
- render shell từ server, logic tương tác ở client
- nối kết quả vào CTA đích thay vì chỉ hiển thị text

## 5.3 Landing page `1 GIỜ GẶP NHƯ`

### Mục tiêu

Không chỉ “giải thích buổi tư vấn là gì”, mà phải làm rõ:

- vì sao người dùng nên gửi thông tin ngay
- buổi này phù hợp với ai
- buổi này không dành cho ai
- sau buổi gặp sẽ rõ được gì

### Bắt buộc phải có

1. first action without scroll
2. portrait/authority block của Luật sư Quỳnh Như
3. outcome chips
4. suitable / not suitable
5. process 4 bước
6. preparation preview theo nhóm vấn đề
7. sticky CTA mobile
8. trust note về cách báo phí và xác nhận lịch

### Batch code dự kiến

- refactor [app/1-gio-gap-nhu/page.tsx](/Users/nguyenvietcuong/Documents/anluat.com/app/1-gio-gap-nhu/page.tsx)
- tách content khỏi JSX trong [lib/public-content.ts](/Users/nguyenvietcuong/Documents/anluat.com/lib/public-content.ts)
- thêm drawer hoặc bottom sheet để gửi thông tin sơ bộ

## 5.4 Legal Health Score

### Vai trò

Đây là công cụ chuyển đổi chính cho audience doanh nghiệp, đặc biệt với:

- founder
- giám đốc vận hành
- HR
- doanh nghiệp đang tăng trưởng nhanh nhưng pháp lý nội bộ rời rạc

### Bắt buộc phải có

1. 8 câu hỏi rõ, không luật hóa
2. live score meter trên desktop
3. one-question-per-screen trên mobile
4. kết quả theo band:
   - rủi ro cao
   - cần củng cố
   - tương đối an toàn
5. recommendation panel
6. CTA secretary review

### Trạng thái release

- ưu tiên public nếu nội dung và scoring đã chín
- nếu chưa, giữ ở preview có gate nhưng phải code theo hướng có thể promote nhanh

### Batch code dự kiến

- thêm route mới cho public score tool
- nối từ `/doanh-nghiep` và homepage
- tách scoring logic khỏi presentation

## 5.5 Internal Secretary & AI Review

### Vai trò

Không phải để “show cho có”, mà để founder/team xem được toàn bộ lớp vận hành mà public site sẽ đẩy lead vào.

### Nguyên tắc

- internal review chỉ hiện qua route có gate
- route này không nằm trong nav public
- không index
- có thông báo rõ đây là phiên bản review/đang hoàn thiện bởi `Dandatto Studio`

### Batch code dự kiến

- giữ [app/thuky/page.tsx](/Users/nguyenvietcuong/Documents/anluat.com/app/thuky/page.tsx)
- giữ [app/thu-nghiem/intake/page.tsx](/Users/nguyenvietcuong/Documents/anluat.com/app/thu-nghiem/intake/page.tsx)
- giữ [app/thu-nghiem/ai/page.tsx](/Users/nguyenvietcuong/Documents/anluat.com/app/thu-nghiem/ai/page.tsx)
- bổ sung rõ trạng thái feature, readiness và next action

---

## 6. Reset UX/UI theo tinh thần Dandatto

Lưu ý vận hành:

- trong session hiện tại không có skill `Dandatto` được expose trực tiếp như một tool gọi riêng
- nhưng bộ doc Dandatto trong `doc/` là source of truth cho visual direction
- plugin `Browser` sẽ được dùng cho visual QA sau mỗi batch frontend đáng kể

### 6.1 Visual shift bắt buộc

Phải chuyển từ:

- text-heavy cards
- nhiều khối nội dung cùng trọng lượng
- brochure hierarchy

sang:

- editorial split layout
- visual rhythm mạnh hơn
- trust asset rõ hơn
- decision module rõ hơn
- card hierarchy rõ hơn

### 6.2 Visual assets ưu tiên bổ sung

1. portrait Luật sư Quỳnh Như
2. trust/timeline block cho An Luật
3. visual treatment cho `5 cửa tiếp nhận`
4. visual pattern cho `1 GIỜ GẶP NHƯ`
5. editorial card grid cho `Góc chia sẻ`

### 6.3 Quy tắc dùng hình ảnh

- hình phải tăng trust hoặc clarity
- tránh ảnh stock chung chung
- không tạo chân dung giả founder
- nếu chưa có ảnh thật, dùng placeholder editorial có chủ đích, không giả làm ảnh thương hiệu chính thức

---

## 7. SEO reset

Founder feedback về SEO là đúng. Giai đoạn tới không coi SEO là “thêm title và sitemap” nữa.

### 7.1 Việc phải làm

1. homepage phải phản ánh `search intent clusters`
2. service pages phải có schema phù hợp
3. `1 GIỜ GẶP NHƯ` cần product-like page structure rõ hơn
4. Legal Health Score tạo B2B entry point riêng
5. internal linking phải theo intent, không chỉ theo taxonomy

### 7.2 Schema checklist

- `WebSite`
- `Attorney` hoặc `Person`
- `LegalService`
- `BreadcrumbList`
- `FAQPage` chỉ cho FAQ hiển thị thực
- `LocalBusiness` nếu thông tin văn phòng đã chốt

### 7.3 Content cluster ưu tiên

- gia đình / ly hôn / tài sản / thừa kế
- người lao động / sa thải / nợ lương / HR
- hợp đồng / nội bộ doanh nghiệp / cổ đông / đầu tư
- tranh chấp / thu hồi nợ / thương lượng / tố tụng
- đào tạo pháp lý / legal health / phòng ngừa

---

## 8. Khôi phục tính năng từ repo mẫu theo thứ tự an toàn

## 8.1 Nhóm khôi phục sớm

1. homepage `5-door triage`
2. `1 GIỜ GẶP NHƯ` landing conversion
3. `Legal Safety Map`
4. `Legal Health Score`
5. zero-typing intake skeleton

## 8.2 Nhóm khôi phục sau

1. secretary review states
2. AI refinement / recommendation preview
3. internal dashboard states
4. upload/document-aware flow
5. booking/payment orchestration nếu founder chốt cho phase tiếp theo

## 8.3 Điều kiện không được phá

- không quay lại fake success state
- không lưu PII nhạy cảm ở client
- không để dashboard public
- không để preview route bị index

---

## 9. Thứ tự triển khai đề xuất

## Milestone A — UX shell reset

Mục tiêu:

- đổi trục homepage
- đổi trục `1 GIỜ GẶP NHƯ`
- chèn lại decision UI vào public layer

Thực hiện:

1. refactor homepage
2. refactor `1 GIỜ GẶP NHƯ`
3. dựng component `LegalSafetyMap`
4. thêm visual trust modules

Review:

- review nội bộ trước
- chưa làm phiền founder ở milestone này nếu thay đổi còn quá ít

## Milestone B — Triage interactions

Mục tiêu:

- có luồng chọn nhanh
- có B2B score tool
- có zero-typing intake mở được từ các CTA chính

Thực hiện:

1. build `Legal Health Score`
2. build intake drawer / bottom sheet
3. nối recommendation states

Review:

- đây là mốc phù hợp để founder review một lần lớn

## Milestone C — Internal operations alignment

Mục tiêu:

- founder và cộng sự thấy được cách public lead đổ vào lớp vận hành

Thực hiện:

1. chuẩn hóa `/thuky`
2. chuẩn hóa `/thu-nghiem/intake`
3. chuẩn hóa `/thu-nghiem/ai`
4. thêm trạng thái “ready / review / blocked”

## Milestone D — SEO and production hardening

Mục tiêu:

- đủ chuẩn public cutover sau review founder

Thực hiện:

1. schema
2. metadata deepening
3. editorial cleanup
4. mobile QA
5. internal gate QA

---

## 10. Working agreement cho các batch tiếp theo

Từ đây, mỗi batch code phải đạt đủ 5 điều:

1. có mục tiêu UX/UI rõ
2. có vai trò trong triage funnel
3. có tiêu chí `Less Is More`
4. có trạng thái public/internal rõ ràng
5. có smoke test tối thiểu trước khi push

Không tiếp tục mở rộng thêm page content nếu chưa phục vụ trực tiếp cho các milestone trên.

---

## 11. Batch code tiếp theo được chốt

Batch tiếp theo phải là:

1. homepage command center rebuild
2. `1 GIỜ GẶP NHƯ` rebuild
3. cài skeleton cho `LegalSafetyMap`

Đây là batch có leverage cao nhất vì:

- giải quyết trực tiếp 3 feedback lớn nhất của founder
- kéo sản phẩm về đúng spec gốc
- tạo nền cho việc khôi phục các tính năng repo mẫu mà không phải đập đi làm lại lần nữa

---

## 12. Kết luận vận hành

Trạng thái đúng của dự án hiện tại là:

- không còn ở phase “mở rộng brochure”
- đã bước vào phase `productization`
- trọng tâm là `triage-first experience`

Nếu giữ kỷ luật theo plan này, mỗi batch tới sẽ làm website bớt giống một bản nâng cấp blog/landing page, và giống hơn một hệ thống tiếp nhận pháp lý có định hướng, có nhịp, và có khả năng chuyển đổi thật.

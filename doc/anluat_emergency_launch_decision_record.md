# An Luật Emergency Launch Decision Record

**Ngày quyết định:** 2026-06-04  
**Trạng thái:** Deployed to Vercel, pending third-party DNS update  
**Mục tiêu:** Public nhanh `anluat.com` bằng một website giới thiệu và liên hệ an toàn.

## Phạm vi được public

- Trang chủ giới thiệu An Luật.
- Lĩnh vực hỗ trợ pháp lý.
- Thông tin về An Luật.
- Hai hotline đã có trong nguồn nội dung cũ và tài liệu dự án.
- Thông báo quyền riêng tư, robots và sitemap.

## Phạm vi bị tắt

- Form tiếp nhận hoặc gửi nội dung vụ việc.
- Lưu dữ liệu khách hàng trong trình duyệt.
- Gemini, AI analysis và API liên quan.
- Operations Dashboard và mọi chức năng quản trị.
- Legal Safety Map, Legal Health Score và phân luồng tự động.
- Zalo, email hoặc thông tin liên hệ chưa được xác minh cho đợt launch.

## Quy tắc nội dung

- Không thông báo đã nhận hồ sơ khi chưa có backend tiếp nhận thực tế.
- Không đưa ra tư vấn hoặc nhận định pháp lý cá nhân hóa trên website.
- Không dùng dữ liệu giả, placeholder hoặc tuyên bố kết quả không thể chứng minh.
- Nội dung website chỉ là thông tin chung và không tự động hình thành quan hệ luật sư - khách hàng.

## Launch gates

1. `npm run lint`, `npm run typecheck` và `npm run build` đều thành công.
2. Không còn API, form, dashboard hoặc localStorage chứa PII trong bề mặt deploy.
3. Canonical, sitemap, robots và JSON-LD dùng `https://anluat.com`.
4. Hai hotline và các route public được smoke test.
5. Vercel deployment hoạt động, TLS hợp lệ và DNS domain đã cấu hình.
6. Có thể rollback ngay về deployment Vercel trước đó.

## Deployment record

- Vercel project: `cuongnvhlds-projects/anluat.com`
- Production status: Ready
- Production alias: `https://anluatcom.vercel.app`
- Domains đã gắn: `anluat.com`, `www.anluat.com`
- DNS còn phải cấu hình tại nhà cung cấp domain:
  - `A @ 76.76.21.21`
  - `A www 76.76.21.21`
- `anluat.com` chưa phân giải DNS tại thời điểm chốt biên bản.

## Việc sau launch

- Xác minh và bổ sung email/Zalo chính thức.
- Duyệt lại toàn bộ nội dung chuyên môn trước khi công bố.
- Thiết kế backend tiếp nhận vụ việc đáp ứng yêu cầu bảo mật và vận hành.
- Tiếp tục kiểm toán toàn diện theo kế hoạch audit chính.

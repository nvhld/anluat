# CMS Content Model & AI-Ready SEO Schema Spec

## AnLuật.com — Sanity, Structured Content & Search/AI Readability

```yaml id="doc-meta"
document_id: anluat_cms_content_model_ai_ready_seo_schema_spec
version: 1.0
status: draft_for_review
language: vi-VN
project: Website mới An Luật
primary_domain: anluat.com
spec_type: CMS Content Model / Structured Content / AI-Ready SEO Schema
primary_cms: Sanity
machine_readable: true
last_updated: 2026-06-02
depends_on:
  - anluat_web_new_product_ux_spec
  - anluat_ui_direction_agent2ui_spec
  - anluat_design_system_tokens_component_spec
  - anluat_data_model_privacy_safe_lead_spec
```

---

## 1. Mục tiêu tài liệu

Tài liệu này định nghĩa cách AnLuật.com lưu, quản trị, render và đánh dấu dữ liệu nội dung công khai bằng Sanity CMS và structured data.

Mục tiêu:

```yaml id="goals"
goals:
  - Chuẩn hóa content model trong Sanity.
  - Tách public content khỏi dữ liệu lead/vụ việc nhạy cảm.
  - Hỗ trợ SEO truyền thống và AI/search engine readability.
  - Hỗ trợ render trang bằng Astro với nội dung có cấu trúc.
  - Tạo content source of truth cho service pages, FAQ, attorney profile, video, client proof, legal term mapping.
  - Hỗ trợ Agent2UI dùng checklist, mapping và copy block có kiểm soát.
  - Đảm bảo editor nhập nội dung dễ, dev render ổn, máy đọc được.
```

Sanity schema định nghĩa document types và fields hiển thị cho tác giả trong Studio, tương đương content model/fields/entities ở các CMS khác. ([Sanity.io][1]) Google dùng structured data để hiểu nội dung trang và khuyến nghị JSON-LD là một trong các định dạng supported, trong đó JSON-LD là định dạng được khuyến nghị cho rich result eligibility. ([Google for Developers][2])

---

## 2. Content Architecture Principles

```yaml id="principles"
content_architecture_principles:
  - id: structured_first
    name: Structured Content First
    rule: Nội dung quan trọng phải được lưu thành fields/schema, không chỉ là rich text tự do.

  - id: public_content_only
    name: Sanity chỉ chứa public content
    rule: Không lưu lead, số điện thoại khách, tóm tắt vụ việc, tài liệu upload, thanh toán hoặc booking trong Sanity.

  - id: ai_readable_by_default
    name: AI-readable by default
    rule: Mỗi trang chính có summary, FAQ, entity data, breadcrumb và next steps rõ ràng.

  - id: visible_equals_structured
    name: Nội dung structured phải visible
    rule: FAQ/schema phải khớp nội dung hiển thị trên trang. Không đánh dấu dữ liệu không có trên UI.

  - id: plain_language_first
    name: Ngôn ngữ đời thường trước thuật ngữ pháp lý
    rule: Mỗi service page nên có user phrase, legal category và plain-language summary.

  - id: editorial_control
    name: Editor kiểm soát, schema bảo vệ
    rule: CMS cho phép nhập dễ nhưng có validation để tránh phá UI/SEO/legal tone.

  - id: reusable_blocks
    name: Block tái sử dụng
    rule: FAQ, checklist, CTA, trust proof, attorney reference, related services phải reusable.
```

---

## 3. CMS Boundary

```yaml id="cms-boundary"
cms_boundary:
  Sanity_should_store:
    - public service content
    - attorney profile
    - FAQ
    - video insight metadata
    - client proof / logo / case proof đã được phép công khai
    - office location
    - legal term mapping
    - preparation checklist templates
    - landing page copy
    - CTA labels
    - SEO metadata
    - structured data fields

  Sanity_must_not_store:
    - lead submissions
    - full name / phone / email của khách gửi form
    - case summary của khách
    - tài liệu upload
    - voice note
    - payment events
    - booking intents
    - internal secretary notes
    - conflict check notes
    - audit logs
```

Nói cách khác: Sanity là tủ kính trưng bày nội dung công khai, không phải cái két đựng bi kịch pháp lý của khách. Đơn giản vậy mà con người vẫn hay nhầm, thật mệt.

---

## 4. Content Source of Truth

```yaml id="source-of-truth"
content_source_of_truth:
  public_content:
    source: Sanity
    consumers:
      - Astro pages
      - Agent2UI safe copy blocks
      - SEO structured data generator
      - sitemap generator

  operational_data:
    source: Supabase
    consumers:
      - lead dashboard
      - payment orchestration
      - scheduling orchestration
      - analytics safe events

  analytics_taxonomy:
    source: shared_enum_config
    synced_to:
      - frontend
      - Supabase
      - analytics
      - Sanity optional references
```

---

# 5. Sanity Document Types

```yaml id="document-types"
sanity_document_types:
  core_pages:
    - landing_page
    - service_page
    - attorney_profile
    - about_page
    - contact_page

  knowledge_content:
    - faq_item
    - faq_group
    - video_insight
    - article
    - legal_term_mapping
    - preparation_checklist

  trust_content:
    - client_proof
    - media_mention
    - training_event
    - testimonial_optional
    - office_location

  system_content:
    - global_site_settings
    - navigation_item
    - cta_block
    - seo_schema_profile
    - redirect_rule
```

---

# 6. Global Schema Conventions

## 6.1 Field naming

```yaml id="field-naming"
field_naming_conventions:
  use: camelCase
  examples:
    - title
    - slug
    - seoTitle
    - plainLanguageSummary
    - legalArea
    - schemaType
    - relatedServices
```

## 6.2 Required base fields

```yaml id="base-fields"
base_document_fields:
  - name: title
    type: string
    required: true

  - name: slug
    type: slug
    required: true
    unique: true

  - name: status
    type: string
    required: true
    options:
      - draft
      - review
      - published
      - archived

  - name: language
    type: string
    default: vi-VN

  - name: seo
    type: seoObject

  - name: updatedAt
    type: datetime
```

## 6.3 Validation rules

```yaml id="validation-rules"
global_validation_rules:
  - Slug is required for public pages.
  - SEO title should be <= 60 characters.
  - Meta description should be <= 160 characters.
  - No public page may publish without plainLanguageSummary.
  - FAQ answer must be visible on the page if included in schema.
  - Client logo/proof must have publication permission flag.
  - Attorney profile must include name, title and public bio before publish.
```

---

# 7. Object Types

## 7.1 `seoObject`

```yaml id="seo-object"
object_type:
  name: seoObject
  fields:
    - name: seoTitle
      type: string
      validation:
        max: 60
    - name: metaDescription
      type: text
      validation:
        max: 160
    - name: canonicalUrl
      type: url
    - name: noIndex
      type: boolean
      default: false
    - name: ogImage
      type: image
    - name: structuredDataEnabled
      type: boolean
      default: true
```

---

## 7.2 `plainLanguageBlock`

```yaml id="plain-language-block"
object_type:
  name: plainLanguageBlock
  purpose: Dùng cho block giải thích vấn đề bằng ngôn ngữ đời thường.
  fields:
    - name: userPhrase
      type: string
      example: "Ly hôn nhưng sợ mất con"
    - name: legalCategory
      type: string
      example: "Quyền nuôi con / hôn nhân gia đình"
    - name: shortExplanation
      type: text
      validation:
        max: 280
    - name: recommendedNextStep
      type: reference
      to:
        - service_page
        - landing_page
```

---

## 7.3 `ctaBlock`

```yaml id="cta-block"
object_type:
  name: ctaBlock
  fields:
    - name: label
      type: string
      required: true
    - name: actionType
      type: string
      options:
        - open_intake
        - open_booking
        - request_callback
        - download_profile
        - view_service
        - start_legal_health_score
    - name: targetPath
      type: string
    - name: tone
      type: string
      options:
        - primary
        - secondary
        - subtle
        - danger_safe
```

---

## 7.4 `faqReferenceBlock`

```yaml id="faq-reference-block"
object_type:
  name: faqReferenceBlock
  fields:
    - name: faqItems
      type: array
      of:
        - reference: faq_item
    - name: renderAsSchema
      type: boolean
      default: true
```

---

## 7.5 `structuredEntityRef`

```yaml id="structured-entity-ref"
object_type:
  name: structuredEntityRef
  fields:
    - name: entityType
      type: string
      options:
        - LegalService
        - LocalBusiness
        - Attorney
        - Person
        - Organization
        - FAQPage
        - BreadcrumbList
        - Article
        - VideoObject
    - name: entityId
      type: string
    - name: sameAs
      type: array
      of:
        - url
```

---

# 8. Document Type: `service_page`

## 8.1 Purpose

Dùng cho các trang dịch vụ/nhóm vấn đề:

```yaml id="service-page-purpose"
service_page_examples:
  - /ca-nhan/gia-dinh-ly-hon
  - /lao-dong-nhan-su/nguoi-lao-dong
  - /doanh-nghiep/hop-dong
  - /tranh-tung-thu-hoi-no/thu-hoi-no-thuong-luong
  - /doanh-nghiep/ra-soat-phap-ly-noi-bo
```

## 8.2 Schema

```yaml id="service-page-schema"
document_type:
  name: service_page
  fields:
    - name: title
      type: string
      required: true

    - name: slug
      type: slug
      required: true

    - name: legalArea
      type: string
      required: true
      options:
        - family_assets_inheritance
        - labor_hr
        - business_operations
        - disputes_debt_litigation
        - legal_health_training

    - name: issueTypes
      type: array
      of:
        - string

    - name: audience
      type: array
      of:
        - string
      options:
        - individual
        - employee
        - business_owner
        - hr
        - founder
        - corporate_executive
        - partner_media

    - name: heroHeadline
      type: string
      required: true
      validation:
        max: 90

    - name: heroSubheadline
      type: text
      required: true
      validation:
        max: 220

    - name: plainLanguageSummary
      type: text
      required: true
      validation:
        max: 320

    - name: userPhrases
      type: array
      of:
        - plainLanguageBlock

    - name: commonSituations
      type: array
      of:
        - string
      validation:
        maxItems: 8

    - name: whatAnLuatDoes
      type: array
      of:
        - string
      validation:
        maxItems: 8

    - name: requiredDocumentsPreview
      type: array
      of:
        - string
      validation:
        maxItems: 8

    - name: relatedPackage
      type: reference
      to:
        - service_package

    - name: relatedAttorney
      type: reference
      to:
        - attorney_profile

    - name: relatedFaqs
      type: array
      of:
        - reference: faq_item

    - name: primaryCta
      type: ctaBlock

    - name: secondaryCta
      type: ctaBlock

    - name: schemaType
      type: string
      default: LegalService
      options:
        - LegalService
        - Service

    - name: seo
      type: seoObject

    - name: status
      type: string
      options:
        - draft
        - review
        - published
        - archived
```

## 8.3 Rendering contract

```yaml id="service-rendering"
service_page_rendering:
  fold_1:
    - heroHeadline
    - heroSubheadline
    - plainLanguageSummary
    - primaryCta
    - relatedAttorney optional

  fold_2:
    - commonSituations
    - whatAnLuatDoes
    - requiredDocumentsPreview

  fold_3:
    - relatedPackage
    - relatedFaqs
    - secondaryCta

  structured_data:
    - LegalService
    - BreadcrumbList
    - FAQPage if relatedFaqs visible and eligible
```

---

# 9. Document Type: `service_package`

Dành cho các sản phẩm đóng gói như “1 GIỜ GẶP NHƯ”, “Khám sức khỏe pháp lý doanh nghiệp”, “Hợp đồng không cãi nhau về sau”.

```yaml id="service-package-schema"
document_type:
  name: service_package
  fields:
    - name: title
      type: string
      required: true

    - name: slug
      type: slug
      required: true

    - name: packageId
      type: string
      required: true
      options:
        - one_hour_with_nhu
        - business_legal_health_check
        - contract_without_future_conflict
        - hr_discipline_restructure
        - legal_debt_recovery
        - internal_legal_training

    - name: publicName
      type: string
      required: true

    - name: formalName
      type: string

    - name: shortPromise
      type: text
      validation:
        max: 220

    - name: outcomes
      type: array
      of:
        - string
      validation:
        maxItems: 6

    - name: suitableFor
      type: array
      of:
        - string
      validation:
        maxItems: 8

    - name: priceVisibility
      type: string
      options:
        - hidden
        - fixed
        - from_price
        - contact_required

    - name: paymentMode
      type: string
      options:
        - no_online_payment
        - payos_required_for_auto_book
        - secretary_confirmed_payment

    - name: bookingMode
      type: string
      options:
        - auto_book_candidate
        - secretary_review
        - hybrid

    - name: preparationChecklist
      type: reference
      to:
        - preparation_checklist

    - name: primaryCta
      type: ctaBlock

    - name: seo
      type: seoObject

    - name: status
      type: string
      options:
        - draft
        - review
        - published
        - archived
```

---

# 10. Document Type: `landing_page`

```yaml id="landing-page-schema"
document_type:
  name: landing_page
  fields:
    - name: title
      type: string
      required: true

    - name: slug
      type: slug
      required: true

    - name: landingPageType
      type: string
      options:
        - home
        - one_hour_with_nhu
        - legal_health_score
        - campaign
        - media_kit

    - name: heroHeadline
      type: string
      required: true
      validation:
        max: 90

    - name: heroSubheadline
      type: text
      validation:
        max: 240

    - name: heroMedia
      type: image_or_video_reference

    - name: intakeDoors
      type: array
      of:
        - reference: intake_door

    - name: contentBlocks
      type: array
      of:
        - editorial_block
        - trust_proof_block
        - ctaBlock
        - faqReferenceBlock
        - service_package_reference_block

    - name: primaryCta
      type: ctaBlock

    - name: seo
      type: seoObject

    - name: status
      type: string
```

---

# 11. Document Type: `intake_door`

Dù 5 cửa intake phần lớn nằm trong code enum, vẫn nên có Sanity document để content team chỉnh microcopy/icon/CTA mà không cần deploy. Đương nhiên không được đổi enum lung tung như đổi tên thú cưng; enum ID vẫn phải cố định.

```yaml id="intake-door-schema"
document_type:
  name: intake_door
  fields:
    - name: doorId
      type: string
      required: true
      options:
        - family_assets_inheritance
        - labor_hr
        - business_operations
        - disputes_debt_litigation
        - legal_health_training

    - name: label
      type: string
      required: true
      validation:
        max: 45

    - name: userSentence
      type: string
      required: true
      validation:
        max: 90

    - name: shortDescription
      type: text
      validation:
        max: 160

    - name: iconName
      type: string

    - name: accentToken
      type: string

    - name: defaultCta
      type: ctaBlock

    - name: targetServicePage
      type: reference
      to:
        - service_page
```

---

# 12. Document Type: `attorney_profile`

## 12.1 Purpose

Dành cho Luật sư Đinh Thị Quỳnh Như và về sau có thể mở rộng cho luật sư khác.

Schema.org có loại `Attorney` trong hierarchy, đồng thời Google structured data có xu hướng hỗ trợ rõ hơn các type/phần tử xuất hiện trong Search Gallery và general guidelines; do đó spec này cho phép xuất `Person`/`Attorney` tùy page template và validation. Schema.org full hierarchy có `LegalService`, `Attorney`, `Notary` dưới nhóm LocalBusiness. ([Schema.org][3])

## 12.2 Schema

```yaml id="attorney-profile-schema"
document_type:
  name: attorney_profile
  fields:
    - name: fullName
      type: string
      required: true

    - name: slug
      type: slug
      required: true

    - name: publicTitle
      type: string
      example: "Luật sư / Giám đốc An Luật"

    - name: shortBio
      type: text
      required: true
      validation:
        max: 320

    - name: longBio
      type: array
      of:
        - block

    - name: portraitImage
      type: image
      required: true

    - name: microVideo
      type: file_or_url

    - name: yearsOfExperience
      type: number

    - name: specialties
      type: array
      of:
        - reference: service_page

    - name: books
      type: array
      of:
        - object:
            fields:
              - title: string
              - description: text
              - coverImage: image
              - link: url

    - name: teachingRoles
      type: array
      of:
        - string

    - name: mediaMentions
      type: array
      of:
        - reference: media_mention

    - name: socialLinks
      type: array
      of:
        - object:
            fields:
              - platform: string
              - url: url

    - name: personalBrandVoiceNotes
      type: text
      hiddenFromPublic: true

    - name: schemaType
      type: string
      options:
        - Person
        - Attorney

    - name: seo
      type: seoObject

    - name: status
      type: string
```

---

# 13. Document Type: `faq_item`

Google FAQ structured data có thể giúp nội dung được hiểu/khám phá tốt hơn nhưng Google không đảm bảo structured data sẽ hiển thị rich result; FAQ schema phải tuân theo general structured data guidelines và nội dung phải phù hợp với feature guidelines. ([Google for Developers][4])

```yaml id="faq-item-schema"
document_type:
  name: faq_item
  fields:
    - name: question
      type: string
      required: true
      validation:
        max: 140

    - name: answer
      type: array
      of:
        - block
      required: true

    - name: plainAnswer
      type: text
      description: Plain text version for JSON-LD and AI summary.
      validation:
        max: 700

    - name: legalArea
      type: string
      options:
        - family_assets_inheritance
        - labor_hr
        - business_operations
        - disputes_debt_litigation
        - legal_health_training
        - general

    - name: relatedService
      type: reference
      to:
        - service_page

    - name: eligibleForFaqSchema
      type: boolean
      default: true

    - name: humanReviewed
      type: boolean
      default: false

    - name: lastReviewedAt
      type: datetime

    - name: status
      type: string
      options:
        - draft
        - review
        - published
        - archived
```

Rules:

```yaml id="faq-rules"
faq_rules:
  - FAQ answer must not be final legal advice for a specific case.
  - FAQ answer must be visible on page if included in JSON-LD.
  - FAQ answer should include disclaimer if topic is sensitive.
  - FAQ must be humanReviewed before published.
  - FAQ schema is optional and may be disabled per page.
```

---

# 14. Document Type: `faq_group`

```yaml id="faq-group-schema"
document_type:
  name: faq_group
  fields:
    - name: title
      type: string
      required: true

    - name: slug
      type: slug

    - name: description
      type: text

    - name: faqs
      type: array
      of:
        - reference: faq_item

    - name: renderAsFaqPage
      type: boolean
      default: false

    - name: seo
      type: seoObject

    - name: status
      type: string
```

---

# 15. Document Type: `legal_term_mapping`

Dùng cho module “Bạn đang gọi vấn đề này bằng cách nào?”

```yaml id="legal-term-mapping-schema"
document_type:
  name: legal_term_mapping
  fields:
    - name: userPhrase
      type: string
      required: true
      example: "Hùn mà không hạp"

    - name: normalizedPhrase
      type: string

    - name: legalCategory
      type: string
      required: true
      example: "Tranh chấp góp vốn / cổ đông / thành viên công ty"

    - name: legalArea
      type: string
      required: true

    - name: explanation
      type: text
      validation:
        max: 280

    - name: relatedService
      type: reference
      to:
        - service_page

    - name: recommendedPackage
      type: reference
      to:
        - service_package

    - name: seoKeywords
      type: array
      of:
        - string

    - name: status
      type: string
```

Example records:

```yaml id="legal-term-mapping-examples"
legal_term_mapping_examples:
  - userPhrase: "Hùn mà không hạp"
    legalCategory: "Tranh chấp góp vốn / cổ đông / thành viên công ty"
    relatedService: "/doanh-nghiep/gop-von-co-dong"

  - userPhrase: "Bị công ty cho nghỉ ngang"
    legalCategory: "Chấm dứt hợp đồng lao động / sa thải / kỷ luật lao động"
    relatedService: "/lao-dong-nhan-su/nguoi-lao-dong"

  - userPhrase: "Người ta nợ tiền không trả"
    legalCategory: "Thu hồi nợ / thương lượng / khởi kiện"
    relatedService: "/tranh-tung-thu-hoi-no/thu-hoi-no-thuong-luong"
```

---

# 16. Document Type: `preparation_checklist`

Dùng cho Phiếu chuẩn bị sau submit và Agent2UI recommendation.

```yaml id="preparation-checklist-schema"
document_type:
  name: preparation_checklist
  fields:
    - name: checklistId
      type: string
      required: true

    - name: title
      type: string
      required: true

    - name: legalArea
      type: string
      required: true

    - name: issueType
      type: string

    - name: checklistItems
      type: array
      of:
        - object:
            fields:
              - name: label
                type: string
                required: true
              - name: helperText
                type: text
              - name: sensitivity
                type: string
                options:
                  - low
                  - medium
                  - high
                  - very_high

    - name: warningNote
      type: text

    - name: agentSafe
      type: boolean
      default: true

    - name: status
      type: string
```

Rules:

```yaml id="checklist-rules"
preparation_checklist_rules:
  - Items must be generic and not echo user-submitted text.
  - High/very_high sensitivity items should include caution copy.
  - Agent2UI may render checklist only if agentSafe=true.
```

---

# 17. Document Type: `video_insight`

```yaml id="video-insight-schema"
document_type:
  name: video_insight
  fields:
    - name: title
      type: string
      required: true

    - name: slug
      type: slug
      required: true

    - name: videoUrl
      type: url

    - name: platform
      type: string
      options:
        - facebook
        - tiktok
        - youtube
        - upload
        - other

    - name: thumbnail
      type: image

    - name: transcript
      type: text

    - name: summary
      type: text
      validation:
        max: 320

    - name: legalArea
      type: string

    - name: relatedService
      type: reference
      to:
        - service_page

    - name: speaker
      type: reference
      to:
        - attorney_profile

    - name: publishDate
      type: datetime

    - name: schemaEnabled
      type: boolean
      default: true

    - name: status
      type: string
```

Structured data:

```yaml id="video-structured-data"
video_insight_structured_data:
  schema_type: VideoObject
  fields:
    - name
    - description
    - thumbnailUrl
    - uploadDate
    - contentUrl_or_embedUrl
```

---

# 18. Document Type: `article`

```yaml id="article-schema"
document_type:
  name: article
  fields:
    - name: title
      type: string
      required: true

    - name: slug
      type: slug
      required: true

    - name: excerpt
      type: text
      validation:
        max: 220

    - name: body
      type: array
      of:
        - block
        - image
        - ctaBlock
        - faqReferenceBlock

    - name: author
      type: reference
      to:
        - attorney_profile

    - name: legalArea
      type: string

    - name: relatedServices
      type: array
      of:
        - reference: service_page

    - name: reviewedBy
      type: reference
      to:
        - attorney_profile

    - name: publishedAt
      type: datetime

    - name: lastReviewedAt
      type: datetime

    - name: seo
      type: seoObject

    - name: status
      type: string
```

Rules:

```yaml id="article-rules"
article_rules:
  - Legal articles should have reviewedBy before publish.
  - Sensitive topics must include disclaimer block.
  - Avoid giving case-specific legal advice.
  - Article must link to relevant service_page or intake CTA.
```

---

# 19. Document Type: `client_proof`

```yaml id="client-proof-schema"
document_type:
  name: client_proof
  fields:
    - name: clientName
      type: string
      required: true

    - name: logo
      type: image

    - name: clientType
      type: string
      options:
        - enterprise
        - sme
        - education
        - association
        - media
        - public_reference

    - name: relatedServiceAreas
      type: array
      of:
        - string

    - name: proofText
      type: text
      validation:
        max: 280

    - name: publicationPermission
      type: boolean
      required: true

    - name: displayPriority
      type: number

    - name: status
      type: string
```

Rule:

```yaml id="client-proof-rules"
client_proof_rules:
  - Must not publish unless publicationPermission=true.
  - Must not imply confidential representation without permission.
  - Do not include case details unless publicly permitted.
```

---

# 20. Document Type: `media_mention`

```yaml id="media-mention-schema"
document_type:
  name: media_mention
  fields:
    - name: title
      type: string
      required: true

    - name: sourceName
      type: string
      required: true

    - name: sourceUrl
      type: url

    - name: publishDate
      type: datetime

    - name: summary
      type: text
      validation:
        max: 320

    - name: relatedAttorney
      type: reference
      to:
        - attorney_profile

    - name: relatedService
      type: reference
      to:
        - service_page

    - name: status
      type: string
```

---

# 21. Document Type: `training_event`

```yaml id="training-event-schema"
document_type:
  name: training_event
  fields:
    - name: title
      type: string
      required: true

    - name: slug
      type: slug

    - name: eventType
      type: string
      options:
        - workshop
        - webinar
        - internal_training
        - association_event
        - university_event

    - name: targetAudience
      type: array
      of:
        - string

    - name: topics
      type: array
      of:
        - string

    - name: speakers
      type: array
      of:
        - reference: attorney_profile

    - name: eventDate
      type: datetime

    - name: summary
      type: text

    - name: relatedService
      type: reference
      to:
        - service_page

    - name: status
      type: string
```

---

# 22. Document Type: `office_location`

Google LocalBusiness structured data can tell Google about business details such as hours and departments; this should be used truthfully and kept consistent with visible contact information. ([Google for Developers][5])

```yaml id="office-location-schema"
document_type:
  name: office_location
  fields:
    - name: name
      type: string
      required: true

    - name: address
      type: object
      fields:
        - streetAddress: string
        - addressLocality: string
        - addressRegion: string
        - postalCode: string
        - addressCountry: string

    - name: phone
      type: string

    - name: email
      type: string

    - name: geo
      type: object
      fields:
        - latitude: number
        - longitude: number

    - name: openingHours
      type: array
      of:
        - string

    - name: mapUrl
      type: url

    - name: isPrimary
      type: boolean
      default: false

    - name: status
      type: string
```

---

# 23. Document Type: `global_site_settings`

```yaml id="global-site-settings-schema"
document_type:
  name: global_site_settings
  singleton: true
  fields:
    - name: siteName
      type: string
      default: "An Luật"

    - name: domain
      type: url

    - name: defaultSeo
      type: seoObject

    - name: organizationLogo
      type: image

    - name: primaryPhone
      type: string

    - name: primaryEmail
      type: string

    - name: socialLinks
      type: array
      of:
        - object:
            fields:
              - platform: string
              - url: url

    - name: primaryOffice
      type: reference
      to:
        - office_location

    - name: schemaOrganizationType
      type: string
      options:
        - LegalService
        - LocalBusiness
        - Organization

    - name: defaultCtas
      type: array
      of:
        - ctaBlock
```

---

# 24. Structured Data Strategy

## 24.1 General rules

Google’s structured data guidelines state that pages must not be blocked from Googlebot, and structured data must follow both technical and quality guidelines; JSON-LD is recommended among supported formats. ([Google for Developers][6])

```yaml id="structured-data-rules"
structured_data_rules:
  format: JSON-LD
  generation: server_side_or_static_at_build_time
  source: Sanity + global config
  validation:
    - Google Rich Results Test where applicable
    - Schema.org validator
  quality_rules:
    - Structured data must match visible page content.
    - Do not mark up hidden or misleading FAQ.
    - Do not claim services, reviews, ratings or office details not visible/true.
    - Do not include sensitive lead data.
```

---

## 24.2 Schema map by page type

```yaml id="schema-map"
schema_map:
  homepage:
    schema:
      - LegalService_or_LocalBusiness
      - WebSite
      - BreadcrumbList

  service_page:
    schema:
      - LegalService
      - BreadcrumbList
      - FAQPage_optional_if_visible

  one_hour_with_nhu_landing:
    schema:
      - Service
      - Person_or_Attorney
      - BreadcrumbList
      - FAQPage_optional_if_visible

  attorney_profile:
    schema:
      - Person_or_Attorney
      - BreadcrumbList

  article:
    schema:
      - Article
      - Person_author
      - BreadcrumbList
      - FAQPage_optional_if_article_has_visible_faq

  video_insight:
    schema:
      - VideoObject
      - BreadcrumbList

  faq_group_page:
    schema:
      - FAQPage
      - BreadcrumbList

  contact_page:
    schema:
      - LocalBusiness_or_LegalService
      - PostalAddress
      - BreadcrumbList
```

Schema.org defines `FAQPage` as a web page presenting one or more frequently asked questions, and `BreadcrumbList` as a chain of linked web pages that typically ends with the current page. ([Schema.org][7])

---

## 24.3 Example JSON-LD: LegalService / LocalBusiness

```json id="jsonld-legalservice"
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://anluat.com/#legalservice",
  "name": "Công ty Luật TNHH MTV An Luật",
  "url": "https://anluat.com",
  "logo": "https://anluat.com/logo.png",
  "telephone": "+84-902-426-122",
  "email": "info@anluat.vn",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tầng 3, Số 9 Phan Kế Bính",
    "addressLocality": "TP. Hồ Chí Minh",
    "addressRegion": "TP. Hồ Chí Minh",
    "addressCountry": "VN"
  },
  "areaServed": "VN",
  "knowsAbout": [
    "Hôn nhân gia đình",
    "Lao động nhân sự",
    "Tư vấn doanh nghiệp",
    "Tranh tụng",
    "Thu hồi nợ",
    "Sở hữu trí tuệ"
  ]
}
```

---

## 24.4 Example JSON-LD: Service Page

```json id="jsonld-service-page"
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://anluat.com/doanh-nghiep/hop-dong#service",
  "name": "Tư vấn soạn thảo và rà soát hợp đồng",
  "url": "https://anluat.com/doanh-nghiep/hop-dong",
  "provider": {
    "@id": "https://anluat.com/#legalservice"
  },
  "description": "An Luật hỗ trợ doanh nghiệp soạn thảo và rà soát hợp đồng dựa trên giao dịch thật, ngành nghề thật và cách hiểu thống nhất giữa các bên.",
  "areaServed": "VN",
  "serviceType": "Rà soát hợp đồng"
}
```

---

## 24.5 Example JSON-LD: FAQPage

```json id="jsonld-faqpage"
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hợp đồng tốt có phải là hợp đồng càng dài càng tốt không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Không. Hợp đồng tốt là hợp đồng giúp các bên hiểu giống nhau về quyền, nghĩa vụ, rủi ro và cách xử lý khi có tranh chấp."
      }
    }
  ]
}
```

---

## 24.6 Example JSON-LD: BreadcrumbList

```json id="jsonld-breadcrumb"
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Trang chủ",
      "item": "https://anluat.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Doanh nghiệp",
      "item": "https://anluat.com/doanh-nghiep"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Hợp đồng",
      "item": "https://anluat.com/doanh-nghiep/hop-dong"
    }
  ]
}
```

---

# 25. AI-Ready Content Blocks

Mỗi trang chính cần có các block rõ để LLM/search dễ trích xuất.

```yaml id="ai-ready-blocks"
ai_ready_required_blocks:
  service_page:
    - plainLanguageSummary
    - whoThisIsFor
    - commonSituations
    - whatAnLuatDoes
    - requiredDocumentsPreview
    - nextSteps
    - relatedFaqs

  attorney_profile:
    - shortBio
    - specialties
    - credentials
    - mediaMentions
    - socialLinks

  article:
    - excerpt
    - author
    - reviewedBy
    - lastReviewedAt
    - keyTakeaways
    - relatedServices

  landing_page:
    - heroSummary
    - offerExplanation
    - processSteps
    - faq
    - primaryCta
```

---

## 25.1 `llmSummary` field

```yaml id="llm-summary"
llm_summary_object:
  name: llmSummary
  fields:
    - name: summaryText
      type: text
      validation:
        min: 80
        max: 700
    - name: keyEntities
      type: array
      of:
        - string
    - name: keyServices
      type: array
      of:
        - reference: service_page
    - name: lastReviewedAt
      type: datetime
```

Rule:

```yaml id="llm-summary-rules"
llm_summary_rules:
  - Summary must be factual.
  - Summary must not overclaim.
  - Summary must not contain case-specific advice.
  - Summary should be visible or embedded in server-rendered HTML, not hidden only in JS.
```

---

# 26. Editorial Workflow

```yaml id="editorial-workflow"
editorial_workflow:
  statuses:
    draft:
      description: Đang soạn.
    review:
      description: Chờ review chuyên môn/pháp lý.
    published:
      description: Đã xuất bản.
    archived:
      description: Ngừng hiển thị.

  required_review:
    service_page: legal_review_required
    faq_item: legal_review_required
    article: legal_review_required
    client_proof: permission_review_required
    attorney_profile: owner_review_required

  publish_gate:
    - seoTitle exists
    - metaDescription exists
    - plainLanguageSummary exists for pages
    - no forbidden claims
    - reviewedBy exists for legal article/FAQ
    - publicationPermission=true for client proof
```

---

# 27. Forbidden Claims & Content Safety

```yaml id="forbidden-claims"
forbidden_claims:
  result_guarantees:
    - "cam kết thắng"
    - "chắc chắn thắng"
    - "đảm bảo kết quả"
    - "100% thành công"

  unsafe_privacy:
    - "xóa sạch mọi dấu vết"
    - "bảo mật tuyệt đối trong mọi trường hợp"
    - "không ai có thể phát hiện"

  misleading_pricing:
    - "giá cố định" unless priceVisibility=fixed
    - "miễn phí" unless approved

  overbroad_authority:
    - "hàng đầu Việt Nam" unless substantiated
    - "duy nhất" unless substantiated
```

---

# 28. Content-to-Agent2UI Safe Use

Sanity content có thể cấp dữ liệu cho Agent2UI, nhưng chỉ các block đã đánh dấu `agentSafe=true`.

```yaml id="agent-safe-content"
agent_safe_content_rules:
  allowed_for_agent2ui:
    - preparation_checklist where agentSafe=true
    - ctaBlock
    - service_package shortPromise
    - plainLanguageSummary
    - faq plainAnswer if humanReviewed=true

  forbidden_for_agent2ui:
    - unpublished draft content
    - internal notes
    - personalBrandVoiceNotes hiddenFromPublic
    - raw article body with unsafe HTML
    - client proof without publicationPermission

  renderer_rule:
    - Agent2UI may reference content IDs.
    - Frontend/backend fetches allowed public content by ID.
    - Agent must not invent checklist items beyond allowed policy unless reviewed.
```

---

# 29. Sitemap & Routing from CMS

```yaml id="cms-routing"
cms_routing:
  generated_from:
    - landing_page
    - service_page
    - attorney_profile
    - article
    - faq_group
    - video_insight

  excluded_if:
    - status != published
    - seo.noIndex == true

  sitemap_fields:
    - loc
    - lastmod
    - priority
    - changefreq_optional
```

---

# 30. Redirect Rules

```yaml id="redirect-rule-schema"
document_type:
  name: redirect_rule
  fields:
    - name: fromPath
      type: string
      required: true
    - name: toPath
      type: string
      required: true
    - name: statusCode
      type: number
      options:
        - 301
        - 302
    - name: reason
      type: string
    - name: status
      type: string
```

Purpose:

```yaml id="redirect-purpose"
redirect_purpose:
  - migrate_old_anluat_urls
  - preserve SEO from old website
  - map old service categories to new user-first pages
```

Cái này quan trọng vì website cũ có nhiều URL dịch vụ. Không redirect là đem SEO cũ thả sông, rất thơ, rất phí.

---

# 31. Migration Map from Old Website

```yaml id="migration-map"
old_to_new_content_map:
  "/news/about-us":
    new_path: "/ve-an-luat"
    content_type: about_page

  "/news/tu-van-thuong-xuyen":
    new_path: "/doanh-nghiep/tu-van-thuong-xuyen"
    content_type: service_page

  "/news/contract-draftingreviewing":
    new_path: "/doanh-nghiep/hop-dong"
    content_type: service_page

  "/news/lao-dongnhan-su":
    new_path: "/lao-dong-nhan-su/doanh-nghiep-hr"
    content_type: service_page

  "/news/ra-soatxay-dung-khung-phap-ly":
    new_path: "/doanh-nghiep/ra-soat-phap-ly-noi-bo"
    content_type: service_page

  "/news/debt-collection-debt-settlement-negotiation":
    new_path: "/tranh-tung-thu-hoi-no/thu-hoi-no-thuong-luong"
    content_type: service_page

  "/news/giai-quyet-tranh-chaptranh-tung":
    new_path: "/ca-nhan/tranh-chap-dan-su"
    content_type: service_page

  "/news/giai-quyet-tranh-chaptranh-tung-tai-toa":
    new_path: "/tranh-tung-thu-hoi-no/tranh-chap-kinh-doanh"
    content_type: service_page

  "/news/dao-tao-phap-ly":
    new_path: "/dao-tao/phap-ly-noi-bo"
    content_type: service_page

  "/news/so-huu-tri-tue-2":
    new_path: "/doanh-nghiep/so-huu-tri-tue"
    content_type: service_page
```

---

# 32. Example Sanity TypeScript Schema Snippet

```ts id="sanity-service-page-ts"
import {defineField, defineType} from 'sanity'

export const servicePage = defineType({
  name: 'service_page',
  title: 'Service Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'legalArea',
      title: 'Legal Area',
      type: 'string',
      options: {
        list: [
          {title: 'Gia đình, tài sản, thừa kế', value: 'family_assets_inheritance'},
          {title: 'Lao động & nhân sự', value: 'labor_hr'},
          {title: 'Doanh nghiệp đang vận hành', value: 'business_operations'},
          {title: 'Tranh chấp, kiện tụng, thu hồi nợ', value: 'disputes_debt_litigation'},
          {title: 'Kiểm tra sức khỏe pháp lý doanh nghiệp', value: 'legal_health_training'}
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'plainLanguageSummary',
      title: 'Plain Language Summary',
      type: 'text',
      validation: Rule => Rule.required().max(320)
    }),
    defineField({
      name: 'commonSituations',
      title: 'Common Situations',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.max(8)
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoObject'
    })
  ]
})
```

---

# 33. GROQ Query Examples

## 33.1 Service page query

```groq id="groq-service-page"
*[_type == "service_page" && slug.current == $slug && status == "published"][0]{
  title,
  "slug": slug.current,
  legalArea,
  issueTypes,
  audience,
  heroHeadline,
  heroSubheadline,
  plainLanguageSummary,
  userPhrases,
  commonSituations,
  whatAnLuatDoes,
  requiredDocumentsPreview,
  primaryCta,
  secondaryCta,
  relatedPackage->{
    title,
    packageId,
    publicName,
    shortPromise
  },
  relatedAttorney->{
    fullName,
    publicTitle,
    shortBio,
    portraitImage
  },
  relatedFaqs[]->{
    question,
    plainAnswer,
    eligibleForFaqSchema,
    humanReviewed
  },
  seo
}
```

## 33.2 FAQ for schema query

```groq id="groq-faq-schema"
*[_type == "faq_item" 
  && status == "published" 
  && humanReviewed == true 
  && eligibleForFaqSchema == true
  && relatedService._ref == $serviceId]{
    question,
    plainAnswer
}
```

---

# 34. Build-time Validation

```yaml id="build-validation"
build_time_validation:
  fail_build_if:
    - published service_page missing plainLanguageSummary
    - published page has seo.noIndex=false but missing seoTitle/metaDescription
    - FAQ schema generated from FAQ without humanReviewed=true
    - client_proof rendered with publicationPermission=false
    - structured data includes missing URL/name
    - redirect_rule has same fromPath and toPath

  warn_build_if:
    - metaDescription longer than 160 chars
    - heroHeadline longer than 90 chars
    - service_page has no relatedFaqs
    - article missing reviewedBy
    - video_insight missing transcript
```

---

# 35. Editor Experience

```yaml id="editor-experience"
sanity_studio_structure:
  main_sections:
    - Trang chính
    - Dịch vụ
    - 1 GIỜ GẶP NHƯ / Gói dịch vụ
    - FAQ
    - Góc chia sẻ / Video
    - Luật sư
    - Khách hàng & bằng chứng uy tín
    - Đào tạo / Sự kiện
    - SEO & Redirects
    - Cấu hình toàn site

  editor_helpers:
    - field_descriptions
    - validation_messages_in_vietnamese
    - preview_url_button
    - status_badges
    - review_required_flags
```

Validation messages should be plain Vietnamese:

```yaml id="editor-validation-messages"
validation_messages:
  missing_plain_summary: "Trang này cần phần tóm tắt bằng ngôn ngữ đời thường trước khi xuất bản."
  faq_not_reviewed: "FAQ cần được review chuyên môn trước khi dùng cho schema."
  client_permission_missing: "Chưa thể hiển thị khách hàng này vì chưa xác nhận quyền công bố."
  seo_title_too_long: "SEO title nên dưới 60 ký tự. Google không thích văn dài lê thê, giống chúng ta."
```

---

# 36. Machine-readable summary

```json id="machine-summary"
{
  "document_id": "anluat_cms_content_model_ai_ready_seo_schema_spec",
  "version": "1.0",
  "status": "draft_for_review",
  "primary_cms": "Sanity",
  "public_content_only": true,
  "forbidden_in_cms": [
    "lead submissions",
    "case summaries",
    "customer phone/email/name",
    "uploaded documents",
    "payment events",
    "booking intents",
    "internal notes"
  ],
  "document_types": [
    "landing_page",
    "service_page",
    "service_package",
    "intake_door",
    "attorney_profile",
    "faq_item",
    "faq_group",
    "legal_term_mapping",
    "preparation_checklist",
    "video_insight",
    "article",
    "client_proof",
    "media_mention",
    "training_event",
    "office_location",
    "global_site_settings",
    "redirect_rule"
  ],
  "structured_data_strategy": {
    "format": "JSON-LD",
    "generation": "server_side_or_static_build_time",
    "schemas_by_page": {
      "homepage": ["LegalService", "WebSite", "BreadcrumbList"],
      "service_page": ["LegalService", "BreadcrumbList", "FAQPage_optional"],
      "attorney_profile": ["Person_or_Attorney", "BreadcrumbList"],
      "article": ["Article", "Person_author", "BreadcrumbList"],
      "video_insight": ["VideoObject", "BreadcrumbList"],
      "faq_group_page": ["FAQPage", "BreadcrumbList"],
      "contact_page": ["LocalBusiness_or_LegalService", "PostalAddress", "BreadcrumbList"]
    }
  },
  "ai_ready_blocks": [
    "plainLanguageSummary",
    "whoThisIsFor",
    "commonSituations",
    "whatAnLuatDoes",
    "requiredDocumentsPreview",
    "nextSteps",
    "relatedFaqs",
    "llmSummary"
  ],
  "critical_rules": [
    "Structured data must match visible content",
    "FAQ must be visible and human-reviewed before schema output",
    "Client proof requires publicationPermission=true",
    "Sanity content marked agentSafe can be used by Agent2UI",
    "No sensitive lead or case data in Sanity",
    "Old website URLs must be mapped to new routes via redirects"
  ]
}
```

---

# 37. Acceptance Criteria

```yaml id="acceptance-criteria"
acceptance_criteria:
  - id: AC001_public_content_only
    requirement: Sanity contains no lead, case summary, payment, booking or uploaded document data.

  - id: AC002_service_page_schema
    requirement: service_page schema supports legalArea, plainLanguageSummary, commonSituations, whatAnLuatDoes, requiredDocumentsPreview, CTA and FAQ references.

  - id: AC003_faq_human_review
    requirement: FAQ cannot be emitted into FAQPage JSON-LD unless humanReviewed=true and eligibleForFaqSchema=true.

  - id: AC004_structured_data_visible_match
    requirement: Structured data content must match visible page content.

  - id: AC005_redirect_migration
    requirement: Old An Luật URLs have redirect_rule mapping to new architecture.

  - id: AC006_agent_safe_content
    requirement: Agent2UI can only use content blocks where agentSafe=true or public published content explicitly allowed.

  - id: AC007_ai_ready_blocks
    requirement: Each published service page has plainLanguageSummary, commonSituations, whatAnLuatDoes and related next step CTA.

  - id: AC008_client_proof_permission
    requirement: client_proof cannot render publicly unless publicationPermission=true.

  - id: AC009_build_validation
    requirement: Build warns or fails for missing SEO, invalid FAQ schema, missing summary or unsafe client proof.

  - id: AC010_sanity_editor_structure
    requirement: Sanity Studio is organized by editorial workflow, not raw schema dump.
```

---

## 38. Final Decision

CMS của AnLuật.com phải được xây như một **structured content system**, không phải nơi nhập bài tự do rồi hy vọng Google, AI và người dùng tự hiểu.

> **Sanity là source of truth cho nội dung công khai; Supabase là source of truth cho dữ liệu vận hành và lead. Mọi trang dịch vụ phải có plain-language summary, FAQ có review, structured data bằng JSON-LD, redirect từ URL cũ, và content block đủ rõ để người đọc lẫn máy đọc được.**

Tài liệu tiếp theo, theo cách khoa học nhất, nên là:

# **Internal Operations / Secretary Workflow Spec**

Vì tới đây ta đã có UX, UI, tech stack, data model, Agent2UI và CMS. Phần còn thiếu là **đời thực vận hành**: thư ký nhận lead ra sao, phân loại thế nào, gọi lại mấy lần, conflict check, xử lý thanh toán trễ, đổi lịch, no-show, chuyển thành hồ sơ vụ việc. Nếu không viết phần này, website thông minh sẽ đổ lead vào một quy trình mù — tức là công nghệ mặc vest, vận hành đi dép tổ ong.

[1]: https://www.sanity.io/learn/course/day-one-with-sanity-studio/creating-a-schema?utm_source=chatgpt.com "Creating a schema - Day one content operations"
[2]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?utm_source=chatgpt.com "Introduction to structured data markup in Google Search"
[3]: https://schema.org/docs/full.html?utm_source=chatgpt.com "Full schema hierarchy"
[4]: https://developers.google.com/search/docs/appearance/structured-data/faqpage?utm_source=chatgpt.com "FAQ ( FAQPage , Question , Answer ) structured data"
[5]: https://developers.google.com/search/docs/appearance/structured-data/local-business?utm_source=chatgpt.com "Local Business (LocalBusiness) Structured Data"
[6]: https://developers.google.com/search/docs/appearance/structured-data/sd-policies?utm_source=chatgpt.com "General Structured Data Guidelines | Google Search Central"
[7]: https://schema.org/FAQPage?utm_source=chatgpt.com "FAQPage - Schema.org Type"

export type NavigationItem = {
  label: string;
  href: string;
};

export type PracticePageContent = {
  href: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  summary: string;
  intro: string;
  commonSituations: string[];
  supportScope: string[];
  strengths: string[];
  checklistTitle: string;
  checklistItems: string[];
  faq: Array<{ question: string; answer: string }>;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  relatedLinks?: Array<{ label: string; href: string }>;
};

export const mainNavigation: NavigationItem[] = [
  { label: '1 GIỜ GẶP NHƯ', href: '/1-gio-gap-nhu' },
  { label: 'Cá nhân', href: '/ca-nhan/gia-dinh-ly-hon' },
  { label: 'Lao động & Nhân sự', href: '/lao-dong-nhan-su' },
  { label: 'Doanh nghiệp', href: '/doanh-nghiep' },
  { label: 'Tranh tụng & Thu hồi nợ', href: '/tranh-tung-thu-hoi-no' },
  { label: 'Luật sư Quỳnh Như', href: '/luat-su-dinh-thi-quynh-nhu' },
  { label: 'Về An Luật', href: '/ve-an-luat' },
];

export const footerLinks: NavigationItem[] = [
  { label: '1 GIỜ GẶP NHƯ', href: '/1-gio-gap-nhu' },
  { label: 'Liên hệ', href: '/lien-he' },
  { label: 'Chuyện nghề', href: '/chuyen-nghe' },
  { label: 'Quyền riêng tư', href: '/quyen-rieng-tu' },
];

export const oneHourWithNhuContent = {
  outcomeChips: ['Rõ vấn đề', 'Rõ hồ sơ', 'Rõ bước tiếp theo'],
  suitableFor: [
    'Hiểu vấn đề của mình thuộc nhóm pháp lý nào.',
    'Biết nên chuẩn bị giấy tờ gì trước buổi trao đổi sâu hơn.',
    'Biết nên thương lượng, chờ thêm, gửi văn bản hay khởi kiện.',
    'Có định hướng riêng trước khi đưa ra quyết định lớn.',
  ],
  howItWorks: [
    {
      title: 'Bạn liên hệ với An Luật',
      body: 'Hiện website đang ưu tiên tiếp nhận qua hotline để thư ký ghi nhận đúng bối cảnh ban đầu và hướng dẫn kênh làm việc phù hợp.',
    },
    {
      title: 'An Luật xác nhận cách tiếp nhận',
      body: 'Nếu vụ việc cần rà soát thêm, thư ký hoặc luật sư sẽ hỏi rõ hơn trước khi đề xuất buổi gặp phù hợp.',
    },
    {
      title: 'Bạn chuẩn bị theo phiếu gợi ý',
      body: 'Các giấy tờ và mốc thời gian quan trọng sẽ được hướng dẫn trước để buổi trao đổi không bắt đầu từ con số 0.',
    },
    {
      title: 'Bạn gặp luật sư',
      body: 'Mục tiêu của buổi gặp là giúp bạn hiểu đúng vấn đề, biết hồ sơ nào quan trọng và xác định bước tiếp theo nên làm gì.',
    },
  ],
  notFor: [
    'Cam kết kết quả vụ việc.',
    'Thay thế toàn bộ quá trình đại diện hoặc tranh tụng.',
    'Xử lý hồ sơ phức tạp mà chưa có bước rà soát riêng.',
  ],
  checklist: [
    'Tóm tắt sự việc theo mốc thời gian.',
    'Danh sách các bên liên quan.',
    'Các giấy tờ, tin nhắn, email, hợp đồng hoặc chứng cứ đang có.',
    'Điều bạn muốn đạt được sau buổi tư vấn.',
    'Những thời hạn gấp nếu có: lịch tòa, hạn phản hồi, hạn thanh toán, hạn ký.',
  ],
};

export const founderProfile = {
  roleChips: ['Thành lập An Luật từ năm 2006', 'Đồng hành cùng cá nhân và doanh nghiệp', 'Tư vấn theo hướng rõ - đủ - bình tĩnh'],
  focusAreas: [
    'Hôn nhân gia đình, tài sản, thừa kế và các tình huống cần định hướng riêng.',
    'Lao động, nhân sự, kỷ luật, chấm dứt hợp đồng và tái cấu trúc lực lượng lao động.',
    'Doanh nghiệp, hợp đồng, quy chế nội bộ, kiểm soát rủi ro pháp lý và vận hành.',
    'Tranh tụng, tranh chấp kinh doanh thương mại và thu hồi nợ đúng luật.',
  ],
  workingStyle: [
    'Bắt đầu từ sự cởi mở để hiểu điều khách hàng thật sự đang lo.',
    'Giải thích vấn đề bằng ngôn ngữ đời thường trước khi đi sâu vào thuật ngữ pháp lý.',
    'Không hứa kết quả ngoài tầm kiểm soát, nhưng luôn giúp khách hàng nhìn rõ lựa chọn và rủi ro.',
    'Ưu tiên sự chuẩn bị kỹ trước khi bước vào đàm phán, khởi kiện hay quyết định lớn.',
  ],
  proofPoints: [
    'An Luật được thành lập bởi Luật sư Quỳnh Như từ năm 2006.',
    'Chi nhánh Bà Rịa - Vũng Tàu được mở từ năm 2020 để mở rộng khả năng hỗ trợ khách hàng.',
    'Kinh nghiệm đào tạo và phối hợp cùng các hiệp hội doanh nghiệp, khu công nghiệp và đơn vị đào tạo.',
    'Đồng thời giữ vai trò gương mặt tin cậy cho mảng tư vấn riêng 1 GIỜ GẶP NHƯ.',
  ],
};

export const contactFlow = [
  {
    title: 'Gọi hoặc nhắn trước với thư ký',
    body: 'Thư ký ghi nhận nhóm vấn đề, mức độ khẩn cấp và cách An Luật nên liên hệ lại. Bạn chưa cần kể toàn bộ vụ việc ngay trên cuộc gọi đầu tiên.',
  },
  {
    title: 'Xác nhận người phụ trách phù hợp',
    body: 'An Luật xem phạm vi công việc, xung đột lợi ích và mức độ nhạy cảm để xác định hướng tiếp nhận phù hợp.',
  },
  {
    title: 'Chuẩn bị cho buổi trao đổi tiếp theo',
    body: 'Nếu cần, An Luật sẽ hướng dẫn giấy tờ và mốc thời gian nên chuẩn bị để buổi làm việc tiếp theo đi đúng trọng tâm.',
  },
];

export const practicePages: PracticePageContent[] = [
  {
    href: '/ca-nhan/gia-dinh-ly-hon',
    navLabel: 'Cá nhân',
    eyebrow: 'Cá nhân & gia đình',
    title: 'Gia đình, ly hôn, tài sản và thừa kế',
    summary:
      'Phù hợp khi bạn đang rối chuyện hôn nhân, con cái, tài sản chung riêng, thừa kế hoặc tranh chấp dân sự phát sinh trong phạm vi gia đình.',
    intro:
      'Nhiều vụ việc gia đình không bắt đầu bằng hồ sơ dày, mà bắt đầu bằng một giai đoạn rất rối. Điều cần trước tiên thường là làm rõ sự việc, quyền lợi và điều gì nên chuẩn bị để tránh quyết định vội vàng.',
    commonSituations: [
      'Ly hôn, ly thân, quyền nuôi con, cấp dưỡng hoặc quyền thăm nom.',
      'Chia tài sản chung, xác định tài sản riêng, nghĩa vụ nợ hoặc góp vốn trong thời kỳ hôn nhân.',
      'Tranh chấp di sản thừa kế, di chúc, người thừa kế hoặc kê khai di sản.',
      'Tranh chấp dân sự về nhà đất, quyền sở hữu, truy nhận cha cho con hoặc quan hệ gia đình khác.',
    ],
    supportScope: [
      'Làm rõ bối cảnh pháp lý, quyền lợi và rủi ro của từng phương án.',
      'Soát lại mốc thời gian, giấy tờ đang có và giấy tờ còn thiếu.',
      'Định hướng khi nào nên thương lượng, khi nào nên gửi văn bản, khi nào cần chuẩn bị cho tranh tụng.',
      'Đề xuất lối vào phù hợp như 1 GIỜ GẶP NHƯ khi vụ việc cần một buổi trao đổi riêng trước.',
    ],
    strengths: [
      'Tiếp nhận bằng sự cởi mở để khách hàng không phải bắt đầu bằng một biểu mẫu dài.',
      'Giải thích bằng ngôn ngữ rõ ràng, không đẩy khách hàng vào cảm giác mơ hồ hơn sau buổi trao đổi.',
      'Không hứa kết quả, nhưng luôn giúp bạn nhìn rõ đâu là điều cần ưu tiên trước.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho mảng gia đình, tài sản, thừa kế',
    checklistItems: [
      'Giấy đăng ký kết hôn hoặc giấy tờ liên quan tình trạng hôn nhân nếu có.',
      'Giấy khai sinh của con nếu có vấn đề về quyền nuôi con, cấp dưỡng hoặc chăm sóc.',
      'Thông tin tài sản chung/riêng: nhà đất, xe, tài khoản, khoản vay, góp vốn.',
      'Các tin nhắn, email, biên bản hoặc giấy tờ thể hiện thỏa thuận hay mâu thuẫn.',
      'Mốc thời gian chính: kết hôn, phát sinh tài sản, ly thân, sự kiện quan trọng khác.',
    ],
    faq: [
      {
        question: 'Nếu tôi chưa đủ giấy tờ thì có nên liên hệ không?',
        answer:
          'Có. Bạn có thể bắt đầu bằng phần thông tin mình đang có. Một trong những giá trị của buổi trao đổi ban đầu là giúp bạn biết nên tìm và chuẩn bị tài liệu nào tiếp theo.',
      },
      {
        question: 'An Luật có nhận các vụ việc đang rất nhạy cảm không?',
        answer:
          'Có thể, nhưng các tình huống nhạy cảm cần được xác nhận cẩn trọng hơn về cách tiếp nhận, người phụ trách và mức độ bảo mật phù hợp.',
      },
    ],
    primaryCtaLabel: 'Tìm hiểu 1 GIỜ GẶP NHƯ',
    primaryCtaHref: '/1-gio-gap-nhu',
    secondaryCtaLabel: 'Liên hệ trực tiếp với An Luật',
    secondaryCtaHref: '/lien-he',
  },
  {
    href: '/lao-dong-nhan-su',
    navLabel: 'Lao động & Nhân sự',
    eyebrow: 'Lao động & nhân sự',
    title: 'Lao động, nhân sự và các quyết định cần làm đúng luật',
    summary:
      'Dành cho người lao động, bộ phận HR hoặc doanh nghiệp đang cần làm rõ hợp đồng lao động, nghỉ việc, kỷ luật, lương thưởng, bảo hiểm và quy trình nhân sự.',
    intro:
      'Quan hệ lao động luôn phức tạp vì đụng đồng thời đến quyền lợi, quy trình nội bộ và thời hạn pháp lý. Điểm mạnh của An Luật ở mảng này là kết hợp góc nhìn pháp luật với thực tế vận hành nhân sự.',
    commonSituations: [
      'Nghỉ việc, chấm dứt hợp đồng lao động, trợ cấp, lương thưởng hoặc bảo hiểm xã hội.',
      'Kỷ luật lao động, sa thải, tái cấu trúc nhân sự hoặc xử lý hiệu suất.',
      'Soạn thảo mẫu biểu, nội quy, thang bảng lương và quy trình sử dụng lao động.',
      'Tranh chấp giữa người lao động với doanh nghiệp hoặc khiếu nại phát sinh trong quá trình làm việc.',
    ],
    supportScope: [
      'Rà soát hồ sơ lao động, thông báo, quyết định và trao đổi nội bộ liên quan.',
      'Giúp xác định hướng đi phù hợp: thương lượng, khắc phục thủ tục, chuẩn bị hồ sơ hoặc xử lý tranh chấp.',
      'Hỗ trợ doanh nghiệp chuẩn hóa quy trình để giảm rủi ro pháp lý về sau.',
      'Đề xuất lộ trình làm việc phù hợp cho cá nhân, HR hoặc người quản lý.',
    ],
    strengths: [
      'An Luật xem mảng lao động - nhân sự là một lĩnh vực chuyên sâu trong suốt nhiều năm hoạt động.',
      'Có kinh nghiệm đào tạo, hội thảo và tư vấn cho doanh nghiệp, hiệp hội và khu công nghiệp.',
      'Khi tư vấn cho doanh nghiệp, An Luật luôn đặt mình vào cả góc nhìn người sử dụng lao động lẫn người lao động.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho mảng lao động & nhân sự',
    checklistItems: [
      'Hợp đồng lao động và phụ lục hợp đồng nếu có.',
      'Quyết định nghỉ việc, kỷ luật, sa thải hoặc thông báo từ công ty nếu có.',
      'Bảng lương, bảng chấm công, thông tin bảo hiểm hoặc hồ sơ nhân sự liên quan.',
      'Tin nhắn, email, biên bản họp hoặc trao đổi với công ty/người lao động.',
      'Mốc thời gian: ngày bắt đầu làm việc, thời điểm phát sinh tranh chấp, ngày nhận thông báo.',
    ],
    faq: [
      {
        question: 'Doanh nghiệp có thể liên hệ ngay cả khi muốn phòng ngừa chứ chưa có tranh chấp không?',
        answer:
          'Có. Nhiều rủi ro lao động phát sinh vì quy trình nội bộ không được chuẩn hóa từ trước. Việc rà soát sớm thường tiết kiệm hơn xử lý muộn.',
      },
      {
        question: 'Người lao động chưa chắc mình bị xử lý sai thì có nên trao đổi không?',
        answer:
          'Có. Một buổi trao đổi ban đầu có thể giúp bạn hiểu đúng quyền lợi, nghĩa vụ và hồ sơ nào nên giữ lại trước khi chọn bước tiếp theo.',
      },
    ],
    primaryCtaLabel: 'Liên hệ về vấn đề lao động',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Xem dịch vụ cho doanh nghiệp',
    secondaryCtaHref: '/doanh-nghiep',
  },
  {
    href: '/doanh-nghiep',
    navLabel: 'Doanh nghiệp',
    eyebrow: 'Doanh nghiệp đang vận hành',
    title: 'Doanh nghiệp cần giảm rủi ro pháp lý trước khi sự cố xảy ra',
    summary:
      'Trang này dành cho doanh nghiệp đang cần tư vấn pháp lý thường xuyên, hợp đồng, lao động - nhân sự, cổ đông, quy chế nội bộ hoặc một lần rà soát tổng thể để thấy rõ lỗ hổng pháp lý.',
    intro:
      'Website mới của An Luật không muốn chỉ liệt kê thật nhiều đầu việc pháp lý. Điều quan trọng hơn là giúp doanh nghiệp nhìn ra vùng rủi ro nào đang cần ưu tiên, và cách bắt đầu sao cho gọn nhưng đúng.',
    commonSituations: [
      'Cần rà soát hợp đồng, giao dịch với đối tác, quy trình phê duyệt hoặc trách nhiệm thực hiện nghĩa vụ.',
      'Cần xử lý chuyện cổ đông, góp vốn, điều lệ, quyền đại diện hoặc mâu thuẫn nội bộ.',
      'Cần chuẩn hóa hồ sơ lao động, quy chế, quy trình kỷ luật và tái cấu trúc nhân sự.',
      'Cần nhìn tổng thể xem doanh nghiệp đang hở rủi ro ở mảng nội bộ, lao động hay giao dịch.',
    ],
    supportScope: [
      'Tư vấn pháp lý thường xuyên cho hoạt động vận hành, nhân sự, hợp đồng và giao dịch.',
      'Soạn thảo, rà soát và điều chỉnh hợp đồng theo giao dịch thật của doanh nghiệp.',
      'Rà soát hoặc xây dựng quy chế, khung pháp lý nội bộ và chính sách tuân thủ.',
      'Hỗ trợ M&A, sở hữu trí tuệ, thu hồi nợ hoặc tranh chấp khi cần đi sâu hơn.',
    ],
    strengths: [
      'An Luật không đo giá trị bằng số lượng trang hợp đồng hay độ phức tạp của câu chữ, mà bằng mức độ doanh nghiệp hiểu và kiểm soát được giao dịch.',
      'Kinh nghiệm thực tế với doanh nghiệp trong vận hành, lao động, tranh chấp và đào tạo pháp lý nội bộ.',
      'Có thể đồng hành từ bước phòng ngừa đến bước xử lý tranh chấp nếu sự cố đã phát sinh.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho doanh nghiệp đang vận hành',
    checklistItems: [
      'Thông tin doanh nghiệp và người đại diện.',
      'Hợp đồng, phụ lục, báo giá, biên bản làm việc hoặc hồ sơ giao dịch liên quan.',
      'Tài liệu nội bộ liên quan: điều lệ, quy chế, thỏa thuận cổ đông/thành viên nếu có.',
      'Mục tiêu xử lý: phòng ngừa, thương lượng, rà soát, thu hồi, tái cấu trúc hay tranh chấp.',
      'Các thời hạn quan trọng: hạn ký, hạn thanh toán, hạn phản hồi, lịch họp.',
    ],
    faq: [
      {
        question: 'Doanh nghiệp nhỏ có cần rà soát pháp lý nội bộ không?',
        answer:
          'Có. Quy mô nhỏ không đồng nghĩa với ít rủi ro. Nhiều vấn đề lớn bắt đầu từ những thỏa thuận miệng, mẫu hợp đồng cũ hoặc hồ sơ nội bộ chưa được chuẩn hóa.',
      },
      {
        question: 'Nếu chỉ có một vấn đề cụ thể như hợp đồng hoặc nhân sự thì có cần làm gói tổng thể không?',
        answer:
          'Không nhất thiết. An Luật có thể bắt đầu từ đúng vấn đề đang cần giải quyết, rồi mới đề xuất có nên mở rộng sang rà soát tổng thể hay không.',
      },
    ],
    primaryCtaLabel: 'Liên hệ để trao đổi với An Luật',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Xem dịch vụ rà soát pháp lý nội bộ',
    secondaryCtaHref: '/doanh-nghiep/ra-soat-phap-ly-noi-bo',
    relatedLinks: [
      { label: 'Rà soát pháp lý nội bộ', href: '/doanh-nghiep/ra-soat-phap-ly-noi-bo' },
      { label: 'Tranh tụng & Thu hồi nợ', href: '/tranh-tung-thu-hoi-no' },
    ],
  },
  {
    href: '/doanh-nghiep/ra-soat-phap-ly-noi-bo',
    navLabel: 'Rà soát pháp lý nội bộ',
    eyebrow: 'Kiểm tra sức khỏe pháp lý doanh nghiệp',
    title: 'Rà soát pháp lý nội bộ để thấy lỗ hổng trước khi trả giá cho chúng',
    summary:
      'Một cuộc rà soát tốt không chỉ để “cho yên tâm”. Nó giúp doanh nghiệp nhìn rõ những vùng rủi ro tiềm ẩn trong nội bộ, lao động và giao dịch trước khi sự cố thật sự xảy ra.',
    intro:
      'An Luật xem rà soát pháp lý nội bộ như một bước kiểm tra sức khỏe tổng quát định kỳ cho doanh nghiệp. Mục tiêu là phát hiện sớm, giải thích dễ hiểu và cùng doanh nghiệp xây khung xử lý phù hợp với quy mô vận hành thực tế.',
    commonSituations: [
      'Doanh nghiệp phát triển nhanh nhưng hồ sơ nội bộ, quy trình ký kết và phân quyền chưa theo kịp.',
      'Có nhiều hợp đồng đang dùng nhưng không rõ mức độ an toàn hoặc tính thống nhất.',
      'Quan hệ lao động ngày càng phức tạp, trong khi nội quy, chính sách và hồ sơ nhân sự chưa được chuẩn hóa.',
      'Doanh nghiệp muốn biết mình đang hở rủi ro ở đâu trước khi đi vào giai đoạn tăng trưởng hoặc gọi vốn.',
    ],
    supportScope: [
      'Rà soát ba mảng chính: pháp lý nội bộ, quan hệ lao động và giao dịch với đối tác.',
      'Xác định điểm hở trong điều lệ, phân quyền, hồ sơ góp vốn, hợp đồng, nội quy, quy trình nhân sự hoặc giấy phép.',
      'Đề xuất thứ tự ưu tiên xử lý để doanh nghiệp không bị ngập trong một danh sách việc quá dài.',
      'Làm nền cho các bước tiếp theo như xây quy chế nội bộ, chuẩn hóa hợp đồng hoặc đào tạo pháp lý nội bộ.',
    ],
    strengths: [
      'An Luật đã triển khai dịch vụ này từ góc nhìn rất thực tế: vừa tư vấn, vừa làm việc với cơ quan chức năng, vừa đại diện doanh nghiệp khi tranh chấp xảy ra.',
      'Không chỉ chỉ ra lỗi, An Luật tập trung vào việc xây một khung pháp lý phù hợp với quy mô và đặc thù doanh nghiệp.',
      'Cách tiếp cận ưu tiên ngôn ngữ rõ ràng để người quản lý không phải dịch lại kết luận pháp lý thành việc vận hành.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho buổi rà soát pháp lý nội bộ',
    checklistItems: [
      'Danh sách hợp đồng mẫu doanh nghiệp đang dùng.',
      'Hồ sơ lao động, nội quy, quy chế lương thưởng nếu có.',
      'Hồ sơ công ty: điều lệ, góp vốn, cổ đông/thành viên, người đại diện.',
      'Thông tin về công nợ, khách hàng, nhà cung cấp hoặc tranh chấp đang tồn tại.',
      'Các giấy phép hoặc chứng nhận cần thiết cho ngành nghề kinh doanh.',
    ],
    faq: [
      {
        question: 'Rà soát pháp lý nội bộ có phải chỉ dành cho doanh nghiệp lớn không?',
        answer:
          'Không. Doanh nghiệp vừa và nhỏ càng nên rà soát sớm vì nhiều rủi ro tích tụ từ giai đoạn đầu rồi bộc lộ đúng lúc doanh nghiệp đang cần tăng tốc.',
      },
      {
        question: 'Doanh nghiệp có cần chuẩn bị toàn bộ hồ sơ ngay từ đầu không?',
        answer:
          'Không nhất thiết. An Luật có thể bắt đầu từ bộ hồ sơ cốt lõi đang có, sau đó hướng dẫn thêm những phần cần thu thập để đi sâu hơn.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về rà soát pháp lý',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại trang doanh nghiệp',
    secondaryCtaHref: '/doanh-nghiep',
  },
  {
    href: '/tranh-tung-thu-hoi-no',
    navLabel: 'Tranh tụng & Thu hồi nợ',
    eyebrow: 'Tranh chấp, kiện tụng, thu hồi nợ',
    title: 'Khi thương lượng không còn đủ, bạn cần một hướng xử lý đúng luật',
    summary:
      'Dành cho cá nhân hoặc doanh nghiệp đang cần thương lượng, thu hồi nợ, chuẩn bị tranh chấp hoặc đã bước vào quá trình làm việc với tòa án, trọng tài hay cơ quan có thẩm quyền.',
    intro:
      'Thu hồi nợ và tranh tụng là những mảng gắn với An Luật từ rất sớm. Điểm khó của các vụ việc này là vừa cần tốc độ, vừa cần kỷ luật về chứng cứ, chiến lược và kỳ vọng thực tế.',
    commonSituations: [
      'Khoản nợ kéo dài, nhiều lần hứa thanh toán nhưng không thực hiện.',
      'Tranh chấp hợp đồng, nghĩa vụ giao hàng, thanh toán hoặc thực hiện cam kết kinh doanh.',
      'Tranh chấp lao động, tranh chấp cổ đông hoặc mâu thuẫn nội bộ doanh nghiệp đã căng thẳng.',
      'Vụ việc đã liên quan đến tòa án, thi hành án hoặc cơ quan chức năng.',
    ],
    supportScope: [
      'Đánh giá hồ sơ, chứng cứ và xác định tình thế pháp lý hiện tại.',
      'Đề xuất hướng thương lượng, gửi văn bản, chuẩn bị khởi kiện hoặc tham gia quá trình giải quyết tranh chấp.',
      'Đại diện hoặc đồng hành trong quá trình thu hồi nợ, tranh tụng và thi hành án khi phù hợp.',
      'Giúp khách hàng nhìn rõ chi phí thời gian, tài liệu cần thiết và mức độ ưu tiên của từng bước.',
    ],
    strengths: [
      'Thu hồi nợ là một trong những dịch vụ được triển khai sớm và tạo dấu ấn cho An Luật trong nhiều năm hoạt động.',
      'Kinh nghiệm thực tiễn trong tranh tụng tại tòa và tranh chấp kinh doanh thương mại, lao động, cổ đông.',
      'Giữ nguyên tắc không hứa kết quả ngoài tầm kiểm soát, nhưng luôn giúp khách hàng chọn chiến lược ít mù mờ hơn.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho tranh chấp, kiện tụng, thu hồi nợ',
    checklistItems: [
      'Hợp đồng, đơn đặt hàng, biên bản giao nhận, hóa đơn hoặc chứng từ thanh toán.',
      'Tin nhắn, email hoặc văn bản yêu cầu thanh toán/thực hiện nghĩa vụ.',
      'Thông tin bên còn lại: cá nhân, công ty, người đại diện, địa chỉ nếu có.',
      'Tình trạng hiện tại: đang thương lượng, đã gửi văn bản, đã nộp hồ sơ hay đã có lịch làm việc.',
      'Số tiền, nghĩa vụ hoặc quyền lợi đang tranh chấp.',
    ],
    faq: [
      {
        question: 'Nếu tôi chưa muốn khởi kiện ngay thì An Luật có hỗ trợ không?',
        answer:
          'Có. Không phải vụ việc nào cũng nên bắt đầu bằng khởi kiện. Nhiều trường hợp cần đánh giá chứng cứ, văn bản hoặc thương lượng lại trước khi đi xa hơn.',
      },
      {
        question: 'Doanh nghiệp muốn giữ quan hệ làm ăn nhưng vẫn cần thu hồi nợ thì sao?',
        answer:
          'Đó là một bài toán thực tế. Hướng xử lý có thể cần cân bằng giữa áp lực pháp lý, cách giao tiếp với đối tác và khả năng thi hành về sau.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về tranh chấp hoặc công nợ',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Xem dịch vụ cho doanh nghiệp',
    secondaryCtaHref: '/doanh-nghiep',
  },
];

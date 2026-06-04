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

export type InsightArticle = {
  title: string;
  summary: string;
  href: string;
  category: string;
};

export type QuickAccessSection = {
  title: string;
  description: string;
  links: Array<{ label: string; href: string }>;
};

export const mainNavigation: NavigationItem[] = [
  { label: '1 GIỜ GẶP NHƯ', href: '/1-gio-gap-nhu' },
  { label: 'Cá nhân', href: '/ca-nhan' },
  { label: 'Lao động & Nhân sự', href: '/lao-dong-nhan-su' },
  { label: 'Doanh nghiệp', href: '/doanh-nghiep' },
  { label: 'Tranh tụng & Thu hồi nợ', href: '/tranh-tung-thu-hoi-no' },
  { label: 'Luật sư Quỳnh Như', href: '/luat-su-dinh-thi-quynh-nhu' },
  { label: 'Về An Luật', href: '/ve-an-luat' },
];

export const footerLinks: NavigationItem[] = [
  { label: '1 GIỜ GẶP NHƯ', href: '/1-gio-gap-nhu' },
  { label: 'Liên hệ', href: '/lien-he' },
  { label: 'Đào tạo', href: '/dao-tao' },
  { label: 'Về An Luật', href: '/ve-an-luat' },
  { label: 'Góc chia sẻ', href: '/goc-chia-se' },
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

export const insightArticles: InsightArticle[] = [
  {
    category: 'Cá nhân',
    title: 'Không phải mọi chuyện gia đình đều nên chờ đến lúc “đủ hồ sơ” mới đi hỏi luật sư.',
    summary:
      'Nhiều quyết định ở mảng gia đình, tài sản và thừa kế cần được nhìn sớm để tránh tự làm khó hồ sơ của chính mình.',
    href: '/ca-nhan/tai-san-thua-ke',
  },
  {
    category: 'Doanh nghiệp',
    title: 'Tư vấn pháp lý thường xuyên cho doanh nghiệp không phải là “có việc mới gọi”.',
    summary:
      'Khi pháp lý chỉ xuất hiện sau sự cố, doanh nghiệp thường phải trả giá bằng thời gian và những quyết định bị động hơn nhiều.',
    href: '/doanh-nghiep/tu-van-thuong-xuyen',
  },
  {
    category: 'Hợp đồng',
    title: 'Hợp đồng tốt không phải là hợp đồng dài. Hợp đồng tốt là hợp đồng các bên hiểu giống nhau trước khi ký.',
    summary:
      'Một bản hợp đồng rõ nghĩa và sát giao dịch thực tế thường giúp doanh nghiệp tránh tranh chấp hiệu quả hơn nhiều câu chữ phức tạp.',
    href: '/doanh-nghiep/hop-dong',
  },
  {
    category: 'Lao động',
    title: 'Nhiều tranh chấp lao động không bắt đầu ở tòa, mà bắt đầu từ hồ sơ và quy trình nội bộ.',
    summary:
      'Chuẩn hóa hợp đồng, kỷ luật, thang bảng lương và cách trao đổi là việc phòng ngừa rẻ hơn rất nhiều so với xử lý muộn.',
    href: '/lao-dong-nhan-su/doanh-nghiep-hr',
  },
  {
    category: 'Nội bộ doanh nghiệp',
    title: 'Quy chế nội bộ không phải để cất trong thư mục chung, mà để doanh nghiệp bớt va vào cùng một lỗi nhiều lần.',
    summary:
      'Quy chế rõ giúp doanh nghiệp giảm xung đột thẩm quyền, xử lý việc nhanh hơn và đỡ trả giá vì những “ngầm hiểu” đã không còn đúng.',
    href: '/doanh-nghiep/quy-che-noi-bo',
  },
  {
    category: 'Cổ đông',
    title: 'Mâu thuẫn cổ đông hiếm khi bùng lên chỉ vì một cuộc họp. Nó thường được nuôi lớn bởi các khoảng mờ tích lũy từ trước.',
    summary:
      'Điều lệ, góp vốn và quyền quyết định cần được rà soát sớm nếu doanh nghiệp muốn giữ cả cấu trúc lẫn nhịp vận hành.',
    href: '/doanh-nghiep/gop-von-co-dong',
  },
  {
    category: 'Tranh chấp',
    title: 'Thu hồi nợ đúng luật là bài toán vừa cần tốc độ, vừa cần giữ chứng cứ và đường lui.',
    summary:
      'Không phải khoản nợ nào cũng nên nhảy ngay vào khởi kiện; việc đánh giá hồ sơ và chiến lược thương lượng đúng lúc quan trọng không kém.',
    href: '/tranh-tung-thu-hoi-no/thu-hoi-no-thuong-luong',
  },
  {
    category: 'Đào tạo',
    title: 'Đào tạo pháp lý hiệu quả không phải là buổi học nhiều điều luật nhất, mà là buổi giúp đội ngũ bớt phạm lại cùng một lỗi.',
    summary:
      'Khi chương trình đào tạo bám đúng tình huống vận hành, nó thường trở thành điểm khởi đầu rất tốt cho việc chuẩn hóa nội bộ.',
    href: '/dao-tao/phap-ly-noi-bo',
  },
  {
    category: 'Tranh chấp',
    title: 'Tranh chấp lao động và tranh chấp cổ đông đều có điểm giống nhau: hồ sơ và quy trình thường quyết định cục diện sớm hơn cảm xúc.',
    summary:
      'Càng đọc lại hồ sơ và vị thế của mình sớm, doanh nghiệp càng có nhiều lựa chọn chiến lược hơn trước khi vụ việc đi quá xa.',
    href: '/tranh-tung-thu-hoi-no/tranh-chap-lao-dong',
  },
];

export const quickAccessSections: QuickAccessSection[] = [
  {
    title: 'Cá nhân',
    description: 'Các lối vào rõ nhất cho khách hàng cá nhân và gia đình.',
    links: [
      { label: 'Gia đình, ly hôn, tài sản', href: '/ca-nhan/gia-dinh-ly-hon' },
      { label: 'Tài sản & thừa kế', href: '/ca-nhan/tai-san-thua-ke' },
      { label: 'Tranh chấp dân sự', href: '/ca-nhan/tranh-chap-dan-su' },
      { label: 'Thu hồi nợ cá nhân', href: '/ca-nhan/thu-hoi-no-ca-nhan' },
    ],
  },
  {
    title: 'Doanh nghiệp',
    description: 'Những mảng doanh nghiệp thường cần đi sâu sớm.',
    links: [
      { label: 'Tư vấn thường xuyên', href: '/doanh-nghiep/tu-van-thuong-xuyen' },
      { label: 'Hợp đồng', href: '/doanh-nghiep/hop-dong' },
      { label: 'Góp vốn / cổ đông', href: '/doanh-nghiep/gop-von-co-dong' },
      { label: 'Quy chế nội bộ', href: '/doanh-nghiep/quy-che-noi-bo' },
      { label: 'Sở hữu trí tuệ', href: '/doanh-nghiep/so-huu-tri-tue' },
      { label: 'M&A / đầu tư', href: '/doanh-nghiep/ma-dau-tu' },
    ],
  },
  {
    title: 'Tranh chấp & đào tạo',
    description: 'Khi vụ việc đã căng hoặc tổ chức cần đi theo hướng phòng ngừa.',
    links: [
      { label: 'Thu hồi nợ / thương lượng', href: '/tranh-tung-thu-hoi-no/thu-hoi-no-thuong-luong' },
      { label: 'Tranh chấp kinh doanh', href: '/tranh-tung-thu-hoi-no/tranh-chap-kinh-doanh' },
      { label: 'Tranh chấp lao động', href: '/tranh-tung-thu-hoi-no/tranh-chap-lao-dong' },
      { label: 'Tranh chấp cổ đông', href: '/tranh-tung-thu-hoi-no/tranh-chap-co-dong' },
      { label: 'Đào tạo pháp lý nội bộ', href: '/dao-tao/phap-ly-noi-bo' },
      { label: 'Workshop / hội thảo', href: '/dao-tao/workshop-hoi-thao' },
    ],
  },
];

export const practicePages: PracticePageContent[] = [
  {
    href: '/ca-nhan',
    navLabel: 'Cá nhân',
    eyebrow: 'Cá nhân & gia đình',
    title: 'Cá nhân cần một điểm bắt đầu đủ bình tĩnh trước khi đi tiếp',
    summary:
      'Trang này dành cho người đang rối chuyện gia đình, tài sản, thừa kế, tranh chấp dân sự hoặc công nợ cá nhân và cần một nơi để nhìn rõ vấn đề trước khi quyết định.',
    intro:
      'Khi câu chuyện pháp lý gắn trực tiếp với gia đình, tiền bạc hoặc danh dự cá nhân, điều người ta cần đầu tiên thường không phải là một danh sách điều luật. Điều cần hơn là một lối vào rõ ràng, kín kẽ và giúp mình biết nên bắt đầu từ đâu.',
    commonSituations: [
      'Đang cân nhắc ly hôn, tranh chấp quyền nuôi con hoặc cần làm rõ tài sản chung riêng.',
      'Có mâu thuẫn về thừa kế, di chúc, nhà đất hoặc quyền sở hữu tài sản trong gia đình.',
      'Phát sinh tranh chấp dân sự nhưng chưa biết nên thương lượng, gửi văn bản hay chuẩn bị hồ sơ sâu hơn.',
      'Cần thu hồi một khoản nợ cá nhân nhưng không muốn tự đẩy mình vào cách làm rủi ro.',
    ],
    supportScope: [
      'Giúp xác định vụ việc đang nghiêng về nhóm gia đình, tài sản, dân sự hay công nợ cá nhân.',
      'Làm rõ giấy tờ nào quan trọng trước, giấy tờ nào có thể bổ sung sau.',
      'Đề xuất hướng đi phù hợp hơn với bối cảnh thật của từng người: gặp riêng, thương lượng hay chuẩn bị hồ sơ.',
      'Giữ nhịp trao đổi rõ ràng và kín kẽ cho những vụ việc nhạy cảm.',
    ],
    strengths: [
      'An Luật tiếp nhận các câu chuyện cá nhân bằng thái độ cởi mở, không ép khách hàng phải “nói cho đúng thuật ngữ”.',
      'Giải thích vấn đề bằng ngôn ngữ đời thường trước khi đi vào phân tích pháp lý sâu hơn.',
      'Giúp khách hàng nhìn rõ bước kế tiếp thay vì bị ngợp trong quá nhiều khả năng cùng lúc.',
    ],
    checklistTitle: 'Phiếu chuẩn bị chung cho khách hàng cá nhân',
    checklistItems: [
      'Tóm tắt sự việc theo mốc thời gian càng đơn giản càng tốt.',
      'Giấy tờ đang có trong tay: giấy tờ nhân thân, tài sản, hợp đồng, tin nhắn, email, biên nhận.',
      'Những bên liên quan chính và vai trò của họ trong câu chuyện.',
      'Điều bạn đang lo nhất hoặc điều bạn muốn đạt được sau buổi trao đổi đầu tiên.',
      'Các thời hạn gấp nếu có: lịch làm việc, hạn phản hồi, hạn nộp tài liệu.',
    ],
    faq: [
      {
        question: 'Tôi chưa biết vụ việc của mình thuộc mảng nào thì có sao không?',
        answer:
          'Không sao. Đây chính là lý do trang Cá nhân tồn tại: để bạn có một điểm bắt đầu trước khi phải tự phân loại câu chuyện của mình quá sớm.',
      },
      {
        question: 'An Luật có nhận những vụ việc rất nhạy cảm không?',
        answer:
          'Có thể, nhưng cách tiếp nhận sẽ được cân nhắc kỹ hơn về mức độ bảo mật, người phụ trách và nhịp làm việc phù hợp.',
      },
    ],
    primaryCtaLabel: 'Tìm hiểu 1 GIỜ GẶP NHƯ',
    primaryCtaHref: '/1-gio-gap-nhu',
    secondaryCtaLabel: 'Liên hệ trực tiếp với An Luật',
    secondaryCtaHref: '/lien-he',
    relatedLinks: [
      { label: 'Gia đình, ly hôn, tài sản và thừa kế', href: '/ca-nhan/gia-dinh-ly-hon' },
      { label: 'Tài sản & thừa kế', href: '/ca-nhan/tai-san-thua-ke' },
      { label: 'Tranh chấp dân sự', href: '/ca-nhan/tranh-chap-dan-su' },
      { label: 'Thu hồi nợ cá nhân', href: '/ca-nhan/thu-hoi-no-ca-nhan' },
    ],
  },
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
    relatedLinks: [
      { label: 'Tài sản & thừa kế', href: '/ca-nhan/tai-san-thua-ke' },
      { label: 'Tranh chấp dân sự', href: '/ca-nhan/tranh-chap-dan-su' },
      { label: 'Thu hồi nợ cá nhân', href: '/ca-nhan/thu-hoi-no-ca-nhan' },
    ],
  },
  {
    href: '/ca-nhan/tai-san-thua-ke',
    navLabel: 'Tài sản & thừa kế',
    eyebrow: 'Cá nhân & gia đình',
    title: 'Tài sản và thừa kế cần được nhìn bằng cả giấy tờ lẫn bối cảnh gia đình thật',
    summary:
      'Phù hợp khi bạn đang cần làm rõ tài sản chung riêng, di chúc, di sản thừa kế, kê khai di sản hoặc những mâu thuẫn về quyền sở hữu tài sản trong gia đình.',
    intro:
      'Tài sản và thừa kế là mảng rất dễ kéo theo cảm xúc, hiểu lầm và áp lực từ nhiều phía. Một bước rà lại hồ sơ và mốc thời gian sớm thường giúp tránh những quyết định vội hoặc những xung đột leo thang không cần thiết.',
    commonSituations: [
      'Có di chúc nhưng các bên hiểu khác nhau về nội dung hoặc hiệu lực.',
      'Không có di chúc và đang phát sinh mâu thuẫn về người thừa kế, phần di sản hoặc nghĩa vụ liên quan.',
      'Cần xác định tài sản là chung hay riêng trong hôn nhân hoặc trong phạm vi gia đình.',
      'Tranh chấp nhà đất, quyền sở hữu hoặc kê khai di sản chưa biết nên bắt đầu từ giấy tờ nào.',
    ],
    supportScope: [
      'Giúp sắp lại bức tranh tài sản, người liên quan và mốc thời gian quan trọng.',
      'Rà soát giấy tờ về quyền sở hữu, di chúc, quan hệ nhân thân và hồ sơ phát sinh liên quan.',
      'Đề xuất hướng làm việc phù hợp: trao đổi nội bộ, thương lượng, văn bản hay chuẩn bị cho tranh chấp.',
      'Làm rõ mục tiêu thực tế của khách hàng để tránh đi quá xa khi hồ sơ chưa đủ chín.',
    ],
    strengths: [
      'An Luật hiểu rằng tranh chấp tài sản và thừa kế hiếm khi chỉ là câu chuyện giấy tờ đơn thuần.',
      'Tư vấn theo hướng rõ ràng, kiên nhẫn và không đẩy khách hàng vào cảm giác phải quyết định quá nhanh.',
      'Kết hợp giữa phân tích hồ sơ với việc nhìn nhận tác động thật lên quan hệ gia đình.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho tài sản & thừa kế',
    checklistItems: [
      'Giấy tờ về tài sản: sổ đỏ, hợp đồng mua bán, giấy đăng ký, giấy tờ góp vốn hoặc tài liệu sở hữu khác.',
      'Di chúc, văn bản thỏa thuận, giấy tờ nhân thân, giấy khai sinh, đăng ký kết hôn nếu có liên quan.',
      'Danh sách người liên quan và mối quan hệ của họ với tài sản hoặc di sản.',
      'Các trao đổi trước đó giữa các bên: tin nhắn, email, biên bản họp, xác nhận chia tài sản.',
      'Những mốc thời gian chính: thời điểm hình thành tài sản, mất, mở thừa kế hoặc phát sinh tranh chấp.',
    ],
    faq: [
      {
        question: 'Không có di chúc thì có còn hướng xử lý rõ ràng không?',
        answer:
          'Có. Nhiều hồ sơ thừa kế vẫn có thể được phân tích và định hướng tốt ngay cả khi không có di chúc, miễn là thông tin về người liên quan và tài sản được làm rõ dần.',
      },
      {
        question: 'Tôi chỉ mới nghi ngờ có rủi ro về tài sản, chưa tranh chấp hẳn thì có nên liên hệ không?',
        answer:
          'Có. Với tài sản và thừa kế, chuẩn bị từ sớm thường giúp tránh được những bước đi khiến hồ sơ sau này khó hơn.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về tài sản / thừa kế',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại mục Cá nhân',
    secondaryCtaHref: '/ca-nhan',
  },
  {
    href: '/ca-nhan/tranh-chap-dan-su',
    navLabel: 'Tranh chấp dân sự',
    eyebrow: 'Cá nhân & gia đình',
    title: 'Tranh chấp dân sự không chỉ cần biết ai đúng, mà cần biết bước nào đáng làm trước',
    summary:
      'Trang này dành cho những tranh chấp dân sự về nghĩa vụ, tài sản, nhà đất hoặc quyền lợi cá nhân khi bạn cần đánh giá hồ sơ, mức độ rủi ro và đường đi phù hợp hơn.',
    intro:
      'Trong nhiều tranh chấp dân sự, khách hàng thường bị kéo giữa hai thái cực: hoặc chần chừ quá lâu, hoặc muốn làm thật mạnh ngay lập tức. Điều hữu ích hơn là nhìn lại hồ sơ để biết bước nào nên đi trước, bước nào chưa cần vội.',
    commonSituations: [
      'Mâu thuẫn về quyền sở hữu, sử dụng tài sản hoặc nghĩa vụ phát sinh giữa các cá nhân.',
      'Tranh chấp liên quan nhà đất, giấy tay, giao dịch dân sự hoặc thỏa thuận không được ghi nhận rõ.',
      'Một bên không thực hiện cam kết nhưng hồ sơ đang rời rạc, thiếu mốc thời gian hoặc thiếu chứng cứ.',
      'Bạn cần biết có nên thương lượng, gửi yêu cầu bằng văn bản hay chuẩn bị hồ sơ tranh tụng sâu hơn.',
    ],
    supportScope: [
      'Đọc lại hồ sơ và đặt chúng vào trình tự dễ hiểu để thấy điểm mạnh, điểm yếu.',
      'Xác định tài liệu nào đang có giá trị nhất và tài liệu nào còn thiếu.',
      'Đề xuất nhịp xử lý phù hợp giữa thương lượng, văn bản, làm việc trực tiếp hoặc bước pháp lý sâu hơn.',
      'Giúp bạn hiểu tác động về thời gian, chi phí và kỳ vọng thực tế của từng hướng đi.',
    ],
    strengths: [
      'An Luật ưu tiên làm rõ vấn đề thật trước khi khuyến nghị động tác pháp lý cụ thể.',
      'Giữ cách tư vấn bình tĩnh, không đẩy khách hàng vào tâm thế phải “đánh lớn” ngay.',
      'Kết hợp góc nhìn hồ sơ, tâm lý vụ việc và chiến lược đi tiếp.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho tranh chấp dân sự',
    checklistItems: [
      'Giấy tờ về tài sản, thỏa thuận, biên nhận, hợp đồng hoặc giấy viết tay nếu có.',
      'Các trao đổi giữa các bên: tin nhắn, email, ghi âm hợp lệ, biên bản làm việc.',
      'Tóm tắt mâu thuẫn chính: chuyện gì xảy ra, từ khi nào, điều bạn cho rằng bị vi phạm là gì.',
      'Thông tin bên còn lại và cách liên hệ hiện tại nếu có.',
      'Những bước đã thử trước đó: thương lượng, nhờ người hòa giải, gửi yêu cầu, làm việc với cơ quan nào đó.',
    ],
    faq: [
      {
        question: 'Tranh chấp dân sự có nhất thiết phải ra tòa không?',
        answer:
          'Không phải lúc nào cũng vậy. Có nhiều vụ việc cần đánh giá lại hồ sơ và cơ hội thương lượng trước khi cân nhắc bước tố tụng.',
      },
      {
        question: 'Nếu tôi cảm thấy mình đang yếu hồ sơ thì có nên trao đổi không?',
        answer:
          'Nên. Biết hồ sơ yếu ở đâu từ sớm vẫn tốt hơn nhiều so với việc tự suy đoán rồi lỡ những bước có thể bổ sung hoặc giữ chứng cứ.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về tranh chấp dân sự',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại mục Cá nhân',
    secondaryCtaHref: '/ca-nhan',
  },
  {
    href: '/ca-nhan/thu-hoi-no-ca-nhan',
    navLabel: 'Thu hồi nợ cá nhân',
    eyebrow: 'Cá nhân & gia đình',
    title: 'Thu hồi nợ cá nhân cần đủ tỉnh táo để đòi đúng cách và giữ đúng chứng cứ',
    summary:
      'Phù hợp khi bạn đang cần đòi lại tiền cho vay, tiền đặt cọc, tiền hàng hoặc các khoản phải trả giữa cá nhân với cá nhân mà chưa biết nên bắt đầu ra sao.',
    intro:
      'Công nợ giữa cá nhân thường đi kèm với sự quen biết, nể nang hoặc áp lực phải xử lý nhanh. Chính vì vậy, rất nhiều người bỏ lỡ thời điểm quan trọng để giữ chứng cứ hoặc chọn cách đòi nợ khiến mình rơi vào thế bất lợi hơn.',
    commonSituations: [
      'Cho vay tiền bằng giấy viết tay, chuyển khoản hoặc thỏa thuận miệng rồi bên kia không trả.',
      'Phát sinh công nợ do mua bán, đặt cọc, cộng tác hoặc nhờ giữ tiền giữa cá nhân với nhau.',
      'Đã nhiều lần nhắc nợ nhưng chỉ nhận được lời hứa kéo dài.',
      'Muốn biết nên thương lượng tiếp, gửi văn bản hay chuẩn bị hồ sơ sâu hơn.',
    ],
    supportScope: [
      'Rà soát lại chứng cứ nợ và khả năng chứng minh nghĩa vụ thanh toán.',
      'Đề xuất cách giao tiếp, thương lượng và tạo áp lực đúng luật.',
      'Giúp bạn hiểu nên chuẩn bị gì nếu vụ việc phải đi xa hơn.',
      'Giữ định hướng thực tế về thời gian, chi phí và khả năng thu hồi.',
    ],
    strengths: [
      'An Luật có kinh nghiệm lâu năm với các bài toán công nợ và thu hồi nợ đúng luật.',
      'Không cổ vũ các cách làm cảm tính hoặc tạo thêm rủi ro cho chính khách hàng.',
      'Giúp khách hàng cân bằng giữa mục tiêu thu tiền nhanh và việc giữ hồ sơ đủ chắc.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho thu hồi nợ cá nhân',
    checklistItems: [
      'Chứng từ thể hiện khoản nợ: giấy vay, chuyển khoản, tin nhắn xác nhận, biên nhận hoặc thỏa thuận.',
      'Thông tin người nợ: họ tên, số điện thoại, địa chỉ, mối quan hệ, tài khoản liên quan nếu có.',
      'Các trao đổi đòi nợ trước đó và phản hồi của bên còn nợ.',
      'Số tiền, thời hạn đã hứa trả và số lần trễ hạn.',
      'Điều bạn ưu tiên: thu nhanh, giữ quan hệ hay chuẩn bị đi tiếp bằng hướng pháp lý mạnh hơn.',
    ],
    faq: [
      {
        question: 'Chỉ có chuyển khoản và tin nhắn thì có đủ để bắt đầu trao đổi không?',
        answer:
          'Có thể có. Điều quan trọng là sắp lại toàn bộ chứng cứ đang có để đánh giá mức độ rõ ràng của nghĩa vụ và những gì còn thiếu.',
      },
      {
        question: 'Tôi sợ làm căng quá sẽ mất cơ hội lấy lại tiền thì sao?',
        answer:
          'Đó là lo lắng rất thực tế. Vì vậy việc chọn nhịp thương lượng và chuẩn bị hồ sơ song song thường quan trọng không kém việc “đòi mạnh” hay không.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về công nợ cá nhân',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại mục Cá nhân',
    secondaryCtaHref: '/ca-nhan',
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
      { label: 'Góp vốn / cổ đông', href: '/doanh-nghiep/gop-von-co-dong' },
      { label: 'Quy chế nội bộ', href: '/doanh-nghiep/quy-che-noi-bo' },
      { label: 'Rà soát pháp lý nội bộ', href: '/doanh-nghiep/ra-soat-phap-ly-noi-bo' },
      { label: 'Sở hữu trí tuệ', href: '/doanh-nghiep/so-huu-tri-tue' },
      { label: 'M&A / đầu tư', href: '/doanh-nghiep/ma-dau-tu' },
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
    href: '/lao-dong-nhan-su/nguoi-lao-dong',
    navLabel: 'Người lao động',
    eyebrow: 'Lao động & nhân sự',
    title: 'Dành cho người lao động cần hiểu đúng quyền lợi và bước đi tiếp theo',
    summary:
      'Phù hợp khi bạn đang gặp vấn đề về nghỉ việc, chấm dứt hợp đồng, lương thưởng, bảo hiểm, kỷ luật hoặc một quyết định nhân sự khiến bạn không chắc mình đang ở vị thế nào.',
    intro:
      'Nhiều người lao động tìm đến luật sư khi mọi thứ đã khá căng. Nhưng ngay cả trước khi tranh chấp đi xa, một buổi trao đổi đúng trọng tâm có thể giúp bạn biết giấy tờ nào nên giữ, điều gì nên nói và bước nào chưa nên vội.',
    commonSituations: [
      'Bạn nhận thông báo nghỉ việc, chấm dứt hợp đồng hoặc đề nghị thỏa thuận mà chưa hiểu hết hệ quả.',
      'Bạn bị xử lý kỷ luật, chuyển vị trí, cắt quyền lợi hoặc bị gây áp lực trong môi trường làm việc.',
      'Bạn gặp vấn đề về lương, trợ cấp, bảo hiểm xã hội, nghĩa vụ bồi thường hoặc thời giờ làm việc.',
      'Bạn muốn biết nên thương lượng, yêu cầu bằng văn bản hay chuẩn bị hồ sơ cho bước tiếp theo.',
    ],
    supportScope: [
      'Làm rõ quyền lợi, nghĩa vụ và điểm nào đang cần kiểm tra lại trong hồ sơ lao động.',
      'Xem xét hợp đồng, quyết định, email, tin nhắn hoặc biên bản liên quan.',
      'Định hướng cách chuẩn bị tài liệu và ứng xử phù hợp trước khi tranh chấp đi xa hơn.',
      'Xác định khi nào nên tiếp tục thương lượng, khi nào nên nhờ An Luật hỗ trợ sâu hơn.',
    ],
    strengths: [
      'Cách tiếp cận của An Luật ưu tiên giúp người lao động hiểu tình thế của mình trước, thay vì chỉ phản ứng theo cảm xúc.',
      'Giải thích bằng ngôn ngữ đời thường để bạn biết mình đang nắm gì và còn thiếu gì.',
      'Không hứa kết quả, nhưng giúp bạn bớt mù mờ trước những quyết định có thể ảnh hưởng lâu dài.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho người lao động',
    checklistItems: [
      'Hợp đồng lao động, phụ lục hợp đồng hoặc thỏa thuận thử việc nếu có.',
      'Thông báo, quyết định kỷ luật, nghỉ việc, điều chuyển hoặc các trao đổi từ công ty.',
      'Bảng lương, bảng chấm công, hồ sơ bảo hiểm hoặc chứng từ liên quan quyền lợi.',
      'Tin nhắn, email, biên bản họp hoặc ghi chú về các sự kiện quan trọng.',
      'Mốc thời gian: ngày vào làm, thời điểm phát sinh vấn đề, ngày nhận thông báo.',
    ],
    faq: [
      {
        question: 'Nếu tôi chỉ mới nghi ngờ quyền lợi của mình bị ảnh hưởng thì có nên liên hệ không?',
        answer:
          'Có. Giai đoạn “chưa chắc nhưng thấy có gì đó không ổn” thường là lúc hữu ích nhất để rà lại hồ sơ và cách chuẩn bị phản hồi.',
      },
      {
        question: 'Tôi chưa muốn đẩy sự việc lên mức tranh chấp thì sao?',
        answer:
          'Không phải bước đầu nào cũng cần đẩy vụ việc đi xa. Nhiều trường hợp cần hiểu đúng vị thế và chuẩn bị tài liệu trước khi chọn cách trao đổi phù hợp.',
      },
    ],
    primaryCtaLabel: 'Liên hệ để An Luật gọi lại',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại Lao động & Nhân sự',
    secondaryCtaHref: '/lao-dong-nhan-su',
  },
  {
    href: '/lao-dong-nhan-su/doanh-nghiep-hr',
    navLabel: 'Doanh nghiệp / HR',
    eyebrow: 'Lao động & nhân sự',
    title: 'Dành cho doanh nghiệp và HR cần xử lý nhân sự đúng luật nhưng vẫn vận hành được',
    summary:
      'Trang này phù hợp khi doanh nghiệp hoặc bộ phận HR đang cần chuẩn hóa hợp đồng, nội quy, kỷ luật, chấm dứt hợp đồng, tái cấu trúc hoặc giảm rủi ro lao động trước khi sự việc bùng lên.',
    intro:
      'Quan hệ lao động là nơi pháp lý và vận hành gặp nhau rất rõ. Nếu hồ sơ, quy trình và cách trao đổi không đi cùng nhau, doanh nghiệp thường rơi vào tình thế vừa mất người vừa tăng rủi ro.',
    commonSituations: [
      'Doanh nghiệp cần xử lý kỷ luật, chấm dứt hợp đồng hoặc cơ cấu lại nhân sự.',
      'Hồ sơ lao động, nội quy, thang bảng lương hoặc quy trình làm việc đang thiếu đồng bộ.',
      'Có tranh chấp, khiếu nại hoặc dấu hiệu bất ổn trong quan hệ lao động.',
      'HR cần một điểm tựa pháp lý rõ ràng để không phải tự xoay trong các tình huống nhạy cảm.',
    ],
    supportScope: [
      'Rà soát hồ sơ lao động, hợp đồng, nội quy và quy trình đang áp dụng.',
      'Đề xuất cách xử lý phù hợp cho từng tình huống kỷ luật, chấm dứt hoặc tái cấu trúc.',
      'Hỗ trợ chuẩn hóa mẫu biểu và quy trình để giảm rủi ro phát sinh về sau.',
      'Cùng doanh nghiệp cân bằng giữa tuân thủ pháp luật và thực tế vận hành nhân sự.',
    ],
    strengths: [
      'An Luật có kinh nghiệm dài với doanh nghiệp, HR và các chương trình đào tạo về quan hệ lao động.',
      'Không chỉ nhìn vào điều khoản pháp luật, mà còn nhìn vào khả năng doanh nghiệp thực sự triển khai được.',
      'Giúp doanh nghiệp bớt phụ thuộc vào những phản ứng chữa cháy mỗi khi có vấn đề nhân sự.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho doanh nghiệp / HR',
    checklistItems: [
      'Mẫu hợp đồng lao động, phụ lục, nội quy, quy chế lương thưởng hoặc kỷ luật.',
      'Thông báo, quyết định hoặc biên bản liên quan sự việc đang cần xử lý.',
      'Thông tin cơ cấu nhân sự, phòng ban, vị trí và tác động vận hành nếu có.',
      'Mốc thời gian quan trọng: ngày thông báo, hạn phản hồi, ngày dự kiến xử lý.',
      'Mục tiêu rõ của doanh nghiệp: xử lý một vụ việc cụ thể hay chuẩn hóa lại hệ thống.',
    ],
    faq: [
      {
        question: 'Doanh nghiệp có thể rà soát từ sớm trước khi xảy ra tranh chấp không?',
        answer:
          'Có. Đó thường là cách hiệu quả nhất để giảm rủi ro, nhất là khi doanh nghiệp đang tăng trưởng hoặc chuẩn bị thay đổi lớn về nhân sự.',
      },
      {
        question: 'HR có thể liên hệ ngay cả khi cần trao đổi kín trước với luật sư không?',
        answer:
          'Có. Bước đầu có thể chỉ là một cuộc trao đổi đủ ngắn để xác định phạm vi vấn đề và người phụ trách phù hợp.',
      },
    ],
    primaryCtaLabel: 'Trao đổi với An Luật về bài toán HR',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại Lao động & Nhân sự',
    secondaryCtaHref: '/lao-dong-nhan-su',
  },
  {
    href: '/doanh-nghiep/tu-van-thuong-xuyen',
    navLabel: 'Tư vấn thường xuyên',
    eyebrow: 'Doanh nghiệp',
    title: 'Tư vấn pháp lý thường xuyên để doanh nghiệp không chỉ gọi luật sư khi đã có sự cố',
    summary:
      'Đây là dịch vụ dành cho doanh nghiệp muốn có một đơn vị pháp lý đồng hành cùng hoạt động vận hành, để chủ động ngăn ngừa và loại bỏ rủi ro thay vì chỉ phản ứng khi vấn đề đã bùng lên.',
    intro:
      'Tư vấn pháp lý thường xuyên không phải là một chiếc hộp thư để “có việc thì hỏi”. Giá trị thật của nó nằm ở chỗ luật sư hiểu cách doanh nghiệp vận hành, nhìn ra điểm hở và hỗ trợ kịp thời trước khi rủi ro biến thành thiệt hại.',
    commonSituations: [
      'Doanh nghiệp cần người đồng hành để rà soát hợp đồng, xử lý phát sinh với đối tác hoặc kiểm tra quyết định nội bộ.',
      'CEO, founder hoặc quản lý đang phải tự cân đối quá nhiều quyết định mà thiếu điểm tựa pháp lý thường xuyên.',
      'Doanh nghiệp muốn có lộ trình tư vấn rõ ràng thay vì xử lý từng vụ việc rời rạc.',
      'Hoạt động kinh doanh thay đổi nhanh, kéo theo các vùng rủi ro mới ở nhân sự, cổ đông, công nợ hoặc giao dịch.',
    ],
    supportScope: [
      'Đồng hành theo nhịp hoạt động thực tế của doanh nghiệp thay vì chỉ nhận từng câu hỏi lẻ.',
      'Đưa ý kiến pháp lý chất lượng, phù hợp và tối ưu cho từng bối cảnh cụ thể.',
      'Chủ động rà soát các điểm có nguy cơ phát sinh tranh chấp hoặc vi phạm.',
      'Kết nối với các dịch vụ sâu hơn của An Luật khi doanh nghiệp cần đi vào hợp đồng, nhân sự, tranh chấp hoặc M&A.',
    ],
    strengths: [
      'An Luật đã triển khai dịch vụ này nhiều năm và xem đây là một trong những năng lực cốt lõi cho doanh nghiệp đang vận hành.',
      'Không chỉ trả lời câu hỏi, mà còn xây lộ trình tư vấn phù hợp với từng doanh nghiệp.',
      'Ưu tiên sự am hiểu doanh nghiệp đang tư vấn để lời khuyên không bị chung chung.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho tư vấn pháp lý thường xuyên',
    checklistItems: [
      'Mô tả ngắn về doanh nghiệp, lĩnh vực hoạt động và quy mô hiện tại.',
      'Những nhóm vấn đề đang phát sinh nhiều nhất: hợp đồng, nhân sự, công nợ, cổ đông, giấy phép hoặc vận hành.',
      'Các hồ sơ nội bộ hoặc mẫu tài liệu doanh nghiệp đang sử dụng.',
      'Kỳ vọng của doanh nghiệp: phản hồi tình huống, rà soát định kỳ hay xây lộ trình pháp lý.',
      'Những thời điểm hoặc quyết định lớn sắp tới mà doanh nghiệp muốn chuẩn bị trước.',
    ],
    faq: [
      {
        question: 'Tư vấn thường xuyên có phù hợp với doanh nghiệp vừa và nhỏ không?',
        answer:
          'Có. Quy mô không phải là tiêu chí duy nhất. Quan trọng là doanh nghiệp có nhiều quyết định pháp lý lặp lại và muốn xử lý chủ động hơn.',
      },
      {
        question: 'Nếu doanh nghiệp mới chỉ cần hỗ trợ ở vài mảng, có bắt buộc mở rộng toàn bộ không?',
        answer:
          'Không. An Luật có thể bắt đầu từ những mảng phát sinh nhiều nhất rồi điều chỉnh phạm vi đồng hành theo thực tế.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về tư vấn thường xuyên',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại trang Doanh nghiệp',
    secondaryCtaHref: '/doanh-nghiep',
  },
  {
    href: '/doanh-nghiep/hop-dong',
    navLabel: 'Hợp đồng',
    eyebrow: 'Doanh nghiệp',
    title: 'Hợp đồng không chỉ để ký cho xong, mà để các bên hiểu giống nhau trước khi có tranh chấp',
    summary:
      'Trang này dành cho doanh nghiệp cần soạn thảo hoặc rà soát hợp đồng dựa trên giao dịch thật, ngành nghề thật và những rủi ro thật có thể phát sinh sau khi ký.',
    intro:
      'An Luật không xem hợp đồng là cuộc đua về số trang hay mức độ khó hiểu. Hợp đồng tốt là hợp đồng diễn đạt đúng thỏa thuận, dự liệu được rủi ro và giúp các bên hiểu giống nhau ngay từ đầu.',
    commonSituations: [
      'Doanh nghiệp đang dùng mẫu hợp đồng cũ, dịch từ nguồn khác hoặc không còn sát giao dịch thực tế.',
      'Một giao dịch mới có nhiều điểm thương lượng nhưng chưa biết điều khoản nào cần giữ chặt.',
      'Doanh nghiệp từng có tranh chấp và muốn chỉnh lại cách soạn hợp đồng để không lặp lại.',
      'Bộ phận kinh doanh cần một bản hợp đồng vừa rõ để dùng, vừa đủ chặt để bảo vệ lợi ích.',
    ],
    supportScope: [
      'Soạn thảo hoặc rà soát hợp đồng theo đúng loại giao dịch và ngành nghề doanh nghiệp đang làm.',
      'Giúp dự liệu tình huống có thể phát sinh và cách thể hiện điều khoản rõ hơn.',
      'Làm rõ quyền, nghĩa vụ, điều kiện thanh toán, vi phạm, bồi thường và cơ chế giải quyết tranh chấp.',
      'Cân bằng giữa độ chặt pháp lý và khả năng sử dụng thực tế của doanh nghiệp.',
    ],
    strengths: [
      'An Luật có kinh nghiệm song hành cùng nhiều giao dịch của khách hàng trong kinh doanh thương mại.',
      'Không dùng số trang hay ngôn ngữ rối rắm để tạo cảm giác chuyên môn.',
      'Tập trung vào việc các bên hiểu tường tận nội dung mình đang cam kết.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho soạn thảo / rà soát hợp đồng',
    checklistItems: [
      'Bản hợp đồng hiện có, phụ lục hoặc các mẫu đang sử dụng nếu có.',
      'Tóm tắt giao dịch thật: ai là bên tham gia, hàng hóa/dịch vụ gì, mốc thanh toán, trách nhiệm thực hiện.',
      'Những điều doanh nghiệp đang lo nhất: giao hàng, thanh toán, phạt vi phạm, bồi thường, chấm dứt, bảo mật.',
      'Bài học từ các giao dịch trước hoặc tranh chấp đã từng xảy ra nếu có.',
      'Thời điểm cần hoàn thành hợp đồng hoặc vòng thương lượng tiếp theo.',
    ],
    faq: [
      {
        question: 'Nếu hai bên đã chốt gần hết điều khoản, còn cần luật sư rà soát không?',
        answer:
          'Có thể rất nên. Nhiều rủi ro nằm ở cách diễn đạt và mối liên hệ giữa các điều khoản, chứ không chỉ ở việc “đã có đủ mục chưa”.',
      },
      {
        question: 'An Luật có soạn lại toàn bộ hay chỉ rà soát những phần cần sửa?',
        answer:
          'Tùy tình trạng tài liệu hiện tại. Có trường hợp chỉ cần tinh chỉnh, nhưng cũng có lúc nên làm lại gọn hơn để tránh chắp vá quá nhiều.',
      },
    ],
    primaryCtaLabel: 'Liên hệ về hợp đồng',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại trang Doanh nghiệp',
    secondaryCtaHref: '/doanh-nghiep',
  },
  {
    href: '/doanh-nghiep/gop-von-co-dong',
    navLabel: 'Góp vốn / cổ đông',
    eyebrow: 'Doanh nghiệp',
    title: 'Góp vốn và cổ đông chỉ thực sự an toàn khi quyền, vai trò và đường lui đều rõ',
    summary:
      'Trang này dành cho doanh nghiệp hoặc founder đang cần làm rõ điều lệ, góp vốn, quyền cổ đông/thành viên, người đại diện và các mâu thuẫn nội bộ dễ leo thang nếu để kéo dài.',
    intro:
      'Nhiều vấn đề cổ đông không nổ ra ngay từ đầu, mà tích tụ dần qua những thỏa thuận chưa chặt, vai trò chưa rõ và kỳ vọng không còn giống nhau. Một bước rà lại điều lệ, hồ sơ góp vốn và quyền quyết định đúng lúc có thể giúp doanh nghiệp giữ được cả cấu trúc lẫn nhịp vận hành.',
    commonSituations: [
      'Founder hoặc thành viên góp vốn đang có cách hiểu khác nhau về quyền, nghĩa vụ hoặc tỷ lệ sở hữu.',
      'Điều lệ, thỏa thuận cổ đông hoặc hồ sơ góp vốn không còn phản ánh đúng tình trạng vận hành hiện tại.',
      'Phát sinh mâu thuẫn về người đại diện, quyền ký, quyền quản lý hoặc cơ chế thông qua quyết định.',
      'Doanh nghiệp muốn xử lý từ sớm trước khi mâu thuẫn chuyển thành tranh chấp cổ đông thật sự.',
    ],
    supportScope: [
      'Rà soát điều lệ, hồ sơ góp vốn, cơ cấu sở hữu và các thỏa thuận giữa các bên.',
      'Làm rõ những điểm đang mâu thuẫn về quyền quyết định, quyền quản lý, chuyển nhượng hoặc trách nhiệm.',
      'Đề xuất hướng sửa đổi, thương lượng nội bộ hoặc chuẩn bị hồ sơ nếu tranh chấp có nguy cơ bùng lên.',
      'Giúp doanh nghiệp nhìn vấn đề dưới cả góc độ pháp lý lẫn ổn định vận hành.',
    ],
    strengths: [
      'An Luật không xem câu chuyện cổ đông chỉ là bài toán giấy tờ, mà là bài toán quyền lực, trách nhiệm và đường dài của doanh nghiệp.',
      'Có kinh nghiệm tư vấn cho doanh nghiệp đang vận hành nên hiểu tác động thực tế của mâu thuẫn nội bộ.',
      'Ưu tiên làm rõ và tháo nút thắt sớm trước khi doanh nghiệp bị kéo vào tranh chấp kéo dài.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho góp vốn / cổ đông',
    checklistItems: [
      'Điều lệ công ty, đăng ký doanh nghiệp và các thay đổi gần nhất nếu có.',
      'Hồ sơ góp vốn, chuyển nhượng, thỏa thuận cổ đông/thành viên hoặc cam kết nội bộ liên quan.',
      'Thông tin về cơ cấu sở hữu hiện tại và cách phân chia vai trò điều hành thực tế.',
      'Biên bản họp, nghị quyết, email, tin nhắn hoặc các trao đổi thể hiện mâu thuẫn.',
      'Mục tiêu ưu tiên: làm rõ quyền, sửa cấu trúc, thương lượng tiếp hay chuẩn bị cho tình huống xấu hơn.',
    ],
    faq: [
      {
        question: 'Nếu mâu thuẫn mới ở mức âm ỉ, chưa tranh chấp công khai thì có nên rà soát không?',
        answer:
          'Có. Với câu chuyện cổ đông, xử lý sớm khi các bên còn nói chuyện được thường hiệu quả hơn rất nhiều so với lúc mọi thứ đã đổ vỡ.',
      },
      {
        question: 'Doanh nghiệp chưa có thỏa thuận cổ đông riêng thì có cách nào bổ sung không?',
        answer:
          'Có thể. Trước hết cần nhìn lại điều lệ, tình trạng vận hành và mối quan hệ giữa các bên để xác định tài liệu nào nên được thiết kế thêm.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về góp vốn / cổ đông',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại trang Doanh nghiệp',
    secondaryCtaHref: '/doanh-nghiep',
  },
  {
    href: '/doanh-nghiep/quy-che-noi-bo',
    navLabel: 'Quy chế nội bộ',
    eyebrow: 'Doanh nghiệp',
    title: 'Quy chế nội bộ không chỉ để “cho có”, mà để doanh nghiệp vận hành trên một nền rõ ràng',
    summary:
      'Phù hợp khi doanh nghiệp cần xây dựng hoặc chỉnh lại quy chế nội bộ, cơ chế phê duyệt, bảo mật, ủy quyền, phối hợp phòng ban hoặc các nguyên tắc tuân thủ cơ bản.',
    intro:
      'Khi doanh nghiệp lớn lên, những thỏa thuận miệng và cách làm ngầm hiểu thường không còn đủ. Quy chế nội bộ tốt không làm bộ máy nặng hơn; ngược lại, nó giúp mọi người biết mình được làm gì, phải chịu trách nhiệm đến đâu và tránh lặp lại những va chạm tốn kém.',
    commonSituations: [
      'Doanh nghiệp tăng quy mô nhưng chưa có hoặc chưa cập nhật quy chế nội bộ cho phù hợp.',
      'Các phòng ban đang xử lý công việc theo thói quen khác nhau, thiếu chuẩn chung.',
      'Cần làm rõ cơ chế phê duyệt, ký kết, ủy quyền, bảo mật dữ liệu hoặc phối hợp nội bộ.',
      'Đã phát sinh sai sót hoặc mâu thuẫn và doanh nghiệp muốn bịt lại lỗ hổng vận hành từ gốc.',
    ],
    supportScope: [
      'Rà soát quy chế, nội quy, quy trình hiện có và mức độ còn phù hợp với vận hành thực tế.',
      'Hỗ trợ xây dựng hoặc điều chỉnh quy chế theo đúng loại hình, quy mô và nhu cầu quản trị.',
      'Làm rõ mối liên hệ giữa quy chế nội bộ với lao động, hợp đồng, phê duyệt và tuân thủ pháp luật.',
      'Đề xuất cách triển khai để tài liệu không chỉ đẹp trên giấy mà còn dùng được trong thực tế.',
    ],
    strengths: [
      'An Luật nhìn quy chế nội bộ như một phần của sức khỏe pháp lý doanh nghiệp, không phải một bộ tài liệu tách rời.',
      'Có kinh nghiệm nối quy chế với các vấn đề thường gặp ở nhân sự, hợp đồng và phân quyền nội bộ.',
      'Ưu tiên tính dùng được, chứ không biến quy chế thành một bộ giấy tờ khó sống cùng doanh nghiệp.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho quy chế nội bộ',
    checklistItems: [
      'Các quy chế, quy trình, nội quy hoặc tài liệu nội bộ đang dùng hiện nay.',
      'Sơ đồ tổ chức, phân quyền, thẩm quyền ký hoặc cơ chế phối hợp phòng ban nếu có.',
      'Những nhóm vấn đề đang lặp lại: chậm phê duyệt, sai thẩm quyền, lộ thông tin, xung đột trách nhiệm.',
      'Các mẫu biểu hoặc luồng công việc nội bộ đang gây nhiều vướng mắc nhất.',
      'Mục tiêu kỳ vọng: chuẩn hóa, giảm rủi ro, hỗ trợ tăng trưởng hay xử lý hậu quả của một sự cố đã xảy ra.',
    ],
    faq: [
      {
        question: 'Doanh nghiệp nhỏ có cần quy chế nội bộ không?',
        answer:
          'Có, nhưng mức độ và cách thiết kế sẽ khác. Quy chế tốt là quy chế vừa đủ với quy mô hiện tại nhưng không quá sơ sài để rồi vỡ ra khi doanh nghiệp tăng tốc.',
      },
      {
        question: 'Có thể chỉ sửa một vài quy chế quan trọng trước không?',
        answer:
          'Hoàn toàn có thể. Nhiều doanh nghiệp nên bắt đầu từ các điểm nóng trước, rồi mới mở rộng sang bộ tài liệu đầy đủ hơn.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về quy chế nội bộ',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại trang Doanh nghiệp',
    secondaryCtaHref: '/doanh-nghiep',
  },
  {
    href: '/doanh-nghiep/so-huu-tri-tue',
    navLabel: 'Sở hữu trí tuệ',
    eyebrow: 'Doanh nghiệp',
    title: 'Sở hữu trí tuệ cần được hiểu sớm để doanh nghiệp không mất quyền ngay trên tài sản của mình',
    summary:
      'Trang này dành cho doanh nghiệp đang cần xác lập, rà soát hoặc bảo vệ quyền sở hữu trí tuệ liên quan đến thương hiệu, nhãn hiệu, sáng tạo, nội dung hoặc tài sản vô hình khác.',
    intro:
      'Rất nhiều doanh nghiệp chỉ nghĩ tới sở hữu trí tuệ khi đã có tranh chấp hoặc khi thương hiệu bắt đầu có giá trị rõ rệt. Nhưng càng để muộn, chi phí sửa sai và bảo vệ quyền càng cao. Điều quan trọng là biết tài sản nào cần bảo vệ trước, bằng cách nào và trong khung thời gian nào.',
    commonSituations: [
      'Doanh nghiệp muốn đăng ký, rà soát hoặc củng cố quyền đối với nhãn hiệu, tên thương mại hoặc nhận diện thương hiệu.',
      'Phát sinh nghi ngờ bị xâm phạm quyền hoặc đang dùng tài sản trí tuệ có rủi ro.',
      'Cần làm rõ quyền sở hữu đối với nội dung, thiết kế, sản phẩm sáng tạo hoặc tài sản vô hình trong hợp tác.',
      'Doanh nghiệp muốn đưa sở hữu trí tuệ vào khung vận hành bài bản hơn thay vì xử lý chắp vá.',
    ],
    supportScope: [
      'Giúp xác định nhóm tài sản trí tuệ nào đang cần ưu tiên và mức độ bảo vệ phù hợp.',
      'Rà soát tình trạng quyền, giấy tờ, hợp đồng và rủi ro liên quan đến sử dụng hoặc khai thác tài sản.',
      'Đề xuất hướng xác lập, quản lý hoặc bảo vệ quyền theo nhu cầu thực tế của doanh nghiệp.',
      'Kết nối câu chuyện sở hữu trí tuệ với hợp đồng, nhân sự, hợp tác kinh doanh và tranh chấp nếu có.',
    ],
    strengths: [
      'An Luật tiếp cận sở hữu trí tuệ theo góc nhìn vận hành và thương mại, không chỉ như một thủ tục rời rạc.',
      'Hiểu rằng doanh nghiệp cần cân đối giữa bảo vệ quyền, chi phí và tốc độ triển khai công việc.',
      'Có thể đồng hành từ khâu nhận diện rủi ro đến xử lý khi quyền đã bị xâm phạm.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho sở hữu trí tuệ',
    checklistItems: [
      'Danh sách thương hiệu, nhãn hiệu, tài sản sáng tạo hoặc nội dung doanh nghiệp muốn bảo vệ.',
      'Giấy tờ đăng ký, hồ sơ sử dụng, hợp đồng thuê thiết kế, chuyển giao hoặc hợp tác liên quan nếu có.',
      'Thông tin về việc sử dụng thực tế: ở đâu, bởi ai, từ khi nào, trong phạm vi nào.',
      'Những dấu hiệu rủi ro đang thấy: bị sao chép, tranh chấp tên, không rõ quyền sở hữu hoặc xung đột hợp tác.',
      'Mục tiêu chính: xác lập quyền, rà soát an toàn hay xử lý một rủi ro đã phát sinh.',
    ],
    faq: [
      {
        question: 'Doanh nghiệp mới có cần quan tâm sở hữu trí tuệ sớm không?',
        answer:
          'Rất nên. Có những bước bảo vệ sớm giúp doanh nghiệp tránh mất rất nhiều công sức khi thương hiệu bắt đầu phát triển nhanh hơn.',
      },
      {
        question: 'Nếu chưa chắc tài sản của mình có đủ điều kiện bảo vệ không thì sao?',
        answer:
          'Đó là lúc nên rà soát. Mục tiêu đầu tiên không phải lúc nào cũng là đăng ký ngay, mà là hiểu đúng mình đang có gì và nên ưu tiên cái gì trước.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về sở hữu trí tuệ',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại trang Doanh nghiệp',
    secondaryCtaHref: '/doanh-nghiep',
  },
  {
    href: '/doanh-nghiep/ma-dau-tu',
    navLabel: 'M&A / đầu tư',
    eyebrow: 'Doanh nghiệp',
    title: 'M&A và đầu tư cần đủ tỉnh táo để thấy rủi ro trước khi chốt giao dịch',
    summary:
      'Phù hợp khi doanh nghiệp hoặc nhà đầu tư cần rà soát tình trạng pháp lý, chuẩn bị giao dịch mua bán - sáp nhập, chuyển nhượng hoặc đánh giá rủi ro trước một quyết định đầu tư.',
    intro:
      'Những giao dịch mua bán, sáp nhập hoặc đầu tư không chỉ là câu chuyện giá trị thương mại. Hồ sơ pháp lý, cấu trúc sở hữu, nghĩa vụ đang treo và cách chuyển giao quyền mới là phần quyết định giao dịch có đi được tới đích hay không.',
    commonSituations: [
      'Nhà đầu tư muốn rà soát tình trạng pháp lý doanh nghiệp mục tiêu trước khi ra quyết định.',
      'Doanh nghiệp cần chuẩn bị cho giao dịch chuyển nhượng, sáp nhập hoặc tái cấu trúc sở hữu.',
      'Các bên đang thương lượng nhưng chưa rõ rủi ro nằm ở đâu trong hồ sơ pháp lý hiện tại.',
      'Cần một luật sư giúp nối câu chuyện đầu tư với hợp đồng, cổ đông, lao động và thủ tục liên quan.',
    ],
    supportScope: [
      'Rà soát tình trạng pháp lý, cấu trúc sở hữu và những nghĩa vụ có thể ảnh hưởng đến giao dịch.',
      'Hỗ trợ nhìn ra các vùng rủi ro cần thương lượng hoặc xử lý trước khi chốt.',
      'Đề xuất bước đi phù hợp trong quá trình chuẩn bị, thương lượng và chuyển giao.',
      'Giúp doanh nghiệp hoặc nhà đầu tư có cái nhìn thực tế hơn về nhịp độ và mức độ phức tạp của giao dịch.',
    ],
    strengths: [
      'An Luật kết hợp kinh nghiệm tư vấn doanh nghiệp vận hành với góc nhìn giao dịch để đọc rủi ro toàn diện hơn.',
      'Không đẩy giao dịch đi quá nhanh khi nền hồ sơ còn nhiều khoảng mờ.',
      'Ưu tiên giúp khách hàng ra quyết định tỉnh táo thay vì chỉ làm thủ tục cho xong.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho M&A / đầu tư',
    checklistItems: [
      'Thông tin sơ bộ về doanh nghiệp mục tiêu hoặc giao dịch đang dự kiến thực hiện.',
      'Điều lệ, đăng ký doanh nghiệp, hồ sơ góp vốn, thay đổi sở hữu và các tài liệu pháp lý chính.',
      'Các hợp đồng, nghĩa vụ, tranh chấp, công nợ hoặc ràng buộc đang tồn tại nếu đã biết.',
      'Mốc thời gian dự kiến của giao dịch và những bước thương lượng đang diễn ra.',
      'Mục tiêu của bên liên hệ: mua, bán, nhận đầu tư, thoái vốn hay tái cấu trúc.',
    ],
    faq: [
      {
        question: 'Có cần rà soát pháp lý khi giao dịch vẫn còn ở giai đoạn thăm dò không?',
        answer:
          'Có thể rất nên. Rà sớm giúp các bên biết chỗ nào cần hỏi kỹ hơn, chỗ nào chưa nên cam kết quá nhanh.',
      },
      {
        question: 'M&A có phải chỉ phù hợp với doanh nghiệp lớn không?',
        answer:
          'Không. Giao dịch có thể ở nhiều quy mô khác nhau; điều quan trọng là cách đánh giá rủi ro phải tương xứng với mức độ ảnh hưởng của quyết định đó.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về M&A / đầu tư',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại trang Doanh nghiệp',
    secondaryCtaHref: '/doanh-nghiep',
  },
  {
    href: '/tranh-tung-thu-hoi-no/thu-hoi-no-thuong-luong',
    navLabel: 'Thu hồi nợ / thương lượng',
    eyebrow: 'Tranh tụng & thu hồi nợ',
    title: 'Thu hồi nợ đúng luật, giữ chứng cứ và giữ cả đường lui nếu còn cần',
    summary:
      'Phù hợp khi bạn hoặc doanh nghiệp đang cần thu hồi khoản nợ khó đòi, muốn đánh giá nên thương lượng thế nào, gửi văn bản ra sao hay chuẩn bị cho bước khởi kiện và thi hành án khi cần.',
    intro:
      'Thu hồi nợ là một trong những dịch vụ gắn với An Luật từ rất sớm. Điểm khó không chỉ nằm ở số tiền, mà ở cách sắp chiến lược: gây đủ áp lực, giữ đủ chứng cứ và không tự đẩy mình vào thế khó hơn về sau.',
    commonSituations: [
      'Đối tác hoặc bên vay liên tục hứa thanh toán nhưng không thực hiện.',
      'Chứng từ giao dịch có nhưng đang rời rạc, không biết đã đủ mạnh chưa.',
      'Doanh nghiệp muốn thu hồi nợ nhưng vẫn cân nhắc giữ quan hệ kinh doanh.',
      'Vụ việc đã sang giai đoạn cần gửi văn bản, khởi kiện hoặc theo dõi thi hành án.',
    ],
    supportScope: [
      'Đánh giá bộ chứng cứ giao dịch và nghĩa vụ thanh toán hiện có.',
      'Đề xuất cách thương lượng, gửi văn bản hoặc tăng áp lực đúng luật.',
      'Chuẩn bị cho phương án khởi kiện và thi hành án khi cần.',
      'Giúp khách hàng hiểu bài toán thực tế giữa thời gian, chi phí và khả năng thu hồi.',
    ],
    strengths: [
      'An Luật đã triển khai dịch vụ này từ rất sớm và tích lũy nhiều kinh nghiệm thực tế.',
      'Ưu tiên giải pháp phù hợp, không đẩy khách hàng vào những bước quá nặng khi chưa cần.',
      'Nhìn vụ việc từ góc độ chiến lược, không chỉ từ góc độ thủ tục.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho thu hồi nợ / thương lượng',
    checklistItems: [
      'Hợp đồng, đơn hàng, xác nhận công nợ, biên bản giao nhận hoặc chứng từ thanh toán.',
      'Email, tin nhắn, thông báo, văn bản đòi nợ hoặc cam kết trả nợ trước đó.',
      'Thông tin bên còn nợ: pháp nhân/cá nhân, người đại diện, địa chỉ hoặc đầu mối liên hệ.',
      'Số tiền, thời hạn chậm trả và các mốc thương lượng đã diễn ra.',
      'Mục tiêu ưu tiên: thu nhanh, giữ quan hệ hay chuẩn bị cho bước tố tụng.',
    ],
    faq: [
      {
        question: 'Có phải cứ đòi nợ là phải khởi kiện ngay không?',
        answer:
          'Không. Nhiều khoản nợ cần đánh giá lại chứng cứ và chiến lược thương lượng trước. Khởi kiện là một bước lớn, không phải lúc nào cũng nên là bước đầu tiên.',
      },
      {
        question: 'Nếu chứng từ chưa đủ đẹp thì còn cơ hội không?',
        answer:
          'Còn tùy vụ việc, nhưng việc rà lại chứng cứ ngay từ đầu thường giúp xác định còn thiếu gì và còn kịp bổ sung hay không.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về khoản nợ',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại Tranh tụng & Thu hồi nợ',
    secondaryCtaHref: '/tranh-tung-thu-hoi-no',
  },
  {
    href: '/tranh-tung-thu-hoi-no/tranh-chap-kinh-doanh',
    navLabel: 'Tranh chấp kinh doanh',
    eyebrow: 'Tranh tụng & thu hồi nợ',
    title: 'Tranh chấp kinh doanh cần một cái nhìn đủ toàn diện trước khi đi tiếp',
    summary:
      'Trang này phù hợp khi doanh nghiệp hoặc cá nhân đang ở trong tranh chấp hợp đồng, nghĩa vụ thanh toán, hợp tác kinh doanh, bảo hiểm hay các mâu thuẫn thương mại đã không còn giải quyết được bằng trao đổi thông thường.',
    intro:
      'Trong tranh chấp kinh doanh, điều khách hàng thường cần không chỉ là biết “đúng sai”, mà là biết mình đang đứng ở đâu, hồ sơ mạnh đến đâu và chọn bước nào tối ưu nhất trong bối cảnh thật của giao dịch.',
    commonSituations: [
      'Tranh chấp nghĩa vụ thanh toán, giao hàng, chất lượng, tiến độ hoặc vi phạm cam kết.',
      'Tranh chấp hợp đồng hợp tác kinh doanh, bảo hiểm hoặc giao dịch thương mại khác.',
      'Hai bên đã thương lượng nhiều nhưng không còn tiến triển.',
      'Doanh nghiệp cần chuẩn bị hồ sơ trước khi vào tòa hoặc cơ chế giải quyết tranh chấp khác.',
    ],
    supportScope: [
      'Đọc lại giao dịch dưới góc nhìn pháp lý và chiến lược xử lý thực tế.',
      'Rà soát hợp đồng, chứng từ, trao đổi và các tài liệu quan trọng để xác định hướng đi.',
      'Đề xuất cách thương lượng tiếp, gửi văn bản, chuẩn bị hồ sơ hoặc tham gia tố tụng.',
      'Giúp doanh nghiệp nhìn rõ chi phí, thời gian và mức độ ưu tiên của từng phương án.',
    ],
    strengths: [
      'An Luật có kinh nghiệm thực tiễn với tranh chấp kinh doanh thương mại tại tòa.',
      'Không hứa kết quả ngoài tầm kiểm soát, nhưng luôn giúp khách hàng nhìn toàn cảnh hơn trước khi quyết định.',
      'Kết hợp giữa hiểu hồ sơ, hiểu vận hành doanh nghiệp và hiểu tác động dài hạn của tranh chấp.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho tranh chấp kinh doanh',
    checklistItems: [
      'Hợp đồng, phụ lục, đơn hàng, biên bản làm việc, hóa đơn hoặc chứng từ thanh toán.',
      'Email, tin nhắn, thông báo và các trao đổi thể hiện quá trình thực hiện giao dịch.',
      'Tóm tắt mâu thuẫn chính: nghĩa vụ nào bị vi phạm, từ thời điểm nào, hậu quả gì đang xảy ra.',
      'Những bước hai bên đã thử: thương lượng, văn bản, khiếu nại, đối chất hoặc làm việc với cơ quan nào đó.',
      'Mục tiêu ưu tiên của doanh nghiệp: tiếp tục giao dịch, dừng giao dịch, thu tiền hay chuẩn bị tranh tụng.',
    ],
    faq: [
      {
        question: 'Nếu chưa chắc hồ sơ mình mạnh hay yếu thì có nên nói chuyện với luật sư không?',
        answer:
          'Có. Đó chính là giá trị lớn của bước đánh giá ban đầu: biết mình đang ở đâu trước khi tự đẩy vụ việc đi quá xa.',
      },
      {
        question: 'Doanh nghiệp có thể vừa thương lượng vừa chuẩn bị cho tranh tụng không?',
        answer:
          'Có thể. Trong nhiều vụ việc, chuẩn bị kỹ hồ sơ giúp thương lượng tốt hơn ngay cả khi chưa cần nộp đơn ngay.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về tranh chấp kinh doanh',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại Tranh tụng & Thu hồi nợ',
    secondaryCtaHref: '/tranh-tung-thu-hoi-no',
  },
  {
    href: '/dao-tao',
    navLabel: 'Đào tạo',
    eyebrow: 'Đào tạo & chia sẻ chuyên môn',
    title: 'Đào tạo pháp lý để đội ngũ không chuyên luật vẫn làm việc chắc tay hơn',
    summary:
      'Trang này dành cho doanh nghiệp, hiệp hội, khu công nghiệp và đội ngũ vận hành đang cần chương trình đào tạo pháp lý thực tế, dễ áp dụng và bám sát tình huống công việc.',
    intro:
      'Đào tạo là một phần quan trọng trong cách An Luật đồng hành với tổ chức. Mục tiêu không phải để người học nhớ thật nhiều điều luật, mà để họ nhận ra rủi ro sớm hơn và xử lý công việc thường ngày chắc hơn.',
    commonSituations: [
      'Doanh nghiệp muốn đào tạo nội bộ cho HR, quản lý, sales hoặc vận hành về các rủi ro pháp lý thường gặp.',
      'Cần workshop ngắn theo chuyên đề như hợp đồng, lao động, kỷ luật, công nợ hoặc quy trình nội bộ.',
      'Hiệp hội, khu công nghiệp hoặc đơn vị đào tạo cần mời luật sư tham gia chia sẻ cho hội viên.',
      'Doanh nghiệp muốn kết hợp đào tạo với rà soát pháp lý để nhìn rõ các điểm cần sửa ngay sau chương trình.',
    ],
    supportScope: [
      'Thiết kế nội dung đào tạo theo đối tượng, cấp quản lý và bối cảnh vận hành thực tế.',
      'Chia chuyên đề thành các buổi ngắn, workshop hoặc chương trình theo chuỗi tùy nhu cầu.',
      'Kết hợp ví dụ thực tế, hồ sơ mẫu và các lỗi thường gặp để người học áp dụng được ngay.',
      'Đề xuất bước tiếp theo sau đào tạo nếu doanh nghiệp cần rà soát hoặc chuẩn hóa thêm.',
    ],
    strengths: [
      'An Luật có kinh nghiệm đào tạo và phối hợp cùng doanh nghiệp, hiệp hội và khu công nghiệp trong nhiều năm.',
      'Ngôn ngữ đào tạo hướng tới người làm việc thực tế, không biến buổi học thành một bài giảng nặng thuật ngữ.',
      'Có thể nối đào tạo với tư vấn hoặc rà soát nội bộ khi tổ chức cần đi sâu hơn.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho chương trình đào tạo',
    checklistItems: [
      'Đối tượng học: quản lý, HR, sales, vận hành, founder hay đội ngũ hỗn hợp.',
      'Nhóm vấn đề đang gặp nhiều nhất trong doanh nghiệp hoặc tổ chức.',
      'Mục tiêu sau chương trình: nhận diện rủi ro, chuẩn hóa quy trình hay xử lý một vấn đề cụ thể.',
      'Quy mô, hình thức và thời lượng mong muốn: nội bộ, workshop, online, offline, chuỗi buổi.',
      'Tài liệu, quy chế, hợp đồng mẫu hoặc case nội bộ có thể dùng làm ví dụ nếu phù hợp.',
    ],
    faq: [
      {
        question: 'An Luật có chỉ đào tạo cho doanh nghiệp lớn không?',
        answer:
          'Không. Quy mô không phải yếu tố quyết định. Điều quan trọng là chương trình có được thiết kế đúng với tình huống và đội ngũ thực tế hay không.',
      },
      {
        question: 'Có thể kết hợp đào tạo với rà soát nội bộ không?',
        answer:
          'Có. Trong nhiều trường hợp, đào tạo là điểm khởi đầu rất tốt để doanh nghiệp nhận ra phần nào cần rà soát hoặc sửa ngay sau đó.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về chương trình đào tạo',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Xem về An Luật',
    secondaryCtaHref: '/ve-an-luat',
    relatedLinks: [
      { label: 'Đào tạo pháp lý nội bộ', href: '/dao-tao/phap-ly-noi-bo' },
      { label: 'Workshop / hội thảo', href: '/dao-tao/workshop-hoi-thao' },
      { label: 'Chương trình cho hiệp hội / khu công nghiệp', href: '/dao-tao/hiep-hoi-khu-cong-nghiep' },
    ],
  },
  {
    href: '/dao-tao/phap-ly-noi-bo',
    navLabel: 'Đào tạo pháp lý nội bộ',
    eyebrow: 'Đào tạo & chia sẻ chuyên môn',
    title: 'Đào tạo pháp lý nội bộ để đội ngũ làm việc chắc hơn ngay trong công việc thường ngày',
    summary:
      'Phù hợp khi doanh nghiệp muốn xây chương trình đào tạo riêng cho HR, quản lý, sales, vận hành hoặc các bộ phận thường xuyên ra quyết định có rủi ro pháp lý.',
    intro:
      'Không phải doanh nghiệp nào cũng cần một chương trình dài. Nhiều khi chỉ cần đúng chủ đề, đúng ví dụ và đúng người học, hiệu quả thực tế đã khác rất nhiều so với những buổi phổ biến kiến thức chung chung.',
    commonSituations: [
      'Bộ phận HR cần hiểu chắc hơn về hợp đồng lao động, kỷ luật, nghỉ việc và hồ sơ nhân sự.',
      'Bộ phận kinh doanh cần nhận diện sớm các điều khoản hợp đồng hoặc cam kết dễ gây rủi ro.',
      'Quản lý cấp trung cần biết những giới hạn pháp lý khi ra quyết định với nhân sự hoặc đối tác.',
      'Doanh nghiệp muốn giảm việc “đến khi có sự cố mới hỏi luật sư”.',
    ],
    supportScope: [
      'Khảo sát nhu cầu đào tạo theo phòng ban, cấp bậc hoặc tình huống cụ thể.',
      'Thiết kế chương trình theo case thực tế, hồ sơ mẫu và lỗi phổ biến trong doanh nghiệp.',
      'Tổ chức theo buổi độc lập hoặc chuỗi buổi tùy mức độ chuyên sâu.',
      'Gợi ý bước theo sau đào tạo như rà soát hợp đồng, quy trình hoặc quy chế liên quan.',
    ],
    strengths: [
      'An Luật quen với các bài toán mà đội ngũ không chuyên luật gặp hàng ngày trong vận hành.',
      'Chương trình đào tạo được thiết kế để người học có thể áp dụng ngay, không chỉ “nghe cho biết”.',
      'Có thể điều chỉnh ngôn ngữ và ví dụ cho từng nhóm người học khác nhau.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho đào tạo pháp lý nội bộ',
    checklistItems: [
      'Danh sách nhóm người học và chức năng công việc của họ.',
      '3-5 tình huống hoặc lỗi nội bộ đang lặp lại nhiều nhất.',
      'Mẫu hợp đồng, mẫu biểu, quy trình hoặc quy chế hiện đang dùng nếu có thể chia sẻ.',
      'Hình thức mong muốn: đào tạo nền tảng, giải case, Q&A hoặc workshop xử lý tình huống.',
      'Kỳ vọng sau buổi học: nhận diện rủi ro, chuẩn hóa thao tác hay sửa một quy trình cụ thể.',
    ],
    faq: [
      {
        question: 'Buổi đào tạo có thể chỉ tập trung vào một chủ đề nhỏ không?',
        answer:
          'Có. Nhiều chương trình hiệu quả nhất lại là những buổi hẹp, tập trung vào đúng vấn đề doanh nghiệp đang vướng.',
      },
      {
        question: 'An Luật có thể đào tạo dựa trên hồ sơ và tài liệu nội bộ của doanh nghiệp không?',
        answer:
          'Có thể, nếu doanh nghiệp đồng ý chia sẻ trong phạm vi phù hợp để chương trình sát thực tế hơn.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về đào tạo nội bộ',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại mục Đào tạo',
    secondaryCtaHref: '/dao-tao',
  },
  {
    href: '/dao-tao/workshop-hoi-thao',
    navLabel: 'Workshop / hội thảo',
    eyebrow: 'Đào tạo & chia sẻ chuyên môn',
    title: 'Workshop và hội thảo pháp lý cần đủ thực tế để người nghe mang được điều gì đó về làm ngay',
    summary:
      'Trang này dành cho doanh nghiệp, cộng đồng nghề nghiệp hoặc đối tác đang cần một buổi workshop/hội thảo pháp lý với cấu trúc rõ, ngôn ngữ dễ hiểu và nội dung bám sát thực tế.',
    intro:
      'Một buổi chia sẻ tốt không chỉ nằm ở việc truyền đạt kiến thức, mà còn ở việc giúp người nghe nhìn thấy rủi ro ngay trong công việc quen thuộc của họ. Đây là hướng tiếp cận An Luật theo đuổi trong các chương trình chuyên đề.',
    commonSituations: [
      'Cần một buổi chia sẻ ngắn về hợp đồng, lao động, công nợ, tuân thủ hoặc quản trị nội bộ.',
      'Muốn tổ chức workshop thực hành có tình huống, câu hỏi và góc nhìn từ hồ sơ thực tế.',
      'Đối tác cần diễn giả có kinh nghiệm vừa tư vấn vừa đứng lớp cho cộng đồng doanh nghiệp.',
      'Tổ chức đang tìm một format hội thảo không quá học thuật nhưng vẫn chắc về pháp lý.',
    ],
    supportScope: [
      'Đề xuất format phù hợp: keynote, workshop tình huống, bàn tròn hỏi đáp hoặc chuỗi buổi ngắn.',
      'Thiết kế nội dung theo chủ đề và đối tượng người nghe thực tế.',
      'Chuẩn bị khung câu hỏi, điểm rủi ro thường gặp và ví dụ áp dụng ngay sau buổi học.',
      'Phối hợp với đối tác về mục tiêu truyền thông, nội dung và mức độ chuyên sâu.',
    ],
    strengths: [
      'An Luật có trải nghiệm đào tạo cho nhiều nhóm người nghe khác nhau, từ nội bộ doanh nghiệp đến cộng đồng nghề nghiệp.',
      'Nội dung luôn được viết lại theo ngôn ngữ gần người nghe thay vì bê nguyên tài liệu học thuật lên sân khấu.',
      'Giữ cân bằng giữa tính chuyên môn, tính ứng dụng và nhịp tương tác trong buổi chia sẻ.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho workshop / hội thảo',
    checklistItems: [
      'Đối tượng tham dự và số lượng dự kiến.',
      'Chủ đề ưu tiên và bối cảnh tổ chức chương trình.',
      'Mức độ mong muốn: định hướng cơ bản, chuyên đề chuyên sâu hay giải case thực tế.',
      'Hình thức tổ chức: online, offline, nội bộ, mở rộng cho đối tác hay hội viên.',
      'Các yêu cầu phối hợp truyền thông, tài liệu hoặc phần hỏi đáp nếu có.',
    ],
    faq: [
      {
        question: 'Workshop có thể thiết kế riêng cho một ngành cụ thể không?',
        answer:
          'Có. Đây thường là cách hiệu quả hơn vì ví dụ và rủi ro sẽ gần với người tham dự hơn nhiều.',
      },
      {
        question: 'Chương trình có nhất thiết phải dài không?',
        answer:
          'Không. Nhiều buổi 60-120 phút vẫn tạo giá trị rất tốt nếu mục tiêu và chủ đề được chốt rõ từ đầu.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về workshop / hội thảo',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại mục Đào tạo',
    secondaryCtaHref: '/dao-tao',
  },
  {
    href: '/dao-tao/hiep-hoi-khu-cong-nghiep',
    navLabel: 'Hiệp hội / khu công nghiệp',
    eyebrow: 'Đào tạo & chia sẻ chuyên môn',
    title: 'Chương trình cho hiệp hội và khu công nghiệp cần vừa chắc chuyên môn vừa nói đúng ngôn ngữ doanh nghiệp',
    summary:
      'Phù hợp khi hiệp hội doanh nghiệp, ban quản lý khu công nghiệp hoặc đơn vị đồng hành cần chương trình chia sẻ pháp lý cho hội viên với nội dung thực tế và cấu trúc mạch lạc.',
    intro:
      'Các chương trình cho cộng đồng doanh nghiệp cần một cách tiếp cận khác: phải đủ rộng để nhiều người cùng theo được, nhưng vẫn đủ sát thực tế để người nghe thấy nó liên quan trực tiếp đến mình. Đây là dạng chương trình An Luật đã có kinh nghiệm tham gia trong nhiều năm.',
    commonSituations: [
      'Hiệp hội cần chương trình cập nhật rủi ro pháp lý cho hội viên theo chủ đề nóng.',
      'Khu công nghiệp hoặc cộng đồng doanh nghiệp muốn tổ chức chia sẻ về lao động, hợp đồng, công nợ hoặc tuân thủ.',
      'Đơn vị tổ chức cần diễn giả có thể nói với nhóm doanh nghiệp nhiều quy mô và ngành nghề khác nhau.',
      'Cần một đối tác vừa hiểu pháp lý, vừa hiểu cách người đi làm thật sự tiếp nhận thông tin.',
    ],
    supportScope: [
      'Cùng đơn vị tổ chức xác định mục tiêu, nhóm người nghe và chủ đề sát nhu cầu nhất.',
      'Thiết kế chương trình theo hướng cập nhật, thực tiễn và dễ chuyển thành hành động.',
      'Linh hoạt giữa hình thức chia sẻ một buổi, chuỗi chuyên đề hoặc kết hợp hỏi đáp sâu.',
      'Hỗ trợ định hình tài liệu và thông điệp chính của chương trình nếu cần.',
    ],
    strengths: [
      'An Luật đã có kinh nghiệm phối hợp cùng hiệp hội, khu công nghiệp và các đơn vị đào tạo trong hoạt động chuyên môn.',
      'Hiểu cách nói chuyện với doanh nghiệp vừa và nhỏ, nhóm quản lý và người làm vận hành.',
      'Không biến chương trình cộng đồng thành bài giảng nặng thuật ngữ hoặc quá xa thực tế.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho chương trình hiệp hội / khu công nghiệp',
    checklistItems: [
      'Đối tượng hội viên hoặc doanh nghiệp tham dự: ngành nghề, quy mô, vai trò chính.',
      'Nhóm chủ đề cần ưu tiên: lao động, hợp đồng, công nợ, quản trị nội bộ, tuân thủ.',
      'Mục tiêu chương trình: cập nhật, cảnh báo rủi ro, hỏi đáp hay tạo chuỗi đào tạo.',
      'Thời lượng, hình thức và khung phối hợp tổ chức mong muốn.',
      'Các nội dung đã tổ chức trước đó để tránh trùng lặp nếu có.',
    ],
    faq: [
      {
        question: 'Chương trình cho hiệp hội có thể điều chỉnh theo nhóm hội viên không?',
        answer:
          'Có. Nếu đặc thù hội viên khá rõ, chương trình càng được điều chỉnh tốt thì mức độ hữu ích càng cao.',
      },
      {
        question: 'An Luật có thể tham gia theo dạng chuỗi chương trình không?',
        answer:
          'Có thể, nếu mục tiêu của đơn vị tổ chức là xây một lộ trình chia sẻ theo nhiều chủ đề thay vì chỉ một buổi đơn lẻ.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về chương trình cộng đồng',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại mục Đào tạo',
    secondaryCtaHref: '/dao-tao',
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
    relatedLinks: [
      { label: 'Thu hồi nợ / thương lượng', href: '/tranh-tung-thu-hoi-no/thu-hoi-no-thuong-luong' },
      { label: 'Tranh chấp kinh doanh', href: '/tranh-tung-thu-hoi-no/tranh-chap-kinh-doanh' },
      { label: 'Tranh chấp lao động', href: '/tranh-tung-thu-hoi-no/tranh-chap-lao-dong' },
      { label: 'Tranh chấp cổ đông', href: '/tranh-tung-thu-hoi-no/tranh-chap-co-dong' },
    ],
  },
  {
    href: '/tranh-tung-thu-hoi-no/tranh-chap-lao-dong',
    navLabel: 'Tranh chấp lao động',
    eyebrow: 'Tranh tụng & thu hồi nợ',
    title: 'Tranh chấp lao động cần được xử lý vừa đúng luật, vừa hiểu đúng bối cảnh quan hệ lao động',
    summary:
      'Trang này dành cho doanh nghiệp, HR hoặc người lao động khi mâu thuẫn đã vượt qua giai đoạn trao đổi nội bộ và cần một cách nhìn nghiêm túc hơn về hồ sơ, chiến lược và rủi ro tranh chấp.',
    intro:
      'Tranh chấp lao động không chỉ là cuộc đối đầu giữa hai lập luận pháp lý. Nó còn là câu chuyện của hồ sơ nhân sự, cách doanh nghiệp xử lý quy trình, thái độ làm việc giữa các bên và những điểm rất nhỏ có thể làm thay đổi cục diện vụ việc.',
    commonSituations: [
      'Phát sinh tranh chấp về chấm dứt hợp đồng, sa thải, kỷ luật, lương thưởng hoặc bảo hiểm.',
      'Một bên cho rằng quy trình xử lý lao động đã sai hoặc quyền lợi bị xâm phạm.',
      'Doanh nghiệp cần rà soát hồ sơ trước khi làm việc với cơ quan chức năng hoặc bước vào tranh tụng.',
      'Người lao động cần biết hồ sơ mình đang mạnh, yếu ở đâu và nên chuẩn bị gì tiếp theo.',
    ],
    supportScope: [
      'Rà soát toàn bộ hồ sơ lao động, quyết định, thông báo và diễn biến xử lý thực tế.',
      'Làm rõ rủi ro pháp lý của từng bên và những điểm có thể xoay chuyển cục diện tranh chấp.',
      'Đề xuất hướng thương lượng tiếp, làm việc với cơ quan chức năng hoặc chuẩn bị hồ sơ tranh tụng.',
      'Giúp khách hàng nhìn vụ việc dưới cả góc độ pháp luật và quan hệ lao động thực tế.',
    ],
    strengths: [
      'Lao động - nhân sự là một mảng chuyên sâu gắn với An Luật trong nhiều năm hoạt động.',
      'Hiểu cả góc nhìn người sử dụng lao động lẫn người lao động khi đánh giá hồ sơ tranh chấp.',
      'Không chỉ nhìn vào điều luật, mà nhìn vào cả quy trình và văn hóa xử lý của doanh nghiệp.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho tranh chấp lao động',
    checklistItems: [
      'Hợp đồng lao động, phụ lục, nội quy, quyết định, thông báo và hồ sơ nhân sự liên quan.',
      'Bảng lương, chấm công, dữ liệu bảo hiểm hoặc các chứng từ liên quan quyền lợi tranh chấp.',
      'Tin nhắn, email, biên bản họp hoặc trao đổi nội bộ thể hiện diễn biến vụ việc.',
      'Mốc thời gian chính: bắt đầu làm việc, phát sinh vi phạm, thông báo xử lý, chấm dứt hoặc khiếu nại.',
      'Mục tiêu của bên liên hệ: thương lượng, bảo vệ quyết định, đòi quyền lợi hay chuẩn bị tranh tụng.',
    ],
    faq: [
      {
        question: 'Doanh nghiệp có nên rà hồ sơ trước khi tranh chấp chính thức nổ ra không?',
        answer:
          'Rất nên. Với tranh chấp lao động, nhiều khi hồ sơ và quy trình quyết định rất lớn đến khả năng phòng thủ hoặc thương lượng của doanh nghiệp.',
      },
      {
        question: 'Người lao động chưa chắc mình đủ hồ sơ thì có nên trao đổi không?',
        answer:
          'Có. Biết sớm chỗ nào đang yếu vẫn tốt hơn nhiều so với việc đợi đến khi mọi thời hạn quan trọng đã trôi qua.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về tranh chấp lao động',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại Tranh tụng & Thu hồi nợ',
    secondaryCtaHref: '/tranh-tung-thu-hoi-no',
  },
  {
    href: '/tranh-tung-thu-hoi-no/tranh-chap-co-dong',
    navLabel: 'Tranh chấp cổ đông',
    eyebrow: 'Tranh tụng & thu hồi nợ',
    title: 'Tranh chấp cổ đông cần được nhìn như một cuộc khủng hoảng cấu trúc, không chỉ là một vụ cãi nhau',
    summary:
      'Phù hợp khi mâu thuẫn giữa cổ đông, thành viên góp vốn hoặc nhóm sáng lập đã chuyển sang mức đe dọa quyền quản lý, quyền sở hữu hoặc sự ổn định vận hành của doanh nghiệp.',
    intro:
      'Tranh chấp cổ đông thường kéo theo nhiều lớp rủi ro cùng lúc: hồ sơ pháp lý, quyền lực quản trị, dòng vận hành, nhân sự chủ chốt và cả niềm tin nội bộ. Vì vậy, việc đánh giá sớm cấu trúc tranh chấp và đòn bẩy của từng bên là cực kỳ quan trọng.',
    commonSituations: [
      'Cổ đông hoặc thành viên góp vốn có mâu thuẫn về quyền biểu quyết, điều hành, chuyển nhượng hoặc lợi ích kinh tế.',
      'Xuất hiện tranh cãi về hiệu lực quyết định, nghị quyết, người đại diện hoặc tính hợp lệ của hồ sơ nội bộ.',
      'Doanh nghiệp bị chậm vận hành vì tranh chấp giữa các nhóm cổ đông sáng lập.',
      'Các bên cần đánh giá nên thương lượng, tái cấu trúc hay chuẩn bị cho tranh chấp sâu hơn.',
    ],
    supportScope: [
      'Rà soát điều lệ, hồ sơ góp vốn, nghị quyết, biên bản họp và những tài liệu quyết định cấu trúc quyền lực.',
      'Đánh giá thế pháp lý hiện tại của từng bên và những điểm dễ bị phản công.',
      'Đề xuất hướng thương lượng, tái cấu trúc hoặc chuẩn bị hồ sơ cho tranh chấp sâu hơn khi cần.',
      'Giúp doanh nghiệp nhìn tranh chấp không chỉ dưới góc độ đúng sai mà cả tác động vận hành và đường lui.',
    ],
    strengths: [
      'An Luật hiểu tranh chấp cổ đông là dạng tranh chấp có blast radius rất lớn lên doanh nghiệp đang vận hành.',
      'Có thể nối hồ sơ cổ đông với các vấn đề điều lệ, người đại diện, hợp đồng và quản trị nội bộ.',
      'Ưu tiên giúp khách hàng thấy toàn cảnh trước khi tự đẩy vụ việc vào thế khó rút.',
    ],
    checklistTitle: 'Phiếu chuẩn bị cho tranh chấp cổ đông',
    checklistItems: [
      'Điều lệ, thỏa thuận cổ đông/thành viên, hồ sơ góp vốn, chuyển nhượng và thay đổi đăng ký doanh nghiệp.',
      'Nghị quyết, biên bản họp, quyết định nội bộ và các tài liệu liên quan đến quyền quản lý hoặc quyền biểu quyết.',
      'Email, tin nhắn, trao đổi thể hiện mâu thuẫn hoặc cam kết giữa các bên.',
      'Mô tả ngắn về điểm xung đột chính và tác động hiện tại lên hoạt động doanh nghiệp.',
      'Mục tiêu ưu tiên: giữ vận hành, bảo vệ quyền quản lý, thương lượng thoái vốn hay chuẩn bị tranh chấp sâu hơn.',
    ],
    faq: [
      {
        question: 'Tranh chấp cổ đông có thể xử lý từ sớm khi chưa ra tòa không?',
        answer:
          'Có, và đó thường là thời điểm tốt hơn. Càng để lâu, cấu trúc doanh nghiệp càng bị kéo mỏng và lựa chọn chiến lược càng ít đi.',
      },
      {
        question: 'Nếu hồ sơ nội bộ đang lộn xộn thì có còn cơ hội xử lý không?',
        answer:
          'Vẫn có thể, nhưng cần đọc lại rất kỹ để biết tài liệu nào còn giá trị, tài liệu nào tạo rủi ro và phần nào cần được gia cố ngay.',
      },
    ],
    primaryCtaLabel: 'Trao đổi về tranh chấp cổ đông',
    primaryCtaHref: '/lien-he',
    secondaryCtaLabel: 'Quay lại Tranh tụng & Thu hồi nợ',
    secondaryCtaHref: '/tranh-tung-thu-hoi-no',
  },
];

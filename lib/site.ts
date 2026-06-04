export const site = {
  name: 'An Luật',
  legalName: 'Công ty Luật TNHH MTV An Luật',
  tagline: 'Chọn đúng hướng pháp lý',
  url: 'https://anluat.com',
  address: 'Tầng 3, Số 9 Phan Kế Bính, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh',
  founder: {
    name: 'Đinh Thị Quỳnh Như',
    title: 'Luật sư sáng lập',
  },
  offices: [
    {
      name: 'Văn phòng TP. Hồ Chí Minh',
      description: 'Tầng 3, Số 9 Phan Kế Bính, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh',
    },
    {
      name: 'Chi nhánh Bà Rịa - Vũng Tàu',
      description: 'Mở rộng hoạt động từ năm 2020 để hỗ trợ khách hàng khu vực Đông Nam Bộ.',
    },
  ],
  phone: {
    primary: {
      display: '0902 426 422',
      href: 'tel:+84902426422',
      schema: '+84-902-426-422',
    },
    secondary: {
      display: '0902 426 122',
      href: 'tel:+84902426122',
      schema: '+84-902-426-122',
    },
  },
} as const;

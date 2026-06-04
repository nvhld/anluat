import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/1-gio-gap-nhu',
    '/ca-nhan',
    '/ca-nhan/gia-dinh-ly-hon',
    '/ca-nhan/tai-san-thua-ke',
    '/ca-nhan/tranh-chap-dan-su',
    '/ca-nhan/thu-hoi-no-ca-nhan',
    '/lao-dong-nhan-su',
    '/lao-dong-nhan-su/nguoi-lao-dong',
    '/lao-dong-nhan-su/doanh-nghiep-hr',
    '/doanh-nghiep',
    '/doanh-nghiep/tu-van-thuong-xuyen',
    '/doanh-nghiep/hop-dong',
    '/doanh-nghiep/ra-soat-phap-ly-noi-bo',
    '/dao-tao',
    '/dao-tao/phap-ly-noi-bo',
    '/dao-tao/workshop-hoi-thao',
    '/dao-tao/hiep-hoi-khu-cong-nghiep',
    '/tranh-tung-thu-hoi-no',
    '/tranh-tung-thu-hoi-no/thu-hoi-no-thuong-luong',
    '/tranh-tung-thu-hoi-no/tranh-chap-kinh-doanh',
    '/luat-su-dinh-thi-quynh-nhu',
    '/ve-an-luat',
    '/lien-he',
    '/goc-chia-se',
    '/chuyen-nghe',
    '/quyen-rieng-tu',
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date('2026-06-04'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}

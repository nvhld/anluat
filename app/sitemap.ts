import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/1-gio-gap-nhu',
    '/ca-nhan/gia-dinh-ly-hon',
    '/lao-dong-nhan-su',
    '/doanh-nghiep',
    '/doanh-nghiep/ra-soat-phap-ly-noi-bo',
    '/tranh-tung-thu-hoi-no',
    '/luat-su-dinh-thi-quynh-nhu',
    '/ve-an-luat',
    '/lien-he',
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

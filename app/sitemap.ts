import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/ve-an-luat', '/chuyen-nghe', '/quyen-rieng-tu'];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date('2026-06-04'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}

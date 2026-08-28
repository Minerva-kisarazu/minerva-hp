import type { MetadataRoute } from 'next';
import { SITE_URL } from './site-config';

export const dynamic = 'force-static';

const routes = ['', '/policy', '/grades', '/price', '/contact', '/consultation'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

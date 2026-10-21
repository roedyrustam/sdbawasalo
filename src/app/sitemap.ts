import { MetadataRoute } from 'next';
import { newsArticlesData } from '@/data/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sd32bawasalo.sch.id';

  const staticRoutes = [
    '',
    '/profil',
    '/guru-staf',
    '/fasilitas',
    '/ekstrakurikuler',
    '/berita',
    '/ppdb',
    '/kontak',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const newsRoutes = newsArticlesData.map((article) => ({
    url: `${baseUrl}/berita/${article.slug}`,
    lastModified: new Date(article.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}

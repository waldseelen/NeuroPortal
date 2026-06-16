import type { MetadataRoute } from 'next';

const locales = ['tr', 'en'] as const;
const pages = ['adhd', 'okb', 'polimatlik', 'technics', 'about'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mind.bugraakin.com';

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === 'adhd' ? 1 : 0.8,
      });
    }
  }

  return entries;
}

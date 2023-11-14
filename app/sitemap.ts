import { MetadataRoute } from 'next';
import { getActivitiesData } from './events/fetchers';
import { getNewsArticleData } from './newsroom/fetchers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: 'https://alumniportal.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://alumniportal.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://alumniportal.vercel.app/events',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://alumniportal.vercel.app/gallery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://alumniportal.vercel.app/directory',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://alumniportal.vercel.app/newsroom',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://alumniportal.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://alumniportal.vercel.app/alumniFund',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // adding activities / events to the sitemap
  const { data: activities, error: error1 } = await getActivitiesData();
  if (error1 || !activities) {
    return sitemap;
  }
  activities.map((activity) => {
    const { id } = activity;
    const sitemapEntry = {
      url: `https://alumniportal.vercel.app/events/${id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    };
    sitemap.push(sitemapEntry);
  });

  // adding activities / events to the sitemap
  const { data: articles, error: error2 } = await getNewsArticleData();
  if (error2 || !articles) {
    return sitemap;
  }
  activities.map((activity) => {
    const { id } = activity;
    const sitemapEntry = {
      url: `https://alumniportal.vercel.app/newsroom/${id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    };
    sitemap.push(sitemapEntry);
  });

  return sitemap;
}

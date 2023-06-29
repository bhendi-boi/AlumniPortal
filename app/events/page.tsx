import React from 'react';
import type { Metadata } from 'next';
import { getActivitiesData } from './fetchers';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Event associated with Alumni Affairs, IIITDM.',
  openGraph: {
    title: 'Events | Alumni Portal',
    description: 'Event associated with Alumni Affairs, IIITDM.',
    url: 'https://alumni-portal-alpha.vercel.app/events',
    siteName: 'Alumni Portal',
    images: [
      {
        url: '/og-image.png',
      },
    ],
    locale: 'en-IN',
    type: 'website',
  },
};

const page = async () => {
  const { data, error } = await getActivitiesData();
  if (!data || error) {
    throw new Error('Failed to fetch news articles');
  }
  return (
    <ul className="mx-auto mb-12 min-h-screen max-w-5xl divide-y-2 rounded-lg border border-background px-4 md:mb-16 md:px-8">
      {data.map((article, index) => (
        <div>{article.title}</div>
      ))}
    </ul>
  );
};

export default page;

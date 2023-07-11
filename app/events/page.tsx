import React from 'react';
import type { Metadata } from 'next';
import { getActivitiesData } from './fetchers';
import Card from './Card';

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

export const revalidate = 60;
const page = async () => {
  const { data, error } = await getActivitiesData();
  if (!data || error) {
    throw new Error('Failed to fetch news articles');
  }
  return (
    <ul className="mx-auto mb-12 min-h-screen max-w-5xl divide-y-2 rounded-lg border border-background px-4 md:mb-16 md:px-8">
      {data.map((event, index) => (
        <Card key={index} {...event} />
      ))}
    </ul>
  );
};

export default page;

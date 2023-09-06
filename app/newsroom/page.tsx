import type { Metadata } from 'next';
import Card from './Card';
import { getNewsArticleData } from './fetchers';

export const metadata: Metadata = {
  title: {
    absolute: 'Newsroom | IIITDM',
  },
  description:
    'Stay up-to-date on the latest achievements of your school alumni! This newsroom features stories about alumni who have made significant contributions in their fields, from starting their own businesses to winning awards for their work. Read about their successes and be inspired to follow in their footsteps.',
  openGraph: {
    title: 'Newsroom | Alumni Portal',
    description:
      'Stay up-to-date on the latest achievements of your school alumni! This newsroom features stories about alumni who have made significant contributions in their fields, from starting their own businesses to winning awards for their work. Read about their successes and be inspired to follow in their footsteps.',
    url: 'https://alumni-portal-alpha.vercel.app/services/newsroom',
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
  const { data, error } = await getNewsArticleData();
  if (!data || error) {
    throw new Error('Failed to fetch news articles');
  }
  return (
    <ul className="mx-auto mb-12 min-h-screen max-w-7xl divide-y-2 rounded-lg border border-background px-4 md:mb-16 md:px-8">
      {data.map((article, index) => (
        <Card key={index} {...article} />
      ))}
    </ul>
  );
};

export default page;

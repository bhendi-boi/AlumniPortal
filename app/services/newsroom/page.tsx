import type { Metadata } from 'next';
import Card from './Card';
import { getNewsArticleData } from './getNewsArticlesData';

export const metadata: Metadata = {
  title: {
    absolute: 'Alumni Achievements | IIITDM',
  },
  description: 'Here are some of the milestones achieved by our alumni.',
};

const page = async () => {
  const { data, error } = await getNewsArticleData();
  if (!data || error) {
    throw new Error('Failed to fetch news articles');
  }
  return (
    <ul className="mx-auto mb-12 min-h-screen max-w-5xl divide-y-2 rounded-lg border border-background px-4 md:mb-16 md:px-8">
      {data.map((article, index) => (
        <Card key={index} {...article} />
      ))}
    </ul>
  );
};

export default page;

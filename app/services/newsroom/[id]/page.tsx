import ArticleHeader from './ArticleHeader';
import ImageCard from './ImageCard';
import Navigation from './Navigation';
import clsx from 'clsx';
import { getANewsArticleData, getNewsArticleData } from '../fetchers';
import { Metadata } from 'next';

const MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

function getTime(d: Date) {
  const year = d.getFullYear();
  const month = MONTHS[d.getMonth()];
  const date = d.getDate();
  return `${date} ${month}, ${year}`;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = Number(params.id);
  const { data, error } = await getANewsArticleData(id);
  if (!data || error) {
    return {
      title: 'Error',
    };
  }
  const article = data[0];
  return {
    title: {
      absolute: article.title,
    },
    description: article.summary_for_seo,
    openGraph: {
      title: article.title,
      description: article.summary_for_seo,
      url: `https://alumni-portal-alpha.vercel.app/services/newsroom/${id}`,
      siteName: 'Alumni Portal',
      images: [
        {
          url: article.image_link,
        },
        {
          url: '/og-image.png',
        },
      ],
      locale: 'en-IN',
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const { data, error } = await getNewsArticleData();
  if (!data || error) return [];
  return data.map((item) => {
    return item.id;
  });
}

const page = async ({ params }: { params: { id: string } }) => {
  const { id: idAsString } = params;
  const id = Number(idAsString);

  // ? data fetching
  const { data: rawData, error } = await getNewsArticleData();
  if (!rawData || error) {
    throw new Error('Failed to fetch news articles');
  }
  const data = rawData.find((item) => item.id === id);
  if (typeof data === 'undefined') {
    throw new Error('Index out of range');
  }
  // ? finding maxId
  const ids = rawData.map((item) => {
    return item.id;
  });
  const maxId = Math.max(...ids);

  return (
    <>
      <section className="mx-auto mb-12 min-h-screen max-w-5xl rounded-lg border border-background">
        <Navigation id={id} maxId={maxId} />
        <article className="p-8">
          <ArticleHeader
            title={data.title}
            postedOn={getTime(new Date(data.created_at))}
          />
          <ImageCard
            src={data.image_link}
            altText={data.alt_text}
            width={data.image_width}
            height={data.image_height}
          />
          {data.content.map((para, index) => {
            return (
              <p
                className={clsx(
                  // index === 0 && 'first-letter:text-2xl ',
                  'mb-4 selection:bg-contact-blue selection:text-white',
                )}
                key={index}
              >
                {para}
              </p>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default page;

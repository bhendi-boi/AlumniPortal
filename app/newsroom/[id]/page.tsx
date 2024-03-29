import { compileMDX } from 'next-mdx-remote/rsc';
import ArticleHeader from './ArticleHeader';
import ImageCard from './ImageCard';
import Navigation from './Navigation';
import YTPlayer from 'app/YTPlayer';
import { getANewsArticleData, getNewsArticleData } from '../fetchers';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

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
  if (data?.length === 0 || error || !data) {
    return {
      title: 'Error',
    };
  }
  const article = data[0];
  return {
    title: article.title,
    description: article.summary_for_seo,
    openGraph: {
      title: article.title,
      description: article.summary_for_seo,
      url: `https://alumniportal.vercel.app/services/newsroom/${id}`,
      siteName: 'Alumni Portal',
      images: [
        {
          url: article.image_link,
        },
        {
          url: article.image_link ?? '/og-image.png',
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
// ! Don't remove this
export const revalidate = 60;
const page = async ({ params }: { params: { id: string } }) => {
  const { id: idAsString } = params;
  const id = Number(idAsString);

  // ? data fetching
  // ! querying all the files because we have to find maxId
  const { data: rawData, error } = await getNewsArticleData();
  if (!rawData || error) {
    throw new Error('Failed to fetch news articles');
  }
  const data = rawData.find((item) => item.id === id);
  if (typeof data === 'undefined') {
    notFound();
  }
  // ? finding maxId
  const ids = rawData.map((item) => {
    return item.id;
  });
  const maxId = Math.max(...ids);
  // ? parsing MDX
  const { content } = await compileMDX({
    source: data.content,
    components: {
      img: (props) => <img loading="lazy" decoding="async" {...props} />,
    },
  });
  return (
    <>
      <section className="mx-auto mb-12 min-h-screen max-w-7xl rounded-lg border border-background">
        <Navigation id={id} maxId={maxId} />
        <article className="prose-img:skeleton prose prose-sm max-w-none px-8 pb-8 sm:prose-base md:prose-lg prose-p:text-black prose-img:overflow-hidden prose-img:rounded-lg">
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
          {/* pt-2 is there to align image and text */}
          <div className="pt-2 text-justify">{content}</div>
          {data.video_link && <YTPlayer url={data.video_link} />}
        </article>
      </section>
    </>
  );
};

export default page;

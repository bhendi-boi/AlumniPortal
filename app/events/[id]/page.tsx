import { compileMDX } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import EventHeader from './EventHeader';
import YTPlayer from 'app/YTPlayer';
import clsx from 'clsx';
import { getActivitiesData, getAnActivityData } from '../fetchers';
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
  const hours = d.getHours();
  const minutes = d.getMinutes() < 9 ? `0${d.getMinutes()}` : d.getMinutes();
  return { date: `${date} ${month}, ${year}`, time: `${hours}:${minutes} HRS` };
}

export async function generateStaticParams() {
  const { data, error } = await getActivitiesData();
  if (!data || error) return [];
  return data.map((item) => {
    return item.id;
  });
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = Number(params.id);
  const { data, error } = await getAnActivityData(id);
  if (data?.length === 0 || error || !data) {
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
      url: `https://alumni-portal-alpha.vercel.app/events/${id}`,
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

export const revalidate = 60;

const page = async ({ params }: { params: { id: string } }) => {
  const { id: idAsString } = params;
  const id = Number(idAsString);

  // ? data fetching
  const { data: rawData, error } = await getAnActivityData(id);
  if (!rawData || error) {
    throw new Error('Failed to fetch news articles');
  }
  const data = rawData.find((item) => item.id === id);
  if (typeof data === 'undefined') {
    notFound();
  }
  // ? finding date and time from date object
  const dateObject = new Date(data.time);
  const { date, time } = getTime(dateObject);

  // ? parsing MDX
  const { content } = await compileMDX({
    source: data.content,
    components: {
      img: (props) => <img loading="lazy" decoding="async" {...props} />,
    },
  });

  return (
    <>
      <article className="mx-auto mb-8 min-h-screen max-w-7xl rounded-lg border border-background px-4 sm:mb-12 md:mb-16 md:px-8">
        <EventHeader
          title={data.title}
          link={data.link}
          date={date}
          time={time}
        />
        <Image
          className="mt-4 overflow-hidden rounded-lg bg-gradient-to-br from-gray-100/80 via-gray-200/50 to-gray-400/10 object-cover sm:mt-6 md:mt-8"
          src={data.image_link}
          alt={data.alt_text}
          width={data.image_width}
          height={data.image_height}
        />
        <div className="prose-img:skeleton prose prose-sm mt-8 max-w-none pb-8 sm:prose-base md:prose-lg prose-p:text-black prose-img:overflow-hidden prose-img:rounded-lg">
          {content}
        </div>
        {data.video_link && <YTPlayer url={data.video_link} />}
      </article>
    </>
  );
};

export default page;

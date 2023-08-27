import { AnimationWrapper } from './NewsRoomAnimationWrapper';
import { getNewsArticleData } from './newsroom/fetchers';

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

const NewsRoom = async () => {
  const { data, error } = await getNewsArticleData();
  if (error || !data) {
    return (
      <section
        aria-labelledby="newsroom"
        className="w-full rounded-md border border-background md:max-w-3xl"
      >
        <h2
          id="newsroom"
          className="border-b border-background px-5 py-2 text-xl font-medium uppercase text-nav-blue"
        >
          NewsRoom
        </h2>
        <div className="p-6">
          <p className="text-lg text-red-600">
            Failed to fetch newsroom articles
          </p>
        </div>
      </section>
    );
  }
  const newsArticles = data?.map((item) => {
    const time = getTime(new Date(item.created_at));
    return {
      title: item.title,
      time,
      id: item.id,
    };
  });

  return <AnimationWrapper newsArticles={newsArticles} />;
};

export default NewsRoom;

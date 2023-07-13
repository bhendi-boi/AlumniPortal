import { supabase } from './supabase';
import NavLink from './NavLink';
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
        className="w-full border rounded-md border-background md:max-w-3xl"
      >
        <h2
          id="newsroom"
          className="px-5 py-2 text-xl font-medium uppercase border-b border-background text-nav-blue"
        >
          NewsRoom
        </h2>
        <div className="p-6">
          <p className="text-lg">Failed to fetch newsroom articles</p>
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

  return (
    <section
      aria-labelledby="newsroom"
      className="w-full border rounded-md border-background md:max-w-3xl"
    >
      <h2
        id="newsroom"
        className="px-5 py-2 text-xl font-medium uppercase border-b border-background text-nav-blue"
      >
        NewsRoom
      </h2>

      <ul className="divide-y divide-background">
        {newsArticles?.map((newsArticle) => {
          return (
            <li key={newsArticle.title} className="">
              <NavLink
                variant="newsroom"
                title={`Go to ${newsArticle.title}`}
                href={`/newsroom/${newsArticle.id}`}
              >
                <h3 className="flex-1 text-black">{newsArticle.title}</h3>
                <p className="text-sm text-secondary-text">
                  {newsArticle.time}
                </p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default NewsRoom;

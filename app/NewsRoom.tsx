import { supabase } from './supabase';

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
  const year = d.getUTCFullYear();
  const month = MONTHS[d.getUTCMonth()];
  const date = d.getUTCDate();
  return `${date} ${month}, ${year}`;
}

async function getNewsRoomData() {
  const { data, error } = await supabase.from('newsroom').select();
  return { data, error };
}

const NewsRoom = async () => {
  const { data, error } = await getNewsRoomData();
  const newsArticles = data?.map((item) => {
    const time = getTime(new Date(item.created_at));
    return {
      title: item.title,
      time,
    };
  });

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
      {error || data?.length === 0 ? (
        <div className="p-6">
          <p className="text-lg">No articles to show</p>
        </div>
      ) : (
        <ul className="divide-y divide-background">
          {newsArticles?.map((newsArticle) => {
            return (
              <li
                key={newsArticle.title}
                className="flex flex-col px-5 py-3 md:flex-row"
              >
                <h3 className="flex-1 text-black">{newsArticle.title}</h3>
                <p className="text-sm text-secondary-text">
                  {newsArticle.time}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default NewsRoom;

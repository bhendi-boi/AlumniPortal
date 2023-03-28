import React from 'react';

const data = [
  {
    title:
      'Venkata Chandrashekharan, IIITDM Alumni helping Elon Musk with Twitter',
    time: '24th March, 2023',
  },
  {
    title: 'Welcoming New Members of Alumni Affairs',
    time: '7th March, 2023',
  },
  {
    title: 'Lab Visits at IISc Bangalore',
    time: '23rd January, 2023',
  },
  {
    title: 'MBAtrek Corporate Competition - UXO 3.0',
    time: '12th December, 2022',
  },
  {
    title: 'Alumni Mentorship Programme',
    time: '10th December, 2022',
  },
  {
    title: 'Key Tips for attending Interviews',
    time: '15th November, 2022',
  },
];

const NewsRoom = () => {
  return (
    <section
      aria-labelledby="newsroom"
      className="border rounded-md border-zinc-400 md:max-w-3xl"
    >
      <h2
        id="newsroom"
        className="px-5 py-2 text-xl font-medium uppercase border-b border-zinc-400 text-nav-blue"
      >
        NewsRoom
      </h2>
      <div className="divide-y divide-zinc-400">
        {data.map((newsArticle) => {
          return (
            <div key={newsArticle.title} className="flex flex-col px-5 py-3 md:flex-row">
              <h3 className="flex-1 text-black">{newsArticle.title}</h3>
              <p className="text-sm text-secondary-text">{newsArticle.time}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewsRoom;

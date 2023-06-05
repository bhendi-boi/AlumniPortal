import React from 'react';
type Activity = {
  title: string;
  time: string[];
  relativeTime: 'today' | 'upcoming';
};

const data: Activity[] = [
  // {
  //   title: 'Online Alumni Talk on Accelerated Neural Networks with Eashan Dash',
  //   time: ['Mar', '24'],
  //   relativeTime: 'today',
  // },
  // {
  //   title: 'LinkedIn Networking Session 2',
  //   time: ['Mar', '28'],
  //   relativeTime: 'upcoming',
  // },
  // {
  //   title: 'LinkedIn Networking Session 3',
  //   time: ['Apr', '02'],
  //   relativeTime: 'upcoming',
  // },
];

const Activities = () => {
  return (
    <section
      aria-labelledby="activities"
      className="max-h-fit w-full rounded-md border border-background"
    >
      <h2
        id="activities"
        className="border-b border-background px-5 py-2 text-xl font-medium uppercase text-nav-blue"
      >
        Activities
      </h2>
      {data.length === 0 ? (
        <div className="p-6">
          <p className="text-lg">No upcoming events</p>
        </div>
      ) : (
        <ul className="divide-y divide-background">
          {data.map((event) => {
            return (
              <li
                key={event.title}
                className="flex items-center gap-4 px-5 py-3"
              >
                <div className="flex flex-col">
                  <span className="text-lg uppercase">{event.time[0]}</span>
                  <span className="text-3xl font-semibold">
                    {event.time[1]}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase text-secondary-text">
                    {event.relativeTime}
                  </span>
                  <h3 className="">{event.title}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Activities;

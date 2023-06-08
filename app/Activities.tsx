import React from 'react';

type Activity = {
  title: string;
  time: string[];
  relativeTime: 'today' | 'upcoming';
};

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

function sameDate(d1: Date, d2: Date) {
  if (d1.getUTCFullYear() !== d2.getUTCFullYear()) return false;
  if (d1.getUTCMonth() !== d2.getUTCMonth()) return false;
  if (d1.getUTCDate() !== d2.getUTCDate()) return false;
  return true;
}

const Activities = ({
  data,
}: {
  data:
    | {
        [x: string]: any;
      }[]
    | null;
}) => {
  if (!data) {
    return null;
  }

  const activities: Activity[] = data.map((item) => {
    console.log(new Date(item.time).getUTCDate());
    const dateObject = new Date(item.time);
    const today = new Date();
    const relativeTime = sameDate(dateObject, today) ? 'today' : 'upcoming';
    const month = MONTHS[dateObject.getMonth()];
    const date = dateObject.getDate().toString();
    return {
      title: item.title,
      time: [month, date],
      relativeTime,
    };
  });
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
          {activities.map((activity, index) => {
            return (
              <li key={index} className="flex items-center gap-4 px-5 py-3">
                <div className="flex flex-col">
                  <span className="text-lg uppercase">{activity.time[0]}</span>
                  <span className="text-3xl font-semibold">
                    {activity.time[1]}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase text-secondary-text">
                    {activity.relativeTime}
                  </span>
                  <h3 className="">{activity.title}</h3>
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

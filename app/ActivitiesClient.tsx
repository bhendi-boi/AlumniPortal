'use client';
import NavLink from './NavLink';
// ! THIS COMPONENT EXISTS because handling time in client components is not advised

// ? this Activity is not the same as the one we fetch.
// ? It has an extra `relativeTime` field and doesn't contain all the fields present in activity row in supabase
type Activity = {
  id: number;
  title: string;
  time: string[];
  relativeTime: 'today' | 'upcoming' | 'past';
};
type Data = {
  alt_text: string;
  content: string;
  id: number;
  image_height: number;
  image_link: string;
  image_width: number;
  link: string;
  time: string;
  title: string;
}[];
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

function getRelativeTime(
  day: Date,
): Pick<Activity, 'relativeTime'>['relativeTime'] {
  const today = new Date();
  // checking for year
  if (today.getFullYear() < day.getFullYear()) {
    return 'upcoming';
  } else if (today.getFullYear() > day.getFullYear()) {
    return 'past';
  }
  // if the year is same we check for months
  if (today.getMonth() < day.getMonth()) {
    return 'upcoming';
  } else if (today.getMonth() > day.getMonth()) {
    return 'past';
  }
  // if the month is also same we check for the date
  if (today.getDate() < day.getDate()) {
    return 'upcoming';
  } else if (today.getDate() > day.getDate()) {
    return 'past';
  }
  return 'today';
}

const ActivitiesClient = ({ data }: { data: Data }) => {
  const activities: Activity[] = data.map((item) => {
    const dateObject = new Date(item.time);
    const relativeTime = getRelativeTime(dateObject);
    const month = MONTHS[dateObject.getUTCMonth()];
    const date = dateObject.getUTCDate().toString();
    return {
      id: item.id,
      title: item.title,
      time: [month, date],
      relativeTime,
    };
  });
  return (
    <ul className="divide-y divide-background">
      {activities.map((activity, index) => {
        return (
          <li key={index} className="">
            <NavLink
              variant="activities"
              title={`Know more about ${activity.title}`}
              href={`events/${activity.id}`}
            >
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
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default ActivitiesClient;

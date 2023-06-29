import NavLink from './NavLink';
import { getActivitiesData } from './events/fetchers';

// this Activity is not the same as the one we fetch.
// It has an extra `relativeTime` field and doesn't contain all the fields present in activity row in supabase
type Activity = {
  id: number;
  title: string;
  time: string[];
  relativeTime: 'today' | 'upcoming' | 'past';
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

const Activities = async () => {
  const { data, error } = await getActivitiesData();
  if (error || !data) {
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
        <div className="p-6">
          <p className="text-lg">Failed to fetch activities</p>
        </div>
      </section>
    );
  }

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
    </section>
  );
};

export default Activities;

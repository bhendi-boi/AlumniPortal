import { ActivitiesAnimationWrapper } from './ActivitiesAnimationWrapper';
import { getActivitiesData } from './events/fetchers';

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
          <p className="text-lg text-red-600">Failed to fetch activities</p>
        </div>
      </section>
    );
  }

  return <ActivitiesAnimationWrapper data={data} />;
};

export default Activities;

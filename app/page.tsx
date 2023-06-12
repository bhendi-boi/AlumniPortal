import NewsRoom from './NewsRoom';
import Activities from './Activities';
import Carousel from './Carousel';

const page = async () => {
  return (
    <div className="my-20">
      {/* @ts-expect-error */}
      <Carousel />
      {/* these comments are there so that we can use rsc. Remove them after ts fixes this */}
      <section className="mt-8 flex flex-col gap-4 md:flex-row md:gap-8">
        {/* @ts-expect-error */}
        <NewsRoom />
        {/* @ts-expect-error */}
        <Activities />
      </section>
    </div>
  );
};

export default page;

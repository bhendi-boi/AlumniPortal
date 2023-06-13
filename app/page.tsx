import NewsRoom from './NewsRoom';
import Activities from './Activities';
import Carousel from './Carousel';

const page = async () => {
  return (
    <div className="my-20">
      <Carousel />
      <section className="mt-8 flex flex-col gap-4 md:flex-row md:gap-8">
        <NewsRoom />
        <Activities />
      </section>
    </div>
  );
};

export default page;

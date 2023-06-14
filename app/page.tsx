import NewsRoom from './NewsRoom';
import Activities from './Activities';
import Carousel from './Carousel';
export const metadata = {
  openGraph: {
    title: 'Home | Alumni Portal',
  },
};

const page = async () => {
  return (
    <div className="my-20">
      <Carousel />
      <section className="flex flex-col gap-4 mt-8 md:flex-row md:gap-8">
        <NewsRoom />
        <Activities />
      </section>
    </div>
  );
};

export default page;

import NewsRoom from './NewsRoom';
import Events from './Events';
// import Carousel from './Carousel';

const page = () => {
  return (
    <div className="my-20">
      {/* <Carousel /> */}
      <section className="mt-8 flex flex-col gap-4 md:flex-row md:gap-8">
        <NewsRoom />
        <Events />
      </section>
    </div>
  );
};

export default page;

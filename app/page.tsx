import NewsRoom from './NewsRoom';
import Activities from './Activities';
import Carousel from './Carousel';
import { supabase } from './supabase';

async function getActivities() {
  const { data, error } = await supabase.from('activities').select();

  return data;
}

const page = async () => {
  const data = await getActivities();
  return (
    <div className="my-20">
      {/* <Carousel /> */}
      <section className="mt-8 flex flex-col gap-4 md:flex-row md:gap-8">
        <NewsRoom />
        <Activities data={data} />
      </section>
    </div>
  );
};

export default page;

import StateCarousel from './StateCarousel';
import { supabase } from './supabase';

async function getImagesData() {
  const { data, error } = await supabase.from('carousel').select();
  return { data, error };
}

const Carousel = async () => {
  const { data: images, error } = await getImagesData();
  if (!images || error) {
    return;
  }
  // ! Don't change this because turbopack is throwing useState is null as error
  return <StateCarousel images={images} />;
};

export default Carousel;

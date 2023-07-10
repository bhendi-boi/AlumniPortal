import { PostgrestError } from '@supabase/supabase-js';
import StateCarousel from './StateCarousel';

const Carousel =  ({images,error}: {
  images:{
    alt_text: string;
    height: number;
    id: number;
    link: string;
    width: number;
}[] | null, error:PostgrestError | null
}) => {
  
  if (!images || error) {
    return ;
  }
  // ! Don't change this because turbopack is throwing useState is null as error
  return <StateCarousel images={images} />;
};

export default Carousel;

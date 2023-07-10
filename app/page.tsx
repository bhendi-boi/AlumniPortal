import { supabase } from './supabase';
import NewsRoom from './NewsRoom';
import Activities from './Activities';
import Carousel from './Carousel';

export const metadata = {
  openGraph: {
    title: 'Home | Alumni Portal',
    description:
      'The Alumni Portal allows alumni to connect with each other, stay up-to-date on school news, and find resources and opportunities.',
    url: 'https://alumni-portal-alpha.vercel.app/',
    siteName: 'Alumni Portal',
    images: [
      {
        url: '/og-image.png',
      },
    ],
    locale: 'en-IN',
    type: 'website',
  },
};

async function getImagesData() {
  const { data, error } = await supabase.from('carousel').select().order("id");
  return { data, error };
}

export const revalidate = 3600;

const page = async () => {
  const { data: images, error } = await getImagesData();
  return (
    <div className="my-20">
      <Carousel images={images} error={error} />
      <section className="flex flex-col gap-4 mt-8 md:flex-row md:gap-8">
        <NewsRoom />
        <Activities />
      </section>
    </div>
  );
};

export default page;

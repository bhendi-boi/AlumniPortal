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

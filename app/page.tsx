import React from 'react';
import NewsRoom from './NewsRoom';
import Events from './Events';
import Image from 'next/image';

const page = () => {
  return (
    <main className="mx-auto my-20 max-w-7xl px-5 md:px-10">
      <picture className="">
        <Image
          src="/HomePageHeroSection.png"
          alt="Poster for MDes (IPD)"
          height={424}
          width={1360}
        />
      </picture>
      <section className="mt-8 flex flex-col gap-4 md:flex-row md:gap-8">
        <NewsRoom />
        <Events />
      </section>
    </main>
  );
};

export default page;

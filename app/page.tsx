import React from 'react';
import NewsRoom from './NewsRoom';
import Events from './Events';

const page = () => {
  return (
    <main className="px-5 my-20 md:px-10">
      <section className="flex flex-col gap-4 md:flex-row md:gap-8">
        <NewsRoom />
        <Events />
      </section>
    </main>
  );
};

export default page;

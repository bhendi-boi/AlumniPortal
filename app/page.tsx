import React from 'react';
import NewsRoom from './NewsRoom';
import Events from './Events';

const page = () => {
  return (
    <main className="my-20 px-10">
      <section className="grid grid-cols-8 gap-8">
        <NewsRoom />
        <Events />
      </section>
    </main>
  );
};

export default page;

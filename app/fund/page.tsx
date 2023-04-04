import Header from 'app/Header';
import React from 'react';
import FAQ from './FAQ';

const page = () => {
  return (
    <main className="min-h-screen px-5 md:px-10">
      <Header title="Alumni Fund" />
      <FAQ />
    </main>
  );
};

export default page;

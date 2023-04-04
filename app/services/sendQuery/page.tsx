import React from 'react';
import type { Metadata } from 'next';
import Header from 'app/Header';
import Form from './Form';

export const metadata: Metadata = {
  title: {
    absolute: 'Send Query',
  },
  description: 'Questions? Send your queries here.',
};
const page = () => {
  return (
    <main className="min-h-screen px-5 md:px-10">
      <section>
        <Header title="Contact" />
      </section>
      <Form />
    </main>
  );
};

export default page;

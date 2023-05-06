import React from 'react';
import type { Metadata } from 'next';
import Header from 'app/Header';
import Form from './Form';

export const metadata: Metadata = {
  title: 'Send Query',
  description: 'Questions? Send your queries here.',
};
const page = () => {
  return (
    <>
      <section>
        <Header title="Contact" />
      </section>
      <Form />
    </>
  );
};

export default page;

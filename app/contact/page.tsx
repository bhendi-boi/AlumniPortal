import React from 'react';
import type { Metadata } from 'next';
import Header from 'app/Header';
import Form from './Form';

export const metadata: Metadata = {
  title: 'Send Query',
  description: 'Questions? Send your queries here.',
  openGraph: {
    title: 'Send Query | Alumni Portal',
    description: 'Questions? Send your queries here.',
    url: 'https://alumni-portal-alpha.vercel.app/services/sendQuery',
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
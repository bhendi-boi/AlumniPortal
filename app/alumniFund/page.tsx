import React from 'react';
import type { Metadata } from 'next';
import Header from 'app/Header';
import FAQ from './FAQ';

export const metadata: Metadata = {
  title: 'Fund',
  description: 'This page contains information related to alumni fund.',
  openGraph: {
    title: 'Fund | Alumni Portal',
    description: 'This page contains information related to alumni fund.',
    url: 'https://alumni-portal-alpha.vercel.app/services/fund',
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
      <Header title="Alumni Fund" />
      <div className="mx-auto max-w-5xl pt-10">
        <h2 className="text-4xl">Coming soon ...</h2>
      </div>
      {/* <FAQ /> */}
    </>
  );
};

export default page;

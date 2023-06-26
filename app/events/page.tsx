import React from 'react';
import type { Metadata } from 'next';
import Tabs from './Tabs';
import Header from 'app/Header';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Event associated with Alumni Affairs, IIITDM.',
  openGraph: {
    title: 'Events | Alumni Portal',
    description: 'Event associated with Alumni Affairs, IIITDM.',
    url: 'https://alumni-portal-alpha.vercel.app/events',
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
      <Header title="Events" />
      {/* <Tabs /> */}
    </>
  );
};

export default page;

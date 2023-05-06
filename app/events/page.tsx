import React from 'react';
import type { Metadata } from 'next';
import Tabs from './Tabs';
import Header from 'app/Header';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Event associated with Alumni Affairs, IIITDM.',
};

const page = () => {
  return (
    <>
      <Header title="Events" />
      <Tabs />
    </>
  );
};

export default page;

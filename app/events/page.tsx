import React from 'react';
import type { Metadata } from 'next';
import Tabs from './Tabs';
import Header from 'app/Header';

export const metadata: Metadata = {
  title: 'Events | AlumniPortal',
  description: 'Event associated with Alumni Affairs, IIITDM.',
};

const page = () => {
  return (
    <main className="min-h-screen">
      <Header title="Events" />
      <Tabs />
    </main>
  );
};

export default page;

import React from 'react';
import type { Metadata } from 'next';
import Contact from './Contact';
import HistoryAndVision from './HistoryAndVision';
import Message from './Message';
import Team from './Team';

export const metadata: Metadata = {
  title: 'About | AlumniPortal',
  description: 'About Alumni Affairs, IIITDM.',
};

const page = () => {
  return (
    <main className="min-h-screen">
      <header className="pt-16 pb-8">
        <h1 className="text-center text-4xl">About us</h1>
      </header>
      <HistoryAndVision />
      <Message />
      <Team />
      <Contact />
    </main>
  );
};

export default page;

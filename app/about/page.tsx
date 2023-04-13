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
    <>
      <header className="pb-8 pt-16">
        <h1 className="text-center text-4xl">About us</h1>
      </header>
      <HistoryAndVision />
      <Message />
      <Team />
      <Contact />
    </>
  );
};

export default page;

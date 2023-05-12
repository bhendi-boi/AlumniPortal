import React from 'react';
import type { Metadata } from 'next';
import Contact from './Contact';
import HistoryAndVision from './HistoryAndVision';
import Message from './Message';
import Team from './Team';

export const metadata: Metadata = {
  title: 'About',
  description:
    "This webpage contains a detailed overview of the Alumni Affairs, IIITDM's mission, goals, and values, as well as a brief history of its founding and evolution over time. Visitors to the webpage can learn about the current leadership team, including their roles and responsibilities, as well as the members who make up the organization.",
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

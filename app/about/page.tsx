import React from 'react';
import type { Metadata } from 'next';
import HistoryAndVision from './HistoryAndVision';
import Message from './Message';
import Team from './Team';
import Header from 'app/Header';

export const metadata: Metadata = {
  title: 'About',
  description:
    "This webpage contains a detailed overview of the Alumni Affairs, IIITDM's mission, goals and values, as well as a brief history of its founding and evolution over time. Visitors to the webpage can learn about the current leadership team, including their roles and responsibilities, as well as the members who make up the organization.",
  openGraph: {
    title: 'About',
    description:
      "This webpage contains a detailed overview of the Alumni Affairs, IIITDM's mission, goals and values, as well as a brief history of its founding and evolution over time. Visitors to the webpage can learn about the current leadership team, including their roles and responsibilities, as well as the members who make up the organization",
    url: 'https://alumniportal.vercel.app/about',
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
      {/* <header className="pt-16 pb-8">
        <h1 className="text-4xl text-center font-lora">About us</h1>
      </header> */}
      <Header title="About Us" link="/about" />
      <HistoryAndVision />
      <Message />
      <Team />
    </>
  );
};

export default page;

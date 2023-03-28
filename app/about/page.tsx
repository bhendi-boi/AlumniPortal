import React from 'react';
import Contact from './Contact';
import HistoryAndVision from './HistoryAndVision';
import Message from './Message';

const page = () => {
  return (
    <main className="min-h-screen">
      <header className="pt-16 pb-8">
        <h1 className="text-center text-4xl">About us</h1>
      </header>
      <HistoryAndVision />
      <Message />
      <Contact />
    </main>
  );
};

export default page;

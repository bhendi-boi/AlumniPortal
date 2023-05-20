import React from 'react';
import type { Metadata } from 'next';
import Header from 'app/Header';
import FAQ from './FAQ';

export const metadata: Metadata = {
  title: 'Fund',
  description: 'This page contains information related to alumni fund.',
};
const page = () => {
  return (
    <>
      <Header title="Alumni Fund" />
      <div className="flex items-center justify-center">
        <h2 className="text-4xl">Coming soon ...</h2>
      </div>
      {/* <FAQ /> */}
    </>
  );
};

export default page;

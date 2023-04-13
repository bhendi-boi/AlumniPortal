import React from 'react';
import type { Metadata } from 'next';
import Header from 'app/Header';
import FAQ from './FAQ';

export const metadata: Metadata = {
  title: 'Fund | AlumniPortal',
  description: 'This page contains information related to alumni fund.',
};
const page = () => {
  return (
    <>
      <Header title="Alumni Fund" />
      <FAQ />
    </>
  );
};

export default page;

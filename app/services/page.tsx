import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Services | AlumniPortal',
  },
  description: 'Services which we offer.',
};

const page = () => {
  return <div>Services page</div>;
};

export default page;

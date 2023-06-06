import type { Metadata } from 'next';
import Header from 'app/Header';
import Directory from './Directory';

export const metadata: Metadata = {
  title: {
    absolute: 'Alumni Directory | IIITDM',
  },
  description: 'Directory of our alumni.',
};

const page = () => {
  return (
    <>
      <Header title="Alumni Directory" />
      <Directory />
    </>
  );
};

export default page;

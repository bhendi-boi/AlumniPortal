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
    <main className="min-h-screen px-5 md:px-10">
      <Header title="Alumni Directory" />
      <Directory />
    </main>
  );
};

export default page;

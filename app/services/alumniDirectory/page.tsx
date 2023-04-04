import type { Metadata } from 'next';

import Header from 'app/Header';
import Directory from './Directory';

export const metadata: Metadata = {
  title: 'Alumni Achievements',
  description: 'Welcome to Next.js',
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

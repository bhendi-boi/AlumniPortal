import type { Metadata } from 'next';
import Header from 'app/Header';
import Directory from './Directory';

export const metadata: Metadata = {
  title: 'Directory',
  description:
    'Find alumni from your school with our alumni directory. Search by name, graduation year, or major to find former classmates and other alumni. Our directory is the perfect way to stay connected with iiitdm community and reconnect with old friends.',
  openGraph: {
    title: 'Directory | Alumni Portal',
    description:
      'Find alumni from your school with our alumni directory. Search by name, graduation year, or major to find former classmates and other alumni. Our directory is the perfect way to stay connected with iiitdm community and reconnect with old friends.',
    url: 'https://alumniportal.vercel.app/alumniDirectory',
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
      <Header title="Alumni Directory" />
      <Directory />
    </>
  );
};

export default page;

import Image from 'next/image';
import Header from 'app/Header';
import FAQ from './FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fund',
  description: 'This page contains information related to alumni fund.',
  openGraph: {
    title: 'Fund | Alumni Portal',
    description: 'This page contains information related to alumni fund.',
    url: 'https://alumni-portal-alpha.vercel.app/services/fund',
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
      <Header title="Alumni Fund" />
      <section className="mx-auto max-w-7xl py-10">
        <Image
          src="/alumniFundUPIid.jpg"
          alt="An image showing Alumni Fund UPI Id and QR code"
          width={1833}
          height={2553}
          className="max-w-xl rounded-lg"
        />
      </section>
      {/* <FAQ /> */}
    </>
  );
};

export default page;

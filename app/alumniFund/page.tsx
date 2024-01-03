import Image from 'next/image';
import Header from 'app/Header';
import Helper from './Helper';
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
      <section className="mx-auto max-w-7xl pb-16">
        <Helper />
        <Image
          src="/alumniFundUPIid.jpg"
          alt="An image showing Alumni Fund UPI Id and QR code"
          width={1833}
          height={2553}
          className="max-w-full rounded-lg md:max-w-xl"
        />
      </section>
      {/* <FAQ /> */}
    </>
  );
};

export default page;

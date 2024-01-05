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
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdan_VViGmDcIufVM2EG-1E_i-Vr37jgMQMwG34DZ8O-Te4OQ/viewform?embedded=true"
            width="640"
            height="1084"
            className="max-w-full"
          >
            Loading…
          </iframe>
          <Image
            src="/alumniFundUPIid.jpg"
            alt="An image showing Alumni Fund UPI Id and QR code"
            width={1833}
            height={2553}
            className="max-w-full rounded-lg md:max-w-xl"
          />
        </div>
      </section>

      {/* <FAQ /> */}
    </>
  );
};

export default page;

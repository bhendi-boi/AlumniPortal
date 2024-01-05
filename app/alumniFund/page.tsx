import Header from 'app/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fund',
  description: 'This page contains information related to alumni fund.',
  openGraph: {
    title: 'Fund | Alumni Portal',
    description: 'This page contains information related to alumni fund.',
    url: 'https://alumniportal.vercel.app/services/fund',
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
        {/* <Helper /> */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdan_VViGmDcIufVM2EG-1E_i-Vr37jgMQMwG34DZ8O-Te4OQ/viewform?embedded=true"
          width="640"
          height="1084"
          className="mx-auto max-w-full"
        >
          Loading…
        </iframe>
      </section>

      {/* <FAQ /> */}
    </>
  );
};

export default page;

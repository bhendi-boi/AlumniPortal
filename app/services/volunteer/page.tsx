import React from 'react';
import Header from 'app/Header';

export const metadata = {
  title: 'Volunteer',
  description:
    'Looking for a way to give back to your community? Volunteer with Alumni Affairs! We offer a variety of opportunities to get involved. Visit our website to learn more about our volunteer opportunities and to sign up today!',
  openGraph: {
    title: 'Volunteer | Alumni Portal',
    description:
      'Looking for a way to give back to your community? Volunteer with Alumni Affairs! We offer a variety of opportunities to get involved. Visit our website to learn more about our volunteer opportunities and to sign up today!',
    url: 'https://alumniportal.vercel.app/services/volunteer',
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
      <Header title="Volunteer" />
    </>
  );
};

export default page;

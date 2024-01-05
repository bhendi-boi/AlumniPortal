import React from 'react';
import type { Metadata } from 'next';
import Header from 'app/Header';
import ImageCard from './ImageCard';
import { supabase } from 'app/supabase';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A Gallery of images associated with Alumni Affairs, IIITDM',
  openGraph: {
    title: 'Gallery | Alumni Portal',
    description: 'A Gallery of images associated with Alumni Affairs, IIITDM',
    url: 'https://alumniportal.vercel.app/gallery',
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

async function getGalleryData() {
  const { data, error } = await supabase.from('gallery').select();
  return { data, error };
}

export const revalidate = 60;

const page = async () => {
  const { data, error } = await getGalleryData();
  if (error) {
    throw new Error(error.message);
  }

  if (!data || error) {
    return (
      <>
        <Header title="Gallery" />
        <p>Error</p>
      </>
    );
  }
  return (
    <>
      <Header title="Gallery" />
      <ul className="mx-auto mb-8 flex min-h-screen max-w-7xl flex-wrap justify-around gap-4 rounded-lg border border-background p-6 sm:gap-6 sm:p-8 md:mb-16 md:gap-8 md:p-12 lg:gap-12">
        {data.map((image, index) => (
          <ImageCard
            key={index}
            src={image.link}
            alt={image.alt_text}
            width={image.width}
            height={image.height}
          />
        ))}
      </ul>
    </>
  );
};

export default page;

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
    url: 'https://alumni-portal-alpha.vercel.app/gallery',
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

const page = async () => {
  const { data, error } = await getGalleryData();
  if (error) {
    throw new Error(error.message);
  }

  return (
    <>
      <Header title="Gallery" />
      {data?.length === 0 ? (
        <div className="px-16 py-4">
          <p className="text-lg">No images to display.</p>
        </div>
      ) : (
        <ul className="mx-auto mb-8 grid min-h-screen max-w-5xl grid-cols-1 gap-5 rounded-lg border border-background p-6 sm:grid-cols-2 sm:p-8 md:mb-16 md:grid-cols-3 md:p-12">
          {data?.map((image, index) => (
            <ImageCard
              key={index}
              src={image.link}
              alt={image.alt_text}
              width={image.width}
              height={image.height}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default page;

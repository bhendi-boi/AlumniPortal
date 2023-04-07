import React from 'react';
import type { Metadata } from 'next';
import Header from 'app/Header';
import ImageCard from './ImageCard';

export const metadata: Metadata = {
  title: 'Gallery | AlumniPortal',
  description: 'A Gallery of Images which show our recent work.',
};

const data = [
  {
    src: 'https://images.unsplash.com/photo-1679760452619-cf2dcb88b659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'sjfb lsifhosiaefhpoaj',
  },
  {
    src: 'https://images.unsplash.com/photo-1679760452619-cf2dcb88b659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'sjfb lsifhosiaefhpoaj',
  },
  {
    src: 'https://images.unsplash.com/photo-1679760452619-cf2dcb88b659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'sjfb lsifhosiaefhpoaj',
  },
  {
    src: 'https://images.unsplash.com/photo-1679760452619-cf2dcb88b659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'sjfb lsifhosiaefhpoaj',
  },
  {
    src: 'https://images.unsplash.com/photo-1679760452619-cf2dcb88b659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'sjfb lsifhosiaefhpoaj',
  },
  {
    src: 'https://images.unsplash.com/photo-1679760452619-cf2dcb88b659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'sjfb lsifhosiaefhpoaj',
  },
  {
    src: 'https://images.unsplash.com/photo-1679760452619-cf2dcb88b659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'sjfb lsifhosiaefhpoaj',
  },
  {
    src: 'https://images.unsplash.com/photo-1679760452619-cf2dcb88b659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'sjfb lsifhosiaefhpoaj',
  },
  {
    src: 'https://images.unsplash.com/photo-1679760452619-cf2dcb88b659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'sjfb lsifhosiaefhpoaj',
  },
];
const page = () => {
  return (
    <main className="min-h-screen px-5 md:px-10">
      <Header title="Gallery" />
      <section className="mx-auto mb-8 grid min-h-screen max-w-5xl grid-cols-1 gap-5 rounded-lg border border-background p-6 sm:grid-cols-2 sm:p-8 md:mb-16 md:grid-cols-3 md:p-12">
        {data.map((image, index) => (
          <ImageCard key={index} {...image} />
        ))}
      </section>
    </main>
  );
};

export default page;

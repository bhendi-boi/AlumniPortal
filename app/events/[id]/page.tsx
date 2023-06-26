import Header from 'app/Header';
import React from 'react';
import EventHeader from './EventHeader';
import Image from 'next/image';

const data = {
  title: 'Online Alumni Talks on Accelerated Neural Networks with Eashan Dash',
  link: 'https://chat.openai.com/',
  date: 'Friday, 24th March 2023',
  time: '4:30 PM',
  image_link:
    'https://ocufbllgoonzjowlkkhp.supabase.co/storage/v1/object/public/main/carousel/nirf.jpg?t=2023-06-12T06%3A23%3A33.564Z',
  alt_text: 'alt text for 2',
  image_height: 500,
  image_width: 1600,
};

const page = () => {
  return (
    <>
      <Header title="Event Details" />
      <article className="mx-auto mb-8 min-h-screen max-w-5xl rounded-lg border border-background px-4 sm:mb-12 md:mb-16 md:px-8">
        <EventHeader
          title={data.title}
          link={data.link}
          date={data.date}
          time={data.time}
        />
        <Image
          src={data.image_link}
          alt={data.alt_text}
          width={data.image_width}
          height={data.image_height}
        />
      </article>
    </>
  );
};

export default page;

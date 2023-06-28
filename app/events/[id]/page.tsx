import Header from 'app/Header';
import React from 'react';
import EventHeader from './EventHeader';
import Image from 'next/image';
import clsx from 'clsx';

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
  content: [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, similique!',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis deserunt sunt nulla rerum enim soluta provident quae, possimus magnam nam. Tempora perferendis ex rem, architecto, quisquam porro quia excepturi facilis veniam nobis ab? Sequi non, alias harum fugit quibusdam quam amet voluptate nisi possimus sunt autem similique sint fuga illum reiciendis? Impedit commodi doloribus ab veritatis laborum sequi officiis, eum aliquam, magnam corrupti temporibus ducimus nisi animi error ut? Fugiat incidunt tempore eius cum, voluptate earum officia similique labore hic ducimus blanditiis nostrum ad dolor praesentium mollitia quidem, pariatur laboriosam iure nesciunt excepturi nulla vero expedita! Asperiores illo ea tempora?',
  ],
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
          className="mt-4 overflow-hidden rounded-lg bg-gradient-to-br from-gray-100/80 via-gray-200/50 to-gray-400/10 sm:mt-6 md:mt-8"
          src={data.image_link}
          alt={data.alt_text}
          width={data.image_width}
          height={data.image_height}
        />
        <div className="mt-8">
          {data.content.map((para, index) => {
            return (
              <p
                className={clsx(
                  'first-letter:ml-20',
                  'mb-8 selection:bg-contact-blue selection:text-white',
                )}
                key={index}
              >
                {para}
              </p>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default page;

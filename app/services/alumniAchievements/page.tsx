import React from 'react';
import type { Metadata } from 'next';
import Header from 'app/Header';
import Card from './Card';

export const metadata: Metadata = {
  title: {
    absolute: 'Alumni Achievements | IIITDM',
  },
  description: 'Here are some of the milestones achieved by our alumni.',
};

const data = [
  {
    src: '',
    title:
      'Venkata Chandrashekharan, IIITDM Alumni helping Elon Musk with Twitter',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi',
  },
  {
    src: '',
    title:
      'Venkata Chandrashekharan, IIITDM Alumni helping Elon Musk with Twitter',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi',
  },
  {
    src: '',
    title:
      'Venkata Chandrashekharan, IIITDM Alumni helping Elon Musk with Twitter',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi',
  },
];
const page = () => {
  return (
    <>
      <Header title="Alumni Achievements" />
      <ul className="mx-auto mb-12 min-h-screen max-w-5xl rounded-lg border border-background px-4 md:mb-16 md:px-16">
        {data.map((article, index) => (
          <Card key={index} {...article} />
        ))}
      </ul>
    </>
  );
};

export default page;

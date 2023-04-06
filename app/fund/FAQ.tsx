import React from 'react';
import Accordian from './Accordian';

const data = [
  {
    question: 'Question 1',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus architecto minus eius assumenda asperiores. Sequi, exercitationem. Praesentium ipsam aspernatur tempore.',
  },
  {
    question: 'dskjvlsnv ?',
    answer: 'vkjslvjsvioriso;vi;sj',
  },
  {
    question: 'dskjvlsnv ?',
    answer: 'vkjslvjsvioriso;vi;sj',
  },
  {
    question: 'dskjvlsnv ?',
    answer: 'vkjslvjsvioriso;vi;sj',
  },
];

const FAQ = () => {
  return (
    <section aria-labelledby="faq" className="mx-auto max-w-5xl">
      <header>
        <h2 id="faq" className="text-2xl font-medium">
          Frequently asked questions
        </h2>
      </header>
      <ul className="my-4">
        {data.map((ques, index) => (
          <Accordian key={index} {...ques} />
        ))}
      </ul>
    </section>
  );
};

export default FAQ;

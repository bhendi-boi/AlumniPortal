'use client';
import React, { useState } from 'react';
import Controls from './Controls';
import { AlumniDetails } from 'types';
import Card from './Card';

const data: AlumniDetails[] = [
  {
    src: '/convocation.png',
    name: 'Anurag Kashyap',
    year: 2020,
    degree: 'B Tech',
    department: 'CSE',
  },
  {
    src: '/convocation.png',
    name: 'Anurag Kashyap',
    year: 2020,
    degree: 'B Tech',
    department: 'CSE',
  },
  {
    src: '/convocation.png',
    name: 'Anurag Kashyap',
    year: 2020,
    degree: 'B Tech',
    department: 'CSE',
  },
  {
    src: '/convocation.png',
    name: 'Anurag Kashyap',
    year: 2020,
    degree: 'B Tech',
    department: 'CSE',
  },
  {
    src: '/convocation.png',
    name: 'Anurag Kashyap',
    year: 2020,
    degree: 'B Tech',
    department: 'CSE',
  },
  {
    src: '/convocation.png',
    name: 'Anurag Kashyap',
    year: 2020,
    degree: 'B Tech',
    department: 'CSE',
  },
  {
    src: '/convocation.png',
    name: 'Anurag Kashyap',
    year: 2020,
    degree: 'B Tech',
    department: 'CSE',
  },
  {
    src: '/convocation.png',
    name: 'Anurag Kashyap',
    year: 2020,
    degree: 'B Tech',
    department: 'CSE',
  },
  {
    src: '/convocation.png',
    name: 'Anurag Kashyap',
    year: 2020,
    degree: 'B Tech',
    department: 'CSE',
  },
  {
    src: '/convocation.png',
    name: 'Anurag Kashyap',
    year: 2020,
    degree: 'B Tech',
    department: 'CSE',
  },
];

const Directory = () => {
  const [year, setYear] = useState(2022);
  console.log(year);
  return (
    <section
      aria-labelledby="dir"
      className="mx-auto mb-8 min-h-screen max-w-5xl rounded-lg border border-background md:mb-16"
    >
      <h2 id="dir" className="sr-only">
        {year}'s directory
      </h2>
      {/* //! make + and - buttons work */}
      <Controls year={year} setYear={setYear} />
      <ul className="mx-5 my-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mx-10 lg:grid-cols-5">
        {data.map((alumni, index) => (
          <Card key={index} {...alumni} />
        ))}
      </ul>
    </section>
  );
};

export default Directory;

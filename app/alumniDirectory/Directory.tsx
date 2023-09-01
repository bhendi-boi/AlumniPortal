'use client';
import React, { useState } from 'react';
import Controls from './Controls';
import { AlumniDetails } from 'types';
import Card from './Card';

const data: AlumniDetails[] = [
  {
    name: 'Anurag Kashyap',
    year: 2020,
    degree: 'M. Tech.',
    department: 'Mechanical Systems',
  },
  {
    name: 'Aabhas Parik',
    year: 2020,
    degree: 'M. Des.',
    department: 'Electronics Engineering',
  },
  {
    name: 'Adel Ahmed Quershi',
    year: 2020,
    degree: 'B. Tech.',
    department: 'Computer Engineering',
  },
  {
    name: 'Aman Kumar',
    year: 2020,
    degree: 'B. Tech.+M. Tech.',
    department: 'Computer Engineering',
  },
  {
    name: 'Kannam Sai Teja',
    year: 2020,
    degree: 'B. Tech.+M. Tech.',
    department:
      'Mechanical Engineering with specialization in Design and Manufacturing+Product Design',
  },
];

const Directory = () => {
  const [year, setYear] = useState(2022);
  return (
    <section
      aria-labelledby="dir"
      className="mx-auto mb-8 max-w-5xl rounded-lg border border-background pb-4 md:mb-16"
    >
      <h2 id="dir" className="sr-only">
        {year}'s directory
      </h2>
      <Controls year={year} setYear={setYear} />
      <ul className="mx-5 my-8 flex min-h-screen flex-col md:mx-10">
        {data.map((alumni, index) => (
          <Card key={index} {...alumni} />
        ))}
      </ul>
      <p className="text-center">Showing 1 to 25 out of 80</p>
    </section>
  );
};

export default Directory;

'use client';
import React, { useCallback, useState } from 'react';
import { notFound, useSearchParams } from 'next/navigation';

import Row from './Row';
import Controls from './Controls';
import { AlumniDetails } from 'types';

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

export const FIRSTPASSOUTYEAR = 2011;
export const LATESTPASSOUTYEAR = 2022;

const Directory = () => {
  const searchParams = useSearchParams();
  const year = Number(searchParams.get('year'));

  if (year > LATESTPASSOUTYEAR || year < FIRSTPASSOUTYEAR) {
    notFound();
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <section
      aria-labelledby="dir"
      className="mx-auto mb-8 max-w-7xl rounded-lg border border-background pb-4 md:mb-16"
    >
      <h2 id="dir" className="sr-only">
        {year}'s directory
      </h2>
      <Controls year={year} createQueryString={createQueryString} />
      <table className="my-4 flex min-h-screen flex-col">
        <thead className="border-b px-5 pb-2 text-left md:px-10">
          <tr className="grid grid-cols-2">
            <th>Name</th>
            <th className="hidden sm:table-cell">Degree</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((alumni, index) => (
            <Row key={index} {...alumni} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Directory;

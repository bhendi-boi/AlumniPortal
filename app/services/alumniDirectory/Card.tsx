import React from 'react';
import Image from 'next/image';
import { AlumniDetails } from 'types';

type CardProps = AlumniDetails;

const Card = ({ src, name, degree, year, department }: CardProps) => {
  return (
    <li className="flex flex-col items-center rounded-lg border border-background py-4">
      <Image
        src={''}
        alt={`${name}'s picture`}
        width={120}
        height={120}
        className="rounded-full bg-secondary-text/50 object-cover"
      />
      <p className="mt-4 font-semibold">{name}</p>
      <p className="text-xs font-medium text-secondary-text">
        <span className="pr-1">{degree}</span>
        <span>{year}</span>,<span>{department}</span>
      </p>
    </li>
  );
};

export default Card;

import React from 'react';
import Image from 'next/image';
import { AlumniDetails } from 'types';

type CardProps = AlumniDetails;

const Card = ({ src, name, degree, year, department }: CardProps) => {
  return (
    <li className="flex flex-col items-center rounded-lg border border-background px-4 py-4 md:py-8 lg:py-4">
      {/* // TODO! update src */}
      <Image
        src={''}
        alt={`${name}'s picture`}
        width={120}
        height={120}
        className="rounded-full bg-secondary-text/50 object-cover"
      />
      <p className="mt-4 text-xs font-semibold md:text-base">{name}</p>
      <p className="text-xxs font-medium text-secondary-text md:text-xs">
        <span className="pr-1">{degree}</span>
        <span>{year}</span>,<span>{department}</span>
      </p>
    </li>
  );
};

export default Card;

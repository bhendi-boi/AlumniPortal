import NavLink from 'app/NavLink';
import Image from 'next/image';
import React from 'react';

type CardProps = {
  id: number;
  title: string;
  content: string;
  imageSrc: string;
};

const Card = ({ id, title, content, imageSrc }: CardProps) => {
  return (
    <li className="flex flex-col items-center justify-between gap-4 py-5 md:flex-row md:gap-8 md:py-10">
      {/* //! src */}
      <Image
        src="/convocation.png"
        alt={title}
        width={400}
        height={225}
        className="aspect-video max-w-xs rounded-md object-cover md:my-4"
      />
      <div className="">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="my-2 text-sm">{content}</p>
        <NavLink
          href={`/services/alumniAchievements/${id + 1}`}
          variant="cardActive"
          title={`link to ${title}`}
        >
          Read More
        </NavLink>
      </div>
    </li>
  );
};

export default Card;

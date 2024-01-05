import NavLink from 'app/NavLink';
import Image from 'next/image';
import React from 'react';

type CardProps = {
  id: number;
  title: string;
  summary_for_seo: string;
  image_link: string;
  alt_text: string;
  image_width: number;
  image_height: number;
};

const Card = ({
  id,
  title,
  summary_for_seo,
  image_link,
  alt_text,
  image_height,
  image_width,
}: CardProps) => {
  return (
    <li className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:gap-8">
      <Image
        src={image_link}
        alt={alt_text}
        width={image_width}
        height={image_height}
        className="skeleton aspect-square rounded-md object-cover md:my-4 md:max-w-[16rem]"
      />
      <div className="flex-1">
        <h2 className="font-lora text-2xl font-bold">{title}</h2>
        <p className="my-2 line-clamp-5 text-sm">{summary_for_seo}</p>
        <NavLink
          href={`/events/${id}`}
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

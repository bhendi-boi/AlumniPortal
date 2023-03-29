import React from 'react';
import Image from 'next/image';
import { CiMail } from 'react-icons/ci';

interface TeamMemberCardProps
  extends React.ComponentPropsWithoutRef<'article'> {
  imagePath: string;
  name: string;
  position:
    | 'Professor In Charge'
    | 'Secretary'
    | 'Joint Secretary'
    | 'Coordinator';
  email: string;
}

const TeamMemberCard = ({
  imagePath,
  name,
  position,
  email,
  ...restProps
}: TeamMemberCardProps) => {
  return (
    <article
      {...restProps}
      className={
        position === 'Secretary'
          ? 'flex w-full items-center gap-4 rounded-lg bg-white py-4 px-4 drop-shadow-xl md:w-44 md:flex-col md:p-0'
          : 'flex w-full items-center gap-4 rounded-lg bg-background py-4 px-4  md:w-44 md:flex-col md:p-0'
      }
    >
      <Image
        src={imagePath}
        alt={`${name}'s photo`}
        height={120}
        width={120}
        className="rounded-full"
      />
      <div>
        <p className="font-medium">{position}</p>
        <p className="mt-1 mb-2 text-sm font-semibold text-contact-blue md:font-medium">
          {name}
        </p>
        <a href={`mailto:${email}`} target="_blank" rel="norefer">
          <CiMail size={20} />
        </a>
      </div>
    </article>
  );
};

export default TeamMemberCard;

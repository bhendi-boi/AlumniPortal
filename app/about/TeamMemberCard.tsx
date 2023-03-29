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
          ? 'flex w-44 flex-col items-center rounded-lg bg-white py-4 drop-shadow-xl'
          : 'flex w-44 flex-col items-center rounded-lg bg-background py-4 '
      }
    >
      <Image
        src={imagePath}
        alt={`${name}'s photo`}
        height={120}
        width={120}
        className="rounded-full"
      />
      <p className="font-medium">{position}</p>
      <p className="text-sm font-medium text-contact-blue">{name}</p>
      <a href={`mailto:${email}`} target="_blank" rel="norefer">
        <CiMail size={20} />
      </a>
    </article>
  );
};

export default TeamMemberCard;

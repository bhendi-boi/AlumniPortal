import { ComponentProps } from 'react';
import Image from 'next/image';
import { CiMail } from 'react-icons/ci';
import { AiFillLinkedin } from 'react-icons/ai';
import clsx from 'clsx';
import { MemberData } from 'types';
import Link from 'next/link';

type TeamMemberCardProps = ComponentProps<'article'> & MemberData;

const TeamMemberCard = ({
  imagePath,
  name,
  position,
  email,
  linkedIn,
  ...restProps
}: TeamMemberCardProps) => {
  return (
    <article
      {...restProps}
      className={clsx(
        'flex w-full items-center gap-4 rounded-lg px-4 py-4 md:w-44 md:flex-col md:px-0',
        position !== 'Secretary' && 'bg-secondary-background drop-shadow-md',
        position === 'Secretary' && 'bg-white  shadow-xl drop-shadow-xl',
      )}
    >
      <Image
        src={imagePath}
        alt={`${name}'s photo`}
        height={120}
        width={120}
        className="rounded-full"
      />
      <div className="flex flex-col gap-2">
        <div>
          <p className="font-medium">{position}</p>
          <p className="mt-1 mb-2 text-sm font-semibold text-contact-blue md:my-0 md:font-medium">
            {name}
          </p>
        </div>

        <div className={clsx('flex', linkedIn && 'justify-center gap-2')}>
          <Link
            href={`mailto:${email}`}
            target="_blank"
            rel="norefer"
            className="md:self-center"
            title={`Email of ${name}`}
          >
            <CiMail size={20} />
          </Link>
          {linkedIn && (
            <Link
              href={linkedIn}
              target="_blank"
              rel="norefer"
              className="md:self-center"
              title={`LinkedIn profile of ${name}`}
            >
              <AiFillLinkedin size={20} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default TeamMemberCard;

import { ComponentProps } from 'react';
import Image from 'next/image';
import { CiMail } from 'react-icons/ci';
import { AiFillLinkedin } from 'react-icons/ai';
import clsx from 'clsx';
import { MemberData } from 'types';
import Link from 'next/link';

type ManagementCardProps = ComponentProps<'article'> & MemberData;

const ManagementCard = ({
  imagePath,
  name,
  position,
  email,
  linkedIn,
  ...restProps
}: ManagementCardProps) => {
  return (
    <article
      {...restProps}
      className={clsx(
        'flex w-full items-center gap-5 rounded-lg px-5 py-5 md:w-48 md:flex-col md:gap-3 md:px-0',

        'bg-white ring-2 ring-black/5',
      )}
    >
      <Image
        src={imagePath}
        alt={`${name}'s photo`}
        height={120}
        width={120}
        className="rounded-full"
      />
      <div className="flex flex-col gap-2 md:text-center">
        <div>
          <p className="font-medium">{position}</p>
          <p className="mb-2 mt-1 text-sm font-semibold text-contact-blue md:my-0 md:font-medium">
            {name}
          </p>
        </div>

        <div
          className={clsx('mt-2 flex md:justify-center', linkedIn && 'gap-6')}
        >
          <Link
            href={`mailto:${email}`}
            target="_blank"
            rel="norefer"
            className="md:self-center"
            title={`Email of ${name}`}
          >
            <CiMail size={24} />
          </Link>
          {linkedIn && (
            <Link
              href={linkedIn}
              target="_blank"
              rel="norefer"
              className="md:self-center"
              title={`LinkedIn profile of ${name}`}
            >
              <AiFillLinkedin size={24} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ManagementCard;

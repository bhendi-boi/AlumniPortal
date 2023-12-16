'use client';
import { Dialog } from '@headlessui/react';
import { ComponentProps, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';

import { FIRSTPASSOUTYEAR, LATESTPASSOUTYEAR } from './Directory';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { PossibleDegrees } from 'types';

const Controls = ({
  year,
  degree,
  createQueryString,
}: {
  year: number;
  degree: PossibleDegrees;
  createQueryString: (name: string, value: string) => string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const possibleYears = [];
  for (let i = FIRSTPASSOUTYEAR; i <= LATESTPASSOUTYEAR; i++) {
    possibleYears.push(i);
  }
  const possibleDegrees = [
    'B. Tech.',
    'M. Tech.',
    'Dual Degree',
    'M. Des.',
    'PhD',
  ];

  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="flex items-center border-b border-background px-5 py-4 text-secondary-text md:px-10">
      <div className="relative flex flex-1 items-center gap-4">
        <h2 className="flex-1 text-lg font-extrabold">{year}</h2>
        <div>
          {degree && (
            <span className="rounded-md bg-blue-600 px-2 py-1 text-white">
              {degree}
            </span>
          )}
        </div>
        <button
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
        >
          <BsFilter size={24} />
        </button>
        <p className="text-center">Showing 1 to 25 out of 80</p>
        <Dialog open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <Dialog.Panel className="absolute right-[20%] top-3/4 w-96 rounded-md bg-white p-4 ring-2 ring-black/5">
            <Dialog.Title className="mb-2 text-lg font-semibold">
              Choose Filters
            </Dialog.Title>
            <div className="flex flex-wrap gap-1">
              {possibleYears.map((possibleYear) => {
                return (
                  <button
                    key={possibleYear}
                    onClick={() =>
                      router.push(
                        pathname +
                          '?' +
                          createQueryString('year', possibleYear.toString()),
                      )
                    }
                    className={clsx(
                      'rounded-md  px-2 py-1 transition-colors duration-150',
                      possibleYear === year && 'bg-blue-600 text-white',
                      possibleYear !== year &&
                        'bg-secondary-background text-secondary-text',
                    )}
                  >
                    {possibleYear}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex flex-wrap gap-1">
              {possibleDegrees.map((possibleDegree) => {
                return (
                  <button
                    key={possibleDegree}
                    onClick={() =>
                      router.push(
                        pathname +
                          '?' +
                          createQueryString('degree', possibleDegree),
                      )
                    }
                    className={clsx(
                      'rounded-md  px-2 py-1 transition-colors duration-150',
                      possibleDegree === degree && 'bg-blue-600 text-white',
                      possibleDegree !== degree &&
                        'bg-secondary-background text-secondary-text',
                    )}
                  >
                    {possibleDegree}
                  </button>
                );
              })}
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>

      {/* will use this buttons to move to the next set in same year rather than next year */}
      <div className="">
        <Button onClick={() => {}}>
          <AiOutlineLeft size={24} />
        </Button>
        <Button onClick={() => {}}>
          <AiOutlineRight size={24} />
        </Button>
      </div>
    </header>
  );
};

export default Controls;

function Button({ children, ...props }: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className="rounded-full p-2 transition-colors hover:bg-zinc-200 hover:text-black active:bg-zinc-100 active:text-black"
    >
      {children}
    </button>
  );
}

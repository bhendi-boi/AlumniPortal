'use client';
import { Dialog } from '@headlessui/react';
import { ComponentProps, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import { BsFilter } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { PossibleDegrees } from 'types';
import { FIRSTPASSOUTYEAR, LATESTPASSOUTYEAR } from './Directory';
import { AnimatePresence } from 'framer-motion';

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
  const possibleYears: number[] = [];
  for (let i = FIRSTPASSOUTYEAR; i <= LATESTPASSOUTYEAR; i++) {
    possibleYears.push(i);
  }
  const possibleDegrees = [
    'B. Tech.',
    'M. Tech.',
    'Dual Degree',
    'PhD',
    'M. Des.',
  ];

  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="flex flex-col gap-2 border-b border-background px-5 py-4 text-secondary-text sm:flex-row sm:items-center md:px-10">
      <div className="relative flex flex-1 items-center gap-4">
        <h2 className="text-lg font-extrabold">{year}</h2>
        <Button
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
        >
          <BsFilter size={24} />
        </Button>
        <div>
          {degree && (
            <span className="rounded-md bg-blue-600 px-2 py-1 text-white">
              {degree}
            </span>
          )}
        </div>

        <Dialog
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          className="relative z-50"
        >
          {({ open }) => (
            <AnimatePresence mode="wait">
              {open && (
                <>
                  <motion.div
                    aria-hidden
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/30"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0.95, x: '-50%', y: '-50%' }}
                    animate={{ scale: 1, x: '-50%', y: '-50%' }}
                    exit={{ scale: 0.95, x: '-50%', y: '-50%' }}
                    className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <Dialog.Panel className="z-20 w-96 max-w-[85vw] rounded-md bg-white px-6 py-4  ring-2 ring-black/5">
                      <div className="mb-2 flex items-center">
                        <Dialog.Title className="flex-1 text-lg font-semibold">
                          Choose Filters
                        </Dialog.Title>
                        <Button onClick={() => setIsMenuOpen(false)}>
                          <GrFormClose size={24} />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {possibleYears.map((possibleYear) => {
                          return (
                            <button
                              key={possibleYear}
                              onClick={() =>
                                router.push(
                                  pathname +
                                    '?' +
                                    createQueryString(
                                      'year',
                                      possibleYear.toString(),
                                    ),
                                )
                              }
                              className={clsx(
                                'rounded-md  px-2 py-1 transition-colors duration-150',
                                possibleYear === year &&
                                  'bg-blue-600 text-white',
                                possibleYear !== year &&
                                  'bg-secondary-background text-secondary-text',
                              )}
                            >
                              {possibleYear}
                            </button>
                          );
                        })}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-1 pb-2">
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
                                possibleDegree === degree &&
                                  'bg-blue-600 text-white',
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
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          )}
        </Dialog>
      </div>

      {/* will use this buttons to move to the next set in same year rather than next year */}
      <div className="flex items-center gap-2">
        <p className="flex-1 text-sm">Showing 1 to 10 of 21</p>
        <div>
          <Button onClick={() => {}}>
            <AiOutlineLeft size={24} />
          </Button>
          <Button onClick={() => {}}>
            <AiOutlineRight size={24} />
          </Button>
        </div>
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

'use client';
import React, { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { HiArrowDown } from 'react-icons/hi2';
import clsx from 'clsx';
const Accordian = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <Disclosure as="li" className="border-b border-background">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between py-2 pr-4">
            <p className="text-xl font-medium">{question}</p>
            <HiArrowDown
              size={36}
              className={clsx(
                'rounded-full p-2 text-zinc-800 hover:bg-zinc-100',
                open && 'rotate-180 transition duration-300',
                !open && 'rotate-0 transition duration-300',
              )}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-300"
            enterFrom="transform -translate-y-2 opacity-0"
            enterTo="transform opacity-100"
            leave="transition duration-200"
            leaveFrom="transform opacity-100"
            leaveTo="transform -translate-y-2 opacity-0"
          >
            <Disclosure.Panel className="py-2 text-sm">
              {answer}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Accordian;

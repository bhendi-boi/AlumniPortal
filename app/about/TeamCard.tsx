'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { MemberData } from 'types';

const TeamCard = ({
  team,
}: {
  team: { icon: JSX.Element; name: string; members: MemberData[] };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-full w-full flex-col items-center justify-center gap-4"
      >
        {team.icon}
        <h3 className="font-lora font-medium">{team.name}</h3>
      </button>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            open={true}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <motion.div
              className="fixed inset-0 bg-black/30"
              aria-hidden="true"
            />
            <Dialog.Panel
              as={motion.div}
              initial={{
                x: 'var(--x-initial)',
                y: 'var(--y-initial)',
                scale: 'var(--scale-initial)',
                opacity: 0,
              }}
              animate={{
                x: 'var(--x-animate)',
                y: 'var(--y-animate)',
                scale: 'var(--scale-animate)',
                opacity: 1,
              }}
              exit={{
                x: 'var(--x-exit)',
                y: 'var(--y-exit)',
                scale: 'var(--scale-exit)',
                opacity: 0,
              }}
              transition={{ damping: 30 }}
              className="fixed bottom-0 left-0 h-[60%] w-full overflow-y-auto  bg-white px-8 pb-8 [--scale-animate:1] [--scale-exit:1] [--scale-initial:1]  [--x-animate:0%] [--x-exit:0%] [--x-initial:0%] [--y-animate:0%] [--y-exit:100%] [--y-initial:100%]  md:left-1/2 md:h-3/5 md:max-w-xl  md:rounded-md md:[--scale-animate:1] md:[--x-animate:-50%] md:[--x-exit:-50%] md:[--x-initial:-50%] md:[--y-animate:-40%] md:[--y-exit:-40%] md:[--y-initial:-40%] md:[--scale-initial:.95] md:[--scale-exit:.95]"
            >
              <Dialog.Title className="sticky top-0 bg-inherit pb-4 pt-6 font-lora text-lg font-bold tracking-wide">
                Meet our {team.name} team
              </Dialog.Title>
              <ul className="grid grid-cols-3 gap-4 pt-6">
                {team.members.map((member, index) => {
                  return (
                    <li
                      key={index}
                      className="flex flex-col items-center justify-center gap-4"
                    >
                      <Image
                        src={member.imagePath}
                        alt={`${member.name}'s photo`}
                        width={80}
                        height={80}
                      />
                      <p className="text-center text-xs">{member.name}</p>
                    </li>
                  );
                })}
              </ul>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamCard;

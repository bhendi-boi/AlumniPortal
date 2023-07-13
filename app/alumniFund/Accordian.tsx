'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { HiArrowDown } from 'react-icons/hi2';

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
          <Disclosure.Button className="flex items-center justify-between w-full py-2 pr-4 cursor-pointer">
            <p className="text-xl font-medium">{question}</p>
            <motion.span
              whileHover={{ backgroundColor: 'rgb(161 161 170 / 0.3)' }}
              initial={{ backgroundColor: 'transparent' }}
              animate={{ rotate: open ? 180 : 0 }}
              transition={{
                duration: 0.15,
                type: 'tween',
              }}
              className="p-2 rounded-full text-neutral-950"
            >
              <HiArrowDown size={24} />
            </motion.span>
          </Disclosure.Button>
          <AnimatePresence>
            <Disclosure.Panel
              as={motion.div}
              initial={{ y: -20, opacity: 0.2 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: -20,
                opacity: 0.2,
                transition: { duration: 0.2, type: 'tween' },
              }}
              transition={{
                duration: 0.15,
                type: 'tween',
              }}
              className="py-2 text-sm"
            >
              {answer}
            </Disclosure.Panel>
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
};

export default Accordian;

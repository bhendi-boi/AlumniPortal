'use client';
import React, { ComponentProps, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import clsx from 'clsx';

const images = [
  {
    src: '/nirf.jpg',
    alt: 'NIRF 2023 IIITDM ranking in innovation.',
    height: 500,
    width: 1600,
  },
  {
    src: '/5thInterIIITSportsMeet.png',
    alt: 'Fifth inter IIIT sports meet.',
    height: 500,
    width: 1600,
  },
  {
    src: '/usConVisit.jpg',
    alt: 'Officials from the US consulate, chennai visited IIITDM',
    height: 480,
    width: 1536,
  },
  {
    src: '/HomePageHeroSection.png',
    alt: 'Poster for MDes (IPD) 2023',
    height: 424,
    width: 1360,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (action: 'plus' | 'minus') => {
    let nextIndex;
    if (action === 'minus') {
      if (currentIndex === 0) {
        nextIndex = images.length - 1;
      } else {
        nextIndex = currentIndex - 1;
      }
    } else {
      if (currentIndex === images.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex = currentIndex + 1;
      }
    }
    setCurrentIndex(nextIndex);
  };

  return (
    <div>
      <div className="relative isolate my-auto max-h-[24rem]">
        <NavigationButton variant="left" onClick={() => handleClick('minus')}>
          <AiOutlineLeft className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </NavigationButton>
        <NavigationButton variant="right" onClick={() => handleClick('plus')}>
          <AiOutlineRight className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </NavigationButton>
        <div className="flex min-h-full items-center">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.8 }}
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.5,
              }}
              layoutId="carousel-images"
              className=""
              key={images[currentIndex].src}
            >
              <Image className="object-contain" {...images[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="my-4">
        <ul className="flex justify-center gap-4">
          {images.map((_, index) => {
            return (
              <li
                onClick={() => {
                  setCurrentIndex(index);
                }}
                className={clsx(
                  'h-3 w-3 cursor-pointer rounded-full',
                  currentIndex === index && 'bg-black',
                  currentIndex !== index && 'bg-zinc-400',
                )}
              ></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;

type NavigationButtonProps = {
  variant: 'left' | 'right';
} & ComponentProps<'button'>;

function NavigationButton({
  variant,
  children,
  ...rest
}: NavigationButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'absolute z-10 -translate-y-1/2 cursor-pointer rounded-full bg-gray-50 p-2 text-gray-900 opacity-80 hover:bg-zinc-200 hover:opacity-100 active:bg-zinc-100 active:opacity-100',
        variant === 'left' && 'left-1 top-1/2',
        variant === 'right' && 'right-1 top-1/2',
      )}
    >
      {children}
    </button>
  );
}

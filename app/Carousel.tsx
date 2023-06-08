'use client';
import React, { ComponentProps, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import clsx from 'clsx';

const images = [
  {
    src: '/nirf.jpg',
    alt: 'NIRF 2023 IIITDM place',
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
  {
    src: '/convocation.png',
    alt: 'IIITDM celebrates 10th convocation.',
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleClick('plus');
  //   }, 1000);
  //   () => clearInterval(interval);
  // }, []);

  console.log(currentIndex);
  return (
    <div className="relative isolate my-auto h-96 overflow-hidden">
      <NavigationButton variant="left" onClick={() => handleClick('minus')}>
        <AiOutlineLeft size={30} />
      </NavigationButton>
      <NavigationButton variant="right" onClick={() => handleClick('plus')}>
        <AiOutlineRight size={30} />
      </NavigationButton>
      <ul className="my-auto flex h-[400px] overflow-x-auto overflow-y-hidden pb-4">
        {images.map((image, index) => {
          if (currentIndex === index)
            return (
              <AnimatePresence>
                <motion.li
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.8 }}
                  transition={{
                    type: 'tween',
                    duration: 4,
                    ease: 'circInOut',
                  }}
                  layoutId="carousel-images"
                  className="my-auto max-w-full shrink-0 md:h-[400px]"
                  key={index}
                >
                  <Image className="object-cover" {...image} />
                </motion.li>
              </AnimatePresence>
            );
          return null;
        })}
      </ul>
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
        'absolute  z-10 -translate-y-1/2 cursor-pointer rounded-full bg-gray-50 p-2 text-gray-900 hover:bg-zinc-200 active:bg-zinc-100',
        variant === 'left' && 'left-1 top-1/2',
        variant === 'right' && 'right-1 top-1/2',
      )}
    >
      {children}
    </button>
  );
}

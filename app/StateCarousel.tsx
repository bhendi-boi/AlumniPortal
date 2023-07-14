'use client';
import React, { ComponentProps, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import clsx from 'clsx';

type Images = {
  alt_text: string;
  height: number;
  id: number;
  link: string;
  width: number;
}[];

export default function StateCarousel({ images }: { images: Images }) {
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
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleClick('plus');
    }, 5000);
    return () => clearTimeout(timeout);
  });

  return (
    <div>
      <div className="relative isolate my-auto max-h-[24rem]">
        <NavigationButton
          title="Go to Previous Image"
          variant="left"
          onClick={() => handleClick('minus')}
        >
          <AiOutlineLeft className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </NavigationButton>
        <NavigationButton
          title="Go to Next Image"
          variant="right"
          onClick={() => handleClick('plus')}
        >
          <AiOutlineRight className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </NavigationButton>
        <div className="flex min-h-full items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[currentIndex].id}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.8 }}
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.5,
              }}
              layoutId="carousel-images"
              className="skeleton overflow-hidden rounded-lg"
            >
              <Image
                className="object-contain"
                src={images[currentIndex].link}
                alt={images[currentIndex].alt_text}
                width={images[currentIndex].width}
                height={images[currentIndex].height}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="my-4">
        <ul className="flex justify-center gap-4">
          {images.map((_, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                }}
                className={clsx(
                  'relative h-3 w-3 cursor-pointer overflow-hidden rounded-full bg-zinc-400',
                )}
              >
                {index === currentIndex && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    layoutId="carousel-current-index-indicator"
                    className="absolute inset-0 bg-black"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

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

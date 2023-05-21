'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const images = [
  {
    src: '/HomePageHeroSection.png',
    alt: 'Poster for MDes (IPD) 2023',
    height: 424,
    width: 1360,
  },

  {
    src: '/convocation.png',
    alt: 'Poster for MDes (IPD) 2023',
    height: 424,
    width: 1360,
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleClick('plus');
  //   }, 1000);
  //   () => clearInterval(interval);
  // }, []);

  console.log(currentIndex);
  return (
    <div>
      <div className="relative isolate h-96 overflow-hidden">
        <button
          onClick={() => handleClick('minus')}
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-gray-50 p-2 text-gray-900 hover:bg-zinc-200"
        >
          <AiOutlineLeft size={30} />
        </button>
        <button
          onClick={() => handleClick('plus')}
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 hover:bg-zinc-200"
        >
          <AiOutlineRight size={30} />
        </button>
        <ul className="flex h-[400px] snap-x snap-mandatory overflow-x-auto overflow-y-hidden pb-4">
          {images.map((image, index) => {
            if (currentIndex === index)
              return (
                <motion.li
                  layoutId="carousel-images"
                  className="max-w-full shrink-0 snap-start snap-always"
                  key={index}
                >
                  <Image className="object-cover" {...image} />
                </motion.li>
              );
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;

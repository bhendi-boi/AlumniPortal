'use client';
import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const FIRSTPASSOUTYEAR = 2011;
const LATESTPASSOUTYEAR = 2018;

const Controls = ({
  year,
  setYear,
}: {
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}) => {
  console.log(year);

  const handleClick = (type: 'plus' | 'minus') => {
    if (type === 'plus') {
      setYear((prev) => {
        let res = (prev += 1);
        if (res > LATESTPASSOUTYEAR) {
          res = FIRSTPASSOUTYEAR;
        }
        return res;
      });
    } else {
      setYear((prev) => {
        let res = (prev -= 1);
        if (res < FIRSTPASSOUTYEAR) {
          res = LATESTPASSOUTYEAR;
        }
        return res;
      });
    }
  };
  return (
    <header className="mx-5 flex items-center border-b border-background pb-2 pt-4 text-secondary-text md:mx-10 md:pb-4 md:pt-8">
      <h2 className="flex-1 text-lg font-extrabold ">{year}</h2>
      <button
        onClick={() => handleClick('minus')}
        className="rounded-full p-2 transition-colors hover:bg-zinc-200 hover:text-black focus:bg-zinc-200 focus:text-black"
      >
        <AiOutlineLeft size={30} />
      </button>
      <button
        onClick={() => handleClick('plus')}
        className="rounded-full p-2 transition-colors hover:bg-zinc-200 hover:text-black focus:bg-zinc-200 focus:text-black"
      >
        <AiOutlineRight size={30} />
      </button>
    </header>
  );
};

export default Controls;

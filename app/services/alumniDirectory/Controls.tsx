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
    <header className="mx-5 flex items-center border-b border-background pt-4 pb-2 text-secondary-text md:mx-10 md:pb-4 md:pt-8">
      <h2 className="flex-1 text-lg font-extrabold ">{year}</h2>
      <button
        onClick={() => handleClick('minus')}
        className="rounded-full p-2 hover:bg-zinc-100 focus:bg-zinc-100"
      >
        <AiOutlineLeft size={30} />
      </button>
      <button
        onClick={() => handleClick('plus')}
        className="rounded-full p-2 hover:bg-zinc-100 focus:bg-zinc-100"
      >
        <AiOutlineRight size={30} />
      </button>
    </header>
  );
};

export default Controls;
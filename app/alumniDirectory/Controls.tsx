'use client';
import React, { ComponentProps } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';

const FIRSTPASSOUTYEAR = 2011;
const LATESTPASSOUTYEAR = 2022;

const Controls = ({
  year,
  setYear,
}: {
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}) => {
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
    <header className="flex items-center border-b border-background px-5 py-4 text-secondary-text md:px-10">
      <div className="flex flex-1 items-center gap-4">
        <h2 className="flex-1 text-lg font-extrabold">{year}</h2>
        <p className="text-center">Showing 1 to 25 out of 80</p>
        <button>
          <BsFilter size={30} />
        </button>
      </div>

      {/* will use this buttons to move to the next set in same year rather than next year */}
      <div className="">
        <Button onClick={() => handleClick('minus')}>
          <AiOutlineLeft size={30} />
        </Button>
        <Button onClick={() => handleClick('plus')}>
          <AiOutlineRight size={30} />
        </Button>
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

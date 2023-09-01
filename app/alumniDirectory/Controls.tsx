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
    <header className="mx-5 flex items-center border-b border-background pb-2 pt-4 text-secondary-text md:mx-10 md:pb-4 md:pt-8">
      <div className="flex flex-1 items-center gap-4">
        <h2 className="flex-1 text-lg font-extrabold">{year}</h2>
        <button>
          <BsFilter size={30} />
        </button>
        <input
          type="text"
          name="alumniName"
          id=""
          placeholder="Search across different years"
          className="hidden rounded-md bg-zinc-200 px-6 py-3 md:block"
        />
      </div>

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

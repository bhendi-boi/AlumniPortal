'use client';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
const Accordian = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="border-b border-zinc-400 bg-white">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-2 pr-4"
      >
        <p className="text-xl font-medium">{question}</p>
        <AiOutlinePlus
          size={30}
          className="m-2 rounded-full text-zinc-800 hover:bg-zinc-100"
        />
      </button>
      {isOpen && <p className="py-2 text-sm">{answer}</p>}
    </li>
  );
};

export default Accordian;

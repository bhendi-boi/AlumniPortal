'use client';
import React, { useState } from 'react';
import Controls from './Controls';

const Directory = () => {
  const [year, setYear] = useState(2022);
  console.log(year);
  return (
    <section
      aria-labelledby="dir"
      className="mx-auto mb-8 min-h-screen max-w-5xl rounded-lg border border-zinc-400 md:mb-16"
    >
      <h2 id="dir" className="sr-only">
        {year}'s directory
      </h2>
      {/* //! make + and - buttons work */}
      <Controls year={year} setYear={setYear} />
    </section>
  );
};

export default Directory;

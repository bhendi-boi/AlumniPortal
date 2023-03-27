import React from 'react';

const page = () => {
  return (
    <main className="grid min-h-screen place-items-center">
      <div>
        <h1 className="mb-8 text-5xl font-bold text-green-400">
          Hello world 👋
        </h1>
        <p className="text-zinc-500">
          If you found this template useful give it a star on{' '}
          <a
            target="_blank"
            rel="norefer"
            href="https://github.com/bhendi-boi/next13-tailwind-template"
            className="text-xl text-blue-600 hover:text-blue-600/80"
          >
            github
          </a>
          .
        </p>
      </div>
    </main>
  );
};

export default page;

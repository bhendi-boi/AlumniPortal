import React from 'react';

const Header = ({ title }: { title: string }) => {
  return (
    <header className="mx-5 my-8 max-w-5xl md:mx-auto">
      <h1 className="text-left text-4xl">{title}</h1>
    </header>
  );
};

export default Header;

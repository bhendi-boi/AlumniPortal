'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import NavLink from './NavLink';

import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const path = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-10 flex h-16 border-b border-neutral-400 bg-white px-5 md:px-10">
      <div className="flex flex-1 items-center gap-4">
        <Link href="https://iiitdm.ac.in" rel="norefer" target="_blank">
          <Image src={'/iiitdm.png'} alt="IIITDM Logo" width={40} height={40} />
        </Link>
        <Link href="/">
          <Image
            src={'/aa_logo.png'}
            alt="IIITDM Logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <nav className="hidden items-center gap-8 md:flex">
        <NavLink href="/" variant={path === null ? 'active' : 'primary'}>
          Home
        </NavLink>
        <NavLink
          href="/about"
          variant={path === 'about' ? 'active' : 'primary'}
        >
          About
        </NavLink>
        <NavLink
          href="/events"
          variant={path === 'events' ? 'active' : 'primary'}
        >
          Events
        </NavLink>
        <NavLink
          href="/gallery"
          variant={path === 'gallery' ? 'active' : 'primary'}
        >
          Gallery
        </NavLink>
        <NavLink
          href="/services"
          variant={path === 'services' ? 'active' : 'primary'}
        >
          Services
        </NavLink>
        <NavLink href="/fund" variant={path === 'fund' ? 'active' : 'primary'}>
          Fund
        </NavLink>
        <NavLink href="/login" variant="filled">
          Login
        </NavLink>
      </nav>
      {/* mobile nav */}
      <button
        title="Open Menu"
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        className="z-10 block md:hidden"
      >
        {isOpen ? <AiOutlineClose size={30} /> : <RxHamburgerMenu size={30} />}
      </button>
      {isOpen && (
        <>
          <ul className="absolute left-0 top-16 flex w-full flex-col gap-3 bg-white py-4 [&_li]:px-10">
            <li>
              <NavLink href="/" variant={path === null ? 'active' : 'primary'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/about"
                variant={path === 'about' ? 'active' : 'primary'}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/events"
                variant={path === 'events' ? 'active' : 'primary'}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/gallery"
                variant={path === 'gallery' ? 'active' : 'primary'}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/services"
                variant={path === 'services' ? 'active' : 'primary'}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/fund"
                variant={path === 'fund' ? 'active' : 'primary'}
              >
                Fund
              </NavLink>
            </li>
            <li>
              <NavLink href="/login" variant="filled">
                Login
              </NavLink>
            </li>
          </ul>
          {/* overlay */}
          {/* <div className='fixed inset-0 bg-black/70' /> */}
        </>
      )}
    </header>
  );
};

export default NavBar;

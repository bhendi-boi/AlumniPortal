'use client';
import React,{ useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import NavLink from './NavLink';

import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"

const NavBar = () => {
  const path = useSelectedLayoutSegment();
  const [isOpen,setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-10 flex h-16 px-5 bg-white border-b md:px-10 border-neutral-400">
      <div className="flex items-center flex-1 gap-4">
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
      <nav className="items-center hidden gap-8 md:flex">
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
      <button onClick={() => setIsOpen((prev) => !prev)} type="button" className="z-10 block md:hidden">
        {
          isOpen ? <AiOutlineClose size={30} /> : <RxHamburgerMenu size={30} />
        }
      </button>
      {
        isOpen && <>
          <ul className='absolute left-0 flex flex-col w-full gap-3 bg-white top-16 [&_li]:px-10 py-4'>
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
              <NavLink href="/fund" variant={path === 'fund' ? 'active' : 'primary'}>
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
      }
    </header >
  );
};

export default NavBar;

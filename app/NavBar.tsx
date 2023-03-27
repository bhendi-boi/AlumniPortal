'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import NavLink from './NavLink';

const NavBar = () => {
  const path = useSelectedLayoutSegment();
  return (
    <header className="sticky top-0 flex h-16 border-b border-neutral-400 px-10">
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
      <nav className="flex items-center gap-8">
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
    </header>
  );
};

export default NavBar;

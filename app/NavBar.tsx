'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Menu } from '@headlessui/react';
import NavLink from './NavLink';

import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import clsx from 'clsx';

const NavBar = () => {
  const path = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    if (!window) return;
    const handler = () => {
      if (window.scrollY !== 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
      console.log(window.scrollY);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <header
      style={{ boxSizing: 'border-box' }}
      className={clsx(
        'sticky top-0 z-10 flex h-16 border-b border-background bg-white px-5 md:px-10',
        showShadow && 'shadow',
      )}
    >
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
        <NavLink
          href="/"
          variant={path === null ? 'active' : 'primary'}
          title="Home"
        >
          Home
        </NavLink>
        <NavLink
          href="/about"
          variant={path === 'about' ? 'active' : 'primary'}
          title="About"
        >
          About
        </NavLink>
        <NavLink
          href="/events"
          variant={path === 'events' ? 'active' : 'primary'}
          title="Events"
        >
          Events
        </NavLink>
        <NavLink
          href="/gallery"
          variant={path === 'gallery' ? 'active' : 'primary'}
          title="Gallery"
        >
          Gallery
        </NavLink>
        <Services />
        <NavLink
          href="/fund"
          variant={path === 'fund' ? 'active' : 'primary'}
          title="Fund"
        >
          Fund
        </NavLink>
        <NavLink href="/login" variant="filled" title="Login (Admin Only)">
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
          {/* // TODO! make the background of navbar white when it is open */}
          {/* overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 -z-10 bg-black/70"
          />
          <ul className="absolute left-0 top-16 flex w-full flex-col gap-3 bg-white py-4 [&_li]:px-10">
            <li>
              <NavLink
                href="/"
                variant={path === null ? 'active' : 'primary'}
                title="Home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/about"
                variant={path === 'about' ? 'active' : 'primary'}
                title="About"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/events"
                variant={path === 'events' ? 'active' : 'primary'}
                title="Events"
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/gallery"
                variant={path === 'gallery' ? 'active' : 'primary'}
                title="Gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/services"
                variant={path === 'services' ? 'active' : 'primary'}
                title="Services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/fund"
                variant={path === 'fund' ? 'active' : 'primary'}
                title="Fund"
              >
                Fund
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/login"
                variant="filled"
                title="Login (Admin Only)"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </header>
  );
};

export default NavBar;

function Services() {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button className="block w-full text-xl font-medium text-black underline-offset-2 hover:underline">
            Services
          </Menu.Button>
          {open && (
            <Menu.Items
              as="ul"
              className="absolute right-0 top-8 flex min-w-[12rem] flex-col gap-2 divide-y divide-background rounded-lg border border-background bg-white px-4 py-2 text-sm"
            >
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={active ? 'text-black' : 'text-secondary-text'}
                    title="Send Query"
                    href="/services/sendQuery"
                  >
                    Send Query
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={active ? 'text-black' : 'text-secondary-text'}
                    title="Alumni Directory"
                    href="/services/alumniDirectory"
                  >
                    Alumni Directory
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={active ? 'text-black' : 'text-secondary-text'}
                    title="Alumni Achievements"
                    href="/services/alumniAchievements"
                  >
                    Alumni Achievements
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={active ? 'text-black' : 'text-secondary-text'}
                    title="Volunteer"
                    href="/services/volunteer"
                  >
                    Volunteer
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          )}
        </>
      )}
    </Menu>
  );
}

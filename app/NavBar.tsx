'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from '@headlessui/react';
import NavLink from './NavLink';

import { HiMenuAlt4 } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
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
  useEffect(() => {
    if (!window) return;
    const body = document.getElementById('body');
    if (!body) return;
    if (isOpen) body.classList.add('overflow-y-hidden');
    else body.classList.remove('overflow-y-hidden');
  }, [isOpen]);
  return (
    <header
      style={{ boxSizing: 'border-box' }}
      className={clsx(
        'sticky top-0 z-10 flex h-16 border-b border-background bg-white px-5 md:px-10',
        showShadow && 'shadow-lg',
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
      <Menu>
        <Menu.Button
          className="md:hidden"
          title="Menu button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {({ open }) =>
            open ? <GrFormClose size={30} /> : <HiMenuAlt4 size={30} />
          }
        </Menu.Button>
        <AnimatePresence>
          {isOpen && (
            <Menu.Items
              static
              onClick={() => setIsOpen(false)}
              className="absolute right-0 top-16 z-10 h-screen w-full overflow-hidden bg-neutral-950/30"
            >
              <motion.ul
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 1 }}
                transition={{ type: 'tween', duration: 0.25 }}
                className="absolute right-0 top-0 flex h-screen w-2/3 flex-col gap-4 bg-background p-6"
              >
                <Menu.Item as="li" className="">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href="/"
                    variant={path === null ? 'active' : 'primary'}
                    title="Home"
                  >
                    Home
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href="/about"
                    variant={path === 'about' ? 'active' : 'primary'}
                    title="About"
                  >
                    About
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href="/events"
                    variant={path === 'events' ? 'active' : 'primary'}
                    title="Events"
                  >
                    Events
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href="/gallery"
                    variant={path === 'gallery' ? 'active' : 'primary'}
                    title="Gallery"
                  >
                    Gallery
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href="/services"
                    variant={path === 'services' ? 'active' : 'primary'}
                    title="Services"
                  >
                    Services
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href="/fund"
                    variant={path === 'fund' ? 'active' : 'primary'}
                    title="Fund"
                  >
                    Fund
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href="/login"
                    variant="filled"
                    title="Login (Admin Only)"
                  >
                    Login
                  </NavLink>
                </Menu.Item>
              </motion.ul>
            </Menu.Items>
          )}
        </AnimatePresence>
      </Menu>
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

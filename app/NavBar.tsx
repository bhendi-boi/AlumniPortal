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
        'sticky top-0 z-10 flex h-16 justify-between border-b border-background bg-white px-5 md:px-10',
        showShadow && 'shadow-lg',
      )}
    >
      <div className="flex items-center gap-4">
        <Link href="https://iiitdm.ac.in" rel="norefer" target="_blank">
          <Image src={'/iiitdm.png'} alt="IIITDM Logo" width={40} height={40} />
        </Link>
        <Link href="/">
          <Image
            priority
            src={'/aa_logo.png'}
            alt="IIITDM Logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <nav className="items-center justify-end flex-1 hidden gap-6 md:flex">
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
        <NavLink
          href="/alumniDirectory"
          variant={path === 'alumniDirectory' ? 'active' : 'primary'}
          title="Alumni Directory"
        >
          Directory
        </NavLink>
        <NavLink
          href="/newsroom"
          variant={path === 'newsroom' ? 'active' : 'primary'}
          title="Newsroom"
        >
          Newsroom
        </NavLink>
        <NavLink
          href="/contact"
          variant={path === 'contact' ? 'active' : 'primary'}
          title="Newsroom"
        >
          Contact us
        </NavLink>
        <NavLink
          href="/alumniFund"
          variant={path === 'alumniFund' ? 'active' : 'primary'}
          title="Alumni Fund"
        >
          Alumni Fund
        </NavLink>
      </nav>
      {/* mobile nav */}
      <Menu>
        <Menu.Button
          className="md:hidden"
          title="Menu button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <GrFormClose size={30} /> : <HiMenuAlt4 size={30} />}
        </Menu.Button>
        <AnimatePresence>
          {isOpen && (
            <Menu.Items
              static
              onClick={() => setIsOpen(false)}
              className="absolute right-0 z-10 w-full h-screen overflow-hidden top-16 bg-neutral-950/30"
            >
              <motion.ul
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 1 }}
                transition={{ type: 'tween', duration: 0.25 }}
                className="absolute top-0 right-0 flex flex-col w-2/3 h-screen gap-4 p-6 bg-background"
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
                    href="/alumniDirectory"
                    variant={path === 'alumniDirectory' ? 'active' : 'primary'}
                    title="Alumni Directory"
                  >
                    Directory
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href="/newsroom"
                    title="Newsroom"
                  >
                    Newsroom
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href="/contact"
                    title="Contact"
                  >
                    Contact
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href="/alumniFund"
                    title="Alumni Fund"
                  >
                    Alumni Fund
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

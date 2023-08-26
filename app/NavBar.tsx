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
      className={clsx(
        'z-10 flex h-16 items-center border-b border-background bg-white px-5 md:h-52 md:flex-col md:items-stretch md:px-10 md:pt-5',
        showShadow && 'shadow-lg',
      )}
    >
      <div className="flex flex-1 items-center gap-4 md:gap-0">
        <Link href="https://iiitdm.ac.in" rel="norefer" target="_blank">
          <Image
            className="w-10 md:w-24"
            src={'/iiitdm.png'}
            alt="IIITDM Logo"
            width={90}
            height={90}
          />
        </Link>
        <Link href="/">
          <Image
            priority
            className="block md:hidden"
            src={'/aa_logo.png'}
            alt="Alumni Affairs IIITDM Logo"
            width={40}
            height={40}
          />
        </Link>
        <Link href="/">
          <Image
            priority
            className="hidden md:block"
            src={'/logo_longclg2.png'}
            alt="Alumni Affairs IIITDM Logo"
            width={400}
            height={400}
          />
        </Link>
      </div>
      <nav className="hidden flex-1 flex-wrap items-center justify-between gap-4 px-4 md:flex">
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
          Contact Us
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

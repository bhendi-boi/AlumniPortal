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
import { LATESTPASSOUTYEAR } from './alumniDirectory/Directory';

const NavBar = () => {
  const path = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);
  // ? showShadow is also used to toggle b/w showing logo + navbar and showing only navbar
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    if (!window) return;
    const handler = () => {
      if (window.scrollY >= 300) {
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
    <>
      <header
        className={clsx(
          'sticky top-0 z-10 flex h-16 items-center justify-center border-b bg-white px-5 md:static  md:h-auto  md:flex-col md:items-stretch md:pt-5',
          showShadow && 'shadow-lg md:shadow-none',
        )}
      >
        <div className="z-20 mx-auto flex w-full max-w-7xl flex-1 items-center gap-4 md:gap-0">
          <Link href="/" className="flex shrink-0 gap-4 md:hidden">
            <Image
              priority
              src={'/aa_logo.png'}
              alt="Alumni Affairs IIITDM Logo"
              width={40}
              height={40}
            />
            <h2 className="font-lora text-lg font-bold tracking-wider md:hidden">
              Alumni Affairs IIITDM
            </h2>
          </Link>
          <Link href="/" className="hidden md:block">
            <h2 className="font-lora text-lg font-bold tracking-wider md:hidden">
              Alumni Affairs IIITDM
            </h2>
            <Image
              priority
              src={'/logo_longclg2.png'}
              alt="Alumni Affairs IIITDM Logo"
              width={619}
              height={180}
              className="aspect-[1400/419]"
            />
          </Link>
          <Image
            src={'/Insignia.png'}
            alt="IIITDM Logo"
            width={180}
            height={180}
            className="ml-auto hidden md:block"
          />
        </div>

        {!showShadow && (
          <div className="mx-auto w-full max-w-7xl">
            <motion.nav
              key="navbar"
              initial={{ y: '0', opacity: 1 }}
              exit={{
                y: '-10vh',
                opacity: 0,
              }}
              className={clsx(
                'hidden flex-1 flex-wrap items-center justify-between gap-4 px-4 py-4',
                !showShadow && 'md:flex',
              )}
            >
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
              {/* <NavLink
                href={`/alumniDirectory?year=${LATESTPASSOUTYEAR}`}
                variant={path === 'alumniDirectory' ? 'active' : 'primary'}
                title="Alumni Directory"
              >
                Directory
              </NavLink> */}
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
                title="Contact Us"
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
            </motion.nav>
          </div>
        )}

        {/* mobile nav */}
        <Menu>
          <Menu.Button
            className="z-20 md:hidden"
            title="Menu button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <GrFormClose size={30} /> : <HiMenuAlt4 size={30} />}
          </Menu.Button>
          <AnimatePresence>
            {isOpen && (
              <Menu.Items
                static
                as={motion.ul}
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 1 }}
                transition={{ damping: 20, stiffness: 400 }}
                className="absolute left-0 top-16 z-10 flex h-screen w-full flex-col gap-6 overflow-hidden bg-white p-6"
                onClick={() => setIsOpen(false)}
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
                {/* <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href={`/alumniDirectory?year=${LATESTPASSOUTYEAR}`}
                    variant={path === 'alumniDirectory' ? 'active' : 'primary'}
                    title="Alumni Directory"
                  >
                    Directory
                  </NavLink>
                </Menu.Item> */}
                <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href="/newsroom"
                    variant={path === 'newsroom' ? 'active' : 'primary'}
                    title="Newsroom"
                  >
                    Newsroom
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    href="/contact"
                    variant={path === 'contact' ? 'active' : 'primary'}
                    title="Contact Us"
                  >
                    Contact
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="li">
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    variant={path === 'alumniFund' ? 'active' : 'primary'}
                    href="/alumniFund"
                    title="Alumni Fund"
                  >
                    Alumni Fund
                  </NavLink>
                </Menu.Item>
              </Menu.Items>
            )}
          </AnimatePresence>
        </Menu>
      </header>

      {showShadow && (
        <motion.nav
          initial={{ y: '-10vh', opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut' }}
          key="navbar"
          className={clsx(
            'sticky top-0 z-10 hidden bg-white',

            showShadow && 'shadow-lg md:flex',
          )}
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-10 py-4">
            {' '}
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
            {/* <NavLink
              href={`/alumniDirectory?year=${LATESTPASSOUTYEAR}`}
              variant={path === 'alumniDirectory' ? 'active' : 'primary'}
              title="Alumni Directory"
            >
              Directory
            </NavLink> */}
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
              title="Contact Us"
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
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default NavBar;

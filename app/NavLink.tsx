'use client';
import React from 'react';
import Link, { LinkProps } from 'next/link';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

const link = cva('link', {
  variants: {
    variant: {
      primary: [
        'text-black font-medium text-xl sm:text-base  lg:text-xl inline-block w-full sm:w-auto',
      ],
      filled: [
        'bg-nav-blue text-white font-medium text-xl px-6 py-1.5 rounded-lg w-full block text-center',
      ],
      active: [
        'text-nav-blue font-medium text-xl sm:text-base lg:text-xl inline-block relative',
      ],
      cardActive: [
        'text-nav-blue underline underline-offset-4 font-medium text-sm',
      ],
      newsroom: ['flex flex-col px-5 py-3 md:flex-row'],
      activities: ['flex items-center gap-4 px-5 py-3'],
      eventsRegister: [
        'bg-button-green rounded-full py-3 font-medium text-white text-sm px-12 hover:bg-opacity-80 active:bg-opacity-100 text-center',
      ],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface NavLinkProps extends LinkProps, VariantProps<typeof link> {
  children: React.ReactNode;
  title: string;
}

const NavLink = ({ children, variant, title, ...restProps }: NavLinkProps) => {
  return (
    <Link
      // ?  _self is the default value for target attribute
      target={variant === 'eventsRegister' ? '_blank' : '_self'}
      {...restProps}
      title={title}
      className={link({ variant })}
    >
      {children}
      {variant === 'active' && (
        <motion.span
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 40, stiffness: 300 }}
          className="absolute -bottom-[0.125rem] left-0 h-0.5 w-full bg-nav-blue md:inline"
          layoutId="nav-link-underline"
        />
      )}
    </Link>
  );
};

export default NavLink;

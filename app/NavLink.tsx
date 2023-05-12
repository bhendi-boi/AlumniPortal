'use client';
import React from 'react';
import Link, { LinkProps } from 'next/link';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

const link = cva('link', {
  variants: {
    variant: {
      primary: ['text-black font-medium text-xl w-full block'],
      filled: [
        'bg-nav-blue text-white font-medium text-xl px-6 py-1.5 rounded-lg w-full block text-center',
      ],
      active: ['text-nav-blue font-medium text-xl w-full block relative'],
      cardActive: [
        'text-nav-blue underline underline-offset-4 font-medium text-sm w-full block',
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
    <Link {...restProps} title={title} className={link({ variant })}>
      {children}
      {variant === 'active' && (
        <motion.span
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 40, stiffness: 300 }}
          className="absolute -bottom-[0.125rem] left-0 hidden h-0.5 w-full bg-nav-blue md:inline"
          layoutId="nav-link-underline"
        />
      )}
    </Link>
  );
};

export default NavLink;

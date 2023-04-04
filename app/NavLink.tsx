import React from 'react';
import Link, { LinkProps } from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const link = cva('link', {
  variants: {
    variant: {
      primary: [
        'text-black hover:underline underline-offset-2 font-medium text-xl w-full block',
      ],
      filled: [
        'bg-nav-blue text-white font-medium text-xl px-6 py-1.5 rounded-lg w-full block text-center',
      ],
      active: [
        'text-nav-blue underline underline-offset-2 font-medium text-xl w-full block',
      ],
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
    </Link>
  );
};

export default NavLink;

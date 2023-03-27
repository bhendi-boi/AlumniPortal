import React from 'react';
import Link, { LinkProps } from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const link = cva('link', {
  variants: {
    variant: {
      primary: [
        'text-black hover:underline underline-offset-2 font-medium text-xl',
      ],
      filled: [
        'bg-nav-blue text-white font-medium text-xl px-6 py-1.5 rounded-lg',
      ],
      active: [
        'text-nav-blue hover:underline underline-offset-2 font-medium text-xl',
      ],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface NavLinkProps extends LinkProps, VariantProps<typeof link> {
  children: React.ReactNode;
}

const NavLink = ({ children, variant, ...restProps }: NavLinkProps) => {
  return (
    <Link {...restProps} className={link({ variant })}>
      {children}
    </Link>
  );
};

export default NavLink;

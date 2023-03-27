import React from 'react';
import { Inter } from 'next/font/google';
import NavBar from './NavBar';
import '../styles/globals.css';

const inter = Inter({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--Inter',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alumni Portal | IIITDM</title>
      </head>
      <body className={`bg-background ${inter.variable} font-inter`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

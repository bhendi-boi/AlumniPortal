import React from 'react';
import { Inter } from 'next/font/google';
import NavBar from './NavBar';
import '../styles/globals.css';
import Footer from './Footer';

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
        {/* // TODO add meta description  */}
        <meta name="desciption" content="" />
        <title>Alumni Portal | IIITDM</title>
      </head>
      <body className={`bg-white ${inter.variable} font-inter`}>
        <NavBar />
        <main className="mx-auto min-h-screen max-w-7xl px-5 md:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

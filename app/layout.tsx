import { Analytics } from '@vercel/analytics/react';
import { Inter, Lora } from 'next/font/google';
import NavBar from './NavBar';
import Footer from './Footer';
import NextTopLoader from 'nextjs-toploader';
import '../styles/globals.css';

const inter = Inter({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--Inter',
});
const lora = Lora({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--Lora',
});

export const metadata = {
  title: {
    template: '%s | Alumni Portal',
    absolute: 'Home | Alumni Portal',
  },
  metadataBase: new URL('https://alumniportal.vercel.app'),
  description:
    'The Alumni Portal allows alumni to connect with each other, stay up-to-date on school news, and find resources and opportunities.',
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" type="image/x-icon" href="/aa_logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="6c9gocG88EG2X8AXFauiCcylOqRUISBKkSdmh-V62Lg"
        />
      </head>
      <body
        id="body"
        className={`bg-white ${inter.variable} ${lora.variable} font-inter`}
      >
        <NextTopLoader color="#123262" showSpinner={false} />
        <NavBar />
        <main className="mx-auto min-h-screen max-w-7xl px-5 md:px-10">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

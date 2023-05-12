import { Inter } from 'next/font/google';
import NavBar from './NavBar';
import Footer from './Footer';
import '../styles/globals.css';
import { openGraph } from './shared-metadata';

const inter = Inter({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--Inter',
});

export const metadata = {
  title: {
    template: '%s | Alumni Portal',
    absolute: 'Home | Alumni Portal',
  },
  description: 'Welcome to Alumni Portal, IIITDM where alumni can ....',
  openGraph: {
    ...openGraph,
  },
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body id="body" className={`bg-white ${inter.variable} font-inter`}>
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

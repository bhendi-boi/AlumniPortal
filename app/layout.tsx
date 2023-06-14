import { Inter } from 'next/font/google';
import NavBar from './NavBar';
import Footer from './Footer';
import '../styles/globals.css';

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
  description:
    'The Alumni Portal allows alumni to connect with each other, stay up-to-date on school news, and find resources and opportunities.',
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
        <main className="min-h-screen px-5 mx-auto max-w-7xl md:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

import Header from 'app/Header';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header title="Events" link="/events" />
      {children}
    </>
  );
};

export default layout;

import Header from 'app/Header';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header title="Newsroom" link="/newsroom" />
      {children}
    </>
  );
};

export default layout;

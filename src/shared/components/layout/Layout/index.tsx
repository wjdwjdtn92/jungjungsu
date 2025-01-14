import { ReactNode } from 'react';

import Main from '../Main';
import Header from '../Header';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <Header />
      <Main>{children}</Main>
    </div>
  );
}

export default Layout;

import { ReactNode } from 'react';

function Main({ children }: { children: ReactNode }) {
  return (
    <main className="container mx-auto flex justify-center px-2.5 py-4">
      {children}
    </main>
  );
}

export default Main;
